const courseList = [
  [
    "第1回",
    "心臓移植と免疫の基礎",
    "免疫のしくみ、拒絶反応の全体像を学ぶ。",
    `
      <h3>この回の学習目標</h3>
      <ul>
        <li>自然免疫と獲得免疫の役割を説明できる。</li>
        <li>心臓移植後に拒絶反応が起こる理由を説明できる。</li>
        <li>免疫抑制薬の継続と定期検査の必要性を説明できる。</li>
      </ul>

      <h3>1. 免疫は体を守るしくみ</h3>
      <p>免疫は、細菌・ウイルス・真菌などから体を守るしくみです。複数の細胞やたんぱく質が協力して働きます。移植では、この防御のしくみが、他の人から提供された心臓にも反応することが問題になります。</p>

      <h3>2. 自然免疫と獲得免疫</h3>
      <p><strong>自然免疫：</strong>皮膚・粘膜のバリアや、微生物を取り込む食細胞などが、早い段階から防御します。</p>
      <p><strong>獲得免疫：</strong>T細胞やB細胞などが、特定の抗原に対応します。免疫記憶により、同じ抗原に再び出会ったときに、より速く強く反応できます。自然免疫と獲得免疫は互いに協力します。</p>

      <h3>3. T細胞・B細胞・抗体</h3>
      <ul>
        <li><strong>T細胞：</strong>免疫反応の調整や、標的となる細胞への攻撃などに関わります。</li>
        <li><strong>B細胞：</strong>活性化して形質細胞になると、抗体を産生します。</li>
        <li><strong>抗体：</strong>特定の抗原に結合するたんぱく質です。感染防御に役立つ一方、移植臓器への免疫反応に関わる場合があります。</li>
      </ul>

      <h3>4. なぜ拒絶反応が起こるのか</h3>
      <p>移植された心臓は別の人に由来するため、受け手の免疫系が異なるものとして認識し、攻撃することがあります。これが拒絶反応です。細胞性拒絶反応と抗体関連型拒絶反応などがあり、詳しい評価方法は第5回で学びます。</p>

      <h3>5. 免疫抑制薬と定期検査の役割</h3>
      <p>免疫抑制薬は、移植された心臓に対する免疫反応を抑えます。一方で、感染症や薬剤の副作用にも注意が必要です。移植チームが検査結果と体調を確認し、治療を調整します。</p>
      <p>薬を正しく服用していても、拒絶反応が起こることがあります。体調がよくても、指示された受診・検査と服薬を継続します。副作用や飲み忘れがあった場合も、自己判断で変更せず相談することが大切です。</p>

      <h3>振り返り</h3>
      <p>「体調がよければ、免疫抑制薬や定期検査は必要ない」と考えている患者さんに、どのように説明しますか？ 自分の言葉で考えてから、下の説明例を開いてください。</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">説明例を読む</summary>
        <p>「体調がよいときも、移植した心臓を守る薬は必要です。薬を飲んでいても拒絶反応が起こることがあるため、検査で確認を続けます。薬で困ることがあれば、自分でやめずに移植チームへ相談してください。」</p>
      </details>

      <h3>出典</h3>
      <ul>
        <li><a href="https://nigms.nih.gov/biobeat/2023/12/what-is-the-immune-system" target="_blank" rel="noopener noreferrer">NIH／NIGMS：What Is the Immune System?（2023）</a></li>
        <li><a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/benefits-and-risks-of-a-heart-transplant/risks-of-a-heart-transplant/rejection-of-a-transplanted-heart/" target="_blank" rel="noopener noreferrer">NHS Blood and Transplant：Rejection of a transplanted heart</a></li>
        <li><a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/living-with-a-heart-transplant/heart-transplant-medicines/" target="_blank" rel="noopener noreferrer">NHS Blood and Transplant：Heart transplant medicines</a></li>
      </ul>
      <p class="note">個人学習用の要約です。海外資料の制度や治療手順を、そのまま国内の診療に適用するものではありません。患者ごとの診断・処方・検査計画は、所属施設の手順と移植チームの指示に従ってください。資料確認日：2026年10月20日。</p>
    `
  ],
   [
    "第2回",
    "主要な免疫抑制剤",
    "CNI、ミコフェノール酸系製剤、ステロイドの役割と副作用。",
    `
      <h3>この回の学習目標</h3>
      <ul>
        <li>主要な免疫抑制薬の役割を区別できる。</li>
        <li>薬剤ごとの副作用と観察項目を挙げられる。</li>
        <li>副作用が疑われたときの確認・報告内容を整理できる。</li>
      </ul>

      <h3>1. 免疫抑制療法の考え方</h3>
      <p>心臓移植後は、作用の異なる免疫抑制薬を組み合わせて拒絶反応を予防します。代表的な組み合わせは、カルシニューリン阻害薬（CNI）、ミコフェノール酸系製剤、ステロイドです。ただし、移植後の時期や副作用などによって処方は異なり、全員が同じ薬を同じ期間使うわけではありません。</p>

      <h3>2. タクロリムス：T細胞の活性化を抑える</h3>
      <p><strong>役割：</strong>CNIの一つで、カルシニューリンを阻害し、IL-2などのサイトカイン産生を抑制します。</p>
      <p><strong>副作用と観察：</strong>腎障害、振戦、高血糖、高カリウム血症、低マグネシウム血症などに注意し、腎機能、尿量、神経症状、血糖、電解質、血中濃度を確認します。</p>
      <p><strong>学習のポイント：</strong>血中濃度だけで判断せず、服薬・採血時刻、併用薬、症状と合わせて評価します。詳しくは薬剤リファレンスと第3回で学びます。</p>

      <h3>3. シクロスポリン：もう一つのCNI</h3>
      <p><strong>役割：</strong>タクロリムスと同じCNIですが、別の薬剤です。両剤の併用は禁忌であり、切り替えも移植チームの管理下で行います。</p>
      <p><strong>副作用と観察：</strong>腎障害、高血圧、電解質異常、振戦、多毛、歯肉肥厚などに注意します。腎機能、血圧、血中濃度、口腔内の状態などを確認します。</p>

      <h3>4. ミコフェノール酸系製剤：リンパ球の増殖を抑える</h3>
      <p><strong>役割：</strong>代表薬はミコフェノール酸 モフェチル（MMF、製品例：セルセプト）です。体内でミコフェノール酸（MPA）となり、核酸合成に必要な酵素を阻害して、T細胞・B細胞の増殖を抑えます。</p>
      <p><strong>副作用と観察：</strong>下痢・腹痛、白血球減少などの血球減少、感染症に注意し、便の回数・性状、食事・水分摂取、血算、感染徴候を確認します。下痢を薬の副作用と決めつけず、感染症なども含めて原因を確認します。</p>
      <p><strong>患者指導：</strong>胎児への重大なリスクがあるため、妊娠を希望する場合や妊娠の可能性がある場合は、速やかに移植チームへ相談します。避妊や妊娠検査は最新の添付文書と専門家の指示に従い、自己判断で中止しません。</p>

      <h3>5. ステロイド：免疫・炎症反応を広く抑える</h3>
      <p><strong>役割：</strong>プレドニゾロンなどが用いられます。維持療法と拒絶反応の治療では、使用方法が異なります。</p>
      <p><strong>副作用と観察：</strong>感染症、高血糖、血圧上昇、骨粗鬆症、筋力低下、不眠・気分の変化、眼の合併症などに注意します。体調、血糖、血圧、骨・筋肉の状態、睡眠・気分、視覚症状を確認します。</p>
      <p><strong>患者指導：</strong>継続使用後の急な中止は、副腎皮質機能不全や離脱症状などにつながることがあります。減量・中止は必ず医師の計画に従います。</p>

      <h3>6. 看護で共通して確認すること</h3>
      <ul>
        <li>薬剤名・製剤名・処方量と、実際の服薬状況。</li>
        <li>新しく始めた薬、中止した薬、市販薬・サプリメント。</li>
        <li>検査値の推移と、症状が始まった時期。</li>
        <li>飲み忘れや副作用、費用など、服薬を続けにくい事情。</li>
      </ul>
      <p>副作用の疑いだけで休薬・減量を決めず、患者の状態と確認した情報を移植チームに報告します。緊急性の高い症状では、施設の緊急対応を優先します。</p>

      <h3>振り返り</h3>
      <p>MMFを服用している患者さんから「下痢が続くので薬をやめたい」と相談されました。何を確認して報告しますか？</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">確認・報告の例を読む</summary>
        <p>下痢の開始時期、回数・性状、腹痛・発熱・血便、水分摂取と尿量、服薬状況、最近の薬剤変更、検査値を確認します。薬剤性だけでなく感染症なども考え、移植チームへ相談します。自己判断による中止や、追加の薬の使用は避けます。</p>
      </details>

      <h3>出典</h3>
      <ul>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999014M1022_3?user=1" target="_blank" rel="noopener noreferrer">PMDA：プログラフ 電子添文・患者向医薬品ガイド</a></li>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999004M3021_2?user=1" target="_blank" rel="noopener noreferrer">PMDA：ネオーラル 電子添文・患者向医薬品ガイド</a></li>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999017B1025_1?user=1" target="_blank" rel="noopener noreferrer">PMDA：セルセプト 電子添文・患者向医薬品ガイド</a></li>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/343018_2456001F1310_4_07" target="_blank" rel="noopener noreferrer">PMDA：プレドニン錠 電子添文（2026年3月改訂）</a></li>
        <li><a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/living-with-a-heart-transplant/heart-transplant-medicines/" target="_blank" rel="noopener noreferrer">NHS Blood and Transplant：Heart transplant medicines</a></li>
      </ul>
      <p class="note">個人学習用の要約で、すべての薬剤・副作用を網羅していません。投与量、血中濃度目標、処方変更は個別に判断されます。実際の診療では最新の資料、所属施設の手順、移植チームの指示に従ってください。資料確認日：2026年10月20日。</p>
    `
  ],
   [
    "第3回",
    "TDMと薬剤相互作用",
    "採血・服薬時刻、血中濃度、相互作用の確認。",
    `
      <h3>この回の学習目標</h3>
      <ul>
        <li>TDMとトラフの意味を説明できる。</li>
        <li>血中濃度を読む前に、服薬・採血条件を確認できる。</li>
        <li>相互作用が疑われる場合の確認・報告内容を整理できる。</li>
      </ul>

      <h3>1. TDMは何のために行うのか</h3>
      <p>TDMは、薬物血中濃度を測定し、薬の効果と副作用のバランスを評価する方法です。タクロリムスやシクロスポリンなどで行います。濃度が低すぎる場合は拒絶反応、高すぎる場合は薬剤の毒性が問題となるため、検査値を患者の状態と合わせて評価します。</p>
      <p>血中濃度だけで、拒絶反応や薬剤性障害を確定することはできません。目標濃度は、移植後の時期、併用する免疫抑制薬、副作用などで異なります。投与量と目標値は移植チームが個別に決定します。</p>

      <h3>2. トラフとは</h3>
      <p>トラフは、次の服薬直前の血中濃度です。採血後に飲む予定の薬を先に飲んでいた場合、その結果を予定どおりのトラフとして扱うことはできません。</p>
      <p>採血までの間隔は製剤と服薬方法によって異なります。薬剤名だけでなく製剤名・服薬回数を確認します。シクロスポリンでは目的に応じて服薬後の指定時刻に採血する場合もあり、すべての採血がトラフとは限りません。</p>
      <p>採血日の服薬方法は、施設からの指示に従います。患者さんへ一律に「朝の薬は全部飲まない」と説明してはいけません。</p>

      <h3>3. 数値を見る前の確認リスト</h3>
      <ul>
        <li><strong>処方：</strong>薬剤名、製剤名、1回量、服薬回数、最近の変更。</li>
        <li><strong>服薬：</strong>最終服薬の実際の日時、飲み忘れ、重複服用、服薬後の嘔吐。</li>
        <li><strong>採血：</strong>実際の採血日時と、予定された採血条件。</li>
        <li><strong>併用薬：</strong>追加・中止・増減された処方薬、市販薬、サプリメント。</li>
        <li><strong>体調：</strong>下痢・嘔吐、食事や水分摂取の変化、尿量、振戦など。</li>
        <li><strong>検査：</strong>過去の血中濃度、腎・肝機能、電解質、血糖などの推移。</li>
      </ul>
      <p>予定時刻と実際の時刻は分けて記録します。不明な情報は推測せず、「未確認」として報告します。</p>

      <h3>4. タクロリムスの濃度を変える相互作用</h3>
      <p>タクロリムスは主にCYP3A4・CYP3A5という酵素で代謝されます。併用薬や食品が代謝などに影響し、血中濃度が変わることがあります。</p>
      <ul>
        <li><strong>上昇することがある例：</strong>ボリコナゾールなどのアゾール系抗真菌薬、クラリスロマイシン、グレープフルーツジュース。</li>
        <li><strong>低下することがある例：</strong>リファンピシン、カルバマゼピン、セント・ジョーンズ・ワート含有食品。</li>
        <li><strong>その他の注意：</strong>CBD含有製品でも濃度上昇が報告されています。グレープフルーツジュース、セント・ジョーンズ・ワート含有食品、CBD含有製品は避けるよう指導します。</li>
      </ul>
      <p>これは代表例で、すべての相互作用を網羅していません。薬を開始するときだけでなく、中止・増減するときも確認が必要です。最新の添付文書を参照し、医師・薬剤師と確認します。</p>

      <h3>5. 濃度の変化だけでは捉えられない相互作用</h3>
      <p>相互作用には、血中濃度を変えるものだけでなく、腎障害や高カリウム血症などの危険を増やすものもあります。タクロリムスにはシクロスポリンなどの併用禁忌もあります。「濃度が目標内だから安全」とは判断せず、併用の可否と患者の状態を確認します。</p>

      <h3>6. 異常値が出たときの報告</h3>
      <p>患者の緊急性を確認したうえで、測定条件、検査値の推移、症状、服薬状況、併用薬の変更を整理して報告します。強い意識障害やけいれんなどでは、情報収集を終えるまで待たず、施設の緊急対応を優先します。</p>
      <p>看護師や患者さんの自己判断で、投与量の変更や中止、飲み忘れ分の追加服用を行いません。再採血や次回服薬の扱いも、移植チームの指示を確認します。</p>

      <h3>振り返り：採血前に服薬していた場合</h3>
      <p>朝8時にトラフ採血の予定でしたが、患者さんは朝7時にタクロリムスを服用し、8時に採血しました。検査結果が以前より高くなっています。何を報告しますか？</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">確認・報告の例を読む</summary>
        <p>「本日は7時に服薬し、8時に採血しており、予定したトラフの条件を満たしていません」と伝えます。前回までの濃度、処方量、前夜の実際の服薬時刻、症状、腎機能、併用薬の変更も確認して報告します。採血条件だけが原因と決めつけず、再採血や服薬の指示を確認します。</p>
      </details>

      <h3>出典</h3>
      <ul>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999014M1022_3?user=1" target="_blank" rel="noopener noreferrer">PMDA：プログラフ 電子添文・患者向医薬品ガイド</a></li>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999004M3021_2?user=1" target="_blank" rel="noopener noreferrer">PMDA：ネオーラル 電子添文・患者向医薬品ガイド</a></li>
      </ul>
      <p class="note">個人学習用の要約です。投与量や血中濃度目標を一律に示すものではありません。実際に使用する製剤の最新資料、所属施設の手順、移植チームの指示に従ってください。資料確認日：2026年10月20日。</p>
    `
  ],
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
