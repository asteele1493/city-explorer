import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

class Weather extends React.Component {
  render() {
    return (
      <>
        <Row>
          {this.props.weather.map(day => (
          <>
          <Col>
            <Card>
                <Card.Title>{day.datetime}</Card.Title>
                <Card.Body>{day.description}</Card.Body>
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