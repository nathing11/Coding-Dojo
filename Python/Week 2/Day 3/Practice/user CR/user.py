from mysqlconnection import connectToMySQL
from pprint import pprint
DATABAYSE="users"
class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['firt_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.cretaed_at = data['cretaed_at']
        self.updated_at = data['updated_at']
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM user;"
        results = connectToMySQL(DATABAYSE).query_db(query)
        users=[]
        for row in results:
            one_user = cls(row)
            users.append(one_user)
        return users
    @classmethod
    def gett_all(cls,data):
        query="""
                INSERT INTO user (firt_name,last_name,email) 
                values (%(firt_name)s,%(last_name)s,%(email)s)
                """
        results = connectToMySQL(DATABAYSE).query_db(query,data)
        return results
        