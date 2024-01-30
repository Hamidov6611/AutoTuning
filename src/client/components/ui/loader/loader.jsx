import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div id="container" className="w-full min-h-[60vh] flex items-center justify-center">
      {/* <label className="loading-title">Loading ...</label> */}
      <span className="loading-circle sp1">
        <span className="loading-circle sp2">
          <span className="loading-circle sp3" />
        </span>
      </span>
    </div>
  );
};

export default Loader;
