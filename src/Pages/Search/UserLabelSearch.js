import axios from "axios";
import {useState} from "react";
import {useDispatch} from "react-redux";
// import LoadingImage from "../../assets/loading.jpeg";
import { addLabel } from "../../Redux/Actions/userActions";

function UserLabelSearch(props) {
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
//   const releaseInfo = useSelector((state) => state.releases.search);
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
        console.log(response.data.results[0]);
        setSearchResults([response.data.results[0]]);
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
      <br>
      </br>
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
                className='labelSearchImg'
              />
              <div>
                <p key={`nav item ${i} name`}>{asset.title}</p>
                <button onClick={() => dispatch(addLabel(asset.id))}>ADD</button>
              </div>
            </div>

        ))}
      </div>
    </div>
  );
}

export default UserLabelSearch;
