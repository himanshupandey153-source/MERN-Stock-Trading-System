import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login(){
const navigate = useNavigate();
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/users/login",
      { email, password }
    );

    console.log("Login Response:", res.data); // DEBUG

    // ✅ store BOTH
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("userId", res.data._id);

    alert("Login Successful");

    // redirect
    window.location.href = "/";

  } catch (error) {
    console.error(error);
    alert("Login failed");
  }
};
return(

<div>

<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">Login</button>

</form>

</div>

);

}

export default Login;