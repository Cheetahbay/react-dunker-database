from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from models import Dunker, Attributes
from database import db
from schema import DunkerEntity, DunkersEntity
import requests

app = FastAPI()

@app.get('/')
def root():
    return {"data": "This is the dunker API root"}

@app.get('/dunkers/all')
def get_all_dunkers():
    dunkers = db.find()
    return DunkersEntity(dunkers)

@app.get('/dunkers/{name}', response_model=Dunker)
def get_dunker_by_name(name: str):
    dunker = db.find_one({"Name": name})
    return DunkerEntity(dunker)

@app.get('/dunkers/league/{league}')
def get_dunker_by_league(league):
    dunkers = db.find({"League": league})
    return DunkersEntity(dunkers)


@app.patch('/dunkers/{name}', response_model=Dunker)
def dunker_attributes(name, attrs: Attributes):
    print(attrs.json())
    formatted_attrs = dict(attrs)
    updated_attrs = {"$set": {"Attributes": formatted_attrs}}
    db.update_one({"Name": name}, updated_attrs)
    
    return DunkerEntity(db.find_one({"Name": name}))



