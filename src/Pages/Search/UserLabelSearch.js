import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addLabel} from "../../Redux/Actions/userActions";

function UserLabelSearch(props) {
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);

  const [inputValue, setInputValue] = useState();
  const inputHandler = (e) => {
    axios
      // .get(`https://rlca-backend.herokuapp.com/search`, {
      .get(`http://localhost:3001/search`, {
        withCredentials: true,
        params: {
          discogsAccessparams: `${e}&?label`,
        },
      })
      .then(function (response) {
        const results = [];
        for (let i = 0; i < response.data.results.length; i++) {
          const current = response.data.results[i].cover_image;

          if (current.substr(current.length - 3, 3) === "gif") {
          } else {
            results.push(response.data.results[i]);
          }
        }
        const firstTen = results.slice(0, 10);

        setSearchResults(firstTen);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        key="searchBar"
        placeholder={"search"}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => inputHandler(inputValue)} type="submit">
        Search
      </button>
      <br></br>
      <div className="userSearchResults">
        {searchResults?.map((asset, i) => (
          <div
            key={i}
            className="navButtonsUserLabelSearch"
            // onClick={() => {
            //   dispatchHandler(asset.id, asset, asset.type);
            // }}
          >
            <img
              src={asset.cover_image}
              alt={asset.title}
              key={`nav item ${i} image`}
              className="labelSearchImg"
            />
            <div className="labelSearchBottom">
              <p key={`nav item ${i} name`}>{asset.title}</p>
              <div
                className="navButtonsPlusLabels navButtons"
                onClick={() => dispatch(addLabel(asset.id, true))}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserLabelSearch;
