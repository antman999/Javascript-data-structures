const twoSum = (nums, target) => {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let numsToadd = nums[i]
    if (!obj[numsToadd]) {
      obj[numsToadd] = i
    }
  }
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i]
    if (remainder in obj) {
      if (i !== obj[remainder]) {
        return [i, obj[remainder]]
      }
    }
  }
}

console.log(twoSum([3, 6, 5, 2, 1, 9], 12))
