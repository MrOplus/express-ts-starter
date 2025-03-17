import express , {Express , Request, Response} from 'express';
import {createServer} from 'http';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';
dotenv.config();

const app: Express = express();
const server = createServer(app);

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

server.listen(port);
server.on('listening', () => {
    console.log(`Server is running on port ${port}`);
})