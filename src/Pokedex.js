import React from 'react';
import Pokemon from './Pokemon';


class Pokedex extends React.Component {
    render() {
    const { nextPokemon } = this.props;
    
        return (
            <div className="pokedex">
                {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                <Pokemon pokemon={this.props.pokemons[nextPokemon]} />
            </div>
        );
    }
}

export default Pokedex;