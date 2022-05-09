import * as React from "react"
import "./header.css"
import "./Bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

export default class Div extends React.Component {
  state = {
    backgroundColor: "none",
    textColor: "none",
  }

  listenScrollEvent = e => {
    if (window.scrollY > 120) {
      console.log('IF' + window.scrollY);
      this.setState({ backgroundColor: "white", textColor: "black" })
      console.log('-->'+this.state.textColor);
      console.log('-->'+this.state.backgroundColor);
    } else {
      console.log('ELSE'+ window.scrollY);
      this.setState({ backgroundColor: 'transparent', textColor: "white" })
      console.log('>>>>>'+this.state.textColor);
      console.log('>>>>>'+this.state.backgroundColor);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  render() {
    return (
      <header
        className="header fixed-top"
        style={{ backgroundColor: this.state.backgroundColor, color: this.state.textColor }}
      >
        <div className="container">
          <div className="header-container">
            <div className="logo">
              <a href="index.html" className="animate">
                <img src="https://res.cloudinary.com/dzrqpbrpv/image/upload/v1652081939/WhatsApp_Image_2022-05-05_at_7.30.39_PM_fumzgk-media_lib_thumb_euferf.jpg" alt="#" />
                {/* <span style={{ color: "#0969C3" }}>EDU</span>com */}
              </a>
            </div>
            <div className="nav-trigger navbar d-xl-none flex-fill">
              <a
                role="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#pxpMobileNav"
                aria-controls="pxpMobileNav"
              >
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </a>
              <div
                className="offcanvas offcanvas-start nav-mobile-container"
                tabIndex="-1"
                id="pxpMobileNav"
              >
                <div className="offcanvas-header">
                  <div className="logo">
                    <a href="#" className="animate">
                      <span style={{ color: "skyblue" }}>j</span>obster
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <nav className="nav-mobile">
                    <ul className="navbar-nav justify-content-end flex-grow-1">
                      <li className="nav-item dropdown">
                        <a
                          role="button"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Online Classes
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="#">Home 1</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Home 2</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Home 3</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          role="button"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Tuition
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="#">Job 1</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Job 2</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Job 3</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          role="button"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Languages
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="#">Companies 1</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Companies 2</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Companies 3</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          role="button"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Hobby Classes
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="#">Candidates 1</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Candidates 2</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Candidates 3</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          role="button"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          IT Courses
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="#">Blog 1</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Blog 2</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Blog 3</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          role="button"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Exam Coaching
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="#">Pages 1</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Pages 2</a>
                          </li>
                          <li className="nav-item">
                            <a href="#">Pages 3</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <nav className="nav dropdown-hover-all d-none d-xl-block">
              <ul>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Online Classes
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Tuition
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Jobs 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Jobs 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Jobs 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Languages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Companies 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Companies 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Companies 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Hobby Classes
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Candidates 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Candidates 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Candidates 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    IT Courses
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Blog 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Blog 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Blog 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Exam Coaching
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Pages 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Pages 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Pages 3
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <nav className="user-nav d-none d-sm-flex">
              <a
                href="#"
                className="btn rounded-pill nav-btn"
                style={{ color: this.state.textColor }}
                >
                Sign Up
              </a>
              <a
                className="btn rounded-pill user-nav-trigger on-light"
                style={{ color: this.state.textColor }}
                data-bs-toggle="modal"
                href="#"
                role="button"
              >
                Sign in
              </a>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}