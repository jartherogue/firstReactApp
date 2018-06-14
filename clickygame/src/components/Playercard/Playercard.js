import React from "react";
import "./Playercard.css";

const Playercard = props => (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Team:</strong> {props.team}
          </li>
        </ul>
      </div>
    </div>
  );
  
  export default Playercard;