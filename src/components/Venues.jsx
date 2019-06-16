import React from 'react';
import { map } from 'lodash';
import mapPlaceholder from '../map-placeholder.png';

export default ({
  venues
}) => (
  <ul>
    {
      map(venues, (venue) => (
        <li key={venue.name}>
          <h2>{venue.name}</h2>
          <img alt={venue.name} src={mapPlaceholder} />
        </li>
      ))
    }
  </ul>
);
