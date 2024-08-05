
// API DOcumenATion
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";
// package import
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import 'express-async-errors';

//Securty package
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

// file imports
import connectDB from './config/db.js';

//routes import
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import jobsRoutes from './routes/jobsRoute.js';
import errorMiddleware from './middelwares/erroMiddelware.js';

//Dot Env configuration
dotenv.config();

//connect to db
connectDB();

// Swagger api config
// swagger api options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Portal Application",
      description: "Node Expressjs Job Portal Application",
    },
    servers: [
      {
     // url: "http://localhost:8090",
            url: "https://nodejs-job-portal-app.onrender.com"
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const spec = swaggerDoc(options);

//rest object
const app = express();

//middleware middleware
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes

// app.get('/',(req,res) =>{
//     res.send('<h1>Welcom to job portal</h1>');
// });

//with controller routes

app.use("/api/v1/test",testRoutes);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/job",jobsRoutes);


//homeroute root
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));


//error middleware
app.use(errorMiddleware);
//port

const PORT = process.env.PORT || 8090

app.listen(PORT,()=>{
    console.log(`Node Server is In ${process.env.DEV_MODE} Running on port ${PORT}`.bgCyan.white);
});
