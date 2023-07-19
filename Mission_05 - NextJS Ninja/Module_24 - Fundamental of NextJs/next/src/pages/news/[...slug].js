import { useRouter } from "next/router";
import React from "react";

export default function Filter() {
  const router = useRouter();
  console.log(router.query.slug);
  return <div>Filter: {router.query.slug} </div>;
}
