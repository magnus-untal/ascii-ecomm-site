import { useEffect, useState} from "react";
import axios from "axios";

export default function EmoteList(pageNumber) {
  const [emotes, setEmote] = useState([]);
  const [loading, setLoading] = useState(true);

  const [hasMore, setHasMore] = useState(false);


  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/products?_page=${pageNumber}limit=15`)
      .then((res) => {
        setLoading(false);
        console.log("Response from API: ", res);
        setEmote(prevEmotes =>{
          return [... new Set([...prevEmotes, ...res.data])]
        });
        setHasMore(res.data.length > 0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNumber]);
  return { emotes, hasMore, loading };
}
