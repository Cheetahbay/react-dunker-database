
def DunkerEntity(item):
    return {
        "id": str(item["_id"]),
        "Name": item["Name"],
        "Avatar": item["Avatar"],
        "Location": item["Location"],
        "League": item["League"],
        # "Attributes": item["Attributes"],
        "Instagram": item["Instagram"],
        "Youtube": item["Youtube"],
        
    }

def DunkersEntity(items):
    return [DunkerEntity(item) for item in items]