import express from 'express';
import cors from 'cors';
import http from "http";
import 'dotenv/config';
import connectDB from './database/dbconnecion.js';
import authRoute from './routes/auth.route.js';
import errorMiddleware from './middlewares/error.middleware.js';
import profileRoute from "./routes/profile.route.js";
import { Server } from "socket.io";
import Message from "./models/message.model.js";
import Chat from "./models/chat.model.js";
import chatRout from "./routes/chat.route.js"
import chatlistRout from "./routes/chatlist.route.js"

const app = express();
const server = http.createServer(app);

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}

app.use(cors(corsOptions));

// Socket.IO server
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true,
    }
});

// Socket connection
io.on("connection", (socket) => {

    // Join room
    socket.on("join_room", (roomName) => {
        socket.join(roomName);
    });

    // Handle private message
    socket.on("private_message", async ({ senderId, roomName, message }) => {
        try {
            // Create new message
            const newMessage = new Message({
                sender_id: senderId,
                content: message,
            });
            await newMessage.save();

            // Find or create a new chat for the room
            let chat = await Chat.findById(roomName);
            if (!chat) {
                chat = new Chat({
                    _id: roomName,  // roomName is used as the _id
                    senderId: senderId,
                    messages: [newMessage._id],  // Initialize with the first message
                });
            } else {
                chat.messages.push(newMessage._id);  // Add new message to existing chat
            }

            // Save the chat document
            await chat.save();

            // Emit the message to other users in the room, excluding the sender
            socket.broadcast.to(roomName).emit("receive_message", { senderId, message });
        } catch (error) {
            console.error("Error saving message to DB:", error);
        }
    });
});

// Middlewares
app.use(express.json());

// API for Authentication
app.use("/api/v1/auth", authRoute);

// API for Profile upload
app.use("/api/v1/profile", profileRoute);

// API for Chat
app.use("/api/v1/chat", chatRout);

// API for Chatlist
app.use("/api/v1/chatlist", chatlistRout);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`app is listning on port ${PORT}`);
        });
    });