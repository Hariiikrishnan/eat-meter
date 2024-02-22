import React,{useContext,useEffect,useState} from 'react'
import "./styles/globalStyle.css"
import { BmiData } from "./context/BmiContext.jsx";
import { useParams,useNavigate } from "react-router-dom";
import ChatBot from './chatBot.jsx';
import "./styles/bmicalc.css";


function SugarLvlScreen() {
  const [count, setCount] = useState(0);
  const [data,setData] = useState();
  const {bmiData} = useContext(BmiData);
  const [bmi,setBmi] = bmiData;

  const navigate = useNavigate();


  function handleChange(e) {
    const { value, name } = e.target;

    setData((prevLedger) => {
      return { ...prevLedger, [name]: value };
    });
  }

  function handleSubmit(){
    // console.log(data.sugarLvl);
    // const lvl = Number(data.sugarLvl);
    // console.log(lvl);
    if(data.sugarLvl>120 && data.sugarLvl<140){
        console.log("normal")
        navigate("/normalSugar");
    }
    else if(data.sugarLvl>140 && data.sugarLvl<160){
        console.log("impaired glucose")
        navigate("/impairedGlucose");
    }
    else if(data.sugarLvl>200){
        console.log("diabetic");
        navigate("/diabetics");
    }
  }

 
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

      <label>Enter Sugar Level : </label>
      <input name="sugarLvl" placeholder='Sugar Level' autoComplete='off'  onChange={handleChange}/>
      </div>

     
      <button onClick={handleSubmit}>Submit</button>
    </div>

    </div>
    {/* <ChatBot/> */}
    </>
  )
}

export default SugarLvlScreen;
