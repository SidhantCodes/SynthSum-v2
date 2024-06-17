from fastapi import FastAPI, HTTPException
from newspaper import Article
from dotenv import load_dotenv
import os
import google.generativeai as genai
from fastapi.middleware.cors import CORSMiddleware
from models import ArticleURL

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


@app.post('/summarize-article')
async def summarize_article(url: ArticleURL):
    url = url.url

    try:
        article=Article(url)
        article.download()
        article.parse()
        article_txt=article.text

        prompt="""
            You are article summarizer. I will provide you with some text content from an article. Kindly summarize it for me. I need you to give me a summary section, then important points in a Key Points section and finally a conclusion section.
        """

        model=genai.GenerativeModel("gemini-1.5-flash")
        res=model.generate_content(prompt+" "+article_txt)
        return {"summary": res.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
