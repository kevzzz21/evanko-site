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
          <h1 id="mission-title">Knowledge<br />is power<span className="accent">.</span></h1>
          <p>The Evanko Foundation is a 501(c)(3) nonprofit dedicated to education.</p>
        </section>
        <section className="section" aria-labelledby="projects-title">
          <h2 id="projects-title">1 / In-house projects</h2>
          <div className="section-content">
            <p className="project-intro">Created and maintained by the foundation.</p>
            <div className="project-list">
            {projects.map((project) => (
              <a className="project" href={project.href} key={project.name}>
                <img src={project.image} alt="" width="100" height="100" />
                <span>{project.name}<span className="arrow" aria-hidden="true">↗</span></span>
              </a>
            ))}
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="funding-title">
          <h2 id="funding-title">2 / What we fund</h2>
          <div className="section-content">
            <p>We support projects that make data easier to share, information easier to access, and education more accessible.</p>
            <p className="funding-request">We accept funding requests for projects focused on education or supporting the next generation of leaders, educators, and entrepreneurs.</p>
          </div>
        </section>
        <section className="section contact" aria-labelledby="contact-title">
          <h2 id="contact-title">3 / Get in touch</h2>
          <div className="section-content">
            <p>For funding requests or questions, get in touch.</p>
            <p className="contact-email"><a href="mailto:kyle@evanko.co">kyle@evanko.co<span className="arrow" aria-hidden="true">↗</span></a></p>
          </div>
        </section>
      </main>
      <footer>© The Evanko Foundation 2026</footer>
    </div>
  );
}
