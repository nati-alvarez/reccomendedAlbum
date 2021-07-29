//this reducer handles the data returned from the API after the user
// has selected an item from the side nav. Example: if the user clicked label 
// in the header and then clicked one of the labels from the side navigation 
// information about that label would be housed in this reducer. 

const initialState = {
  show: false,
  info: "",
  loading: false,
};

const assetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ASSET_SELECTOR_SUCCESS":
      return {...state, info: action.payload.all, loading: false};
    default:
      return {...state};
  }
};

export default assetReducer;
