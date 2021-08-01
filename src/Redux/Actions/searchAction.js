// this action handles the users search query from either the side nav or inside their dashboard
// once the user types into the search bar it makes an api request and returns the results. 
import { searchTitle } from '../../API/APIcall'
import {DataDiviner} from "../../utils/utils";

export const search = (searchParams, type) => async (dispatch) => {
    dispatch({
      type: "SEARCH",
      payload: {
        loading: true,
      },
    });

    let data = await DataDiviner(searchTitle(searchParams, type));

    dispatch({
        type: "SEARCH_SUCCESS",
        payload: {
          all: data,
          loading: false,
        },
      });
    
  }