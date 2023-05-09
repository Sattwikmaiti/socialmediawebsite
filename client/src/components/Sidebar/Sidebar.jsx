import React from 'react'
import "./Sidebar.css"
import p1 from "./demoprofile.avif"
import { Avatar,Badge,} from "@mui/material";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { styled } from '@mui/material/styles';
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const Sidebar = () => {
  return (
    <div>
     <div style={{backgroundColor:'rgb(245,255,250)',width:'25vw',height:'100vh'}}>
       <div className="drop">
           <div className="ic">
            
             <RssFeedIcon className="icon" style={{fontSize:'2.4rem', borderRadius:'0.5rem'}} />
             <span className="hover"> Feed</span>
           </div>
           <div className="ic">
             <RssFeedIcon className="icon" style={{fontSize:'2.4rem', borderRadius:'0.5rem'}} />  <span className="hover"> Feed</span>
           </div>
           <div className="ic">
             <RssFeedIcon className="icon" style={{fontSize:'2.4rem', borderRadius:'0.5rem'}}  /> <span className="hover"> Feed</span>
           </div>
           <div className="ic">
             <RssFeedIcon className="icon" style={{fontSize:'2.4rem', borderRadius:'0.5rem'}}  /> <span className="hover"> Feed</span>
           </div>
           <div className="ic">
             <RssFeedIcon className="icon" style={{fontSize:'2.4rem', borderRadius:'0.5rem'}}  /> <span className="hover"> Feed</span>
           </div>
           <div className="ic">
             <RssFeedIcon className="icon" style={{fontSize:'2.4rem', borderRadius:'0.5rem'}}  /> <span className="hover"> Feed</span>
           </div>
           <div className="ic">
             <RssFeedIcon className="icon" style={{fontSize:'2.4rem', borderRadius:'0.5rem'}}   /> <span className="hover"> Feed</span>
           </div>

       
      
      <div className="div" style={{backgroundColor:'black',height:'0.1rem'}}>
         
      </div>

      <div className="friendbadge" style={{borderTop:'1px solid black',borderBottom:'1px solid black',backgroundColor:'	darkslategray'}}>
        <center>
        <Diversity1Icon style={{fontSize:'2.4rem', borderRadius:'0.5rem',margin:'1rem',color:'white'}}  />
        <span style={{backgroundColor:'darkslategray',color:'white',padding:'0.4rem',borderRadius:'0.3rem'}}>Friends</span>
        </center>
      </div>
      <center>
      <div className="friends">
 <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src={p1} />
        }
      >
        <Avatar alt="Travis Howard" src={p1} />
      </Badge>
      <span>Sattwik Maiti</span>
      </div> <div className="friends">
 <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src={p1} />
        }
      >
        <Avatar alt="Travis Howard" src={p1} />
      </Badge>
      <span>Sattwik Maiti</span>
      </div> <div className="friends">
 <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src={p1} />
        }
      >
        <Avatar alt="Travis Howard" src={p1} />
      </Badge>
      <span>Sattwik Maiti</span>
      </div> <div className="friends">
 <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src={p1} />
        }
      >
        <Avatar alt="Travis Howard" src={p1} />
      </Badge>
      <span>Sattwik Maiti</span>
      </div>
      <div className="friends">
 <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src={p1} />
        }
      >
        <Avatar alt="Travis Howard" src={p1} />
      </Badge>
      <span>Sattwik Maiti</span>
      </div>
      <div className="friends">
 <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src={p1} />
        }
      >
        <Avatar alt="Travis Howard" src={p1} />
      </Badge>
      <span>Sattwik Maiti</span>
      </div>
      
      </center>
    


    </div>
    </div>
    </div>
  )
}

export default Sidebar
