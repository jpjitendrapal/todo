import React from 'react';

export default class Task extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.updateTaskState = this.updateTaskState.bind(this);
    }
    
    componentWillMount() {
        this.setState({
            active: this.props.active
        })
    }
    updateTaskState() {
        this.setState({
            active: this.state.active == "false" ? "true" : "false"
        });
    }
    render() {
        return (
            <div className={"task " + (this.state.active == 'true' ? 'active' : 'completed')} onClick={this.updateTaskState}>{this.props.name}
                {" " + this.props.children}
            </div>
        );
    }
}

Task.defaultProps = {
    active: "true",
    name: "This is default task.",
    children: ""
}

Task.propTypes = {
    active: React.PropTypes.string,
    name: React.PropTypes.string.isRequired
}