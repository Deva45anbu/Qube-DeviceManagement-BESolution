// Importing necessary modules and packages
import express from 'express';
import bodyParser from 'body-parser';
import routes from '../src/route.js';
import cors from 'cors';
import { somethingWentWrong } from './util/statusCodes.js';

// Creating an Express application instance
const app = express();

// Middleware for parsing request bodies as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware for handling Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Adding routes to the application
app.use('/', routes);

// Error handling middleware for handling unexpected errors
app.use((err, req, res, next) => {
    return somethingWentWrong(res)

});

// Setting up the port for the server to listen on
const port = 8080;

// Starting the server and listening on the specified port
app.listen(port, () => console.log(`Server running on port ${port}`));