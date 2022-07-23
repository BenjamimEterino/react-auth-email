import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQueryParams } from '../util/useQueryParams';

export const VerifyEmail = () => {
    const history = useHistory();
    const { email } = useQueryParams();

    useEffect(() => {
        setTimeout(() => {
            history.push(`/verify-email?email=${encodeURIComponent(email)}`)
        }, 3000)
    }, [history, email]);

    return (
        <div className="content-container">
            <h1>Thanks for Sign Up!</h1>
            <p>A verification email has been sent to the email adress</p>
        </div>
    )
}