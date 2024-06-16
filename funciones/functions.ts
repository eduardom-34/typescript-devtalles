(() => {
  let hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activateBatisignal = (): string => {
    return 'Batisenial activada!';
  };

  console.log(typeof activateBatisignal);

  const heroName = returnName();
})();
