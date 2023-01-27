import React from "react";
import Header from "./header/Header";
import HomeSlider from './homeSlider/HomeSlider';
import PopularCategory from "./popularCategory/PopularCategory";
import Banner from "./banner/Banner";
import Products from "./product/Products";
import BestSeller from "./bestseller/BestSeller";
import DayDeal from "./daydeal/DayDeal";
import Footer from './footer/Footer'
function Home() {
    return(
        <>
            <Header />
            <main className="main">
                <HomeSlider/>
                <PopularCategory />
                <Banner />
                <Products />
                <BestSeller />
                <DayDeal />
            </main>
            <Footer />
        </>
    )
}

export default Home