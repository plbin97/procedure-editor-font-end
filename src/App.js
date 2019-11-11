import React from 'react';
import "./dragging-interface/src/index";
import getUserToken from "./lib/getUserTokenFromCookie";
import GetRequest from "./lib/getRequestParameters";
import {homePage} from "./config";
import initDraggingInterface from "./lib/initDraggingInterface";
import ResultDisplay from "./jsxView/resultDisplay/ResultDisplay";
import EditorSwitch from "./jsxView/displayProcedureInfoEditor/editorSwitch";
import EditorDisplay from "./jsxView/displayProcedureInfoEditor/editorDisplay";
import getProcedureFromServer from "./communicationToBackend/getProcedureFromServer";
import setCookie from "./lib/setCookieForTesting";

class App extends React.Component {
    state = {
        loaded: false,
        resultDisplay: [],
        displayProcedureInfoEditor: false
    };
    componentDidMount() {
        if (!this.state.loaded) {
            let userToken = getUserToken();
            if (userToken === null) {
                window.location.href = homePage;
            }
            let param = GetRequest();
            if (param["procedure"] === undefined) {
                window.location.href = homePage;
            }
            initDraggingInterface(userToken, param["procedure"], this);
            this.setState({
                loaded: true
            })
        }
    }
    render() {
        let renderItem = [];
        renderItem.push(<ResultDisplay resultDisplay={this.state.resultDisplay} />);
        renderItem.push(<EditorSwitch parent={this} />);
        renderItem.push(<EditorDisplay display={this.state.displayProcedureInfoEditor} />);
        renderItem.push(<div id={"dragging-interface"}></div>);

        return (
            renderItem
        )
    }
}

export default App;
