const initialState = [];

const releaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETRELEASESINFO":
      return state;
    default:
      return state;
  }
};

export default releaseReducer;
