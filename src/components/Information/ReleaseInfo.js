import {useSelector} from "react-redux";

function ReleaseInfo({show}) {

  const releaseSelect = useSelector((state) => state);
  console.log(releaseSelect);

  return <div></div>;
}

export default ReleaseInfo;
