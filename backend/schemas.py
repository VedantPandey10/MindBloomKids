from pydantic import BaseModel

class MoodCreate(BaseModel):
    mood: int
    stress: int
    energy: int
