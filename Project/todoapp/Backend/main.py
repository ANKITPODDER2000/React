from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from typing import Optional
from pydantic import BaseModel
import uuid

class Todo(BaseModel):
	Key : str
	title : str
	givenBy : str
	givenDate : Optional[str] = str(datetime.now().strftime('%Y-%m-%d'))
	submittedBy : str
	content : str
	isDone : Optional[bool] = False

todos = []

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"Home" : "Welcome in Todo App!!"}

@app.get("/todo")
def get_alltodo():
    return todos

@app.get("/todo/toogle-done/{Key}")
def toggleDone(Key : str):
	for it in todos:
		if it.Key == Key:
			it.isDone = not it.isDone
			return it
	return {"error" : "No Data "}


@app.post("/todo/add-todo")
def add_todo(todo : Todo):
	print(todo)
	for i in range(len(todos)):
		if todos[i].Key == todo.Key:
			todos[i] = todo
			return todos[i]
	print(todo)
	todo.Key = str(uuid.uuid4())
	todos.append(todo)
	return todo
