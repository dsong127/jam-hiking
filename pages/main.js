import Head from 'next/head';
import { useState } from 'react';
import Map from '../components/Map';

function Main() {  
    // State to store retrieved trails list from the Hiking Project API
    const [trailsList, setTrailsList] = useState({
      list: []
    });

    // Create multiple divs to display the retrieved trails list
    const TrailsView = trailsList.list.map((trail, index) => {
      return <div key={index} className="listRow">
        <img src={trail.imgSmall}></img>
        <h3>{trail.name}</h3>
        <p>{trail.summary}</p>
        <p>Length: {trail.length} miles</p>
        <p>Rating: {trail.stars} / 5 </p>
      </div>
    })

    // Button submit handler for getting user's current location coordinates,
    // And using them to build the URL to the Hiking Project API data endpoint
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( async (pos) => {
          const lat = pos.coords.latitude;
          const long = pos.coords.longitude;

          const trails = await fetch (
            `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=200&maxResults=5&key=${process.env.HIKING_API_KEY}`
          )
            .then( res => res.json() )
            .then( (data) => 
              setTrailsList({
                list: data.trails
            }))
            .catch(() => console.log('Error fetching hiking data'))
        });
      }
    }

    // Render text and get my location button
    // Also render the trails information when the trailList state gets updated
    return (
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 3fr", 
            gridGap: 20
            }}
            className="colContainer">
          <Head>
            <title>Hiking</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Varela&display=swap" rel="stylesheet"></link>
          </Head>
          
          <div className="listCol">
            <div className="listHeader">
              <h2>
                Find Hiking trails near me
              </h2>
              <button onClick={getLocation}>Locate me</button>
            </div>
              {TrailsView}
          </div>
          
          <div className="mapCol">
            <Map trailList={trailsList.list}/>

          </div>

        <style jsx>{`
        .colContainer {
          width: 100%;
          height: 100%;
          position: absolute;
        }
        .listCol {
            height: 100%;
            padding: 20px;
            text-align: center;
            overflow: scroll;
        }
        .listHeader {
          margin: 20px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Varela', sans-serif;
          position: relative;
          height: 100%;
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}

export default Main