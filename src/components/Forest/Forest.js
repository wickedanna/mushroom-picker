import React from 'react';
import './Forest.scss';

import Mushrooms from '../Mushrooms/Mushrooms';

class Forest extends React.Component {
  render() {
    const makeMushrooms = this.props.mushrooms.map((mushroom) => (
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
