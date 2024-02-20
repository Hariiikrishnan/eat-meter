import react,{createContext,useContext,useState} from "react";

export const BmiData = createContext({
   
});

function BmiContext({children}){

    // const [date,setDate] = useState();
    // const [totalPerDay,setTotal] = useState();
    // const [userData,setUserData]  = useState();
    // const [selectedChallenge,setChallenge] = useState();
    
    const [bmi,setBmi] = useState();


    return <BmiData.Provider value={{bmiData:[bmi,setBmi]}}>
        {children}
    </BmiData.Provider>
}

export default BmiContext ;