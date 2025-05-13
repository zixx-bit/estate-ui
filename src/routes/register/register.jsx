import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register(){

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate()


  const handleSubmit = async(e) =>{
    e.preventDefault();
    setisLoading(true);
    setError("");
    const formData =  new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const data = {username, email, password};

    console.log(data);
    try {
      const res = await apiRequest.post("/auth/register", {
        username, email, password
      })
      setSuccess(res.data.message)
      setTimeout(()=>{
        navigate("/login");
      }, 3000)
    } catch (error) {
      console.log(error.response.data.message)
      setError(error.response.data.message)
    } finally{
      setisLoading(false)
    }

74
    

  }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create  Account</h1>
          {success && <span className="animated-message" 
          style={{ color: "green", backgroundColor: "#e6ffe6" }}>{success}</span>}

          <input name="username" type="text" placeholder="Username" required/>
          <input name="email" type="text" placeholder="Email" required/>
          <input name="password" type="password" placeholder="Password" required/>
          <button disabled={isLoading}>Register</button>
          {error && <span className="animated-message" 
          style={{ color: "red", backgroundColor: "#ffe6e6" }}>{error}</span>}

          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
