import {Routes,Route} from "react-router-dom";
 import Homepage from "./Donation/Homepage";
 import Login from "./Donation/Login";
 import SignUp from "./Donation/SignUp";
 import "./Background.css";
import "./Style.css";
import Fundraising from "./Donation/Fundraising";
import Page from "./Donation/Page";
import AuthReducer from "./Donation/AuthReducer";
import { useReducer} from "react";
import Donate from "./Donation/Donate";
import Donatetwo from "./Donation/Donatetwo";
import { AuthContext } from "./Donation/AuthContext";
import Axi from "./Donation/Axi";
import Raisefund from "./Donation/Raisefund";
import Raisetwo from "./Donation/Raisetwo";
import Aboutus from "./Donation/Aboutus";
const {Provider}=AuthContext;


 const App = () => {
 const [user, dispatch] = useReducer(AuthReducer, null);

  return (
      <div>
        
         <Provider value={{ user, dispatch }}>

        <Routes>
          <Route path="/" element={<Page/>}></Route>
          <Route path="Login" element={<Login/>}></Route>
          <Route path="Signup" element={<SignUp/>}></Route> 
          <Route path="Fundraising" element={<Fundraising/>}></Route>
          <Route path="Donate" element={<Donate/>}></Route>
          <Route path="Raisefund" element={<Raisefund/>}></Route>
          <Route path="Donatetwo" element={<Donatetwo/>}></Route>
          <Route path="Raisetwo" element={<Raisetwo/>}></Route>
         </Routes> 
         </Provider>
        
      

      </div>
      //  <Axi/> 
     
  );
};
export default App