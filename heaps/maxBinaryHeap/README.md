# Max Binary Heap

![maxbinaryheap](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/1200px-Max-Heap.svg.png)

## What is a max binary heap?
> A tree data structure. Unlike a binary search tree theres no order of left(must be less) and right(must be bigger) but at most can have 2 children. The only requirement of a max binary heap is that the biggest number is the parent.
> With a max binary heap when you insert a number it will bubble up to it's correct spot. 
> There is also a min binary heap the only difference is the minimum number will be the parent  

## Why use a Max binary heap?
 A - Because it has a O(log n ) insertion and removal.
## When not to use a max binary 
 A - searching with a binary heap is O(n) since we have to check every single node / value.


## Time complexity of max binary heap
Need| Big O
------------ | -------------
Insertion | O(log n)
Removal | O(log n)
Searching | O(N)