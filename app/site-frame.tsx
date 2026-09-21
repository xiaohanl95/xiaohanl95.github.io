import type { ReactNode } from 'react';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';

const legacyNavigation = `
(() => {
  const routes = {
    '#research': '/research',
    '#approach': '/approach',
    '#publications': '/publications',
    '#about': '/about',
    '#particle-formation': '/research#particle-formation',
    '#cloud-ice': '/research#cloud-ice',
    '#observing-aerosols': '/research#observing-aerosols'
  };
  const follow = () => {
    const destination = routes[window.location.hash];
    if (destination) window.location.replace(destination);
  };
  follow();
  window.addEventListener('hashchange', follow);
})();
`;

export default function SiteFrame({ activePage, children }: { activePage: string; children: ReactNode }) {
  return <>
    {activePage === '/' && <script dangerouslySetInnerHTML={{ __html: legacyNavigation }} />}
    <SiteHeader activePage={activePage} />
    <main id="main" tabIndex={-1}>{children}</main>
    <SiteFooter />
  </>;
}
