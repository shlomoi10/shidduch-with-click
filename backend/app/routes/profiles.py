from flask import Blueprint, jsonify
from app.models.user import User

bp = Blueprint('profiles', __name__)

@bp.route('/api/profiles/<int:user_id>')
def get_profile(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify({
        'id': user.id,
        'full_name': user.full_name,
        'age': user.age,
        'city': user.city,
        'sector': user.sector,
        'education': user.education,
        'yeshiva': user.yeshiva,
        'seminary': user.seminary,
        'family_origin': user.family_origin
    })
