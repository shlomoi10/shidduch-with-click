from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from app.models.user import User
from app import db

bp = Blueprint('auth', __name__)

@bp.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()

    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already exists'}), 400

    user = User(
        email=data['email'],
        password_hash=generate_password_hash(data['password']),
        gender=data['gender'],
        sector=data['sector'],
        full_name=data['full_name'],
        age=data['age'],
        city=data['city'],
        education=data.get('education'),
        yeshiva=data.get('yeshiva'),
        seminary=data.get('seminary'),
        parents_names=data.get('parents_names'),
        family_origin=data.get('family_origin'),
        preferred_sectors=','.join(data.get('preferred_sectors', [])),
        preferred_cities=','.join(data.get('preferred_cities', []))
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

@bp.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()

    if user and check_password_hash(user.password_hash, data['password']):
        return jsonify({
            'id': user.id,
            'email': user.email,
            'full_name': user.full_name,
            'gender': user.gender
        }), 200
    
    return jsonify({'error': 'Invalid credentials'}), 401
