import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/', Router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@blog-app.5mx1bf5.mongodb.net/?retryWrites=true&w=majority`;
    

Connection(URL);

