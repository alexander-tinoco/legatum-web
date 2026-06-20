import { founder, site } from '../data/site';

type SchemaOptions = {
  isHome?: boolean;
};

export function buildSchema(options: SchemaOptions = {}) {
  const { isHome = false } = options;

  const person = {
    '@type': 'Person',
    '@id': `${site.url}/#founder`,
    name: founder.name,
    jobTitle: founder.role,
    description: founder.shortBio,
    url: `${site.url}/nosotros/`,
    ...(founder.image ? { image: `${site.url}${founder.image}` } : {}),
    worksFor: { '@id': `${site.url}/#organization` },
  };

  const organization = {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.shortName,
    url: site.url,
    logo: {
      '@type': 'ImageObject',
      url: `${site.url}/og-image.png`,
      width: 1200,
      height: 630,
    },
    email: site.email,
    telephone: site.phone,
    slogan: site.tagline,
    founder: { '@id': `${site.url}/#founder` },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Victoria de Durango',
      addressRegion: 'Durango',
      addressCountry: 'MX',
    },
    areaServed: [
      { '@type': 'Country', name: 'Mexico' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone,
      contactType: 'customer service',
      availableLanguage: ['Spanish'],
      areaServed: { '@type': 'Country', name: 'Mexico' },
    },
  };

  if (!isHome) {
    return {
      '@context': 'https://schema.org',
      '@graph': [organization, person],
    };
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    alternateName: site.shortName,
    publisher: { '@id': `${site.url}/#organization` },
    inLanguage: 'es-MX',
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': `${site.url}/`,
    url: site.url,
    name: 'Visas y movilidad internacional | Legatum Internacional',
    description: site.description,
    isPartOf: { '@id': `${site.url}/#website` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${site.url}/og-image.png`,
    },
    inLanguage: 'es-MX',
  };

  const professionalService = {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${site.url}/#professional-service`,
    name: site.name,
    url: site.url,
    image: `${site.url}/og-image.png`,
    telephone: site.phone,
    email: site.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Victoria de Durango',
      addressRegion: 'Durango',
      addressCountry: 'MX',
    },
    areaServed: [
      { '@type': 'City', name: 'Durango', '@id': 'https://www.wikidata.org/wiki/Q662540' },
      { '@type': 'Country', name: 'Mexico' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
    ],
    parentOrganization: {
      '@id': `${site.url}/#organization`,
    },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, person, website, webPage, professionalService],
  };
}
