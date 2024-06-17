(() => {

  interface Client {
    name: string,
    age?: number,
    address: Address,
    getFullAddress( id: string ):string; 
  }

  interface Address {
    id: number,
    zip: string,
    city: string
  }
  
  const client: Client = {
    name: 'Cesar',
    age: 25,
    address: {
      id: 125,
      zip: 'KYS SUD',
      city: "Ottawa"
    },
    getFullAddress( id: string ) {
      return this.address.city;
    }
  }

  const client2: Client = {
    name: 'Melissa',
    age: 30,
    address: {
      city: "Toronto",
      id: 120,
      zip: 'KTS SD',
    },
      getFullAddress( id: string ) {
        return this.address.city;
      }
  }




})()