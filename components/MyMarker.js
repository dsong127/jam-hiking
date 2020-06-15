import React from 'react';

const SIZE = 30;

const markerStyle = {
  position: 'absolute',
  width: SIZE,
  height: SIZE,
  left: -SIZE / 2,
  top: -SIZE / 2,
  backgroundColor: 'rgba(52, 52, 52, 0,8)',
  color: '#A31D00',
  fontWeight: 'bold',
  fontSize: 16,
  cursor: 'pointer'
};

const styleHover = {
  ...markerStyle,
  color: '#f44336'
};

class MyMarker extends React.PureComponent {

  // Render custom marker to be used on Google Maps
  render() {
    const style = this.props.$hover ? styleHover : markerStyle;

    return (
       <div style={style}>
          {this.props.text}
       </div>
    );
  }
}

export default MyMarker