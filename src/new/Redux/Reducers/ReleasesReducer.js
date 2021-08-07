const initState = {
  all: [],
  selectedLabel: [],
  selectedRelease: [],
  search: false,
  loading: false,
  show: false,
  artists: "",
  title: "",
  released: "",
  img: "",
  tracklist: [],
  videos: [],
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
        selectedLabel: action.payload.label,
      };

    case "FETCH_RELEASE_INFO":
      return {...state, loading: true};
    case "FETCH_RELEASE_INFO_SUCCESS":
      return {
        ...state,
        show: true,
        artists: action.payload.selectedRelease[0].artists,
        title: action.payload.selectedRelease[0].title,
        released: action.payload.selectedRelease[0].released,
        img: action.payload.selectedRelease[0].img,
        tracklist: action.payload.selectedRelease[0].tracklist,
        videos: action.payload.selectedRelease[0].videos,
      };

    case "SEARCH":
      return {...state, loading: true};
    case "SEARCH_SUCCESS":
      return {
        ...state,
        search: action.payload.all,
        loading: false,
      };

      case "SHOW":
        return {
          ...state,
          show: false,
        };

    default:
      return {...state};
  }
};

export default releasesReducer;
