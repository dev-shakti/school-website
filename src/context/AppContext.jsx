import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  user: null,
  formSubmissions: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_SUBMISSION':
      return { ...state, formSubmissions: [...state.formSubmissions, action.payload] };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
