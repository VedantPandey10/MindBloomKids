from sqlalchemy import Column, Integer, String
from database import Base

class MoodEntry(Base):
    __tablename__ = "moods"

    id = Column(Integer, primary_key=True, index=True)
    mood = Column(Integer)
    stress = Column(Integer)
    energy = Column(Integer)
