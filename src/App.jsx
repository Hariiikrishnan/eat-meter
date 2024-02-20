import React,{useContext,useState} from 'react'
import "./styles/globalStyle.css"
import { BmiData } from "./context/BmiContext.jsx";
import { useParams,useNavigate } from "react-router-dom";


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


  return (
    <>
    <div className='d-flex-center d-col'>
      <div className='lbl-input'>

      <label>Weight</label>
      <input name="weight" placeholder='weight' onChange={handleChange}/>
      </div>

      <div className='lbl-input'>

      <label>Height</label>
      <input name="height" placeholder='height' onChange={handleChange}/>
      </div>

      <div className='lbl-input'>

      <label>Age</label>
      <input name="age" placeholder='age' onChange={handleChange}/>

      </div>
      <button onClick={calculateBMI}>Submit</button>
    </div>
    </>
  )
}

export default App
