import React from 'react'
import Homepage from './Homepage'
import { Link } from "react-router-dom";
const Fundraising = () => {
  return (
    <div>
        <div  className='lmfive'style={{fontSize:40,backgroundColor:'burlywood',height:100 }}>
            <center>
                <i>FUND ANYTHING</i>
            </center>
        </div>
        <div style={{fontSize:30}} className='lmfive'>
        <div  className='lmone'>
            <div>
                <i className='lmtwo'>School Fundraising</i><br/>
                <i className='lmthree'>Donate amount for tuition,school studies,etc..</i>
                <hr></hr>
            </div>
                <hr></hr>
            <div>
                <i className='lmtwo'>School Fundraising</i><br/>
                <i className='lmthree'>Donate amount for tuition,school studies,etc..</i>
                <hr/>
            </div>
        </div>
        <div className='lmone'>
            <div>
                <i className='lmtwo'>School Fundraising</i><br/>
                <i className='lmthree'>Donate amount for tuition,school studies,etc..</i>
                <hr/>
            </div>
            <hr/>
            <div>
                <i className='lmtwo'>School Fundraising</i><br/>
                <i className='lmthree'>Donate amount for tuition,school studies,etc..</i>
                <hr/>
            </div>
        </div>
        <div className='lmone'>
            <div>
                <i className='lmtwo'>School Fundraising</i><br/>
                <i className='lmthree'>Donate amount for tuition,school studies,etc..</i>
                <hr/>
            </div>
            <hr/>
            <div>
                <i className='lmtwo'>School Fundraising</i><br/>
                <i className='lmthree'>Donate amount for tuition,school studies,etc..</i>
                <hr/>
            </div>
        </div>
        <div className='lmone'>
            <div>
                <i className='lmtwo'>School Fundraising</i><br/>
                <i className='lmthree'>Donate amount for tuition,school studies,etc..</i>
            </div>
            <hr/>
            <div>
                <i className='lmtwo'>School Fundraising</i><br/>
                <i className='lmthree'>Donate amount for tuition,school studies,etc..</i>

            </div>
            </div>
        </div>
        <div className='lmsix'>
            <div className='lmsev'>
            <center>
            <i>
                Ready to get Started?
            </i>
            </center>
            </div>
            <div  className='lmnin'>
            <ul className='lmegt'> 
                <li className='lmten'>
                    <Link to="Donate">DONATE YOUR MONEY</Link>
                </li>
                <li className='lmten'>
                    <Link to="Request">REQUEST A DEMO</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Fundraising