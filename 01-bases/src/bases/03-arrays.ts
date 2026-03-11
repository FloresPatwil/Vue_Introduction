const numberArray = [1, 2, 3, 4, 5]
numberArray.push(6);

const numberArray2:(number | string)[] = [...numberArray];
numberArray2.push('7');

//Se puede

console.log({ numberArray })