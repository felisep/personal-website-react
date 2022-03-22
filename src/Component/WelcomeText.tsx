import React from 'react'
import '../Component/WelcomeText.scss'

class WelcomeText extends React.Component {

  text = "Welcome to my page"

  render(){
    return <div className="card">
    <div className='container'>
        <h1>
          {this.text}
        </h1>
      </div> 
    </div>
  }
}

export default WelcomeText