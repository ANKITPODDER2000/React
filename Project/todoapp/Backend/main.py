from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from typing import Optional
from pydantic import BaseModel
import uuid

class Todo(BaseModel):
	Key : Optional[str] = str(uuid.uuid4())
	title : str
	givenBy : str
	givenDate : Optional[str] = str(datetime.now().strftime('%Y-%m-%d'))
	submittedBy : str
	content : str

todos = [
	{
		'Key': 1,
		'title': 'Do math problems...',
		'givenBy': 'Math Teacher',
		'givenDate': str(datetime.now().strftime('%Y-%m-%d')),
		'submittedBy': str(datetime.now().strftime('%Y-%m-%d')),
		'content':
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem adipisci autem expedita neque laudantium! Aliquid at veritatis dolorum vel quod earum saepe reprehenderit sit exercitationem, suscipit sequi delectus dolor eveniet ratione doloremque, alias corporis? Nobis odit necessitatibus officiis non. Necessitatibus quibusdam nobis corporis neque placeat optio inventore magnam id, aliquam ad minus quidem omnis, consectetur consequuntur, porro quas reiciendis.'
	},
	{
		'Key': 2,
		'title': 'Do js problems...',
		'givenBy': 'JavaScript Teacher',
		'givenDate': str(datetime.now().strftime('%Y-%m-%d')),
		'submittedBy': str(datetime.now().strftime('%Y-%m-%d')),
		'content':
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse iure voluptates sed itaque asperiores repudiandae provident, sequi eum aspernatur labore iste porro vel consequatur nemo error dolore nostrum ad necessitatibus sunt cupiditate veritatis! Quas voluptatibus veniam ratione blanditiis enim harum? Veniam, corrupti adipisci. Aperiam, nostrum adipisci tempora quae, et corrupti cum distinctio vero facere dolorum cumque error ab ipsum id nam? Nesciunt, ullam sit! Sapiente animi ex pariatur facere nihil quidem! Culpa blanditiis dolor, explicabo tempore dolores facilis recusandae corrupti optio in error perferendis ex iure delectus saepe magnam unde, iste cupiditate quo ad porro quas commodi aperiam natus?'
	},
	{
		'Key': 3,
		'title': 'Do DSA problems...',
		'givenBy': 'Data Structure Teacher',
		'givenDate': str(datetime.now().strftime('%Y-%m-%d')),
		'submittedBy': str(datetime.now().strftime('%Y-%m-%d')),
		'content':
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores consectetur dolor. Facilis voluptatibus, id consequatur, excepturi dicta tempore iusto omnis nostrum ducimus aspernatur facere quidem dignissimos? Accusantium, modi sit.'
	}
]

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

@app.post("/todo/add-todo")
def add_todo(todo : Todo):
	todo.Key = str(uuid.uuid4())
	todos.append(todo)
	return todo
