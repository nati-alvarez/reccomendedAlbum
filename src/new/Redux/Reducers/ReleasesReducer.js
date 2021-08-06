const initState = {
  all: [],
  selectedLabel: [],
  selectedRelease: [],
  search: false,
  loading: false,
  show: false,
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
        selectedLabel: action.payload.label
      };

    case "FETCH_RELEASE_INFO":
      return {...state, loading: true};
    case "FETCH_RELEASE_INFO_SUCCESS":
      return {...state, loading: false, selectedRelease: action.payload.selectedRelease, show: true};

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
