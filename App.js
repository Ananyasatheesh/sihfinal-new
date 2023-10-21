
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Knowledge from './components/Knowledge';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login'
import Investor from './components/Investor';
import Home1 from './components/Home1';
import Message from './components/Message';
import Post from './components/Post';
import Favourites from './components/Favourites';
import Settings from './components/Settings';
import Govag from './components/Govag';
import Govpost from './components/Govpost';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/fav' element={< Favourites />} />
        <Route path='/signup' element={< Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/cnfm' element={<Home1 />} />
        <Route path='/know' element={<Knowledge />} />
        <Route path='/login' element={< Login />} />
        <Route path='/post' element={<Post/>}/>
        <Route path='/set' element={<Settings/>}/>
        <Route path='/msg' element={<Message/>}/>
        <Route path='/invest' element={< Investor />} />
        <Route path='/govag' element={< Govag />} />
        <Route path='/govpost' element={< Govpost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;