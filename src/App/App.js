import React from 'react';

import Basket from '../components/Basket/Basket';
import Forest from '../components/Forest/Forest';

import mushroomData from '../helpers/data/mushroomData';
import WonTheGame from '../components/WonTheGame/WonTheGame';

import './App.scss';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
    status: '',
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  pickAMushroomEvent = (e) => {
    e.preventDefault();
    const status = mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket, status });
  }

  playAgain = () => {
    const status = '';
    const basket = [];
    this.setState({ basket, status });
  }

  render() {
    const { basket, mushrooms, status } = this.state;
    const checkStatus = () => {
      if (status === 'win') {
        return (
      <WonTheGame playAgain={this.playAgain}/>
        );
      }
      if (status === 'die') {
        return 'you have died!';
      }
      return (
        <div>
           <header className="text-center mushroom-picker-header">
             <h1>Mushroom Picker</h1>
            <button className="btn btn-large btn-dark" onClick={this.pickAMushroomEvent}>Pick a Mushroom</button>
           </header>
          <div className="row justify-content-around">
          <div className="col-5 m-1 Forest">
             <Forest mushrooms={ mushrooms } />
           </div>
          <div className="col-5 m-1 Basket">
             <Basket mushrooms={ basket } />
           </div>
        </div>
      </div>
      );
    };

    return (
      <div className="App">
         {checkStatus()}
      </div>
    );
  }
}

export default App;
