"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    const accessToken = token && token.split(' ')[1];
    if (!accessToken) {
        return res.sendStatus(401); // Unauthorized
    }
    jsonwebtoken_1.default.verify(accessToken, 'your_secret_key_here', (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        console.log(user); // Attach user data to the request object if needed
        next(); // Proceed to the next middleware
    });
};
exports.authenticateToken = authenticateToken;
