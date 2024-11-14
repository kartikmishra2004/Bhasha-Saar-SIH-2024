import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './database/dbconnecion.js';
// import authRoute from './routes/auth.route.js';
// import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}

app.use(cors(corsOptions));

// Middlewares
app.use(express.json());

// API for Authentication
// app.use("/api/v1/auth", authRoute);

// app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`app is listning on port ${PORT}`);
        });
    });