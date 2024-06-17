# SynthSum

## Overview
![image](https://github.com/SidhantCodes/SynthSum-v2/assets/127239653/a9f5aae6-ca11-4dac-a913-f60d832dc664)

SynthSum is an AI-powered summarization tool that provides concise summaries of both articles and videos. It leverages advanced technologies to quickly extract key insights, helping users save time and gain clarity on complex content.

## Installation

### Cloning the Repository
To clone the repository, run the following command:
```bash
git clone https://github.com/SidhantCodes/SynthSum-v2
```

### Setting Up the Client
Navigate to the client directory and install dependencies:
```bash
cd client
npm install
```

### Setting Up the Server
Navigate back to the root directory, then move to the server directory and install Python dependencies:
```bash
cd ../server
pip install -r requirements.txt
```

### Configuration
1. Create a `.env` file in the server directory.
2. Obtain a Google API key from [Google's API Console](https://aistudio.google.com/app/apikey).
3. Add your Google API key to the `.env` file in the following format:
   ```
   GOOGLE_API_KEY=<your_google_api_key>
   ```

## Running the Application
### Starting the FastAPI Server
To run the FastAPI server, execute the following command from the server directory:
```bash
uvicorn main:app --reload
```
The server will start running at `http://localhost:$PORT`, and you can access the SwaggerUI documentation at `http://localhost:$PORT/docs`.

### Running the Client
To run the client application, navigate to the client directory and execute:
```bash
npm run dev
```
The client application will be available at `http://localhost:3000/`.

## Deployment
- The API has been deployed on [Render](https://synthsum-api.onrender.com/docs).
- The frontend has been deployed on [Vercel](https://synthsum.vercel.app/).

