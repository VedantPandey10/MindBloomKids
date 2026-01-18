from fastapi import APIRouter
import google.generativeai as genai
from dotenv import load_dotenv
import os

router = APIRouter(prefix="/chat", tags=["AI"])

# Load .env
load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

# Safety check
if not API_KEY:
    raise ValueError("GEMINI_API_KEY not found in .env file")

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel("gemini-pro")

@router.post("/")
def chat(data: dict):
    user_msg = data.get("message", "")

    response = model.generate_content(user_msg)

    return {
        "reply": response.text
    }
