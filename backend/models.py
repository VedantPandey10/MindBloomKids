from sqlalchemy import Column, Integer, String, DateTime
from database import Base
from datetime import datetime

class MoodEntry(Base):
    __tablename__ = "moods"

    id = Column(Integer, primary_key=True, index=True)
    mood = Column(Integer)
    stress = Column(Integer, default=0)
    energy = Column(Integer, default=0)
    day_response = Column(String, nullable=True)
    like_to_do = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
