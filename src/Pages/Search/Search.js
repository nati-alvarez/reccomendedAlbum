import axios from "axios";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {releaseInfoAction} from "../../Redux/Actions/ReleaseInfoAction";

const Search = ({topTen}) => {
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
                      topTen={topTen}
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
                      topTen={topTen}
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

const SearchRelease = ({name, artist, image, catno, key, id, topTen}) => {
  const dispatch = useDispatch();
  const topTenHandler = async (releaseInfo) => {
    await axios
      .patch("http://localhost:3001/user/610f0899fbc8aa0d170023eb", {
        topTen: releaseInfo,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div onClick={() => dispatch(releaseInfoAction(id))} key={key}>
      <img src={image} alt={name} />
      <span>
        <p>{artist}</p>
        <p>{name}</p>
        <p>{catno}</p>
      </span>
      {topTen ? (
        <button
          className="addToTopTenButton"
          onClick={() => topTenHandler(image)}
        >
          Add to Top Ten
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Search;
