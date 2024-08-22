import React, {useEffect, useState} from "react";
import axios, {preventDefault} from "axios";
import '../Popup.css';

function RegistrationForm({handleClose}) {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const[isLoginAvailable, setLoginAlailability] = useState(null);
    const[isEmailAvailable, setEmailAvailability] = useState(null);
    const[isEmailCurrectly, setEmailCurrectly] = useState(true);

    const Register = async (e) => {
        e.preventDefault();
        
        await axios.post("https://localhost:7190/api/user/reg", {
            Login: login,
            Email: email,
            Password: password
        })
        .then(response => {
            const authHeader = response.headers['authorization'];
            const token = authHeader.split(' ')[1];
            localStorage.setItem('jwt-token', token);

            alert(localStorage.getItem('jwt-token'));

            // Очистить поля ввода
            setLogin('');
            setEmail('');
            setPassword('');
            handleClose();
        });
    };
    // Проверка логина на доступность

    useEffect(() => {
        if(login.length > 0)
        {
            const checkLoginAvailability = async () => {
                const response = await axios.post("https://localhost:7190/api/user/check-login",
                     {Login: login});
                setLoginAlailability(response.data);
                
            };
            const timeoutId = setTimeout(checkLoginAvailability, 300);
            return () => clearTimeout(timeoutId);
        };
    }, [login]);
    // Проверка логина на доступность

    useEffect(() => {
        if(email.length > 0)
        {
            const checkEmailAvailability = async () => {
                const response = await axios.post("https://localhost:7190/api/user/check-email",
                     {Email: email});
                setEmailAvailability(response.data);
            };
        
            const timeoutId = setTimeout(checkEmailAvailability, 300);
            return () => clearTimeout(timeoutId);
        };
    }, [email]);
    // Проверка на правильность ввода логина (regex)

    useEffect(() => {
        if(email.length > 0)
        {
            const checkEmailCurreclty = async () => {
                const response = await axios.post("https://localhost:7190/api/user/check-regex-email",
                     {Email: email});
                setEmailCurrectly(response.data);
            };
        
            const timeoutId = setTimeout(checkEmailCurreclty, 300);
            return () => clearTimeout(timeoutId);
        };
    }, [email]);

    
    return (
        <div>
            <div>
                <h3>Become part of the community!</h3>
            </div>
            <form method='post'>
                <div>
                    <label>Login</label>
                    <input 
                        type='text'
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="Login"
                        required/>
                    {isLoginAvailable !== null && (<p>{isLoginAvailable ? 'Login is available' : 'Login isnt available'}</p>)}
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required/>
                        {isEmailAvailable !== null && (<p>{isEmailAvailable ? 'Email is available' : 'Email isnt available'}</p>)}
                        {isEmailCurrectly !== null && (<p>{isEmailCurrectly ? null : 'Please enter email correctly'}</p>)}
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required/>
                        
                </div>
                <button type='submit' onClick={Register}>Register</button>
            </form>
            <div>
                <img class='reg-image' src="/images/pureSport.jpg"/>
            </div>
        </div>
    );
};

export default RegistrationForm;