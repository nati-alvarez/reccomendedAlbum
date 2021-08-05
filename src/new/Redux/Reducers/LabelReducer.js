const initialState = {
  show: false,
  all: [],
  loading: false,
};

const labelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LABEL_ACTION":
      return {...state, loading: true};
    case "LABEL_ACTION_SUCCESS":
      return {
        ...state,
        all: action.payload.all,
        loading: false,
        show: !state.show,
      };
    case "NAV_VISIBLE":
      return {...state, show: !state.show};
    default:
      return {...state};
  }
};

export default labelReducer;
