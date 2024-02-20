import React,{useContext,useState,useEffect} from 'react'
import "./styles/globalStyle.css";
import { useParams,useNavigate } from "react-router-dom";
import { BmiData } from "./context/BmiContext.jsx";
// import underweight from  "./dataset/underweight.json";
// import obese1 from  "./dataset/obese1.json";
import normal from  "./dataset/normal.json";

function NormalWeightScreen(){

    const {bmiData} = useContext(BmiData);
    const [bmi,setBmi] = bmiData;

    const [loading,setLoading] = useState(false);
    const [planData,setPlanData] = useState();
    var data; 
 
   
    return <>
  {
    !loading ?
    // <p>{data.category}</p>
    <div>

        <h1>BMI : {bmi}</h1>
        <h3>
           Category: {normal.category}
        </h3>
        <h3>
        Category's range : {normal.bmiRange}
        </h3>

    <p>Recommendations:</p>
    <ul>
      {
          normal.dietPlan.recommendations.map((one)=>{
              return <li>{one}</li>
            })
            
        }
        </ul>

        </div> 
    : <p>Loading</p>
         }  
      
    </>
}

export default NormalWeightScreen;