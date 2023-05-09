import React from 'react'
import "./Trending.css"
import p1 from "./birthday.jpg"
import p2 from "./poster.jpg"
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const Trending = () => {
  return (
    <div style={{backgroundColor:'mintcream',width:'30vw',height:'100vh'}}>
       <div className="birth" style={{width:'25rem'}}> <img src={p1} style={{height:'3rem'}}/>
        <span style={{fontSize:'1rem',fontFamily:"sans-serif,cursive"}}><span style={{color:'steelblue'}}>Upendrokishore Raychowdhury </span> and <span style={{color:'steelblue'}}>5 others</span> have their birthday today. </span>
        
        
        </div>


 <img src={p2} style={{height:'60%',width:'100%',marginTop:'1rem',marginBottom:'1rem'}}/>
 <center style={{borderBottom:'1px solid grey',color:'white',fontWeight:'bold',backgroundColor:'lightskyblue'}}>ONLINE</center>
  <div className="drops">
<div className="online">
  
  <div className="friend" style={{margin:'1rem'}}>

  <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={p1} />
      </StyledBadge> <span style={{margin:'1.5rem'}}>Sattwik Maiti</span>
      </div>
      <div className="friend" style={{margin:'1rem'}}>

  <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={p1} />
      </StyledBadge> <span style={{margin:'1.5rem'}}>Sattwik Maiti</span>
      </div>
      <div className="friend" style={{margin:'1rem'}}>

  <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={p1} />
      </StyledBadge> <span style={{margin:'1.5rem'}}>Sattwik Maiti</span>
      </div>
      <div className="friend" style={{margin:'1rem'}}>

  <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={p1} />
      </StyledBadge> <span style={{margin:'1.5rem'}}>Sattwik Maiti</span>
      </div>
      <div className="friend" style={{margin:'1rem'}}>

  <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={p1} />
      </StyledBadge> <span style={{margin:'1.5rem'}}>Sattwik Maiti</span>
      </div>
      </div>
</div>
     
        

           </div>
  )
}

export default Trending
