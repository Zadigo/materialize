from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, EmailField, SubmitField
from wtforms.validators import DataRequired

class ContactForm(FlaskForm):
    nom = StringField('Nom', validators=[DataRequired()])
    email = EmailField('Email', validators=[DataRequired()])
    sujet = StringField('Nom', validators=[DataRequired()])
    message = StringField('Message', validators=[DataRequired()])
    submit = SubmitField('Envoyer')