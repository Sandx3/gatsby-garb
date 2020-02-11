import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PostTemplate = ({ data: post }) => (
  <Layout>
    <h1>{post.markdownRemark.frontmatter.title}</h1>
    <h4>
      {post.markdownRemark.timeToRead}{" "}
      {post.markdownRemark.timeToRead > 1 ? "mintues" : "minute"}
    </h4>
    <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
    }
  }
`

export default PostTemplate
