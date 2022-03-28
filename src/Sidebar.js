import { Button, IconButton } from '@mui/material'
import  Inbox  from '@mui/icons-material/Inbox';
import Sidebaroption from './Sidebaroption';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react'
import './Sidebar.css'
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/counter/mailSlice';
const Sidebar = () => { 
    const dispatch = useDispatch();
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon/>} fontSize="large" className='sidebar_compose' onClick={()=>dispatch(openSendMessage())}>COMPOSE</Button>
        <Sidebaroption Icon={Inbox} title="Inbox" number={10} selected={true}/>
        <Sidebaroption Icon={StarIcon} title="Stared" number={10}/>
        <Sidebaroption Icon={AccessTimeFilledIcon} title="Snoozed" number={10}/>
        <Sidebaroption Icon={LabelImportantIcon} title="Important" number={10}/>
        <Sidebaroption Icon={NearMeIcon} title="Sent" number={10}/>
        <Sidebaroption Icon={EventNoteIcon} title="Drafts" number={10}/>
        <Sidebaroption Icon={ExpandMoreIcon} title="More" number={10}/>

        <div className='sidebar_footer'>
            <div className='sidebar_footerIcons'>
    <IconButton>
        <PersonIcon/>
    </IconButton>

    <IconButton>
        <DuoIcon/>
        </IconButton>

    <IconButton>
        <PhoneIcon/>
        </IconButton>
        
            </div>
            </div>
        </div>
  )
}

export default Sidebar