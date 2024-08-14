import React from 'react';
import './welcome.css';
import '../../assets'

function Welcome() {
  return (
    <div className="welcome">
      <header className="App-header">
        <div className="header-left">
          <img src="logo.png" alt="Freelancer Logo" />
          <nav>
            <ul>
              <li>Hire freelancers</li>
              <li>Find work</li>
              <li>Solutions</li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <ul>
            <li>Log In</li>
            <li>Sign Up</li>
            <li><button>Post a Project</button></li>
          </ul>
        </div>
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