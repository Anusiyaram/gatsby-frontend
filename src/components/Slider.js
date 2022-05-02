import React, { useState } from "react"
import Img from "gatsby-image"
import Slider from "react-slick"
//import Imgurl from "../components/Imgurl"
import './Bootstrap.min.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StaticQuery, graphql } from "gatsby"

export default function Slide() {
  const config = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const [settings, setSettings] = useState(config)
  return (
    <StaticQuery
      query={graphql`
      query headingQueryAndHeadingQuery {
        allStrapiArticle {
          edges {
            node {
              id
              Image {
                id
                url
                formats {
                  medium {
                    url
                  }
                  large {
                    url
                  }
                  thumbnail {
                    url
                  }
                }
              }
              Title
              Content
            }
          }
        }
      }
      `}
      render={data => (
        <Slider {...settings}>
          {data.allStrapiArticle.edges.map(articleData => (
            <div className="img-card" key={articleData.node.id}>
              
                <img alt={articleData.node.Image.id} src={articleData.node.Image.url} width="351" height="200" />
             
              <div class="card-body">
                <div className="card-title">{articleData.node.Title}</div>
                <div className="card-text">{articleData.node.Content}</div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    />
  )
}
