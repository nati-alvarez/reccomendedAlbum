// this action handles the users selection from the side nav
// once the user clicks on an asset from the left it shrinks the original returned data
// (all their artists or all their labels) down to just the artist or label that they
// selected and populates the page with that data



export const assetSelector = (data) => (dispatch) => {
  dispatch({
    type: "ASSET_SELECTOR_SUCCESS",
    payload: {
      all: data,
      loading: false,
    },
  });
  
}


// export const assetSelector = (id, type) => async (dispatch) => {

//   dispatch({
//     type: "ASSET_SELECTOR",
//   });

//   const allData = [];

//   if (type === "label") {
//     let data = await DataDiviner(label(id));
//     allData.push({
//       name: data[0].name,
//       image: data[0].images[0].uri,
//       profile: data[0].profile,
//       url: data[0].urls[0],
//       id: data[0].id,
//     });
//   } else if (type === "artist") {
//     let data = await DataDiviner(artist(id));
//     allData.push({
//       name: data[0].name,
//       image: data[0].images[0].uri,
//       profile: data[0].profile,
//       url: data[0].urls[0],
//       id: data[0].id,
//     });
//   } else if (type === "genre") {
//     // allData.push({name: id, image: genreImg});
//   } else if (type === "user") {
//     let data = await DataDiviner(label(id));
//     allData.push({name: data[0].name, image: data[0].images[0].uri});
//   }
  
//   dispatch({
//     type: "ASSET_SELECTOR_SUCCESS",
//     payload: {
//       all: allData,
//       loading: false,
//     },
//   });
// };
