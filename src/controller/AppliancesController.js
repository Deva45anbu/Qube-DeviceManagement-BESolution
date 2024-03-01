// Importing necessary modules and packages
import { noContent, ok, somethingWentWrong } from "../util/statusCodes.js";
import { appliancesData } from "../data/appliancesData.js";

// Controller function to handle GET requests for appliances
export default function AppliancesController(req, res) {
    try {


        let { deviceStatus, downloadStatus } = req.query
        if (deviceStatus) {
            deviceStatus = deviceStatus.toLowerCase()
        }
        if (downloadStatus) {
            downloadStatus = downloadStatus.toLowerCase()
        }

        let responseData
        // Filtering appliancesData based on query parameters

        if (deviceStatus && downloadStatus) {
            responseData = appliancesData.appliances.filter(
                (data) => data.deviceStatus.toLowerCase() == deviceStatus && data.downloadStatus.toLowerCase() == downloadStatus)
        } else if (deviceStatus) {

            responseData = appliancesData.appliances.filter(
                (data) => data.deviceStatus.toLowerCase() == deviceStatus)

        } else if (downloadStatus) {

            responseData = appliancesData.appliances.filter(
                (data) => data.downloadStatus.toLowerCase() == downloadStatus)
        } else {
            // If no query parameters are provided, return all appliancesData
            responseData = appliancesData.appliances
        }

        if (responseData != undefined) {
            // Responding with a 200 OK status and the filtered appliance data
            return ok(res, responseData)
        } else {
            // Responding with a 204 No Content status if no data is found
            return noContent(res, {})
        }

    } catch (error) {
        // Handling unexpected errors and responding with a 500 Internal Server Error status
        return somethingWentWrong(res)
    }
}