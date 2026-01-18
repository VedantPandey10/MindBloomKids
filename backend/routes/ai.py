from fastapi import APIRouter, Query
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

router = APIRouter(prefix="/ai", tags=["AI"])

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@router.post("/chat")
def chat(prompt: str = Query(...)):

    if not os.getenv("OPENAI_API_KEY"):
        return {"error": "OPENAI_API_KEY not found in .env"}

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role":"system","content":"You are a friendly child wellness assistant."},
                {"role":"user","content":prompt}
            ]
        )

        return {"reply": response.choices[0].message.content}

    except Exception as e:
        return {"error": str(e)}
