import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Users : {users.length} </h2>
    </div>
  );
};

export default Home;
