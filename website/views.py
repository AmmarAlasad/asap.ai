from flask import Blueprint, render_template, request
from flask_login import login_required, current_user
import openai

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("Home.html", user=current_user)


@views.route('/checkGrammer', methods=['POST', 'GET'])
def checkGrammer():
    openai.api_key = "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"

    toCheck = request.form['toCheck'] 

    response = openai.Completion.create(
    model="text-davinci-003",
    prompt="Correct this to standard German:" + toCheck,
    temperature=0,
    max_tokens=60,
    top_p=1.0,
    frequency_penalty=0.0,
    presence_penalty=0.0
    )
    return render_template('FormBase.html', checked= response['choices'][0]['text'], user= current_user)