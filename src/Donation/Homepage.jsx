import React from 'react'
import { Link } from "react-router-dom";
// import {Download} from "./download.jpg";
import Fundraising from './Fundraising';
import { Button } from "@mui/material";
const Homepage = () => {
  return (
    <div>
    <div className='Nav'>
      <h1 className="Name" ><i>donoFundz</i></h1>
      <h4>
      <ul>
          <li>
              <Link to='Fundraising'>Learn more</Link>
          </li>
          <li>
              <Link to="">HOME</Link> 
          </li>
          <li>
              <Link to="Login">LOGIN</Link>
          </li>
          <li>
              <Link to="Signup">SIGNUP</Link>
          </li>
      </ul>
      </h4>
    </div>
    <div>
      <ul className='sec'> 
        <li>
          <div style={{width:500,left:60,fontStyle:'unset',fontSize:23,color:'brown'}}>
            <p>
              <h1>
    
              Next<br/> Generation <br/>Crowdfunding<br/> for Positive<br/> Impact
              </h1>
              <h4>
              donoFundz platform<br/> makes crowdfunding and<br/> online fundraising easy,fast <br/>
              and effective for you.<br/> 0% platform fee.
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
      <h2>True and Powerful online Fundraising Platform</h2><br/>
      <h4>Proven, multi-purpose crowdfunding technology for effective organizational and individual fundraising</h4>
      </center>
    </div>
    <div className='help' style={{height:200, fontSize:20,fontStyle:'revert',backgroundColor:'blanchedalmond'}}>
      <center>
        <p>
          <h2>
          Your success is our success.<br/>That's why we are so committed to help you.
          </h2>
        </p>
      </center>
    </div>
    <div className='th'>
      <ul  className='imag'>
        <li className='ima'>
          <img  className='three' src="https://static.fundrazr.com/wp-content/uploads/2020/02/4-150x150.jpg"></img><br/>
          <b>School Fundraising</b><br/>
          
        </li>
        <li className='ima'>
          <img  className='three' src="https://static.fundrazr.com/wp-content/uploads/2020/06/personal-fundraising_1.jpg"></img><br/>
          <b>Personal Fundraising</b>
        </li>
        <li className='ima'>
          <img  className='three' src="https://static.fundrazr.com/wp-content/uploads/2020/04/14.png"></img><br/>
          <b>Sports Fundraising</b>
        </li>
        <li className='ima'>
          <img  className='three' src="https://static.fundrazr.com/wp-content/uploads/2020/06/nonprofit-fundraising.jpg"></img><br/>
          <b>Nonprofits and Charities</b>
        </li>
      </ul>
    </div>
    <div style={{right:'30px' , left:'40px'}}>
      <ul className='cntwo'>
        <li>
          <img className='three' src="https://static.fundrazr.com/wp-content/uploads/2020/06/corporate-social-responsibility-fundraising.jpg"></img><br/>
          <b>Corporate Social<br/> &emsp;Responsibility</b>
        </li>
        <li>
          <img className='three' src="https://static.fundrazr.com/wp-content/uploads/2020/06/animal-fundraising.jpg"></img><br/>
          <b>Animal Fundraising</b>
        </li>
        <li>
          <img className='three' src="https://static.fundrazr.com/wp-content/uploads/2020/06/social-enterprises.jpg"></img><br/>
          <b>Social Enterprises</b>
        </li>
        <li>
          <img className='three' src="https://static.fundrazr.com/wp-content/uploads/2020/06/whitelabel.jpg"></img><br/>
          <b>Crowdfunding as a Service</b>
        </li>
      </ul>
    </div>
    <div>
      <hr/>
      <div className='foottwo'><center><b>Follow us!</b></center>
        <ul className='footone'>
          <li>
            <img className='foot' src="https://fundrazr.com/wp-content/uploads/2019/12/fb.jpg"></img>
          </li>
          <li>
            <img className='foot'src="https://fundrazr.com/wp-content/uploads/2019/12/inst64.png"></img>
          </li>
          <li>
            <img className='foot'src="https://fundrazr.com/wp-content/uploads/2019/12/tw.jpg"></img>
          </li>
          <li>
            <img className='foot'src="https://fundrazr.com/wp-content/uploads/2019/12/li.jpg"></img>
          </li>
          <li>
            <img className='foot'src=""></img>
          </li>
        </ul>
        <hr/>
        <ul className='ft'>
          <li>Support
          </li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
        <p><center>Copyright ©2009-2023 ConnectionPoint Systems Inc. (CPSI) · FundRazr® and the FundRazr® logo are registered trademarks of CPSI.</center></p>
      </div>
    </div>
    </div>
   
  )
}

export default Homepage