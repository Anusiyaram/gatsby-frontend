import React from "react"
import Slide from "../components/Slider"

const Slick = ({ data }) => {

  return (
    <div className="App mt-100">
      <div className="container">
        <div className="row">
        <h2 className="section-h3 text-center">Search by Categories</h2>
        <p className="text-center">
          Search your Categories opportunity with our categories
        </p>
        <Slide />
        </div>
      </div>
    </div>
  )
}

export default Slick