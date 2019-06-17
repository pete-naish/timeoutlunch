import React from 'react';
import App from './App';
import Users from './components/Users';
import { shallow } from 'enzyme';

import allUsersFixture from './fixtures/all-users-fixture';
import allVenuesFixture from './fixtures/all-venues-fixture';
import firstUserSelectedFixture from './fixtures/first-user-selected-fixture';
import threeUsersSelectedFixture from './fixtures/three-users-selected-fixture';
import threeUsersFilteredVenuesFixture from './fixtures/three-users-filtered-venues-fixture';
import allUsersSelectedFixture from './fixtures/all-users-selected-fixture';
import allUsersFilteredVenuesFixture from './fixtures/all-users-filtered-venues-fixture';

describe('selecting one user for lunch', () => {
  it('should filter out the correct venues', () => {
    const wrapper = shallow(<App />);
    const UsersComponent = shallow(<Users onClick={wrapper.instance().onUserClick} users={allUsersFixture} />);

    UsersComponent.find('#john-davis').simulate('click');
    expect(wrapper.state('users')).toEqual(firstUserSelectedFixture)
    expect(wrapper.state('venues')).toEqual(allVenuesFixture);
  });
});

describe('selecting three users for lunch', () => {
  it('should filter out the correct venues', () => {
    const wrapper = shallow(<App />);
    const UsersComponent = shallow(<Users onClick={wrapper.instance().onUserClick} users={allUsersFixture} />);

    UsersComponent.find('#john-davis').simulate('click');
    UsersComponent.find('#gary-jones').simulate('click');
    UsersComponent.find('#robert-webb').simulate('click');
    expect(wrapper.state('users')).toEqual(threeUsersSelectedFixture)
    expect(wrapper.state('venues')).toEqual(threeUsersFilteredVenuesFixture);
  });
});

describe('selecting all users for lunch', () => {
  it('should filter out the correct venues', () => {
    const wrapper = shallow(<App />);
    const UsersComponent = shallow(<Users onClick={wrapper.instance().onUserClick} users={allUsersFixture} />);

    UsersComponent.find('#john-davis').simulate('click');
    UsersComponent.find('#gary-jones').simulate('click');
    UsersComponent.find('#robert-webb').simulate('click');
    UsersComponent.find('#gavin-coulson').simulate('click');
    UsersComponent.find('#alan-allen').simulate('click');
    UsersComponent.find('#bobby-robson').simulate('click');
    UsersComponent.find('#david-lang').simulate('click');
    expect(wrapper.state('users')).toEqual(allUsersSelectedFixture)
    expect(wrapper.state('venues')).toEqual(allUsersFilteredVenuesFixture);
  });
});
