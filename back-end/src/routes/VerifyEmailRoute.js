import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import { CognitoUser } from 'amazon-cognito-identity-js'
import { getDbConnection } from '../db';
import {awsUserPool} from '../util/awsUserPool'

export const verfiryEmailRoute = {
    path: '/api/verify-email',
    method: 'put',
    handler: async (req, res) => {
        const { email, verificationString } = req.body;

        new CognitoUser({ Username: email, Pool: awsUserPool })
            .confirmRegistration(verificationString, true, async (err) => {
                if (err) return res.status(401).json({ message: 'Incorrect' });

                const db = getDbConnection('authenticate');
                const result = await db.collection('users')
                    .findOneAndUpdate({ email }, {
                        $set: { isVerified: true }
                    }, {
                        returnOriginal: false,
                    });
                const { _id: id, info } = result.value;

                jwt.sign({ id, email, isVerified: true, info }, process.env.JWT_SECRET, { expiresIn: '30d' }, (err, token) => {
                    if (err) return res.sendStatus(500);
                    res.status(200).json({ token });
                });

            });


    }
}