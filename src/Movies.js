import React from 'react';
import { Spinner, Toast} from 'react-bootstrap';

class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.movies.map(movie => (
            <Toast>
              <Toast.Header>Movies</Toast.Header>
              <Toast.Body><img src={movie.img_url} alt = {movie.title}/>
              <Spinner animation="border" size='sm' variant="info" />
              <p>{this.props.movie.description}</p>
              </Toast.Body>
            </Toast>
        ))
        }
      </>
    )
  }
}

export default Movies;