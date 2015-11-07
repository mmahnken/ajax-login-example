from flask import Flask, render_template, jsonify, session, request

app = Flask(__name__)

app.secret_key = 'things'

@app.route('/')
def show_ajax_practice():
    return render_template("ajax_test.html")

@app.route('/login.json', methods=["POST"])
def login():
    # log the user in.
    username = request.form.get('balloonicorn')
    password = request.form.get('stressdog')

    session['username'] = username

    # jsonify = return a response object from flask that contains JSON instead of HTML
    return jsonify({'cher': 'is awesome'})

@app.route('/aboutme.json', methods=["POST"])
def update_about_me():
    # save the new about me text in DB
    aboutme_text = request.form.get('about_me')
    print '\n\n\n\n', aboutme_text, '\n\n\n\n'
    return jsonify({'save': 'successful'})

@app.route('/logout.json', methods=["POST"])
def logout():
    print "\n\n\n\nSession before we cleared it.\n", session
    session.clear()
    print "\n\n\n\nSession after we cleared it.\n", session
    return jsonify({'logout': 'successful'})

if __name__ == "__main__":
    app.debug = True
    app.run(port=5000)
