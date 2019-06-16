import React from 'react';
import { map } from 'lodash';

export default ({
  users,
  onClick,
}) => (
  <ul className="users">
    {
      map(users, (user) => (
        <li onClick={() => onClick(user)} className={ user.isSelected ? 'isSelected' : '' } key={user.name}>
          <h2>{user.name}</h2>
          <img alt={user.name} src={`https://i.pravatar.cc/150?u=${user.name}`} />
        </li>
      ))
    }
  </ul>
);
