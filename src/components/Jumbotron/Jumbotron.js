import React from 'react';
import { Jumbotron } from 'reactstrap';
import "./Jumbotron.css";

const Myjumbo = (props) => {
  return (
    <div className="container jumbotron">
        <h1>Welcome to Clicky Game </h1><br/>
        <h4>Click on any card to begin the game</h4> <br/>
       <h4> Don't click on the same card twice or you lose</h4><br/>
    </div>
  );
};

export default Myjumbo;