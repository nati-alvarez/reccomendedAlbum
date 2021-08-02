const initState = {
  topTen: [],
  rest: [],
  loading: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USER_DATA":
      return {...state, loading: true};
    case "FETCH_USER_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        topTen: action.payload.all,
      };

    default:
      return {...state};
  }
};

export default userReducer;
