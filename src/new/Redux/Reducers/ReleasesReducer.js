const initState = {
  all: 0,
  selected: [],
  search: false,
  loading: false,
  show: false,
  label: []
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
        label: action.payload.label
      };

    case "FETCH_RELEASE_INFO":
      return {...state, loading: true};
    case "FETCH_RELEASE_INFO_SUCCESS":
      return {...state, loading: false, selected: action.payload.selected, show: true};

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
