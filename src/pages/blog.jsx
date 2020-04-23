import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/main/Layout';
import Nav from '../components/Nav/Nav';
import BlogRoll from '../components/BlogRoll/BlogRoll';

const blog = ({ pageContext: { locale }, ...props }) => {
  const { edges: posts } = props.data.blogPosts;

  return (
    <Layout locale={locale}>
      <Nav />
      <h1>
        BLOG PAGE language:
        {locale}
      </h1>
      <BlogRoll posts={posts} />
    </Layout>
  );
};

export default blog;

export const pageQuery = graphql`
  query BlogContent($locale: String) {
    blogPosts: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "page_blogpost" }, locale: { eq: $locale } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`;
