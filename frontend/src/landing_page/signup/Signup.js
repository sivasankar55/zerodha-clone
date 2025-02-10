import React from "react";
import {ToastContainer,toast} from "react-toastify";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react"

function Signup(){
   const navigate = useNavigate();
   const [inputValue,setInputValue] = useState({
    email:"",
    password:"",
    username:"",
   });
   const {email,password,username} = inputValue;
   const handleOnChange = (e) => {
    const {name,value} = e.target;
    setInputValue({
        ...inputValue,
    [name]:value,
});
   };
   const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const {data} = await axios.post(
            "http://localhost:8080/signup",
            {
                ...inputValue,
            },
            {withCredentials:true}
        );
        const {success,message} = data;
        if(success){
            setTimeout(()=>{
                window.location.href = "http://localhost:3001/"
            },1000);
        }else{
            alert(message)
        }
    } catch (error){
        console.log(error);
    }
    setInputValue({
        ...inputValue,
        email:"",
        password:"",
        username:"",
    });
   };
   return (
    <div className="sig p-5" style={{height:"800px"}}>
        <div style={{marginLeft:"550px"}} className="form_container mt-5"></div>
        <h2>Signup Account</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                type="email"
                name = "email"
                value = {email}
                placeholder = "Enter your email"
                onChange = {handleOnChange}
                required
                />
            </div>
            <div>
                <label htmlFor="email">Username</label>
                <input
                type="text"
                name = "username"
                value={username}
                placeholder="Enter your username"
                onChange = {handleOnChange}
                required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
                />
            </div>
            <button type="submit">Submit</button>
            <span>
                Already have an account? <Link to={"/login"}>Login</Link>
            </span>
        </form>
    </div>
   )
}

export default Signup;