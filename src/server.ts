import express, { Request, Response } from 'express';
import routes from './routes';
import config from './config';

const app = express();
const PORT = config.port;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server running');
});

// app.use(authenticateToken);

app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on Port http://localhost:${PORT}`);
});
