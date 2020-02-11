import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "components/layout"

export default () => {
  const blogData = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <h1>Gatsby Garb Blog</h1>
        <h4>{blogData.allMarkdownRemark.totalCount} Posts</h4>
        {blogData.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              <Link to={`/posts${node.fields.slug}`}>
                {node.frontmatter.title} - {node.frontmatter.date}
              </Link>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
