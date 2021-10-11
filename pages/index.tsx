import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FirstSlide from './components/firstSlide'

const Home: NextPage = () => {
  return (
    <>
      <div className="firstThing"></div>
      <FirstSlide />

      
      
      
      <style jsx global>{`
        @font-face {
          font-family: "sans";
          src: url(/sans.ttf);
          font-display: swap;
        }
        
        html,
        body {
          position: relative;
          height: 100%;
          width: 100%;
          margin: 0;
          font-weight: 300;
          font-family: "sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
        #__next {
          height: 100%;
        }
        .firstThing {
          background: url(/firstblob.svg) no-repeat center center;
          background-size: cover;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 50%;
          left: 50%;
          z-index: -1;
          transform: translate(-50%, -50%);
        }                
      
      `}</style>
    </>

  )
}

export default Home
