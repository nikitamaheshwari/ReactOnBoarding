import React, { Component } from 'react'
import { FormGroup, Label, Input } from "reactstrap";
import logo from '../images/logo.png'
import './SetupWorkspace.scss'

export class SetupWorkspace extends Component {
    // constructor(props) {
    //     super(props);
    // }

   
  render() {
    if (this.props.currentStep !== 3) {
        return null;
      }
    return (
        <div className="section">
        <h1 className='title'>How are you planning to use Eden?</h1>
        <p className='note text-center'>we will streamline you setup experience accordingly.</p>
        <FormGroup tag="fieldset" className='workspace-selector'>
          <FormGroup check >
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              <div className='cardRadio'>
                  <div>
                      <img src={ logo } alt="user"></img>
                      <p className='workspace-type'>For Myself</p>
                      <p className='workspace-perks'>Write better. Think more clearly. Stay organized</p>

                  </div>
              </div>
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              <div className='cardRadio'>
              <div >
                      <img src={ logo } alt="user"></img>
                      <p className='workspace-type'>With my team</p>
                      <p className='workspace-perks'>Wiki, docs, tasks & projects, all in one place</p> 

                  </div>
                  </div>
            </Label>
          </FormGroup>
          </FormGroup>
      </div>
    )
  }
}

export default SetupWorkspace