import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { MockArticle, MockArticles } from './mocks';

dotenv.config();

const app: Express = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
    res.send({ apiVersion: "1.0.0" });
});

app.get('/articles', (req: Request, res: Response) => {
    res.send(MockArticles);
});

app.get('/articles/1', (req: Request, res: Response) => {
    res.send(MockArticle);
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
