//This is the nav selector - depending on what button the user clicked 
// in the header this dispatch will populate a navigation menu that slides out from the left.
// That menu will be populated by either the users saved content (if they have an account) or 
// or dummy data. 

//our API urls
import {label} from "../../API/APIcall";
import {artist} from "../../API/APIcall";
import genreImg from '../../assets/genre.png'
// the function that calls the API
import {DataDiviner} from "../../utils/utils";

export const navSelectorDispatch = (nav) => async (dispatch) => {
  dispatch({
    type: "NAV_SELECTOR",
    payload: {
      loading: true,
    },
  });

  const allData = [];

  if (nav === "labels") {
    //todo replace these codes with some from local storage
    const dummyLabelCodes = [90336, 157803, 165219, 389319, 153824, 88949];
    for (let i = 0; i < dummyLabelCodes.length; i++) {
      let data = await DataDiviner(label(dummyLabelCodes[i]));
      allData.push({name: data[0].name, image: data[0].images[0].uri});
    }
  } else if (nav === "artists") {
    //todo replace these codes with some from local storage
    const dummyCodes = [411447, 3415415, 216297, 59946, 1868506, 830699];
    for (let i = 0; i < dummyCodes.length; i++) {
      let data = await DataDiviner(artist(dummyCodes[i]));
      allData.push({name: data[0].name, image: data[0].images[0].uri});
    }
  } else if (nav === "genre") {
    const dummyCodes = ['Techno', 'Ambient', 'Drone', 'Neo-Classical', 'Dark Jazz'];
    for (let i = 0; i < dummyCodes.length; i++) {
      allData.push({name: dummyCodes[i], image: genreImg});
    }
  } else if (nav === "user") {
    //replace dummy codes with codes from the users database
    const dummyCodes = [90336];
    for (let i = 0; i < dummyCodes.length; i++) {
      let data = await DataDiviner(label(dummyCodes[i]));
      allData.push({name: data[0].name, image: data[0].images[0].uri});
    }
  }
  dispatch({
    type: "NAV_SELECTOR_SUCCESS",
    payload: {
      all: allData,
      loading: false,
    },
  });
};


