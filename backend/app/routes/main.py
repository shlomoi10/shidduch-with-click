from flask import Blueprint, jsonify
from app.models.user import User
from app import db

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return jsonify({'message': 'ברוכים הבאים לשידוך עם קליק!'})

@bp.route('/api/matches/<int:user_id>')
def get_matches(user_id):
    user = User.query.get_or_404(user_id)
    
    # מציאת התאמות על פי המגדר ההפוך
    opposite_gender = 'female' if user.gender == 'male' else 'male'
    potential_matches = User.query.filter_by(gender=opposite_gender)
    
    # סינון לפי סקטור מועדף
    if user.preferred_sectors:
        sectors = user.preferred_sectors.split(',')
        potential_matches = potential_matches.filter(User.sector.in_(sectors))
    
    # סינון לפי ערים מועדפות
    if user.preferred_cities:
        cities = user.preferred_cities.split(',')
        potential_matches = potential_matches.filter(User.city.in_(cities))
    
    # הגבלה ל-3 התאמות הטובות ביותר
    matches = potential_matches.limit(3).all()
    
    return jsonify({
        'matches': [{
            'id': match.id,
            'name': match.full_name,
            'age': match.age,
            'city': match.city,
            'sector': match.sector,
            'education': match.education
        } for match in matches]
    })
