// const arr = 
function peak(arr) {

  for (let i = 1; i < arr.length - 1; i++) {
    let leftSum = arr.slice(0, i).reduce((accumulator, currentValue) => accumulator + currentValue);
    let rightSum = arr.slice(i + 1).reduce((accumulator, currentValue) => accumulator + currentValue);

    if (leftSum === rightSum) return i;
  }
  return -1;
}
console.log(peak([36, 37, 38, 39]))