import React, { Component } from 'react'
import { FormGroup, Label, Input } from "reactstrap";
import './SetupWorkspace.scss'

export class SetupWorkspace extends Component {

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
                                {/* <div>  */}
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                        className='user' viewBox="0 0 32.000000 32.000000"
                                        preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                                         stroke="none">
                                        <path d="M139 308 c-26 -11 -59 -58 -59 -86 0 -9 9 -31 20 -49 36 -61 125 -54
                                        156 12 16 34 16 39 1 70 -11 23 -29 40 -53 50 -20 8 -37 15 -38 14 0 -1 -12
                                        -6 -27 -11z"/>
                                        <path d="M113 83 c-18 -9 -39 -30 -47 -47 l-15 -31 116 -3 c64 -1 118 0 121 3
                                        11 11 -26 59 -60 77 -40 22 -73 22 -115 1z"/>
                                        </g>
                                        </svg>
                                <p className='workspace-type'>For myself</p>
                                <p className='workspace-perks'>Write better. Think more clearly. Stay organized</p>

                                {/* </div> */}
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
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    className='user' viewBox="0 0 42.000000 36.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)"
                                     stroke="none">
                                    <path d="M191 294 c-16 -21 -18 -30 -10 -52 12 -32 26 -42 60 -42 54 0 80 74
                                    37 104 -33 23 -64 20 -87 -10z"/>
                                    <path d="M99 204 c-17 -21 0 -49 31 -49 31 0 48 28 31 49 -8 9 -21 16 -31 16
                                    -10 0 -23 -7 -31 -16z"/>
                                    <path d="M320 205 c-18 -21 -8 -50 19 -53 31 -5 45 11 37 42 -7 29 -36 35 -56
                                    11z"/>
                                    <path d="M185 145 c-21 -20 -25 -34 -25 -85 l0 -60 80 0 80 0 0 50 c0 55 -20
                                    104 -45 114 -33 12 -66 5 -90 -19z"/>
                                    <path d="M90 101 c-5 -11 -10 -38 -10 -60 0 -34 3 -41 20 -41 18 0 20 7 20 60
                                    0 61 -11 76 -30 41z"/>
                                    <path d="M360 62 c0 -55 2 -62 20 -62 17 0 20 7 20 43 0 31 -6 49 -20 62 -20
                                    18 -20 17 -20 -43z"/>
                                    </g>
                                    </svg>
                                    <p className='workspace-type'>With my team</p>
                                    <p className='workspace-perks'>Wiki, docs, tasks & projects, all in one place</p>
                            </div>
                        </Label>
                    </FormGroup>
                </FormGroup>
            </div>
        )
    }
}

export default SetupWorkspace