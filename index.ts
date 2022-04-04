import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

//Configuration the .env file
dotenv.config();

//Create Express App
const app: Express = express();
const port = process.env.PORT || 8000;

//Definir rutas app
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

//Ejecutar app
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});