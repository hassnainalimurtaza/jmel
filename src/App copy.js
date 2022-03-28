import React from 'react';
// import { Counter } from './features/counter/Counter';
import Header from './Header.js';
import './App.css';
import  Sidebar  from './Sidebar.js';
import Mail from './Mail.js'
import SendMail from './SendMail.js'
import Emaillist from './Emaillist.js'
import Login from './Login.js'
import {login,selectUser} from './features/counter/userSlice'
import {selectsendMessageIsOpen} from './features/counter/mailSlice'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {auth} from './firebase'
import { useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';

function App() {
  // const sendMessageIsOpen=useSelector(selectsendMessageIsOpen);
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  // useEffect(()=>
  // {
  //   auth.onAuthStateChanged(user =>
  //     {
  //       if(user)
  //       {
  //         dispatch(login({
  //           displayName:user.displayName,
  //           email:user.email,
  //           photoUrl:user.photoURL
  //         }))
  //       }
  //       else
  //       {

  //       }
  //     })
  // },[])
  return (
    <Router>
      {
        !user ? (
          <Login/>
        ) : (
          <div className="App">
          <header className="App-header">
          <Header/>
          <div className='app_body'>
          <Sidebar/>
          <Routes>
          <Route path="/mail">
            {/* <Mail/> */}
            </Route>
    
            <Route path="/">
            <Emaillist/>
            </Route>
            <Route path="/Login">
            <Login/>
            </Route>
          </Routes>
          </div>
          {/*sendMessageIsOpen &&*/ <SendMail/>}
          </header>
    
        </div>
        )
      }
   
    </Router>
  );
}

export default App;
