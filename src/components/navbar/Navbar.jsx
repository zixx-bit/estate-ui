import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
    const[open, setOpen]= useState(false);
    const user = true;

    const {currentUser} = useContext(AuthContext);
    // const navigate = useNavigate();

    // useEffect(()=>{
    //     if (!currentUser){
    //          navigate("/login"); 
    //         }

    // }, [currentUser])
    return (
        <nav>
            <div className="left">
            <a href="/" className="logo">
                <img src="/logo.png" alt=""/>
                <span>LamaEstate</span>
            </a>
            <a href="/">Home</a>
            <a href="/list">Properties</a>
            <a href="/profile">Profile</a>
            <a href="/">Contact</a>
            </div>

            <div className="right">
            {currentUser ? (
                <div className="user">
                  <img src={currentUser.avatar || "noavatar.jpg"}/>
                  <span>{currentUser.username}</span>
                  <Link to="/profile" className="profile">
                  <div className="notification">3</div>
                  <span>Profile</span></Link>
                  </div>
                  ) : (<div className="signMenu">
                    <a className="login" href="/login">Sign in</a>
                    <a href="/register" className="register">Sign up</a>
                  </div>
                  )}
           
            <div className="menuIcon">
                <img src="/menu.png" alt="" onClick={()=>setOpen((prev)=> !prev)}/>
            </div>

            <div className={open ? "menu active": "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in </a>
            <a href="/">Sign up</a>
            </div>
            </div>
        </nav>
    );
    
}
export default Navbar;