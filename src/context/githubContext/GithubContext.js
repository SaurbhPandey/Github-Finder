import { createContext, useReducer } from "react";
import githubReducer from "../GithubReducer";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  

//   GET THE USER SERACH RESULT 
  const searchUsers = async (text) => {

    const params = new URLSearchParams({
      q:text
    })
    setLoading();
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const {items} = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

// SET LOADING 
const setLoading = () =>{
    dispatch({type:'SET_LOADING'})
}

const clearUsers = () =>{
  dispatch({
    type:'CLEAR_USERS'
  })
}

  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, searchUsers , clearUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
