# Singly Linked List 

![Singlylinkedlist](https://miro.medium.com/max/953/1*elJncKhH_P9oQglfI1aVQA.png)

## What is a singly linked list?
> A data structure that holds information with methods 
> It contains a head, tail, and each is a node with a total length. 
> Each node has pointer to the next node which holds a value 

## Why use a singly linked list?
 A - Because it allows for much faster inserts/deletions than an array.
## When not to use a singly linked list
 A - When you need random access that is not costly in time / Searching.

## Differences between a singly linked list and array
Singly Linked List | Array
------------ | -------------
No index | Indexed in order
Connected via nodes to the next pointer | insertion and deletion can be expensive
Random access is not allowed(must loop) | can be quickly accessed at any index

## Time complexity of Singly linked list
Need| Big O
------------ | -------------
Insertion | O(1)
Removal | O(1) or *O(N) worst case*
Searching | O(N)
Access | O(N)

## ** Bellow is Pseudocode for some of the methods in the file **