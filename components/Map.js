import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleMap } from 'react-google-maps';
import MyMarker from '../components/MyMarker';

const google_api_key = process.env.google_api_key;

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
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={{lat: 41.88, lng: -87.62}}
        defaultZoom={11}
      >
      {markers}
      </GoogleMapReact>
    </div>
  );
  
}

export default Map;