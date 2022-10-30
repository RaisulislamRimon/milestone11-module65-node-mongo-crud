import React, { useState } from "react";

const AddUser = () => {
  // const [user, setUser] = useState({ name: "R", email: "r@gmail.com" });
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    fetch(`http://127.0.0.1:3000/users`, {
      method: "POST",
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
          type="text"
          name="address"
          id="address"
          placeholder="address"
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
