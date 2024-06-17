(() => {

  interface Xmen {
    name: string,
    realName: string,
    mutanPower?( id: number ):string,
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    public age: number = 1;
    public name: string = 'no named yet';
    public realName: string = 'no named yet';

    mutantPower( id: number ) {
      return this.name + ' ' + this.realName;
    }
  }

})()