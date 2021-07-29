import {useSelector} from "react-redux";

function Bio() {
  const bioSelect = useSelector((state) => state.asset);

  return bioSelect.info ? (
    <div className="bioContainer">
      {bioSelect.info.map((asset, i) => (
        <div key={i} className="infoContainer">
          <img src={asset.image} alt={asset.name} key={`${i} image`} />
          <p key={`${i} name`}>{asset.name}</p>
          <span>
          <p key={`${i} profile`}>{asset.profile}</p>
          </span>
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
}

export default Bio;
