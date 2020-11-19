# Merge Sort 

![mergeSort](https://media.geeksforgeeks.org/wp-content/cdn-uploads/Merge-Sort-Tutorial.png)

## What is merge sort?
> A sorting algorithm which splits up arrays down to one and builds them up comparing them. This drastically improves sorting speed

## Big O?
 A - Worst case O(n log n) which is a huge improvement from O(n^2)

### Steps for creating a merge sort
> Merge sort is divided in two parts. a merge fucntions which takes 2 sorted arrays and merges them back. Secondly the sorting function.

##### Merge
1. Create a function that takes 2 arrays. 
2. Create an empty array which we can called merged and this is what we will return at the end. 
3. create 2 pointers to use for both arrays. We will be using a while loop
4. The while loop will run as long as i is smaller than array one and j is smaller than array two.
    - In the loop we want to check if arr2 at index j is bigger than arr1 at index i. 
    - If it is we know that the number smaller and should be pushed in first. So we push arr1[i] into merged and increment i by one. 
    - Next we can write an else statement this will cover if arr1 is bigger and or if they are the same. 
      - Here will just push arr2[j] into merge and increment j by one
5. Next problem we face is what if we run out of numbers to compare on one array. 
    - We can just do 2 while loops one for arr1 and arr2 these will run only if theres any left. We can just push the values into merged without any further check.
6. We return merged 


