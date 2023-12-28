import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
});

const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'jtEknV94ELcnBrO981vjlYFxMnrBYap0',
    clientId: process.env.CLIENT_ID || 'default_client_id',
    clientSecret: process.env.CLIENT_SECRET || 'default_client_secret',
};

export default config;
