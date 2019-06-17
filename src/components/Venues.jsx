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
          <h3>{venue.name}</h3>
          <img alt={venue.name} src={mapPlaceholder} />
        </li>
      ))
    }
  </ul>
);
