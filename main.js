"use strict";
(() => {
    ;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    const client = {
        name: 'Cesar',
        age: 25,
        address: {
            id: 125,
            zip: 'KYS SUD',
            city: "Ottawa"
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            city: "Toronto",
            id: 120,
            zip: 'KTS SD',
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map