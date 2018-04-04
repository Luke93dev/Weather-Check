import React from 'react';

const Results = (props) => {
        return (
            <div className="results">
            { props.temperature && <p className="results__paragraph">Temperatura:{props.temperature}°C</p> }

            { props.pressure && <p className="results__paragraph">Ciśnienie: {props.pressure}hPa</p> }

            { props.cloudiness >=0 && <p className="results__paragraph">Zachmurzenie: {props.cloudiness}%</p> }

            { props.error && <p className="results__paragraph">Wpisz prawidłową nazwę miasta</p> }
            </div> 
        );
}

export default Results;