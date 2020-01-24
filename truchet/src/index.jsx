'use strict';

const Truchet = (t) => {
  const adjacent = 0.75 - t * 0.5;
  const opposite = 0.25 + t * 0.5;
  const angle = (Math.atan(opposite / adjacent) * 180) / Math.PI;

  return (<div className="truchet" key={t} style={{ "--angle": `${angle}deg` }}  />);
};

const domContainer = document.querySelector('#container');
ReactDOM.render([
  Truchet(0.0),
  Truchet(0.1),
  Truchet(0.2),
  Truchet(0.3),
  Truchet(0.4),
  Truchet(0.5),
  Truchet(0.6),
  Truchet(0.7),
  Truchet(0.8),
  Truchet(0.9),
  Truchet(1.0),
], domContainer);
