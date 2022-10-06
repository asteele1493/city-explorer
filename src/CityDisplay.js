import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

class CityDisplay extends React.Component{
  render() {
    return (
      <>
      <Accordion defaultActiveKey='0'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>The city we searched for is: </Accordion.Header>
        <Accordion.Body>{this.props.location.display_name}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Latitude and Longitude</Accordion.Header>
        <Accordion.Body>{this.props.lat}{this.props.lon}</Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </>
    )
  }
}


export default CityDisplay;