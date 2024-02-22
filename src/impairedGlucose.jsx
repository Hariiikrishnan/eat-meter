
import React,{useContext,useState,useEffect} from 'react'
import "./styles/globalStyle.css";
import "./styles/planScreen.css";
import { useParams,useNavigate } from "react-router-dom";
import { BmiData } from "./context/BmiContext.jsx";
// import underweight from  "./dataset/underweight.json";
// import obese1 from  "./dataset/obese1.json";
// import normal from  "./dataset/normal.json";

import impairedGlucose from  "./dataset/impairedGlucose.json";


function ImpairedGlucose(){
    return <>
    <div className='plans'>
    <div className="header d-flex-center">
            <img src="images/eat_logo.jpg" />
            <h1>Eatmeter</h1>
        </div>
        <div className="container">
           <div className='mailing d-flex-center '>
            <input placeholder='Email' name='mail' />
            <button>Mail the Plan</button>
           </div>
    {
        impairedGlucose.mealPlan.map((plan)=>{
            return <div>
                <h2>{plan.day}</h2>
                {
                    plan.meals.map((meal)=>{
                        return <div>
                            <p>{meal.time}</p>
                            {
                                meal.food.map((oneFood)=>{
                                    return <li>{oneFood}</li>
                                })
                            }
                            </div>
                    })
                }
            </div>
        })
    }
     
     </div>
                </div>
    </>
}


export default ImpairedGlucose