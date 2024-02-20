import React,{useContext,useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import { useParams,useNavigate } from "react-router-dom";
import BmiContext, { BmiData } from "./context/BmiContext.jsx";
import UnderWeightScreen from './underWeightScreen.jsx';
import NormalWeightScreen from './normalWeightScreen.jsx';
import Obese1WeightScreen from './obese1WeightScreen.jsx';

import { BrowserRouter, Routes, Route  } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BmiContext>
    <BrowserRouter>
        <Routes>

    
      
          
      <Route path="/" element={<App/>} />
      <Route path="/underWeight" element={<UnderWeightScreen/>} />
      <Route path="/normal" element={<NormalWeightScreen/>} />
      <Route path="/obese1" element={<Obese1WeightScreen/>} />
    {/* <App /> */}
            
        </Routes>
        </BrowserRouter>
    </BmiContext>
  </React.StrictMode>,
)
