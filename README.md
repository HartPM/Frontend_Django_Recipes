# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Visit the deployed app!
```
https://reactrecipes.onrender.com/
```

# Overview
```
Simple crud app pulls 3 random recipes from a free meal api on page load.  
The user may save recipes by clicking on the favorite-icon.  
This action sends a recipe object to a Django api, which saves the recipe to a Postgres database.  
Saved recipes are displayed in a Material UI accordion.  
Each recipe can be expanded to view details such as ingredients and directions.  
From the expanded view, a user may also delete or edit the recipe. 
```

# Getting Started

## ...With Docker-Compose
```
Bug fixes needed to run the backend with Docker

docker ps 
docker rm -f <ids>

docker compose up -d
docker compose logs -f

```

## ...Without Docker
```
See Project Development section below for local requirements. 

cd backend
python3 -m pip install -r requirements.txt
python3 manage.py runserver

cd client
npm i
npm start
```

# Project Development

## PostgreSQL
```
Install python postgres adapter
- pip3 install psycopg2

In settings.py, change DATABASES object

Start/Stop postgres
- brew services start postgresql
- brew services stop postgresql

Use psql to create the DB
- psql postgres
- \du
- CREATE DATABASE <project_name>;
- GRANT ALL PRIVILEGES ON DATABASE <project_name> TO postgres;
- \list
- \connect <project_name>
- \dt
- \q

- psql -U userName -d databaseName
```

## Backend
```
Install django api framework
- pip3 install djangorestframework

Disable django's default behavior that blocks incoming requests from external domains
- pip3 install django-cors-headers

Create the django project
- django-admin startproject <project_name>

Open the project in VSC
- cd <project_name>
- code .

Add rest framework
- ./<project_name>/settings.py
- INSTALLED APPS = [..., 'rest_framework',]

Open the project in a browser window
- python3 manage.py runserver
- localhost:8000

Create api directory in the root directory
- setup 
-- __init__.py
-- views.py
-- urls.py
- add to INSTALLED APPS in settings.py

Create recipe app
- manage.py startapp recipe 
- setup recipe model

Migrations
- python3 manage.py makemigrations
- python3 manage.py migrate

Add data to DB
- python3 manage.py shell
- from recipe.models import Recipe
- Recipe.objects.create(strMeal="Recipe Name", etc...)
- recipes = Recipe.objects.all()
- print(recipes)
- exit()


Create a new app
- python3 manage.py startapp AppName

Register the app in settings.py
- INSTALLED_APPS = [..., 'rest_framework', 'corsheaders', AppName.apps.AppNameConfig']

Add corsheaders to settings.py middleware
- MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware', ...]

After INSTALLED_APPS in settings.py, make the API accessible from all domains for development. Change to whitelisted domains for production.
- CORS_ORIGIN_ALLOW_ALL = True 
```


## Frontend
```
Create the React app in the parent project folder
- npx create-react-app client --template typescript

Open client on port 3000
- cd client
- npm start

If another process is running on port 3000
- lsof -t -i:9292
==> returns a WID #
- kill -9 #
- npm start

Add .pdf type to react-app-env.d.ts
- declare module '*.pdf'

Install MUI
- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material 
```

##Deployment on Render
```
- Create Postgres DB on Render

- python3 manage.py check --deploy

- update urls.py to accept static urls
- Define the production DB in settings.py
- $export DATABASE_URL=<paste external DB URL from RENDER postgres>
- $python3 manage.py migrate

- gunicorn phbeyondmd.wsgi:application
- Add secret key for DATABASE_URL and value = postgres internal url

- Procfile

- pip3 install gunicorn
- pip3 install dj-database-url
    - import into settings.py

- add STATIC_ROOT to settings.py

- pip3 install whitenoise
- add whitenoise to middleware
- reduce size of static files for efficiency (see bottom of settings.py)

- pip3 freeze > requirements.txt
- create runtime.txt

- Visit your Render dashboard
- create a postgres server
- create a web service and point it to your postgres server on render
- create a static site and push your react frontend to this service
```