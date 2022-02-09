
import React from 'react';
import {useEffect} from  'react';
import '../Styles/App.css';
import  HomeScreen from "./HomeScreen"
import Profile from "./Profile"
import {
   Switch,Route,
BrowserRouter as Router   } from  'react-router-dom';
import Login from './Login';
import { auth } from '../firebase';
import {useDispatch, useSelector} from  'react-redux';
import { login, logout,selectUser } from '../features/counter/userSlice';

    function App() {
    
      const user=useSelector(selectUser)
    //  const user =null
        const dispatch = useDispatch()
        useEffect(() => {
         const unsubsribed= auth.onAuthStateChanged(
              userauth =>{
                  if(userauth){//will be logged in
                        //console.log(userauth)
                        dispatch(login({
                            uid:userauth.uid,
                            email:userauth.email
                        }))
                  }else{//will be logged out
                          dispatch(logout())
                  }
              }
          )
          return unsubsribed
        }, [dispatch])
        return (
          <div className="app">
                  <Router>
//                       {
//                           !user?(<Login/>):
//                           (  
                             <Switch>
                          <Route  exact path="/">
                          <HomeScreen/>
                            </Route> 
//                             <Route  path="/profile">
//                                <Profile/>
//                               </Route>
                        </Switch>
//                           )
//                       }
                
                  </Router>
              
</div>
  );
}

export default App;
