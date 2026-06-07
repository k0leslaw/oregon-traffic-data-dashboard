from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "backend working"}

@app.get("/api/data")
def get_data():
    sample_data = [
        {"x": 1, "y": 10}
    ]
    return {"data": sample_data}