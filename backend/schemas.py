from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class MoodCreate(BaseModel):
    mood: int
    stress: int = 0
    energy: int = 0
    day_response: Optional[str] = None
    like_to_do: Optional[str] = None

class MoodResponse(MoodCreate):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True
