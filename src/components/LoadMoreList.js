import React, { useState } from "react";

const LoadMoreList = ({ items }) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [visibleItemCount, setVisibleItemCount] = useState(0);

  const handleLoadMore = () => {
    setVisibleItemCount((prevCount) => prevCount + 10);
    const loadedItems = items.slice(0, visibleItemCount+10);
    setDisplayedItems(loadedItems);
  };

//   useState(() => {
   
//   }, [visibleItemCount]);

  return (
    <div>
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {visibleItemCount < items.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default LoadMoreList;
