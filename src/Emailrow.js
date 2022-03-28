 import React from 'react'
 import "./Emailrow.css"
 import CheckBox from '@mui/icons-material/CheckBox';
 import StarBorderIcon from '@mui/icons-material/StarBorder';
 import LabelImportantIcon from '@mui/icons-material/LabelImportant';
 import { IconButton } from '@mui/material'
 import {useNavigate} from 'react-router-dom' 
import { useDispatch } from 'react-redux';
import {selectMail} from './features/counter/mailSlice'

 function Emailrow ({id,title,subject,description ,time})
     {
        const history=useNavigate();
        const dispatch=useDispatch();
         const openMail = () =>
         {
         dispatch(selectMail({id,title,subject,description,time})
       );
        history("/mail");
         };
   return (
     <div onClick={openMail} className='emailrow'>
   <div className="emailrow_options">
       <CheckBox/>
       
       <IconButton>
           <StarBorderIcon/>
       </IconButton>

       <IconButton>
           <LabelImportantIcon/>
       </IconButton>
       </div>
       <h3 className="emailrow_title">
        {title}
       </h3>
       <div className="emailrow_message">
        <h4>{subject}{" "}
        <span className="emailrow_description">-
            {description}
            </span>
        </h4>
       </div>
       <p className="emailrow_time">
               {time}
               </p>          
               </div>
   )
 }
 
 export default Emailrow