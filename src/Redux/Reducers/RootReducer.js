import navReducer from "./NavReducer";
import labelReducer from "./LabelReducer";
import releasesReducer from "./ReleasesReducer";
import {combineReducers} from "redux";
import releaseReducer from "./ReleaseReducer";

const allReducers = combineReducers({
  nav: navReducer,
  label: labelReducer,
  releaseInfo: releasesReducer,
  individualRelease: releaseReducer,
});

export default allReducers;
