import {DataDiviner} from "../utils/utils";
import {label} from "../API/APIcall";
import {useEffect, useState} from "react";

function Label() {


  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const arr = await DataDiviner(label(90336));
      setData(arr);
    })();
  }, []);
  // console.log("LABEL", data);
  return <div></div>;
}

export default Label;
