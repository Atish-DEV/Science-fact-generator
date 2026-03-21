import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY="AIzaSyD5qMoCRdYL3KfXPU-s6IXWunWDB53EmOA";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey:GEMINI_API_KEY});

export const getScienceFact=async()=> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `
      Write an interesting science fact in 3 line or less.
      Choose randomly between one of the following topic
      - Music
      - Astrophysics
      - Biology

      Add some emoji only if it makes sense.
    `,
  });
  return response.text;
}