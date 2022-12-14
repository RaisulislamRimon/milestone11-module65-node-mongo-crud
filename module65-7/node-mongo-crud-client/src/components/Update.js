import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const storedUser = useLoaderData();

  const [user, setUser] = useState(storedUser);
  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log(user);
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
      <h3>
        name : {storedUser.name}
        email: {storedUser.email}
      </h3>
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
