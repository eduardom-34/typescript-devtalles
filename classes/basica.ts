(() => {
  
  class Avenger {
    
    // private name: string;
    // private team: string = "Capitan";
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    constructor( 
      private name: string, 
      private team: string, 
      public realName?: string,
      avgAge: number = 55,
    ) {}

    private bio() {
      return `${ this.name } (${this.team})`
    }

  }

  // const antman: Avenger = new Avenger('Antman', 'Capitan', 'scott Lang');
  // console.log(antman);
  // console.log(Avenger.getAvgAge());


})()