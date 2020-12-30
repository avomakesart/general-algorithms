function sumAll(arr) {
  const min = arr[0] < arr[1] ? arr[0] : arr[1];
  const max = arr[0] > arr[1] ? arr[0] : arr[1];

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

function sumAll(arr) {
  let sum = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }

  return sum;
}

// console.log(sumAll([1, 4]));


const _getMinAbsSliceSumKadane = (A) => {
    if (!isArrayValid(A)) {
      throw new TypeError('valid array should be provided');
    }
  
    if (A.length === 1) {
      return Math.abs(A[0]);
    }
  
    const arrayLength = A.length;
    let minSum = Math.abs(A[0]);
    let currentSum = 0;
  
    for (let index = 0; index < arrayLength; index++) {
  
      currentSum += A[index];
  
      if (minSum > Math.abs(A[index])) {
        minSum = Math.abs(A[index]);
      }
  
      if (Math.abs(currentSum) < minSum) {
        minSum = Math.abs(currentSum);
      }
  
      if (Math.abs(currentSum) > minSum) {
        currentSum = minSum;
      }
    }
    return minSum;
  };