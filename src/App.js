import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Button from './Components/Button';

class App extends React.Component {
  constructor() {
    super()
    this.nextPoke = this.nextPoke.bind(this);
    this.state = {
      initialClick: 0,
    }
  };

  nextPoke() {
    this.setState( (prev, _props) => ({
     initialClick: prev.initialClick + 1
    }),
    console.log(this))
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} nextPokemon={this.state.initialClick} />
        <Button onClickButton={ this.nextPoke } labelButton='Next Pokemon' />
      </div>
    );
  }
}

export default App;