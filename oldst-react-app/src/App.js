import React, { useState } from "react";
import EmoteList from "./EmoteList";
import relativeTime from "./relativeTime";

function App() {
  const [sort, setSort] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  function handleSort(e) {
    setSort(e.target.value);
    setPageNumber(1);
  }

  const { emotes, hasMore, loading } = EmoteList();

  return (
    <div className="App">
      <header>
        <h1>Products Grid</h1>
        <div className="productGrid">
          {emotes.map((emote) => {
            return (
              <div className="card" key={emote.id}>
                <div className="container">
                  <h5 className="emote" style={{ fontSize: emote.size }}>
                    {emote.face}
                  </h5>
                  <p className="emote__price">
                    ${(emote.price / 100).toFixed(2)}
                  </p>
                  <p className="emote__time">{relativeTime(emote.date)}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p>But first, a word from our sponsors:</p>
        <img
          className="ad"
          src={`http://localhost:8000/ads/?r=${Math.floor(
            Math.random() * 1000
          )}`}
          alt="ad"
        />
      </header>
      products goes here..
    </div>
  );
}

export default App;
