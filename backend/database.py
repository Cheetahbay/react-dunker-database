from nis import cat
from dotenv import dotenv_values
from pymongo import MongoClient
import certifi


env = dotenv_values('.env')

HOST = env['HOST']
client = MongoClient(HOST, tlsCAFile=certifi.where())

db = client.DunkerDB.dunkers

