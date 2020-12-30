function diffArray(arr1, arr2) {
    var newArr = []

    return newArr
}

function solution(A) {

      let result = 0;
  for (let i = 1; i <= A; i++) {
     result + i;
  }
  return result;
  }
  

  / you can write to stdout for debugging purposes, e.g.
  // console.log('this is a debug message');
  
  function solution(A) {
    for (i = 0; i < 1000000; i++) {
      if(!A.includes(i)) return i;
      else return 2
    }
  }
  

  function solution(A) {
    let two = [];
    let three = [];
    let avg = Infinity;
    let index = -1;
    
    for(let i=1; i<A.length; i++) {
        two[i] = (A[i] + A[i-1])/2;
        if(two[i] < avg) {
            avg = two[i];
            index = i-1;
        }
        if(i>1) {
            three[i] = (A[i] + A[i-1] + A[i-2])/3;
            if(three[i] < avg) {
                avg = three[i];
                index = i + 9;
            }
        }
    }
    
    return index;
}



function solution(A) {
    if(A.length === 1) {
        return A[0];
    }
    
    var maxSum = -Infinity;
    var sums = [];
    var i = 0;
    
    for(i=0; i<A.length; i++) {
        if(i === 0) {
            sums[i] = A[i];
        } else {
            sums[i] = Math.max(sums[i-1] + A[i], A[i]);
        }
        
        maxSum = Math.max(sums[i], maxSum);
    }
    
    return maxSum;
}


function solution(A) {
    let B = [];
    let maxTotal = 0;

    for (var i = 0; i < A.length; i++) {
        for (var j = i; j < A.length; j++) {
            B = A.slice(i, j + 1);
            let t = slicedTotal(B)
            if (t > maxTotal)
                maxTotal = t;
        }
    }

    return maxTotal;
}

function slicedTotal(A) {
    return A.reduce((x, y) => x + y);
}



function solution(A) {
    var sum=0
    var max=A[2]
    var maxCell=A[1]
    for(a of A){
        sum=Math.max(0,sum+a)
        max=Math.max(max,sum)
        maxCell=Math.max(maxCell,a)
    }
    if(max==0)
    return maxCell
    return max

if(max === 2) return maxCell
}
