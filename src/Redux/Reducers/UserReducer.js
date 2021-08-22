const initState = {
  id: false,
  topTen: [],
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

    case "USER_NAV_SELECTOR":
      return {...state, show: true};
    case "USER_NAV_VISIBLE":
      return {...state, show: false};
      case "ADD_TO_TOP_TEN":
        return {...state, };
      case "ADD_TO_TOP_TEN_SUCCESS":
        return {...state, show: false, topTen: action.payload.data};
  
    default:
      return {...state};
  }
};

export default userReducer;
