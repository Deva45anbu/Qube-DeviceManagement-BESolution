// Importing necessary modules and packages
import { ok, noContent } from "../util/statusCodes.js";
import { appliancesData } from "../data/appliancesData.js";

// Controller function to handle GET requests for appliance information
export default function ApplianceInfoController(req, res) {
    try {
        const { applianceId } = req.params
        let responseData = appliancesData.appliances.find((data) => data.serialNo == applianceId)
        if (responseData != undefined) {
            // Responding with a 200 OK status and the appliance data
            return ok(res, responseData)
        } else {
            // Responding with a 204 No Content status if appliance data is not found
            return noContent(res, {})
        }
    } catch (error) {
        // Handling unexpected errors and responding with a 500 Internal Server Error status
        return res.status(500).json({ message: 'Something went wrong!' });
    }
}