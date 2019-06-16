import React, { Component } from 'react';
import { map } from 'lodash';
import './App.css';
import users from './config/users';
import venues from './config/venues';
import Users from './components/Users';
import Venues from './components/Venues';

class App extends Component {
  state = {
    users: users,
    groupCanVisit: [],
  }

  onUserClick = (user) => {
    const { users } = this.state;

    const updatedUser = {
      ...user,
      isSelected: !user.isSelected,
    };

    this.setState({
      users: map(users, (stateUser) => stateUser.name === user.name ? updatedUser : stateUser),
    });
  }

  render() {
    const {
      users,
      groupCanVisit,
    } = this.state;

    return (
      <div className="App">
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
