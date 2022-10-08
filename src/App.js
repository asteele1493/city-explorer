import React from 'react';
import './App.css';
import axios from 'axios';
import CityDisplay from './CityDisplay';
import { Alert } from 'react-bootstrap';
// import Alert from 'react-bootstrap/Alert';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      lat: '',
      lon: '',
      err: 'Error: Unable to Geocode!',
      apiError: false
    }
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  getLocation = async () => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      const otherUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;
      // console.log('URL:', url);
      //call axios
      const response = await axios.get(url, otherUrl);
      this.setState({ apiError: false });
      console.log('response object: ', response);
      console.log('response.data[0]: ', response.data[0]);
      this.setState({ location: response.data[0] });
      this.setState({ lat: response.data[0].lat });
      this.setState({ lon: response.data[0].lon });
      console.log('response object : ', response.data[0].lat);
      console.log('response object : ', response.data[0].lon);
    } catch (err) {
      this.setState({ apiError: true });
      this.setState({location:{}})
      console.error(this.state.err);
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
      </div>


    );
  }
}

export default App;
