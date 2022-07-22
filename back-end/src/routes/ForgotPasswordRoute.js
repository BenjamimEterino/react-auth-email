import { v4 as uuid } from 'uuid';
import { SendEmail } from '../util/sendEmail';
import { getDbConnection } from '../db';

export const ForgotPasswordRoute = {
    path: '/api/forgot-password/:email',
    method: 'put',
    handler: async (req, res) => {
        const { email } = req.params;

        const db = getDbConnection('authenticate');
        const passwordResetCode = uuid();

        const { result } = await db.collection('users')
            .updateOne({ email }, { $set: { passwordResetCode } });

        if (result.nModified > 0) {
            try {
                await SendEmail({
                    to: email,
                    from: 'no-reply@easyjobmz.com',
                    subject: 'Password Reset',
                    text: `
                        To reset your password, click this link:
                        http://localhost:3000/reset-password/${passwordResetCode}
                    `
                });
            } catch (e) {
                console.log(e);
                res.sendStatus(500);
            }
        }
        res.sendStatus(200);
    }
}