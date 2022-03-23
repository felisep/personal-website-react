import React from 'react'
import WelcomeText from '../components/WelcomeText'
import './index.scss'

class IndexPage extends React.Component {

  render(){
    return <div className="welcome_container">
        <div>
            <WelcomeText />
        </div>
    </div>
  }
}

export default IndexPage;