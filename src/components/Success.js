import React, { Component } from 'react'
import { FormGroup, Label, Input, Button } from "reactstrap";

export class Success extends Component {
  render() {
    if (this.props.currentStep !== 4) {
        return null;
      }
    return (
        <div className="create-wspace-sec">
        <h1 className='title'>Congratulations, Eren!</h1>
        <p className='note text-center'>You have completed onboarding , you can start using Eden</p>
        
    </div>
    )
  }
}

export default Success