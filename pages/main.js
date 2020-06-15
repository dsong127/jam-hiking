function Main() {
    return (
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 4fr", 
            gridGap: 20
            }}
            className="colContainer">
        <div className="inputCol">Column 1</div>
        <div className="mapCol">Column 2</div>

        <style jsx>{`
        .colContainer {
          width: 100%;
          height: 100%;
          position: absolute;
        }
        .inputCol {
            background-color: #333333;
            height: 100%;
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