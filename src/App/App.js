import React from 'react';
import './App.scss';

import Basket from '../components/Basket/Basket';
import Forest from '../components/Forest/Forest';

import mushroomData from '../helpers/data/mushroomData';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  pickAMushroomEvent = (e) => {
    e.preventDefault();
    mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  render() {
    const { basket, mushrooms } = this.state;
    return (
      <div className="App">
         <header className="text-center">
           <h2>Mushroom Picker</h2>
           <button className="btn btn-large btn-dark" onClick={this.pickAMushroomEvent}>Pick a Mushroom</button>
         </header>
         <div className="row">
           <div className="col-6">
           <Forest mushrooms={ mushrooms } />
           </div>
           <div className="col-6">
           <Basket mushrooms={ basket } />
           </div>
         </div>
      </div>
    );
  }
}

export default App;
