from app import app, db
from app.models.user import User
from werkzeug.security import generate_password_hash

def seed_database():
    # מחיקת כל הנתונים הקיימים
    db.session.query(User).delete()
    
    # נתוני דמה - בנים
    male_users = [
        {
            "email": "israel.cohen@example.com",
            "password_hash": generate_password_hash("password123"),
            "gender": "male",
            "sector": "ליטאי",
            "full_name": "ישראל כהן",
            "age": 23,
            "city": "ירושלים",
            "education": "ישיבת פוניבז'",
            "yeshiva": "פוניבז'",
            "parents_names": "אברהם ושרה כהן",
            "family_origin": "ירושלים",
            "preferred_sectors": "ליטאי,חסידי",
            "preferred_cities": "ירושלים,בני ברק"
        },
        {
            "email": "moshe.levi@example.com",
            "password_hash": generate_password_hash("password123"),
            "gender": "male",
            "sector": "ספרדי",
            "full_name": "משה לוי",
            "age": 24,
            "city": "בני ברק",
            "education": "ישיבת חברון",
            "yeshiva": "חברון",
            "parents_names": "יוסף ורחל לוי",
            "family_origin": "מרוקו",
            "preferred_sectors": "ספרדי",
            "preferred_cities": "בני ברק,ירושלים"
        },
        {
            "email": "yaakov.friedman@example.com",
            "password_hash": generate_password_hash("password123"),
            "gender": "male",
            "sector": "חסידי",
            "full_name": "יעקב פרידמן",
            "age": 22,
            "city": "בית שמש",
            "education": "ישיבת בעלז",
            "yeshiva": "בעלז",
            "parents_names": "חיים ולאה פרידמן",
            "family_origin": "הונגריה",
            "preferred_sectors": "חסידי",
            "preferred_cities": "בית שמש,ביתר עילית"
        },
        {
            "email": "david.gross@example.com",
            "password_hash": generate_password_hash("password123"),
            "gender": "male",
            "sector": "ליטאי",
            "full_name": "דוד גרוס",
            "age": 25,
            "city": "מודיעין עילית",
            "education": "ישיבת מיר",
            "yeshiva": "מיר",
            "parents_names": "יצחק ורבקה גרוס",
            "family_origin": "ליטא",
            "preferred_sectors": "ליטאי",
            "preferred_cities": "מודיעין עילית,ירושלים"
        },
        {
            "email": "yosef.shapiro@example.com",
            "password_hash": generate_password_hash("password123"),
            "gender": "male",
            "sector": "חסידי",
            "full_name": "יוסף שפירא",
            "age": 23,
            "city": "ביתר עילית",
            "education": "ישיבת ויז'ניץ",
            "yeshiva": "ויז'ניץ",
            "parents_names": "מנחם ופייגא שפירא",
            "family_origin": "פולין",
            "preferred_sectors": "חסידי",
            "preferred_cities": "ביתר עילית,בית שמש"
        }
    ]

    # נתוני דמה - בנות
    female_users = [
        {
            "email": "sarah.levy@example.com",
            "password_hash": generate_password_hash("password123"),
            "gender": "female",
            "sector": "ליטאי",
            "full_name": "שרה לוי",
            "age": 21,
            "city": "ירושלים",
            "education": "בית יעקב",
            "seminary": "סמינר הישן",
            "parents_names": "משה ורחל לוי",
            "family_origin": "ירושלים",
            "preferred_sectors": "ליטאי",
            "preferred_cities": "ירושלים,בני ברק"
        },
        {
            "email": "rivka.cohen@example.com",
            "password_hash": generate_password_hash("password123"),
            "gender": "female",
            "sector": "ספרדי",
            "full_name": "רבקה כהן",
            "age": 20,
            "city": "בני ברק",
            "education": "בית יעקב",
            "seminary": "סמינר וולף",
            "parents_names": "אברהם ולאה כהן",
            "family_origin": "מרוקו",
            "preferred_sectors": "ספרדי,ליטאי",
            "preferred_cities": "בני ברק,פתח תקווה"
        },
        {
            "email": "leah.friedman@example.com",
            "password_hash": generate_password_hash("password123"),
            "gender": "female",
            "sector": "חסידי",
            "full_name": "לאה פרידמן",
            "age": 19,
            "city": "בית שמש",
            "education": "בית יעקב",
            "seminary": "סמינר בעלז",
            "parents_names": "יעקב ושרה פרידמן",
            "family_origin": "הונגריה",
            "preferred_sectors": "חסידי",
            "preferred_cities": "בית שמש,ירושלים"
        },
        {
            "email": "rachel.weiss@example.com",
            "password_hash": generate_password_hash("password123"),
            "gender": "female",
            "sector": "ליטאי",
            "full_name": "רחל וייס",
            "age": 22,
            "city": "מודיעין עילית",
            "education": "בית יעקב",
            "seminary": "סמינר הישן",
            "parents_names": "דוד וחנה וייס",
            "family_origin": "ליטא",
            "preferred_sectors": "ליטאי",
            "preferred_cities": "מודיעין עילית,ירושלים"
        },
        {
            "email": "chaya.green@example.com",
            "password_hash": generate_password_hash("password123"),
            "gender": "female",
            "sector": "חסידי",
            "full_name": "חיה גרין",
            "age": 20,
            "city": "ביתר עילית",
            "education": "בית יעקב",
            "seminary": "סמינר גור",
            "parents_names": "יוסף ומרים גרין",
            "family_origin": "פולין",
            "preferred_sectors": "חסידי",
            "preferred_cities": "ביתר עילית,בית שמש"
        }
    ]

    # הוספת המשתמשים לבסיס הנתונים
    for user_data in male_users + female_users:
        user = User(**user_data)
        db.session.add(user)
    
    db.session.commit()
    print("נתוני הדמה נוספו בהצלחה!")

if __name__ == '__main__':
    with app.app_context():
        seed_database()
