import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Items from './Components/Items';


function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Items />} path={'/items'} history={props.history} />
          
        </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;
