"use strict";
(() => {
    let hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batisenial activada!';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
