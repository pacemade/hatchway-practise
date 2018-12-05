import React from 'react';

const searchBox = (props) => {

  return (
    <form className="search-form">
      <input
        onChange={props.changed}
        type="text"
        className="search"
        placeholder="pokemon" />
      <ul className="suggestions">
      </ul>
    </form>
    )
  }

export default searchBox
