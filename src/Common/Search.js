import {useState} from "react";
import {useSelector} from "react-redux";

const Search = () => {
  const [searchInput, setSearchInput] = useState();
  const releaseInfo = useSelector((state) => state.releases.all);



  const inputHandler = (e) => {
    setSearchInput(e);
  };

  return (
    <div className="styledSearch">
      <div className="Search">
        <input
          type="text"
          key="searchBar"
          placeholder={"search titles"}
          onChange={(e) => inputHandler(e.target.value)}
        />
        <button>Search</button>
        {searchInput &&
          releaseInfo.map((release, i) => {
            if (
              release.title.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return (
                <div className="searchResults">
                  <SearchRelease
                    name={release.title}
                    format={release.format}
                    released={release.year}
                    artist={release.artist}
                    id={release.id}
                    master={release.resource_url}
                    image={release.thumb}
                    key={i}
                    catno={release.catno}
                  />
                </div>
              );
            }
            if (
              release.artist.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return (
                <div className="searchResults">
                  <SearchRelease
                        name={release.title}
                        format={release.format}
                        released={release.year}
                        artist={release.artist}
                        id={release.id}
                        master={release.resource_url}
                        image={release.thumb}
                        key={i}
                        catno={release.catno}
                      />
                </div>
              );
            } else return <></>;
          })}
      </div>
    </div>
  );
};

const SearchRelease = ({
  name,
  format,
  released,
  artist,
  id,
  master,
  image,
  key,
  catno,
}) => {
  return (
    <div>
      <img src={image} alt={name} />
      <span>
        <p>{artist}</p>
        <>{name}</>
      </span>
    </div>
  );
};

export default Search;
