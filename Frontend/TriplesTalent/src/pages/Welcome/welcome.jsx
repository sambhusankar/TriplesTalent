import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';
import logo from '../../assets/logo-white.png';
import  axios  from 'axios'

function Welcome() {
  
  async function data(){ 
    await axios.get("http://localhost:8000/api/clients").then((d) => console.log(d.data)).catch((err) => console.log(err))}
    data()
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
            <li><Link to = "/post-project" >Post a Project</Link></li>
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