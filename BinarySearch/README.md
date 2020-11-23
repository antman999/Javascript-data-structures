# Binary Search

![BinarySearch](https://miro.medium.com/max/1200/1*EYkSkQaoduFBhpCVx7nyEA.gif)

## What is Binary Search?
> A searching algorithm made for sorted data. It works by having 3 pointers and cuts down each loop by half until it finds the needed data. Only Works For sorted data!!

## Big O?
 A - Binary Search is amazing but only with sorted data. the time Complexity is (log n) which is the second best next to O(1). 

### Steps for creating a Binary search
1. Our function will take a sorted array and a target to find. 
2. Start by creating a left pointer which is set to 0 since it will start at the beginning.
3. Create a right pointer. This pointer will be set to ` arr.length - 1 `. this will have us at the ending of the array. 
4. We want to create a loop while left is smaller or equal to right. 
  - In the loop we want to create a middle variable this is going to be `Math.floor((left + right)/2)` We use floor so it rounds down and to get the half / middle we add left + right and divide it by 2. 
  - We want to check if our middle index is the target if it is we return the index which it was found in. 
  - If the middle index is too high compared to the target then we know we can cut out the entire right side (this is what makes Binary search efficient we wont need to have extra loops.) 
   - We make our right variable equal to middle - 1 since we know middle is not the target. 
  - Else we know the the middle is too low so we make the start equal to middle + 1.
5. We can return either false or undefined if nothing is found. after the loop is done. 
