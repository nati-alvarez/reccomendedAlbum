import LabelReducer from "./LabelReducer";
// import assetReducer from "./AssetReducer";
// import releasesReducer from "./ReleasesReducer";
import {combineReducers} from "redux";
// import releaseReducer from "./ReleaseReducer";
// import userReducer from "./UserReducer";

const allReducers = combineReducers({
  Label: LabelReducer,
  // user: userReducer,
  // // asset: assetReducer,
  // releases: releasesReducer,
  // individualRelease: releaseReducer,
});

export default allReducers;
