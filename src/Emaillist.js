 import CheckBox from '@mui/icons-material/CheckBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import React, { useEffect ,useState } from 'react'
import './Emaillist.css'
import Section from './Section';
import EmailRow from './Emailrow'
// import { db } from './firebase';
const Emaillist = () => {
// const[emails,setEmails]=useState([]);

// useEffect(()=>{
//     db.collection('emails')
//     .orderBy('timestamp','desc')
//     .onSnapshot((snapshot) =>
//     setEmails(
//         snapshot.docs.map((doc)=>({
//         id: doc.id,
//         data: doc.data(),
//     })) 
//     )
// );
// }, []);

  return (
    <div className='emailList'>
         <div className='emailList_settings'>
<div className="emaillist_settingleft">
    <CheckBox/>
   <IconButton>
<ArrowDropDownIcon/>
    </IconButton>
    <IconButton>
    <RedoIcon/>
    </IconButton>
    <IconButton>
    <MoreVertIcon/>
    </IconButton>
    </div>
   <div className='emailList_sections'>
           <Section Icon={InboxIcon} title='Primary' color='red' selected/>
            <Section Icon={PeopleIcon} title='Social' color='#1A73E8'/>
            <Section Icon={LocalOfferIcon} title='Promotions' color='green'/>
        </div>
        <div className='emaillist_settingsright'>
<IconButton>
<ChevronLeftIcon/>
</IconButton>
<IconButton>
<ChevronRightIcon/>
</IconButton>
<IconButton>
<KeyboardHideIcon/>
</IconButton>
<IconButton>
<SettingsIcon/>
</IconButton>
        </div>
        </div> 
         <div className='emailList_list'>
          
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Youtube" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="10pm"/>
         </div> 
           
         </div>
  )
}

export default Emaillist