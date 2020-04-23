import React from 'react';
import { Link } from 'gatsby';

const Nav = ({ locale }) => (
  <>
    <Link to="/about/"> About</Link>
    <Link to={`${locale}/blog/`}>Blog</Link>
  </>
);
export default Nav;
