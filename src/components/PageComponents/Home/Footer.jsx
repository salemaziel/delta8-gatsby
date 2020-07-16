import React from 'react'

import SourDWax from '../../../images/sour_diesel_wax-540x.png'
import logo from "../../../images/logo-delta8-75x.png"
import MagnifierTool from '../../../images/magnifying-glass.svg'
import PayMerchants from '../../../images/payment-merchants.png'

const FooterSection = () => (
    <footer className="footer-main">
    {/* Footer top */}
    <div className="footer-top py-3 py-md-5">
      <div className="container">
        <div className="section-lg-heading text-center">
          <h1>newsletters</h1>
          <h4 className="section-sub-heading">Get timely updates from your favorite products</h4>
        </div>
        <div className="row justify-content-center py-3">
          <div className="col-md-8">
            <div className="newsletter-form">
              <form method className id action autoComplete="off">
                <div className="input-group mb-3">
                  <input type="text" className="form-control mr-2" placeholder="Enter your Email" aria-label="Enter your Email" aria-describedby="button-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-type-1" type="button" id="button-addon2">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* / Footer top */}
    {/* Footer middle */}
    <div className="footer-middle pb-3 pb-md-5">
      <div className="container-fluid">
        <div className="footer-image-gallery">
          <div className="row no-gutters">
            <div className="col-6 col-sm-2">
              <a href={SourDWax} data-fancybox="images">
                <div className="gallery-box-main">
                  <div className="gallery-img">
                    <img src={SourDWax} className="img-fluid" alt />
                  </div>
                  <div className="gallery-popup-link d-flex align-items-center justify-content-center">
                    <img src={MagnifierTool} width="35px" height="50px" alt />
                  </div>
                </div>
              </a>
            </div>                        
            <div className="col-6 col-sm-2">
              <a href={SourDWax} data-fancybox="images">
                <div className="gallery-box-main">
                  <div className="gallery-img">
                    <img src={SourDWax} className="img-fluid" alt />
                  </div>
                  <div className="gallery-popup-link d-flex align-items-center justify-content-center">
                    <img src={MagnifierTool} width="35px" height="50px" alt />
                  </div>
                </div>
              </a>
            </div>                        
            <div className="col-6 col-sm-2">
              <a href={SourDWax} data-fancybox="images">
                <div className="gallery-box-main">
                  <div className="gallery-img">
                    <img src={SourDWax} className="img-fluid" alt />
                  </div>
                  <div className="gallery-popup-link d-flex align-items-center justify-content-center">
                    <img src={MagnifierTool} width="35px" height="50px" alt />
                  </div>
                </div>
              </a>
            </div>                        
            <div className="col-6 col-sm-2">
              <a href={SourDWax} data-fancybox="images">
                <div className="gallery-box-main">
                  <div className="gallery-img">
                    <img src={SourDWax} className="img-fluid" alt />
                  </div>
                  <div className="gallery-popup-link d-flex align-items-center justify-content-center">
                    <img src={MagnifierTool} width="35px" height="50px" alt />
                  </div>
                </div>
              </a>
            </div>                        
            <div className="col-6 col-sm-2">
              <a href={SourDWax} data-fancybox="images">
                <div className="gallery-box-main">
                  <div className="gallery-img">
                    <img src={SourDWax} className="img-fluid" alt />
                  </div>
                  <div className="gallery-popup-link d-flex align-items-center justify-content-center">
                    <img src={MagnifierTool} width="35px" height="50px" alt />
                  </div>
                </div>
              </a>
            </div>                        
            <div className="col-6 col-sm-2">
              <a href={SourDWax} data-fancybox="images">
                <div className="gallery-box-main">
                  <div className="gallery-img">
                    <img src={SourDWax} className="img-fluid" alt />
                  </div>
                  <div className="gallery-popup-link d-flex align-items-center justify-content-center">
                    <img src={MagnifierTool} width="35px" height="50px" alt />
                  </div>
                </div>
              </a>
            </div>                        
          </div>
        </div>
      </div>
    </div>
    {/* / Footer middle */}
    {/* Footer bottom */}
    <div className="footer-bottom pt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-logo text-center pb-2 pb-md-3">
              <img src={logo} className="img-fluid" alt="Logo" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="footer-links py-2">
              <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-center">
                <li><a href="javascript:;">HOME</a></li>
                <li><a href="javascript:;">Mens</a></li>
                <li><a href="javascript:;">Womens</a></li>
                <li><a href="javascript:;">Blankets</a></li>
                <li><a href="javascript:;">Flags</a></li>
                <li><a href="javascript:;">Stickers</a></li>
                <li><a href="javascript:;">Chump Collection</a></li>
                <li><a href="javascript:;">ABOUT Us</a></li>
                <li><a href="javascript:;">BLOG</a></li>
                <li><a href="javascript:;">contact us</a></li>
              </ul>
            </div>
            <div className="footer-copyright text-center pb-3">
              <p>©  Delta-8 THC <a href="javascript:;">Powered by Salem</a><span style={{color: 'black', fill: 'black', fontSize: '1.5rem', textShadow: '2px 2px 2px darkgray'}}> &#9398; </span><span style={{color: 'red', fill: 'red', fontSize: '1.5rem', textShadow: '2px 2px 2px darkgray'}}>	&#9773; </span></p>
            </div>
          </div>
        </div>    
        <div className="row align-items-center pt-3 pt-md-5">
          <div className="col-md-6">
            <div className="footer-payments-img">
              <img src={PayMerchants} className="img-fluid" alt />
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-social-icons">
              <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-end">
                <li><a href="javascript:;"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="javascript:;"><i className="fab fa-twitter" /></a></li>
                <li><a href="javascript:;"><i className="fab fa-linkedin-in" /></a></li>
                <li><a href="javascript:;"><i className="fab fa-pinterest-p" /></a></li>
                <li><a href="javascript:;"><i className="fab fa-google-plus-g" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* / Footer bottom */}
  </footer>

)

export default FooterSection