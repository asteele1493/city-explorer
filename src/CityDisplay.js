import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image'


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
      <Accordion.Item eventKey="2">
        <Accordion.Header>City Map</Accordion.Header>
        <Accordion.Body><Image 
        src = {`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.location.lat},${this.props.location.lon}&zoom=12`}
        alt={"a map!"}/>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </>
    )
  }
}


export default CityDisplay;