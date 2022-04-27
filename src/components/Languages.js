import * as React from "react"

function Languages() {
  return (
    <section className="mt-100">
      <div className="container">
        <h2 className="section-h3 text-center">Search by Languages</h2>
        <p className="text-center">
          Search your Language opportunity with our categories
        </p>

        <div className="row mt-4 mt-md-5">
          <div className="col-12 col-md-4 col-lg-3 col-xxl-2 categories-card-1-container">
            <a href="#" className="categories-card-1">
              <div className="categories-card-1-icon-container">
                <div className="categories-card-1-icon">
                  <span className="fa fa-pie-chart"></span>
                </div>
              </div>
              <div className="categories-card-1-title">IELTS Coaching</div>
              <div className="categories-card-1-subtitle">
                139 open positions
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-3 col-xxl-2 categories-card-1-container">
            <a href="#" className="categories-card-1">
              <div className="categories-card-1-icon-container">
                <div className="categories-card-1-icon">
                  <span className="fa fa-bullhorn"></span>
                </div>
              </div>
              <div className="categories-card-1-title">Spoken English</div>
              <div className="categories-card-1-subtitle">
                366 open positions
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-3 col-xxl-2 categories-card-1-container">
            <a href="#" className="categories-card-1">
              <div className="categories-card-1-icon-container">
                <div className="categories-card-1-icon">
                  <span className="fa fa-address-card-o"></span>
                </div>
              </div>
              <div className="categories-card-1-title">German Language</div>
              <div className="categories-card-1-subtitle">
                435 open positions
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-3 col-xxl-2 categories-card-1-container">
            <a href="#" className="categories-card-1">
              <div className="categories-card-1-icon-container">
                <div className="categories-card-1-icon">
                  <span className="fa fa-calendar-o"></span>
                </div>
              </div>
              <div className="categories-card-1-title">French Language</div>
              <div className="categories-card-1-subtitle">
                324 open positions
              </div>
            </a>
          </div>
        </div>

        <div className="mt-4 mt-md-5 text-center">
          <a href="#" className="btn rounded-pill section-cta">
            All Categories<span className="fa fa-angle-right"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Languages
