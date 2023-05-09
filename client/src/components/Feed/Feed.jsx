import React from "react";
import "./Feed.css";
import Card from "@mui/material/Card";
import Badge from '@mui/material/Badge';
import BadgeProps from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CardActions from "@mui/material/CardActions";
import CommentIcon from '@mui/icons-material/Comment';
import CardContent from "@mui/material/CardContent";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import p1 from "./demoprofile.avif";
import { CardHeader,Avatar,CardMedia  } from "@mui/material";
import p2 from "./me.mp4"
const Feed = () => {
  return (
    <>
      <div className="enter"
        style={{
          backgroundColor: "ghostwhite",
          width: "40vw",
          height: "auto",
         margin: "1.5rem"
        }}
      >
        
        <Card sx={{ minWidth: 275 }} >
        
          <CardContent >
            <img
              src={p1}
              style={{
                height: "2.5rem",
                width: "2.5rem",
                borderRadius: "10rem",
                border: "1px solid aqua",
                margin: "0.7rem",
              }}
            />
<center>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" >
                <input type="text" placeholder="Whats up your mind.."  style={{border:"none",outline:"none",borderBottom:'1px solid black',width:'30vw',overflowX:'scroll',marginTop:'0.34rem'}}/>
                
            </Typography>
            <Typography variant="body2" style={{display:'flex',justifyContent:'space-around',}}>
              <div className="1"><PermMediaIcon style={{fontSize:'2.0rem'}}/> <span style={{fontSize:'1rem',}}>Photos</span></div>
              <div className="1"><LocationOnIcon style={{fontSize:'2.0rem'}}/><span style={{fontSize:'1rem',}}>Location</span></div>
             <div className="1"><LocalOfferIcon style={{fontSize:'2.0rem'}}/><span style={{fontSize:'1rem',}}>Tag</span></div> 
             <div className="1"><AddReactionIcon style={{fontSize:'2.0rem'}}/><span style={{fontSize:'1rem',}}>Emotion</span></div> 
            </Typography>
            </center>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
          </CardActions>
        
        </Card>
        
      </div>
      
      <div className="feeds">
      <div className="feeditem" style={{border:'0.12px solid grey',boxShadow:''}}>
            <Card sx={{ maxWidth:"40rem",minHeight:'15rem'}}>
              <CardHeader  sx={{maxHeight:'10rem'}}
               avatar={
                <Avatar sx={{ bgcolor: "red",zIndex:"1" }} aria-label="recipe">
                  R
                </Avatar>

                    }
              
              title="Shrimp and Chorizo Paella"
        subheader="September 14, 1516"/>
        <CardMedia
        component="img"
        height="600"
        image={p1}
        alt="Paella dish"
        
      /> <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions style={{display:'flex',justifyContent:'space-between'}}>
        <div className="popular" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div className="likes" style={{margin:'0.5rem'}}>
                    <Badge badgeContent={100} max={9}>
                      <ThumbUpIcon  />
                    </Badge>
              </div>
              <div className="hearts"   style={{margin:'0.5rem'}}>
              <Badge badgeContent={100} max={9}>
                      <FavoriteIcon  />
                    </Badge>
              </div>
        </div>

        <div className="gainpopularity" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <ShareIcon  />
                    </Badge>
          </div>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <CommentIcon  />
                    </Badge>
          </div>
        </div>

    </CardActions>
            </Card>
        </div>
        <div className="feeditem" style={{border:'0.12px solid grey',boxShadow:''}}>
            <Card sx={{ maxWidth:"40rem",minHeight:'15rem'}}>
              <CardHeader  sx={{maxHeight:'10rem'}}
               avatar={
                <Avatar sx={{ bgcolor: "red",zIndex:"1" }} aria-label="recipe">
                  R
                </Avatar>

                    }
              
              title="Shrimp and Chorizo Paella"
        subheader="September 14, 1516"/>
        <CardMedia
        component="img"
        height="600"
        image={p1}
        alt="Paella dish"
        
      /> <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions style={{display:'flex',justifyContent:'space-between'}}>
        <div className="popular" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div className="likes" style={{margin:'0.5rem'}}>
                    <Badge badgeContent={100} max={9}>
                      
                      <ThumbUpIcon  />
                    </Badge>
              </div>
              <div className="hearts"   style={{margin:'0.5rem'}}>
              <Badge badgeContent={100} max={9}>
                      <FavoriteIcon  />
                    </Badge>
              </div>
        </div>

        <div className="gainpopularity" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <ShareIcon  />
                    </Badge>
          </div>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <CommentIcon  />
                    </Badge>
          </div>
        </div>

    </CardActions>
            </Card>
        </div>
        
        <div className="feeditem" style={{border:'0.12px solid grey',boxShadow:''}}>
            <Card sx={{ maxWidth:"40rem",minHeight:'15rem'}}>
              <CardHeader 
               avatar={
                <Avatar sx={{ bgcolor: "red",zIndex:"1" }} aria-label="recipe">
                  R
                </Avatar>

                    }
              
              title="Shrimp and Chorizo Paella"
        subheader="September 14, 1516"/>
        <CardMedia
        component="video"
        height="500"
        src={p2}
        alt="Paella dish"
        autoPlay
        controls
      /> <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions style={{display:'flex',justifyContent:'space-between'}}>
        <div className="popular" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div className="likes" style={{margin:'0.5rem'}}>
                    <Badge badgeContent={100} max={9}>
                      <ThumbUpIcon  />
                    </Badge>
              </div>
              <div className="hearts"   style={{margin:'0.5rem'}}>
              <Badge badgeContent={100} max={9}>
                      <FavoriteIcon  />
                    </Badge>
              </div>
        </div>

        <div className="gainpopularity" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <ShareIcon  />
                    </Badge>
          </div>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <CommentIcon  />
                    </Badge>
          </div>
        </div>

    </CardActions>
            </Card>
        </div>

        <div className="feeditem" style={{border:'0.12px solid grey',boxShadow:''}}>
            <Card sx={{ maxWidth:"40rem",minHeight:'15rem'}}>
              <CardHeader  sx={{maxHeight:'10rem'}}
               avatar={
                <Avatar sx={{ bgcolor: "red",zIndex:"1" }} aria-label="recipe">
                  R
                </Avatar>

                    }
              
              title="Shrimp and Chorizo Paella"
        subheader="September 14, 1516"/>
        <CardMedia
        component="img"
        height="600"
        image={p1}
        alt="Paella dish"
        
      /> <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions style={{display:'flex',justifyContent:'space-between'}}>
        <div className="popular" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div className="likes" style={{margin:'0.5rem'}}>
                    <Badge badgeContent={100} max={9}>
                      <ThumbUpIcon  />
                    </Badge>
              </div>
              <div className="hearts"   style={{margin:'0.5rem'}}>
              <Badge badgeContent={100} max={9}>
                      <FavoriteIcon  />
                    </Badge>
              </div>
        </div>

        <div className="gainpopularity" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <ShareIcon  />
                    </Badge>
          </div>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <CommentIcon  />
                    </Badge>
          </div>
        </div>

    </CardActions>
            </Card>
        </div>
        <div className="feeditem" style={{border:'0.12px solid grey',boxShadow:''}}>
            <Card sx={{ maxWidth:"40rem",minHeight:'15rem'}}>
              <CardHeader 
               avatar={
                <Avatar sx={{ bgcolor: "red",zIndex:"1" }} aria-label="recipe">
                  R
                </Avatar>

                    }
              
              title="Shrimp and Chorizo Paella"
        subheader="September 14, 1516"/>
        <CardMedia
        component="video"
        height="500"
        src={p2}
        alt="Paella dish"
        autoPlay
        controls
      /> <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions style={{display:'flex',justifyContent:'space-between'}}>
        <div className="popular" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div className="likes" style={{margin:'0.5rem'}}>
                    <Badge badgeContent={100} max={9}>
                      <ThumbUpIcon  />
                    </Badge>
              </div>
              <div className="hearts"   style={{margin:'0.5rem'}}>
              <Badge badgeContent={100} max={9}>
                      <FavoriteIcon  />
                    </Badge>
              </div>
        </div>

        <div className="gainpopularity" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <ShareIcon  />
                    </Badge>
          </div>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <CommentIcon  />
                    </Badge>
          </div>
        </div>

    </CardActions>
            </Card>
        </div>
        <div className="feeditem" style={{border:'0.12px solid grey',boxShadow:''}}>
            <Card sx={{ maxWidth:"40rem",minHeight:'15rem'}}>
              <CardHeader 
               avatar={
                <Avatar sx={{ bgcolor: "red",zIndex:"1" }} aria-label="recipe">
                  R
                </Avatar>

                    }
              
              title="Shrimp and Chorizo Paella"
        subheader="September 14, 1516"/>
        <CardMedia
        component="video"
        height="500"
        src={p2}
        alt="Paella dish"
        autoPlay
        controls
      /> <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions style={{display:'flex',justifyContent:'space-between'}}>
        <div className="popular" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div className="likes" style={{margin:'0.5rem'}}>
                    <Badge badgeContent={100} max={9}>
                      <ThumbUpIcon  />
                    </Badge>
              </div>
              <div className="hearts"   style={{margin:'0.5rem'}}>
              <Badge badgeContent={100} max={9}>
                      <FavoriteIcon  />
                    </Badge>
              </div>
        </div>

        <div className="gainpopularity" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <ShareIcon  />
                    </Badge>
          </div>
          <div className="share"  style={{margin:'0.5rem'}}>
          <Badge badgeContent={100} max={9}>
                      <CommentIcon  />
                    </Badge>
          </div>
        </div>

    </CardActions>
            </Card>
        </div>
      
      </div>
    </>
  );
};

export default Feed;
