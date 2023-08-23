import express, { Express, Request, Response } from 'express';

import { MockArticleFactory } from './mocks';

const app: Express = express();
const port = 8081;

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
