import{ Route,Routes} from 'react-router-dom'
import Home from "./home/Home";
import Discover from '../src/discover/Discover'
import Manual from './manual/Manual';
import Smarttv from './Smarttv/Smarttv';
import TVsecTypes from './tvsectypes/TVsecTypes';
import Scan from './tvsectypes/Scan';
import ChildMode from './tvsectypes/ChildMode';
import ActivateSecuraa from './tvsectypes/ActivateSecuraa';
import Premium from './premium/Premium';
import Purchase from './premium/Purchase';
import Missing from './Missing/Missing';

function App() {
  return (
    <div >

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/discover" element={<Discover />} />
    <Route path="/manual" element={<Manual />} />
    <Route path="/smarttv" element={<Smarttv />} />
    <Route path="/tvsectypes" element={<TVsecTypes />} />
    <Route path="/tvsectypes/scan" element={<Scan />} />
    <Route path="/tvsectypes/childmode" element={ <ChildMode /> } />
    <Route path="/tvsectypes/activatesecuraa" element={ <ActivateSecuraa />} />
    <Route path="/premium" element={ <Premium /> } />
    <Route path='/purchase'element={ <Purchase /> } />
    <Route path='*' element={ <Missing/> }/>
   </Routes>
  
    </div>
  );
}

export default App;


