import { createContext } from 'react';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      // console.log(action.payload);
      return action.payload;
    case 'ADD_PLAN':
      // console.log('payload', action.payload);
      return [...state, action.payload];
    case 'DELETE_PLAN':
      // console.log('payload', action.payload);
      return state.filter(plan => plan._id.toString() !== action.payload);
    default:
      return state;
  }
};

const UserContext = createContext();

export { userReducer, UserContext };
