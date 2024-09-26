import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3  mt-5">
          <img src="/media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investing platform</p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img src="/media/images/streakLogo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img src="/media/images/sensibullLogo.svg" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/images/zerodhaFundhouse.png"
            style={{ width: "40%" }}
          />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img src="/media/images/goldenpiLogo.png" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img src="/media/images/dittoLogo.png" style={{ width: "30%" }} />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
