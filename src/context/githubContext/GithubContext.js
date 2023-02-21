import { createContext, useReducer } from "react";
import githubReducer from "../GithubReducer";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;


const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user:{},
    repos:[],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  

//   GET THE USER SERACH RESULT 
  const searchUsers = async (text) => {

    const params = new URLSearchParams({
      q:text
    })
    setLoading();
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`
  
    );

    const {items} = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //   GET THE SINGLE USER 
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`
   
    );

    if(response.status === 404){
      window.location = '/notfound'
    }
    else{
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
   
  };


  // GET USER REPOS 
  const getUserRepos = async (login) => {
    setLoading()
   
    const response= await fetch(`${GITHUB_URL}/users/${login}/repos`)

    if( response.status === 404 ){
        window.location = '/notfound'
    } else{
        const data = await response.json()

    dispatch({
        type: 'GET_USER_REPO',
        payLoad: data,
    })

    }
}


// SET LOADING 
const setLoading = () =>{
    dispatch({type:'SET_LOADING'})
}


// CLEAR USERS 
const clearUsers = () =>{
  dispatch({
    type:'CLEAR_USERS'
  })
}

  return (
    <GithubContext.Provider
      value={{ users: state.users, user : state.user , isLoading: state.isLoading, repos : state.repos , searchUsers , clearUsers , getUser , getUserRepos}}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
