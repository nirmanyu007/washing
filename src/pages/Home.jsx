import React from 'react'
import NavBar from '../component/NavBar'
import '../css/Home.css'
import Main from '../component/Main';
import Main2 from '../component/Main2';
import Bmw from '../component/Bmw';

export default function Home() {
  return (
    <div
      className="back"
      style={{background: 'linear-gradient(to bottom right,rgba(18,18,18,1), rgba(71,65,65))'}}
    >
      <NavBar />
      <Main/>
      <Main2/>
      <Bmw/>
    </div>
  );
}
