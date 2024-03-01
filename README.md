# Device Management Web Application

The backend application, part of the [Device Management Web Application] system, serves as a robust server-side component designed to handle various operations related to appliance management. Developed using Node.js and Express.js, it provides RESTful API endpoints for seamless communication with the frontend or other clients.


### Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
node app.js
```

### API Endpoints

#### GET /api/v1/appliances?deviceStatus&downloadStatus

Retrieve a list of appliances based on optional query parameters (deviceStatus, downloadStatus).

#### GET /api/v1/appliance/:applianceId/info

Retrieve detailed information about a specific appliance based on applianceId.

### Technology Stack

- **Node.js:** The server runtime environment for executing JavaScript on the server side.
  
- **Express.js:** A fast and minimalistic web application framework for Node.js, streamlining the development of robust APIs.

- **Axios:** Utilized for making HTTP requests, enabling seamless communication with other services.

### Deployment

To deploy the backend, clone the repository, install dependencies, configure the database, and start the server. The application will be accessible at [http://localhost:8080](http://localhost:8080) by default. For production deployment, consider hosting on a server or cloud platform.

## Authors

[@Deva45anbu](https://github.com/Deva45anbu)