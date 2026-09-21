import SiteFrame from './site-frame';

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return <SiteFrame activePage="/">
    <section className="hero wrap">
        <div className="eyebrow"><span className="status-dot" /> Aerosol microphysics · Clouds · Climate</div>
        <div className="hero-heading"><h1>Small particles.<br /><span>Planetary consequences.</span></h1><p>I study aerosol microphysics to understand how tiny particles shape clouds, air quality, and a changing climate.</p></div>
        <div className="hero-bottom"><p>Xiaohan (Sally) Li<br /><span>Research Staff Scientist · The University of Chicago</span></p><a className="text-link" href="/research">Explore my research <span aria-hidden="true">→</span></a></div>
      </section>
      <figure className="earth-banner">
        <img src="/images/earth.webp" alt="Ocean and clouds beneath the thin blue atmospheric limb of Earth, photographed from the International Space Station" width="2200" height="1446" fetchPriority="high" />
        <div className="earth-caption"><span className="eyebrow">One atmosphere. Many scales.</span><span>From molecular interactions<br />to Earth’s energy balance.</span></div>
        <figcaption><a href="https://apod.nasa.gov/apod/ap210422.html" target="_blank" rel="noopener noreferrer">Earth at twilight · NASA / ISS Expedition 2 <Arrow /></a></figcaption>
      </figure>
  </SiteFrame>;
}
