import React, { useEffect, useState } from "react";
import { labelReleases } from "../API/APIcall";
import { DataDiviner } from "../utils/utils";

function Releases(props) {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const arr = await DataDiviner(labelReleases(90336, 1));
      setData(arr);
    })();
  }, []);
  // console.log("REALEASES", data)

  return <div></div>;
}

export default Releases;
