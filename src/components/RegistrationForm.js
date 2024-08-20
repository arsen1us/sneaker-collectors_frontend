import React, {useState} from "react";
import axios, {preventDefault} from "axios";
import '../Popup.css';
function RegistrationForm({handleClose}) {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post("https://localhost:7190/api/user/reg", 
            {Login: login, Email: email, Password: password});
        if(response.status == 200)
            handleClose();
            alert(response.data)
        
    }
    catch(error) {
        alert(error.data)
    }
}
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
                        required/>
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                </div>
                <button type='submit' onClick={register}>Register</button>
            </form>
            <div>
                <img class='reg-image' src="/images/pureSport.jpg"/>
            </div>
        </div>
    );
};

export default RegistrationForm;