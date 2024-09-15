import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Cards from '../Cards';
import SeeFirst from '../SeeFirst';

function Home() {
  return (
    <>
    <Navbar />
    <SeeFirst />
    <section id='myProjects'>
      <a href='#myProjects' className='anchor'> </a>
      <h1 style={{ marginTop: '-80px', marginBottom: '49px', visibility:'hidden'}}>.</h1>
    </section>
    <Cards />
    </>
  );
}

export default Home;
