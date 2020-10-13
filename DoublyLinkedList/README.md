# Doubly Linked List 

![DoublyLinkedList](https://www.java2blog.com/wp-content/uploads/2017/09/DoublyLinkedList.png)

## What is a Doubly linked list?
> A data structure that holds information with methods 
> It contains a head, tail, and each is a node with a total length. 
> It is almost identical to a singly linked list but this has a pointer that allows us to go backwards. 

## Why use a doubly linked list?
 A - Because it allows for faster removals since we can work our way backwards instead of linearly starting from the head / if we need a reference to our previous nodes. 
## When not to use a doubly linked list
 A - When you need random access that is not costly in time / Searching. When you don't need to traverse backwards 

## Differences between a doubly linked list and array
doubly Linked List | Singly Linked list
------------ | -------------
Takes up more memory due to previous node. | less memory but no previous node access.
Connected via nodes to the next pointer and previous. | Only has a next pointer.
deletion is O(1) can be accessed from the end.| costly deletion.
No need to write a reverse method. | If you want to reverse it you will need to write a method out.

## Time complexity of doubly linked list
Need| Big O
------------ | -------------
Insertion | O(1)
Removal | O(1) even worst case
Searching | O(N) or O(N/2)
Access | O(N)