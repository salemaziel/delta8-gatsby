import React from 'react'


const BlanketSection = () => (
    <section className="section-content blanket-section">
      <div className="container-fluid">
        <div className="section-lg-heading text-center">
          <h1>Blankets</h1>
        </div>
        <div className="owl-carousel owl-theme pt-2" id="blanket-slider">
          <div className="item">
            <a href="javascript:;">
              <div className="product-box-main">
                <div className="product-img">
                  <img src="images/blanket-img1.png" className="img-fluid" alt />
                </div>
                <div className="product-content p-3">
                  <h3 className="product-name text-center">Guns Don't Kill T shirt</h3>
                  <div className="pricing-box text-center">
                    <strong className="new-price">$ 20.95</strong>
                    <small className="old-price">$23.95</small>
                    <span className="discount-info">(20% off)</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="javascript:;">
              <div className="product-box-main">
                <div className="product-img">
                  <img src="images/blanket-img2.png" className="img-fluid" alt />
                </div>
                <div className="product-content p-3">
                  <h3 className="product-name text-center">Guns Don't Kill T shirt</h3>
                  <div className="pricing-box text-center">
                    <strong className="new-price">$ 20.95</strong>
                    <small className="old-price">$23.95</small>
                    <span className="discount-info">(20% off)</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="javascript:;">
              <div className="product-box-main">
                <div className="product-img">
                  <img src="images/blanket-img3.png" className="img-fluid" alt />
                </div>
                <div className="product-content p-3">
                  <h3 className="product-name text-center">Guns Don't Kill T shirt</h3>
                  <div className="pricing-box text-center">
                    <strong className="new-price">$ 20.95</strong>
                    <small className="old-price">$23.95</small>
                    <span className="discount-info">(20% off)</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="javascript:;">
            </a><div className="know-more-box" style={{backgroundImage: 'url("images/blanket-img4.png")'}}><a href="javascript:;">
              </a><div className="know-more-content d-flex flex-wrap justify-content-center"><a href="javascript:;">
                  <div className="know-more-text text-center align-self-start">
                    <h3>Blankets</h3>
                    <p>ALL DELIVERIES WILL BE IN YOUR HANDS WITHIN 4-6 WEEKS OF YOUR ORDER</p>
                  </div>
                </a><div className="know-more-btn align-self-end"><a href="javascript:;">
                  </a><a href="#" className="btn btn-type-1">Know More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <a href="javascript:;">
              <div className="product-box-main">
                <div className="product-img">
                  <img src="images/blanket-img2.png" className="img-fluid" alt />
                </div>
                <div className="product-content p-3">
                  <h3 className="product-name text-center">Guns Don't Kill T shirt</h3>
                  <div className="pricing-box text-center">
                    <strong className="new-price">$ 20.95</strong>
                    <small className="old-price">$23.95</small>
                    <span className="discount-info">(20% off)</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
)

export default BlanketSection