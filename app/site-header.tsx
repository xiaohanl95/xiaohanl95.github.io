const pages = [
  { href: '/research', label: 'Research' },
  { href: '/approach', label: 'Approach' },
  { href: '/publications', label: 'Publications' },
  { href: '/about', label: 'About' },
];

export default function SiteHeader({ activePage }: { activePage: string }) {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a href="/" className="wordmark" aria-label="Xiaohan Sally Li home">Xiaohan (Sally) Li</a>
      <nav aria-label="Main navigation">
        {pages.map(page => <a key={page.href} href={page.href}
          aria-current={activePage === page.href ? 'page' : undefined}>
          {page.label}
        </a>)}
      </nav>
      <a href="mailto:sallyxl@uchicago.edu" className="contact-link">Get in touch <span aria-hidden="true">↗</span></a>
    </header>
  </>;
}
