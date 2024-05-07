import React, { useState,useContext } from 'react';
import { supabase } from '../SupabaseClient';
import loginStyles from '../styles/login.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../services/AuthContext';



function Login() {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) {
        console.error('Error occurred while logging in:', error.message);
        alert('Invalid email or password. Please try again.');
      } else {
        console.log('User logged in:', user);
        setIsLoggedIn(true);   //------------------->>
        navigate('/home')
      }
    } catch (error) {
      console.error('Error occurred:', error.message);
      alert('Failed to login. Please try again later.');
    }
  };

  return (
    <div className={loginStyles.loginContainer}>
      <div className={loginStyles.heading}>Login</div>
      <div className={loginStyles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={loginStyles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={loginStyles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className={loginStyles.error}>{error}</div>}
          <button className={loginStyles.loginBtn} type="submit">
            Login
          </button>
        </form>
        <div className={loginStyles.registerLink}>
          Don't have an account? <NavLink to='/register' className={loginStyles.logLink}>Register</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
