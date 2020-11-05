import { createContext } from 'react';

const data = [];

const userReducer = (state = data, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const UserContext = createContext();

export { data, userReducer, UserContext };
