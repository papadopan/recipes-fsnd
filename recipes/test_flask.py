import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from app import app , db
from models.recipe import RecipeModel


database_path = "postgresql+psycopg2://antoniospapadopoulos@localhost:5432/recipes_test"

def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()

class RecipeTestCase(unittest.TestCase):
    """This class represents the trivia test case"""

    def setUp(self):
        """Define test variables and initialize app."""
        self.app = app
        self.client = self.app.test_client
        self.database_path = "postgresql+psycopg2://antoniospapadopoulos@localhost:5432/recipes_test"
        setup_db(self.app, self.database_path)
        # binds the app to the current context
        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            # create all tables
            self.db.create_all()
    
    def tearDown(self):
        """Executed after reach test"""
        pass


    def test_add_new_cook(self):
        res = self.client().post("/api/cook",json={
            "first_name":"Jim",
            "last_name": "Smith",
            "country": "France",
            "city": "Paris",
            "email":"jim.smith@gmail.com"
            })
        data = json.loads(res.data)

        assert data["code"] == 201
        assert data["success"] == True
        assert data["message"] == "Cook succesfully added"
        assert data["cook"] != {}

    def test_add_same_cook(self):
        res = self.client().post("/api/cook",json={
            "first_name":"Jim",
            "last_name": "Smith",
            "country": "France",
            "city": "Paris",
            "email":"jim.smith@gmail.com"
            })
        data = json.loads(res.data)

        assert data["code"] == 400
        assert data["success"] == False

    def test_get_cook_by_id(self):
        res = self.client().get("/api/cook/1")
        data = json.loads(res.data)

        assert data["message"] == "Cook fetched successfully"
        assert data["success"] == True
        assert data["code"] == 200
        assert data["result"]["id"] == 1

    def test_get_cook_by_id_not_found(self):
        res = self.client().get("/api/cook/100")
        data = json.loads(res.data)

        assert data["message"] == "Cook was not found"
        assert data["success"] == False
        assert data["code"] == 404

    def test_update_cook_by_id(self):
        res = self.client().patch("/api/cook/1",json={
            "first_name":"Jim",
            "last_name": "Smith",
            "country": "Spain",
            "city": "Madrid",
            "email":"jim.smith@gmail.com"
            })

        data = json.loads(res.data)

        assert data["message"] == "Cook was updated successfully"
        assert data["success"] == True
        assert data["result"]['city'] == "Madrid"
        assert data["result"]['country'] == "Spain"
  
    def test_update_cook_by_id_not_found(self):
        res = self.client().patch("/api/cook/1000000",json={
            "first_name":"Jim",
            "last_name": "Smith",
            "country": "Spain",
            "city": "Madrid",
            "email":"jim.smith@gmail.com"
            })

        data = json.loads(res.data)

        assert data["message"] == "Cook was not found"
        assert data["success"] == False

    def test_add_new_recipe(self):
        res = self.client().post("/api/recipe",json ={
	        "title":"Apple pie",
	        "description":"This is a dessert for my tea time ",
	        "cook_id":1,
            "category":"brunch",
            "time":"2",
            "portions":"2",
	        "ingredients":[
		    {"name":"apples", "quantity":"1", "measurement":"kg"}, 
		    {"name":"flour", "quantity":"1", "measurement":"kg"},
			{"name":"vanila", "quantity":"3", "measurement":"kg"}, 
			{"name":"sugar", "quantity":"1", "measurement":"tbspn"}
            ]
        })
        data =json.loads(res.data)
        
        assert data["code"] == 201
        assert data["success"] == True
        assert data["created"] == True

    def test_add_same_recipe(self):
        res = self.client().post("/api/recipe",json ={
	        "title":"Apple pie",
	        "description":"This is a dessert for my tea time ",
	        "cook_id":1,
            "category":"brunch",
            "time":"2",
            "portions":"2",
	        "ingredients":[
		    {"name":"apples", "quantity":"1", "measurement":"kg"}, 
		    {"name":"flour", "quantity":"1", "measurement":"kg"},
			{"name":"vanila", "quantity":"3", "measurement":"kg"}, 
			{"name":"sugar", "quantity":"1", "measurement":"tbspn"}
            ]
        })
        data =json.loads(res.data)

        assert data["message"] == "Recipe already exists"
        assert data["success"] == False
        assert data["code"] == 400

    def test_get_all_recipes(self):
        res = self.client().get("/api/recipe")
        data = json.loads(res.data)

        assert data["count"] == 1
        assert data["success"] == True
        assert data["message"] == "List of all the recipes"

    def test_update_recipe_by_id(self):
        res = self.client().patch("/api/recipe/1",json ={
	        "title":"Lemon pie",
	        "description":"This is a dessert for my tea time ",
            "category":"brunch",
            "time":"2",
            "portions":"2",
	        "cook_id":1,
	        "ingredients":[
		    {"name":"lemon", "quantity":"2", "measurement":"kg"}, 
		    {"name":"flour", "quantity":"1", "measurement":"kg"},
			{"name":"vanila", "quantity":"3", "measurement":"kg"}, 
			{"name":"sugar", "quantity":"1", "measurement":"tbspn"}
            ]
        })
        data = json.loads(res.data)

        assert data["message"] == "recipe successfully updated"
        assert data["code"] == 200
        assert data["success"] == True
        assert data["result"]["title"] == "Lemon pie"

    def test_update_recipe_by_id_not_found(self):
        res = self.client().patch("/api/recipe/1000000",json ={
	        "title":"Lemon pie",
	        "description":"This is a dessert for my tea time ",
            "category":"brunch",
            "time":"2",
            "portions":"2",
	        "cook_id":1,
	        "ingredients":[
		    {"name":"lemon", "quantity":"2", "measurement":"kg"}, 
		    {"name":"flour", "quantity":"1", "measurement":"kg"},
			{"name":"vanila", "quantity":"3", "measurement":"kg"}, 
			{"name":"sugar", "quantity":"1", "measurement":"tbspn"}
            ]
        })

        data = json.loads(res.data)


        assert data["message"] == "recipe was not found"
        assert data["code"] == 404
        assert data["success"] == False

    def test_find_recipe_by_id(self):
        res = self.client().get("/api/recipe/1")
        data = json.loads(res.data)

        assert data["success"] == True
        assert data["result"]['id'] == 1
        assert data["result"]['title'] == "Apple pie"

    def test_find_recipe_by_id_not_found(self):
        res = self.client().get("/api/recipe/10000000000")
        data = json.loads(res.data)

        assert data["code"] == 404
        assert data["success"] == False
        assert data["message"] == "recipe was not found"


    def test_delete_recipe_by_id_not_found(self):
        res = self.client().delete("/api/recipe/10000000")
        data = json.loads(res.data)

        assert data["code"] == 404
        assert data["success"] == False

    # def test_delete_recipe_by_id(self):
    #     res = self.client().get("/api/recipe/1")
    #     data = json.loads(res.data)

    #     assert data["code"] == 200
    #     assert data["success"] == True

if __name__ == "__main__":
    unittest.main()