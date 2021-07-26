import React from "react";
import { AiFillBell } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Sectiona = () => {
  return (
    <div>
      <nav className="sectiona">
        <div className="icon-secA btn">
          <button className="icon-secb">LOGO</button>
        </div>
        <div className=" icon-sec">
          <i className="">
            <FaUserCircle />
          </i>
          <i className="">
            <AiFillBell />
          </i>
        </div>
      </nav>
    </div>
  );
};

export default Sectiona;
