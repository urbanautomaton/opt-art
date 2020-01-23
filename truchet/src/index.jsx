'use strict';

const Truchet = (t) => (
  <div className="truchet" style={{ "--t": t }}  />
);

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
