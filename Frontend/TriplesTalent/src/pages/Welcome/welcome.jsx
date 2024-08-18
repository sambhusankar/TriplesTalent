import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';
import logo from '../../assets/logo-white.png';
import Register from '../../components/auth/register/register';

function Welcome() {

  const data = fetch("http://localhost:8000/api/").then((res) => res.json()).then((data) => console.log(data)).catch((err) => err)
  
  function handleSignUP(){
    console.log("hi")
  }
  return (
    <div className="welcome">
      <header className="App-header">
        <ul className="header-left">
          <li><img src={logo} alt="Freelancer Logo" /></li>
          <li>Hire freelancers</li>
          <li>Find work</li>
        </ul>
        <ul className="header-right">
            <li><Link to = "/login" >Log In</Link></li>
            <li><Link to = "/signup" >Sign Up</Link></li>
            <li><button>Post a Project</button></li>
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
          <button>Hire a Freelancer</button>
          <button>Earn Money Freelancing</button>
        </div>
      </main>
      <footer>
        <p>This mobile app design cost $1500 USD and took 20 days</p>
      </footer>
    </div>
  );
}

export default Welcome;