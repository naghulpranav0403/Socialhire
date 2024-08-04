import React, { useState } from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
import Socialhire from './Socialhire1.png';
import Navigation from './Navigation';
const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailValidationError = validateEmail(email);
        const passwordValidationError = validatePassword(password);
        const passwordsMatch = password === confirmPassword;

        if (!passwordsMatch) {
            alert('Passwords do not match.');
            return;
        }

     
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
        <>
      <div className="nav-22">
    <Navigation/>
      </div>
        <div className="signup1">
            <form onSubmit={handleSubmit} className="signup2">
            <img src={Socialhire}  className="signuplogo" />
                <h2>Sign Up</h2>
                <div className="group1">
                    <label><h4>Username :</h4></label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="group1">
                    <label><h4>Email :</h4></label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        />
                </div>
                <div className="group1">
                    <label><h4>Password :</h4></label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="group1">
                    <label><h4>Confirm Password :</h4></label>
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                        />
                </div>
                {isValid ? (
                    <Link to="/Home">
                        <button className="group2" type="submit">Signup</button>
                    </Link>
                ) : (
                    <button className="group2" type="submit">Signup</button>
                )}
            </form>
        </div>
                </>
    );
};

export default Signup;