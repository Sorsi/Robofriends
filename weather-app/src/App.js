import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'bea5333b320643bb4ca57cd6ed1aabf4';

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.name.city.value;
    const country = e.target.elements.name.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();        
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
