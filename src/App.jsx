import React,{useContext,useEffect,useState} from 'react'
import "./styles/globalStyle.css"
import { BmiData } from "./context/BmiContext.jsx";
import { useParams,useNavigate } from "react-router-dom";
import ChatBot from './chatBot.jsx';
import "./styles/bmicalc.css";


function App() {
  const [count, setCount] = useState(0);
  const [data,setData] = useState();
  const {bmiData} = useContext(BmiData);
  const [bmi,setBmi] = bmiData;

  const navigate = useNavigate();

  function calculateBMI(){
    // console.log(data);
    var bmi = Number(data.weight) / Number(data.height/100 * data.height/100);
    console.log(data.weight);
    console.log(bmi);
    setBmi(bmi);
     if (bmi>18.5 && bmi<24.9) {
          navigate("/normal");
          } else if (bmi<18.5) {
                navigate("/underWeight");
          } else if (bmi>25) {
            navigate("/obese1");
          }
    
  }

  function handleChange(e) {
    const { value, name } = e.target;

    setData((prevLedger) => {
      return { ...prevLedger, [name]: value };
    });
  }

  // const axios = require('axios');

  // Set your OpenAI API key
  // const apiKey = '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';
 
  return (
    <>
    <div className='bmi-calc'>

    <div className="header d-flex-center">
            <img src="images/eat_logo.jpg" />
            <h1>Eatmeter</h1>
        </div>

    <div className='d-flex-center d-col container'>

    <h1>Check Your plan right here!</h1>
      <div className='lbl-input'>

      <label>Enter Weight : </label>
      <input name="weight" placeholder='Weight' autoComplete='off'  onChange={handleChange}/>
      </div>

      <div className='lbl-input'>

      <label>Enter Height : </label>
      <input name="height" placeholder='Height' autoComplete='off' onChange={handleChange}/>
      </div>

      <div className='lbl-input'>

      <label>Enter Age : </label>
      <input name="age" placeholder='Age' autoComplete='off' onChange={handleChange}/>

      </div>
      <button onClick={calculateBMI}>Submit</button>
    </div>

    </div>
    {/* <ChatBot/> */}
    </>
  )
}

export default App
