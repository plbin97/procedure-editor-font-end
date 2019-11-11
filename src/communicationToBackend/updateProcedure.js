import axios from 'axios';
import {procedureManagementAPI} from "../config";

async function updateProcedure(procedureName, userToken, procedureData) {
    let postData = {
        procedureName: procedureName,
        procedure: procedureData,
        userToken: userToken
    };
    let response = await axios.post(procedureManagementAPI.updateProcedure, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;

}
export default updateProcedure;