// 教材本文を分野別JSONに分け、講座IDで学習記録を引き継ぐ。
const COURSE_FILES = ["./courses-immunity.json", "./courses-heart.json", "./courses-acute.json"];
let courseFields = [];
let courseEntries = [];
let courseList = [];
let courseIds = [];
let selectedCourseField = "immunity";
let courseDataReady = false;

function validateCourseFields(fields) {
  const fieldIds = new Set();
  const ids = new Set();
  for (const field of fields) {
    if (!field || field.schemaVersion !== 1 || typeof field.id !== "string" ||
        !/^[a-z0-9-]+$/.test(field.id) || fieldIds.has(field.id) ||
        typeof field.title !== "string" || typeof field.description !== "string" ||
        !Array.isArray(field.courses) || !field.courses.length) throw new Error("Invalid field");
    fieldIds.add(field.id);
    for (const course of field.courses) {
      if (!course || typeof course.id !== "string" || !/^[a-z0-9][a-z0-9-]{0,79}$/.test(course.id) || ids.has(course.id) ||
          ![course.label, course.title, course.summary, course.html].every(value => typeof value === "string" && value.length > 0) ||
          (course.keywords !== undefined && typeof course.keywords !== "string")) throw new Error("Invalid course");
      ids.add(course.id);
    }
  }
  const legacy = fields.find(field => field.id === "immunity");
  if (!legacy || !Array.from({ length: 10 }, (_, index) => "course-" + (index + 1))
      .every(id => legacy.courses.some(course => course.id === id))) throw new Error("Missing original courses");
  return fields;
}

async function loadCourseData() {
  courseDataReady = false;
  showPanel("教材を読み込んでいます", "<p>学習内容を準備しています。</p>");
  try {
    const fields = validateCourseFields(await Promise.all(COURSE_FILES.map(async path => {
      const response = await fetch(path, { cache: "no-cache" });
      if (!response.ok) throw new Error("Course file unavailable");
      return response.json();
    })));
    // すべての教材を検証してから画面と記録の対応表を更新する。
    courseFields = fields;
    courseEntries = fields.flatMap(field => field.courses.map(course => ({
      id: course.id, fieldId: field.id, fieldTitle: field.title,
      course: [course.label, course.title, course.summary, course.html],
      keywords: course.keywords || ""
    })));
    courseList = courseEntries.map(entry => entry.course);
    courseIds = courseEntries.map(entry => entry.id);
    try {
      studyState = parseStudyState(localStorage.getItem(STUDY_STORAGE_KEY));
      studyStorageBlocked = false;
      studyStorageError = "";
    } catch (error) {
      studyStorageBlocked = true;
      studyStorageError = "学習記録を読み取れませんでした。既存の記録を保護するため保存を停止しています。ブラウザの保存設定を確認してください。講座は引き続き読めます。";
    }
    courseDataReady = true;
    const courseSummary = courseFields.map(field => `${escapeStudyText(field.title)}（${field.courses.length}講座）`).join("、");
    showPanel("はじめに", `<p>「学習講座」で分野を選んでください。${courseSummary}を学べます。</p><p>講座の末尾で学習済み・ブックマーク・メモを記録できます。用語検索から講座も探せます。</p><p class="note">個人学習用です。診療判断は最新の資料、施設の手順と移植チームの指示に従ってください。教材版：2026年10月21日・分野別講座版・移植特有の病態・管理の目的に沿った22講座改訂版。</p>`);
    return true;
  } catch (error) {
    // 読込失敗時にはlocalStorageへ書き込まない。
    showPanel("教材を読み込めませんでした", "<p>通信状態を確認し、公開更新の完了後に再試行してください。保存済みの学習記録は変更していません。</p><button type='button' class='study-button' data-study-retry='true'>教材を読み直す</button>");
    return false;
  }
}

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
  {
    term: "シクロスポリン",
    aliases: "cyclosporine ciclosporin CNI ネオーラル サンディミュン トラフ C0 C2",
    body: [
      "<strong>【学習用】</strong>個別の投与量・検査目標・処方変更は、最新の資料と患者の状態に基づき移植チームが判断します。副作用・相互作用は代表例です。",
      "<strong>1. 作用</strong><br>カルシニューリン阻害薬（CNI）。T細胞の活性化とIL-2などの産生を抑え、拒絶反応を予防します。",
      "<strong>2. 主な副作用</strong><br>腎障害、高血圧、高K・低Mg、振戦、多毛、歯肉肥厚（歯肉増殖）など。重い感染症や神経症状、悪性腫瘍にも注意します。",
      "<strong>3. 観察項目</strong><br>腎機能・尿量、血圧、K・Mg、肝機能、血算、血中濃度、感染徴候、ふるえ、歯肉の変化を確認します。服薬状況と併用薬も合わせて報告します。",
      "<strong>4. TDM（血中濃度モニタリング）</strong><br>服薬直前のC0（トラフ）を基本に、指示された採血条件を確認します。選択された患者では服薬2時間後のC2を用いることもありますが、C0と混同しません。製剤・服薬・採血時刻を記録し、目標値は一律に示しません。",
      "<strong>5. 相互作用</strong><br>アゾール系抗真菌薬などで濃度が上がり、リファンピシンなどで下がることがあります。グレープフルーツジュースやセント・ジョーンズ・ワートにも注意。タクロリムス（外用剤を除く）との併用は禁忌で、一部のスタチンにも併用禁忌があります。追加・中止は医師・薬剤師に確認します。",
      "<strong>6. 患者指導</strong><br>処方どおりに服薬し、製剤を自己判断で変更しません。口腔ケアを続け、歯肉の変化を相談します。尿量減少、強いふるえ、続く下痢・嘔吐などは速やかに相談し、けいれん・意識障害は緊急対応を優先します。",
      "<strong>7. 出典</strong><br><a href='https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999004M3021_2?user=1' target='_blank' rel='noopener noreferrer'>PMDA：ネオーラルの電子添文・患者向医薬品ガイド</a><br><a href='https://www.ishlt.org/education-and-publications/standards-guidelines-detail/ishlt-guidelines-for-the-care-of-heart-transplant-recipients' target='_blank' rel='noopener noreferrer'>ISHLT：心臓移植レシピエント管理ガイドライン（2023年掲載、薬物濃度モニタリング）</a><br>資料確認日：2026年10月21日。実際に使用する製剤の最新資料を確認してください。"
    ].join("<br><br>")
  },
  {
    term: "ミコフェノール酸系製剤",
    aliases: "セルセプト mycophenolate MMF MPA ミコフェノール酸モフェチル IMPDH AUC",
    body: [
      "<strong>【学習用】</strong>個別の投与量・検査目標・処方変更は、最新の資料と患者の状態に基づき移植チームが判断します。副作用・相互作用は代表例です。",
      "<strong>1. 作用</strong><br>ここではセルセプト（ミコフェノール酸モフェチル：MMF）を扱います。体内でMPAとなり、核酸合成に関わるIMPDHを阻害してT・Bリンパ球の増殖を抑えます。",
      "<strong>2. 主な副作用</strong><br>下痢・腹痛・嘔吐、白血球減少・貧血・血小板減少、感染症など。消化管出血や悪性腫瘍にも注意します。催奇形性と流産のリスクがあり、妊婦・妊娠の可能性がある女性には禁忌です。",
      "<strong>3. 観察項目</strong><br>血算、腎・肝機能、便の回数・性状、腹痛、食事・水分摂取、体重、出血・感染徴候を確認します。下痢を薬の副作用と決めつけず、感染症なども含めて報告します。",
      "<strong>4. TDM（血中濃度モニタリング）</strong><br>測定対象は活性体MPAです。拒絶反応、副作用、併用薬変更などの状況により、移植チームが測定の必要性や方法を検討します。CNIと同じ感覚でトラフ値だけを用いて増減しません。AUC（一定時間の薬物曝露量）を評価する場合は、指定された複数の採血時刻を守ります。",
      "<strong>5. 相互作用</strong><br>Mg・Al含有制酸剤や一部の抗菌薬などでMPA濃度が下がることがあります。シクロスポリンの変更もMPA曝露量に影響します。ガンシクロビル等との併用にも注意し、自己判断で服用間隔や処方を変えません。生ワクチンは併用禁忌です。",
      "<strong>6. 患者指導</strong><br>自己判断で休薬・増減せず、続く下痢、発熱、出血などは速やかに相談します。妊娠を希望するときは男女とも事前に相談し、避妊・妊娠検査は最新の患者向ガイドと指示に従います。妊娠の可能性が分かったら直ちに処方医へ連絡し、服薬の対応を確認します。",
      "<strong>7. 出典</strong><br><a href='https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999017B1025_1?user=1' target='_blank' rel='noopener noreferrer'>PMDA：セルセプトの電子添文・患者向医薬品ガイド・妊娠関連資材</a><br><a href='https://www.ishlt.org/education-and-publications/standards-guidelines-detail/ishlt-guidelines-for-the-care-of-heart-transplant-recipients' target='_blank' rel='noopener noreferrer'>ISHLT：心臓移植レシピエント管理ガイドライン（2023年掲載、薬物濃度モニタリング）</a><br><a href='https://pubmed.ncbi.nlm.nih.gov/40987557/' target='_blank' rel='noopener noreferrer'>MPAのTDM診療ガイドライン（2025年、臓器移植全般）</a><br>資料確認日：2026年10月21日。他のミコフェノール酸製剤に同じ用量・評価方法を当てはめません。"
    ].join("<br><br>")
  },
  {
    term: "ステロイド",
    aliases: "プレドニゾロン プレドニン prednisolone corticosteroid 副腎皮質ステロイド 副腎不全",
    body: [
      "<strong>【学習用】</strong>個別の投与量・検査目標・処方変更は、最新の資料と患者の状態に基づき移植チームが判断します。副作用・相互作用は代表例です。",
      "<strong>1. 作用</strong><br>ここでは経口プレドニゾロン（プレドニン）を例に扱います。細胞内受容体を介して炎症・免疫反応を抑えます。維持療法と拒絶反応治療では薬剤や投与方法が異なるため、処方目的を確認します。",
      "<strong>2. 主な副作用</strong><br>感染症、高血糖、血圧上昇・浮腫、消化管潰瘍、骨粗鬆症・筋力低下、不眠・気分や精神状態の変化、白内障・緑内障など。長期投与では副腎機能抑制にも注意します。",
      "<strong>3. 観察項目</strong><br>血糖、血圧、体重・浮腫、感染徴候、睡眠・気分、筋力、骨・関節症状、視覚変化を確認します。強い腹痛、黒い便や吐血などは速やかに報告します。",
      "<strong>4. TDM（血中濃度モニタリング）</strong><br>CNIのように通常の管理でトラフ濃度目標を設定する薬ではありません。投与量・期間、拒絶反応や症状、副作用を総合して評価します。副腎機能の検査を行う場合も、薬物濃度測定とは区別します。",
      "<strong>5. 相互作用</strong><br>リファンピシンなどで作用が弱まることがあり、糖尿病治療薬の効果にも影響します。Kを失わせる利尿薬との併用では低Kに注意します。他院薬・市販薬・ワクチンも、追加前に医師・薬剤師へ相談します。",
      "<strong>6. 患者指導</strong><br>連用後に急に中止すると副腎不全や離脱症状につながるため、減量・中止は医師の指示に従います。手術・重い体調不良時は服用中と伝え、嘔吐で飲めない場合も速やかに相談します。水痘・麻疹への接触が疑われるときも早急に連絡します。",
      "<strong>7. 出典</strong><br><a href='https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2456001F1310_4?user=1' target='_blank' rel='noopener noreferrer'>PMDA：プレドニン錠5mgの電子添文・患者向医薬品ガイド</a><br><a href='https://www.ishlt.org/education-and-publications/standards-guidelines-detail/ishlt-guidelines-for-the-care-of-heart-transplant-recipients' target='_blank' rel='noopener noreferrer'>ISHLT：心臓移植レシピエント管理ガイドライン（2023年掲載、薬物濃度モニタリング）</a><br>資料確認日：2026年10月21日。他のステロイドや注射製剤は、それぞれの最新資料を確認してください。"
    ].join("<br><br>")
  },
  { term: "DSA", aliases: "ドナー特異的抗体 抗体関連型拒絶反応 AMR", body: "ドナーに対する特異的抗体。陽性だけで抗体関連型拒絶反応が確定するわけではなく、推移、心筋生検、心機能、臨床経過と合わせて評価する。" },
  { term: "CMV", aliases: "サイトメガロウイルス 感染症", body: "移植後に問題となるウイルス感染症の一つ。症状、血液検査、施設の予防・監視方針を確認する。" },
  { term: "TDM", aliases: "薬物血中濃度モニタリング トラフ", body: "薬物血中濃度を測定し、効果と毒性のバランスを確認する。採血時刻と服薬時刻、処方変更、相互作用、臨床症状を合わせて解釈する。" }
];

const conditions = {
  title: "拒絶反応・感染症",
  html: `
    <p class="note">個人学習用の要約です。症状だけで診断せず、実際の対応は所属施設の手順と移植チームの指示を優先してください。</p>
    <h3>緊急性を先に確認する</h3>
    <p><strong>強い呼吸困難、意識の異常、失神、急速な全身状態の悪化などは、情報を集め終える前に救急対応を優先します。</strong>院内では緊急時手順に従い、自宅では救急要請など必要な対応を行ってください。</p>
    <p>新しい息切れ、胸痛、続く下痢・嘔吐、尿量減少、強いだるさなども速やかに移植チームへ相談します。免疫抑制薬を自己判断で中止・増減しません。（出典1・2）</p>

    <details class="study-course">
      <summary style="cursor: pointer; padding: 12px 0;">1. 症状があるときの確認事項</summary>
      <ul>
        <li><strong>普段との違い：</strong>いつから、どのように変化したか。呼吸、意識、活動性、食事・水分摂取、体重・浮腫、尿量を確認します。</li>
        <li><strong>測定値と条件：</strong>体温、血圧、脈拍、呼吸数、SpO₂の値と推移。酸素使用の有無なども伝えます。</li>
        <li><strong>移植・治療歴：</strong>移植後の時期、最近の拒絶反応治療、感染症、処方変更を確認します。</li>
        <li><strong>服薬：</strong>製剤・最終服薬時刻、飲み忘れ、嘔吐後の服薬状況、新しい薬・市販薬・サプリメントを確認します。</li>
      </ul>
      <p>検査値は採取時刻と以前の値を合わせて読み、不明な情報は「未確認」として伝えます。状態が悪ければ、確認のために連絡を遅らせません。（出典1〜3）</p>
    </details>

    <details class="study-course">
      <summary style="cursor: pointer; padding: 12px 0;">2. 拒絶反応：ACR・AMRと検査の見方</summary>
      <ul>
        <li><strong>ACR（急性細胞性拒絶反応）：</strong>主にT細胞が関わる反応です。</li>
        <li><strong>AMR（抗体関連型拒絶反応）：</strong>抗体が関わり、移植心の血管などに障害を起こす反応です。</li>
        <li><strong>心筋生検：</strong>採取した組織の病理所見を評価します。ACRとAMRは評価の枠組みが異なります。</li>
        <li><strong>DSA：</strong>ドナー特異的抗体。陽性だけでAMRと断定せず、新規出現・持続や推移を病理所見・心機能と合わせて評価します。</li>
        <li><strong>心エコー：</strong>心機能の変化をみる重要な検査ですが、明らかな変化がないことだけで拒絶反応を完全には否定できません。</li>
      </ul>
      <p>息切れ、倦怠感、浮腫・体重増加などに注意します。症状が乏しくても検査で見つかることがあるため、服薬と予定された診察・検査の継続が大切です。治療の要否・内容は移植チームが判断します。（出典1・2）</p>
    </details>

    <details class="study-course">
      <summary style="cursor: pointer; padding: 12px 0;">3. 感染症：症状と薬の影響を合わせて考える</summary>
      <p>免疫抑制療法中は感染リスクが高まり、典型的な症状がそろわないこともあります。発熱がないことだけで感染症を否定しません。移植直後に限らず、長期経過中や拒絶反応治療後も注意します。</p>
      <ul>
        <li>咳・痰・息切れ、下痢・嘔吐・腹痛、排尿時の症状、創部・カテーテル部の発赤や排液などを確認します。</li>
        <li>下痢は感染症、薬剤など複数の原因が考えられます。脱水やタクロリムス濃度の変動にも注意します。</li>
        <li>感染症と拒絶反応の症状は似ることがあり、両者が併存する可能性もあります。</li>
      </ul>
      <p>必要な培養・画像・血液検査等は医療チームが判断します。抗菌薬の追加や免疫抑制薬の調整を自己判断せず、症状・検査・服薬状況をまとめて相談します。（出典1〜3）</p>
    </details>

    <details class="study-course">
      <summary style="cursor: pointer; padding: 12px 0;">4. CMV：感染と疾患を区別する</summary>
      <p>CMV（サイトメガロウイルス）は、移植後に再活性化したり、ドナー由来で感染したりすることがあります。</p>
      <ul>
        <li><strong>CMV感染：</strong>症状の有無にかかわらず、ウイルス増殖の証拠が確認される状態です。</li>
        <li><strong>CMV疾患：</strong>CMV感染の証拠と、それに起因する症状・臓器障害がある状態です。検査陽性だけで臓器病変と断定しません。</li>
        <li><strong>予防：</strong>予防薬の投与や、定期検査をもとに早期治療する方法などがあり、リスクと施設の方針によって選ばれます。</li>
      </ul>
      <p>検査結果の推移、発熱・倦怠感・消化器症状、血算、腎機能、予防薬・治療薬の服用状況を確認します。検査方法・治療開始基準・予防期間を一律に示さず、移植チームの計画を確認します。（出典1・4）</p>
    </details>

    <details class="study-course">
      <summary style="cursor: pointer; padding: 12px 0;">5. PJP：呼吸症状と予防薬を確認する</summary>
      <p>PJP（ニューモシスチス肺炎、PCPとも表記）は、真菌であるPneumocystis jiroveciiによる肺炎で、免疫抑制療法中に問題となります。咳、息切れ、低酸素などに注意します。</p>
      <p>予防にはST合剤（スルファメトキサゾール・トリメトプリム）などが用いられます。予防薬の有無・服用状況と処方された検査計画を確認し、中止・再開は移植チームに相談します。予防中でも新しい呼吸症状を放置しません。症状だけでPJPと判断せず、必要な検査で評価します。（出典1・5）</p>
    </details>

    <details class="study-course">
      <summary style="cursor: pointer; padding: 12px 0;">6. 移植チームへの報告例（架空の場面）</summary>
      <p><strong>状況：</strong>心臓移植後の患者さんに、今朝から新しい息切れと下痢がみられます。普段と違うため相談します。</p>
      <p><strong>背景：</strong>移植後の時期、最近の拒絶反応治療、免疫抑制薬と予防薬、最終服薬時刻、新しい薬の有無を伝えます。</p>
      <p><strong>現在の所見：</strong>呼吸・意識の状態、測定したバイタルサインと酸素使用条件、下痢の回数、尿量・摂取状況、確認できた検査値と採血時刻を伝えます。未確認の項目はそのまま伝えます。</p>
      <p><strong>相談：</strong>感染症や拒絶反応、薬剤の影響などの評価が必要と考えています。受診・診察の緊急性と、必要な観察・検査・服薬について指示をお願いします。</p>
      <p class="note">これは報告の組み立て方を示す学習例です。情報を集めきるまで救急対応を待つための手順ではありません。このアプリに実際の患者情報は入力しないでください。</p>
    </details>

    <h3>出典・確認先</h3>
    <ol>
      <li><a href="https://www.ishlt.org/education-and-publications/standards-guidelines-detail/ishlt-guidelines-for-the-care-of-heart-transplant-recipients" target="_blank" rel="noopener noreferrer">ISHLT：心臓移植レシピエント管理ガイドライン（2023年掲載）</a></li>
      <li><a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/living-with-a-heart-transplant/warning-signs-after-a-heart-transplant/" target="_blank" rel="noopener noreferrer">NHSBT：心臓移植後の注意すべき症状</a>／<a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/benefits-and-risks-of-a-heart-transplant/risks-of-a-heart-transplant/rejection-of-a-transplanted-heart/" target="_blank" rel="noopener noreferrer">拒絶反応</a>／<a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/benefits-and-risks-of-a-heart-transplant/risks-of-a-heart-transplant/infections-and-heart-transplants/" target="_blank" rel="noopener noreferrer">感染症</a></li>
      <li><a href="https://www.newcastle-hospitals.nhs.uk/resources/infection-after-a-transplant/" target="_blank" rel="noopener noreferrer">Newcastle Hospitals：移植後の感染症</a>（小児向け資料。症状・服薬への影響を参照し、数値基準や生活制限は転用していません。）</li>
      <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12180710/" target="_blank" rel="noopener noreferrer">CMV管理に関する第4回国際コンセンサスガイドライン（2025年）</a></li>
      <li><a href="https://www.cdc.gov/pneumocystis-pneumonia/about/index.html" target="_blank" rel="noopener noreferrer">CDC：Pneumocystis Pneumonia Basics</a></li>
    </ol>
    <p class="note">資料確認日：2026年10月21日。この画面は診断・治療手順を網羅するものではありません。第4・5・9回の講座も合わせて復習してください。</p>
`
};

const quizSources = [
  [
    "PMDA：プログラフの添付文書・患者向医薬品ガイド",
    "https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999014M1022_3?user=1"
  ],
  [
    "NHSBT：心臓移植後の注意すべき症状",
    "https://www.nhsbt.nhs.uk/organ-transplantation/heart/living-with-a-heart-transplant/warning-signs-after-a-heart-transplant/"
  ],
  [
    "AHRQ：Teach-Back",
    "https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/teachback.html"
  ]
];

const quizQuestions = [
  {
    "topic": "相互作用と観察",
    "question": "タクロリムス服用中、新しく抗真菌薬が開始され、血中濃度とクレアチニンの上昇、振戦が見られました。適切な対応は？",
    "options": [
      "拒絶反応と決めて免疫抑制を強化する",
      "服薬・採血時刻、併用薬、症状と検査値を確認し、移植チームに速やかに報告する",
      "自己判断でタクロリムスを中止する"
    ],
    "answer": 1,
    "explanation": "一部の抗真菌薬はタクロリムスの血中濃度を上昇させます。薬剤名と開始時期、採血条件、腎機能や症状を合わせて報告します。投与量や休薬の判断は移植チームが行います。",
    "source": 0
  },
  {
    "topic": "TDMの採血条件",
    "question": "タクロリムスのトラフ値を測定する予定でしたが、採血前に服薬したと分かりました。どう考えますか？",
    "options": [
      "通常のトラフ値としてそのまま比較する",
      "検査値だけで次回の投与量を決める",
      "実際の服薬・採血時刻を確認して報告し、結果の解釈や再検査の要否を相談する"
    ],
    "answer": 2,
    "explanation": "トラフ値は通常、次回服薬の直前に採血して評価します。採血前に服薬した結果を通常のトラフ値として扱わず、時刻を記録して相談します。採血日の服薬方法は施設の指示に従います。",
    "source": 0
  },
  {
    "topic": "薬剤の役割",
    "question": "タクロリムスとボリコナゾールについて正しい説明は？",
    "options": [
      "別の薬剤で、タクロリムスは免疫抑制薬、ボリコナゾールは抗真菌薬。併用時は相互作用に注意する",
      "同じ成分の薬なので置き換えてよい",
      "一緒に使っても血中濃度には影響しない"
    ],
    "answer": 0,
    "explanation": "両者は別の薬剤です。ボリコナゾールはタクロリムスの血中濃度を上昇させることがあるため、移植チームによる血中濃度の確認と投与量の調節が必要になります。自分で置き換えたり増減したりしません。",
    "source": 0
  },
  {
    "topic": "服薬支援",
    "question": "体調がよく、免疫抑制薬を減らしたいと相談されました。適切な支援は？",
    "options": [
      "症状がなければ本人の判断で減らしてよいと伝える",
      "自己判断で変更せず、負担や困りごとを聞き、移植チームへの相談につなげる",
      "通院を続けるなら服薬はやめてよいと伝える"
    ],
    "answer": 1,
    "explanation": "体調がよくても処方どおりの服薬が大切です。副作用への不安、生活リズム、費用などの困りごとを確認し、治療を続けられる方法をチームと考えます。",
    "source": 0
  },
  {
    "topic": "症状と相談行動",
    "question": "心臓移植後、自宅で新たな息切れと下痢が出ています。発熱は目立ちません。適切な対応は？",
    "options": [
      "発熱がないので次の定期受診まで待つ",
      "自己判断で免疫抑制薬を中断する",
      "症状の経過を確認し、施設の連絡手順に従って速やかに移植チームへ相談する"
    ],
    "answer": 2,
    "explanation": "息切れや下痢も移植チームに相談すべき症状です。発熱の有無だけで安心せず、経過や服薬状況を伝えます。強い呼吸困難、意識の異常などがあれば救急対応を優先し、施設の緊急時手順に従います。",
    "source": 1
  },
  {
    "topic": "患者教育",
    "question": "薬の飲み方を説明した後、理解を確かめる方法として適切なのは？",
    "options": [
      "患者さん自身の言葉で、飲み方と困ったときの対応を説明してもらう",
      "「分かりましたか」と聞き、うなずけば確認を終える",
      "説明用紙を渡したので確認は省く"
    ],
    "answer": 0,
    "explanation": "ティーチバックでは患者さん自身の言葉で説明してもらい、こちらの説明が伝わったかを確かめます。患者さんを試すためではありません。伝わっていなければ説明を変えて、もう一度確認します。",
    "source": 2
  }
];
let quizAnswers = {};

function updateQuizScore() {
  const answered = Object.keys(quizAnswers).length;
  const correct = quizQuestions.reduce((sum, question, index) =>
    sum + (quizAnswers[index] === question.answer ? 1 : 0), 0);
  const score = document.getElementById("quiz-score");
  if (score) score.textContent = `回答 ${answered} / ${quizQuestions.length}問・正解 ${correct}問`;
}

function showQuiz() {
  quizAnswers = {};
  showPanel("症例問題・復習", `
    <p>全${quizQuestions.length}問です。各問で答えを選ぶと解説が表示されます。</p>
    <p class="note">学習用の架空の場面です。実際の判断は最新の資料、施設の手順と移植チームの指示に従ってください。点数は学習の目安で、臨床能力の判定ではありません。回答はこの画面を離れるとリセットされます。</p>
    <p id="quiz-score" role="status"></p>
    ${quizQuestions.map((question, index) => `
      <section class="quiz-card" aria-labelledby="quiz-title-${index}">
        <h3 id="quiz-title-${index}">第${index + 1}問：${question.topic}</h3>
        <p>${question.question}</p>
        <div class="quiz-options" role="group" aria-label="第${index + 1}問の選択肢">
          ${question.options.map((option, choice) => `<button type="button" class="quiz-option" data-question="${index}" data-choice="${choice}" aria-describedby="quiz-feedback-${index}">${["A", "B", "C"][choice]}. ${option}</button>`).join("")}
        </div>
        <div id="quiz-feedback-${index}" class="quiz-feedback" aria-live="polite"></div>
      </section>`).join("")}
    <button type="button" id="quiz-reset" class="study-button">もう一度解く</button>
    <details class="quiz-sources"><summary>出典（確認日：2026年10月21日）</summary>
      <ol>${quizSources.map(source => `<li><a href="${source[1]}" target="_blank" rel="noopener noreferrer">${source[0]}</a></li>`).join("")}</ol>
    </details>`);
  updateQuizScore();
  panelBody.querySelectorAll(".quiz-option").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.question);
      if (Object.prototype.hasOwnProperty.call(quizAnswers, index)) return;
      const choice = Number(button.dataset.choice);
      quizAnswers[index] = choice;
      const question = quizQuestions[index];
      panelBody.querySelectorAll(`[data-question="${index}"]`).forEach(option => {
        option.disabled = true;
        option.setAttribute("aria-pressed", String(option === button));
      });
      const feedback = document.getElementById(`quiz-feedback-${index}`);
      feedback.className = "quiz-feedback result-item";
      feedback.textContent = (choice === question.answer ? "正解です。" : "不正解です。") +
        `正解は${["A", "B", "C"][question.answer]}。${question.explanation}（出典${question.source + 1}）`;
      updateQuizScore();
    });
  });
  document.getElementById("quiz-reset").addEventListener("click", showQuiz);
}

const panelTitle = document.getElementById("panel-title");
const panelBody = document.getElementById("panel-body");

function showPanel(title, html) {
  panelTitle.textContent = title;
  panelBody.innerHTML = html;
  panelBody.scrollIntoView({ behavior: "smooth", block: "start" });

}

// 個人学習の記録。患者情報は保存しないでください。
const STUDY_STORAGE_KEY = "heart-transplant-study:learning:v1";
let studyState = { version: 1, completed: {}, bookmarks: {}, notes: {} };
let studyStorageError = "";
let studyStorageBlocked = false;

function parseStudyState(raw) {
  if (raw === null) return { version: 1, completed: {}, bookmarks: {}, notes: {} };
  const value = JSON.parse(raw);
  if (!value || value.version !== 1 || !value.completed || !value.bookmarks || !value.notes ||
      typeof value.completed !== "object" || typeof value.bookmarks !== "object" ||
      typeof value.notes !== "object" || Array.isArray(value.completed) ||
      Array.isArray(value.bookmarks) || Array.isArray(value.notes)) {
    throw new Error("Invalid learning record");
  }
  const state = { version: 1, completed: {}, bookmarks: {}, notes: {} };
  const validId = id => /^[a-z0-9][a-z0-9-]{0,79}$/.test(id);
  Object.keys(value.completed).filter(validId).forEach(id => {
    if (value.completed[id] === true) state.completed[id] = true;
  });
  Object.keys(value.bookmarks).filter(validId).forEach(id => {
    if (value.bookmarks[id] === true) state.bookmarks[id] = true;
  });
  Object.keys(value.notes).filter(validId).forEach(id => {
    if (typeof value.notes[id] === "string") state.notes[id] = value.notes[id];
  });
  return state;
}


function escapeStudyText(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function saveStudyChange(change) {
  if (studyStorageBlocked) {
    updateStudyControls();
    return false;
  }
  try {
    // 他のタブの保存を取り込んでから、この操作の対象だけを更新する。
    const next = parseStudyState(localStorage.getItem(STUDY_STORAGE_KEY));
    change(next);
    localStorage.setItem(STUDY_STORAGE_KEY, JSON.stringify(next));
    studyState = next;
    studyStorageError = "";
    updateStudyControls();
    return true;
  } catch (error) {
    studyStorageError = "保存できませんでした。保存容量やブラウザの設定を確認して再試行してください。入力中のメモは残っています。画面を閉じる前に必要な文章をコピーしてください。";
    updateStudyControls();
    return false;
  }
}

const studyStyle = document.createElement("style");
studyStyle.textContent = `
  .quiz-card { border-top: 1px solid #dce5f0; padding: 18px 0; }
  .quiz-options { display: grid; gap: 8px; margin: 12px 0; }
  .quiz-option { width: 100%; min-height: 44px; white-space: normal; overflow-wrap: anywhere; padding: 12px; border: 1px solid #aebfd5; border-radius: 10px; background: #fff; color: #182b45; text-align: left; font: inherit; cursor: pointer; }
  .quiz-option:disabled { cursor: default; opacity: 1; color: #45566c; }
  .quiz-option[aria-pressed="true"] { background: #eaf2ff; border: 2px solid #2459a9; }
  .quiz-feedback:empty { display: none; }
  .quiz-feedback { margin-top: 10px; }
  .quiz-sources { margin-top: 18px; overflow-wrap: anywhere; }
  .study-fields { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0; }
  .study-fields button { flex: 1 1 220px; }
  .study-fields button[aria-pressed="true"] { background: #eaf2ff; border: 2px solid #2459a9; }
  .study-field-description { color: #5d6c80; }
  .study-overview { margin: 0 0 16px; }
  .study-progress { width: 100%; height: 18px; accent-color: #2459a9; }
  .study-tools { border-top: 1px solid #dce5f0; margin-top: 18px; padding-top: 14px; }
  .study-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin: 10px 0; }
  .study-actions label { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; }
  .study-actions input { width: 20px; height: 20px; }
  .study-button { min-height: 44px; border: 1px solid #aebfd5; border-radius: 10px; padding: 8px 12px; background: #fff; color: #182b45; font: inherit; cursor: pointer; }
  .study-button[aria-pressed="true"] { background: #eaf2ff; border-color: #2459a9; }
  .study-note { width: 100%; display: block; min-height: 120px; padding: 10px; margin: 8px 0; border: 1px solid #aebfd5; border-radius: 10px; font: inherit; resize: vertical; }
  .study-note:focus-visible { outline: 3px solid #8bb7ff; outline-offset: 2px; }
  .study-message { min-height: 1.6em; font-size: .85rem; }
  .study-error { color: #8b1c1c; background: #fff1f1; padding: 10px; border-radius: 8px; }
  .study-saved-note { white-space: pre-wrap; overflow-wrap: anywhere; }
  .study-course { margin-bottom: 10px; }
`;
document.head.appendChild(studyStyle);

function studyOverview() {
  return `<div class="study-overview">
    <p id="study-progress-label" role="status"></p>
    <progress id="study-progress" class="study-progress" max="${courseList.length}" value="0" aria-labelledby="study-progress-label"></progress>
    <p class="note">学習済みはご自身の記録です。理解度や臨床能力の認定ではありません。記録はこのブラウザ内に保存され、PCとiPhoneでは共有されません。ブラウザのデータ削除などで失われることがあります。</p>
    <p id="study-storage-message" role="alert" hidden></p>
  </div>`;
}

function courseStudyTools(index) {
  const id = courseIds[index];
  return `<div class="study-tools" data-study-course="${id}">
    <h3>この講座の学習記録</h3>
    <div class="study-actions">
      <label><input type="checkbox" data-study-complete="${id}">学習済みにする</label>
      <button type="button" class="study-button" data-study-bookmark="${id}" aria-pressed="false">ブックマークする</button>
    </div>
    <label for="study-note-${id}">個人学習メモ（10,000文字まで）</label>
    <p class="note">患者・職員を特定できる情報は入力しないでください。「メモを保存」を押すと保存されます。</p>
    <textarea id="study-note-${id}" class="study-note" maxlength="10000" data-study-note="${id}" data-dirty="false" placeholder="学んだこと、次に確認したいこと"></textarea>
    <div class="study-actions">
      <button type="button" class="primary-button" data-study-save="${id}">メモを保存</button>
      <button type="button" class="study-button" data-study-delete="${id}">メモを削除</button>
    </div>
    <p id="study-note-status-${id}" class="study-message" role="status"></p>
  </div>`;
}

function updateStudyControls() {
  const fieldEntries = courseEntries.filter(entry => entry.fieldId === selectedCourseField);
  const fieldProgress = document.getElementById("study-field-progress");
  if (fieldProgress) fieldProgress.textContent = `この分野の学習済み ${fieldEntries.filter(entry => studyState.completed[entry.id]).length} / ${fieldEntries.length} 講座`;
  const count = courseIds.filter(id => studyState.completed[id]).length;
  const label = document.getElementById("study-progress-label");
  const progress = document.getElementById("study-progress");
  if (label) label.textContent = `学習済み ${count} / ${courseList.length} 講座（${Math.round(count / courseList.length * 100)}%）`;
  if (progress) progress.value = count;
  const warning = document.getElementById("study-storage-message");
  if (warning) {
    warning.hidden = !studyStorageError;
    warning.className = studyStorageError ? "study-error" : "";
    warning.textContent = studyStorageError;
  }
  panelBody.querySelectorAll("[data-study-complete]").forEach(input => {
    input.checked = !!studyState.completed[input.dataset.studyComplete];
  });
  panelBody.querySelectorAll("[data-study-bookmark]").forEach(button => {
    const marked = !!studyState.bookmarks[button.dataset.studyBookmark];
    button.setAttribute("aria-pressed", String(marked));
    button.textContent = marked ? "ブックマーク済み（解除）" : "ブックマークする";
  });
}

function showCourses(openId) {
  const opened = courseEntries.find(entry => entry.id === openId);
  if (opened) selectedCourseField = opened.fieldId;
  const field = courseFields.find(item => item.id === selectedCourseField) || courseFields[0];
  selectedCourseField = field.id;
  const entries = courseEntries.map((entry, index) => ({ ...entry, index }))
    .filter(entry => entry.fieldId === field.id);
  showPanel("学習講座", studyOverview() +
    `<div class="study-fields" role="group" aria-label="学習分野">
      ${courseFields.map(item => `<button type="button" class="study-button" data-study-field="${item.id}" aria-pressed="${item.id === field.id}">${escapeStudyText(item.title)}（${item.courses.length}講座）</button>`).join("")}
    </div>
    <h3>${escapeStudyText(field.title)}</h3>
    <p id="study-field-progress" role="status"></p>
    <p class="study-field-description">${escapeStudyText(field.description)}</p>
    <p>講座のタイトルを押すと開閉します。各講座の末尾で学習記録を保存できます。</p>` +
    entries.map(({ course: c, id, index }) => `<details class="result-item study-course" id="${id}" ${openId === id ? "open" : ""}>
      <summary style="cursor: pointer; padding: 8px 0;"><strong>${escapeStudyText(c[0])}：${escapeStudyText(c[1])}</strong></summary>
      <p>${escapeStudyText(c[2])}</p>
      ${c[3]}
      ${courseStudyTools(index)}
    </details>`).join(""));
  panelBody.querySelectorAll("[data-study-note]").forEach(input => {
    input.value = studyState.notes[input.dataset.studyNote] || "";
  });
  updateStudyControls();
  if (opened) document.getElementById(openId).scrollIntoView({ behavior: "smooth", block: "start" });
}

function showSavedStudy() {
  const selected = courseEntries
    .filter(item => studyState.bookmarks[item.id] || studyState.notes[item.id]);
  showPanel("ブックマーク・メモ", studyOverview() +
    (selected.length ? selected.map(({ course, id, fieldTitle }) => `<article class="result-item">
      <p>${escapeStudyText(fieldTitle)}</p>
      <h3>${escapeStudyText(course[0])}：${escapeStudyText(course[1])}</h3>
      <p>${studyState.bookmarks[id] ? "ブックマークあり" : "メモあり"}${studyState.completed[id] ? "・学習済み" : ""}</p>
      ${studyState.notes[id] ? `<p class="study-saved-note">${escapeStudyText(studyState.notes[id])}</p>` : "<p>メモはまだありません。</p>"}
      <div class="study-actions"><button type="button" class="study-button" data-study-open="${id}">講座を開いて編集する</button></div>
    </article>`).join("") : "<p>まだブックマーク・メモはありません。学習講座を開き、末尾の学習記録から追加できます。</p>"));
  updateStudyControls();
}

function canLeaveStudy() {
  return !panelBody.querySelector('[data-study-note][data-dirty="true"]') ||
    window.confirm("保存していないメモがあります。未保存の変更を破棄して移動しますか？");
}

panelBody.addEventListener("input", event => {
  const input = event.target.closest("[data-study-note]");
  if (!input) return;
  const id = input.dataset.studyNote;
  const dirty = input.value !== (studyState.notes[id] || "");
  input.dataset.dirty = String(dirty);
  document.getElementById("study-note-status-" + id).textContent = dirty ? "未保存の変更があります。" : "";
});

panelBody.addEventListener("change", event => {
  const input = event.target.closest("[data-study-complete]");
  if (!input) return;
  const id = input.dataset.studyComplete;
  const checked = input.checked;
  saveStudyChange(next => {
    if (checked) next.completed[id] = true;
    else delete next.completed[id];
  });
});

panelBody.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.studyRetry) {
    if (!courseDataReady) loadCourseData();
  } else if (button.dataset.studyField) {
    if (courseFields.some(field => field.id === button.dataset.studyField) && canLeaveStudy()) {
      selectedCourseField = button.dataset.studyField;
      showCourses();
    }
  } else if (button.dataset.studyOpen) {
    if (canLeaveStudy()) showCourses(button.dataset.studyOpen);
  } else if (button.dataset.studyBookmark) {
    const id = button.dataset.studyBookmark;
    saveStudyChange(next => {
      if (next.bookmarks[id]) delete next.bookmarks[id];
      else next.bookmarks[id] = true;
    });
  } else if (button.dataset.studySave) {
    const id = button.dataset.studySave;
    const input = document.getElementById("study-note-" + id);
    const message = document.getElementById("study-note-status-" + id);
    if (input.value.length > 10000) {
      message.textContent = "メモは10,000文字以内にしてください。";
      return;
    }
    const saved = saveStudyChange(next => {
      if (input.value) next.notes[id] = input.value;
      else delete next.notes[id];
    });
    if (saved) input.dataset.dirty = "false";
    message.textContent = saved ? "メモを保存しました。" : "保存できませんでした。入力内容をコピーして保管してください。";
  } else if (button.dataset.studyDelete) {
    const id = button.dataset.studyDelete;
    const input = document.getElementById("study-note-" + id);
    const message = document.getElementById("study-note-status-" + id);
    if (!input.value && !studyState.notes[id]) {
      message.textContent = "削除するメモはありません。";
      return;
    }
    if (!window.confirm("この講座のメモを削除しますか？入力中の未保存の文章も削除します。")) return;
    if (saveStudyChange(next => { delete next.notes[id]; })) {
      input.value = "";
      input.dataset.dirty = "false";
      message.textContent = "メモを削除しました。";
    } else {
      message.textContent = "削除できませんでした。メモは残っています。";
    }
  }
});

window.addEventListener("beforeunload", event => {
  if (panelBody.querySelector('[data-study-note][data-dirty="true"]')) {
    event.preventDefault();
    event.returnValue = "";
  }
});


document.querySelectorAll("[data-target]").forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;
    if (!courseDataReady) return;
    if (!canLeaveStudy()) return;
    if (target === "courses") {
      showCourses();
    } else if (target === "drugs") {
      showPanel("薬剤リファレンス", "<ul>" + drugData.slice(0,4).map(d => `<li><strong>${d.term}</strong><br>${d.body}</li>`).join("") + "</ul>");
    } else if (target === "conditions") {
      showPanel(conditions.title, conditions.html);
    } else if (target === "quiz") {
      showQuiz();
    } else if (target === "saved") {
      showSavedStudy();
    }
  });
});

function searchTerms() {
  const query = document.getElementById("search-input").value.trim().toLowerCase();
  const results = document.getElementById("search-results");
  if (!courseDataReady) {
    results.innerHTML = "<div class='result-item'>教材の読み込みが完了してから検索してください。</div>";
    return;
  }
  if (!query) {
    results.innerHTML = "<div class='result-item'>検索したい用語を入力してください。</div>";
    return;
  }
  const matches = drugData.filter(d => (d.term + " " + d.aliases + " " + d.body).toLowerCase().includes(query));
  const lessons = courseEntries.filter(entry =>
    (entry.fieldTitle + " " + entry.course[1] + " " + entry.course[2] + " " + entry.keywords + " " +
      entry.course[3].replace(/<[^>]*>/g, " ")).toLowerCase().includes(query));
  const drugsHtml = matches.map(d => `<article class="result-item"><strong>${d.term}</strong><p>${d.body}</p></article>`).join("");
  const lessonsHtml = lessons.map(entry => `<article class="result-item">
    <p>${escapeStudyText(entry.fieldTitle)}</p>
    <strong>${escapeStudyText(entry.course[0])}：${escapeStudyText(entry.course[1])}</strong>
    <p>${escapeStudyText(entry.course[2])}</p>
    <button type="button" class="study-button" data-search-course="${entry.id}">この講座を開く</button>
  </article>`).join("");
  results.innerHTML = drugsHtml + lessonsHtml || "<div class='result-item'>該当する用語が見つかりません。別のキーワードを試してください。</div>";
}

document.getElementById("search-results").addEventListener("click", event => {
  const button = event.target.closest("[data-search-course]");
  if (!button || !courseDataReady || !courseIds.includes(button.dataset.searchCourse)) return;
  if (canLeaveStudy()) showCourses(button.dataset.searchCourse);
});

document.getElementById("search-button").addEventListener("click", searchTerms);
document.getElementById("search-input").addEventListener("keydown", e => { if (e.key === "Enter") searchTerms(); });

// イベント登録後に読み込みを開始する。記録の自動変換・削除は行わない。
const courseDataLoad = loadCourseData();
