import React,{useContext,useState,useEffect} from 'react'
import "./styles/globalStyle.css";
import { useParams,useNavigate } from "react-router-dom";
import { BmiData } from "./context/BmiContext.jsx";
// import underweight from  "./dataset/underweight.json";
import obese1 from  "./dataset/obese1.json";
// import normal from  "./dataset/normal.json";

function Obese1WeightScreen(){

    const {bmiData} = useContext(BmiData);
    const [bmi,setBmi] = bmiData;

    const [loading,setLoading] = useState(false);
    const [planData,setPlanData] = useState();
    var data; 
    // const recommendations =  JSON.parse(underweight.dietPlan.recommendations);
  console.log(obese1);
   
    return <>
  <div className='plans'>
     
     <div className="header d-flex-center">
            <img src="images/eat_logo.jpg" />
            <h1>Eatmeter</h1>
        </div>

    <div className='container'>
      <div>

        <h1>BMI : {bmi}</h1>
        <h3>
           Category: {obese1.category}
        </h3>
        <h3>
        Category's range : {obese1.bmiRange}
        </h3>

   
        <ul>
      <div className='sampleMeals'>

      <h2>Sample Meal Plan</h2>
      {
        obese1.dietPlan.sampleMealPlan.map((one)=>{
              return <div className=' meals'>
                <h3>{one.meal} : </h3>
                {/* <p>{one.foods}</p> */}
                {
                  one.foods.map((food)=>{
                    return <li>{food}</li>
                  })
                }
              </div>
            })
            
          }
          </div>
        </ul>



   <h2>Recommendations:</h2>
    <ul>
      {
          obese1.dietPlan.recommendations.map((one)=>{
              return <li>{one}</li>
            })
            
        }
        </ul>
</div>
         
  
        </div>
    </div>
    </>
}

export default Obese1WeightScreen;