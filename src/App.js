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
    avoid: [],
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

    const venues = filter(normalizedVenues, (venue) =>
      every(eachUserCanVisit, (user) =>
        find(user.canVisit, ['name', venue.name])
      )
    )

    this.setState({
      venues,
      avoid: difference(normalizedVenues, venues),
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
      avoid,
    } = this.state;

    return (
      <div>
        <h1>Time Out Lunch Venue Finder</h1>
        <section>
          <h2>Who's going?</h2>
          <Users onClick={this.onUserClick} users={users} />
        </section>
        <section>
          <h2>Where to?</h2>
          <Venues venues={venues} />
        </section>
        {!isEmpty(avoid) && (
          <section>
            <h1>Avoid</h1>
            <Venues venues={avoid} />
          </section>
        )}
      </div>
    );
  }
}

export default App;
