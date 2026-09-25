/* eslint-disable next/no-img-element -- Static export uses local images without an image server. */
const projects = [
  { name: 'FlashFluent', href: 'https://flashfluent.app/', image: '/project-previews/flashfluent-home.png', alt: 'FlashFluent homepage preview' },
  { name: 'Gardenish', href: 'https://gardenish.co/', image: '/project-previews/gardenish-home.png', alt: 'Gardenish homepage preview' },
];

export default function Home() {
  return (
    <div className="page">
      <header className="masthead">The Evanko Foundation</header>
      <main>
        <section className="mission" aria-labelledby="mission-title">
          <h1 id="mission-title">Access changes<br />everything<span className="accent">.</span></h1>
          <p>The Evanko Foundation is a 501(c)(3) nonprofit dedicated to expanding access to information and supporting the next generation of entrepreneurs.</p>
        </section>
        <section className="section projects" aria-labelledby="projects-title">
          <div className="section-intro">
            <h2 id="projects-title">1 / In-house projects</h2>
            <p className="project-intro">Created and maintained by the foundation. Gardenish organizes plant information. FlashFluent supports clearer foreign-language communication in business.</p>
          </div>
          <div className="project-previews">
            {projects.map((project) => (
              <a className="project-preview" href={project.href} key={project.name}>
                <img src={project.image} alt={project.alt} />
                <span>{project.name}<span className="arrow" aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </section>
        <section className="section" aria-labelledby="funding-title">
          <h2 id="funding-title">2 / What we fund</h2>
          <div className="section-content">
            <p>We support projects that make data easier to share and information easier to access, organize, and use.</p>
            <p className="funding-request">We accept funding requests for projects that expand access to information or support the next generation of entrepreneurs and small business owners.</p>
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
      <footer>
        <span>© The Evanko Foundation 2026 · EIN 33-2430782</span>
        <span>24124 Decorah Rd, Diamond Bar, CA 91765</span>
      </footer>
    </div>
  );
}
