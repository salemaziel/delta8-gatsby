import React from "react"
import logo from "../images/logo-delta8-80x.png"
import MenuDots from '../images/menu-dots.svg'
import { Link } from 'gatsby'


const PageHeader = () => (
  <>
    <header className="header-main">
      {/* Header top */}
      <div className="header-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="header-top-text text-center">
                <h4 className="my-0">
                <span style={{color: '#28A745'}}>Join the Club and Instantly Receive a </span> <strong>$50</strong>{" "}
                  Gift Card
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / Header top */}
      {/* Header middle */}
      <div className="header-middle">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="img-fluid" alt="Logo" style={{maxWidth: '80px'}} />
          </Link>
          <div className="mob-nav-btn-container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a href="javascript:;" className="mobile-nav-btn">
              <img
                src={MenuDots}
                className="img-fluid ml-1"
                width="20px"
                alt
              />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form
              className="form-inline my-2 my-lg-0"
              style={{ flexFlow: "row" }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search Product..."
                aria-label="Search Product..."
              />
              <button className="btn btn-type-1 my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav ml-0 ml-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login &amp; Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Myaccount
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Wishlist
                </a>
              </li>
              <li className="nav-item cart-nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="cart-count">
                    <i className="fas fa-shopping-cart" />
                    <span className="badge badge-red">02</span>
                  </span>
                  &nbsp;&nbsp;
                  <span className="cart-text">Cart</span>&nbsp;
                  <i className="fas fa-chevron-down" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="dropdown-cart-wrapper">
                    <div className="dropdown-cart-items py-3">
                      <a href="javascript:;">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="cart-item-img">
                              <img
                                src="images/product-img1.png"
                                className="img-fluid"
                                alt
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="cart-item-text">
                              <p className="m-0">Delta 8 THC Wax: Sour Diesel</p>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="cart-item-price">
                              <p className="m-0">
                                <strong>$20.95</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-cart-items py-3">
                      <a href="javascript:;">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="cart-item-img">
                              <img
                                src="images/product-img1.png"
                                className="img-fluid"
                                alt
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="cart-item-text">
                              <p className="m-0">Delta 8 THC Wax: Sour Diesel</p>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="cart-item-price">
                              <p className="m-0">
                                <strong>$20.95</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-cart-items py-3">
                      <a href="javascript:;">
                        <div className="row align-items-center">
                          <div className="col-3">
                            <div className="cart-item-img">
                              <img
                                src="images/product-img1.png"
                                className="img-fluid"
                                alt
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="cart-item-text">
                              <p className="m-0">Delta 8 THC Wax: Sour Diesel</p>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="cart-item-price">
                              <p className="m-0">
                                <strong>$20.95</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* / Header middle */}
      {/* Header bottom */}
      <div className="header-bottom p-0">
        <nav className="menu-navbar p-0">
          <ul className="m-0 p-0 list-unstyled d-flex align-items-center flex-wrap">
            <li className="active-menu">
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">
                Mens <i className="fas fa-chevron-down" />
              </a>
            </li>
            <li>
              <a href="#">
                Womens <i className="fas fa-chevron-down" />
              </a>
            </li>
            <li>
              <a href="#">Jackets</a>
            </li>
            <li>
              <a href="#">Bandanas</a>
            </li>
            <li>
              <a href="#">Stickers</a>
            </li>
            <li>
              <a href="#">
                Accessories <i className="fas fa-chevron-down" />
              </a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* / Header bottom */}
    </header>
  </>
)

export default PageHeader
