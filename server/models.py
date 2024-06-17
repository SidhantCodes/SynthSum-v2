from pydantic import BaseModel

class ArticleURL(BaseModel):
    url: str