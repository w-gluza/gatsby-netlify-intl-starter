import React from 'react';
import { Link, graphql } from 'gatsby';
// import PropTypes from 'prop-types';

const BlogRoll = ({ posts }) => (

  <>
    {posts.map(({ node: post }, i) => (
      <div key={`id_${i}`}>
        <h3>
          Blog Post Title:
          {post.frontmatter.title}
        </h3>
        <p>
          Blog Post Description:
          {post.frontmatter.description}
        </p>
        <p>
          Blog Post Date:
          {post.frontmatter.date}
        </p>
        <Link to={post.fields.slug} title="link to blog post">
          Link to blog post
        </Link>
      </div>
    ))}
  </>

);

export default BlogRoll;
