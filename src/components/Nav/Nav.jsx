import React from 'react';
import { Link } from 'gatsby';

const Nav = ({ locale }) => {
  let pathLocale;

  if (locale !== 'en') {
    pathLocale = locale;
  } else {
    pathLocale = '';
  }
  console.log('pathLocale', pathLocale);

  return (
    <>
      {/* <Link to={`${locale}/about/`}>About</Link> */}
      {/* <Link to="/about/" /> */}
      <Link to={`${pathLocale}/blog/`}>Blog</Link>
    </>
  );
};


export default Nav;
