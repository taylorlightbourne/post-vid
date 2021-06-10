import React, {useState} from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function Home(props) {
  const [eventInfo, setEventInfo] = useState({})
  return (
    <>
      <HeroSection />
      <Cards eventInfo={eventInfo}/>
      <Footer />
    </>
  );
}

export default Home;