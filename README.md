# Steps for local setup

1. Clone repo
2. Run yarn install in root folder (spotify-like)
3. Run yarn start.
4. View spotify-like in the browser http://localhost:3000
5. Login with spotify ID.



# Design

Page consist of two sections
1. Left section has SideBar compononent which has spotify logo
2. Right section has 2 componets:
    * Header : Main header has Section title and navigation with three options(views) 
     1. Featured List
     2. Latest
     3. Genres
     
    * MainView: This is grid view which renders different results based on navigator options.
                Default selected view is Featured List.

 

 # Folder structure

 spotify-like 
        |
        |__ src -
                |-- actions
                |-- components
                |-- layout
                |-- reducers
                |-- App.js
                |-- index.js
                |-- App.css

                
               
  ++++++++++           ++++++++++            ++++++++++          ++++++++++          ++++++++++         +++++++++ 

