from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db 
from flask_login import login_user, login_required, logout_user, current_user, LoginManager

auth = Blueprint('auth', __name__)

@auth.route ('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        email= request.form.get('email')
        password = request.form.get('password')

        user = User.query.filter_by(email=email).first()
        if user: 
            if check_password_hash (user.password, password):
                flash('Logged in successfully!', category='success')
                login_user(user, remember=True)
                return redirect (url_for('auth.formBase'))
            else:
                flash('Incorrect password, try again.', category='error')
        else: 
            flash('email does not exist.', category='error')


    return render_template("Login.html", Text="ASAProoooo", user=current_user)


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))

@auth.route('/sign-up', methods=['GET','POST'])
def sign_Up():
    if request.method == 'POST':
        email=      request.form.get ('email')
        first_name=  request.form.get ('firstName')
        password1 = request.form.get ('password')
        password2 = request.form.get ('password2')

        user = User.query.filter_by(email=email).first()

        if user:
            flash('Email already exists.', category='error')

        elif len(email)<4:
            flash ('Email must be greater then 4 characters.',      category='error')
        elif len (first_name) < 2 :
            flash ('First Name must be greater then 1 characters.', category='error')
        elif password1 != password2:
            flash ('Passwords don\'t match.',                       category='error')
        elif len (password1)< 7 :
            flash ('Password must be at least 7 characters',        category='error')
        else:
            new_user = User(email=email,first_name=first_name, password= generate_password_hash(password1, method='sha256') )
            db.session.add(new_user)
            db.session.commit() 
            logout_user()
            flash ('Account created',                               category='success')
            return redirect (url_for('auth.login'))
        
    return render_template("Sign Up.html", user=current_user)

@auth.route('/FormBase')
@login_required
def formBase():
    return render_template("FormBase.html", user=current_user)