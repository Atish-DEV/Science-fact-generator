# Science Fact Generator

A simple web application that generates science facts using Google Gemini AI. The app is built with React and focuses on producing short, structured, and readable outputs.

## Overview

This project connects a React frontend with the Gemini API to generate science facts dynamically. Instead of displaying raw text responses, the app structures the output in JSON format to ensure consistency and easier rendering on the UI.

## Features

- Generate science facts on demand
- Integration with Google Gemini AI
- Prompt-based communication with the AI model
- Structured JSON response handling
- Clean and minimal user interface

## How It Works

1. A prompt is sent to the Gemini API requesting a science fact.
2. The response is designed to follow a predefined JSON structure.
3. The application parses the JSON response.
4. The formatted data is displayed in the UI.

## Tech Stack

- React
- JavaScript
- Vanilla CSS
- Google Gemini API (gemini-3-flash-preview model)

## What I Learned

- Designing effective prompts for AI-based applications
- Handling and parsing structured JSON responses from Gemini
- Managing API integration in a React application
- Ensuring consistent output format for better UI rendering

## Setup

Clone the repository:

```bash
git clone https://github.com/Atish-DEV/Science-fact-generator.git
```

Navigate into the project:

```bash
cd science-fact-generator
```

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

## Notes

- Make sure to add your Gemini API key in the environment variables.
- Do not commit your `.env` file.

## Future Improvements

- Add categories for science facts
- Improve UI/UX
- Add loading and error states

---

This project was built to explore practical usage of AI APIs in frontend applications and to better understand structured response handling.

