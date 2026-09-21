import SiteFrame from '../site-frame';
import type { Metadata } from 'next';

const Arrow = () => <span aria-hidden="true">↗</span>;

export const metadata: Metadata = { title: 'Publications', description: 'Selected research publications by Xiaohan (Sally) Li on aerosol microphysics, clouds, observations, and climate modeling.' };

const papers = [
  {year:'2026',journal:'Journal of Advances in Modeling Earth Systems · Accepted; preprint available',title:'The GFDL’s Aerosol Microphysics Model (GLAMM) – Part 1: model description and aerosol evaluation with observational constraints',authors:'Li, X., Paulot, F., Ramirez, U., Bauer, S. E., Liu, X. & Ginoux, P.',url:'https://doi.org/10.22541/essoar.177275342.21109457/v1'},
  {year:'2026',journal:'Geophysical Research Letters',title:'Twenty years of satellite observations reveal a shift in the diurnal trend of dust optical depth over West Africa',authors:'Li, X. & Ginoux, P.',url:'https://doi.org/10.1029/2026GL124267'},
  {year:'2026',journal:'Atmospheric Chemistry and Physics',title:'Resolving the roles of soot and dust in cirrus cloud ice formation at regional and global scales: insights from parcel and climate modeling',authors:'Li, X., Fan, S., Guo, H. & Ginoux, P.',url:'https://doi.org/10.5194/acp-26-95-2026'},
  {year:'2025',journal:'Geophysical Research Letters',title:'An empirical parameterization to separate coarse and fine mode aerosol optical depth over land',authors:'Li, X. & Ginoux, P.',url:'https://doi.org/10.1029/2024GL114397'},
  {year:'2024',journal:'Environmental Science & Technology',title:'Quantifying and modeling the impact of phase state on the ice nucleation abilities of 2-methyltetrols as a key component of secondary organic aerosol derived from isoprene epoxydiols',authors:'Li, X. et al.',url:'https://doi.org/10.1021/acs.est.4c06285'},
  {year:'2024',journal:'Environmental Science & Technology · 58(2), 1109–1118',title:'Hygroscopic growth of adsorbed water films on smectite clay particles',authors:'Li, X. & Bourg, I. C.',url:'https://doi.org/10.1021/acs.est.3c08253'},
  {year:'2023',journal:'Environmental Science & Technology',title:'Phase state, surface tension, water activity, and accommodation coefficient of water–organic clusters near the critical size for atmospheric new particle formation',authors:'Li, X. & Bourg, I. C.',url:'https://doi.org/10.1021/acs.est.2c09627'},
  {year:'2023',journal:'Atmospheric Chemistry and Physics',title:'Microphysics of liquid water in sub-10 nm ultrafine aerosol particles',authors:'Li, X. & Bourg, I. C.',url:'https://doi.org/10.5194/acp-23-2525-2023'},
];
export default function PublicationsPage() {
  return <SiteFrame activePage="/publications"><div className="publications-page">
    <section className="publications wrap" id="publications"><div className="section-heading"><div><p className="eyebrow">Selected publications</p><h1 className="page-title">Science behind the questions.</h1></div><a className="text-link" href="https://scholar.google.com/citations?user=cPR5Lq4AAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Full record · Google Scholar <Arrow /></a></div><div className="paper-list">{papers.map((paper,index)=><article className="paper" key={paper.url}><span className="paper-year">{paper.year}</span><div><p className="paper-journal">{paper.journal}</p><h2><a href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</a></h2><p className="paper-authors">{paper.authors}</p></div><a className="paper-arrow" href={paper.url} target="_blank" rel="noopener noreferrer" aria-label={`Read publication ${index+1}: ${paper.title}`}><Arrow /></a></article>)}</div></section>
  </div></SiteFrame>;
}
