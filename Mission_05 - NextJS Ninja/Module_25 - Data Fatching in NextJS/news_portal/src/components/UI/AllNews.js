import React from "react";

const AllNews = ({ allNews }) => {
  return (
    <div>
      {allNews.map((news) => (
        <>
          <h1 className="">{news?.title}</h1>
          <p className="">{news?.description}</p>
        </>
      ))}
    </div>
  );
};

export default AllNews;
