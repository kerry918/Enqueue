import time
from flask import Flask
app = Flask(__name__)

@app.route("/time")
def get_current_time():
    current_time = time.strftime("%H:%M:%S", time.localtime())
    return {"time": current_time}
    