import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";
const AppContext = React.createContext();

const intialState = {
  image: "",
  image1: "",
  image2: "",
  image3: "",
  image4: "",
  image5: "",
  image6: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        image: "/images/Bg1.jpg",
      },
    });
  };
  const NotesSection = () => {
    return dispatch({
      type: "NOTES_UPDATE",
      payload: {
        image1: "/images/Physics.jpg",
        image2: "/images/Chemistry.jpg",
        image3: "/images/Java.jpg",
        image4: "/images/C++.jpg",
        image5: "/images/Python.jpg",
        image6: "/images/Java.jpg",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, NotesSection }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
