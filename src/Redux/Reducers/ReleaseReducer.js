const initialState = [
  {
    artists: "",
    title: "",
    released: "",
    img: "",
    tracklist: [],
    videos: [],
  },
];

const releaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RELEASE_INFO":
      return state;
    case "FETCH_RELEASE_INFO_SUCCESS":
      return {
        ...state,
        artists: action.payload.all.artists,
        title: action.payload.all.title,
        released: action.payload.all.released,
        img: action.payload.all.img,
        tracklist: action.payload.all.tracklist,
        videos: action.payload.all.videos,
      };
    default:
      return state;
  }
};

export default releaseReducer;
