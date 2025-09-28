from flask import Flask, render_template, request, redirect, url_for
from blockchian import Blockchain

app = Flask(__name__)
bc = Blockchain()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        emergency_number = request.form['emergency_number']
        is_foreigner = request.form['type'] == 'foreigner'
        id_number = request.form['id_number']
        if is_foreigner:
            block = bc.add_block(name, emergency_number, passport=id_number, is_foreigner=True)
        else:
            block = bc.add_block(name, emergency_number, aadhar=id_number, is_foreigner=False)
        qr_filename = f"user_block_{len(bc.chain)-1}.png"
        return render_template('success.html', qr_filename=qr_filename, block=block)
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        id_number = request.form['id_number']
        for block in bc.chain:
            if block.id_number == id_number:
                return f"Login successful for {block.name}"
        return "ID not found"
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
