import { useEffect, useState } from 'react';
import { DataDiviner } from '../../utils/utils'
import { releaseDetails } from '../../API/APIcall'



function ReleaseInfo(props) {
    const [data, setData] = useState();
  
    useEffect(() => {
      (async () => {
        const arr = await DataDiviner(releaseDetails(1081859));
        setData(arr);
      })();
    }, []);
// console.log("REALEASE INFO", data)
    return (
        <div>
            
        </div>
    );
}

export default ReleaseInfo;