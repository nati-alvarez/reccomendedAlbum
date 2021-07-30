// import {useSelector} from "react-redux";

function ReleaseInfo({show}) {
  // const releaseSelect = useSelector((state) => state.individualRelease);
  console.log(show);
  return (
    <div className={`releaseInfoContainer ${show ? "" : "hideInfo"}`}>
<div className="tester">
  TEST
</div>
      TEST
    </div>
  );
}

export default ReleaseInfo;
