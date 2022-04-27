import React, { useState } from "react"
import Slider from "react-slick"
import './Bootstrap.min.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img from "../images/Hobbie.jpg"
import img1 from "../images/Hobbie1.jpg"
import img2 from "../images/Hobbie2.jpg"
import img3 from "../images/Hobbie3.jpg"
import img4 from "../images/Hobbie4.jpg"
import img5 from "../images/Hobbie5.jpg"
import img6 from "../images/Hobbie6.jpg"

function Hobbies() {
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
    <div className="App mt-100">
      <div className="container">
        <div className="row">
        <h2 className="section-h3 text-center">Search by Categories</h2>
        <p className="text-center">
          Search your Categories opportunity with our categories
        </p>
        <Slider {...settings}>
              <div className="img-card">
                <img className="img" src={img} alt="description" />
                <div class="card-body">
                  <div className="card-title">Singing</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img1} alt="description" />
                <div class="card-body">
                  <div className="card-title">Like Nature</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img2} alt="description" />
                <div class="card-body">
                  <div className="card-title">Grow Plants</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img3} alt="description" />
                <div class="card-body">
                  <div className="card-title">Photography</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img4} alt="description" />
                <div class="card-body">
                  <div className="card-title">Guitar</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img5} alt="description" />
                <div class="card-body">
                  <div className="card-title">Yoga</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img6} alt="description" />
                <div class="card-body">
                  <div className="card-title">Swimming</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>

        </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hobbies
