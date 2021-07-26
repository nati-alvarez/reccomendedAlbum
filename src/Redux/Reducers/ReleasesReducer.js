const initialState = [];

const releasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETRELEASESINFO":
      return state;
    default:
      return state;
  }
};

export default releasesReducer;
