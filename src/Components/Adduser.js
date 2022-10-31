import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h2>Add any user email and password as much as you want</h2>

      <form onSubmit={handleAddUser}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="name"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          placeholder="email"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="address"
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
