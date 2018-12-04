import React, { Component } from 'react';

class Filter extends Component {

  state = {
    pokemon2: ["silly", "ppopoo"]
  }

  getPokemonHandler = (e) => {
    console.log("okay so far so good");
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.results.length; i++) {
          const node = document.createElement("li");
          let textNode = document.createTextNode(data.results[i].name);
          node.appendChild(textNode);
          document.getElementById("listy").appendChild(node);
        }
      })
  }

  render() {
    return(
      <div>
        <h1>{this.state.pokemon2}</h1>
      </div>
    )
  }
}
export default Filter;
