import React from "react";
import "./index.css";

const Checkbox = () => {
  return (
    <div className="checkbox-wrapper">
      <input id="terms-checkbox-37" name="checkbox" type="checkbox" />
      <label className="terms-label" htmlFor="terms-checkbox-37">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 200 200"
          className="checkbox-svg"
        >
          <mask fill="white" id="path-1-inside-1_476_5-37">
            <rect height={200} width={200} />
          </mask>
          <rect
            mask="url(#path-1-inside-1_476_5-37)"
            strokeWidth={40}
            className="checkbox-box"
            height={200}
            width={200}
          />
          <path
            strokeWidth={15}
            d="M52 111.018L76.9867 136L149 64"
            className="checkbox-tick"
          />
        </svg>
      </label>
    </div>
  );
};

export default Checkbox;
