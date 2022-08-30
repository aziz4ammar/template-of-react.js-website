import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Navbaro from './components/head/Navbaro';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
    <Route path="/" element={<><Navbaro/><Body/><Footer/></>}   />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
