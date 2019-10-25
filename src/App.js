import React from 'react';
import "./dragging-interface/src/index";
import getUserToken from "./lib/getUserTokenFromCookie";
import GetRequest from "./lib/getRequestParameters";
import {homePage} from "./config";
import setCookie from "./lib/setCookieForTesting";

class App extends React.Component {
    state = {
        loaded: false
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
            console.log(userToken, param["procedure"]);
            window.dragging("#dragging-interface",userToken, param["procedure"]);
            this.setState({
                loaded: true
            })
        }
    }
    render() {
        return (
            <div id={"dragging-interface"}></div>
        )
    }
}

export default App;
