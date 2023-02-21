const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_USER_REPO":
      return {
        ...state,
        repos: action.payLoad,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: false,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
