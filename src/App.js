import React from 'react';
import './App.css';
import users from './config/users';
import venues from './config/venues';
import Users from './components/Users';
import Venues from './components/Venues';

function App() {
  return (
    <div className="App">
      <section>
        <h1>Who's going?</h1>
        <Users users={users} />
      </section>
      <section>
        <h1>Where to?</h1>
        <Venues venues={venues} />
      </section>
    </div>
  );
}

export default App;
