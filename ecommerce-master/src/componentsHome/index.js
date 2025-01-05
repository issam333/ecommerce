import React from "react";
import About from "../componentsHome/About";
import Bestseller from "../componentsHome/Bestseller";
import ContactUs from "../componentsHome/ContactUs";
import Footer from "../componentsHome/footer";
import Product1 from "../componentsHome/product1";
import Product2 from "../componentsHome/product2";
import PartTiger from "../componentsHome/partTiger";
import ScrollTop from '../componentsHome/scrollTop'
import Intro from '../componentsHome/intro'

function index() {
  return (
    <div>
      <Intro/>
      <About />
      <Product1 />
      <Product2 />
      <PartTiger />
      <Bestseller />
      <ContactUs />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default index;
