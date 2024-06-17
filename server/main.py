from fastapi import FastAPI, HTTPException
from newspaper import Article
from youtube_transcript_api import YouTubeTranscriptApi
from dotenv import load_dotenv
import os
import google.generativeai as genai
from fastapi.middleware.cors import CORSMiddleware
from models import ArticleURL, YoutubeVideoURL

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/summarize-video')
async def summarize_video(url: YoutubeVideoURL):
    url= url.url

    try:
        video_id=url.split('=')[1]
        transcript=YouTubeTranscriptApi.get_transcript(video_id)
        t = ""
        for i in transcript:
            t += " " + i["text"]

        prompt="""
            You are youtube video transcript summarizer. I will provide you with the transcript of a youtube video. Kindly summarize it for me.I need you to give me a summary section, then important points in a Key Points section and finally a conclusion section. Give me a JSON response
        """
        model=genai.GenerativeModel("gemini-1.5-flash")
        res=model.generate_content(prompt+" "+t)
        return {"summary": res.text}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post('/summarize-article')
async def summarize_article(url: ArticleURL):
    url = url.url

    try:
        article=Article(url)
        article.download()
        article.parse()
        article_txt=article.text

        prompt="""
            You are article summarizer. I will provide you with some text content from an article. Kindly summarize it for me. I need you to give me a summary section, then important points in a Key Points section and finally a conclusion section. Give me a JSON response
        """

        model=genai.GenerativeModel("gemini-1.5-flash")
        res=model.generate_content(prompt+" "+article_txt)
        return {"summary": res.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
