import React, { Component } from "react";
import { Markup } from "interweave";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      service: this.props.match.params.service,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.showCategory();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      this.setState(
        { isLoading: true, service: this.props.match.params.service },
        () => this.showCategory()
      );
    }
  }

  showCategory = () => {
    const category = this.props.data.category.filter((c) => {
      console.log(
        c.link.toLowerCase() +
          "===" +
          this.props.match.params.category.toLowerCase()
      );

      return (
        c.link.toLowerCase() === this.props.match.params.category.toLowerCase()
      );
    });
    const pageDetails = this.props.data.category.filter(
      (c) => c.pageName === this.props.match.params.category.toLowerCase()
    );
    this.setState({
      services: category[0].services,
      banner: category[0].banner,
      pageDetails: category[0],
      isLoading: false,
    });
  };

  render() {
    return (
      <div className="">
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={this.state.banner}
                  alt={this.state.category}
                />
              </div>
            </div>
            <div className="container my-5">
              <h2>{this.state.pageDetails.name}</h2>
              <Markup content={this.state.pageDetails.describtion} />
            </div>
            <div className="container">
              <div className="card-group">
                {this.state.services.map((service, i) => (
                  <div key={i} className="col-sm-6 col-xl-4  px-0 mb-4 d-flex">
                    <div className="card mr-2">
                      {/* <Link to={`/services/${service.link}`}> */}
                      <img
                        className="card-img-top height-inherit"
                        src={service.image.src}
                        alt={service.name}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title d-inline">{service.name}</h5>
                      </div>
                      {/* </Link> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default CategoryPage;
