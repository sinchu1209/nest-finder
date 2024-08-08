import express from 'express' ;
import cors from "cors";
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.route.js'
import postRoute from './routes/post.route.js';
import testRoute from './routes/test.route.js';
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

 const app = express();

 app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
 app.use(express.json())
 app.use(cookieParser());


// Your application code starts here


 app.use("/api/posts" , postRoute);
 app.use("/api/users", userRoute);
 app.use("/api/auth" , authRoute);
 app.use("/api/test" , testRoute);
 app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
app.post('/api/users/save', (req, res) => {
   // Handle the POST request here
   const postId = req.body.postId;
   // Save the post ID to the database or perform any other necessary actions
   res.json({ message: 'Post saved successfully' });
 });

 app.listen(8800 , () => {
    console.log("Server is running");
 })