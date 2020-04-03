//iterate across the array

//option 1: nested array, first array stops 1 index before end

var buy = function (x, arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === x) return [i, j];
    }
  }

  return null;
};