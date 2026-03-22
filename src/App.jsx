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
                    category,
                    data
                }
            })
        }catch(error){
           console.log("error",error);
            setFactApiResponse((prevState)=>{
                return {
                    ...prevState,
                    loading:false,
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
  if(categoryApiResponse?.error || factApiResponse?.error){
    return(
        <main className="done">
            <h1>Something went wrong !!! Please try again later</h1>
        </main>
    )
  }
  return (
    <section className={categoryApiResponse?.loading ? "loading" : ""}>
      <div className="loader"></div>
      <main className={factApiResponse?.data ? "done" : ""}>
        <p>{factApiResponse?.data ? `Here's your science fact about ${factApiResponse?.category}` :"Choose a Category to view a science fact..."}</p>
        <section className="categories">
          {categoryApiResponse?.data?.categories?.map((category) => (
            <button onClick={buttonClickHandler}>
              {category?.categoryName}
            </button>
          ))}
        </section>
          <div className={factApiResponse?.loading ? "innerLoading":""}>
            <div className="loader"></div>
          </div>
        <h1>{factApiResponse?.data}</h1>
        {factApiResponse?.data && <button>Get another fact</button>}
      </main>
    </section>
  );
}

export default App;
