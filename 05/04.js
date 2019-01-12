const addition = async (a, b) => {
  let result = a + b;
  if (!result % 2 === 0) {
    throw Error("odd"); // (*)
  }
  return result;
};

addition(4, 5)
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
