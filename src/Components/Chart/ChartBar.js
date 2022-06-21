import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  const width = window.innerWidth;
  let mobile = false;
  if (width < 600) {
    mobile = true;
  } else {
    mobile = false;
  }

  let barFill = "0%";

  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {mobile && (
          <div className="chart-bar__fill" style={{ width: barFill }}></div>
        )}
        {!mobile && (
          <div className="chart-bar__fill" style={{ height: barFill }}></div>
        )}
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
