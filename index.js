const Team = require("./team.js"); //Class team will be read from team.js file.
const fs = require("fs"); // requiere fs to read from a txt file
const rl=require("readline"); // requiere readline to read per line in the txt file. 

// read the file members.txt per line.
const lineReader = rl.createInterface({
    input: fs.createReadStream('members.txt')
});

//create a new Team working on "secret project"
const team = new Team("Secret Project");

// for each one of the lines in the txt file split the lines every "," is found and put them in an array
lineReader
    .on('line', function (line) {
        const member = line.split(","); //creatng array with elements of each line
        team.addProgrammer(member[0],member[1],member[2], member[3]); //call addProgrammer function from Team Class with the info from the txt file.
    })
    .on('close', process); //once linereader is done "reading", call process function

// process function 
function process() {
   //console.log(team);
   // loop into the team and call printProg function inside Programmer Class.  
    for(let i=0; i<team.programmerCount(); i++){
      team.programmer[i].printProg();
    }
    //print how many team members are with programmerCount function
    console.log(`There are ${team.programmerCount()} team members`);

}