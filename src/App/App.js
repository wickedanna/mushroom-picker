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
  }

  render() {
    return (
      <div className="App d-flex flex-wrap row">
         <header className="col-12">
           <h2 className="text-center col-12">Mushroom Picker</h2>
           <button className="btn btn-large btn-dark" onClick={this.pickAMushroomEvent}>Pick a Mushroom</button>
         </header>
        <Forest mushrooms={this.state.mushrooms} />
        <Basket mushroom={this.state.basket} />
      </div>
    );
  }
}

export default App;
