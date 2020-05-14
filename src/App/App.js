import React from 'react';
import './App.scss';

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
      <h2>INSIDE APP COMPONENT</h2>
      <button className="btn btn-info">mushroom</button>
    </div>
    );
  }
}

export default App;
