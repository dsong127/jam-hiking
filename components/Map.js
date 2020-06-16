import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleMap } from 'react-google-maps';
import MyMarker from '../components/MyMarker';

const Map = (props) => {
  const trails = props.trailList;

  // When the props containing trails information are updated,
  // Use the information to place markers on the map
  const markers = trails.map((trail, index) => {
    return <MyMarker key={index}
      text={trail.name}
      lat={trail.latitude}
      lng={trail.longitude}
      />
  })
  
  // Render Google Map. Default center is Chicago
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
        defaultCenter={{lat: 41.88, lng: -87.62}}
        defaultZoom={11}
      >
      {markers}
      </GoogleMapReact>
    </div>
  );
  
}

export default Map;