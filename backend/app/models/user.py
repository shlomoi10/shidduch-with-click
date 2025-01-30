from app import db
from flask_login import UserMixin
from datetime import datetime

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    
    # פרטים אישיים
    gender = db.Column(db.String(10), nullable=False)  # זכר/נקבה
    sector = db.Column(db.String(50), nullable=False)  # ליטאי/חסידי/ספרדי/תימני
    full_name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    city = db.Column(db.String(100), nullable=False)
    
    # פרטי לימודים
    education = db.Column(db.String(200))  # ישיבה/סמינר
    yeshiva = db.Column(db.String(200))  # לבנים
    seminary = db.Column(db.String(200))  # לבנות
    
    # פרטי משפחה
    parents_names = db.Column(db.String(200))
    family_origin = db.Column(db.String(100))
    
    # העדפות
    preferred_sectors = db.Column(db.String(200))  # מחרוזת מופרדת בפסיקים
    preferred_cities = db.Column(db.String(200))  # מחרוזת מופרדת בפסיקים
    
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def __repr__(self):
        return f'<User {self.email}>'
