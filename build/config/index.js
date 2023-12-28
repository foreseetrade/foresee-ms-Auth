"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env'),
});
const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'jtEknV94ELcnBrO981vjlYFxMnrBYap0',
    clientId: process.env.CLIENT_ID || 'default_client_id',
    clientSecret: process.env.CLIENT_SECRET || 'default_client_secret',
};
exports.default = config;
