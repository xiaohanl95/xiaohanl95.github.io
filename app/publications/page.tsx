import type { Metadata } from 'next';
import SiteFrame from '../site-frame';
import PublicationExplorer from './publication-explorer';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Explore publications and manuscripts by Xiaohan (Sally) Li on molecular aerosol science, aerosol-cloud interactions, models and observations, and climate interventions.',
};

export default function PublicationsPage() {
  return (
    <SiteFrame activePage="/publications">
      <PublicationExplorer />
    </SiteFrame>
  );
}
