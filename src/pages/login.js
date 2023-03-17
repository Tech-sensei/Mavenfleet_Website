import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://mavenfleet.herokuapp.com/api/v1/admin/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            history('/home');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
