"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downer Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.23234,
    };
    // const { poder, vision } = avengers;
    // console.log(poder.toFixed(2), vision.toUpperCase());
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    // printAvenger(avengers);
    const avengersArr = ['Cap. America', true, 154.23];
    // const [capi, ironman, seriaUnNumero] = avengersArr;
    // console.log({ ironman, capi, seriaUnNumero });
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    const captainAmerica = {
        name: 'Capitan America',
        weapon: 'Escudo'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, thor, captainAmerica];
    // for (const avenger of avengers) {
    //   console.log( avenger.name, avenger.weapon );
    // }
})();
(() => {
    // console.log('a');
    const nombre = 'fernando';
    const getName = () => {
        console.log('Viejo gtName');
    };
})();
//# sourceMappingURL=main.js.map