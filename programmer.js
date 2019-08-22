class Programmer {
    constructor(name, position, age, language) {
      this.name = name;
      this.position = position;
      this.age = age;
      this.language = language;
    }

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
  
  // exporting Programmer constructor
  module.exports = Programmer;