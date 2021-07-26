import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div>
      <div
        className="introb"
        style={{
          position: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Link to="/">
          <div className="introc">
            <div class="wordCarousel">
              <span>Home </span>
              <div>
                <ul class="flip3">
                  <li>
                    <div className="icon-secA">
                      <h6>Wallet</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon-secA">
                      <h6>Market</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon-secA">
                      <h6>Earn</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
