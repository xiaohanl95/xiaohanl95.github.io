import SiteFrame from '../site-frame';
import type { Metadata } from 'next';

const Arrow = () => <span aria-hidden="true">↗</span>;

export const metadata: Metadata = { title: 'Approach', description: 'Connecting molecular simulations, cloud processes, and global climate models to understand atmospheric aerosols.' };

export default function ApproachPage() {
  return <SiteFrame activePage="/approach"><div className="approach-page">
    <section className="approach-section" id="approach"><div className="wrap">
        <div className="section-heading"><p className="eyebrow">Approach / From molecules to the Earth system</p><h1 className="page-title">Bridging scales in<br />atmospheric aerosol research.</h1></div>
        <div className="scales">
          <div className="scale"><span className="scale-index">01 / MOLECULES</span><h2>Explain particle behavior</h2><p>Molecular simulations reveal how water, organics, salts, and surfaces govern aerosol formation, phase state, and growth.</p><span className="scale-method">Molecular dynamics · Aerosol properties</span></div>
          <div className="scale"><span className="scale-index">02 / CLOUD PROCESSES</span><h2>Connect particles to clouds</h2><p>Laboratory-constrained parameterizations and parcel models connect particle properties to droplet activation, ice nucleation, and competition for water vapor.</p><span className="scale-method">Parameterizations · Process modeling</span></div>
          <div className="scale"><span className="scale-index">03 / EARTH SYSTEM</span><h2>Resolve climate consequences</h2><p>Global aerosol modeling and satellite observations help quantify atmospheric variability and the regional and seasonal effects of aerosol–cloud interactions.</p><span className="scale-method">Climate models · Remote sensing</span></div>
        </div>
        <div className="glamm"><div><span className="eyebrow">Scientific significance</span><h2>Connecting aerosol science to environmental decisions.</h2></div><div><p>Changes in aerosol emissions affect both air quality and climate. Understanding particle formation, cloud interactions, and atmospheric evolution is essential for assessing those changes. My research supplies physical explanations, model tools, and observational constraints that can inform climate policies and environmental strategies.</p><a className="text-link" href="https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/" target="_blank" rel="noopener noreferrer">The broader climate context · IPCC <Arrow /></a></div></div>
      </div></section>
  </div></SiteFrame>;
}
