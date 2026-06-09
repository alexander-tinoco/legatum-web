import { site } from '../data/site';

type SchemaOptions = {
  isHome?: boolean;
};

export function buildSchema(options: SchemaOptions = {}) {
  const { isHome = false } = options;

  const organization = {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: {
      '@type': 'ImageObject',
      url: `${site.url}/favicon.svg`,
    },
    email: site.email,
    telephone: site.phone,
    slogan: site.tagline,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Durango',
      addressCountry: 'MX',
    },
    areaServed: ['MX', 'United States', 'Canada', 'European Union', 'China', 'Australia'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone,
      contactType: 'customer service',
      availableLanguage: ['Spanish'],
      areaServed: 'MX',
    },
  };

  if (!isHome) {
    return {
      '@context': 'https://schema.org',
      '@graph': [organization],
    };
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { '@id': `${site.url}/#organization` },
    inLanguage: 'es-MX',
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': `${site.url}/`,
    url: site.url,
    name: 'Visas y movilidad internacional | LEGATUM INTERNACIONAL',
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
      addressLocality: 'Durango',
      addressCountry: 'MX',
    },
    areaServed: ['MX', 'United States', 'Canada', 'European Union', 'China', 'Australia'],
    parentOrganization: {
      '@id': `${site.url}/#organization`,
    },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, webPage, professionalService],
  };
}
