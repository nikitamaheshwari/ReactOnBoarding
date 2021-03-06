import React, { Component } from 'react'
import { FormGroup, Label, Input } from "reactstrap";
import './CreateWorkspace.scss'

export class CreateWorkspace extends Component {
 

  render() {
    if (this.props.currentStep !== 2) {
        return null;
      }
    return (
       <div className="section">
          <h1 className='title'>Let's set up a home for all your work</h1>
          <p className='note text-center'>you can always create workspace later</p>
          <FormGroup>
            <Label for="worspacename">Workspace Name<span className="text-danger">*</span></Label>
            <Input
            type="text"
            name="workspacename"
            id="workspacename"
            placeholder="Enter your Workspace Name"
            value={this.props.workspacename} // Prop: The username input data
            onChange={this.props.handleChange} // Prop: Puts data into the state
            />
            </FormGroup>
            <FormGroup>
                <Label for="nickname">Workspace URL (optional)</Label>
                <div>
                <Input
                type="text"
                placeholder="www.eden.com/"
                className="workspace-url"
                disabled
                />
                <Input
                type="text"
                className = "workspace-url-value"
                name="workspaceurl"
                id="workspaceurl"
                placeholder="Example"
                value={this.props.workspaceurl} // Prop: The username input data
                onChange={this.props.handleChange} // Prop: Puts data into the state
                />
                </div>
        </FormGroup>
      </div>
    )
  }
}

export default CreateWorkspace