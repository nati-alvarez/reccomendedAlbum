import axios from "axios";

//Data diviner is the first step in the journey piping in data from the 
//Discogs API. 
// When called with a url passed into it, axios is used to get data and an array is 
// returned that houses that data. 

export const DataDiviner = async (url) => {
  const allData = [];
  let dataContainer = await axios.get(url);
  allData.push(dataContainer.data);
  return allData;
};

