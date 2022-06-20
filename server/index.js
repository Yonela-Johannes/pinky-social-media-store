import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ProductRoutes from './routes/products.js'
import PostRoutes from './routes/post.js'
import BlogRoutes from './routes/blogs.js'
import cors from 'cors';

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// routes
app.use('/products', ProductRoutes)
app.use('/posts', PostRoutes)
app.use('/blogs', BlogRoutes)

const CONNECTION_URL = "mongodb+srv://Yonela:Juanesse%401994@cluster0.rz0vn.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
