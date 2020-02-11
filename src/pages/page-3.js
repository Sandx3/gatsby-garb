import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/layout"

export default props => {
  const imageData = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            relativePath
            size
            extension
            birthTime
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <>
        <h1>Welcome to page 3</h1>
      </>
      <>
        <h3>Image File data</h3>
        <table>
          <thead>
            <tr>
              <th>Relative Path</th>
              <th>Size of image</th>
              <th>Extension</th>
              <th>Birthtime</th>
            </tr>
          </thead>
          <tbody>
            {imageData.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
      <Link to="/page-2">Go to page 2</Link>
    </Layout>
  )
}
