import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className=" p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="row p-5 m-5 ">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-5">Search for an answer or browse help topics to create a <br/>ticket</h1>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ...." /> <br/>
          <a href="" className="m-2 fs-5">Track segment activation </a>
          <a href="" className="m-2 fs-5">Intraday </a>
          <a href="" className="m-2 fs-5">margins</a>
          <a href="" className="m-2 fs-5">Track account opening  </a>
         <a href="" className="m-2 fs-5">Kite user manual</a>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-3 " >
          <h1 className="fs-3" >Featured</h1>
          <ol id="supportHeight">
          <li>
          <a href="" className="line fs-5">Current Takeovers and Delisting - January 2024</a>
          </li>
          <li>
          <a href="" className="line fs-5">Latest intraday leverages - MIS & CO </a>
          </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
