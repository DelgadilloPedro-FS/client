import React, { useState } from "react";
import { saveUser } from "../services/userService";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveUser(firstName, lastName, email);
      // After successful submission, clear form and handle the response
      setFirstName("");
      setLastName("");
      setEmail("");
      // Add success message or redirect to another page
      console.log("User saved successfully!");
    } catch (error) {
      // Handle any errors from the `saveUser` function
      console.error("Error saving user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
      />
      <br />
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        required
      />
      <br />
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <br />
      <button type="submit">Save User</button>
    </form>
  );
};

export default UserForm;
