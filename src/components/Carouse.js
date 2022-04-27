import React, { Component } from "react"
import ReactCardCarousel from "react-card-carousel"
import img1 from "../images/image1.jpg"
import img2 from "../images/image2.jpg"
import img3 from "../images/image3.jpg"
import img4 from "../images/image4.jpg"
import img5 from "../images/image5.jpg"

class MyCarousel extends Component {
  static get CARD_STYLE() {
    return {
      height: "160px",
      width: "160px",
      paddingTop: "0px",
      background: "#0969c3",
      color: "#FFF",
      fontSize: "12px",
      textAlign: "center",
      textTransform: "uppercase",
      borderRadius: "10px",
    }
  }
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    }
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div style={MyCarousel.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                  <div style={MyCarousel.CARD_STYLE}>
                    <img src={img1} alt={img1} className="mycarousel" /> Class I
                    to V{" "}
                  </div>
                  <div style={MyCarousel.CARD_STYLE}>
                    <img src={img2} alt={img2} className="mycarousel" /> Class
                    VI
                  </div>
                  <div style={MyCarousel.CARD_STYLE}>
                    <img src={img3} alt={img3} className="mycarousel" /> Class
                    VII
                  </div>
                  <div style={MyCarousel.CARD_STYLE}>
                    <img src={img4} alt={img4} className="mycarousel" /> Class
                    VII
                  </div>
                  <div style={MyCarousel.CARD_STYLE}>
                    <img src={img5} alt={img5} className="mycarousel" /> Class
                    IX
                  </div>
                </ReactCardCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MyCarousel
