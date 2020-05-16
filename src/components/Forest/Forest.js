import React from 'react';
import PropTypes from 'prop-types';

import mushroomShape from '../../helpers/propz/mushroomShape';
import Mushrooms from '../Mushrooms/Mushrooms';

import './Forest.scss';

class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { mushrooms } = this.props;
    const makeMushrooms = mushrooms.map((mushroom) => (
      <Mushrooms key={mushroom.id} mushroom={mushroom}/>
    ));

    return (
      <div className="d-flex flex-wrap">
        {makeMushrooms}
      </div>
    );
  }
}

export default Forest;
