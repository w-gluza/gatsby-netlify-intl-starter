import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layouts/main/Layout'
import Image from '../components/util/image/Image'
import { i18n } from '../constants/i18n'

const IndexPage = ({ pageContext: { locale }, ...props }) => {
  const { homePageData: data } = props.data
  const { edges: posts } = props.data.blogPosts
  return (
    <Layout locale={locale}>
      <Image alt="gatsby logo" imageName="gatsby.png" />
      <h1>title: {data.frontmatter.title}</h1>
      <p>Content: {data.frontmatter.text}</p>
      <p>Locale: {locale}</p>
      <h2>{i18n[locale].text}</h2>
      <Link to={locale === 'en' ? '/de' : '/'}>
        <p>Change language</p>
      </Link>
      <h2>BlogPosts:</h2>
      {posts.map(({ node: post }, i) => (
        <div key={i}>
          <h3>Blog Post Title: {post.frontmatter.title}</h3>
          <p>Blog Post Description: {post.frontmatter.description}</p>
          <p>Blog Post Date: {post.frontmatter.date}</p>
          <Link to={post.fields.slug} title="link to blog post">
            Link to blog post
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

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
`
