import React from 'react';
import PropTypes from 'prop-types';

import mushroomShape from '../../helpers/propz/mushroomShape';

import Mushrooms from '../Mushrooms/Mushrooms';

import './Basket.scss';


class Basket extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { mushrooms } = this.props;
    const buildBasket = mushrooms.map((mushroom, index) => (
      <Mushrooms key={`pickedMushroom${index + 1}`} mushroom={mushroom} />
    ));

    return (
      <div className="d-flex flex-wrap">
        <h3 className="col-12 text-center">Your Basket</h3>
        {buildBasket}
      </div>
    );
  }
}

export default Basket;
