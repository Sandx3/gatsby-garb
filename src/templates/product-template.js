import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const ProductTemplate = ({ data: { contentfulProduct }, location }) => {
  return (
    <Layout>
      <div style={{ marginLeft: "0 auto", width: "100%", textAlign: "center" }}>
        {/* Product Info */}
        <h2>
          {contentfulProduct.name} -{" "}
          <span style={{ color: "#ccc" }}>
            Added on {contentfulProduct.createdAt}
          </span>
        </h2>
        <p>{contentfulProduct.price}</p>
        <p>{contentfulProduct.description}</p>
        <button
          className="snipcart-add-item"
          data-item-id={contentfulProduct.slug}
          data-item-price={contentfulProduct.price}
          data-item-image={contentfulProduct.image.file.url}
          data-item-name={contentfulProduct.name}
          data-item-url={location.pathname}
        >
          add to Cart
        </button>
        <Img
          style={{ margin: "0 auto", maxWidth: "600px" }}
          fluid={contentfulProduct.image.fluid}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      price
      slug
      description
      createdAt(formatString: "MMM Do, YYYY, h:mm:ss a")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
  }
`

export default ProductTemplate
