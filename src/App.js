import React from 'react';
import './App.css';
import axios from 'axios';
import CityDisplay from './CityDisplay';
import { Alert } from 'react-bootstrap';
import Weather from './Weather';
import Movies from './Movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: '',
      lat: '',
      lon: '',
      errMessage: '',
      dispErr: false,
      // dispResults: false,
      display_name: '',
      weather: [],
      movies: []
    }
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  getLocation = async () => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(url);
      console.log("Location data: ", response.data[0]);
      this.setState({
        location: response.data[0],
        lat: response.data[0].lat,
        lon: response.data[0].lon,
        dispErr: false
      }, () => {
        this.getWeather();
        this.getMovies();
      });
    } catch (err) {
      console.log(err);
      this.setState({
        dispErr: true,
        errMessage: err.response.data.error
      });
    }
  }

  getWeather = async () => {
    const url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.lat}&lon=${this.state.lon}`;
    try {
      let response = await axios.get(url);
      console.log("Weather data: ", response.data);
      this.setState({ weather: response.data });
    } catch (err) {
      console.log(err);
      this.setState({
        dispErr: true,
        errMessage: err.response.data.error,
        weather: []
      });
    }
  }

  getMovies = async () => {
    const url = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`;
    try {
      let response = await axios.get(url);
      console.log("Movies data: ", response.data);
      this.setState({ movies: response.data });
    } catch (err) {
      console.log(err);
      this.setState({
        dispErr: true,
        errMessage: err.response.data.error,
        movies: []
      });
    }

  }

  render() {
    return (

      <div className="App">
        <h1>City Explorer</h1>
        <input type="text"
          onChange={this.handleChange}
          placeholder="search for a city"
        />
        <button onClick={this.getLocation}>Explore!</button>

        {this.state.location.display_name &&

          <CityDisplay
            location={this.state.location}
            lat={this.state.lat}
            lon={this.state.lon}
          />
        }
        {this.state.errMessage &&
        <Alert key='danger' variant=''>
          <h3>{this.state.errMessage}</h3>
          </Alert>
          }
        <Weather
          weather={this.state.weather}
        />
        <Movies
          movies={this.state.movies}
        />

        
      </div>




    );
  }
}

export default App;
