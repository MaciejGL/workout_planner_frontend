import React, { useMemo, useReducer } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

import { userReducer, data, UserContext } from "./store/store";

const App = () => {
  const [state, dispatch] = useReducer(userReducer, data);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <UserContext.Provider value={contextValue}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </UserContext.Provider>
  );
};

export default App;
