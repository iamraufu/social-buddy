import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path='/about'>
           <About></About>
         </Route>
         <Route path='/dashboard'>
          <Dashboard></Dashboard>
         </Route>
         <Route path='/post/:id'>
           <PostDetail></PostDetail>
         </Route>
         <Route path='*'>
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
