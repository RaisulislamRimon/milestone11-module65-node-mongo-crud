import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();

  const [displayUsers, setDisplayUsers] = useState(users);

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
      // console.log(`deleting user with _id ${user._id}`);
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            alert(`user deleted successfully`);
            const remaining = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      {/* <h2>Users : {users.length} </h2> */}
      <h2>Users : {displayUsers.length} </h2>
      <div>
        {/* {users.map((user) => ( */}
        {displayUsers.map((user) => (
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
