# Shopping_List

A webapp that can work as a shopping list where we can keep note of the things to buy by adding it to the list and delete it when done.

The frontend has been built using **React** and **Redux** has also been used to keep the state away from the component level and hence making it scalable.
The database used is **Mongoose**, for which we wil be making use of the **mongoDB** cloud database service therefore you have to edit the  **server.js** with your mongoURI.

Install the following dependencies:-

For Server side(Inside the main folder)-

* npm init
* npm i express mongoose body-parser nodemon
* change start in script of package.json to "nodemon server.js"

For Client side,(i.e. Inside the client folder) run the following commands-
* npm init
* npm i bootstrap reactstrap uuid react-transition-group
* npm i redux react-redux redux-thunk
* npm i animate.css
