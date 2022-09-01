import { useState } from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Body from './components/body/Body';
import Intro from './components/body/Intro';
import Footer from './components/footer/Footer';
import Navbaro from './components/head/Navbaro';
import { tab } from './Data';
function App() {
  const [info, setInfo] = useState(tab)
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
    <Route path="/" element={<><Navbaro/><Intro/>{info.map((el,i)=><Body el={el} key={i}/>)}<Footer/></>}   />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
