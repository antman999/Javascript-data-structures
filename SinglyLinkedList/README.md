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

### .push()
> 1. We want to create a new node to give it all the properties it needs. 
> 2. Before starting we want to check some edge case like if there is no head `(!this.head)` we want to make that node the head and tail. 
> 3. Otherwise make the next item of the tail `this.tail.next` the new instance of that node
> 4. Make the tail the new node 
> 5. We want to increment length and return the list 
> * *We do this because push is just placing a new node at the end of the list *

### .pop()
> * **Pop is a bit different since we are removing the last node. So we are removing the tail but there needs to be a new tail. We cant traverse to the previous one so we need to loop all the way to the end -1**
> 1. This method wont take any arguments.
> 2. If theres no head return undefined.
> 3. Lets make a variable as a starting point equal to the head. 
> 4. And another variable to keep track of the previous one so, make it equal to the last variable `let previous = current`
> 5. Then we loop until the is no next but keep in mind previous will always be behind current giving us the -1 which is going to be the new tail.
> 6. Once the loop is done make the tail equal to the 'previous' variable.
> 7. We make the next of the tail equal to null because it still has a reference to the previous tail.
> 8. Decrement the length by one.
> 9. We should be done now but we want to check for a edge case. what if the length was one? we make the head and tail equal to null. 
> 10. return the previous tail 

### .shift()
> 1. If theres no head return undefined.
> 2. We place the head in a variable `let head = this.head`
> 3. We make the head the head.next `this.head = head.next`
> 4. Decrement the length by one 
> 5. If the length after that is 0 make the tail equal null
> 6. Return the head

### .unshift()
> 1. Unshift takes a value and makes it a new node
> 2. If there is no head just push the node using the method we built
> 3. Else make the .next of the given node equal to the head
> 4. Make the head the given new node
> 5. Increment the length 
> 6. return the list 



