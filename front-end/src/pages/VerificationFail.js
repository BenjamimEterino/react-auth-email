import { useHistory } from "react-router-dom"

export const VerificationFail = () => {
    const history = useHistory();

    return(
        <div className="content-container">
            <h1>Failed to verify</h1>
            <p>
               Something went wrong
            </p>
            <button onClick={() => history.push('/signup')}>Back to sign up</button>
        </div>
    )
}