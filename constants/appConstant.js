const AppConstant={
    GEMINI_MODEL:"gemini-3-flash-preview",
    GEMINI_API_KEY:"AIzaSyBd80R9zN8BI7eAMOzTc5GdID1K7UM2zP0",
    CATEGORIES_PROMPT:`
        Give me 5 random science category name people
        would be interest to know about
    `,
    getFactPromptByCategory:(category)=>{
        return`
            Generate a science fact about ${category}
            in less than 3 lines.

            Don't use markdown,just use plain text.

            Add emoji if it makes sense.
        `
    }
}
export default AppConstant;