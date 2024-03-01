import { Router } from "express";
import AppliancesController from "./controller/AppliancesController.js";
import ApplianceInfoController from "./controller/ApplianceInfoController.js";

// Initializing a new instance of the router
const route = Router();

// Route to get a list of appliances
route.get("/api/v1/appliances", AppliancesController)

// Route to get information about a specific appliance by ID
route.get("/api/v1/appliance/:applianceId/info", ApplianceInfoController)

export default route;