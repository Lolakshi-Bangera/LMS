import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/Admin/AdminPage";
import MentorPage from "./components/Mentor/MentorPage";
import Registration from "./components/Employee/Registration";
// import DataComponent from './components/DataComponent';
// import DataComponet2 from './components/DataComponet2';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// (function AppTw() {

//   let a=b=c=5;

//   return (
//     <div></div>
//   )
// })()
// console.log(typeof a!=="undefined")
//   console.log(typeof b!=="undefined")

function App() {
  // const [state,setState]=useState(true)

  // var a=b=c=5;
  // console.log("========");
  // console.log(typeof a!=="undefined")
  // console.log(typeof b!=="undefined")
  // console.log("========");

  return (
   
      <div className="App">
         <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          {/* <Route path="/mentor/*" element={<MentorPage />} />
          <Route path="/employee/*" element={<Registration />} /> */}
        </Routes>

        {/* {state?<DataComponent setState={setState}/>:<DataComponet2 setState={setState}/>} */}
        </BrowserRouter>
      </div>
    
  );
}

export default App;
