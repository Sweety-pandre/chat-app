import React from 'react'
//import "./Register.css";
import logo from "../imgs/logo.png"
function Register() {
    return (

        <div className="container">

            <div className="left">
                <div class="leftContainer">

                    <h2 class="title">
                        <span class="title-word title-word-1">Ch</span>
                        <span class="title-word title-word-2">at</span>
                        <span class="title-word title-word-3">vi</span>
                        <span class="title-word title-word-4">a</span>
                    </h2>
                    <h4>Connect with people u know.... </h4>
                </div>

            </div>

            <div className="formContainer">
                <div className="formWrapper">
                    <img src={logo} alt="log" />

                    <p>Login to your Chatvia account now.</p>

                    <form action="">
                        <input type="text" placeholder="Enter your Name " className="formEle" />
                        <input type="email" placeholder="Enter your email " className="formEle" />
                        <input type="password" placeholder="Password" className="formEle" />
                        <input type="file" id = "file" className="formEle" />
                        <label htmlFor="file"><img src="" alt="" /></label>

                        <button type="submit" className='submitBtn'>Sign up</button>
                    </form>
                    <p>Don't have an account? Signup </p>
                </div></div>
        </div>

    )
}

export default Register;