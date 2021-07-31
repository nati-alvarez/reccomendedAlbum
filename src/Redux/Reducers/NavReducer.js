const initialState = {
  signToggle: false,
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
      return {...state, show: false};
    case "SIGN_TOGGLE":
      return {...state, signToggle: action.payload.signToggle};
    case "ASSET_SELECTOR_SUCCESS":
      //todo figure out why ...state changes formatting
      return {
        // ...state,
        show: false,
        loading: true,
        selected: action.payload.all,
        signToggle: state.signToggle,
      };
    default:
      return {...state};
  }
};

export default navReducer;
