import { useEffect, useState } from "react";
import {getScienceFact,getScienceCategories} from './services/aiService';

function App() {
    const [categoryApiResponse,setCategoryApiResponse]=useState({
        loading:true,
        data:null,
        error:null
    })
    const [factApiResponse,setFactApiResponse]=useState({
        loading:false,
        data:null,
        error:null
    })
    const fetchCategories=async()=>{
        try{
            const data=await getScienceCategories();
            setCategoryApiResponse((prevState)=>{
                return {
                    ...prevState,
                    loading:false,
                    data:JSON.parse(data)
                }
            })
        }catch(error){
            console.log("error",error);
            setCategoryApiResponse((prevState)=>{
                return {
                    ...prevState,
                    loading:false,
                    data:"Something went wrong !!! Please try again later",
                    error,
                }
            })
        }
        
    }
    const fetchCategoryFact=async(category)=>{
        try{
            setFactApiResponse((prevState) => {
              return {
                ...prevState,
                loading: true,
              };
            });
            const data=await getScienceFact(category);
            setFactApiResponse((prevState)=>{
                return {
                    ...prevState,
                    loading:false,
                    data
                }
            })
        }catch(error){
           console.log("error",error);
            setFactApiResponse((prevState)=>{
                return {
                    ...prevState,
                    loading:false,
                    data:"Something went wrong !!! Please try again later",
                    error,
                }
            }) 
        }
    }
    const buttonClickHandler=(e)=>{
        fetchCategoryFact(e.target.textContent);
    }
    useEffect(()=>{
        fetchCategories();
    },[])
  return (
    <section className={categoryApiResponse?.loading ? "loading":""}>
      <div className="loader"></div>
      <main>
        <p>Choose a Category to view a science fact...</p>
        <section className="categories">
            <button onClick={buttonClickHandler}>TEST</button>
           {categoryApiResponse?.data?.categories?.map((category)=>(
                <button onClick={buttonClickHandler}>{category?.categoryName}</button>
           ))} 
        </section>
        {/* <h1>
          {factApiResponse?.data}
        </h1> */}
      </main>
    </section>
  );
}

export default App;
