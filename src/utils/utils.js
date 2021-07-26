import axios from "axios";



// const labelCodes = [90336, 157803, 165219, 389319, 153824, 88949];

export const DataDiviner = async (url) => {
  const allData = [];
  let dataContainer = await axios.get(url);
  allData.push(dataContainer.data);
  return allData;
};

// export const DataDivinerLabel = (url) => {
//     const allData = [];
//     const loadData = async () => {
//       for (let i = 0; i < code.length; i++) {
//         let dataContainer = await axios.get(url(code[i]));
//         allData.push(dataContainer);
//       }
//       return allData
//     };
//     loadData();
// }

export const DataDivinerReleases = async (url) => {
    const allData = [];
    let dataContainer = await axios.get(url);
    allData.push(dataContainer.data);
    return allData;
};
