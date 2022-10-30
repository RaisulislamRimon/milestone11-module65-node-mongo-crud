import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();
  return (
    <div>
      <h2>Update</h2>
      <h3>
        name : {user.name}
        email: {user.email}
      </h3>
    </div>
  );
};

export default Update;
