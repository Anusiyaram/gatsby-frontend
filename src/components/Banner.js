import * as React from "react"
import MyCarousel from "../components/Carouse"
import Img from "../images/img.jpg"
import L1 from "../images/logo1.png"
import L2 from "../images/logo2.png"
import L3 from "../images/logo3.png"
import L4 from "../images/logo4.png"
import L5 from "../images/logo5.png"

function Banner() {
  return (
    <section className="hero vh-100" style={{ backgroundColor: "#e6f0f9" }}>
      <div className="hero-caption">
        <div className="container">
          <div className="row pl-80 align-items-center justify-content-between">
            <div className="col-12 col-xl-6 col-xxl-5">
              <h1>
                Find the perfect
                <br />
                <span style={{ color: "#0969C3" }}>Tuition</span> for you
              </h1>
              <div className="hero-subtitle mt-3 mt-lg-4">
                Search your Online Classes opportunity
              </div>

              <div className="hero-form hero-form-round mt-3 mt-lg-4">
                <form className="row gx-3 align-items-center" action="#">
                  <div className="col-12 col-sm">
                    <div className="mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Online Tuition or Hobby"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm has-left-border">
                    <div className="mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-auto">
                    <button>
                      <span className="fa fa-search"></span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="hero-searches-container">
                <div className="hero-searches-label">Popular Searches</div>
                <div className="hero-searches">
                  <div className="hero-searches-items">
                    <a href="#">Class I to V Tuition</a>
                    <a href="#">Class VI Tuition</a>
                    <a href="#">Class VII Tuition</a>
                    <a href="#">Class VIII Tuition</a>
                    <a href="#">Class IX Tuition</a>
                    <a href="#">Class X Tuition</a>
                    <a href="#">Class XI Tuition</a>
                    <a href="#">Class XII Tuition</a>
                    <a href="#">Class VI Tuition</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-xl-block col-xl-5 position-relative">
              <div
                className="hero-cards-container animate-cards mouse-move"
                data-speed="160"
              >
                <div
                  className="hero-card cover cover-top animate"
                  style={{ backgroundImage: `url(${Img})` }}
                ></div>
                <div className="hero-card-dark animate"></div>
                <div className="hero-card-light animate"></div>
              </div>

              <div className="hero-card-info-container">
                <div className="hero-card-info">
                  <MyCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-logos-carousel-container">
        <div className="container">
          <div className="row pl-80">
            <div className="col-12 col-xl-6">
              <div className="hero-logos-carousel owl-carousel">
                <img src={L3} alt={L3} style={{ marginRight: "30px" }} />
                <img src={L1} alt={L1} style={{ marginRight: "30px" }} />
                <img src={L2} alt={L2} style={{ marginRight: "30px" }} />
                <img src={L4} alt={L4} style={{ marginRight: "30px" }} />
                <img src={L5} alt={L5} style={{ marginRight: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-right-bg-card has-animation animate"></div>
    </section>
  )
}

export default Banner
