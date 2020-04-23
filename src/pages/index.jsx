import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/main/Layout';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';

const IndexPage = ({ pageContext: { locale }, ...props }) => {
  const { homePageData: data } = props.data;
  // const { edges: posts } = props.data.blogPosts;
  console.log('locale', locale);
  return (
    <Layout locale={locale}>
      <Nav locale={locale} />
      <h1>INDEX Page</h1>
      <Home data={data} locale={locale} />
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
  }
`;
