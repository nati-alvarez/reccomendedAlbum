//This is the label selector - All actions in here relate to label button on the header and its functions 
// Importantly these actions are dependant on if the user is logged in or not. 
// In the header the labelAction dispatch will populate a navigation menu that slides out from the left.
// That menu will be populated by either the users saved content (if they have an account) or
// or dummy data.



//our API url & the function that calls the API
import {label, DataDiviner} from "../../Utils/APIcall";







export const labelAction = () => async (dispatch) => {

    dispatch({
        type: "LABEL_ACTION",
      });

      const allData = [];

      const dummyLabelCodes = [1149832, 157803, 23127, 389319, 153824, 88949];
      for (let i = 0; i < dummyLabelCodes.length; i++) {
        let data = await DataDiviner(label(dummyLabelCodes[i]));
        allData.push({
          name: data[0].name,
          image: data[0].images[0].uri,
          profile: data[0].profile,
          url: data[0].urls[0],
          id: data[0].id,
        });
      }


      dispatch({
        type: "LABEL_ACTION_SUCCESS",
        payload: {
            all: allData,
          },
      });
}
// This action is called to open or close the side nav

export const navVisibility = () => (dispatch) => {
  dispatch({
    type: "NAV_VISIBLE"
  });
}