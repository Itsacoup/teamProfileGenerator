# teamProfileGenerator


About
Here is my team profile generator. As this is a backend CLI app the code is relatively boilerplate. Started by reviewing the tests and reverse engineering them to create the constructor js files within the library dir. Once those were succesful, I began developing app.js. First reviewed all my requires and global set up. Then create function that runs a series of inquire prompt to feed to constructors. First inquirer generates a list of which position you would like to add ( or exit which builds the team as it ahs been constructed by inputs) once a position is selected, prompts you through a set of criterea. That answer is passed into the appropriate libray constructor function which returns and object to the team member array. When exit is selected, output team is called, this passes the teamMembers array into the provided htmlrender library file which creates team.html in output and displays all your added team members to the webpage when opened. Simply npm install and node app to try for yourself. Thanks for reviewing.

Developers Note: When reveiwing my GitHub repo you will see that there is only one major commit. That is because at this point in the cirriculum I have become rather proficient in javascript and wrote this application in less then 2 hours, and felt no need to make commits early on. Thanks for your consideration there.



TL;DR

Install Contents on drive  
watch demo video
open up terminal of choice
run npm install
run node app.js
complete prompts in terminal, understanding exit will render your finsihed team, so make sure to add some team members
view html in output folder