import React from 'react'

export default function Event({ props }) {

  return (
    <div className="event__container">
          <h2>{props._embedded.events.name}</h2>
          <h5>{props._embedded.events.id}</h5>
    </div>
  )
}