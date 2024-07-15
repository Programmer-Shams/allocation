import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import heroImg from './assets/heroImg.jpg';
import base from './assets/base.svg';
import linea from './assets/linea.svg';
import dxdx from './assets/dxdx.svg';
import uniswap from './assets/uniswap.svg';
import phantom from './assets/phantom.svg';
import brave from './assets/brave.svg';

function App() {
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center">
        <img src={heroImg} className="h-[400px] md:h-[600px] w-[1200px]" alt="heroImg" />
      </section>
      <h1 className="text-center text-[#d3d3d4] text-6xl mt-10 font-semibold">
        Snapshot has been taken...
      </h1>
      <div className="flex flex-col items-center justify-center gap-8 mt-5">
        <p className="text-center text-[#6f7072] text-lg">
          Check your $L3 allocation below.
        </p>
        {/* <button className="bg-[#1D77FF] px-6 py-3 text-white rounded-lg font-[400] text-sm">
          Check Now
        </button> */}
        <ConnectButton />
      </div>
      <section className="flex flex-col items-center justify-center mt-[8rem] px-3">
        <p className="text-center text-[#6f7072] text-sm tracking-wider">
          SCROLL TO EXPLORE
        </p>
        <p className="text-white font-[400] text-2xl text-center mt-5 md:text-5xl">
          Trusted by 1M users and $100B ecosystems
        </p>
        <div className="flex flex-wrap md:flex-nowrap p-5 md:p-0 items-center gap-16 my-16">
          <img src={base} className="logo" alt="base" />
          <img src={linea} className="linea" alt="linea" />
          <img src={dxdx} className="dxdx" alt="dxdx" />
          <img src={uniswap} className="uniswap" alt="uniswap" />
          <img src={phantom} className="phantom" alt="phantom" />
          <img src={brave} className="brave" alt="brave" />
          <img src={base} className="logo" alt="base" />
        </div>
      </section>
    </>
  );
}

export default App;

// ConnectButton Component
function ConnectButton() {
  return <w3m-button  />;
}
