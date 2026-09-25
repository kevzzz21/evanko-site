const thumbnails = 'elephant,giraffe,fox,koala,lion,tiger,panda,penguin,owl,monkey,zebra,wolf,dolphin,orca,toucan,turtle,rabbit,horse,bear,sloth,walrus,manatee,tree-frog,chameleon,iguana,alligator,bangs,adult,be-cheated,arctic,ambulance,add,alpaca,be-bald,aunt,be-enough,aurora,be-stuck-in-traffic,almond,ant,be-handsome,daughter,be-in-theaters,bay,bicycle,apple,armadillo,beautiful,everyone,be-mistaken,beach,boat,apricot,badger,beauty-mark,extended-family,believe,canyon,bullet-train,artichoke,black-hair,father,bite,cave,bus,arugula,beaver,blonde-hair,friend,blow,cliff,car,asparagus,bee,blue-hair,guest,borrow,coral-reef,ferry,avocado,beetle,braids,man,catch-a-cold,countryside,fire-truck,bagel,bird,brown-hair,mother,chat,desert,garbage-truck,baguette,bison,curly-hair,mr,climb-a-mountain,forest,gondola,bake,black-panther,cute,mrs,coming-home,geyser,helicopter,banana-bread,butterfly,dark-circles,name,comprehend,glacier,hot-air-balloon,banana,capybara,dye-hair,neighbor,deliver,grassland,lifeboat,be-delicious-to-drink,cat,dyed-red-hair,older-brother,draw,hot-spring,motorcycle,be-delicious,caterpillar,fat,older-sister,drop,iceberg,plane,beans,centipede,good-looking,parents,exchange,island,police-car,beef,gray-hair,people,flow-likeariver,lake,rv,beer,cheetah,hair-updo,relationship,get-up,moon,sailboat,beet,chicken,have-beard,siblings,give-back,mountain-peak,school-bus,bell-pepper,chimpanzee,have-dimples,son,go-out-into-town,mountain-range,scooter,bitter-melon,clownfish,have-freckles,uncle,gossip,mountain,ship,bitter,cobra,have-tattoos,woman,grab,ocean-trench,skateboard,black-pepper,cockatoo,have-wrinkles,younger-brother,hand-over,plain,submarine,blackberry,coral,long-eyelashes,younger-sister,have-a-party,plateau,subway,blueberry,cow,long-hair'.split(',');

const courses = [
  ['mandarin', 'chinese-flag.png', '中文 (Mandarin)'], ['japanese', 'japanese-flag.png', '日本語 (Japanese)'],
  ['korean', 'korean-flag.png', '한국어 (Korean)'], ['spanish', 'mexican-flag.png', 'Español'],
  ['french', 'french-flag.png', 'Français'], ['german', 'german-flag.png', 'Deutsch'],
];

export default function Home() {
  return <div className="foundation-page">
    <section className="foundation-intro" aria-labelledby="foundation-title">
      <div className="shell foundation-intro__inner">
        <h1 id="foundation-title">The Evanko Foundation</h1>
        <p className="foundation-mission">A 501(c)(3) nonprofit dedicated to expanding access to information and supporting the next generation of entrepreneurs.</p>
        <p className="foundation-details">© The Evanko Foundation 2026 <span aria-hidden="true">·</span> EIN 33-2430782 <span aria-hidden="true">·</span> 24124 Decorah Rd, Diamond Bar, CA 91765</p>
        <p className="foundation-purpose">We support projects that make data easier to share and information easier to access, organize, and use.</p>
        <p className="foundation-contact">For funding requests or questions, get in touch. <a href="mailto:kyle@evanko.co">kyle@evanko.co</a></p>
        <p className="foundation-project">Our latest project: FlashFluent</p>
      </div>
    </section>

    <main>
      <section className="ff-hero shell">
        <div>
          <p className="ff-eyebrow">Over 1,600 illustrated terms</p>
          <h2>Flashcards for<br />faster learning</h2>
          <p className="ff-copy">Enjoy Premium membership free, provided by the Evanko Foundation, a 501(c)(3) nonprofit.</p>
          <a className="ff-button" href="#courses">Explore FlashFluent</a>
        </div>
        <div className="collection-wall" aria-label="A moving collection of FlashFluent illustrated terms">
          {Array.from({ length: 5 }, (_, row) => {
            const items = thumbnails.slice(row * 40, row * 40 + 40);
            return <div className="collection-row" key={row}><div className="collection-track">{[...items, ...items].map((name, i) => <span className="collection-cell" key={`${name}-${i}`}><img src={`/flashfluent-assets/collection/${name}.webp`} alt="" /></span>)}</div></div>;
          })}
        </div>
      </section>

      <section id="courses" className="ff-courses"><div className="shell">
        <h2>Learn for Free</h2>
        <div className="course-grid">{courses.map(([slug, flag, name]) => <a className="course" href={`https://learn.flashfluent.app/?course=${slug}`} key={slug}><img src={`/flashfluent-assets/course-flags/${flag}`} alt="" /><strong>{name}</strong></a>)}</div>
      </div></section>
    </main>
  </div>;
}
