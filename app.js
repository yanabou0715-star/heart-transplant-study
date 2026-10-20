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
   {
    term: "タクロリムス",
    aliases: "tacrolimus CNI トラフ",
    body: [
      "<strong>【学習用】</strong>心臓移植後の学習のための要約です。投与量・血中濃度目標・処方変更は、患者の状態と施設の方針に基づき移植チームが判断します。",
      "<strong>1. 作用</strong><br>カルシニューリン阻害薬（CNI）。T細胞内の情報伝達を抑え、IL-2などのサイトカイン産生を抑制することで、拒絶反応を抑えます。",
      "<strong>2. 主な副作用</strong><br>腎障害、高カリウム血症、低マグネシウム血症、高血糖・糖尿病、高血圧、振戦など。重大な副作用として重い感染症、中枢神経系障害、心障害などにも注意します。長期管理では悪性腫瘍のリスクにも留意します。すべての副作用を網羅した一覧ではありません。",
      "<strong>3. 観察項目</strong><br>血中濃度とその推移、クレアチニン・BUNなどの腎機能、尿量、K・Mg、血糖、血圧、振戦・頭痛などの神経症状、感染徴候を確認します。服薬状況、併用薬、下痢・嘔吐などの体調変化も記録し、検査値と症状を合わせて報告します。",
      "<strong>4. TDM（血中濃度モニタリング）</strong><br>全血中濃度を用いて、拒絶反応を抑える効果と副作用のリスクを評価します。トラフは次の服薬直前の濃度です。製剤名・服薬回数・最終服薬時刻・採血時刻を確認し、服薬後の採血をトラフとして扱わないようにします。採血日の服薬は施設からの指示に従います。目標値は移植後の時期、併用薬、副作用などで異なり、一律には示しません。",
      "<strong>5. 相互作用</strong><br>主にCYP3A4・CYP3A5で代謝されます。ボリコナゾールなどのアゾール系抗真菌薬やクラリスロマイシンなどで血中濃度が上昇することがあります。グレープフルーツジュース、セント・ジョーンズ・ワート含有食品、カンナビジオール（CBD）含有製品にも注意が必要です。併用禁忌もあるため、薬や食品・サプリメントの追加・中止時は医師・薬剤師に確認します。",
      "<strong>6. 患者指導</strong><br>処方された製剤・量・時刻を守り、自己判断で中止・増減・製剤変更をしません。飲み忘れても2回分を一度に飲まず、対応はあらかじめ移植チームに確認します。他院の受診や市販薬・サプリメントの購入時には、服用中であることを伝えます。発熱、尿量減少、強いふるえ、続く下痢・嘔吐などは速やかに相談し、けいれん・意識障害・強い呼吸困難などは緊急対応が必要です。",
      "<strong>7. 出典</strong><br><a href='https://www.pmda.go.jp/PmdaSearch/iyakuDetail/800126_3999014M1022_3_42' target='_blank' rel='noopener noreferrer'>PMDA：プログラフカプセル0.5mg／1mg 電子添文（2026年6月改訂）</a><br><a href='https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999014M1022_3?user=1' target='_blank' rel='noopener noreferrer'>PMDA：製品情報・患者向医薬品ガイド</a><br>資料確認日：2026年10月20日。製剤によって用法が異なるため、実際に使用する製剤の最新資料を確認してください。"
    ].join("<br><br>")
  },
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
      showPanel(
     "学習講座",
     "<p>講座のタイトルを押すと内容が開きます。もう一度押すと閉じます。</p>" +
     courseList.map(c => `
       <details class="result-item">
         <summary style="cursor: pointer; padding: 8px 0;">
           <strong>${c[0]}：${c[1]}</strong>
         </summary>
         <p>${c[2]}</p>
         ${c[3] || "<p class='note'>講座本文は、これから追加します。</p>"}
       </details>
     `).join("")
   );
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
