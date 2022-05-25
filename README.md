# Exam car service. Back end. 2022 05

## Who this project is for:

This project is a back-end part of my final exam at Codeacademy academy. Basically this project serves as a server to transfer info from database to my front-end project and vice versa. It has a connection with database through SQL sintax, where data of database is stored in an .env file. In the database, there should be two tables : users and cars. The users table must have an (id, email and password) with whom you will create a new user to login. Cars table must have info about car that you want to add to a database, like : (id,brand,model,number,owner,phone and year)

## How to install this project to use it on your computer:

1. Download or clone the project from github.
2. In the project terminal write : npm i
   // To install all node_modules files.
3. Rename (.env example) to (.env) and enter your own values.
4. Start the project.

## How to start this project:

1. In the project terminal write : npm start
   // This will start server on port 8080.

## How to use this project:

You can send request's through rest.rest file here in the project, where basic routes are written. There are :

1.  GET cars (Shows all cars from database)
2.  POST cars (Post a new car to database)
3.  DELETE cars (Deletes a new car from database by car id)
4.  POST register (Creates a new user to database)
5.  POST login (Checks if there is a user created in database)

Also you can fetch data from these routes in your front-end project.

### A link to my front-end part of this project : https://github.com/LukasKliukas/exam-car-service-front-end-lukas-kliukas-2022-05
