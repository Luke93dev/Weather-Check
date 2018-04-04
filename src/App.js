import React from 'react';
import './App.css';

import Description from './components/description.js';
import Forms from './components/forms.js';
import Results from './components/results.js';

const API_KEY = "f9e12688279d8cc42caad182b9317ee4";

class App extends React.Component {
    
    state={
        temperature: undefined,
        pressure: undefined,
        cloudiness: undefined,
        error: undefined
    }

    getWeather = async (ev) => {
        ev.preventDefault();
        const city = ev.target.elements.city.value;
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`).then(resp => resp.json());

        if(city && data.cod !=="404"){
        this.setState({        
            temperature:(data.main.temp-273.15).toFixed(1),
            pressure:Math.round(data.main.pressure),
            cloudiness:data.clouds.all,  
            error:false
        })}
        else{
            this.setState({
                temperature: undefined,
                pressure: undefined,
                cloudiness: undefined,
                error:true
            })
        }
    }
   
    
  render() {
    return (
        <div>
      <Description />
        <Forms getWeather={this.getWeather} />
        <Results temperature={this.state.temperature}
        pressure={this.state.pressure}
        cloudiness={this.state.cloudiness}
        error = {this.state.error}
        />
        </div>
    );
  }
}

export default App;
