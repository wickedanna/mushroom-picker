import React from 'react';
import PropTypes from 'prop-types';

import './WonTheGame.scss';

class WonTheGame extends React.Component {
  static propTypes = {
    playAgain: PropTypes.func.isRequired,
  }

  playAgainEvent = () => {
    const { playAgain } = this.props;
    playAgain();
  }

  render() {
    return (
      <div className="WonTheGame">
        <h1>Congratulations! You Won the Game!</h1>
        <button className="btn btn-dark" onClick={this.playAgainEvent}>Play Again</button>
      </div>
    );
  }
}

export default WonTheGame;
