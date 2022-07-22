import {useState}  from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';

export const LogInPage = () => {
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const onLogin = async() => {
        const response = await axios.post('/api/login', {
            email: emailValue,
            password: passwordValue
        });

        const {token} = response.data;
        setToken(token);

        history.push('/')
    }
    const history = useHistory();
    return (
        <div className="content-conatiner">
            <h1>Log In</h1>
            {errorMessage && <div className='fail'>{errorMessage}</div>}
            <input type="text" 
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
            placeholder="email@gmail.com" />
            <input 
            type="password"
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
            placeholder="password" />
            <button 
            disabled={!emailValue || !passwordValue}
            onClick={onLogin}>Login</button>

            <button
            onClick={() => history.push('forgot-password')}
            >Forgot Pass</button>
            <button
            onClick={() => history.push('/signup')}
            >Sign Up</button>
        </div>
    );
}