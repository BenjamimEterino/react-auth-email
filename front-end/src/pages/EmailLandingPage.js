import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { VerificationFail } from "./VerificationFail";
import { VerificationSuccess } from "./VerificationSuccess";

export const EmailLandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    const {verificationString} = useParams();
    const [, setToken] = useToken();

    useEffect(() => {
        const loadVerification = async () => {
            try {
                const response = await axios.put('http://localhost:8080/api/verify-email', {verificationString});
                const {token} = response.data;
                setToken(token);
                setIsSuccess(true);
                setIsLoading(false);

            } catch(e) {
                setIsSuccess(false);
                setIsLoading(false);
            }
        }
        loadVerification();
    }, [setToken, verificationString]);

    if(isLoading) return <p>Loading...</p>

    if(!isSuccess) return <VerificationFail/>
    return <VerificationSuccess />
}