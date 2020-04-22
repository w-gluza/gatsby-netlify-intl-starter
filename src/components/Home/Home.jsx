import React from 'react';
import { Link, graphql } from 'gatsby';
// import PropTypes from 'prop-types'

const Home = ({ data, locale }) => (
  <>
    <h1>
      title:
      {data.frontmatter.title}
    </h1>
    <p>
      Content:
      {data.frontmatter.text}
    </p>
    <p>
      Locale:
      {locale}
    </p>
    <Link to={locale === 'en' ? '/pl' : '/'}>
      <p>Change language</p>
    </Link>
  </>
);

// Home.propTypes = {

// }

export default Home;
