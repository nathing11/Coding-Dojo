class User:
    def __init__(self,first_name,last_name,email,age):
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.age=age
        self.is_rewards_member=False
        self.gold_card_points=0
    def display_info(self):
        print(f"first name : {self.first_name}")
        print(f"last name  : {self.last_name}")
        print(f"Age: {self.age}")
        print(f"Member: {self.is_rewards_member}")
        print(f"Current Points: {self.gold_card_points}")
        print("==========================")
    def enroll(self):
        self.is_rewards_member=True
    def spend_points(self, amount):
        self.is_rewards_member = True


        



adrien=User("amenallah","brahim","adna@absj",20)
adrien.display_info()
adrien.enroll()
adrien.spend_points(100)