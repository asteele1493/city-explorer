import React from 'react';
import './App.css';
import axios from 'axios';
import CityDisplay from './CityDisplay';
import { Alert } from 'react-bootstrap';
// import Weather from './Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      // lat: '',
      // lon: '',
      errLocation: '',
      errWeather: '',
      errMovie: '',
      apiError: false,
      displayResults: false,
      weather: [],
      movies: []
    }
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
    try {
      const response = await axios.get(url);
      console.log("Location data: ", response.data);
      this.setState({
        location: this.state.location.data[0].display_name,
        latitude: this.state.location.data[0].lat,
        longitude: this.state.location.data[0].lon,
        displayResults: true,
        apiError: false
      }, () => {
        this.getWeather();
        this.getMovies();
      });
    } catch (err) {
      this.setState({
        displayResults: false,
        apiError: true,
        errLocation: err.response.status + ': ' + err.response.data
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
      this.setState({
        apiError: true,
        displayResults: false,
        weather: [],
        errWeather: `status ${err.response.status}: ${err.response.statusText}`
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
      this.setState({
        apiError: true,
        displayResults: false,
        location: {},
        errMovie: `status ${err.response.status}: ${err.response.statusText}`
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
        {this.state.apiError &&
          <Alert variant="danger">
            <Alert.Heading>Error: Unable to geocode!</Alert.Heading>
          </Alert>
        }
        {this.state.location.display_name &&

          <CityDisplay
            location={this.state.location}
            lat={this.state.lat}
            lon={this.state.lon}
          />

        }
        {/* <Weather 
          weather */}

      </div>


    );
  }
}

export default App;
