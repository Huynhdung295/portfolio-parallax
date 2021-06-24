import React from "react";
import {Link } from "react-router-dom";
import "./Button.css";
function Button(props) {
  return (
    <div className="button-show">
      <Link to={props.linkTo} className={`show-more-button ${props.text}`} id="show_more" >
        <span className="show-more">
            <span className="arrows">
              <span className="arrow" />
              <span className="arrow-hidden" />
            </span>
          </span>
          <span className="show-more-text">{props.content}</span>
      </Link>
    </div>
  );
}

export default Button;
