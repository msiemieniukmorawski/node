try {
  const result = 2 / 0;
  if (result === Infinity) {
    throw Error("divide by 0"); // (*)
  }
} catch (error) {
  console.log(error.message);
}
