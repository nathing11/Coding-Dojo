from mysqlconnection import connectToMySQL

DATABAYSE="userscrdd_schema"


class User:
        def __init__ (self,data):
            self.id=data['id']
            self.first_name=data['first_name']
            self.last_name=data['last_name']
            self.email = data['email']
            self.cretaed_at = data['cretaed_at']
            self.updated_at = data['updated_at']
        #select
        @classmethod
        def get_all(cls):
            query = "SELECT * FROM user;"
            results = connectToMySQL(DATABAYSE).query_db(query)
            users=[]
            for row in results:
                one_user = cls(row)
                users.append(one_user)
            return users
        #insert
        @classmethod
        def insert(cls):
            query = "INSER INTO (first_name,last_name,email) values ( %(first_name)s,%(last_name)s,%(email)s );"
            results = connectToMySQL(DATABAYSE).query_db(query)
            return results