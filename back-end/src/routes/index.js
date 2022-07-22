import { testRoute } from './testRoute';
import { signUpRoute } from './signUpRoute';
import { loginRoute } from './loginRoute';
import { updateInfoRoute } from './updateInfoRoute';
import { verfiryEmailRoute } from './VerifyEmailRoute';
import { ForgotPasswordRoute } from './ForgotPasswordRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute';
import { googleOauthCallbackRoute } from './googleOauthCallbackRoute';

export const routes = [
    signUpRoute,
    testRoute,
    loginRoute,
    updateInfoRoute,
    verfiryEmailRoute,
    ForgotPasswordRoute,
    resetPasswordRoute,
    getGoogleOauthUrlRoute,
    googleOauthCallbackRoute
];
