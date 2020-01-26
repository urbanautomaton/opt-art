'use strict';

const ORIENTATIONS = ['a', 'b', 'c', 'd'];

const Truchet = ({ t, orientation }) => {
  const offset = 25 - 50 * t;

  return (
    <svg className={`truchet-${orientation}`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points={`100,0 ${50 - offset},${50 - offset} 0,100 0,0`} fill="black" />
    </svg>
  );
};

const Grid = () => (
  <div className="grid">
    {
      ORIENTATIONS.flatMap(orientation => (
        [...Array(11).keys()].map(i => (
          <Truchet key={`${orientation}-${i}`} t={i / 10} orientation={orientation} />
        ))
      ))
    }
  </div>
);

const domContainer = document.querySelector('#container');
ReactDOM.render(<Grid />, domContainer);
