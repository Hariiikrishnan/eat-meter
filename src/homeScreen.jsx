import React from "react";
import "./styles/homeScreen.css";
import "./styles/globalStyle.css";
import { useParams,useNavigate } from "react-router-dom";
import ChatBot from "./chatBot";

function HomeScreen(){
    const navigate = useNavigate();


    return <>
    <div className="home">
        <div className="header d-flex-center">
            <img src="images/eat_logo.jpg" />
            <h1 onClick={()=>{
                navigate("/sugar");
            }}>Eatmeter</h1>
        </div>

        <div className="body">    
            <div className="text container d-flex-center d-col">
                    <h5>We are obsessed with</h5>
                    <h1>Healthy</h1>
                    <h1>Eating</h1>
                    <h1>Made Easy</h1>
                    <h6>Your Personlaized dietary Companion!</h6>
            </div>
            <img className="banner" src="images/bowl.png" />
            

            <div className="outer-circle">
                <div className="inner-circle">
                    <ChatBot/>
                </div>
            </div>
        </div>

        <div className="bottom d-flex-center d-col">
            <p>Experience the convenience of EatMeter and embark on a journey towards a healthier and happier you. Your well-being is our priority!</p>

            <button onClick={
                ()=>{
                    navigate("/bmi")
                }
            }>Check Your Plan</button>
        </div>

            {/* <div>
                <div>
                    <h1>
                        Features
                    </h1>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit sapiente obcaecati blanditiis maiores quibusdam dolore reprehenderit nostrum fugit. Vitae ipsum porro consectetur esse asperiores velit iure aliquid est ad!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit sapiente obcaecati blanditiis maiores quibusdam dolore reprehenderit nostrum fugit. Vitae ipsum porro consectetur esse asperiores velit iure aliquid est ad!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit sapiente obcaecati blanditiis maiores quibusdam dolore reprehenderit nostrum fugit. Vitae ipsum porro consectetur esse asperiores velit iure aliquid est ad!</li>
                    </ul>
                </div>
            </div> */}
    </div>
    </>
}


export default HomeScreen;