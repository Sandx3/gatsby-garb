import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const Products = ({ data: { allContentfulProduct } }) => {
  return (
    <Layout>
      <div>
        {/* Products list */}
        {allContentfulProduct.edges.map(({ node: product }) => (
          <div key={product.id}>
            <Link
              to={`/products/${product.slug}`}
              style={{
                textDecoration: "none",
                color: "darkpurple",
              }}
            >
              <h3>
                {product.name} -{" "}
                <span style={{ color: "red" }}>${product.price}</span>
              </h3>
            </Link>
            <Img style={{ maxWidth: 400 }} fluid={product.image.fluid} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          price
          image {
            fluid(maxWidth: 400, toFormat: WEBP) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Products
