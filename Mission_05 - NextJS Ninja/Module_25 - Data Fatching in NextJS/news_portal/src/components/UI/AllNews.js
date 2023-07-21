import Link from "next/link";
import React from "react";

const AllNews = ({ allNews }) => {
  return (
    <div>
      {allNews.map((news) => (
        <>
          <h1 className="">{news?.title}</h1>
          <p className="">{news?.description}</p>
          <Link href={`/news/${news?.id}`}>
            <button className="">See Details</button>
          </Link>
        </>
      ))}
    </div>
  );
};

export default AllNews;
