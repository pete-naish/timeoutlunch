import React, { Component } from 'react';
import { map, filter, every, isEmpty, difference, includes, find } from 'lodash';
import './App.css';
import normalizedUsers from './config/users';
import normalizedVenues from './config/venues';
import Users from './components/Users';
import Venues from './components/Venues';

class App extends Component {
  state = {
    users: normalizedUsers,
    venues: normalizedVenues,
  }

  updateVenues = () => {
    const { users } = this.state;
    const selectedUsers = filter(users, 'isSelected');

    const eachUserCanVisit = map(selectedUsers, (user) => {
      const canVisit = filter(normalizedVenues, (venue) => {
        const canEat = !isEmpty(difference(venue.food, user.wont_eat));
        const canDrink = !isEmpty(filter(venue.drinks, (drink) => includes(user.drinks, drink)));

        return canEat && canDrink;
      });

      return {
        name: user.name,
        canVisit,
      };
    });

    this.setState({
      venues: filter(normalizedVenues, (venue) =>
        every(eachUserCanVisit, (user) =>
          find(user.canVisit, ['name', venue.name])
        )
      )
    });
  }

  onUserClick = (user) => {
    const { users } = this.state;

    const updatedUser = {
      ...user,
      isSelected: !user.isSelected,
    };

    this.setState({
      users: map(users, (stateUser) => stateUser.name === user.name ? updatedUser : stateUser),
    }, this.updateVenues);
  }

  render() {
    const {
      users,
      venues,
    } = this.state;

    return (
      <div>
        <section>
          <h1>Who's going?</h1>
          <Users onClick={this.onUserClick} users={users} />
        </section>
        <section>
          <h1>Where to?</h1>
          <Venues venues={venues} />
        </section>
      </div>
    );
  }
}

export default App;
