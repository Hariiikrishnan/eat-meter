import React,{useState,useContext,useEffect} from "react";
import axios from "axios";
import "./styles/chatBot.css";
import "./styles/globalStyle.css";

function ChatBot(){

    const apiKey = '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';

    const [prompt,setPrompt] = useState();
    const [result,setResult] = useState();
    const [loading,setLoading] = useState(false);
    const [gotresult,setGotResult] = useState(false);
    // const apiKey = 'YOUR_OPENAI_API_KEY';
    
    // const prompt = 'Translate the following English text to French: "Hello, how are you?"';
    
    async function callOpenAIChatGPT() {
        const requestData = {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt.prompt },
          ],
        };
        try {
            setLoading(true);
        const response = await axios.post('https://api.openai.com/v1/chat/completions',
        //  {
        //   prompt: prompt,
        //   max_tokens: 50,  // Adjust for desired response length
        // }
        requestData
        , {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
          },
        });
    
        const answer = response.data.choices[0].message.content;
        setResult(answer);
        setLoading(false);
        setGotResult(true);
        // console.log('ChatGPT Response:', answer);
        console.log('ChatGPT Response:', response.data.choices[0].message.content);
      } catch (error) {
        console.error('Error calling OpenAI ChatGPT:', error);
      }
    }
    
    // useEffect(()=>{
    //   callOpenAIChatGPT();
    // },[])
    
    function handleChange(e) {
        const { value, name } = e.target;
    
        setPrompt((prevLedger) => {
          return { ...prevLedger, [name]: value };
        });
      }
    
    //   console.log(prompt);
      console.log(result);

    return <>
    <div className="chatBot container">
        <p>ChatBot</p>
        {
            gotresult ? null :
        <div className="d-flex-center">

        <input name="prompt" placeholder="Enter Your Doubt?" onChange={handleChange}/>
      {
          !loading ?
          <button onClick={callOpenAIChatGPT}>Go</button> : null
      }  
        </div>
        }
      { gotresult ? 
      <div className="answer">
        <p>{result}</p>
        </div> : null
      }
      </div>
    </>
}

export default ChatBot;