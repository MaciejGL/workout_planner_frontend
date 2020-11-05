import { createContext } from 'react';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

const UserContext = createContext();

export { userReducer, UserContext };
