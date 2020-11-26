# 2Sum 

## Question
> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
> You may assume that each input would have exactly one solution, and you may not use the same element twice.

## Questions to ask interviewer / self 
1. Is the array sorted 
2. Can it have negative numbers? 
3. What happens if the sum is not found? 
4. Does it include duplicates


## Examples
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]
```

## Thoughts 
> So Given [4,2,6,3,15,1,12] find what 2 numbers add up to 16 
>                              ^   ^ 
>My first thought is that we can have one pointer stay at a certain point while the other moves along the array checking if it sums up to the target. If it doesn't the first pointer moves up one and repeats the process
>The problem with the approach above ^^^ is that having that nested loop can double our time complexity. 


## Pseudocode
1. We can start by creating an object 
2. Then we do an initial loop and add all the numbers of the original array into the object. Since there are no duplicates we don’t check but we could add an IF statement to check.
3. So our obj structure might look like { 5 : 3}
>                                         ^   ^
>                        		     Value   index
4. Then we want to create a remainder var which will be the target - the value at that index 
5. Then we can write an if statement to check if the remainder in the object exist. 
6. As a last check we can ask ok is the same index because if it is then its a duplicate so we can use ! to check if not. Then we return the array.
