const initialState = {
  show: false,
  all: [],
  loading: false,
};

const labelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LABEL_ACTION":
      return {...state, show: true, loading: true};
    case "LABEL_ACTION_SUCCESS":
      return {
        ...state,
        all: action.payload.all,
        loading: false,
        show: false,
      };
    default:
      return {...state};
  }
};

export default labelReducer;
