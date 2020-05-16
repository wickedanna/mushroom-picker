import React from 'react';

import './Basket.scss';

class Basket extends React.Component {
  render() {
    return (
      <div className="d-flex flex-wrap col-3">
        <h3 className="col-12 text-center">Your Basket</h3>
      </div>
    );
  }
}

export default Basket;
