import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleMap } from 'react-google-maps';
import MyMarker from '../components/MyMarker';

const Map = (props) => {
  const trails = props.trailList;
  console.log(trails)
  

  
    const markers = trails.map((trail, index) => {
      return <MyMarker key={index}
        text={trail.name}
        lat={trail.latitude}
        lng={trail.longitude}
        />
    })
  
  
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={{lat: 45.51, lng: -122.68}}
        defaultZoom={11}
      >
      {markers}
      </GoogleMapReact>
    </div>
  );
  
}

export default Map;