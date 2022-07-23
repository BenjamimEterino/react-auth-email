import {useState}  from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';

export const SignUpPage = () => {
    const [token, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmconfirmPasswordValue, setconfirmPasswordValue] = useState('');

    const history = useHistory();

    const onSignUp = async() => {
        const response= await axios.post('/api/signup', {
            email: emailValue,
            password: passwordValue,
        });
        const {token} = response.data;
        setToken(token);
        history.push(`/verify-email?email=${encodeURIComponent(emailValue)}`);
    }
    return (
        <div className="content-conatiner">
            <h1>SIgn Up</h1>
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

            <input 
            type="password"
            value={confirmconfirmPasswordValue}
            onChange={e => setconfirmPasswordValue(e.target.value)}
            placeholder="password" />

            <button 
            disabled={!emailValue || !passwordValue ||
            passwordValue !== confirmconfirmPasswordValue}
            onClick={onSignUp}>SignUp</button>

            <button
            onClick={() => history.push('/login')}
            >Login</button>
        </div>
    );
}