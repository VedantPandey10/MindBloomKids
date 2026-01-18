from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import mood, health, ai

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai.router)
app.include_router(mood.router)
app.include_router(health.router)
