
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/common/Header';
import Home from './component/Home';


function App() {
  return (
    <div className="App">
      <div className='leftside'>
      <Header/>
      </div>

      <div className='rightside'>
       <Home/>
   
      </div>
   
    </div>
  );
}

export default App;
