import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    const accessToken = token && token.split(' ')[1];

    if (!accessToken) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(accessToken, 'your_secret_key_here', (err: any, user: any) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        console.log(user); // Attach user data to the request object if needed
        next(); // Proceed to the next middleware
    });
};
