import Head from 'next/head'
import { useState } from 'react';


function Main() {
    const [trailState, setTrails] = useState({
      list: []
    });

    const updatedTrailsView = trailState.list.map((trail) => {
      return <div className="listRow">
        <img src={trail.imgSmall}></img>
        <h3>{trail.name}</h3>
        <p>{trail.summary}</p>
        <p>Length: {trail.length} miles</p>
        <p>Rating: {trail.stars} / 5 </p>
      </div>
    })

    const getLocation = () => {
      
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( async (pos) => {
          const lat = pos.coords.latitude;
          const long = pos.coords.longitude;
          console.log('fetching')
          const trails = await fetch (
            `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=100&key=`
          )
            .then(res => res.json())
            .catch(err => console.log(err))
            console.log(trails.trails)
            
            setTrails({
              list: trails.trails
            })

            console.log(trailState.list)
        });
      }
    }


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
              {updatedTrailsView}
          </div>
          <div className="mapCol">Column 2</div>

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