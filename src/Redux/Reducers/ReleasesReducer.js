const initState = {
  popular: [],
  newReleases: [],
  all: 0,
  label: [],
  preorders: [],
  search: [],
  loading: false

};

const releasesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_RELEASES":
      return {...state, loading: true};
    case "FETCH_RELEASES_SUCCESS":
      return {...state, all: action.payload.all.sort((a, b) => b.year - a.year), label: action.payload.label, loading: false};
    default:
      return {...state};
  }
};

export default releasesReducer;