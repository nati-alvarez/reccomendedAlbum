const initialState = [
  {
    show: false,
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
    case "SHOW":
      return {
        ...state,
        show: action.payload.show,
      };
    case "FETCH_RELEASE_INFO_SUCCESS":
      return {
        ...state,
        show: true,
        artists: action.payload.all[0].artists,
        title: action.payload.all[0].title,
        released: action.payload.all[0].released,
        img: action.payload.all[0].img,
        tracklist: action.payload.all[0].tracklist,
        videos: action.payload.all[0].videos,
      };
    default:
      return state;
  }
};

export default releaseReducer;
