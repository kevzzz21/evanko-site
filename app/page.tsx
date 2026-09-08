/* eslint-disable next/no-img-element -- Static export uses local images without an image server. */
const projects = [
  { name: 'Gardenish', href: 'https://gardenish.co', image: '/gardenishlogo.png' },
  { name: 'FlashFluent', href: 'https://flashfluent.app', image: '/FlashFluentLogo.jpg' },
];

export default function Home() {
  return (
    <div className="page">
      <header className="masthead">The Evanko Foundation</header>
      <main>
        <section className="mission" aria-labelledby="mission-title">
          <h1 id="mission-title">Knowledge<br />is power.</h1>
          <p>A 501(c)(3) nonprofit dedicated to education.</p>
        </section>
        <section className="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Our projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project" href={project.href} key={project.name}>
                <img src={project.image} alt="" width="88" height="88" />
                <span>{project.name}<span className="arrow" aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer>Evanko Foundation</footer>
    </div>
  );
}
