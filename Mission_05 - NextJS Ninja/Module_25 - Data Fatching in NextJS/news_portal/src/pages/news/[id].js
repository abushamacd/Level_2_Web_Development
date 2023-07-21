import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const NewsDetails = ({ news }) => {
  return (
    <div>
      <h1 className="">{news?.title}</h1>
      <p className="">{news?.description}</p>
    </div>
  );
};

export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();
  const paths = data.map((news) => ({
    params: { id: news.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.id}`);
  const data = await res.json();
  return {
    props: {
      news: data,
    },
    revalidate: 5,
  };
};
