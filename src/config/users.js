import { map, toLower } from 'lodash';

export const users = [
  {
    "name": "John Davis",
    "wont_eat": [ "Fish" ],
    "drinks": [ "Cider", "Rum", "Soft drinks" ]
  },
  {
    "name": "Gary Jones",
    "wont_eat": [ "Eggs", "Pasta" ],
    "drinks": [ "Tequila", "Soft drinks", "beer", "Coffee" ]
  },
  {
    "name": "Robert Webb",
    "wont_eat": [ "Bread", "Pasta" ],
    "drinks": [ "Vodka", "Gin", "Whisky", "Rum" ]
  },
  {
    "name": "Gavin Coulson",
    "wont_eat": [],
    "drinks": [ "Cider", "Beer", "Rum", "Soft drinks" ]
  },
  {
    "name": "Alan Allen",
    "wont_eat": [ "Meat", "Fish" ],
    "drinks": [ "Soft drinks", "Tea" ]
  },
  {
    "name": "Bobby Robson",
    "wont_eat": [ "Mexican" ],
    "drinks": [ "Vodka", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks" ]
  },
  {
    "name": "David Lang",
    "wont_eat": [ "Chinese" ],
    "drinks": [ "Beer", "cider", "Rum" ]
  }
];

export default map(users, (user) => {
  const wont_eat = map(user.wont_eat, toLower);
  const drinks = map(user.drinks, toLower);

  return {
    ...user,
    wont_eat,
    drinks,
  };
});
