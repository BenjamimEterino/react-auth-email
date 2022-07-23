import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { useQueryParams } from '../util/useQueryParams';

export const LogInPage = () => {
    const [, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [googleOauthUrl, setGoogleOauthUrl] = useState('');
    const { token: oauthToekn } = useQueryParams();

    const onLogin = async () => {
        try {
            const response = await axios.post('/api/login', {
                email: emailValue,
                password: passwordValue
            });

            const { token } = response.data;
            setToken(token);

            history.push('/')
        } catch (e) {
            setErrorMessage(e.message);
        }
        
    }
    const history = useHistory();

    useEffect(() => {
        if (oauthToekn) {
            setToken(oauthToekn);
            history.push('/')
        }
    }, [oauthToekn, setToken, history]);

    useEffect(() => {
        const loadOauthUrl = async () => {
            try {
                const response = await axios.get('/auth/google/url');
                const { url } = response.data;
                setGoogleOauthUrl(url);
            } catch (e) {
                console.log(e);
            }
        }
        loadOauthUrl();
    }, []);

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
            <button
                disabled={!googleOauthUrl}
                onClick={() => { window.location.href = googleOauthUrl }}
            >Log in with Google</button>

        </div>
    );
}