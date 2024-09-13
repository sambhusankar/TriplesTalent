import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo-dark.png';
import './register.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Register() {
    const users = useSelector((state) => state.login_user.value).slice(3);
    const navigate = useNavigate();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for error message

    // Function to validate the password strength
    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
        if (!hasUpperCase) {
            return 'Password must include at least one uppercase letter.';
        }
        if (!hasNumber) {
            return 'Password must include at least one number.';
        }
        if (!hasSpecialChar) {
            return 'Password must include at least one special character.';
        }
        return '';
    };

    async function postData() {
        // Validate the password before making the POST request
        const passwordError = validatePassword(password);
        if (passwordError) {
            setError(passwordError);
            return;
        }

        const userData = {
            first_name: fname,
            last_name: lname,
            email: email,
            password: password,
        };

        try {
            const response = await axios({
                method: 'POST',
                url: `http://localhost:8000/api/${users}/`,
                data: userData,
            });
            navigate('/');
        } catch (error) {
            if (error.response) {
                console.error('Error data:', error.response.data);
            } else {
                console.error('Error message:', error.message);
            }
        }
    }

    return (
        <div className="register">
            <div className="reg-left">
                <img src={logo} alt="logo" />
                <h1>Sign Up as a {users}</h1>
                <hr style={{ color: 'black' }} />
                <input
                    type="text"
                    placeholder="First Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="error">{error}</p>} {/* Display error if any */}
                <p>
                    <input type="checkbox" />
                    I agree to the TriplesTalent User Agreement and Privacy Policy.
                </p>
                <button onClick={postData}>Join TriplesTalent</button>
                <hr style={{ color: 'black' }} />
                <p>
                    Already have an account? <Link to="/login">login</Link>
                </p>
            </div>
            <div className="reg-right">
                <img
                    src="https://www.f-cdn.com/assets/main/en/assets/job-post/redesign/bird.jpg"
                    alt="Illustration"
                />
            </div>
        </div>
    );
}

export default Register;
