import { readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../content/localization-audits/flashfluent-marketing-language-audit.csv', import.meta.url);
const fixes = {
  'course.startAria': { spanish: 'Empieza a aprender {course} con FlashFluent', french: 'Commencez à apprendre {course} avec FlashFluent' },
  'hero.googlePlayAlt': { korean: 'Google Play에서 다운로드하기' },
  'hero.appStoreAlt': { zh_hans: 'App Store — 即将推出', zh_hant: 'App Store — 即將推出', spanish: 'App Store — próximamente' },
  'faq.download.answer': {
    spanish: 'No. Puedes empezar en tu navegador en learn.flashfluent.app o descargar FlashFluent para Android en Google Play. La app para iPhone llegará pronto. Elige una de las tarjetas de idioma de esta página para abrir ese curso en tu navegador.',
    zh_hans: '不需要。您可以在浏览器中访问 learn.flashfluent.app，或从 Google Play 下载 Android 版 FlashFluent。iPhone 应用即将推出。选择此页面上的语言卡片，即可在浏览器中打开相应课程。',
    zh_hant: '不需要。您可以在瀏覽器中造訪 learn.flashfluent.app，或從 Google Play 下載 Android 版 FlashFluent。iPhone App 即將推出。選擇此頁面上的語言卡片，即可在瀏覽器中開啟相應課程。',
  },
  'modes.intro': { spanish: 'Conoce una colección con tarjetas ilustradas y luego practica cómo reconocer sus palabras por la vista y el sonido. Puedes pasar de una actividad a otra usando el mismo vocabulario.' },
  'modes.study.copy': { spanish: 'Explora tarjetas ilustradas a tu propio ritmo. Mira la palabra, escucha su pronunciación y consulta su significado en inglés. Marca las palabras que conoces y vuelve a las que necesitan otra revisión.' },
  'modes.listen.copy': {
    spanish: 'Escucha una palabra y elige la respuesta correcta. Repite el audio si necesitas escucharlo de nuevo y continúa con la colección. Es otra forma de practicar el mismo vocabulario.',
    japanese: '単語を聞いて、一致する答えを選択してください。もう一度聞きたいときは発音を再生し、コレクションの学習を続けましょう。同じ語彙を練習する別の方法です。',
    indonesian: 'Dengarkan sebuah kata dan pilih jawaban yang cocok. Putar ulang pengucapannya saat Anda perlu mendengarkannya lagi, lalu lanjutkan ke kartu berikutnya dalam koleksi. Ini adalah cara berbeda untuk melatih kosakata yang sama.',
    tagalog: 'Makinig sa isang salita at piliin ang katugmang sagot. I-replay ang pagbigkas kapag gusto mo itong marinig muli, pagkatapos ay ipagpatuloy ang pag-aaral sa koleksyon. Ito ay ibang paraan ng pagsasanay ng parehong bokabularyo.',
  },
  'modes.match.copy': {
    spanish: 'Relaciona una imagen con su palabra, o una palabra con su imagen, eligiendo en una cuadrícula de respuestas. Cada ronda te da otra oportunidad de reconocer el vocabulario, con comentarios sobre tus elecciones y una racha que puedes mantener.',
    zh_hans: '从答案网格中选择，将图片与对应的单词配对，或将单词与对应的图片配对。每一轮都让您再次练习识别词汇，并会根据您的选择提供反馈，帮助您累积连续答对的次数。',
    zh_hant: '從答案網格中選擇，將圖片與對應的單字配對，或將單字與對應的圖片配對。每一輪都讓您再次練習辨識詞彙，並會根據您的選擇提供回饋，幫助您累積連續答對的次數。',
    german: 'Ordnen Sie ein Bild seinem Wort oder ein Wort seinem Bild zu, indem Sie aus einem Antwortraster auswählen. Jede Runde gibt Ihnen eine weitere Gelegenheit, Vokabeln wiederzuerkennen, mit Feedback zu Ihren Entscheidungen und einer Serie, die Sie aufbauen können.',
    japanese: '答えの一覧から選んで、画像と単語、または単語と画像を組み合わせます。各ラウンドでは、選択へのフィードバックを受けながら語彙を認識する練習ができ、連続正解の記録を伸ばせます。',
    korean: '답변 그리드에서 선택해 그림과 단어, 또는 단어와 그림을 연결하세요. 매 라운드마다 선택에 대한 피드백을 받으며 어휘를 인식하는 연습을 하고, 연속 정답 기록을 이어갈 수 있습니다.',
    indonesian: 'Cocokkan gambar dengan katanya, atau kata dengan gambarnya, dengan memilih dari kumpulan jawaban. Setiap putaran memberi Anda kesempatan lain untuk mengenali kosakata, dengan umpan balik atas pilihan Anda serta rangkaian jawaban benar yang dapat Anda bangun.',
    tagalog: 'Itugma ang isang larawan sa salita nito, o isang salita sa larawan nito, sa pamamagitan ng pagpili mula sa isang grid ng mga sagot. Ang bawat round ay nagbibigay sa iyo ng isa pang pagkakataon na makilala ang bokabularyo, may feedback sa iyong mga pagpipilian, at pagkakataong mapahaba ang sunod-sunod mong tamang sagot.',
  },
  'faq.hints.answer': {
    spanish: 'Sí. Los controles de visualización te permiten ajustar las ilustraciones, los significados en inglés y las ayudas de lectura cuando estén disponibles. El mandarín tiene opciones de pinyin y escritura; el japonés y el coreano ofrecen guías de lectura.',
    japanese: 'はい。表示設定では、イラスト、英語の意味、利用可能な読み補助を調整できます。中国語にはピンインと表記のオプションがあり、日本語と韓国語には発音や読み方のヒントがあります。',
    korean: '네. 표시 설정에서 그림, 영어 뜻, 제공되는 읽기 보조를 조정할 수 있습니다. 중국어에는 병음과 문자 표기 옵션이 있으며, 일본어와 한국어에는 발음과 읽는 법을 돕는 안내가 있습니다.',
  },
  'future.copy': {
    zh_hans: '我们正在努力提供十门可用的语言课程，并让更多人能够使用。志愿者可以帮助教师和学校开始使用 FlashFluent、审核语言内容、提供辅导支持，并创建与学校课程相一致的定制课程。',
    zh_hant: '我們正努力提供十門可用的語言課程，並讓更多人能夠使用。志工可以協助教師與學校開始使用 FlashFluent、審核語言內容、提供輔導支援，並建立與學校課程一致的客製化課程。',
    spanish: 'Estamos trabajando para ofrecer diez cursos de idiomas y un acceso más amplio. Los voluntarios pueden ayudar a docentes y escuelas a empezar a usar FlashFluent, revisar contenido lingüístico, ofrecer apoyo de tutoría y crear un plan de estudios personalizado alineado con las lecciones escolares.',
    french: 'Nous travaillons à proposer dix cours de langue et un accès plus large. Les bénévoles peuvent aider les enseignants et les écoles à commencer à utiliser FlashFluent, relire le contenu linguistique, proposer du tutorat et créer un programme personnalisé aligné sur les cours scolaires.',
    german: 'Wir arbeiten daran, zehn Sprachkurse anzubieten und den Zugang zu erweitern. Freiwillige können Lehrkräfte und Schulen bei der Einführung von FlashFluent unterstützen, Sprachinhalte prüfen, Nachhilfe anbieten und individuelle Lehrpläne erstellen, die auf den Schulunterricht abgestimmt sind.',
    japanese: '私たちは、利用できる言語コースを10コースに増やし、より幅広い人に届けることを目指しています。ボランティアは、教師や学校への導入支援、言語コンテンツのレビュー、個別指導のサポート、学校の授業に合わせたカスタムカリキュラムの作成に協力できます。',
    korean: '우리는 제공 가능한 언어 코스를 10개로 늘리고 더 많은 사람이 이용할 수 있도록 노력하고 있습니다. 자원봉사자는 교사와 학교의 도입을 돕고, 언어 콘텐츠를 검토하며, 개인 지도 지원을 제공하고, 학교 수업에 맞는 맞춤형 커리큘럼을 만들 수 있습니다.',
    indonesian: 'Kami sedang berupaya menyediakan sepuluh kursus bahasa dan akses yang lebih luas. Relawan dapat membantu guru dan sekolah mulai menggunakan FlashFluent, meninjau konten bahasa, menawarkan dukungan bimbingan belajar, dan membuat kurikulum khusus yang selaras dengan pelajaran sekolah.',
    tagalog: 'Nagsisikap kaming magbigay ng sampung kurso sa wika at mas malawak na access. Makakatulong ang mga boluntaryo sa mga guro at paaralan na simulan ang paggamit ng FlashFluent, mag-review ng language content, mag-alok ng suporta sa pagtuturo, at lumikha ng custom na kurikulum na nakaayon sa mga aralin sa paaralan.',
  },
  'future.languages.copy': { korean: '다음 제품 목표는 10개의 언어 코스를 제공하여 더 많은 사람이 학교, 직장, 일상생활에서 실용적인 언어 지원을 받을 수 있도록 하는 것입니다.' },
  'future.support.copy': {
    zh_hans: '提供辅导或审核语言内容，帮助学校采用 FlashFluent，或分享课程设计经验。捐款有助于支付服务器、托管、开发、语言扩展，以及最重要的——让更多人能够使用。',
    zh_hant: '提供輔導或審核語言內容，協助學校採用 FlashFluent，或分享課程設計經驗。捐款有助於支付伺服器、託管、開發、語言擴展，以及最重要的——讓更多人能夠使用。',
    spanish: 'Ofrece tutoría o revisa contenido lingüístico, ayuda a una escuela a adoptar FlashFluent o aporta experiencia curricular. Las donaciones ayudan a cubrir servidores, alojamiento, desarrollo, expansión de idiomas y, sobre todo, un acceso más amplio.',
    french: 'Proposez du tutorat ou relisez le contenu linguistique, aidez une école à adopter FlashFluent ou apportez votre expérience en matière de programmes scolaires. Les dons contribuent à couvrir les serveurs, l’hébergement, le développement, l’extension linguistique et, surtout, un accès plus large.',
    german: 'Bieten Sie Nachhilfe an oder prüfen Sie Sprachinhalte, helfen Sie einer Schule bei der Einführung von FlashFluent oder bringen Sie Erfahrungen mit Lehrplänen ein. Spenden helfen, Server, Hosting, Entwicklung, Spracherweiterung und vor allem einen breiteren Zugang zu finanzieren.',
    japanese: '個別指導や言語コンテンツのレビューを提供したり、学校での FlashFluent 導入を支援したり、カリキュラム作成の経験を生かしたりできます。寄付は、サーバー、ホスティング、開発、言語の拡張、そして何より多くの人が利用できる環境づくりを支えます。',
    korean: '개인 지도를 제공하거나 언어 콘텐츠를 검토하고, 학교의 FlashFluent 도입을 돕거나, 커리큘럼 경험을 나눌 수 있습니다. 기부금은 서버, 호스팅, 개발, 언어 확장과 무엇보다 더 많은 사람이 이용할 수 있는 환경을 지원합니다.',
    indonesian: 'Tawarkan bimbingan belajar atau tinjau konten bahasa, bantu sekolah menerapkan FlashFluent, atau sumbangkan pengalaman menyusun kurikulum. Donasi membantu membiayai server, hosting, pengembangan, perluasan bahasa, dan yang terpenting, akses yang lebih luas.',
    tagalog: 'Mag-alok ng pagtuturo o mag-review ng language content, tulungan ang isang paaralan na gamitin ang FlashFluent, o mag-ambag ng karanasan sa kurikulum. Nakakatulong ang mga donasyon na tustusan ang mga server, hosting, development, pagpapalawak ng wika, at higit sa lahat, mas malawak na access.',
  },
};

function parseCsv(text) {
  const rows = []; let row = []; let value = ''; let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (quoted && character === '"' && text[index + 1] === '"') { value += '"'; index += 1; }
    else if (character === '"') quoted = !quoted;
    else if (!quoted && character === ',') { row.push(value); value = ''; }
    else if (!quoted && character === '\n') { row.push(value); rows.push(row); row = []; value = ''; }
    else if (character !== '\r') value += character;
  }
  if (value || row.length) { row.push(value); rows.push(row); }
  return rows;
}

const rows = parseCsv(await readFile(sourcePath, 'utf8'));
const [header, ...messages] = rows;
for (const row of messages) for (const [language, value] of Object.entries(fixes[row[0]] ?? {})) row[header.indexOf(language)] = value;
const quote = value => `"${String(value).replaceAll('"', '""')}"`;
await writeFile(sourcePath, `${[header, ...messages].map(row => row.map(quote).join(',')).join('\n')}\n`);
