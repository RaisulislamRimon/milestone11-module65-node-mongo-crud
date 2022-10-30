import React from "react";

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Please add a new user </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder="name" />
        <br />
        <input type="email" name="email" id="email" placeholder="email" />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default AddUser;
