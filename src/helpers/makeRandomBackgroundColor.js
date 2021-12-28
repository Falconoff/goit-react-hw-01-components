export function getRandomBackgroundColor(min, max) {
  const makeRandom = () => Math.floor(Math.random() * (max - min)) + min;

  return {
    backgroundColor:
      'rgb(' +
      makeRandom(0, 200) +
      ', ' +
      makeRandom(0, 200) +
      ', ' +
      makeRandom(0, 200) +
      ')',
  };
}
