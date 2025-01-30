from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_login import LoginManager
from dotenv import load_dotenv
import os

# טעינת משתני הסביבה
load_dotenv()

# יצירת האפליקציה
app = Flask(__name__)
CORS(app)

# הגדרות
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# יצירת אובייקטים
db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = 'auth.login'

# ייבוא הראוטים
from app.routes import main, auth, profiles

# רישום הבלופרינטים
app.register_blueprint(main.bp)
app.register_blueprint(auth.bp)
app.register_blueprint(profiles.bp)

# יצירת בסיס הנתונים
with app.app_context():
    db.create_all()
