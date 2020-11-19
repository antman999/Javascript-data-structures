const sort = (arr1, arr2) => {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      merged.push(arr1[i])
      i++
    } else {
      merged.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    merged.push(arr[i])
    i++
  }
  while (j < arr2.length) {
    merged.push(arr[j])
    j++
  }
  return merged 
}