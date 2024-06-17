from pydantic import BaseModel

class ArticleURL(BaseModel):
    url: str

class YoutubeVideoURL(BaseModel):
    url: str