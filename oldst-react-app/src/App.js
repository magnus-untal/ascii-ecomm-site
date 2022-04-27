import React, { useState, useRef, useCallback } from "react";
import EmoteList from "./EmoteList";
import relativeTime from "./relativeTime";

function App() {
  const [sort, setSort] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { emotes, hasMore, loading } = EmoteList(pageNumber);
  const observer = useRef();
  const lastEmoteElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [loading, hasMore]
  );

  function handleSort(e) {
    setSort(e.target.value);
    setPageNumber(1);
  }

  return (
    <div className="App">
      <header>
        <h1>¯\_(ASCII Products Grid)_/¯</h1>
        <div className="productGrid">
          {emotes.map((emote, index) => {
            console.log(index);
            if (index % 20 === 0 && index != 0) {
              if (emotes.length === index + 1) {
                return (
                  <>
                    <div className="ad">
                      <p>But first, a word from our sponsors:</p>
                      <img
                        className="ad"
                        src={`http://localhost:8000/ads/?r=${Math.floor(
                          Math.random() * 1000
                        )}`}
                        alt="ad"
                      />
                    </div>

                    <div
                      ref={lastEmoteElementRef}
                      className="card"
                      key={emote.id}
                    >
                      <div className="container">
                        <h5 className="emote" style={{ fontSize: emote.size }}>
                          {emote.face}
                        </h5>
                        <p className="emote__price">
                          ${(emote.price / 100).toFixed(2)}
                        </p>
                        <p className="emote__time">
                          {relativeTime(emote.date)}
                        </p>
                      </div>
                    </div>
                  </>
                );
              }
              return (
                <>
                  <div className="ad">
                    <p>But first, a word from our sponsors:</p>
                    <img
                      className="ad"
                      src={`http://localhost:8000/ads/?r=${Math.floor(
                        Math.random() * 1000
                      )}`}
                      alt="ad"
                    />
                  </div>
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
                </>
              );
            }
            if (emotes.length === index + 1) {
              return (
                <div ref={lastEmoteElementRef} className="card" key={emote.id}>
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
            }
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
      </header>
      products goes here..
    </div>
  );
}

export default App;
