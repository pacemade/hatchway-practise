import React, { Component } from 'react';
import Filter from './components/Filters/Filter';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    pokemon: [1,2,3]
  }

  clearPokemonHandler = () => {
    this.setState({ pokemon: [] })
  }

  pokemanArrayHandler = (list) => {
    this.setState({ pokemon: list })
  }

  makeListHandler = (data) => {
    console.log("is it working");
    // for (var i = 0; i < data.results.length; i++) {
    //   const node = document.createElement("li");
    //   let textNode = document.createTextNode(data.results[i].name);
    //   node.appendChild(textNode);
    //   document.getElementById("listy").appendChild(node);
    // }
  }

  callTheApi = (e) => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.makeListHandler(data);
      })
  }

  pleaseWork = (thing) => {
    console.log("first work");
    this.pleaseWorkAgain();
  }

  pleaseWorkAgain = () => {
    console.log("second work");
  }


  render() {
    return (
      <div>
        <h1> {this.state.pokemon} </h1>
        <button onClick={this.callTheApi}>Throw me information</button>
        <button onClick={this.pleaseWork}>please work</button>
        <button onClick={this.clearPokemonHandler}>Clear The array</button>
        <Filter />
        <ul id="listy">
          <li>First</li>
        </ul>
      </div>
    );
  }
}

export default App;
