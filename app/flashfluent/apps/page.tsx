'use client';

import { useEffect, useState } from 'react';
import './launch-page.css';

type Language = {
  label: string;
  title: string;
  announcement: string;
  intro: string;
  syncTitle: string;
  syncBody: string;
  encouragement: string;
  continue: string;
  learnTitle: string;
  learnBody: string;
  storeLabel: string;
  languageLabel: string;
  privacy: string;
  contact: string;
  terms: string;
  artworkAlt: string;
  syncAlt: string;
};

const content: Record<string, Language> = {
  en: {
    label: 'English', title: '🎉 Big news!',
    announcement: 'FlashFluent is now available on iPhone and Android.',
    intro: 'Your next small win can happen wherever you are. Keep building your language skills during a moment at home, between classes, on a break, or whenever you have a minute to practice.',
    syncTitle: 'Your progress comes with you.',
    syncBody: 'Sign in with the same email address you already use for FlashFluent. When you are signed in and online, your account and saved learning progress stay connected across your phone and desktop.',
    encouragement: 'Every card you learn and every practice session you finish adds up. We are excited to keep learning with you.',
    continue: 'Continue Learning Now', learnTitle: 'Learn your way.',
    learnBody: 'FlashFluent also works in your browser on phones, tablets, and computers. Log in on any device with the same email address, or download the app above to keep learning on the go.',
    storeLabel: 'Download FlashFluent', languageLabel: 'Read this page in', privacy: 'Privacy Policy', contact: 'Contact', terms: 'Terms of Use', artworkAlt: 'A selection of FlashFluent illustrated vocabulary cards', syncAlt: 'FlashFluent keeps learning progress connected across devices',
  },
  'zh-Hans': {
    label: '简体中文', title: '🎉 好消息！',
    announcement: 'FlashFluent 现已登陆 iPhone 和 Android。',
    intro: '无论身在何处，下一个小小的进步都在等着你。无论是在家里的片刻、课间休息、工作间隙，还是有一分钟可以练习的时候，都可以继续提升你的语言能力。',
    syncTitle: '你的学习进度会一直陪着你。',
    syncBody: '使用你已有的 FlashFluent 邮箱地址登录。登录并联网后，你的账户和已保存的学习进度会在手机和电脑之间保持同步。',
    encouragement: '你学会的每张卡片、完成的每一次练习，都会带来进步。我们很高兴能继续陪你学习。',
    continue: '立即继续学习', learnTitle: '按自己的方式学习。',
    learnBody: 'FlashFluent 也可以在手机、平板和电脑的浏览器中使用。使用同一邮箱在任何设备上登录，或下载上方的应用，随时随地继续学习。',
    storeLabel: '下载 FlashFluent', languageLabel: '阅读语言', privacy: '隐私政策', contact: '联系我们', terms: '使用条款', artworkAlt: '多张 FlashFluent 插画词汇卡', syncAlt: 'FlashFluent 在设备间同步学习进度',
  },
  'zh-Hant': {
    label: '繁體中文', title: '🎉 好消息！',
    announcement: 'FlashFluent 現已登陸 iPhone 和 Android。',
    intro: '無論身在何處，下一個小小的進步都在等著你。無論是在家裡的片刻、課間休息、工作空檔，還是有一分鐘可以練習的時候，都可以繼續提升你的語言能力。',
    syncTitle: '你的學習進度會一直陪著你。',
    syncBody: '使用你已有的 FlashFluent 電子郵件地址登入。登入並連線後，你的帳戶和已儲存的學習進度會在手機和電腦之間保持同步。',
    encouragement: '你學會的每張卡片、完成的每一次練習，都會帶來進步。我們很高興能繼續陪你學習。',
    continue: '立即繼續學習', learnTitle: '用自己的方式學習。',
    learnBody: 'FlashFluent 也可以在手機、平板和電腦的瀏覽器中使用。使用同一電子郵件地址在任何裝置上登入，或下載上方的 App，隨時隨地繼續學習。',
    storeLabel: '下載 FlashFluent', languageLabel: '閱讀語言', privacy: '隱私權政策', contact: '聯絡我們', terms: '使用條款', artworkAlt: '多張 FlashFluent 插畫詞彙卡', syncAlt: 'FlashFluent 在裝置間同步學習進度',
  },
  'es-MX': {
    label: 'Español', title: '🎉 ¡Grandes noticias!',
    announcement: 'FlashFluent ya está disponible para iPhone y Android.',
    intro: 'Tu próxima pequeña victoria puede ocurrir donde estés. Sigue desarrollando tus habilidades lingüísticas en casa, entre clases, durante un descanso o cuando tengas un minuto para practicar.',
    syncTitle: 'Tu progreso va contigo.',
    syncBody: 'Inicia sesión con la misma dirección de correo electrónico que ya usas para FlashFluent. Cuando hayas iniciado sesión y estés en línea, tu cuenta y tu progreso guardado se mantienen conectados entre tu teléfono y tu computadora.',
    encouragement: 'Cada tarjeta que aprendes y cada sesión de práctica que terminas cuenta. Nos emociona seguir aprendiendo contigo.',
    continue: 'Seguir aprendiendo ahora', learnTitle: 'Aprende a tu manera.',
    learnBody: 'FlashFluent también funciona en el navegador de tu teléfono, tableta o computadora. Inicia sesión en cualquier dispositivo con la misma dirección de correo electrónico o descarga la app de arriba para seguir aprendiendo donde estés.',
    storeLabel: 'Descargar FlashFluent', languageLabel: 'Leer esta página en', privacy: 'Política de privacidad', contact: 'Contacto', terms: 'Términos de uso', artworkAlt: 'Una selección de tarjetas de vocabulario ilustradas de FlashFluent', syncAlt: 'FlashFluent mantiene conectado el progreso de aprendizaje entre dispositivos',
  },
  'fr-FR': {
    label: 'Français', title: '🎉 Grande nouvelle !',
    announcement: 'FlashFluent est maintenant disponible sur iPhone et Android.',
    intro: 'Votre prochaine petite victoire peut arriver où que vous soyez. Continuez à développer vos compétences linguistiques à la maison, entre deux cours, pendant une pause ou chaque fois que vous avez une minute pour vous exercer.',
    syncTitle: 'Vos progrès vous accompagnent.',
    syncBody: 'Connectez-vous avec l’adresse e-mail que vous utilisez déjà pour FlashFluent. Lorsque vous êtes connecté et en ligne, votre compte et vos progrès enregistrés restent synchronisés entre votre téléphone et votre ordinateur.',
    encouragement: 'Chaque carte apprise et chaque séance terminée comptent. Nous sommes ravis de continuer à apprendre avec vous.',
    continue: 'Continuer à apprendre', learnTitle: 'Apprenez à votre façon.',
    learnBody: 'FlashFluent fonctionne aussi dans le navigateur de votre téléphone, tablette ou ordinateur. Connectez-vous sur n’importe quel appareil avec la même adresse e-mail, ou téléchargez l’application ci-dessus pour apprendre où que vous soyez.',
    storeLabel: 'Télécharger FlashFluent', languageLabel: 'Lire cette page en', privacy: 'Politique de confidentialité', contact: 'Contact', terms: 'Conditions d’utilisation', artworkAlt: 'Une sélection de cartes de vocabulaire illustrées FlashFluent', syncAlt: 'FlashFluent synchronise les progrès entre les appareils',
  },
  'id-ID': {
    label: 'Bahasa Indonesia', title: '🎉 Kabar besar!',
    announcement: 'FlashFluent sekarang tersedia di iPhone dan Android.',
    intro: 'Kemajuan kecil berikutnya bisa terjadi di mana saja. Terus kembangkan kemampuan bahasamu saat di rumah, di sela kelas, saat istirahat, atau kapan pun kamu punya satu menit untuk berlatih.',
    syncTitle: 'Progresmu ikut ke mana pun kamu pergi.',
    syncBody: 'Masuk dengan alamat email yang sudah kamu gunakan untuk FlashFluent. Saat kamu masuk dan terhubung ke internet, akun dan progres belajarmu yang tersimpan akan tetap tersinkron antara ponsel dan komputer.',
    encouragement: 'Setiap kartu yang kamu pelajari dan setiap sesi latihan yang kamu selesaikan berarti. Kami senang bisa terus belajar bersamamu.',
    continue: 'Lanjut Belajar Sekarang', learnTitle: 'Belajar dengan caramu.',
    learnBody: 'FlashFluent juga bisa digunakan di browser pada ponsel, tablet, dan komputer. Masuklah di perangkat apa pun dengan alamat email yang sama, atau unduh aplikasi di atas untuk terus belajar saat bepergian.',
    storeLabel: 'Unduh FlashFluent', languageLabel: 'Baca halaman ini dalam', privacy: 'Kebijakan Privasi', contact: 'Kontak', terms: 'Ketentuan Penggunaan', artworkAlt: 'Pilihan kartu kosakata bergambar FlashFluent', syncAlt: 'FlashFluent menyinkronkan progres belajar antarperangkat',
  },
  'ja-JP': {
    label: '日本語', title: '🎉 ビッグニュースです！',
    announcement: 'FlashFluent が iPhone と Android で使えるようになりました。',
    intro: '次の小さな達成は、どこにいても手に入ります。自宅でのちょっとした時間、授業の合間、休憩中など、1分でも練習できるときに、語学力を育て続けましょう。',
    syncTitle: '学習の進み具合は、いつでもあなたと一緒です。',
    syncBody: 'すでに FlashFluent で使っているメールアドレスでサインインしてください。サインインしてオンラインなら、アカウントと保存した学習の進み具合はスマートフォンとパソコンの間で同期されます。',
    encouragement: '覚えたカードも、終えた練習も、すべて積み重なります。これからも一緒に学べることを楽しみにしています。',
    continue: '今すぐ学習を続ける', learnTitle: '自分らしい方法で学ぼう。',
    learnBody: 'FlashFluent はスマートフォン、タブレット、パソコンのブラウザでも使えます。同じメールアドレスでどの端末からでもサインインするか、上のアプリをダウンロードして外出先でも学習を続けましょう。',
    storeLabel: 'FlashFluent をダウンロード', languageLabel: 'このページの言語', privacy: 'プライバシーポリシー', contact: 'お問い合わせ', terms: '利用規約', artworkAlt: 'FlashFluent のイラスト付き単語カード', syncAlt: 'FlashFluent が端末間で学習の進み具合を同期',
  },
  'ko-KR': {
    label: '한국어', title: '🎉 큰 소식이에요!',
    announcement: '이제 FlashFluent를 iPhone과 Android에서 이용할 수 있습니다.',
    intro: '다음 작은 성취는 어디에서든 찾아올 수 있어요. 집에서 잠깐, 수업 사이, 쉬는 시간처럼 1분이라도 연습할 수 있을 때 언어 실력을 계속 키워 보세요.',
    syncTitle: '학습 기록은 언제나 함께합니다.',
    syncBody: '기존에 FlashFluent에 사용하던 같은 이메일 주소로 로그인하세요. 로그인한 상태에서 온라인에 연결되어 있으면 계정과 저장된 학습 기록이 휴대폰과 컴퓨터 사이에서 계속 동기화됩니다.',
    encouragement: '배운 카드 한 장, 끝낸 연습 한 번이 모두 쌓입니다. 앞으로도 함께 배워 갈 수 있어 기쁩니다.',
    continue: '지금 학습 계속하기', learnTitle: '나만의 방식으로 배우세요.',
    learnBody: 'FlashFluent는 휴대폰, 태블릿, 컴퓨터의 브라우저에서도 사용할 수 있습니다. 같은 이메일 주소로 어느 기기에서나 로그인하거나 위의 앱을 내려받아 이동 중에도 학습을 이어가세요.',
    storeLabel: 'FlashFluent 다운로드', languageLabel: '페이지 언어', privacy: '개인정보 처리방침', contact: '문의하기', terms: '이용약관', artworkAlt: 'FlashFluent 일러스트 단어 카드 모음', syncAlt: 'FlashFluent가 기기 간 학습 기록을 동기화',
  },
  'tl-PH': {
    label: 'Tagalog', title: '🎉 Malaking balita!',
    announcement: 'Available na ang FlashFluent sa iPhone at Android.',
    intro: 'Maaaring mangyari ang susunod mong maliit na tagumpay nasaan ka man. Ipagpatuloy ang paglinang ng iyong kasanayan sa wika habang nasa bahay, sa pagitan ng mga klase, sa pahinga, o kapag mayroon kang isang minutong magpraktis.',
    syncTitle: 'Kasama mo ang iyong progreso.',
    syncBody: 'Mag-sign in gamit ang parehong email address na ginagamit mo na sa FlashFluent. Kapag naka-sign in ka at online, mananatiling konektado ang iyong account at naka-save na progreso sa pag-aaral sa iyong telepono at computer.',
    encouragement: 'Mahalaga ang bawat card na natututuhan mo at bawat practice session na natatapos mo. Excited kaming magpatuloy sa pagkatuto kasama ka.',
    continue: 'Ipagpatuloy ang Pag-aaral', learnTitle: 'Matuto sa paraang para sa iyo.',
    learnBody: 'Gumagana rin ang FlashFluent sa browser ng mga telepono, tablet, at computer. Mag-log in sa anumang device gamit ang parehong email address, o i-download ang app sa itaas para magpatuloy sa pag-aaral kahit saan.',
    storeLabel: 'I-download ang FlashFluent', languageLabel: 'Basahin ang pahinang ito sa', privacy: 'Patakaran sa Privacy', contact: 'Makipag-ugnayan', terms: 'Mga Tuntunin sa Paggamit', artworkAlt: 'Piling FlashFluent na may larawang vocabulary card', syncAlt: 'Isinasabay ng FlashFluent ang progreso sa pag-aaral sa iba’t ibang device',
  },
};

const languages = Object.keys(content);
const defaultLanguage = 'en';

function languageFromSearch(search: string) {
  const requested = new URLSearchParams(search).get('lang');
  return requested && content[requested] ? requested : defaultLanguage;
}

export default function FlashFluentAppsPage() {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => setLanguage(languageFromSearch(window.location.search)), []);

  const copy = content[language];
  const setSelectedLanguage = (nextLanguage: string) => {
    setLanguage(nextLanguage);
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set('lang', nextLanguage);
    window.history.replaceState({}, '', nextUrl);
  };

  return (
    <main className="ff-launch-page" lang={language}>
      <section className="ff-launch-card" aria-labelledby="ff-launch-heading">
        <div className="ff-launch-masthead">FlashFluent</div>
        <nav className="ff-language-picker" aria-label={copy.languageLabel}>
          <span className="ff-language-label">{copy.languageLabel}:</span>
          <div className="ff-language-links">
            {languages.map((code) => (
              <a
                aria-current={code === language ? 'page' : undefined}
                className={code === language ? 'is-selected' : undefined}
                href={`/flashfluent/apps?lang=${encodeURIComponent(code)}`}
                key={code}
                onClick={(event) => { event.preventDefault(); setSelectedLanguage(code); }}
              >
                {content[code].label}
              </a>
            ))}
          </div>
        </nav>

        <div className="ff-launch-content">
          <h1 id="ff-launch-heading">{copy.title}</h1>
          <p className="ff-launch-lede">{copy.announcement}</p>
          <p>{copy.intro}</p>

          <div className="ff-store-links" aria-label={copy.storeLabel}>
            <a href="https://apps.apple.com/us/app/flashfluent-2/id6835638536">
              <img alt="Download on the App Store" src="/images/email/flashfluent-app-launch/app-store-badge.png" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.evankofoundation.flashfluent">
              <img alt="Get it on Google Play" src="/images/email/flashfluent-app-launch/google-play-badge.png" />
            </a>
          </div>

          <img className="ff-sync-art" alt={copy.syncAlt} src="/images/email/flashfluent-app-launch/cloudsync.png" />

          <section className="ff-copy-section" aria-labelledby="ff-sync-heading">
            <h2 id="ff-sync-heading">{copy.syncTitle}</h2>
            <p>{copy.syncBody}</p>
            <p>{copy.encouragement}</p>
          </section>

          <div className="ff-cta-wrap">
            <a className="ff-cta" href="https://learn.flashfluent.app">{copy.continue}</a>
          </div>

          <section className="ff-copy-section" aria-labelledby="ff-learn-heading">
            <h2 id="ff-learn-heading">{copy.learnTitle}</h2>
            <p>{copy.learnBody}</p>
          </section>

          <a className="ff-collage-link" href="https://learn.flashfluent.app">
            <img alt={copy.artworkAlt} src="/images/email/flashfluent-app-launch/email-square-collage.png" />
          </a>
        </div>
      </section>

      <footer className="ff-launch-footer">
        <p>FlashFluent · Supported by the Evanko Foundation, a 501(c)(3) nonprofit.</p>
        <p>
          <a href="https://flashfluent.app/privacy">{copy.privacy}</a><span>·</span>
          <a href="https://flashfluent.app/contact">{copy.contact}</a><span>·</span>
          <a href="https://flashfluent.app/terms">{copy.terms}</a>
        </p>
      </footer>
    </main>
  );
}
