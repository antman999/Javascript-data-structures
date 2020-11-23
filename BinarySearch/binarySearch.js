const binarySearch = (arr, target) => {
  let start = 0
  let end = arr.length - 1;
  while (start < end) {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle] === target) {
      return middle
    } 
    if (arr[middle] > target) {
      end = middle - 1 
    } else {
      start = middle + 1
    }
  }
  return false
}