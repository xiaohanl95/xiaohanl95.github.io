export type Topic = 'molecular' | 'cloud' | 'models' | 'climate';
export type PublicationStatus = 'published' | 'review' | 'preparation';

export type Publication = {
  id: string;
  status: PublicationStatus;
  topics: Topic[];
  title: string;
  authors: string;
  year?: string;
  journal?: string;
  url?: string;
};

// In the cirrus manuscript, the sixth author is Minghuai Wang and the last is Mingyi Wang.
export const publications: Publication[] = [
  {
    "id": "paper-8",
    "status": "published",
    "topics": [
      "models"
    ],
    "title": "The GFDL’s Aerosol Microphysics Model (GLAMM) Part 1: model description and aerosol evaluation with observational constraints",
    "url": "https://doi.org/10.1029/2026MS005864",
    "authors": "Li, X., Paulot, F., Ramirez, U., Bauer, S. E., Liu, X. & Ginoux, P.",
    "year": "2026",
    "journal": "Journal of Advances in Modeling Earth Systems"
  },
  {
    "id": "paper-5",
    "status": "published",
    "topics": [
      "cloud",
      "models"
    ],
    "title": "Resolving the roles of soot and dust in cirrus cloud ice formation at regional and global scales: insights from parcel and climate modeling",
    "url": "https://doi.org/10.5194/acp-26-95-2026",
    "authors": "Li, X., Fan, S., Guo, H. & Ginoux, P.",
    "year": "2026",
    "journal": "Atmospheric Chemistry and Physics"
  },
  {
    "id": "paper-9",
    "status": "published",
    "topics": [
      "models"
    ],
    "title": "Twenty years of satellite observations reveal a shift in the diurnal trend of dust optical depth over West Africa",
    "url": "https://doi.org/10.1029/2026GL124267",
    "authors": "Li, X. & Ginoux, P.",
    "year": "2026",
    "journal": "Geophysical Research Letters"
  },
  {
    "id": "paper-10",
    "status": "published",
    "topics": [
      "models"
    ],
    "title": "An empirical parameterization to separate coarse and fine mode aerosol optical depth over land",
    "url": "https://doi.org/10.1029/2024GL114397",
    "authors": "Li, X. & Ginoux, P.",
    "year": "2025",
    "journal": "Geophysical Research Letters"
  },
  {
    "id": "paper-0",
    "status": "published",
    "topics": [
      "molecular"
    ],
    "title": "Hygroscopic growth of adsorbed water films on smectite clay particles",
    "url": "https://doi.org/10.1021/acs.est.3c08253",
    "authors": "Li, X. & Bourg, I. C.",
    "year": "2024",
    "journal": "Environmental Science & Technology"
  },
  {
    "id": "paper-6",
    "status": "published",
    "topics": [
      "cloud"
    ],
    "title": "Quantifying and modeling the impact of phase state on the ice nucleation abilities of 2-methyltetrols as a key component of secondary organic aerosol derived from isoprene epoxydiols",
    "url": "https://doi.org/10.1021/acs.est.4c06285",
    "authors": "Li, X., Martin, W., Shen, X., Steinke, I., Lai, Z., Niu, S., Shrivastava, M., China, S., Zhang, Z., Gold, A., Surratt, J. D., Bourg, I. C., Cziczo, D. J., Burrows, S. & Zhang, Y.",
    "year": "2024",
    "journal": "Environmental Science & Technology"
  },
  {
    "id": "paper-1",
    "status": "published",
    "topics": [
      "molecular"
    ],
    "title": "Phase state, surface tension, water activity, and accommodation coefficient of water–organic clusters near the critical size for atmospheric new particle formation",
    "url": "https://doi.org/10.1021/acs.est.2c09627",
    "authors": "Li, X. & Bourg, I. C.",
    "year": "2023",
    "journal": "Environmental Science & Technology"
  },
  {
    "id": "paper-2",
    "status": "published",
    "topics": [
      "molecular"
    ],
    "title": "Microphysics of liquid water in sub-10 nm ultrafine aerosol particles",
    "url": "https://doi.org/10.5194/acp-23-2525-2023",
    "authors": "Li, X. & Bourg, I. C.",
    "year": "2023",
    "journal": "Atmospheric Chemistry and Physics"
  },
  {
    "id": "paper-3",
    "status": "review",
    "topics": [
      "molecular"
    ],
    "title": "From bulk hygroscopicity to nanoscale water activity: breakdown of continuum theories in sub-4 nm secondary organic aerosols",
    "authors": "Wen, J., Li, X. & Bourg, I. C.",
    "journal": "Environmental Science & Technology"
  },
  {
    "id": "paper-4",
    "status": "review",
    "topics": [
      "molecular"
    ],
    "title": "Product-driven interfacial reorganization and pathway switching during phospholipid ozonolysis",
    "authors": "He, L., Li, X., He, J., Le, X., Cai, Z., Zheng, C., Qin, Y. & Huang, Y.",
    "journal": "Journal of Colloid and Interface Science"
  },
  {
    "id": "paper-11",
    "status": "review",
    "topics": [
      "models"
    ],
    "title": "Fresh eyes on CMIP model biases: diagnosing biases across CMIP generations and implications for CMIP7",
    "authors": "Brown, F. and co-authors including Li, X.",
    "journal": "Geoscientific Model Development"
  },
  {
    "id": "paper-12",
    "status": "review",
    "topics": [
      "models"
    ],
    "title": "Does AIS temporal resolution matter? Assessing point-based trajectory thinning biases in shipping emission inventories",
    "authors": "Chen, J., Li, G., Liang, D., Chen, Y., Zhang, Y., Lei, H., Li, X., Chan, J. W. M. & Lau, A. K. H.",
    "journal": "ES&T Air"
  },
  {
    "id": "paper-13",
    "status": "review",
    "topics": [
      "models",
      "climate"
    ],
    "title": "Climate responses to stratospheric sulfur injection in GFDL ESM4.1",
    "authors": "Gao, C. Y., Zhang, S. & Li, X.",
    "journal": "Journal of Advances in Modeling Earth Systems"
  },
  {
    "id": "paper-14",
    "status": "review",
    "topics": [
      "climate"
    ],
    "title": "Spatially uneven impacts of stratospheric aerosol injection on compound dry-heat wave events in the GeoMIP G6Sulfur experiment",
    "authors": "Qi, C., Gao, C. Y., Kravitz, B., Kim, H., Li, X. & Xia, L.",
    "journal": "Atmospheric Chemistry and Physics"
  },
  {
    "id": "paper-15",
    "status": "review",
    "topics": [
      "climate"
    ],
    "title": "Stratospheric aerosol injection versus solar dimming: compound dry–heat wave events over China",
    "authors": "Gao, C. Y., Li, C., Li, X., Visioni, D., Kim, H. & Qi, C.",
    "journal": "Atmospheric Chemistry and Physics"
  },
  {
    "id": "glamm-part-two",
    "status": "preparation",
    "topics": [
      "cloud",
      "models"
    ],
    "title": "The GFDL’s Aerosol Microphysics Model (GLAMM) Part 2: Evaluation of cloud condensation nuclei against global ground-based and aircraft observations",
    "authors": "Li, X., Paulot, F., Guo, H., Zhang, S., Bauer, S. E., Liu, X. & Ginoux, P."
  },
  {
    "id": "so2-organic-co-injection",
    "status": "preparation",
    "topics": [
      "models",
      "climate"
    ],
    "title": "Enhanced nucleation and contrasting aerosol number responses to stratospheric SO₂–organic co-injection",
    "authors": "Li, X., Zhang, B., Sun, H., Pierce, J. & Wang, M."
  },
  {
    "id": "sai-ammonia-cirrus",
    "status": "preparation",
    "topics": [
      "cloud",
      "models",
      "climate"
    ],
    "title": "The impact of stratospheric aerosol injection on cirrus clouds: the underlooked role of ammonia in sulfuric acid aerosol neutralization",
    "authors": "Li, X., Fan, S., Gao, C. Y., Naik, V., Cziczo, D., Wang, M., Paulot, F., Ginoux, P. & Wang, M."
  }
];
