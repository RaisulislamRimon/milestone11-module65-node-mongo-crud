import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({ name: "R", email: "r@gmail.com" });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    // console.log(e.target);
    const value = e.target.value;
    const field = e.target.name;
    // console.log(value, field);
    const newUser = { ...user };
    console.log(newUser);
  };

  return (
    <div>
      <h2>Please add a new user </h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <br />
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default AddUser;
