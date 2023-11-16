class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
    def display_info(self):
        print(f"First name: {self.first_name}")
        print(f"Last name: {self.last_name}")
        print(f"Email: {self.email}")
        print(f"Age: {self.age}")
        print(f"Member: {self.is_rewards_member}")
        print(f"Current Points: {self.gold_card_points}")

    def enroll(self):
        if(self.is_rewards_member):
            print("User already a member.")
            return self
        self.is_rewards_member = True
        self.gold_card_points = 200
        return self
    def spend_points(self, amount):
        if self.gold_card_points < amount:
            print("Insufficient points.")
            return False
        self.gold_card_points -= amount
my_user = User("nathing", "00", "nathing000k@gmail.com", 20)
my_user.display_info()

user2 = User("cdccc", "cx", "feddzxs.com", 19)
user3 = User("amen", "brahim", "cdcx.com", 20)

my_user.spend_points(50)
user2.enroll().spend_points(80)

my_user.display_info()
user2.display_info()
user3.display_info()

