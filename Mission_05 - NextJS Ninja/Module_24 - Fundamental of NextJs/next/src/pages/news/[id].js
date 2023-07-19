import { useRouter } from "next/router";
import React from "react";

export default function SinglePost() {
  const { query } = useRouter();
  return <div>SinglePost: {query.id} </div>;
}
