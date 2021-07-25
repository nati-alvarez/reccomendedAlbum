import React, {useEffect, useState} from "react";
import axios from "axios";

const base_url = "https://api.discogs.com/";

const label = (labelId) =>
  `${base_url}labels/${labelId}?key=${process.env.REACT_APP_DISCOGS_API_KEY}&secret=${process.env.REACT_APP_DISCOGS_API_SECRET}`;

const labelCodes = [90336, 157803, 165219, 389319, 153824, 88949];

export const Label = (url, code) => {
  const [data, setdata] = useState();

  useEffect(() => {
    const allData = [];
    const loadData = async () => {
      for (let i = 0; i < labelCodes.length; i++) {
        let dataContainer = await axios.get(label(labelCodes[i]));
        allData.push(dataContainer);
      }
      setdata(allData);
    };
    loadData();
  }, []);
  return data ? data : <p>...LOADING</p>;
}
