import React from 'react';
import { Spinner, Toast} from 'react-bootstrap';

class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.movies.map(movie => (
          <>
           <Spinner animation="border" size='sm' variant="info" />
            <Toast>
              <Toast.Header>{this.props.movie.title}</Toast.Header>
              <Toast.Body><img src={movie.img_url} alt = {movie.title}/>
              <p>{this.props.movie.description}</p>
              </Toast.Body>
            </Toast>
          </>
        ))}
      </>
    )
  }
}

export default Movies;