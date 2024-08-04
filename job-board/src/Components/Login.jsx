import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Socialhire from './Socialhire1.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) ? '' : 'Please enter a valid email address.';
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasNumber = /\d/;
        const hasUpperCase = /[A-Z]/;
        const hasLowerCase = /[a-z]/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (password.length < minLength) {
            return 'Password must be at least ${minLength} characters long.';
        }
        if (!hasNumber.test(password)) {
            return 'Password must contain at least one number.';
        }
        if (!hasUpperCase.test(password)) {
            return 'Password must contain at least one uppercase letter.';
        }
        if (!hasLowerCase.test(password)) {
            return 'Password must contain at least one lowercase letter.';
        }
        if (!hasSpecialChar.test(password)) {
            return 'Password must contain at least one special character.';
        }
        return '';
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailValidationError = validateEmail(email);
        const passwordValidationError = validatePassword(password);

        if (emailValidationError) {
            alert(emailValidationError);
        }
        if (passwordValidationError) {
            alert(passwordValidationError);
        }
        if (!emailValidationError && !passwordValidationError) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className="login1">
            <form onSubmit={handleSubmit} className="login2">
                <img src={Socialhire} alt="Logo" className="loginlogo" />
                <h2>Login</h2>
                <div className="login3">
                    <label>Email :</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        required 
                    />
                </div>
                <div className="login3">
                    <label>Password :</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        required 
                    />
                </div>
                <div className="forgotpassword1">
                    <Link to="/Forget">Forgot Password?</Link>
                </div>
                {isValid ? (
                    <Link to="/Home">
                        <button className="gro2" type="submit">Login</button>
                    </Link>
                ) : (
                    <button className="gro2" type="submit">Login</button>
                )}
                <div className="login4">
                    <p>Don't have an account? <Link to="/Signup">SignUp here</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;