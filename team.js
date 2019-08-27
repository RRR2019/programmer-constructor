const Programmer = require("./programmer.js"); // Programmer will be called from programmer.js file

//class Team contains an array of programmers, and project name. It also contains a function to create a programmer object
// and a function that tells us how many programmers are in the team.
class Team {
    constructor(projectName){
        this.programmer = [];
        this.projectName=projectName;
    }   
        // function to create a new Programmer object and add it to the programmer array in team.
        addProgrammer(name, position, age, language){
        this.programmer.push(new Programmer(name, position, age, language));        
        };
        // function to count the programmers on the team.
        programmerCount() {
            return this.programmer.length;
          };
    }

    module.exports = Team; // export team so that other files can read it. 


