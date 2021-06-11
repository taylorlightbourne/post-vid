import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import SingleEvent from './SingleEvent';

export default function SingleEventContainer({ props }) {
  const [eventInfo, setEventInfo] = useState({})

  const { id } = useParams();

  useEffect(() => {
    getEventById();
  });


  const getEventById = async () => {
    

    const eventFetch = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?&countryCode=US&apikey=kjvLvGRnouIST4VOf6JGxrYNfutHEsdU`, {
      headers: {
        "Accept": "application/json"
      }
    });

    const eventJson = await eventFetch.json();
    setEventInfo(eventJson);

  }
  return (
    <div>
      <SingleEvent eventInfo={eventInfo}/>
    </div>
  )
}