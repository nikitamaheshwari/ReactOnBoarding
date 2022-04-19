import React, { Component } from 'react'
import congo from '../images/congo.png'
import './Success.scss'
export class Success extends Component {
  render() {
    if (this.props.currentStep !== 4) {
        return null;
      }
    return (
        <div className="section">
        <div className='d-flex justify-content-center'>
            <img src={ congo } alt='congo' className='img-fluid congo-img'></img>
        </div>
        <h1 className='title'>
        Congratulations, Eren!</h1>
        <p className='note text-center'>You have completed onboarding , you can start using Eden</p>
        
    </div>
    )
  }
}

export default Success