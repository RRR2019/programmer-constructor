const Programmer = require("./programmer.js");

class Team {
    constructor(projectName){
        this.programmer = [];
        this.projectName=projectName;
    }
        addProgrammer(name, position, age, language){
        this.programmer.push(new Programmer(name, position, age, language));        
        };

        programmerCount() {
            return this.programmer.length;
          };
    }

    module.exports = Team;


