import {useState, useEffect} from 'react';
import axios, {preventDefault} from "axios";
import '../Popup.css';

function AuthenticationForm({handleClose}) {
    const [loginOrEmail, setLoginOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const Authenticate = async (e) => {
        e.preventDefault();
        
        await axios.post("https://localhost:7190/api/user/auth", {
            LoginOrEmail: loginOrEmail,
            Password: password
        })
        .then(response => {
            const authHeader = response.headers['authorization'];
            const token = authHeader.split(' ')[1];
            localStorage.setItem('jwt-token', token);
            alert(response.data)
            alert(localStorage.getItem('jwt-token'));

            // Очистить поля ввода
            setLoginOrEmail('');
            setPassword('');
            handleClose();
        });
    };
    
    return (
        <div>
            <div>
                <h3>Welcome back!</h3>
            </div>
            <form method='post'>
                <div>
                    <label>EmailOrLogin</label>
                    <input 
                        type='text'
                        value={loginOrEmail}
                        onChange={(e) => setLoginOrEmail(e.target.value)}
                        placeholder="EmailOrLogin"
                        required/>
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
                <button type='submit' onClick={Authenticate}>Sign on</button>
            </form>
            <div>
                <img class='reg-image' src="/images/pureSport.jpg"/>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default AuthenticationForm;