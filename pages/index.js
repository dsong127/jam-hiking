import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hiking</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Varela&display=swap" rel="stylesheet"></link>
      </Head>
      
      <img class="image'"
        src={'/bg.jpg'}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      <div className="titleDiv">
        <p>
        <span className="titleText">FIND YOUR NEXT ADVENTURE</span>
        </p>
        
        
          <Link href="/main">
            <button className="enterBtn">Enter</button>
          </Link>
   
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          position: absolute;
        }

        .titleText {
          border-bottom: 1px solid black;
          margin-bottom: 30px;
        }

        .titleDiv {
          font-size: 30px;
          width: 100%;
          top: 30%;
          text-align: center;
          position: absolute;
        }

        .enterBtn {
          font-size: 20px;
          padding: 6px 22px;
          text-align: center;
          background: transparent;
          cursor: pointer;
          transition-duration: 0.4s;
        }

        .enterBtn:hover {
          background-color: #555555;
          color: white;
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
