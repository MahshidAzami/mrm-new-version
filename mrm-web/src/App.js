import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import data from "./websiteData";

import MainNavigation from "./components/Navigation/MainNav";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer/Footer";
import PricesPage from "./pages/PricesPage";
import CallNow from "./components/Navigation/callNow";
// import ProductsPage from "./pages/ProductsPage";
// import Footer from "./components/Footer/Footer";
// import GalleryPage from "./pages/GalleryPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import DrawingsPage from "./pages/DrawingsPage";
// import AboutUsPage from "./pages/AboutUsPage";
// import Spinner from "./components/Spinner/Spinner";
// import GalleryProduct from "./components/GalleryProduct/GalleryProduct";
// import ShowProject from "./components/ShowProject/ShowProject";
// import AuthPage from "./pages/Auth";
// import CategoryPage from "./pages/CategoryPage";

class App extends Component {
  constructor() {
    super();
    this.state = { data };
  }
  componentDidMount() {
    console.log(this.state);
  }
  render() {
    const { navbarItems, landingPage, servicesSection, prices, footer } = data;
    return (
      <div className="App">
        <BrowserRouter>
          <MainNavigation navbarItems={navbarItems} />
          <Switch>
            <Route
              path="/"
              render={() => <LandingPage data={landingPage} />}
              exact
            />
            <Route
              path="/services"
              render={() => <ServicesPage data={servicesSection} />}
              exact
            />
            <Route
              path="/services/:category"
              render={(props) => (
                <CategoryPage {...props} data={servicesSection} />
              )}
            />
            <Route
              path="/prices"
              render={() => <PricesPage data={prices} />}
              exact
            />
          </Switch>

          <Footer footer={footer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
