import React from 'react';
import { map } from 'lodash';

export default ({
  users
}) => (
  <ul>
    {
      map(users, (user) => (
        <li key={user.name}>
          <h2>{user.name}</h2>
          <img alt={user.name} src={`https://i.pravatar.cc/150?u=${user.name}`} />
        </li>
      ))
    }
  </ul>
);
