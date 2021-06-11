import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Rediscover the Joy of Being with the Crowd</h1>
      <p>Find events with our new, easy-to-use <br></br>Post-Vid<i class="fa fa-child"></i> Browser.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
           
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
