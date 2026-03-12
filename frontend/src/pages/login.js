import { useState } from "react";
import axios from "axios";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e) => {

e.preventDefault();

try{

const res = await axios.post(
"http://localhost:5000/api/users/login",
{email,password}
);

localStorage.setItem("token",res.data.token);

alert("Login Successful");

console.log(res.data);

}catch(error){

if(error.response && error.response.data){
alert(error.response.data.message);
}else{
alert("Server error");
}

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