import { testRoute } from './testRoute.js';
import { signUpRoute } from './signUpRoute.js';
import { loginRoute } from './loginRoute.js';
import { updateInfoRoute } from './updateInfoRoute.js';
import { verfiryEmailRoute } from './VerifyEmailRoute.js';
import { ForgotPasswordRoute } from './ForgotPasswordRoute.js';
import { resetPasswordRoute } from './resetPasswordRoute.js';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute.js';
import { googleOauthCallbackRoute } from './googleOauthCallbackRoute.js';

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
