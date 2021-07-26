// import React, {useEffect, useState} from "react";
// import axios from "axios";

// const base_url = "https://api.discogs.com/";

// const label = (labelId) =>
//   `${base_url}labels/${labelId}?key=${process.env.REACT_APP_DISCOGS_API_KEY}&secret=${process.env.REACT_APP_DISCOGS_API_SECRET}`;

// const labelCodes = [90336, 157803, 165219, 389319, 153824, 88949];

// function Label() {
//   const [labelData, setLabelData] = useState();

//   useEffect(() => {
//     const allData = [];
//     const loadReleases = async () => {
//       for (let i = 0; i < labelCodes.length; i++) {
//         let data = await axios.get(label(labelCodes[i]));
//         allData.push({
//           name: data.data.name,
//           image: data.data.images[0].uri,
//         });
//       }
//       setLabelData(allData);
//     };
//     loadReleases();
//   }, []);
  
//   return labelData ? (
//     <div>
//       {labelData.map((asset) => (
//         <>
//           <p> {asset.name}</p>
//           <img src={asset.image} alt={asset.name} />
//         </>
//       ))}
//     </div>
//   ) : (
//     <p>...LOADING</p>
//   );
// }

// export default Label;
