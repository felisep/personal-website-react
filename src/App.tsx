import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar'
import InfoPage from './pages/info_page';
import IndexPage from './pages/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path = '/' element = {<IndexPage />}/>
            <Route path = '/infopage' element ={<InfoPage />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
