import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import data from "./websiteData";

import MainNavigation from "./components/Navigation/MainNav";
// import LandingPage from "./pages/LandingPage";
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
    const { navbarItems } = data;
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <MainNavigation navbarItems={navbarItems} />
            {/* <Switch>
                  <Route
                    path="/"
                    render={() => (
                      <LandingPage products={this.state.products} />
                    )}
                    exact
                  />
                  <Route
                    path="/products/:product"
                    render={props => (
                      <ProductsPage {...props} products={this.state.products} />
                    )}
                  />
                  <Route
                    path="/gallery"
                    render={() => (
                      <GalleryPage
                        products={this.state.products}
                        pageDetails={this.state.pagesDetails[1]}
                      />
                    )}
                  />
                  <Route
                    path="/photos/:product"
                    render={props => (
                      <GalleryProduct
                        {...props}
                        products={this.state.products}
                      />
                    )}
                  />
                  <Route
                    path="/projects"
                    render={props => (
                      <ProjectsPage
                        {...props}
                        products={this.state.products}
                        pageDetails={this.state.pagesDetails[0]}
                      />
                    )}
                    exact
                  />
                  <Route
                    path="/:product/projects"
                    render={props => (
                      <ProjectsPage
                        {...props}
                        pageDetails={this.state.pagesDetails[0]}
                      />
                    )}
                  />
                  <Route
                    path="/projects/:id"
                    render={props => <ShowProject {...props} />}
                  />
                  <Route
                    path="/drawings"
                    render={() => (
                      <DrawingsPage
                        products={this.state.products}
                        pageDetails={this.state.pagesDetails[2]}
                      />
                    )}
                  />
                  <Route
                    path="/about/:section"
                    render={props => (
                      <AboutUsPage
                        {...props}
                        adminEmail={this.state.adminEmail}
                      />
                    )}
                  />
                  <Route
                    path="/category/:category"
                    render={props => (
                      <CategoryPage
                        {...props}
                        products={this.state.products}
                        pageDetails={this.state.pagesDetails}
                      />
                    )}
                  />

                  {this.state.token && <Redirect from="/auth" to="/" exact />}
                  {!this.state.token && (
                    <Route path="/auth" component={AuthPage} />
                  )}
                  {this.state.token && (
                    <Route path="/admin" component={AdminsPage} />
                  )}
                  <Redirect from="*" to="/" />
                </Switch>
               */}
          </div>
          {/* <Footer adminEmail={this.haveAdminEmail} /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
