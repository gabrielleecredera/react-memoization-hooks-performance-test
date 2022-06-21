export const getRandomNumList = (length) => Array.from({length}, () => Math.random());
export const weirdFn = (count) => {
  let x = 0;
  for (let i = 0; i < count; i++) {
    x += 1;
    x /= 2;
  }
  return x;
};
