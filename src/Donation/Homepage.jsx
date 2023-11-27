import React from 'react'
import { Link } from "react-router-dom";
// import {Download} from "./download.jpg";
import Fundraising from './Fundraising';
import { Button, Icon } from "@mui/material";
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import {Grid} from '@mui/material';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { Instagram, YouTube,Twitter,LinkedIn,Facebook } from '@mui/icons-material';
import {useContext} from "react";
import {AuthContext} from "./AuthContext";
// import FundraisingCategory from './FundraisingCategory';
// import Imagecomponent from './Imagecomponent';
import FundraisingCategory from './FundraisingCategory';
const Homepage = () => {

  const {user} = useContext(AuthContext);
  return (
    <div >
    <div  className='Col'>
      {/* {user===null ? "Oops!":"Welcome"+user} */}
      <ul className='sec'> 
        <li>
          <div style={{width:500,left:80,fontStyle:'unset',fontSize:23,color:'darkslateblue'}}>
            <p>
              <br/>
              <h1>
    
              Next Generation <br/>Crowdfunding for Positive Impact
              </h1>
              <h4>
              donoFundz platform makes crowdfunding and  online fundraising easy,fast <br/>
              and effective for you.<br/> 0% platform fee.<br/>
              When thinking of fundraising, it's important to remember the i's stand for innovation and inspiration, not impossible.
              </h4>
            </p>
            </div>
        </li>
        <li>
          <img src="https://i0.wp.com/blog.airfunding.net/wp-content/uploads/2019/10/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7-2019-10-04-%E4%B8%8B%E5%8D%881.22.25.png?resize=1024%2C623&ssl=1"></img>
        </li>
      </ul>
    </div>
    <div className='white'>
      <center>
      <h2>“True and Powerful online Fundraising Platform” </h2><br/>
      <h4>Proven, multi-purpose crowdfunding technology for effective organizational and individual fundraising</h4>
      </center>
    </div>
   
    <div className='pic'>
      <img style={{height:600,width:700}}src="https://static.fundrazr.com/wp-content/uploads/2020/06/online-fundraising-platform-free.jpg"></img>
      {/* <img src="https://blog.i2mf.in/wp-content/uploads/2022/10/istockphoto-1270939459-612x612-1.jpg"></img> */}
    </div>
    
    {/* <Card sx={{ maxWidth: 340}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image="https://thumbs.dreamstime.com/z/donate-button-shows-charity-donations-fundraising-showing-donation-32065799.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image="https://thumbs.dreamstime.com/z/donate-button-shows-charity-donations-fundraising-showing-donation-32065799.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}
   <Grid container spacing={3} padding={10} style={{backgroundColor:"aliceblue"}}>
      {/* First Card */}
      <Grid item xs={6} sm={8}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea >
            <CardMedia
              component="img"
              height="50"
              src="https://tse1.mm.bing.net/th?id=OIP.3_lrJzzbcVOg2Iefo3yD6QHaG1&pid=Api&P=0&h=220"
              display="flex"
              style={{ objectFit: "cover",height:300 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <center>
                <Link to="/Raisefund">
              <Button>
              RAISE FUND
              </Button>
              </Link>
            </center>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      
      {/* Second Card */}
      <Grid item xs={12} sm={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src="https://tse1.mm.bing.net/th?id=OIP.3_lrJzzbcVOg2Iefo3yD6QHaG1&pid=Api&P=0&h=220"
              style={{ objectFit: "cover" ,height:300}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <center>
                <Link to="/Donate">
              <Button>
              DONATE
              </Button>
              </Link>
            </center>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
  
      </Grid>
     <div className='th'>
        <ul className='imag'>
          <FundraisingCategory
            imageSrc="https://static.fundrazr.com/wp-content/uploads/2020/02/4-150x150.jpg"
            categoryTitle="School Fundraising"
          />
          <FundraisingCategory
            imageSrc="https://static.fundrazr.com/wp-content/uploads/2020/06/personal-fundraising_1.jpg"
            categoryTitle="Personal Fundraising"
          />
          <FundraisingCategory
            imageSrc="https://static.fundrazr.com/wp-content/uploads/2020/04/14.png"
            categoryTitle="Sports Fundraising"
          />
          <FundraisingCategory
            imageSrc="https://static.fundrazr.com/wp-content/uploads/2020/06/nonprofit-fundraising.jpg"
            categoryTitle="Nonprofits and Charities"
          />
        </ul>
      </div>

      {/* ... (your existing code) */}

      {/* Additional fundraising categories */}
      <div style={{ right: '30px', left: '40px' }}>
        <ul className='cntwo'>
          <FundraisingCategory
             
            imageSrc="https://static.fundrazr.com/wp-content/uploads/2020/06/corporate-social-responsibility-fundraising.jpg"
            categoryTitle="Corporate Social Responsibility"
            
          ></FundraisingCategory>
          <FundraisingCategory
            imageSrc="https://static.fundrazr.com/wp-content/uploads/2020/06/animal-fundraising.jpg"
            categoryTitle="Animal Fundraising"
          />
          <FundraisingCategory
            imageSrc="https://static.fundrazr.com/wp-content/uploads/2020/06/social-enterprises.jpg"
            categoryTitle="Social Enterprises"
          />
          <FundraisingCategory
            imageSrc="https://static.fundrazr.com/wp-content/uploads/2020/06/whitelabel.jpg"
            categoryTitle="Crowdfunding as a Service"
          />
        </ul>
      </div>


   {/* <Card>
    <CardMedia style={{sx:1}}>
      <img src="https://static.fundrazr.com/wp-content/uploads/2020/02/4-150x150.jpg"></img>
      <img src="https://static.fundrazr.com/wp-content/uploads/2020/02/4-150x150.jpg"></img>
    </CardMedia>
   </Card>
    
    <Box>
   <img src="https://static.fundrazr.com/wp-content/uploads/2020/02/4-150x150.jpg"></img>
      <img src="https://static.fundrazr.com/wp-content/uploads/2020/02/4-150x150.jpg"></img>
   <img src="https://static.fundrazr.com/wp-content/uploads/2020/02/4-150x150.jpg"></img>
      <img src="https://static.fundrazr.com/wp-content/uploads/2020/02/4-150x150.jpg"></img>
      
    </Box>
     */}
     
    <div>
      <hr/>
      <div><center><b>Follow us!</b></center>
        <ul className='footone'>
          <li>
            <Link to="https://www.instagram.com/?hl=en">
            <Icon><Instagram/></Icon>
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/">
            <Icon><Facebook/></Icon>
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/i/flow/login">
            <Icon><Twitter/></Icon>
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/uas/login">
              <Icon><LinkedIn/></Icon>
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/playlist?list=PL0JNv-2mGIY4UwgvWG0L55LfjqkdRPnT3">
              <Icon><YouTube/></Icon>
            </Link>
          </li>
        </ul>
        <hr/>
        <ul className='ft'>
          <li>Support
          </li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
        <p><center>Copyright ©2015-2029 ConnectionPoint Systems Inc. (CPSI) · donoFundz® and the donoFundz® logo are registered trademarks of CPSI.</center></p>
      </div>
    </div>
    </div>
   
  )
}

export default Homepage