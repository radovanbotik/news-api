import React from "react";
import { useContext } from "react";
import { reducer } from "./reducer";
import { useReducer, useState, useEffect } from "react";
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

let API_ENDPOINT = `http://hn.algolia.com/api/v1/search?`;
const AppContext = React.createContext();
const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  totalPages: 0,
};
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchStories = async url => {
    dispatch({ type: SET_LOADING });
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, pagesTotal: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = id => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };

  const handleInput = query => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const handlePage = value => {
    console.log(value);
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleInput, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Context, useGlobalContext };
