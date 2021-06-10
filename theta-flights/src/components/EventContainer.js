import React, { useState, useEffect } from 'react';
import Event from './Event';

export default function EventContainer({ props }) {
  const [eventInfo, setEventInfo] = useState({})

  useEffect(() => {
    getEventById();
  });


  const getEventById = async () => {
    const eventId = props.params.id;

    const eventFetch = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?id=${eventId}&countryCode=US&apikey=gCuBI3xKu5yQnsJ8onGcrmLfnAA7NpHt`, {
      headers: {
        "Accept": "application/json"
      }
    });

    const eventJson = await eventFetch.json();

    setEventInfo(eventJson);
  }

  return (
    <div>
      <Event eventInfo={eventInfo}/>
    </div>
  )
}