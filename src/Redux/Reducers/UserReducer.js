const initState = {
  id: false,
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
        id: action.payload.id,
      };

    default:
      return {...state};
  }
};

export default userReducer;
