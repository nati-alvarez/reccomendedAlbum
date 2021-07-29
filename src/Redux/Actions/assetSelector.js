// this action handles the users selection from the side nav
// once the user clicks on an asset from the left it populates the page
// either with generic data pulled from the API or data from their
// database.

import {DataDiviner} from "../../utils/utils";
import {label} from "../../API/APIcall";
import {artist} from "../../API/APIcall";

export const assetSelector = (id, type) => async (dispatch) => {
  console.log(id, type);
  dispatch({
    type: "ASSET_SELECTOR",
  });

  const allData = [];

  if (type === "label") {
    let data = await DataDiviner(label(id));
    allData.push({
      name: data[0].name,
      image: data[0].images[0].uri,
      profile: data[0].profile,
      url: data[0].urls[0],
    });
  } else if (type === "artist") {
    let data = await DataDiviner(artist(id));
    allData.push({
      name: data[0].name,
      image: data[0].images[0].uri,
      profile: data[0].profile,
      url: data[0].urls[0],
    });
  } else if (type === "genre") {
    // allData.push({name: id, image: genreImg});
  } else if (type === "user") {
    let data = await DataDiviner(label(id));
    allData.push({name: data[0].name, image: data[0].images[0].uri});
  }
  console.log(allData);
  dispatch({
    type: "ASSET_SELECTOR_SUCCESS",
    payload: {
      all: allData,
      loading: false,
    },
  });
};
