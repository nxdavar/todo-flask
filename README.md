# Running The Todo Application: 


This application was built using ReactJS + TypeScript for the frontend, Flask a python based back-end library for the backend, and the SQLAlchemy to store a local version of a database to the application.

This application will allow you to do the following: 
1. Add tasks to your todo list 
2. Delete tasks from your todo list upon the click of a button
3. Reset all of your todos so you can start a fresh todo list


In order to run and use this application you need to take the following steps: 


# Setting up the Frontend
1. Cd into the project folder's root
2. In the root of the folder run the command npm install
3. Once all necessary packages have been installed, your application will be up and running at http://localhost:3000 (In the terminal you can command + click this link and it will open it up in your browswer if it does not do so automatically)



# Setting up the Backend
1. Open another terminal window
2. Cd into the project folder's root
3. Cd into the backend folder
4. Create a virtual environment by typing in "python -m <name of your virtual env>"
5. Activate your virtual environment by typing in source "<name of your virtual env>/bin/activate" (Use ls to check if there is a folder called your virtual env's name after creating it in Step 4)
6. Install necessary requirements by typing in pip install -r requirements.txt
7. Start the backend server by typing in npm run start-backend (this not the application you will be interacting with, the application you will be interacting with is the frontend application located at http://localhost:3000)


You might have to restart the frontend in order for the app to work as expected. Now the application should work as intended. If you are curious and want to view updates to the backend, in another window navigate to http://localhost:5000/todos
