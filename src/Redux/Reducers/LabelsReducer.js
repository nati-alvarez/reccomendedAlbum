// SEARCH_SUCCESS

const initState = {
    labels: []
  };
  
  const labelsReducer = (state = initState, action) => {
    switch (action.type) {
      case "SEARCH_SUCCESS":
        return {...state, labels: action.payload.labels};
     
      default:
        return {...state};
    }
  };
  
  export default labelsReducer;