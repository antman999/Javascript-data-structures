# Priority Queue

![priorityQueue](https://simpledevcode.files.wordpress.com/2015/07/priorityque.gif?w=379)

## What is a min priority queue?
> A tree data structure. Unlike a binary search tree theres no order of left(must be less) and right(must be bigger) but at most can have 2 children. A min priority queue takes in a node with a value and priority. Since we are doing min the minimum value is prioritized 1 > 5. We use the priority to know where to insert. 
## Why use a min priority queue?
 A - Because it has a O( log n ) insertion and removal.
## When not to use a min priority queue
 A - searching with a binary heap is O(n) since we have to check every single node / value.


## Time complexity of min priority queue
Need| Big O
------------ | -------------
Insertion | O(log n)
Removal | O(log n)
Searching | O(N)

## Rules 
1. To find the child nodes of the parent we need to follow these rules ``` n = index  2n + 1 to find the left child and 2n + 2 for the right child.  ```
2. To find the parent nodes from a child it is almost the exact same. n = index ``` (n - 1) / 2```


## Enqueue
1. Write a function that takes in a value and priority. 
2. Push that value into our min priority queue.
3. Next we want to grab the index of that value which should be the length - 1
4. We want to grab the element of that index in a variable
* The next steps in inserting is making sure it's in the right place So we need to bubble up the value to its correct spot. We can either write a function or do it right there. 
6. We want to write a loop and this will check while the index is above 0. Since theres no index below 0 and the if it is the biggest number it will end up in the root which is the 0th index. 
7. The next step is to find the parent node and compare the priorities so we find the parent node by first getting the index we can do so by using ``` (n - 1) / 2 ``` this will give us the parent index 
8. Next we we grab the value of that index into a variable. 
9. We compare if the inserted node priority is smaller than the parent priority. If it is we swap them and continue to do so until it is in the right spot. 
   * We grab the value of the parent index and switch it with the value inserted. 
   * Next we grab the old position of the value and insert the previous parent node there. 
   * The index becomes the parent index. 
10. else break.
  
## dequeue 
> This function will find the highest number and extract it and correctly re-position all the other nodes. 
1. Write a function this will take no Values. 
2. first we Want to grab the Root / biggest value in a variable called ``` min ```. This should be the 0th index . 
3. next we want to pop the last value off. We should place these in a var as well we can name it ```end```.
4. We wan to place our last number end into the root / 0th index 
4. next we want to call our ``` sinkDown ``` function. 
5. Return the max variable.

## SinkDown 
> Sink down will correctly sink the highest priority to its correct spot and find a new min. 
1. first we need 3 variables one called index which will start at 0. The next var is length this should be the length of the heap. The last var is our current root / element this should be called element and should be the first value. 
2. Next we want to write a loop and this will run as long as it is true.
3. Create 2 variables leftchildIndex and rightChildIndex we can use the formulas above to find the child of the head which he already have in a var which is index. 
4. we can also init 2 more variables leftChild and RightChild these will hold values later on. 
5. We also need a swap var which will start at null. 
6. If the left child index is less than the length we know its in bounds.
7. now we can use left child like so ```leftChild = this.values[leftChildIndex] ```
8. Now we compare if leftchild is smaller than the element we swap. 
9. We have to do the same for right child index. 
10. If there is no swaps we break else 
11. we swap values.