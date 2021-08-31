import React, { Component } from 'react'

export default class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        }) 
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (<div>
            {this.state.editMode && <input value={this.status} onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}></input>}
            {!this.state.editMode && <div><span onClick={this.activateEditMode}>{this.status && '======='}</span></div>}
            </div>
        )
    }
}
