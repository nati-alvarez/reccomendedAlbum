import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {releaseInfoAction} from "../../Redux/Actions/ReleaseInfoAction";
import { topTenHandler } from "../../utils/utils";
import LoadingImage from '../../assets/loading.jpeg'

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
    <div className='loadingContainer'>
     
    <img src={LoadingImage} alt='loading'/>     
        </div>
  );
};

const SearchRelease = ({name, artist, image, catno, id, topTen}) => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(releaseInfoAction(id))}>
      <img src={image} alt={name} />
      <span>
        <p>{artist}</p>
        <p>{name}</p>
        <p>{catno}</p>
      </span>
      {topTen ? (
        <button
          className="addToTopTenButton"
          onClick={() => {
            //TODO change hardcoded user id to dynamic one
            topTenHandler(image, "610f0899fbc8aa0d170023eb")
          }}
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
