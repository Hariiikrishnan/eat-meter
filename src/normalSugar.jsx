
import React,{useContext,useState,useEffect} from 'react'
import "./styles/globalStyle.css";
import { useParams,useNavigate } from "react-router-dom";
import { BmiData } from "./context/BmiContext.jsx";
// import underweight from  "./dataset/underweight.json";
// import obese1 from  "./dataset/obese1.json";
// import normal from  "./dataset/normal.json";

import normalSugar from  "./dataset/normalSugar.json";


function NormalSugar(){
    return <>
     {
        normalSugar.mealPlan.map((plan)=>{
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
    </>
}


export default NormalSugar;