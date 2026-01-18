from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import MoodEntry
from schemas import MoodCreate

router = APIRouter(prefix="/mood", tags=["Mood"])

MoodEntry.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def add_mood(data: MoodCreate, db: Session = Depends(get_db)):
    mood = MoodEntry(**data.dict())
    db.add(mood)
    db.commit()
    db.refresh(mood)
    return mood

@router.get("/")
def get_moods(db: Session = Depends(get_db)):
    return db.query(MoodEntry).all()
