import React from 'react'
import './SendMail.css'
import { Button } from '@mui/material'
import {useForm} from "react-hook-form"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/counter/mailSlice';
// import { db } from './firebase';
// import firebase from 'firebase';
const SendMail = () => {
const {register,handleSubmit} = useForm({mode:'onTouched'});

const dispatch=useDispatch();
 const onSubmit = (formData) =>
 { 
 console.log(formData);
// db.collection('emails').add(
//   {
//   to:formData.to,
//   subject: formData.subject,
//   message:formData.message,
//   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//   });
   dispatch(closeSendMessage());
 };
  return (
    <div className='sendMail'>
        <div className='sendMail_header'>
         <h3>New message</h3> 
         <CloseIcon className='sendMail_close' onClick={()=>dispatch(closeSendMessage())}/>
        </div>

         <form onSubmit={handleSubmit(onSubmit)} >
            <input type="email" { ...register("to" , {required:'To is Required!' })}  placeholder="To"/>
         
          <input type="text" { ...register("subject" , {required:'Subject is Required!'})}  placeholder="Subject"/>
            <input className="sendMail_message" type="text" { ...register("message" , {required:'Message is Required!'})}  placeholder="Message..."/>
            <div className='sendMail_options'>
            <Button className='sendMail_send ' variant="contained" color="primary" type="submit" >Send</Button>
           </div>
         </form> 
        </div>
  )
}

export default SendMail