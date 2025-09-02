from flask import Flask, render_template, url_for
import os
app = Flask(__name__)
@app.route('/')
def home():
    return render_template("home.html")
@app.route('/ABoysBathroom')
def a_Boy():
    return render_template('aBoy.html')
@app.route('/AGirlsBathroom')
def a_Girl():
    return render_template('aGirl.html')
@app.route('/BBoysBathroom')
def b_Boy():
    return render_template('bBoy.html')
@app.route('/BGirlsBathroom')
def b_Girl():
    return render_template('bGirl.html')
@app.route('/CBoysBathroom')
def c_Boy():
    return render_template('cBoy.html')
@app.route('/CGirlsBathroom')
def c_Girl():
    return render_template('cGirl.html')
@app.route('/CTEGirlsBathroom')
def cte_Girl():
    return render_template('CTEG.html')
@app.route('/CTEBoysBathroom')
def cte_Boy():
    return render_template('CTEB.html')



if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
