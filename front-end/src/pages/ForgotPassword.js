import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const ForgotPassword = () => {

        const [emailValue, setEmailValue] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
        const  [success, setSuccess] = useState(false);
        const history = useHistory();

        const onSubmitClick =  async () => {
            try {
                await axios.put(`/api/forgot-password/${emailValue}`);
                setSuccess(true);
                setTimeout(() => {
                    history.push('/login')
                }, 4000);
            } catch (e) {
                setErrorMessage(e.message);
            }
        }

        return success ? (
            <div className="content-container">
                <h1>success</h1>
                <p>Check your email</p>
            </div>
        ) : (
            <div className="content-container">
                <h1>Forgot Password</h1>
                <p>Enter your email</p>
                {errorMessage &&<div className="fail"> {errorMessage} </div>}
                <input
                type="text"
                value={emailValue}
                onChange= {e => setEmailValue(e.target.value)}
                placeholder="email@gmail.com"
                />
                <button
                disabled={!emailValue}
                onClick={onSubmitClick}
                >Send Link</button>
            </div>
        )
}