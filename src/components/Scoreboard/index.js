import React from "react";
import "./style.css";

const Scoreboard = props => (
  <div className="scoreboard">
    <div className="headline">
      {props.children}
    </div>
    <div className="scores">
      Score: {props.score} High Score: {props.highscore}
    </div>
  </div>
);

export default Scoreboard;