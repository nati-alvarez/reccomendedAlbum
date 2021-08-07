import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {releaseInfoAction} from "../../Redux/Actions/ReleaseInfoAction";

const SearchTopTen = () => {
  const [searchInput, setSearchInput] = useState();
  const releaseInfo = useSelector((state) => state.releases.search);

  const inputHandler = (e) => {
    setSearchInput(e);
  };

  return releaseInfo.length > 0 ? (
    <div className="styledSearch">
      <div className="searchContainer">
        <input
          type="text"
          key="searchBar"
          placeholder={"search"}
          onChange={(e) => inputHandler(e.target.value)}
        />
        <div className="searchResults">
          {searchInput &&
            releaseInfo.map((release, i) => {
              if (
                release.title.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return (
                  <div className="searchResult" key={i}>
                    <SearchRelease
                      name={release.title}
                      artist={release.artist}
                      image={release.thumb}
                      catno={release.catno}
                      key={i}
                      id={release.id}
                    />
                  </div>
                );
              }
              if (
                release.artist.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return (
                  <div className="searchResult" key={i}>
                    <SearchRelease
                      name={release.title}
                      artist={release.artist}
                      image={release.thumb}
                      catno={release.catno}
                      key={i + 1}
                      id={release.id}
                    />
                  </div>
                );
              } else return <></>;
            })}
        </div>
      </div>
    </div>
  ) : (
    <> LOADING </>
  );
};

const SearchRelease = ({name, artist, image, catno, key, id}) => {

  const dispatch = useDispatch();


  return (
    <div onClick={() => dispatch(releaseInfoAction(id))} key={key}>
      <img src={image} alt={name} />
      <span>
        <p>{artist}</p>
        <p>{name}</p>
        <p>{catno}</p>
      </span>
    </div>
  );
};

export default SearchTopTen;
