const initState = {
    all: 0,
    search: false,
    loading: false,
  };
  
  const releasesReducer = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_RELEASES":
        return {...state, loading: true};
      case "FETCH_RELEASES_SUCCESS":
        return {
          ...state,
          all: action.payload.all.sort((a, b) => b.year - a.year),
          loading: false,
        };
      case "SEARCH":
        return {...state, loading: true};
      case "SEARCH_SUCCESS":
        return {
          ...state,
          search: action.payload.all,
          loading: false,
        };
      default:
        return {...state};
    }
  };
  
  export default releasesReducer;
  