import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  // createNode = (e) => {
  //   const node = document.createElement("li");
  //   const textNode = document.createTextNode("Fifth");
  //   node.appendChild(textNode);
  //   document.getElementById("listy").appendChild(node);
  // }

  callTheApi = (e) => {
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
    return (
      <div>
        <h1> Oh damn this was harder than I thought for reals </h1>
        <button onClick={(e) => this.callTheApi(e)}>Throw me information</button>
        <button onClick={(e) => this.createNode(e)}>Make a list thing</button>
        <ul id="listy">
          <li>First</li>
        </ul>
      </div>
    );
  }
}

export default App;
