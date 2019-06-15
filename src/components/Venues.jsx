import React from 'react';
import { map } from 'lodash';

export default ({
  venues
}) => (
  <ul>
    {
      map(venues, (venue) => (
        <li key={venue.name}>
          <h2>{venue.name}</h2>
          <img alt={venue.name} src={`https://i.pravatar.cc/150?u=${venue.name}`} />
        </li>
      ))
    }
  </ul>
);
