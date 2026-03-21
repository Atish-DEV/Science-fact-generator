const AppConstant={
    GEMINI_API_KEY:"AIzaSyBfxW4SFW4mHk9OabQ3sPbXTV9PaIZbLRc",
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