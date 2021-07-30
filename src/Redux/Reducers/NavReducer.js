const initialState = {
  show: false,
  all: [],
  selected: [],
  loading: false,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAV_SELECTOR":
      return {...state, show: true, all: action.payload.all};
    case "NAV_SELECTOR_SUCCESS":
      return {...state, all: action.payload.all, loading: false};
    case "NAV_VISIBLE":
      return {...state, show: !state.show};
    case "ASSET_SELECTOR_SUCCESS":
      return {show: false, loading: true, selected: action.payload.all};
    default:
      return {...state};
  }
};

export default navReducer;
