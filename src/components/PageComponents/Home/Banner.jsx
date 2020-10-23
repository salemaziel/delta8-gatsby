import React from 'react'
import MJCardBg from '../../../images/marijauna-card-bg.jpg'
import GreenDownArrow from '../../../images/green-down-arrow-31x42.png'

const Banner = () => (
    <section className="section-content banner-section" style={{backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0079/2389/2306/files/photo-1524653736724-8490ee06859d_2160x.jpeg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="banner-drapes-wrapper">
            <img src={MJCardBg} className="img-fluid" alt />
            <div className="banner-drapes-content text-center">
              <h2>promo 1</h2>
              <p>Buy 2 Tees or Tanks and 1 50% off</p>
              <div className="coupon-code-box">
                <span>code : fucktrump</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 align-self-end">
          <div className="banner-center-content text-center">
            <h1>Demo E-Commerce Shop</h1>
            {/*<p>SCROLL DOWN TO SEE OUR AMAZING LINE OF MERCHANDISE</p>*/}
            <div className="scrolldown-box pt-3">
              <a href="javascript:;" className="banner-scroll-link">
                <img src={GreenDownArrow} className="img-fluid" alt />
              </a>                                
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="banner-drapes-wrapper">
            <img src={MJCardBg}  className="img-fluid" alt />
            <div className="banner-drapes-content text-center">
              <h2>promo 2</h2>
              <p>Buy 3 Tees or Tanks and get 1 FREE</p>
              <div className="coupon-code-box">
                <span>code : fucktrump</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

)

export default Banner