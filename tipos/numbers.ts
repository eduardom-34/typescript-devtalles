(() => {
  let avengers: number = 10;

  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log('Estamos en problems');
  } else {
    console.log('Nos salvamo');
  }

  avengers = Number('55A');

  console.log({ avengers });
})();
