import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

class Weather extends React.Component {
  render() {
    return (
      <>
        <Row>
          {this.props.weather.map(forecast => (
          <>
          <h3>{this.day.date}</h3>
          <p>{this.day.description}</p>
          <Col>
            <Card>
                <Card.Title>{this.day.date}</Card.Title>
                <Card.Text>{this.day.lowTemp}</Card.Text>
                <Card.Text>{this.day.highTemp}</Card.Text>
            </Card>
          </Col>
          </>

         ))}
        </Row>
        </>


        );
  }
}

        export default Weather;