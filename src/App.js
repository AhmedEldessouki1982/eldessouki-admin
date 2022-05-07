import './index.css';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import New from './pages/new/New'
import Single from './pages/single/Single'

import Charts from './Components/charts/Charts';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element = {<Home />}></Route>            
              <Route path='login' element = {<Login />}></Route>
              
              <Route path='users'>
                <Route index element = {<List />}></Route>
                <Route path=':userId' element = {<Single />}></Route>
                <Route path='new' element = {<New />}></Route>      
              </Route>

              {/*the following route to show esp charts only*/}
              <Route path='charts'>
                <Route index element = {<Charts />}></Route> 
              </Route>
              {/*the above route to show esp charts only*/}

          </Route>
        </Routes>            
      </BrowserRouter>
    </>
  );
}

export default App;
