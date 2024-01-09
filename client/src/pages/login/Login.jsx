import { useRef, useState } from "react"
import "./Login.scss"

const Login = () => {

    return (
        <div className='login'>

            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                </div>
            </div>

            <div className="container">
                 <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email Address" /> 
                    <input type="password" placeholder="Password" /> 
                    <button className="signIn">Enter</button>
                    <span className="reg">New to Netflix? <b>Sign Up</b></span>  
                </form>               
            </div>
        </div>
    )
}

export default Login