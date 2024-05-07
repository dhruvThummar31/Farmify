
import React, { useState } from 'react';
import { supabase } from '../SupabaseClient';
import loginStyles from '../styles/login.module.css'
import { NavLink } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            fullname: formData.fullname
          }
        }
      });
      if (error) {
        console.error('Error occurred while registering:', error.message);
        alert('Error occurred while signing up. Please try again.',error.message);
      } else {
        alert('Check email for verification link');
        setFormData({fullname: '',
        email: '',
        password: '',});
      }
    } catch (error) {
      console.error('Error occurred:', error.message);
      alert('Failed to register. Please try again later.');
    }
  };
  
  return (
    <div className={loginStyles.loginContainer}>
       <div className={loginStyles.heading}>Registration</div>
        <h6 className={loginStyles.log}>You already have an Account ? <NavLink to="/login"  className={loginStyles.logLink}>LogIn</NavLink></h6>
      <div className={loginStyles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={loginStyles.formGroup}>
            <label>FullName:</label>
            <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            />
        </div>
        <div className={loginStyles.formGroup}>
            <label>Email:</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        <div className={loginStyles.formGroup}>
            <label>Password:</label>
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
        </div>
        <button className={loginStyles.loginBtn} type="submit">Register</button>
      </form>
      </div>
    </div>
  );
}

export default Register;

