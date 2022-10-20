import React from 'react';
import { Spinner, Toast} from 'react-bootstrap';

class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.movies.map(movie => (
            <Toast>
              <Toast.Header>Movies</Toast.Header>
              <Toast.Body><img src={this.props.movies.img_url} alt = {this.props.movies.title}/>
              <Spinner animation="border" size='sm' variant="info" />
              <p>{this.props.movies.description}</p>
              </Toast.Body>
            </Toast>
        ))
        }
      </>
    )
  }
}

export default Movies;