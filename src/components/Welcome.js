import React, { Component } from 'react'
import { FormGroup, Label, Input } from "reactstrap";
import "./Welcome.scss";


export class Welcome extends Component {
  render() {
    if (this.props.currentStep !== 1) {
        return null;
      }
    return (
      <div className="welcome-sec">
          <h1 className='title'>Welcome! First things first...</h1>
          <p className='note text-center'>you can always change them later.</p>
          <FormGroup>
            <Label for="fullname">Full Name</Label>
            <Input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter your Full Name"
            value={this.props.fullname} // Prop: The username input data
            onChange={this.props.handleChange} // Prop: Puts data into the state
            />
        </FormGroup>
        <FormGroup>
            <Label for="nickname">Display Name</Label>
            <Input
            type="text"
            name="nickname"
            id="nickname"
            placeholder="Enter your nick name"
            value={this.props.nickname} // Prop: The username input data
            onChange={this.props.handleChange} // Prop: Puts data into the state
            />
      </FormGroup>
      </div>
    )
  }
}

export default Welcome