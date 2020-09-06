import React from "react";

const PricesTable = ({ details }) => {
  // console.log("DETAILS", props.details.rates);
  return (
    <div className="container">
      <h3 className="text-center">{details.name}</h3>
      <h5 className="text-center">{details.subHeader}</h5>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Handy Man</th>
            <th scope="col">Electrician / Plumber / Locksmith / Carpenter</th>
          </tr>
        </thead>
        <tbody>
          {details.rates.map((rate, i) => (
            <tr key={i} scope="row">
              <td>{rate.time}</td>
              <td>£{rate.handyMan.toFixed(2)}</td>
              <td>£{rate.others.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PricesPage = ({ data }) => {
  return (
    <div>
      <div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={data.banner} alt="prices" />
          </div>
        </div>
        <div className="container mt-4">
          <h2>{data.title}</h2>
          <h5>{data.subHeader}</h5>
          <div className="my-5">{data.text}</div>
        </div>
        <div className="container">
          <PricesTable details={data.tableStandard} />
          <hr className="featurette-divider" />
          <PricesTable details={data.tableOutOfHours} />
        </div>
        <hr className="featurette-divider" />
      </div>
    </div>
  );
};

export default PricesPage;
