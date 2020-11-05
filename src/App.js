import React, { useMemo, useReducer } from 'react';

import Layout from './components/Layout';

import { userReducer, UserContext } from './store/store';

const App = () => {
  const [state, dispatch] = useReducer(userReducer, []);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <UserContext.Provider value={contextValue}>
      <div className="App">
        <Layout />
      </div>
    </UserContext.Provider>
  );
};

export default App;
