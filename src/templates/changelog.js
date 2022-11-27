import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import GatsbyConfig from '../../gatsby-config'

export default function Template({ data }) {
  const { markdownRemark } = data
  return (
    <div className="article">
      <Helmet title={`${markdownRemark.frontmatter.title} | ${GatsbyConfig.siteMetadata.title}`} />
      <div>
        <h1>{markdownRemark.frontmatter.title} {markdownRemark.frontmatter.date.substring(0, 4)}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query ChangelogByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
