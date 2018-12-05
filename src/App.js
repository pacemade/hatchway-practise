import React, { Component } from 'react';
import SearchBox from './components/SearchBox/searchBox';
import './App.css';

class App extends Component {

  state = {
    pokemon: []
  }

  clearPokemonHandler = () => {
    this.setState({ pokemon: [] })
  }

  pokemanArrayHandler = (list) => {
    this.setState({ pokemon: list })
  }

  // makeListHandler = (data) => {
  //   for (var i = 0; i < data.results.length; i++) {
  //     const node = document.createElement("li");
  //     let textNode = document.createTextNode(data.results[i].name);
  //     node.appendChild(textNode);
  //     document.getElementById("listy").appendChild(node);
  //   }
  // }

  updateArrayHandler = (poke) => {
    for (var i = 0; i < poke.results.length; i++) {
      let pokemon = poke.results[i].name
      this.setState({ pokemon: [...this.state.pokemon, pokemon ]})
    }
  }

  callTheApi = (e) => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.updateArrayHandler(data);
      })
  }

  findMatchesHandler = (wordToMatch, pokemons) => {
    return pokemons.filter(pokemon => {
      const regex = new RegExp(wordToMatch, 'gi');
      return pokemon.match(regex)
    });
  }

  displayMatchesHandler = (e) => {
    const matchArray = this.findMatchesHandler(e.target.value, this.state.pokemon)
    console.log(matchArray);
    const html = matchArray.map(pokemon => {
      return`
        <li>
          <span>${pokemon}</span>
        </li>
      `;
    }).join('');
    const suggestions = document.querySelector('.suggestions')
    suggestions.innerHTML = html;
  }


  render() {
    return (
      <div>
        <button onClick={this.callTheApi}>Throw me information</button>
        <button onClick={this.clearPokemonHandler}>Clear The array</button>

        <SearchBox
          changed={this.displayMatchesHandler}/>

        <ul id="listy">
          <li>First</li>
        </ul>

      </div>
    );
  }
}

export default App;
