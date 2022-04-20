import React, { Component } from 'react'
import { FormGroup, Label, Input } from "reactstrap";
import user from '../images/user.svg'
import users from '../images/users.svg'
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
                <h1 className='title'>How are you planning to use Eden?</h1>{this.state}
                <p className='note text-center'>we will streamline you setup experience accordingly.</p>
                <FormGroup tag="fieldset" className='workspace-selector'>
                    <FormGroup check >
                        <Label check>
                            <Input
                                type="radio"
                                className="input-radio"
                                value="self"
                                name="workspacetype"
                                onChange={this.props.handleChange}
                                checked={this.props.workspacetype === 'self' ? true : false}
                            />
                            <div className='cardRadio'>
                                <div>   
                                    <img src={user} alt="user" className="user"></img>
                                    <p className='workspace-type'>For myself</p>
                                    <p className='workspace-perks'>Write better. Think more clearly. Stay organized</p>

                                </div>
                            </div>
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                value="team"
                                checked={this.props.workspacetype === 'team' ? true : false}
                                onChange={this.props.handleChange}
                                name="workspacetype" />
                            <div className='cardRadio'>
                                <div >
                                    <img src={users} alt="user" className='user'></img>
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