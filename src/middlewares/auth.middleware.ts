import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';
import * as jwt from 'jsonwebtoken';
import { decodeToken } from 'utils/encryption';
import { authReq } from 'interfaces/token.interface';

export default function authMiddleware(req: authReq, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (token) {
        const decodedToken = decodeToken(token);
        req.decodedToken = decodedToken;
    }

    next();
}
