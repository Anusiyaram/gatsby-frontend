import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Image = ({ image }) => {
  const data = useStaticQuery(graphql`
    query {
        allStrapiArticle {
            edges {
                node {
                    Image{
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                aspectRatio: 1.3
              )
            }
          }
        }
        categories{
            article {
                Image {
                  url
                }
            }
        }
        }
        }
      }
    }
  `)

  if (!image) {
    return (
      <GatsbyImage
        image={(data.allStrapiArticle.edges.node.categories.article.Image.url)}
        alt="Placeholder Image"
      />
    )
  }

  return (
    <GatsbyImage
      alt='999'
      image={(image.localFile)}
    />
  )
}


export default Image