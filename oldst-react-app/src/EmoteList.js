import { useEffect, useState } from "react";
import axios from "axios";

export default function EmoteList(sort, pageNumber) {
  const [emotes, setEmote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setEmote([]);
  }, [sort]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost:8000/products?_sort=${sort}&_page=${pageNumber}&_limit=15`
      )
      .then((res) => {
        console.log("Response from API: ", res);
        setEmote((prevEmotes) => {
          return [...new Set([...prevEmotes, ...res.data])];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sort, pageNumber]);
  return { emotes, hasMore, loading };
}
