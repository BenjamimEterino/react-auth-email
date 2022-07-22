import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db'

export const verfiryEmailRoute = {
    path: '/api/verify-email',
    method: 'put',
    handler: async (req, res) => {
        const { verificationString } = req.body;
        const db = getDbConnection('authenticate');
        const result = await db.collection('users').findOne({
            verificationString,
        });

        if(!result)  return res.status(401).json({message: 'email not verified'});

        const {_id: id, email, info} = result;
        await db.collection('users').updateOne({_id: ObjectId(id)}, {
            $set: {isVerified: true}
        });

        jwt.sign({id, email, isVerified: true, info}, process.env.JWT_SECRET, {expiresIn: '30d'}, (err, token) => {
            if(err) return res.sendStatus(500);
            res.status(200).json({token});
        });

    }
}