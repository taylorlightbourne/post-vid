import React, {useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image1 from '../UI-Assets/images/img-1.jpg';


function Cards(props) {
  const [eventInfo, setEventInfo] = useState({})
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Image1}
              text={props.eventInfo.name}
              label='Concert'
              path='/register'
            />
            <CardItem
              src={Image1}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'              
              path='/register'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Image1}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/register'
            />
            <CardItem
              src={Image1}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/register'
            />
            <CardItem
              src={Image1}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/register'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;