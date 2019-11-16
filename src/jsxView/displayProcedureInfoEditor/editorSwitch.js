import React from 'react';

class EditorSwitch extends React.Component{
    state = {
        opened: false
    };
    render() {
        let  clickEvent = () => {
            if (this.state.opened) {
                this.props.switch(false);
                this.setState({opened: false});
            } else {
                this.props.switch(true);
                this.setState({opened: true});
            }
        };
        return (<button type={"button"} id={"procedure-info-editor-switch"} onClick={clickEvent}>Display Procedure Profile Display</button>);
    }
}
export default EditorSwitch;