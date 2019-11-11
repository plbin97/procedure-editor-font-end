import React from 'react';
import './editorDisplay.scss'

class EditorDisplay extends React.Component {
    saveProcedure() {

        console.log(document.getElementById("procedure-info-editor-procedureName").value);
        console.log(document.getElementById("procedure-info-editor-description").value);
        console.log(document.getElementById("procedure-info-editor-publicity").value);
    }
    render() {
        if (!this.props.display) {
            return(<div></div>);
        }

        return (
            <div className={"procedure-info-editor-frame"}>
                <div>
                    ProcedureName:
                    <input type={"text"} id={"procedure-info-editor-procedureName"} />
                </div>
                <div>
                    Description: <br/>
                    <textarea rows={"10"} cols={"30"} id={"procedure-info-editor-description"}></textarea>

                </div>
                <div>
                    <select id={"procedure-info-editor-publicity"}>
                        <option value={"0"}>Private</option>
                        <option value={"1"}>Public</option>
                    </select>
                </div>
                <div>
                    <button type={"button"} onClick={this.saveProcedure}>Save</button>
                </div>
            </div>
        );
    }
}

export default EditorDisplay;