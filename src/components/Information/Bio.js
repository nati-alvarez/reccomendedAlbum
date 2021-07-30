import {useSelector} from "react-redux";

function Bio() {
  const data = useSelector((state) => state);
  console.log(data.nav.current)
  return data.nav.current ? (
    <div className="bioContainer">
      {data.nav.current.map((asset, i) => (
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
