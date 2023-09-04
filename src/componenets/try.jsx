import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
function yy() {
  const [a, sa] = useState(Array.from({ length: 20 }));
  const [aa, saa] = useState(true);
  function moree() {
    if (a.length < 200) {
      setTimeout(() => {
        sa(a.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      saa(false);
    }
  }
  return (
    <div>
      <InfiniteScroll
        dataLength={a.length}
        next={moree}
        hasMore={aa}
        loader={<p>Loading...</p>}
        endMessage={<p>you are all set</p>}
      >
        {a.map((item, index) => {
          return <div>This is a div #{index + 1}</div>;
        })}
      </InfiniteScroll>
    </div>
  );
}

export default yy;
