import React from 'react';
import './App.scss';

import Forest from '../components/Forest/Forest';

import mushroomData from '../helpers/data/mushroomData';

class App extends React.Component {
  state = {
    mushrooms: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
  }

  render() {
    return (
      <div className="App">
      <h2>Mushroom Picker</h2>
      <Forest mushrooms={this.state.mushrooms}/>
    </div>
    );
  }
}

export default App;
