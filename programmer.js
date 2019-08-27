// creating the class Programmer that contains: name, position, age, language and a function to print Programmer data.
class Programmer {
    constructor(name, position, age, language) {
      this.name = name;
      this.position = position;
      this.age = age;
      this.language = language;
    }
    // function to print Programmers name, position, age and favorite programming language.
    printProg(){ 
        console.log(`
            -------------   
            Name: ${this.name} 
            Position: ${this.position} 
            Age: ${this.age}
            Favorite Language: ${this.language}
            -------------`);
            
    }   
  }
  
  // exporting Programmer constructor so that another js file can read it.
  module.exports = Programmer;