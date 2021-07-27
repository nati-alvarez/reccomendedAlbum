const initialState = {
  show: false,
  current: "",
  loading: false,
};

const navReducer = (state = initialState, action) => {
  console.log(action.type.payload);
  switch (action.type) {
    case "NAV_SELECTOR":
      return {...state, show: true, current: action.payload.all};
    case "ASSET_SELECTOR":
      return {show: false, loading: true, current: ""};
    case "NAV_SELECTOR_SUCCESS":
      return {...state, info: action.payload.all, loading: false};
    default:
      return {...state};
  }
};

export default navReducer;
