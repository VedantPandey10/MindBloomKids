from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import mood, health, ai, chat

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this to your Vercel domain after deployment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai.router)
app.include_router(chat.router)
app.include_router(mood.router)
app.include_router(health.router)
