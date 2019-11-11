import axios from 'axios';
import {procedureManagementAPI} from "../config";

async function getProcedureFromServer(userToken, procedureName) {
    let postData = {
        procedureName: procedureName,
        userToken: userToken
    };
    let response = await axios.post(procedureManagementAPI.getProcedure, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;

}
export default getProcedureFromServer;