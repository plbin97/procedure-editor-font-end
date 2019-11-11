import axios from 'axios';
import {procedureManagementAPI} from "../config";

async function updateProcedure(procedureName, userToken, editProcedureName, editProcedureDescription, editProcedurePublicity) {
    let postData = {
        procedureName: procedureName,
        procedureInfo: {
            procedureName: editProcedureName,
            public: editProcedurePublicity,
            metaData: editProcedureDescription
        },
        userToken: userToken
    };
    let response = await axios.post(procedureManagementAPI.editProcedureInfo, postData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;

}
export default updateProcedure;