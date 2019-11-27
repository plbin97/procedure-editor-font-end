import React from 'react';
import {dataViewUrl} from "../../config";

class OneResult extends React.Component{
    render() {
        let dataUrl = dataViewUrl + "?url=" + encodeURI(this.props["result"]);
        return (
            <div>
                <a href={dataUrl} target={"_blank"}>{this.props["result"]}</a>
            </div>
        );
    }
}
export default OneResult;