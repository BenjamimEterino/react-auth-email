import { SendEmail } from "../util/sendEmail";

export const testEmailRout = {
    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try {
            await SendEmail({
                from: 'no-reply@easyjobmz.com',
                to: 'benjamim.eterino@gmail.com',
                subject: 'Funciona?',
                text: 'If youre reading this is too late'

            });
            res.sendStatus(200)
;        } catch (e) {
    console.log(e);
    res.sendStatus(500);
}
    }
}