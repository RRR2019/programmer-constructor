const Team = require("./team.js");
const fs = require("fs");
const rl=require("readline");

// read the file input
const lineReader = rl.createInterface({
    input: fs.createReadStream('members.txt')
});

const team = new Team("Secret Project");
  
lineReader
    .on('line', function (line) {
        const member = line.split(",");
        team.addProgrammer(member[0],member[1],member[2], member[3]);
    })
    .on('close', process);

// code when lineReader is done
function process() {
   console.log(team);
    for(let i=0; i<team.programmerCount(); i++){
      team.programmer[i].printProg();
    }
    console.log(`There are ${team.programmerCount()} team members`);

}