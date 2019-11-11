import React from 'react';
import '../../style/resultDisplay.scss'
import OneResult from "./OneResult";

class ResultDisplay extends React.Component{

    componentDidMount() {

    }

    render() {
        let results = this.props.resultDisplay;
        let resultsDisplay = [];
        for (let result of results) {
            resultsDisplay.push(<OneResult result={result} />)
        }
        return(
            <div className={"procedure-editor-result-display"}>
                {resultsDisplay}
            </div>
        )
    }
}

export default ResultDisplay;