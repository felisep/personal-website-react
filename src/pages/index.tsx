import React from 'react'
import WelcomeText from '../components/WelcomeText'
import './index.scss'
import CurrentDate from '../components/current_date'

class IndexPage extends React.Component {

  render(){
    return <div className="welcome_container">
        <div>
            <WelcomeText />
        </div>
        <h1>The time now is </h1>
        <div>
        <CurrentDate />
        </div>
    </div>
  }
}

export default IndexPage;