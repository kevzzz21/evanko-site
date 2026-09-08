/* eslint-disable next/no-img-element -- Static export uses local images without an image server. */
const projects = [
  { name: 'Gardenish', href: 'https://gardenish.co', image: '/gardenishlogo.png' },
  { name: 'FlashFluent', href: 'https://flashfluent.app', image: '/FlashFluentLogo.jpg' },
];

export default function Home() {
  return (
    <div className="page">
      <header className="masthead">The Evanko Foundation<span aria-hidden="true">EF.</span></header>
      <main>
        <section className="mission" aria-labelledby="mission-title">
          <h1 id="mission-title">Knowledge<br />is power<span className="accent">.</span></h1>
          <p>The Evanko Foundation is a 501(c)(3) nonprofit dedicated to education.</p>
        </section>
        <section className="section" aria-labelledby="funding-title">
          <h2 id="funding-title">01 / What we fund</h2>
          <div className="section-content">
            <p className="placeholder-label">Placeholder · funding focus</p>
            <p>Educational tools. Open learning resources. New ways to share knowledge.</p>
            <p className="muted">More about the projects we support will go here.</p>
          </div>
        </section>
        <section className="section" aria-labelledby="projects-title">
          <h2 id="projects-title">02 / Our projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project" href={project.href} key={project.name}>
                <img src={project.image} alt="" width="100" height="100" />
                <span>{project.name}<span className="arrow" aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </section>
        <section className="section contact" aria-labelledby="contact-title">
          <h2 id="contact-title">03 / Get in touch</h2>
          <div className="section-content">
            <p className="placeholder-label">Placeholder · contact</p>
            <p>Contact details coming soon.</p>
          </div>
        </section>
      </main>
      <footer><span>Evanko Foundation</span><span>Education.</span></footer>
    </div>
  );
}
