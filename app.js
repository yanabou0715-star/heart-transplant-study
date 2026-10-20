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
  [
    "第4回",
    "感染症の予防と対応",
    "CMV、PJPなどの感染リスクと観察。",
    `
      <h3>この回の学習目標</h3>
      <ul>
        <li>心臓移植後に感染症への注意が必要な理由を説明できる。</li>
        <li>CMVとPJPの基本、予防と監視の役割を区別できる。</li>
        <li>体調変化から確認事項と相談の緊急性を整理できる。</li>
      </ul>

      <h3>1. 感染リスクは移植直後だけではない</h3>
      <p>免疫抑制薬は拒絶反応を予防する一方で、感染に対する防御力を低下させます。手術創やカテーテルなども感染の入口になります。感染症は移植直後だけでなく、退院後や移植から年数が経過してからも起こります。</p>
      <p>移植後の時期だけでなく、免疫抑制の強さ、最近の拒絶反応治療、予防薬の使用状況、生活環境などを合わせて考えます。感染症と拒絶反応の症状は似ることがあり、症状だけで区別しません。</p>

      <h3>2. 体温だけでなく「いつもとの違い」を見る</h3>
      <p>免疫抑制下では、感染症が典型的な症状を示さないことがあります。高熱がないことだけで感染症を否定せず、次の変化を確認します。</p>
      <ul>
        <li><strong>全身：</strong>発熱・悪寒、強い倦怠感、食欲低下、普段と違う反応や活動性。</li>
        <li><strong>呼吸：</strong>咳、痰、息切れ、呼吸数の増加、SpO₂の低下。</li>
        <li><strong>消化器：</strong>下痢、嘔吐、腹痛、血便、飲水や服薬ができない状態。</li>
        <li><strong>尿路：</strong>排尿時痛、頻尿、尿の変化、尿量減少。</li>
        <li><strong>皮膚・創部：</strong>発赤、腫れ、痛み、排液、発疹。</li>
      </ul>

      <h3>3. CMV：感染と発症を区別する</h3>
      <p>CMVはサイトメガロウイルスです。ドナー由来の感染や、体内に潜伏していたウイルスの再活性化などが問題になります。</p>
      <p><strong>CMV感染：</strong>症状の有無にかかわらず、検体からウイルスの増殖を示す証拠が検出された状態です。</p>
      <p><strong>CMV感染症（CMV disease）：</strong>感染の証拠に加え、CMVに起因する症状・所見がある状態です。検査陽性だけで、症状を伴うCMV感染症と同じ意味にはなりません。</p>
      <p>予防・監視の計画は、ドナーとレシピエントのCMV抗体の状況、移植臓器、免疫抑制などに応じて決めます。予防投与は発症を防ぐために薬を使う方法、先制治療は定期検査でウイルス増殖を捉え、発症前に治療する方法です。どの方法を選ぶかは移植チームの方針を確認します。</p>
      <p>看護では、検査予定と結果の推移、予防薬の服薬状況、体調変化を確認します。治療開始や終了を単一の検査値だけで判断しません。</p>

      <h3>4. PJP：予防薬と呼吸状態の確認</h3>
      <p>PJPは、真菌であるPneumocystis jiroveciiによるニューモシスチス肺炎です。PCPとも呼ばれ、臓器移植などで免疫機能が低下した人に重い肺炎を起こすことがあります。咳、発熱、呼吸困難などがみられます。</p>
      <p>予防にはST合剤（スルファメトキサゾール・トリメトプリム）が用いられます。使用できない場合は代替薬を検討しますが、薬剤・量・期間は患者ごとの処方を確認します。予防中でも、新たな呼吸症状を放置しません。</p>
      <p>ST合剤では発疹、血球減少、腎障害、高カリウム血症などにも注意し、症状、血算、腎機能、電解質を確認します。予防薬と治療薬では使い方が異なるため、処方目的も把握します。</p>

      <h3>5. 日常生活での感染予防</h3>
      <ul>
        <li>手洗いを行い、口腔内と皮膚を清潔に保ちます。</li>
        <li>感染症状のある人との接触を避け、混雑時の対策は流行状況と移植チームの指示に合わせます。</li>
        <li>食品は清潔に扱い、十分に加熱し、生の食材と調理済み食品を分けて保管・調理します。具体的な食品制限は施設の指導を確認します。</li>
        <li>処方された予防薬と定期検査を継続し、予防薬の終了後も体調変化に注意します。</li>
        <li>ワクチンは種類と接種時期を移植チームへ相談します。</li>
      </ul>

      <h3>6. 症状が出たときの確認と相談</h3>
      <p>発熱、続く下痢・嘔吐、新たな咳や息切れ、創部の変化などは、施設から示された基準に従って速やかに相談します。薬や水分を保てない場合も連絡が必要です。夜間・休日の連絡先を、体調のよいときに確認しておきます。</p>
      <p>強い呼吸困難、意識の変化、急速な状態悪化などは、体温の高さにかかわらず緊急対応が必要です。自宅では救急要請を含む対応を、院内では施設の緊急手順を優先します。</p>
      <p>報告では、症状の開始時期と経過、バイタルサイン、SpO₂と普段との差、水分摂取・尿量、服薬状況、最近の拒絶反応治療、感染者との接触などを整理します。情報が全部そろうまで連絡を遅らせません。</p>
      <p>免疫抑制薬を自己判断で中止せず、余った抗菌薬や市販薬を自己判断で追加しません。薬を使う前に、相互作用も含めて確認します。</p>

      <h3>振り返り</h3>
      <p>患者さんから「熱は高くないが、昨日から咳と息切れがあり、普段よりSpO₂が低い」と連絡がありました。「熱がないから様子を見てよい」と説明してよいでしょうか？</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">確認・対応の例を読む</summary>
        <p>発熱の有無だけで判断しません。呼吸の苦しさ、会話や歩行の可否、意識状態、SpO₂の値と推移、普段との差を確認し、速やかに移植チームへ連絡します。強い呼吸困難や意識の変化があれば救急対応を優先します。感染症だけでなく拒絶反応や他の原因も考え、症状だけでPJPと断定しません。</p>
      </details>

      <h3>出典</h3>
      <ul>
        <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12180710/" target="_blank" rel="noopener noreferrer">The Transplantation Society：CMV管理に関する第4回国際コンセンサスガイドライン（2025）</a></li>
        <li><a href="https://www.cdc.gov/pneumocystis-pneumonia/about/index.html" target="_blank" rel="noopener noreferrer">CDC：Pneumocystis Pneumonia Basics</a></li>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/6290100D1088_2?user=1" target="_blank" rel="noopener noreferrer">PMDA：バクタ製剤 電子添文・患者向医薬品ガイド</a></li>
        <li><a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/benefits-and-risks-of-a-heart-transplant/risks-of-a-heart-transplant/infections-and-heart-transplants/" target="_blank" rel="noopener noreferrer">NHS Blood and Transplant：Infections and heart transplants</a></li>
        <li><a href="https://www.nhsbt.nhs.uk/organ-transplantation/resources/food-safety-advice-after-a-heart-or-lung-transplant/" target="_blank" rel="noopener noreferrer">NHS Blood and Transplant：Food safety after a heart or lung transplant</a></li>
        <li><a href="https://www.newcastle-hospitals.nhs.uk/resources/infection-after-a-transplant/" target="_blank" rel="noopener noreferrer">Newcastle Hospitals：Infection after a transplant（小児心肺移植向け患者資料）</a></li>
      </ul>
      <p class="note">個人学習用の要約です。すべての感染症・予防策を網羅していません。海外資料の治療手順や小児向けの基準をそのまま適用せず、患者ごとの処方、最新の国内資料、所属施設の手順、移植チームの指示に従ってください。資料確認日：2026年10月20日。</p>
    `
  ],
   [
    "第5回",
    "拒絶反応の基礎",
    "ACR、AMR、心筋生検、DSA、心エコー。",
    `
      <h3>この回の学習目標</h3>
      <ul>
        <li>ACRとAMRの違いを説明できる。</li>
        <li>心筋生検、DSA、心エコーの役割を区別できる。</li>
        <li>単一の検査結果に頼らず、確認・報告事項を整理できる。</li>
      </ul>

      <h3>1. 拒絶反応は免疫系による移植心への反応</h3>
      <p>拒絶反応は、受け手の免疫系が移植された心臓を異なるものとして認識し、傷害する反応です。免疫抑制薬はそのリスクを下げますが、正しく服薬していても拒絶反応が起こることがあります。</p>
      <p>息切れ、倦怠感、浮腫、体重増加などがみられる場合もあれば、自覚症状がない段階で検査から見つかる場合もあります。体調がよいことだけを理由に、検査や服薬を中断しません。</p>

      <h3>2. ACRとAMR</h3>
      <p><strong>ACR：急性細胞性拒絶反応</strong><br>T細胞を中心とする細胞性免疫が関わり、心筋の炎症や傷害を起こします。</p>
      <p><strong>AMR：抗体関連型拒絶反応</strong><br>ドナーの抗原に対する抗体などが関与し、移植心の微小血管などに傷害を起こします。</p>
      <p>ACRとAMRは、評価方法や治療の考え方が異なります。また、両方の所見が併存することもあります。症状だけで種類を決めず、病理所見、抗体検査、心機能、臨床経過を合わせて評価します。</p>

      <h3>3. 心筋生検：組織の変化を調べる</h3>
      <p>心筋生検（EMB）は、心筋組織の一部を採取して拒絶反応の所見を調べる検査です。ACRでは炎症細胞や心筋傷害などを、AMRでは組織所見と免疫病理所見などを評価します。</p>
      <p>病理報告のACR分類とpAMR分類は、別の評価軸です。数字だけを見て同じ意味と考えたり、そのまま治療の強さに置き換えたりしません。</p>
      <p>検査の時期や頻度は、移植後の経過、年齢、拒絶反応のリスク、症状、施設の方針などによって決まります。結果と症状が一致しないときも、自己判断で結論を出さず移植チームに確認します。</p>

      <h3>4. DSA：ドナーに対する抗体を調べる</h3>
      <p>DSAはドナー特異的抗体です。移植前から存在する場合と、移植後に新たに検出される場合があります。AMRのリスクや経過を評価する重要な情報です。</p>
      <p><strong>DSA陽性だけでAMRが確定するわけではありません。</strong>新規出現か、持続しているか、どのように推移しているかを確認し、心筋生検や心機能、患者の状態と合わせて評価します。</p>
      <p>検査値の高さだけで重症度や治療の必要性を決めません。前回との比較では、検査方法や検査室の違いも確認します。</p>

      <h3>5. 心エコー：心臓の働きを調べる</h3>
      <p>心エコーでは、左室・右室の機能、壁の動きや厚さ、心嚢液などを評価します。以前の検査と比べて変化があるかを確認します。</p>
      <p><strong>心エコーに明らかな変化がなくても、拒絶反応を完全には否定できません。</strong>一方で、心機能の低下があっても、原因が拒絶反応とは限りません。</p>
      <p>検査の組み合わせは、患者の年齢やリスク、検査の実施可能性などによって異なります。心エコーだけで、すべての患者の拒絶反応を判断するものではありません。</p>

      <h3>6. 看護で情報をつなげる</h3>
      <ul>
        <li><strong>症状と経過：</strong>息切れ、倦怠感、浮腫、体重、尿量、動悸などの変化。</li>
        <li><strong>全身状態：</strong>血圧、脈拍、呼吸、SpO₂、意識状態と普段との差。</li>
        <li><strong>検査：</strong>心電図、心エコー、心筋生検、DSAなどの結果と推移。</li>
        <li><strong>服薬：</strong>処方内容、実際の服薬状況、血中濃度と採血条件、併用薬の変更。</li>
        <li><strong>他の原因：</strong>感染徴候、下痢・嘔吐、薬剤の副作用など。</li>
      </ul>
      <p>服薬状況は責めるためではなく、原因と支援方法を考えるために確認します。飲み忘れだけでなく、副作用、費用、生活時間、説明の理解なども確認します。</p>
      <p>感染症と拒絶反応は症状が似ることがあり、併存する可能性もあります。免疫抑制の強化・減量・中止を自己判断で行いません。診断と治療は移植チームが総合的に判断します。</p>
      <p>強い呼吸困難、意識の変化、失神、急速な状態悪化などでは、検査結果がそろうのを待たず、施設の緊急対応や救急要請を優先します。</p>

      <h3>振り返り</h3>
      <p>定期検査で新たにDSAが陽性となりました。患者さんに自覚症状はなく、心エコーでも以前と比べて明らかな変化はありません。「AMRが確定した」「拒絶反応はない」のどちらかに決めてよいでしょうか？</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">確認・報告の例を読む</summary>
        <p>どちらも、この情報だけでは決められません。DSA陽性は重要ですが、それだけでAMRとは断定できません。また、無症状で心エコーに変化がなくても拒絶反応を完全には否定できません。抗体の推移、心筋生検の結果や予定、他の検査、服薬状況を確認し、移植チームに評価と今後の方針を確認します。</p>
      </details>

      <h3>出典</h3>
      <ul>
        <li><a href="https://www.ishlt.org/education-and-publications/standards-guidelines-detail/ishlt-guidelines-for-the-care-of-heart-transplant-recipients" target="_blank" rel="noopener noreferrer">ISHLT：心臓移植レシピエントの管理ガイドライン（2022年公表・2023年掲載）</a></li>
        <li><a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/benefits-and-risks-of-a-heart-transplant/risks-of-a-heart-transplant/rejection-of-a-transplanted-heart/" target="_blank" rel="noopener noreferrer">NHS Blood and Transplant：Rejection of a transplanted heart</a></li>
        <li><a href="https://pubmed.ncbi.nlm.nih.gov/41391648/" target="_blank" rel="noopener noreferrer">研究論文：Enhanced detection of antibody-mediated rejection using the tissue-based Molecular Microscope Diagnostic System（DSAの診断上の限界に関する補足）</a></li>
      </ul>
      <p class="note">個人学習用の基礎的な要約です。拒絶反応のすべての分類や診断方法を網羅していません。検査の適応・頻度、病理判定、治療は、最新の資料と患者の状態に基づき移植チームが判断します。所属施設の手順を優先してください。資料確認日：2026年10月20日。</p>
    `
  ],
   [
    "第6回",
    "長期管理と副作用",
    "腎機能、代謝、CAV、悪性腫瘍など。",
    `
      <h3>学習目標</h3>
      <p>移植後の長期管理で確認する項目を挙げ、体調・検査値・生活状況をつなげて考えられる。</p>

      <h3>1. 長期管理の全体像</h3>
      <p>心臓移植後の管理は、拒絶反応の予防だけではありません。感染症、薬剤の副作用、腎機能、代謝、血管、骨、悪性腫瘍などにも継続して注意します。移植後の年数だけで安全とは判断せず、患者ごとのリスクに応じた受診・検査を続けます。</p>

      <h3>2. 腎機能と代謝</h3>
      <ul>
        <li><strong>腎機能：</strong>CNIによる影響に加え、脱水、感染症、併用薬なども考えます。クレアチニンなどの推移、尿量、体重、飲水・食事、血中濃度を確認します。</li>
        <li><strong>血圧・血糖・脂質：</strong>免疫抑制薬や生活の変化が影響します。診察時の値だけでなく、自宅での記録や体重の推移も確認します。</li>
        <li><strong>生活支援：</strong>食事・運動・禁煙などを、患者が続けられる方法で支援します。水分摂取や運動量は、心・腎機能と個別の指示に合わせます。</li>
      </ul>

      <h3>3. CAV：移植心の血管障害</h3>
      <p>心臓移植後冠動脈病変（CAV）は、移植心を養う血管が狭くなる病変です。免疫反応に加え、脂質異常、糖尿病、喫煙なども関与します。</p>
      <p>進行するまで症状が乏しいことがあるため、胸痛がないことだけでは否定できません。計画された検査を受け、息切れ、活動耐容能の低下、動悸などの変化を報告します。検査方法や治療は移植チームが決めます。</p>

      <h3>4. 骨・筋肉と悪性腫瘍</h3>
      <p>ステロイドなどによる骨粗鬆症や筋力低下にも注意し、痛み、転倒、骨折、活動性を確認します。骨密度評価や予防薬の必要性は個別に判断されます。</p>
      <p>免疫抑制下では、皮膚がんやリンパ腫などのリスクが高まります。紫外線対策を行い、新しい皮膚病変、治りにくい傷、リンパ節の腫れなどは相談します。皮膚の診察やがん検診の計画は移植チームと確認します。</p>

      <h3>5. 受診時に確認すること</h3>
      <p>体調、体重・血圧などの記録、検査値の推移、服薬状況、他院処方、市販薬、生活上の困りごとを確認します。薬の副作用が疑われても、自己判断で免疫抑制薬を中止・減量しません。</p>

      <h3>振り返り</h3>
      <p>「移植から何年も経ち、体調もよいので検査は不要」と言われたら、どう説明しますか？</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">説明例を読む</summary>
        <p>「体調がよくても、腎機能や血管、薬の副作用などは自覚症状だけでは分からないことがあります。今のよい状態を保つために、予定された受診・検査を続けましょう。通院が難しい事情があれば、一緒に相談しましょう。」</p>
      </details>

      <h3>出典</h3>
      <ul>
        <li><a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/benefits-and-risks-of-a-heart-transplant/risks-of-a-heart-transplant/longer-term-risks-of-a-heart-transplant/" target="_blank" rel="noopener noreferrer">NHS Blood and Transplant：Longer-term risks of a heart transplant</a></li>
        <li><a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/benefits-and-risks-of-a-heart-transplant/risks-of-a-heart-transplant/cardiac-allograft-vasculopathy-cav/" target="_blank" rel="noopener noreferrer">NHS Blood and Transplant：CAV</a></li>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/343018_2456001F1310_4_07" target="_blank" rel="noopener noreferrer">PMDA：プレドニン錠 電子添文</a></li>
      </ul>
      <p class="note">個人学習用の要約です。検査・生活管理・処方は患者ごとに異なります。最新の資料と所属施設・移植チームの指示に従ってください。資料確認日：2026年10月20日。</p>
    `
  ],
  [
    "第7回",
    "相互作用と検査値の読み方",
    "症状、検査値、服薬状況を合わせて考える。",
    `
      <h3>学習目標</h3>
      <p>検査値を単独で判断せず、測定条件・推移・症状・薬剤変更を合わせて報告できる。</p>

      <h3>1. 検査値を見る順番</h3>
      <ol>
        <li>まず患者の状態と緊急性を確認する。</li>
        <li>検査項目、単位、基準範囲、検体や採血条件を確認する。</li>
        <li>前回値と普段の値、変化した時期を確認する。</li>
        <li>症状、服薬状況、併用薬、食事・水分摂取の変化をつなげる。</li>
        <li>確認できた事実と未確認事項を分けて報告する。</li>
      </ol>

      <h3>2. 複数の情報を組み合わせる</h3>
      <ul>
        <li><strong>CNI濃度と腎機能：</strong>濃度上昇とクレアチニン上昇が同時にあれば薬剤の影響を考えますが、脱水など他の原因も確認します。</li>
        <li><strong>K・Mgなどの電解質：</strong>CNIや併用薬、消化器症状なども含めて評価します。症状や心電図を含む対応の必要性は医療チームが判断します。</li>
        <li><strong>血算：</strong>MMFなどの薬剤による血球減少と、感染症などを考えます。白血球だけでなく白血球分画・好中球数、他の血球、推移も確認します。</li>
        <li><strong>血糖：</strong>免疫抑制薬、食事、測定のタイミングなどを確認します。単独の値だけで原因を決めません。</li>
      </ul>

      <h3>3. 相互作用は薬の中止時にも確認する</h3>
      <p>新しい薬の開始だけでなく、増減・中止後にも免疫抑制薬の濃度が変わることがあります。処方薬、市販薬、サプリメントを含め、変更日と症状・検査値の変化を時系列で整理します。</p>
      <p>タクロリムスとシクロスポリンの濃度は同じ目標値で扱いません。同じ成分でも製剤や採血計画を確認します。相互作用の有無や再検査の必要性は、医師・薬剤師と確認します。</p>

      <h3>4. 報告の型</h3>
      <p><strong>今の状態 → いつから何が変化したか → 関連する薬剤・検査条件 → 確認したい対応</strong>の順で伝えると整理できます。</p>
      <p>未確認の情報を推測で補わず、緊急性がある場合は情報が全部そろう前に連絡します。異常値だけを根拠に免疫抑制薬を変更しません。</p>

      <h3>振り返り</h3>
      <p>タクロリムス濃度、クレアチニンが上昇し、振戦があります。新たに抗真菌薬が始まっていました。どの情報をつなげますか？</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">確認・報告の例を読む</summary>
        <p>抗真菌薬の具体名と開始日、タクロリムスの製剤・処方量、実際の服薬・採血時刻、過去の濃度、尿量、水分摂取、下痢・嘔吐、他の併用薬を確認します。相互作用や薬剤性障害を疑う情報として速やかに報告しますが、原因を断定せず、服薬・再検査の指示を確認します。</p>
      </details>

      <h3>出典</h3>
      <ul>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999014M1022_3?user=1" target="_blank" rel="noopener noreferrer">PMDA：プログラフ 電子添文・患者向医薬品ガイド</a></li>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999004M3021_2?user=1" target="_blank" rel="noopener noreferrer">PMDA：ネオーラル 電子添文・患者向医薬品ガイド</a></li>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999017B1025_1?user=1" target="_blank" rel="noopener noreferrer">PMDA：セルセプト 電子添文・患者向医薬品ガイド</a></li>
      </ul>
      <p class="note">個人学習用の要約です。検査値の基準や対応は患者・測定条件・施設により異なります。処方変更は移植チームの判断に従ってください。資料確認日：2026年10月20日。</p>
    `
  ],
  [
    "第8回",
    "服薬支援と患者教育",
    "アドヒアランス、ティーチバック、相談行動。",
    `
      <h3>学習目標</h3>
      <p>服薬を続けにくい理由を確認し、患者の理解と生活に合わせた支援を考えられる。</p>

      <h3>1. 「飲めていますか」から一歩進める</h3>
      <p>服薬継続には、必要性の理解だけでなく、副作用、費用、生活時間、薬の管理、気分や認知機能、周囲の支援などが関わります。患者を責めず、実際の行動と困りごとを具体的に確認します。</p>
      <p>例えば「昨日は、どの薬を何時に飲みましたか」「飲みにくい時間や薬はありますか」と尋ねます。患者の希望を確認し、必要に応じて薬剤師、医師、ソーシャルワーカーなどと支援を考えます。</p>

      <h3>2. 生活の中で使える服薬計画</h3>
      <ul>
        <li>処方された製剤・量・時刻と、現在の薬剤一覧を確認する。</li>
        <li>起床、食事、仕事、通学などの生活時間を確認する。</li>
        <li>アラームやチェック表など、本人が使いやすい方法を選ぶ。</li>
        <li>薬ケースや一包化の可否は、保管条件も含めて薬剤師に確認する。</li>
        <li>残薬、次回処方、外出・災害時の備えを確認する。</li>
      </ul>
      <p>生活に合わせるためでも、服薬時刻や回数、製剤を自己判断で変更しません。必要な調整は移植チームと相談します。</p>

      <h3>3. ティーチバックで説明の伝わり方を確認する</h3>
      <p>ティーチバックは、患者が自分の言葉で説明することで、こちらの説明が伝わったかを確認する方法です。「分かりましたか？」だけでは理解を確認しきれません。</p>
      <ol>
        <li>重要な内容を短く、分かりやすい言葉で説明する。</li>
        <li>患者に、自分の言葉で方法を説明してもらう。</li>
        <li>行き違いがあれば、別の言い方で説明し直す。</li>
        <li>もう一度確認し、書面や薬剤一覧も一緒に見直す。</li>
      </ol>
      <p>患者を試す場にせず、「私の説明が分かりやすかったか確認したいので」と伝えます。資料を見ながらでも構いません。必要に応じ、実際の薬を用いて管理方法を示してもらいます。</p>

      <h3>4. 相談できることも学習目標</h3>
      <p>飲み忘れ、重複服用、嘔吐、続く下痢、副作用、薬が足りない場合などに、いつ・どこへ相談するかを確認します。夜間・休日の連絡先と、緊急時の対応も共有します。</p>
      <p>飲み忘れへの対応は製剤と状況によって異なります。自己判断で2回分をまとめて飲まず、事前の指示または移植チームへ確認します。他院受診や市販薬の購入時も、移植後であることと薬剤一覧を伝えます。</p>
      <p>家族やケアギバーとの情報共有は、本人の希望・同意と必要な支援を確認して進めます。説明は退院時の一度で終わらせず、処方や生活の変化に合わせて繰り返します。</p>

      <h3>振り返り</h3>
      <p>採血日の服薬について、ティーチバックを使って確認する質問を考えてください。</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">質問例を読む</summary>
        <p>「今回の採血日の薬について、私の説明が伝わったか確認させてください。前日の夜から採血後まで、どの薬をいつ飲む予定か、この薬剤一覧を見ながら教えていただけますか？」と尋ねます。回答を実際の指示と照合し、曖昧な点は医師・薬剤師に確認します。</p>
      </details>

      <h3>出典</h3>
      <ul>
        <li><a href="https://www.ahrq.gov/health-literacy/improve/precautions/tool5.html" target="_blank" rel="noopener noreferrer">AHRQ：Use the Teach-Back Method, Tool 5（第3版）</a></li>
        <li><a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/living-with-a-heart-transplant/heart-transplant-medicines/" target="_blank" rel="noopener noreferrer">NHS Blood and Transplant：Heart transplant medicines</a></li>
        <li><a href="https://www.ishlt.org/education-and-publications/standards-guidelines-detail/ishlt-guidelines-for-the-care-of-heart-transplant-recipients" target="_blank" rel="noopener noreferrer">ISHLT：心臓移植レシピエント管理ガイドライン</a></li>
      </ul>
      <p class="note">個人学習用の要約です。説明例は患者ごとの処方・指示に合わせて調整します。このアプリのメモに患者を特定できる情報を入力しないでください。資料確認日：2026年10月20日。</p>
    `
  ],
  [
    "第9回",
    "総合症例演習",
    "臨床状況から確認事項と報告内容を整理する。",
    `
      <h3>学習目標</h3>
      <p>架空症例から、緊急性・追加確認・報告内容を整理する。ここでの解説は考え方の例であり、個別患者への処方指示ではありません。</p>

      <h3>症例1：下痢と服薬への不安</h3>
      <p>MMFとタクロリムスを服用中です。「昨日から下痢が続き、食事と水分があまり取れない。薬をやめてよいか」と相談がありました。何を確認しますか？</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">考え方を読む</summary>
        <p>意識や全身状態、便の回数・性状、発熱・腹痛・血便、飲水・尿量、嘔吐と服薬状況を確認します。薬剤性だけでなく感染症、脱水、免疫抑制薬の濃度変動も考え、速やかに移植チームへ相談します。自己判断で免疫抑制薬を中止したり、下痢止めを追加したりしません。</p>
      </details>

      <h3>症例2：DSA陽性と正常に見える心機能</h3>
      <p>新たにDSAが陽性となりました。自覚症状はなく、心エコーでは明らかな変化がありません。どこまで判断できますか？</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">考え方を読む</summary>
        <p>DSA陽性だけではAMRと断定できず、無症状・心エコーの変化がないことだけでも拒絶反応を否定できません。DSAの推移、心筋生検などの結果・予定、服薬状況を確認し、移植チームへ今後の評価方針を確認します。独自に治療強化や経過観察を決めません。</p>
      </details>

      <h3>症例3：強い息切れと体調悪化</h3>
      <p>退院後の患者さんから、「急に息苦しくなり、会話もつらい」と連絡がありました。発熱ははっきりしません。詳しい薬剤一覧を確認してから連絡すればよいでしょうか？</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">考え方を読む</summary>
        <p>強い呼吸困難では、情報収集を終えるまで対応を遅らせません。救急要請を含む緊急対応を優先し、移植チームへ連絡します。発熱がないことを安心材料にせず、感染症、拒絶反応、その他の原因を医療チームが評価します。</p>
      </details>

      <h3>報告を組み立てる練習</h3>
      <p>各症例について、次の順に声に出して説明してください。</p>
      <ol>
        <li>現在の症状と緊急性。</li>
        <li>開始時期、普段との違い、分かっている測定値。</li>
        <li>関連する薬剤、服薬状況、検査結果。</li>
        <li>未確認事項と、指示を確認したい内容。</li>
      </ol>
      <p>「確認できた事実」と「考えられる原因」を分けて伝えます。この教材の架空症例を、実際の患者の情報に書き換えて公開しないでください。</p>

      <h3>出典</h3>
      <p>症例は本教材用の架空設定です。解説は次の資料と、第2〜5回の出典に基づきます。</p>
      <ul>
        <li><a href="https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3999017B1025_1?user=1" target="_blank" rel="noopener noreferrer">PMDA：セルセプト 電子添文・患者向医薬品ガイド</a></li>
        <li><a href="https://www.newcastle-hospitals.nhs.uk/resources/infection-after-a-transplant/" target="_blank" rel="noopener noreferrer">Newcastle Hospitals：Infection after a transplant（小児向け資料）</a></li>
        <li><a href="https://www.ishlt.org/education-and-publications/standards-guidelines-detail/ishlt-guidelines-for-the-care-of-heart-transplant-recipients" target="_blank" rel="noopener noreferrer">ISHLT：心臓移植レシピエント管理ガイドライン</a></li>
      </ul>
      <p class="note">個人学習用の架空症例です。実際の緊急対応・検査・処方は所属施設の手順と医療チームの判断に従ってください。資料確認日：2026年10月20日。</p>
    `
  ],
  [
    "第10回",
    "総まとめ",
    "薬剤、拒絶反応、感染症、看護観察をつなげる。",
    `
      <h3>学習目標</h3>
      <p>免疫抑制療法、拒絶反応、感染症、長期管理、患者教育を一つの流れとして説明できる。</p>

      <h3>1. 全体をつなぐ5つの視点</h3>
      <ol>
        <li><strong>移植心を守る：</strong>免疫抑制薬の継続と、拒絶反応の監視。</li>
        <li><strong>感染から守る：</strong>日常の予防、処方された予防薬、症状時の相談。</li>
        <li><strong>薬の影響を確認する：</strong>血中濃度、腎機能、電解質、血糖、血算など。</li>
        <li><strong>長期の健康を支える：</strong>CAV、代謝、骨・筋肉、悪性腫瘍などの管理。</li>
        <li><strong>生活で続けられるよう支える：</strong>理解、服薬管理、相談先、家族や多職種の支援。</li>
      </ol>

      <h3>2. 判断を急がないための確認</h3>
      <ul>
        <li>血中濃度は、服薬・採血時刻と製剤を確認して読む。</li>
        <li>DSA陽性だけでAMRと断定しない。</li>
        <li>心エコーに明らかな変化がなくても拒絶反応を否定しない。</li>
        <li>発熱がないことだけで感染症を否定しない。</li>
        <li>副作用と思っても、他の原因や相互作用を確認する。</li>
        <li>緊急性が高ければ、すべての情報がそろう前に連絡する。</li>
      </ul>

      <h3>3. 自分の言葉で説明する</h3>
      <p>次の内容を、患者さんに伝えるつもりで短く説明してください。説明が難しかった項目は、該当する講座を読み直しましょう。</p>
      <ol>
        <li>体調がよくても服薬と検査を続ける理由。</li>
        <li>採血日の服薬方法を事前に確認する理由。</li>
        <li>市販薬やサプリメントを追加する前に相談する理由。</li>
        <li>下痢・嘔吐が続くときに連絡する理由。</li>
        <li>夜間・休日も含め、困ったときにどこへ相談するか。</li>
      </ol>

      <h3>振り返り：看護の役割</h3>
      <p>看護師が、検査値を確認することに加えて担う役割を考えてください。</p>
      <details>
        <summary style="cursor: pointer; padding: 8px 0;">まとめの例を読む</summary>
        <p>体調・生活・服薬・検査をつなげ、普段との違いを捉えて報告すること、患者が困りごとを話せるように支えること、説明が伝わったか確かめることが大切です。診断や処方変更を自己判断せず、多職種で安全な継続療養を支えます。</p>
      </details>

      <h3>学習を続けるために</h3>
      <p>この10回は基礎を整理する教材です。読み終えたことが、臨床能力の認定や個別患者への診療判断を意味するものではありません。新しい処方や検査に出会ったら、最新の電子添文、ガイドライン、施設の手順へ戻って確認します。</p>

      <h3>出典・復習先</h3>
      <ul>
        <li>薬剤の具体的な情報：第2・3・7回に掲載したPMDA資料。</li>
        <li><a href="https://www.ishlt.org/education-and-publications/standards-guidelines-detail/ishlt-guidelines-for-the-care-of-heart-transplant-recipients" target="_blank" rel="noopener noreferrer">ISHLT：心臓移植レシピエント管理ガイドライン</a></li>
        <li><a href="https://www.nhsbt.nhs.uk/organ-transplantation/heart/living-with-a-heart-transplant/heart-transplant-medicines/" target="_blank" rel="noopener noreferrer">NHS Blood and Transplant：Heart transplant medicines</a></li>
        <li><a href="https://www.ahrq.gov/health-literacy/improve/precautions/tool5.html" target="_blank" rel="noopener noreferrer">AHRQ：Use the Teach-Back Method</a></li>
      </ul>
      <p class="note">個人学習用の総括です。患者ごとの判断は、最新の資料と所属施設・移植チームの指示に従ってください。資料確認日：2026年10月20日。</p>
    `
  ]
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
