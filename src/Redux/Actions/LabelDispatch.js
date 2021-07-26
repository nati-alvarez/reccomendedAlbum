import {DataDiviner} from "../../utils/utils";
import {label} from "../../API/APIcall";

export const loadLabels = (id) => async (dispatch) => {
  dispatch({
    type: "FETCH_LABEL",
    payload: {
      loading: true,
    },
  });
  const labelCodes = [90336, 157803, 165219, 389319, 153824, 88949];
  const allData = [];

  for (let i = 0; i < labelCodes.length; i++) {
    let data = await DataDiviner(label(labelCodes[i]));
    allData.push({name: data[0].name, image: data[0].images[0].uri});
  }

  dispatch({
    type: "FETCH_LABEL_SUCCESS",
    payload: {
      all: allData,
      loading: false,
    },
  });
};
