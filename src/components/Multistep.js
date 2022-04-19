import React, { Component } from 'react'
import "./MultiStep.scss";
import "react-step-progress-bar/styles.css";

import { ProgressBar, Step } from "react-step-progress-bar";

export class Multistep extends Component {
    // constructor(props) {
    //     super(props);
    // //  MultiStepProgressBar = props => {
    // }
    render() {
      var stepPercentage = 0;
         
    if (this.props.currentStep === 1) {
        stepPercentage = 15;
      } else if (this.props.currentStep === 2) {
        stepPercentage = 50;
      } else if (this.props.currentStep === 3) {
        stepPercentage = 85;
      } else if (this.props.currentStep === 4) {
        stepPercentage = 100;
      }
       else {
        stepPercentage = 0;
      }
    return (
        <ProgressBar percent={stepPercentage}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
    )
  }
}

export default Multistep