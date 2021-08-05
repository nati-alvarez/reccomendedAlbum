import {useSelector} from "react-redux";

function Bio() {
  const data = useSelector((state) => state);
console.log(data.Releases.label)
  return (
    <div className="bioContainer">
      {[data.Releases.label].map((asset, i) => (
        <div key={i} className="infoContainer">
          <img src={asset.images[0]?.uri} alt={asset.name} key={`${i} image`} />
          <p key={`${i} name`}>{asset.name}</p>
          <span>
            <p key={`${i} profile`}>{asset.profile}</p>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Bio;
