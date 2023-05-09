import React from 'react'
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import BadgeProps from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import PersonPinIcon from '@mui/icons-material/PersonPin';
import TelegramIcon from '@mui/icons-material/Telegram';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import p1 from "./demoprofile.avif"
import "./Profile.css"


const Profile = () => {
  return (
    <>
    {/*<div className="logosearch" >
   <BedroomBabyIcon fontSize="large" style={{color:'blueviolet',fontSize:'4rem',position:'absolute',top:'0px',left:'0px'}}/>

   <div className="search" id="search" style={{position:'absolute',top:'.8rem',left:'5rem'}}>
    <input type="text" placeholder="Search here.."/>
    <div className="sicon" id="sicon">
      <SearchIcon fontSize="large" />

    </div>
   </div>
  </div>*/}
  <div className="searchbar">
    <div className="part1">  
    <BedroomBabyIcon style={{fontSize:'4rem'}}/>
    <div className="search">
    <input type="text" placeholder="Search here.."/>
    <div className="sicon" id="sicon">
      <SearchIcon fontSize="large" style={{fontSize:'3rem'}}/>

    </div>
    </div></div>
    <div className="part3" style={{color:'white',fontSize:'2.5rem'}}>
      
De liaison
    </div>
    <div className="part2">
      <div className="topbaricons">
        <div className="topbariconitems">
          <EventAvailableIcon  style={{fontSize:'2.3rem'}}/>
        </div>
        
         <div className="topbariconitems">
         <Badge color="secondary" badgeContent={1000} max={99}>
      <PersonPinIcon style={{fontSize:'2.3rem'}} />
    </Badge>
         </div>
         <div className="topbariconitems">
         <Badge color="secondary" badgeContent={1} max={99}>
      <TelegramIcon style={{fontSize:'2.3rem'}} />
    </Badge>
         </div>
         <div className="topbariconitems">
         <Badge color="secondary" badgeContent={1000} max={99}>
      <NotificationsActiveIcon  style={{fontSize:'2.3rem'}} />
    </Badge>
         </div>
         <div className="topbariconitems">
      <img src={p1} style={{height:'2.5rem',width:'2.5rem',borderRadius:'10rem',border:'1px solid aqua'}}/>
      </div>
      </div>
     
      
    </div>

  </div>
    </>
  )
}

export default Profile
