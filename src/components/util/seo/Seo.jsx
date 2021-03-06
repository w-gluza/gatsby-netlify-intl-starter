import React from 'react';
import Helmet from 'react-helmet';


const SEO = ({
  metaDescription, lang = 'en', title, author = 'sugarly',
}) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    meta={[
      {
        name: 'description',
        content: metaDescription,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: metaDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:creator',
        content: author,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: metaDescription,
      },
    ]}
  />
);

export default SEO;
