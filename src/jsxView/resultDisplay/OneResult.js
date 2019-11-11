import React from 'react';

class OneResult extends React.Component{
    render() {
        return (
            <div>
                {this.props["result"]}
            </div>
        );
    }
}
export default OneResult;