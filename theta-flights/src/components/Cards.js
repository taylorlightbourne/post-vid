import React, {useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image1 from '../UI-Assets/image1.jpg';
import Image2 from '../UI-Assets/image2.jpg';
import Image3 from '../UI-Assets/image3.jpg';
import Image4 from '../UI-Assets/image4.jpg';
import Image5 from '../UI-Assets/image5.jpg';


function Cards(props) {
  const [eventInfo, setEventInfo] = useState({})
  return (
    <div className='cards'>
      <h1>Check out these Upcoming Events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Image1}
              text="San Diego Padres vs. Los Angeles Dodgers"
              label='Baseball'
              path='/event/vvG1IZpnrqV-3u'
            />
            <CardItem
              src={Image2}
              text='Hamilton (NY)'
              label='Theater'              
              path='/event/vvG1GZpn987Nmh'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Image3}
              text='Taco & Margarita Festival'
              label='Food'
              path='/event/G5diZ4VBwadXo'
            />
            <CardItem
              src={Image4}
              text='Summer White Concert'
              label='Music'
              path='/event/vvG1OZplSH5303'
            />
            <CardItem
              src={Image5}
              text='BriteVibes™ Festival'
              label='Festival'
              path='/event/LvZ18b1XhiCQu3OZOhY1y'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;