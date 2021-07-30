import navReducer from "./NavReducer";
// import assetReducer from "./AssetReducer";
import releasesReducer from "./ReleasesReducer";
import {combineReducers} from "redux";
import releaseReducer from "./ReleaseReducer";

const allReducers = combineReducers({
  nav: navReducer,
  // asset: assetReducer,
  releases: releasesReducer,
  individualRelease: releaseReducer,
});

export default allReducers;
