import React, { useState, useEffect, useRef } from "react";

const ProgressBar = props => {
  const { pourcentage } = props;
  const ref = useRef(null);

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
  }, [ref.current]);

  const progressWidth = ref.current ? ref.current.offsetWidth : 0;

  let position = (pourcentage * progressWidth) / 100;

  return (
    <>
      <div ref={ref} className="progress-bar">
        <div className="pourcent_bar" style={{ width: pourcentage + "%" }}>
          {
            <span className="pourcent" style={{ left: position + "px" }}>
              {pourcentage}%
            </span>
          }
        </div>
      </div>
    </>
  );
};
export default ProgressBar;
