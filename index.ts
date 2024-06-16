import express, { Application } from "express";
import {Server, IncomingMessage, ServerResponse} from "node:http"
import cors from "cors";

const app: Application = express();
app.use(express.json());

app.use(cors());

const server: Server<typeof IncomingMessage, typeof ServerResponse> = app.listen(8080, () => {
    console.log("Server is running on port 8080");
});