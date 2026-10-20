const courseList = [
  ["第1回", "心臓移植と免疫の基礎", "免疫のしくみ、拒絶反応の全体像を学ぶ。"],
  ["第2回", "主要な免疫抑制剤", "CNI、ミコフェノール酸系製剤、ステロイドの役割と副作用。"],
  ["第3回", "TDMと薬剤相互作用", "採血・服薬時刻、血中濃度、相互作用の確認。"],
  ["第4回", "感染症の予防と対応", "CMV、PJPなどの感染リスクと観察。"],
  ["第5回", "拒絶反応の基礎", "ACR、AMR、心筋生検、DSA、心エコー。"],
  ["第6回", "長期管理と副作用", "腎機能、代謝、CAV、悪性腫瘍など。"],
  ["第7回", "相互作用と検査値の読み方", "症状、検査値、服薬状況を合わせて考える。"],
  ["第8回", "服薬支援と患者教育", "アドヒアランス、ティーチバック、相談行動。"],
  ["第9回", "総合症例演習", "臨床状況から確認事項と報告内容を整理する。"],
  ["第10回", "総まとめ", "薬剤、拒絶反応、感染症、看護観察をつなげる。"]
];

const drugData = [
  { term: "タクロリムス", aliases: "tacrolimus CNI トラフ", body: "T細胞活性化を抑えるカルシニューリン阻害薬。腎機能、血中濃度、電解質、血糖、振戦などを確認する。相互作用や下痢などで濃度が変化することがある。" },
  { term: "シクロスポリン", aliases: "cyclosporine CNI", body: "カルシニューリン阻害薬。腎機能、血圧、電解質、血中濃度、歯肉増殖や多毛などを確認する。" },
  { term: "ミコフェノール酸系製剤", aliases: "セルセプト mycophenolate MMF", body: "リンパ球の増殖を抑える。下痢などの消化器症状、血算、感染徴候を確認する。下痢は感染症の可能性も考える。" },
  { term: "ステロイド", aliases: "プレドニゾロン prednisolone", body: "免疫・炎症反応を抑える。血糖、感染徴候、骨・筋肉、睡眠や気分の変化に注意し、自己判断で急に中断しない。" },
  { term: "DSA", aliases: "ドナー特異的抗体 抗体関連型拒絶反応 AMR", body: "ドナーに対する特異的抗体。陽性だけで抗体関連型拒絶反応が確定するわけではなく、推移、心筋生検、心機能、臨床経過と合わせて評価する。" },
  { term: "CMV", aliases: "サイトメガロウイルス 感染症", body: "移植後に問題となるウイルス感染症の一つ。症状、血液検査、施設の予防・監視方針を確認する。" },
  { term: "TDM", aliases: "薬物血中濃度モニタリング トラフ", body: "薬物血中濃度を測定し、効果と毒性のバランスを確認する。採血時刻と服薬時刻、処方変更、相互作用、臨床症状を合わせて解釈する。" }
];

const conditions = {
  title: "拒絶反応・感染症",
  html: `<h3>拒絶反応を考えるとき</h3>
    <ul><li>症状、心機能、心電図、心エコー、心筋生検、DSAの推移を総合する。</li>
    <li>DSA陽性だけでAMRと断定しない。</li><li>心エコーに明らかな変化がなくても、拒絶反応を完全には否定できない。</li></ul>
    <h3>感染症を考えるとき</h3>
    <ul><li>発熱が目立たない場合もある。咳、呼吸困難、SpO₂低下、下痢、創部の変化などを確認する。</li>
    <li>感染症と拒絶反応の両方を鑑別に挙げ、移植チームへ相談する。</li></ul>
    <p class="note">これは学習用の要約です。緊急時は施設の手順に従い、移植チームへ速やかに連絡してください。</p>`
};

const quiz = {
  title: "症例問題・復習",
  html: `<h3>問題：タクロリムスの血中濃度上昇とクレアチニン上昇、振戦が見られます。</h3>
    <p>新しく抗真菌薬が開始されていました。適切な初期対応は？</p>
    <div class="quiz-options">
      <button class="quiz-option" data-answer="a">A. 拒絶反応と判断して免疫抑制を強化する</button>
      <button class="quiz-option" data-answer="b">B. 服薬・採血時刻、併用薬、腎機能などを確認し、移植チームに報告する</button>
      <button class="quiz-option" data-answer="c">C. 自己判断でタクロリムスを中止する</button>
    </div>
    <div id="quiz-feedback" aria-live="polite"></div>
    <p class="note">正解はBです。相互作用や採血時刻を確認し、患者の状態と検査値を合わせて報告します。自己判断で休薬・増減しません。</p>`
};

const panelTitle = document.getElementById("panel-title");
const panelBody = document.getElementById("panel-body");

function showPanel(title, html) {
  panelTitle.textContent = title;
  panelBody.innerHTML = html;
  panelBody.scrollIntoView({ behavior: "smooth", block: "start" });
  panelBody.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => {
      const feedback = document.getElementById("quiz-feedback");
      feedback.className = "result-item";
      feedback.textContent = btn.dataset.answer === "b"
        ? "正解です。相互作用、服薬・採血時刻、腎機能などを確認し、移植チームに報告します。"
        : "もう一度考えてみましょう。薬剤の自己判断による中止・増減は避け、原因を確認して移植チームに報告します。";
    });
  });
}

document.querySelectorAll("[data-target]").forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;
    if (target === "courses") {
      showPanel("学習講座", "<ul>" + courseList.map(c => `<li><strong>${c[0]}：${c[1]}</strong><br>${c[2]}</li>`).join("") + "</ul><p class='note'>この版では講座一覧を表示しています。各回の本文は、確認した資料に基づいて順番に追加していきます。</p>");
    } else if (target === "drugs") {
      showPanel("薬剤リファレンス", "<ul>" + drugData.slice(0,4).map(d => `<li><strong>${d.term}</strong><br>${d.body}</li>`).join("") + "</ul>");
    } else if (target === "conditions") {
      showPanel(conditions.title, conditions.html);
    } else if (target === "quiz") {
      showPanel(quiz.title, quiz.html);
    } else if (target === "saved") {
      showPanel("ブックマーク・メモ", "<p>スターター版では、まず画面構成を確認できます。次の開発段階で、端末内に保存するメモ・ブックマーク機能を追加します。</p><p class='note'>保存する情報は個人学習用の内容に限り、患者を特定できる情報は入力しないでください。</p>");
    }
  });
});

function searchTerms() {
  const query = document.getElementById("search-input").value.trim().toLowerCase();
  const results = document.getElementById("search-results");
  if (!query) {
    results.innerHTML = "<div class='result-item'>検索したい用語を入力してください。</div>";
    return;
  }
  const matches = drugData.filter(d => (d.term + " " + d.aliases + " " + d.body).toLowerCase().includes(query));
  results.innerHTML = matches.length
    ? matches.map(d => `<article class="result-item"><strong>${d.term}</strong><p>${d.body}</p></article>`).join("")
    : "<div class='result-item'>該当する用語が見つかりません。別のキーワードを試してください。</div>";
}
document.getElementById("search-button").addEventListener("click", searchTerms);
document.getElementById("search-input").addEventListener("keydown", e => { if (e.key === "Enter") searchTerms(); });
