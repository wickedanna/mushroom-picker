import React from 'react';
import PropTypes from 'prop-types';

import './LostTheGame.scss';

class LostTheGame extends React.Component {
  static propTypes = {
    playAgain: PropTypes.func.isRequired,
  }

  playAgainEvent = () => {
    const { playAgain } = this.props;
    playAgain();
  }

  render() {
    return (
      <div className="LostTheGame">
        <h1><i className="fas fa-skull-crossbones"></i></h1>
        <h2>You Lost the Game!</h2>
        <button className="btn btn-light" onClick={this.playAgainEvent}>Play Again</button>
      </div>
    );
  }
}

export default LostTheGame;
