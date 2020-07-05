import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import './PageNotFound.css';

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 className='page_not_found'>404 Page Not Found</h1>
        <Footer />
      </div>
    );
  }
}

export default PageNotFound;