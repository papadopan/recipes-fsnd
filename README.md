### RECIPES Site

## AUTHENTICATION

- admin user
  - email : admin@udacity.com / AdminUdacity123
- cook user
  - email : cook@udacity.com / CookUdacity123

The project has more endpoints but in order to deliver one that is working the only endpoints needed for the succeed completition are

- Resources for recipe
  - get all recipes
  - get recipe by id
  - patch recipe by id
  - delete recipe by id
- Resources for cook
  - get all cooks
  - get cook by id
  - update cook by id
  - delete cook by id

The relationship between cook and recipes are one to many.
One cook can have many recipes

The limited time was a barrier to continues into more complex system.
I also created a react SPA so you can interact with the backend localy.

##### Authentication login url

https://dev-t0uvp9wb.eu.auth0.com/authorize?audience=recipe&response_type=token&client_id=TRwKMTOnA42a0hdGKI6rd3nuQ6D8VZmr&redirect_uri=http://localhost:3000/recipe

#### Authentication logout url

https://dev-t0uvp9wb.eu.auth0.com/v2/logout?client_id=TRwKMTOnA42a0hdGKI6rd3nuQ6D8VZmr

#### Heroku deployment url

https://recipes-fsnd.herokuapp.com/api

#### Motivation

I always wanted to create a recipe app, since I think is something usefull for everyone nowadays.
I want to expand this idea and make it more complete app that I will deploy for both backend and frontend
It is an app that I would like to have therefore I want to build it

#### Documenting API

##### Recipe

- A get request to `/api/recipe` will return all the recipes
- A get request to `/api/recipe/<id>` will return the recipe with this specific id
- A patch request to `/api/recipe/<id>` will update this specific recipe
- A delete request to `/api/recipe/<id>` will delete this specific recipe

##### Cooks

- A get request to `/api/cook` will return all the cooks
- A get request to `/api/cook/<id>` will return a cook with this specific id
- A patch request to `/api/cook/<id>` will update this specific cook details
- A delete request to `/api/cook/<id>` will delete this specific cook
