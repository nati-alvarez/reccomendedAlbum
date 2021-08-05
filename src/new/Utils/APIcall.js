// this file contains all the information required to handle the API calls. 

import axios from "axios";

//Data diviner is the first step in the journey piping in data from the 
//Discogs API. 
// When called with one of the URLs below url passed into it, axios is used to get data and an array is 
// returned that houses that data. 

export const DataDiviner = async (url) => {
  const allData = [];
  let dataContainer = await axios.get(url);
  allData.push(dataContainer.data);
  return allData;
};




//Base URL
const base_url = "https://api.discogs.com/";
//Call the label function on the button that the user will click when they select
//which label they would like to view => pass the label ID retrieved from Discogs
//and also the page number this function can also be called on the button the user
//clicks when they want to see more titles by passing in the same label id but a different page#

export const label = (labelId) =>
  `${base_url}labels/${labelId}?key=${process.env.REACT_APP_DISCOGS_API_KEY}&secret=${process.env.REACT_APP_DISCOGS_API_SECRET}`;

export const artist = (artistId) =>
  `${base_url}artists/${artistId}?key=${process.env.REACT_APP_DISCOGS_API_KEY}&secret=${process.env.REACT_APP_DISCOGS_API_SECRET}`;

export const labelReleases = (labelId, pageNumber) =>
  `${base_url}labels/${labelId}/releases?page=${pageNumber}&per_page=100&key=${process.env.REACT_APP_DISCOGS_API_KEY}&secret=${process.env.REACT_APP_DISCOGS_API_SECRET}`;

export const artistReleases = (artistId, pageNumber) =>
  `${base_url}artists/${artistId}/releases?page=${pageNumber}&per_page=100&key=${process.env.REACT_APP_DISCOGS_API_KEY}&secret=${process.env.REACT_APP_DISCOGS_API_SECRET}`;

//RELEASE DETAILS
export const releaseDetails = (releaseId) =>
  `${base_url}releases/${releaseId}?key=${process.env.REACT_APP_DISCOGS_API_KEY}&secret=${process.env.REACT_APP_DISCOGS_API_SECRET}`;

//FORMAT DETAILS

export const formatDetails = (masterId) =>
  `${base_url}masters/${masterId}?key=${process.env.REACT_APP_DISCOGS_API_KEY}&secret=${process.env.REACT_APP_DISCOGS_API_SECRET}`;
//SEARCHED TITLE

export const searchTitle = (input, type) => `${base_url}database/search?q=${input}&${type}?key=${process.env.REACT_APP_DISCOGS_API_KEY}&secret=${process.env.REACT_APP_DISCOGS_API_SECRET}`;
