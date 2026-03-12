import { useState } from "react";
import axios from "axios";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        { name, email, password }
      );

      console.log(res.data);
      alert("User Registered Successfully");

    } catch (error) {

      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("Server error. Please check backend.");
      }

    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Register User</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default Register;