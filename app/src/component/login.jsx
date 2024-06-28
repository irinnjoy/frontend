import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
function Login ()
    {
        const navigate = useNavigate();
        const[email,setEmail]=useState('');
        const[pass1,setPass1]=useState('');
        function handleChangeemail(e){
            setEmail(e.target.value)

        }
        function handleChangepass1(e){
            setPass1(e.target.value)
        }
        async function handlelogin(){
            const response = await axios.post("http://localhost:5000/Login", {
                email,
                pass1,

            })
            console.log(response)
        }
    return(
        <div class="*" style={{backgroundImage:'url(img3.jpg)',backgroundSize:"cover",height:"100vh",backgroundRepeat:"no-repeat"}}>
        <div class="content" style={{"display": "list-item",
                "justifyContent": "center",
                "paddingLeft": "40%",
                "width": "max-content",
                "position": "relative",
                "align": "center",
                "paddingTop": "30px"}}>
        <h1>LOGIN </h1>
        <div class="a" style={{"padding": "auto",
                "display": "flex",
                "paddingTop": "30px",
                "justifyContent": "space-between"}}>
            <label for="">Email</label>
            <input type="Email" placeholder="Enter the email" onChange={handleChangeemail} />
        </div>
        <div class="b" style={{"padding": "auto",
                "display": "flex",
                "paddingTop": "10px",
                "justifyContent": "space-between"}}>
            <label for="">Password</label>
            <input type="password" placeholder="Enter the password" onChange={handleChangepass1} />
        </div>
        <div class="c" style={{ "paddingLeft": "230px",
                "paddingTop": "10px"}}><button onClick={handlelogin}>login</button></div>
        <div class="d">
            <p>If you have not registered</p>
            <a href="/SignUp" style={{"color":"black"}}>signup</a>
        </div>
        <div class="e" style={{}}>
        <p>forgot your password?</p>
        <a href="/Forgot"style={{color:"purple"}}>Forgot password</a>
        </div>
    </div>
    </div>
    )
        }

export default Login;

    
