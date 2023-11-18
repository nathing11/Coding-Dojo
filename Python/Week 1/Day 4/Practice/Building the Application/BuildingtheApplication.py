from flask import Flask 
app = Flask(__name__)    
@app.route('/')          
def hello_world():
    return 'Hello World!' 
@app.route('/dojo')          
def dojo():
    return 'dojo!' 
@app.route('/<name>')          
def name(name):
    return f"have it say {name}"





@app.route('/repeat/<int:nub>/<name>')          
def numb(nub,name):
    return nub*name




if __name__=="__main__":      
    app.run(debug=True)    