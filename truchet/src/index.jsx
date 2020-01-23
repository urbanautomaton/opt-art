'use strict';

const Truchet = (t) => (
  <span className="truchet" style={{ "--t": `${t * 100}%` }}  />
);

const domContainer = document.querySelector('#container');
ReactDOM.render([Truchet(0.3), Truchet(0.7)], domContainer);
