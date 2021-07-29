const initialState = {
  show: false,
  current: "",
  loading: false,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAV_SELECTOR":
      return {...state, show: true, current: action.payload.all};
    case "NAV_SELECTOR_SUCCESS":
      return {...state, info: action.payload.all, loading: false};
    case "ASSET_SELECTOR":
      return {show: false, loading: true, current: ""};
    case "ASSET_SELECTOR_SUCCESS":
      return {show: false, loading: true, current: action.payload.all};
    default:
      return {...state};
  }
};

export default navReducer;
