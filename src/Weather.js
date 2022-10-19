import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

class Weather extends React.Component {
  render() {
    return (
      <>
        <Row>
          {this.props.weather.map(day => (
          <>
          <h3>{day.datetime}</h3>
          <p>{day.description}</p>
          <Col>
            <Card>
                <Card.Title>{day.datetime}</Card.Title>
                <Card.Text>{day.low_temp}</Card.Text>
                <Card.Text>{day.high_temp}</Card.Text>
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