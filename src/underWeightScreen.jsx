import React,{useContext,useState,useEffect} from 'react'
import "./styles/globalStyle.css";
import { useParams,useNavigate } from "react-router-dom";
import { BmiData } from "./context/BmiContext.jsx";
import underweight from  "./dataset/underweight.json";
// import obese1 from  "./dataset/obese1.json";
// import normal from  "./dataset/normal.json";

function UnderWeightScreen(){

    const {bmiData} = useContext(BmiData);
    const [bmi,setBmi] = bmiData;

    const [loading,setLoading] = useState(false);
    const [planData,setPlanData] = useState();
    var data; 
    // const recommendations =  JSON.parse(underweight.dietPlan.recommendations);


    // useEffect(()=>{
    //     setLoading(true);
    //     if(bmi>18.5 && bmi<24.9){
    //         data = normal;
    //         setPlanData((prevData)=>{
    //             return {...prevData,...normal}
    //         });
    //     }
    //     else if(bmi<18.5){
    //         data = underweight;
    //         setPlanData((prevData)=>{
    //             return {...prevData,...underweight}
    //         });
    //     }else if(bmi>25){
    //         data = obese1;
    //         setPlanData((prevData)=>{
    //             return {...prevData,...obese1}
    //         });
    //     }
    //     setLoading(false);
    // },[])

    // console.log(data);


    // useEffect(() => {
    // const loadJsonFile = async () => {
    //     let jsonFilePath = '';
  
    //     // Your conditions to determine which JSON file to load
    //     if (bmi>18.5 && bmi<24.9) {
    //       jsonFilePath = './dataset/normal.json';
    //     } else if (bmi<18.5) {
    //       jsonFilePath = './dataset/underweight.json';
    //     } else if (bmi>25) {
    //       jsonFilePath = './dataset/obese1.json';
    //     }
  
    //     try {
    //       // Dynamically import the selected JSON file
    //       const { default: jsonContent } = await import(jsonFilePath);
  
    //       // Update the state with the contents of the selected JSON file
    //       setPlanData((prevLedger) => {
    //         return { ...prevLedger, ...jsonContent };
    //       });
    //     } catch (error) {
    //       console.error('Error loading JSON file:', error);
    //     }
    //   };
  
    //   // Call the function to load the JSON file
    //   loadJsonFile();
    // }, []); // The empty dependency array ensures that this effect runs only once on component mount
  
   
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
           Category: {underweight.category}
        </h3>
        <h3>
        Category's range : {underweight.bmiRange}
        </h3>

   
        <ul>
      <div className='sampleMeals'>

      <h2>Sample Meal Plan</h2>
      {
        underweight.dietPlan.sampleMealPlan.map((one)=>{
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
          underweight.dietPlan.recommendations.map((one)=>{
              return <li>{one}</li>
            })
            
        }
        </ul>
</div>
         
  
        </div>
    </div>
    </>
}

export default UnderWeightScreen;