import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
//   CardHeader,
  CardBody,
  CardTitle,
  CardText,
//   CardFooter
} from "reactstrap";


import styled from "styled-components";
import CreateWorkspace from "./CreateWorkspace";
import Multistep from "./Multistep";
import SetupWorkspace from "./SetupWorkspace";
import Success from "./Success";
import "./MasterForm.scss";
import logo from '../images/logo.png';
import Welcome from "./Welcome";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      fullname: "",
      nickname: "",
      workspaceurl: "",
      workspacename:"",
      workspacetype:"self",

    };
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
      const { name, value } = event.target;
      console.log(name,event.target.value)
    this.setState({
      [name]: value
    });
  }

  // Trigger an alert on form submission
  handleSubmit = event => {
    event.preventDefault();
    const { fullname, nickname, workspacename, workspaceurl, workspacetype } = this.state;
    console.log(workspacetype);
    alert(`Your registration detail: \n 
      FullName: ${fullname} \n 
      NickName: ${nickname} \n
      workspaceURl: ${workspaceurl} \n
      workspaceName: ${workspacename} \n
      WorkspaceType: ${workspacetype}`);
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary w-100" onClick={this._prev}>
          Previous
        </Button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    
    if (currentStep < 4) {
      return (
        <Button color="primary w-100" onClick={this._next}>
          Create Workspace
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 3) {
      return <Button color="primary w-100">Lauch Eden</Button>;
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Card>
            {/* <CardHeader>Create an Account</CardHeader> */}
            <CardBody>
                
                <h1><img src={logo} alt="logo" className="img-fluid"></img>Eden</h1>
              <CardTitle>
                <Multistep currentStep={this.state.currentStep} />
              </CardTitle>
              <CardText />
              <Welcome 
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                fullname={this.state.fullname}
                nickname={this.state.nickname}
              />
               <CreateWorkspace
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                workspacename={this.state.workspacename}
                workspaceurl={this.state.workspaceurl}
                // fullname={this.state.fullname}
                // nickname={this.state.nickname}
              />
              <SetupWorkspace
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                selectedvalue={this.state.selectedvalue}
                // workspacename={this.state.workspacename}
                // workspaceurl={this.state.workspaceurl}
                workspacetype = {this.state.workspacetype}
                // fullname={this.state.fullname}
                // nickname={this.state.nickname}
              />
             <Success
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                // workspacename={this.state.workspacename}
                // workspaceurl={this.state.workspaceurl}
                // fullname={this.state.fullname}
                // nickname={this.state.nickname}
              />
            <div className="footer-buttons">
              {this.nextButton}
              {this.submitButton}
              {this.previousButton}
            </div>
              
            </CardBody>
            {/* <CardFooter> */}
            {/* </CardFooter> */}
          </Card>
        </Form>
      </>
    );
  }
}

export default MasterForm;
