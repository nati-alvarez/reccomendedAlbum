import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "../../Common/Search";
import { loadReleasesOnLogin } from "../../Redux/Actions/ReleasesAction";

function SearchPage(props) {
  const dispatch = useDispatch()
    const searchDataChecker = useSelector((state) => state);
console.log(searchDataChecker.releases.all)
if(searchDataChecker === []) {
    console.log("hit")
dispatch(loadReleasesOnLogin())
}

  return (
    <div>
      <Search />
    </div>
  );
}

export default SearchPage;
