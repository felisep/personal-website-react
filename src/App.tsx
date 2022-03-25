import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar'
import InfoPage from './pages/info_page';
import IndexPage from './pages/index';
import Api from './pages/api_page';
import NotFound from './pages/notFoun_page';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path = '/' element = {<IndexPage />}/>
            <Route path = '/infopage' element ={<InfoPage />}/>
            <Route path = '/api' element ={<Api />}/>

            <Route path = "*" element = {<NotFound />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
