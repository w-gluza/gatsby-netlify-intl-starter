import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/main/Layout';
import Home from '../components/Home/Home';
import BlogRoll from '../components/BlogRoll/BlogRoll';

const IndexPage = ({ pageContext: { locale }, ...props }) => {
  const { homePageData: data } = props.data;
  const { edges: posts } = props.data.blogPosts;

  return (
    <Layout locale={locale}>
      <Home data={data} locale={locale} />
      <BlogRoll posts={posts} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomeContent($locale: String) {
    homePageData: markdownRemark(frontmatter: { pageKey: { eq: "page_home" }, locale: { eq: $locale } }) {
      fields {
        slug
      }
      frontmatter {
        pageKey
        seo_title
        seo_desc
        title
        text
      }
    }
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
