const initialState = {
  info: "",
  loading: false,
};

const labelReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "FETCH_LABEL":
      return {...state, loading: true};
    case "FETCH_LABEL_SUCCESS":
      return {...state, info: action.payload.all, loading: false};
    default:
      return {...state};
  }
};

export default labelReducer;
