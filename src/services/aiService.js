import { GoogleGenAI } from "@google/genai";
import AppConstant from "../../constants/appConstant";
import { array, object, string, toJSONSchema } from "zod";

const categorySchema=object({
  categoryName:string().describe("Name of the category")
})
const schema=object({
  categories:array(categorySchema)
})
const API_KEY=import.meta.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey:API_KEY});

export const getScienceCategories=async()=> {
  const response = await ai.models.generateContent({
    model: AppConstant?.GEMINI_MODEL,
    contents: AppConstant?.CATEGORIES_PROMPT,
    config:{
      responseMimeType:"application/json",
      responseJsonSchema:toJSONSchema(schema)
    }
  });
  return response.text;
}
export const getScienceFact=async(category)=> {
  const response = await ai.models.generateContent({
    model: AppConstant?.GEMINI_MODEL,
    contents: AppConstant?.getFactPromptByCategory(category),
  });
  return response.text;
}