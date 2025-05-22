import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Button }from "@mantine/core"
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {  
  const [error, setError] = useState("");
  const [IsLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const {updateUser} = useContext(AuthContext)

  const handleSubmit = async(e) =>{
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);
     const username = formData.get("username");
     const password = formData.get("password");

    //  const data = {username, password}

     try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password
      }) 

      updateUser(res.data);
      navigate("/")
     } catch (error) {
        console.log(error)      
        setError(error.response.data.message)
     } finally{
      setIsLoading(false);
     }
  }

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" required type="password" placeholder="Password" />
          <button disabled={IsLoading} >Login</button>
           {error  && <span className="animated-message" style={{color:"red", backgroundColor: "#ffe6e6" }}>{error}</span>} 
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
