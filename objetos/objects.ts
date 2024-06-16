(() => {
  let flash: {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string | undefined;
  } = {
    name: 'Barry Allen',
    age: 24,
    powers: [1, 2],
  };

  let superman: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string | undefined;
  } = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Super velocidad'],
  };
})();
