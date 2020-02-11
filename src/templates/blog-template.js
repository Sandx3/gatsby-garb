import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export default ({ data, pageContext }) => {
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${String(currentPage - 1)}`

  return (
    <Layout>
      <div>
        <h1>Gatsby Garb Blog</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              <Link to={`/posts${node.fields.slug}`}>
                {node.frontmatter.title} - {node.frontmatter.date}
              </Link>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
        <div>
          {!isFirstPage && <Link to={prevPage}>Prev</Link>}{" "}
          {Array.from({ length: totalPages }, (_, index) => (
            <>
              <Link
                key={index + 1}
                to={`/blog/${index === 0 ? "" : String(index + 1)}`}
              >
                {index + 1}
              </Link>{" "}
            </>
          ))}
          {!isLastPage && <Link to={nextPage}>Next</Link>}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
