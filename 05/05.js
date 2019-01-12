const addition = async (a, b) => {
  let result = a + b;
  if (result % 2 === 0) {
    throw Error("odd"); // (*)
  }
  return result;
};

(async () => {
  console.log(await addition(3, 8));
})();
