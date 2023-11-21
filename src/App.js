import {Routes,Route} from "react-router-dom";
 import Homepage from "./Donation/Homepage";
 import Login from "./Donation/Login";
 import SignUp from "./Donation/SignUp";
 import "./Background.css";
 import "./Style.css";

import "./Style.css";
import Fundraising from "./Donation/Fundraising";

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="Login" element={<Login/>}></Route>
          <Route path="Signup" element={<SignUp/>}></Route> 
          <Route path="Fundraising" element={<Fundraising/>}></Route>
         </Routes> 
      </div>
     
  );
};


export default App;