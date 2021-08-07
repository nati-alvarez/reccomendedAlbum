import {useState} from "react";
import {useSelector} from "react-redux";
import {database} from "../../Auth/firebase";
import {useAuth} from "../../Auth/AuthProvider";

const Search = () => {
  const [searchInput, setSearchInput] = useState();
  const releaseInfo = useSelector((state) => state.releases.search);

  const inputHandler = (e) => {
    setSearchInput(e);
  };

  return (
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
                  <div className="searchResult">
                    <SearchRelease
                      name={release.title}
                      artist={release.artist}
                      image={release.thumb}
                      catno={release.catno}
                      key={i}
                    />
                  </div>
                );
              }
              if (
                release.artist.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return (
                  <div className="searchResult">
                    <SearchRelease
                      name={release.title}
                      artist={release.artist}
                      image={release.thumb}
                      catno={release.catno}
                      key={i + 1}
                    />
                  </div>
                );
              } else return <></>;
            })}
        </div>
      </div>
    </div>
  );
};

const SearchRelease = ({name, artist, image, catno}) => {
  const [position, setPosition] = useState(1);

  const {currentUser} = useAuth();

  let topTen = database.topTen;
  //to do change hardcoded number to dynamic number from top ten list

  const addTitle = (number) => {
    topTen.doc(number).set({
      name: {name},
      artist: {artist},
      image: {image},
      userId: currentUser.uid,
      number: number,
    });
  };
  // const changePositionGet = (number) => {
  //   topTen.doc(number).set({
  //     name: {name},
  //     artist: {artist},
  //     image: {image},
  //     userId: currentUser.uid,
  //     number: number,
  //   });
  // };

  const addHandler = () => {
    if (currentUser) {
      addTitle(position.toString());
      setPosition(position + 1);
    } else {
    }
  };

  return (
    <div onClick={addHandler}>
      <img src={image} alt={name} />
      <span>
        <p>{artist}</p>
        <p>{name}</p>
        <p>{catno}</p>
      </span>
    </div>
  );
};

export default Search;
