from pydantic import BaseModel
from typing import Optional




class Attributes(BaseModel):
    style: int
    creativity: int
    power: int
    versatility: int

class Dunker(BaseModel):
    id: str
    Name: str
    Avatar: str
    Location: str
    League: str
    Youtube: Optional[str]
    Instagram: Optional[str]
    Attributes: Optional[dict]

