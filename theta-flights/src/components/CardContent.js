import React from 'react';
import { Link } from 'react-router-dom';
import './CardContent.css';

export default function CardContent({ event: { name, id } }) {

  return (
    <div className="event__card">
            <h1>{name}</h1>
              <Link to={`/event/${id}`} className="link">
                <button>More Info</button>
              </Link>
          </div>
  )
}
