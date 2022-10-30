import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();

  const handleDelete = (_id) => {
    console.log(`deleting user with _id`, _id);
  };
  return (
    <div>
      <h2>Users : {users.length} </h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} {user.email}{" "}
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
