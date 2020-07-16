import React from "react"
import Banner from "./Banner"
import Header from "./Header"
import Categories from "./Categories"
import BlanketSection from "./BlanketSection"
import PopularProducts from "./PopularProducts"
import OfferBanner from "./OfferBanner"
import TrumpSection from "./trumpSection"
import Footer from "./Footer"

const HomePage = ({ children }) => (
  <>
    <Banner />
    <Categories />
    <div className="container">
      <div className="text-center mt-5">
        <h2 className="with-underline">Featured Products</h2>
        {children}
      </div>
    </div>
    <PopularProducts />
    <OfferBanner />
    {/*<BlanketSection />
    <TrumpSection />*/}
  </>
)

export default HomePage
