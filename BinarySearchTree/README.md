# Binary Search Tree

![BST](https://miro.medium.com/max/1194/1*ziYvZzrttFYMXkkV9u66jw.png)

## What is a Binary search tree?
> A data structure that consist of nodes just like a linked list but this uses a parent child structure. 
> Trees are non linear unlike linked list they can lead to many place. 
> There are many tree structures but we will follow a binary search tree style. 

## Why use a Binary Search tree?
 A - A BST can very useful to have a structure if you need order as values to the left are lower and right are higher. 
## When not to use a Binary Search tree?
 A - If the order is not important or the search tree will not be organized, then you can use a linked list. 

## Things to know about BST.
* In a bst all numbers to the left are smaller than the parent. All numbers to the right are bigger in value. 
* Parents at most can have 2 children at most (a smaller and or bigger one.)
* Searching can be really fast since you can keep chopping off by half since you know values to the left are smaller and right are bigger. 


## Terminology
Name| Meaning
------------ | -------------
Root | The top node in a tree.(tip top)
Child | A node directly connected to another node when moving away from the root 
Parent | the converse notion of a child. Anything above is a parent node.
Sibling |A group of node with the same parents. 
Leaf | a node with no children 
Edge | the connection between one node and another 

## ** Below is Pseudocode for some of the methods in the file **



# Tree Traversal (BFS) and (DFS)

## Breadth-first search or (BFS)
> This method of traversing a tree takes advantage of searching across the tree. It will search the siblings the make its way down one and do it again. 

![BFS](https://hackr.io/blog/media/architecture-of-bfs.png)

## Steps BFS
1. Create a queue(this can be an array) and a variable to store the values of nodes visited.
2. place the root node in the queue
3. Loop as long as there is anything in the queue
4. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes 
5. If theres a left property on the node dequeued add it to the queue.
6. if theres a right property on the node dequeued add it to the queue 
7. Return the variable
