from flask import Flask , render_template,redirect,request
from users import User
app = Flask(__name__)
@app.route('/')         
def hellousers():
    return redirect("/users")
@app.route('/users')         
def users():
    users=User.get_all()
    return render_template("users.html" ,users=users)
@app.route('/users/all')         
def allusers():
    return render_template("all_users")
@app.route('/users/new', methods=['POST'])
def newusers():
    print(request.form)
    User.save(request.form)
    return redirect('/users')
if __name__=="__main__":
    app.run(debug=True,port=3777)