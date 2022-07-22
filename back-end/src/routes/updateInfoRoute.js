import Jwt from "jsonwebtoken";
import { ObjectId } from 'mongodb'
import { getDbConnection } from "../db";

export const updateInfoRoute = {
    path: '/api/users/:userId',
    method: 'put',
    handler: async (req, res) => {
        const { authorization } = req.headers;
        const { userId } = req.params;

        const updates = (({
            favoriteFood,
            hairColor,
            bio,
        }) => ({
            favoriteFood,
            hairColor,
            bio,
        }))(req.body);

        if (!authorization) {
            return res.status(401).json({ message: 'No auth' });
        }

        const token = authorization.split(' ')[1];

        Jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(401).json({ message: 'Unable' });

            const { id, isVerified } = decoded;

            if (id !== userId) return res.status(403).json({message: 'Nao pode fazer update'});
            if(!isVerified) return res.status(403).json({message: 'verifiy email'});

            const db = getDbConnection('authenticate');

            const result = await db.collection('users').findOneAndUpdate(
                {_id: ObjectId(id)},
                {$set: {info: updates}},
                {returnOriginal: false},
            );

            const {email, info} = result.value;

            Jwt.sign({id, email, isVerified, info}, process.env.JWT_SECRET, {expiresIn: '30d'}, (err, token) =>{
                if(err) {
                    return res.status(200).json(err);

                }
                res.status(200).json({token});
            })
        })
    }
}