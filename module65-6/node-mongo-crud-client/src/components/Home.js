import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();

  // const handleDelete = (_id) => {
  const handleDelete = (user) => {
    // console.log(user);
    const agree = window.confirm(
      `Are you sure you want to delete  ? ${user.name}`
    );
    // console.log(agree);
    // console.log(`deleting user with _id`, _id);
    // console.log(`deleting user with _id`, user._id);
    // console.log(`deleting user with _id ${user._id}`);
    if (agree) {
      console.log(`deleting user with _id ${user._id}`);
    }
  };
  return (
    <div>
      <h2>Users : {users.length} </h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} {user.email}{" "}
            {/* <button onClick={() => handleDelete(user._id)}>X</button> */}
            <button onClick={() => handleDelete(user)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
