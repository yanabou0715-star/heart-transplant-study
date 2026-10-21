// 通信できるときは公開中の教材を確認し、通信できないときは保存済みの教材を使う。
const CACHE_NAME = "transplant-study-v13";
const APP_FILES = ["./index.html", "./styles.css", "./app.js", "./manifest.json", "./courses-immunity.json", "./courses-heart.json", "./courses-acute.json"];
const APP_BASE = new URL(self.registration.scope);
const APP_URLS = APP_FILES.map(path => new URL(path, APP_BASE).href);
const INDEX_URL = APP_URLS[0];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // ブラウザの古いHTTPキャッシュから教材を取り込まない。
    await cache.addAll(APP_URLS.map(url => new Request(url, { cache: "reload" })));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    // このアプリの旧版だけを削除する。メモを保存するlocalStorageは操作しない。
    await Promise.all(names.filter(name =>
      /^transplant-study-v\d+$/.test(name) && name !== CACHE_NAME
    ).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

async function readSaved(url) {
  try {
    const cache = await caches.open(CACHE_NAME);
    return await cache.match(url);
  } catch (error) {
    return undefined;
  }
}

async function loadAppFile(request, key) {
  let response;
  try {
    response = await fetch(request, { cache: "reload" });
  } catch (error) {
    return (await readSaved(key)) || Response.error();
  }

  if (response.status === 200) {
    // 保存が失敗しても、取得できた画面は表示する。
    try {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(key, response.clone());
    } catch (error) {
      // オンライン表示を続ける。保存済みのメモには影響しない。
    }
    return response;
  }

  // 一時的な公開エラー時も、正常に保存できた直前の教材を利用する。
  return (await readSaved(key)) || response;
}

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== APP_BASE.origin) return;
  // クエリ付きのアプリ起動でも同じ教材を利用する。
  url.search = "";
  url.hash = "";
  const key = url.href === APP_BASE.href ? INDEX_URL : url.href;
  // 外部の出典ページや他のアプリ、教材以外の通信は処理しない。
  if (!APP_URLS.includes(key)) return;
  // JSやCSSが取得できないときにHTMLを代わりに返さない。
  event.respondWith(loadAppFile(event.request, key));
});
