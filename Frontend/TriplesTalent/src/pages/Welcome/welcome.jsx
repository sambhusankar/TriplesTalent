import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';
import logo from '../../assets/logo-white.png';
import { useSelector, useDispatch} from 'react-redux'
import {changeUser} from '../../Redux/userSlice'
function Welcome() {
  const welcomeRef = useRef(null);
  const dispatch = useDispatch()
  const [loginDropdownVisible, setLoginDropdownVisible] = useState(false);
  const [signupDropdownVisible, setSignupDropdownVisible] = useState(false);


  // handling the dropdown for login and signup with different users
 useEffect(() => {
    const signupBtn = welcomeRef.current.querySelector('.signup-btn');
    const signupOpt = welcomeRef.current.querySelector('.signup-options');
    const loginBtn = welcomeRef.current.querySelector('.login-btn');
    const loginopt = welcomeRef.current.querySelector('.login-options');

    const handleMouseOver = (e) => {
      if(e.target.innerText === "Sign Up"){
        setSignupDropdownVisible(true);
        setLoginDropdownVisible(false);
      }
      if(e.target.innerText === "Login"){
        setSignupDropdownVisible(false);
        setLoginDropdownVisible(true);
      }
      
    };

    const handleClick = (e) => {
      if(e.target.innerText === "Sign Up"){
        setSignupDropdownVisible(false);
      }
      if(e.target.innerText === "Login"){
        setLoginDropdownVisible(false);
      }
    };

    loginBtn.addEventListener('mouseover', handleMouseOver);
    loginBtn.addEventListener('click', handleClick);
    signupBtn.addEventListener('click', handleClick);
    signupBtn.addEventListener('mouseover', handleMouseOver);

    // Clean up event listeners
    return () => {
      loginBtn.removeEventListener('mouseover', handleMouseOver);
      loginBtn.removeEventListener('click', handleClick);
      signupBtn.addEventListener('click', handleClick);
      signupBtn.addEventListener('mouseover', handleMouseOver);
    };
  }, [signupDropdownVisible, loginDropdownVisible]);

// handling the dropdown for login and signup with different users
  useEffect(() => {
    const signupOpt = welcomeRef.current.querySelector('.signup-options');
    const loginopt = welcomeRef.current.querySelector('.login-options');
    loginopt.style.display = loginDropdownVisible && !signupDropdownVisible ? 'block' : 'none';
    signupOpt.style.display = signupDropdownVisible && !loginDropdownVisible ? 'block' : 'none';
  }, [signupDropdownVisible, loginDropdownVisible]);

  //sending the selected user to redux store for login
  useEffect(() => {
    const elements1 = welcomeRef.current.querySelectorAll(".login-opt")
    const elements2 = welcomeRef.current.querySelectorAll(".signup-opt")
    const elements = [...elements1, ...elements2]
    elements.forEach((element) => {
      element.addEventListener('click', (e) => {
        dispatch(changeUser(e.target.innerText))
      })
    })
  }, [])
    return (
    <div className="welcome" ref = {welcomeRef}>
      <header className="App-header">
        <ul className="header-left">
          <li><img src={logo} alt="Freelancer Logo" /></li>
          <li>Hire freelancers</li>
          <li>Find work</li>
        </ul>
        <ul className="header-right">
            <li><Link to = "" className = 'login-btn' >Login</Link></li>
            <li><Link to = "" className = 'signup-btn'>Sign Up</Link></li>
            <li><Link to = "/post-project" >Post a Project</Link></li>
        </ul>
        <ul className = "login-options">
            <li><Link to = "/login" className = "login-opt">as Manager</Link></li>
            <li><Link to = "/login" className = "login-opt" >as Client</Link></li>
            <li><Link to = "/login" className = "login-opt" >as Freelancer</Link></li>
            <li><Link to = "/login" className = "login-opt" >as TechTeam</Link></li>
        </ul>
        <ul className = "signup-options">
            <li><Link to = "/signup" className = "signup-opt" >as Client</Link></li>
            <li><Link to = "/signup" className = "signup-opt" >as Freelancer</Link></li>
            <li><Link to = "/signup" className = "signup-opt" >as TechTeam</Link></li>
        </ul>
      </header>
      <main>
        <h1>Connect with top talent for any project any where.</h1>
        <ul>
          <li>World's largest freelance marketplace</li>
          <li>Any job you can possibly think of</li>
          <li>Save up to 90% & get quotes for free</li>
          <li>Pay only when you're 100% happy</li>
        </ul>
        <div className="buttons">
          <Link to = '/post-project'>Hire a Freelancer</Link>
          <Link to = '/signup'>Earn Money Freelancing</Link>
        </div>
      </main>
      <footer>
        <p>This mobile app design cost $1500 USD and took 20 days</p>
      </footer>
    </div>
  );
}

export default Welcome;