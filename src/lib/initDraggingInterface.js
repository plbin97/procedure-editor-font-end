import getProcedureFromServer from "../communicationToBackend/getProcedureFromServer";
import updateProcedure from "../communicationToBackend/updateProcedure";

async function initDraggingInterface(userToken, procedureName, externalJsx) {
    let procedure = await getProcedureFromServer(userToken, procedureName).catch(err => {
        console.log(err);
    });
    if (procedure === undefined) {
        return false;
    }
    let procedureContents = procedure["procedure"];
    externalJsx.setState({
        procedureMetaData: procedure["metaData"],
        procedurePublicity: procedure["public"]
    });
    let dragging = new window.DraggingInterface();
    await dragging.init("#dragging-interface");
    await dragging.addProcedure(procedureContents[procedureContents.length - 1], procedure["procedureName"]);
    await dragging.hookers(
        async (procedure) => {
            let result = await updateProcedure(procedureName, userToken, procedure);
            console.log(result);
        },
        async (result) => {
            let currentResultDisplay = externalJsx.state.resultDisplay;
            currentResultDisplay.push(result);
            externalJsx.setState({resultDisplay: currentResultDisplay});
            console.log(result);
        }
    );
    return true;

}

export default initDraggingInterface;