import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export const VerifyEmail = () => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() =>{
            history.push('/')
        }, 3000)
    }, [history]);

    return (
        <div className="content-container">
            <h1>Thanks for Sign Up!</h1>
            <p>A verification email has been sent to the email adress</p>
        </div>
    )
}