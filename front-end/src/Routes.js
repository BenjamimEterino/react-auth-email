import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { VerifyEmail } from './pages/VerifyEmail';
import { EmailLandingPage } from './pages/EmailLandingPage';
import { ForgotPassword } from './pages/ForgotPassword';
import { PasswordResetLandingPage } from './pages/PasswordResetLandingPage';
import { EmailVerificationCode } from './pages/EmailVerificationCode';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/login">
                    <LogInPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
                {/* <Route path="/verify-email">
                    <VerifyEmail />
                </Route> */}
                <Route path="/verify-email">
                    <EmailVerificationCode />
                </Route>
                <Route path="/verify/:verificationString">
                    <EmailLandingPage />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPassword />
                </Route>
                <Route path="/reset-password">
                    <PasswordResetLandingPage />
                </Route>
            </Switch>
        </Router>
    );
}