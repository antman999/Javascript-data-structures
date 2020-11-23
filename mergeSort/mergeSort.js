const merge = (arr1, arr2) => {
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
    merged.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    merged.push(arr2[j])
    j++
  }
  return merged 
}

const sort = arr => {
  if(arr.length <=1) return arr
  let middle = Math.floor(arr.length / 2)
  let left = sort(arr.slice(0, middle))
  let right = sort(arr.slice(middle))
  return merge(left, right )
}