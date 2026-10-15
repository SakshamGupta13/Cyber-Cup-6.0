# FraudShield AI — Starter Project

A minimal local starter: React + Vite frontend and FastAPI backend. It includes a basic rule-based message/URL scan to verify the frontend-backend connection. This is a learning/demo starter, not a production fraud detector.

## Requirements
- Python 3.10+
- Node.js LTS

## Start backend (Terminal 1, PowerShell)
```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
```
Open http://127.0.0.1:8000/docs to test the API.

## Start frontend (Terminal 2, from project root)
```powershell
cd frontend
npm install
npm run dev
```
Open the URL Vite prints, typically http://localhost:5173.

Keep both terminals running. CORS allows localhost ports 5173–5179 and 127.0.0.1 ports 5173–5179.
