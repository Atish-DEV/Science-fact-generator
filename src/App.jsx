import { useEffect, useState } from "react";
import {getScienceFact} from './services/aiService';

function App() {
    const [factApiResponse,setfactApiResponse]=useState({
        loading:true,
        data:null,
        error:null
    })
    const fetchApiResponse=async()=>{
        try{
            const data=await getScienceFact();
            setfactApiResponse((prevState)=>{
                return {
                    ...prevState,
                    loading:false,
                    data
                }
            })
        }catch(error){
            console.log("error",error);
            setfactApiResponse((prevState)=>{
                return {
                    ...prevState,
                    loading:false,
                    data:"Something went wrong !!! Please try again later",
                    error,
                }
            })
        }
        
    }
    useEffect(()=>{
        fetchApiResponse();
    },[])
  return (
    <section className={factApiResponse?.loading ? "loading":""}>
      <div className="loader"></div>
      <main>
        <p>Here's your science fact...</p>
        <h1>
          {factApiResponse?.data}
        </h1>
      </main>
    </section>
  );
}

export default App;
