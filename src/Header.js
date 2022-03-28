import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/icons-material/AccountCircle';
// import { useDispatch, useSelector } from 'react-redux';
// import { auth } from './firebase';
// import { selectUser,logout } from './features/counter/userSlice';
const Header = () => {
    // const user=useSelector(selectUser);
    // const dispatch=useDispatch();
    // const signOut = () =>
    // {
    // auth.signOut().then(()=>
    // {
    //     dispatch(logout())
    // })
    // }
  return (
    <div className="header"> 
    <div className="header_left">
<IconButton>
    <MenuIcon/>
</IconButton>
<img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="gmailIcon"/>
    </div>
<div className="header_middle">
    <IconButton>
    <SearchIcon/>
    </IconButton>
<input placeholder="Search mail" type="text"/>
<ArrowDropDown className='header_inputCaret'/>
</div>
<div className="header_right">
<IconButton>
    <AppsIcon/>
</IconButton>
<IconButton>
    <NotificationsIcon/>
</IconButton>
{/* <Avatar onClick={signOut} src={user?.photoUrl}/> */}
<Avatar/>
    </div>
</div>
   
  )
}

export default Header