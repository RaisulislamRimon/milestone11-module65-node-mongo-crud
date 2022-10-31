import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const storedUser = useLoaderData();

  const [user, setUser] = useState(storedUser);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    // console.log(user);
    fetch(`http://localhost:5000/users/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleInputChange = (e) => {
    // console.log(e.target);
    const value = e.target.value;
    const field = e.target.name;
    // console.log(value, field);
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    // console.log(newUser);
  };

  return (
    <div>
      <h2>Update</h2>
      <h3>name : {storedUser.name}</h3>
      <h4>email: {storedUser.email}</h4>
      <form onSubmit={handleUpdateUser}>
        <input
          onChange={handleInputChange}
          defaultValue={storedUser.name}
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <br />
        <input
          onChange={handleInputChange}
          defaultValue={storedUser.address}
          type="text"
          name="address"
          id="address"
          placeholder="address"
        />
        <br />
        <input
          onChange={handleInputChange}
          defaultValue={storedUser.email}
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <br />
        <input type="submit" value="Update user" />
      </form>
    </div>
  );
};

export default Update;
