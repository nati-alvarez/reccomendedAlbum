const initState = {
  id: false,
  rest: [],
  loading: false,
  show: false,
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
//todo create actions for these
    case "USER_NAV_SELECTOR":
      return {...state, show: true, all: action.payload.all};
    case "USER_NAV_VISIBLE":
      return {...state, show: false};

    default:
      return {...state};
  }
};

export default userReducer;
