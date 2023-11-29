import{ Route,Routes} from 'react-router-dom'
import Home from "./home/Home";
import Discover from '../src/discover/Discover'
import Manual from './manual/Manual';
import Smarttv from './Smarttv/Smarttv';
import TVsecTypes from './tvsectypes/TVsecTypes';

function App() {
  return (
    <div >

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/discover" element={<Discover />} />
    <Route path="/manual" element={<Manual />} />
    <Route path="/smarttv" element={<Smarttv />} />
    <Route path="/tvsectypes" element={<TVsecTypes />} />
   </Routes>
  
    </div>
  );
}

export default App;


