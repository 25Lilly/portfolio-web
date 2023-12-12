import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Cards from '../Cards';
import SeeFirst from '../SeeFirst';
//import Footer from '../Footer';

function Home() {
  return (
    <>
    <Navbar />
    <SeeFirst />
    <Cards />
    {/*<Footer />*/}
    </>
  );
}

export default Home;
