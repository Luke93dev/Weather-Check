import React from 'react';

const Results = (props) => {
    return (
      <form className="form" onSubmit={props.getWeather}>
        <input className="form__input" type="text" name="city" placeholder="Miasto..." />
        <button className="form__button"> Pobierz pogodę </button>
        </form>
    );
  }

export default Results;
