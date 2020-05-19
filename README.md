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
