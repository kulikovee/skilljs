import express, { Express, Request, Response } from 'express';
import MariaDB from 'mariadb';
import dotenv from 'dotenv';

import { MockArticleFactory } from './mocks';
import { Article } from "./model";

const app: Express = express();
const port = 8081;

dotenv.config();

const pool = MariaDB.createPool({
    host: "127.0.0.1",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    connectionLimit: 5
});

async function getArticles(): Promise<Article[]> {
    let conn;
    let result: Article[];

    try {
        conn = await pool.getConnection();
        result = await conn.query("SELECT * FROM articles") as Article[];
    } catch (err) {
        throw err;
    }

    if (conn) {
        conn.end();
    }

    return result;
}

app.get('/', (req: Request, res: Response) => {
    res.send({
        result: {
            apiVersion: "1.0.0",
            availableRoutes: ["/", "/articles", "/articles/:id"],
        },
    });
});

app.get('/articles', (req: Request, res: Response) => {
    res.send({
        result: new Array(20)
            .fill(null)
            .map((_, idx) => MockArticleFactory(idx + 1)),
    });
});

app.get('/articles/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const error =
        (Number.isNaN(id) && 400)
        || ((id < 1 || id > 20) && 404)
        || null;

    if (error) {
        return res.status(error).send({ error });
    }

    res.send({ result: MockArticleFactory(id) });
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
