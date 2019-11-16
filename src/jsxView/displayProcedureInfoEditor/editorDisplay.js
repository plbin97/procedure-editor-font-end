import React from 'react';
import updateProcedure from "../../communicationToBackend/editProcedureInfo";
import './editorDisplay.scss'

class EditorDisplay extends React.Component {
    render() {
        let saveProcedure = async () => {
            let editProcedureName = document.getElementById("procedure-info-editor-procedureName").value;
            let editProcedureDesc = document.getElementById("procedure-info-editor-description").value;
            let editProcedurePub = Number(document.getElementById("procedure-info-editor-publicity").value);
            let updateProcedureResult = await updateProcedure(this.props.procedureName, this.props.userToken, editProcedureName, editProcedureDesc,editProcedurePub);
            console.log(updateProcedureResult);
        };

        if (this.props["procedureName"] === undefined || this.props["procedureMetaData"] === undefined || this.props["procedurePublicity"] === undefined) {
            return (<div></div>);
        }
        if (!this.props.display) {
            return(<div></div>);
        }

        let privateSelected = "";
        let publicSelected = "";
        if (this.props["procedurePublicity"] === 1) {
            publicSelected = "selected";
        } else {
            privateSelected = "selected";
        }

        return (
            <div className={"procedure-info-editor-frame"}>
                <div>
                    ProcedureName:
                    <input type={"text"} id={"procedure-info-editor-procedureName"} value={this.props["procedureName"]} />
                </div>
                <div>
                    Description: <br/>
                    <textarea rows={"10"} cols={"30"} id={"procedure-info-editor-description"}>{this.props["procedureMetaData"]}</textarea>

                </div>
                <div>
                    <select id={"procedure-info-editor-publicity"}>
                        <option value={"0"} selected={privateSelected}>Private</option>
                        <option value={"1"} selected={publicSelected}>Public</option>
                    </select>
                </div>
                <div>
                    <button type={"button"} onClick={saveProcedure}>Save</button>
                </div>
            </div>
        );
    }
}

export default EditorDisplay;