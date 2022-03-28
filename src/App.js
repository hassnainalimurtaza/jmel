import React from 'react';
import Header from './Header.js';
import  Sidebar  from './Sidebar.js';
import {selectsendMessageIsOpen} from './features/counter/mailSlice'
import SendMail from './SendMail.js'
import Emaillist from './Emaillist.js'
import Mail from './Mail.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { useSelector} from 'react-redux';

function App() {
  const sendMessageIsOpen=useSelector(selectsendMessageIsOpen);
  return (
    <div className="app">
      <div className="App-header">
          <Header/>
          <div className='app_body'>
          <Sidebar/>
          <Router>
          <Routes>
          <Route path="/" element={<Emaillist/>} /> 
          <Route path="/mail" element={<Mail/>} /> 
          
           {/* { sendMessageIsOpen && <Route path="/send" element={<SendMail/>} />} */}
          {/* <Route path="/login" element={<Login/>} />  */}
          </Routes>
          {sendMessageIsOpen && <SendMail/>}
           </Router>
           </div>
     
      {/* <SendMail/> */}
      </div>
     
    </div>
    
  );
}

export default App;
