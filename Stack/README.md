# Stack

![Stack](https://cdn.programiz.com/sites/tutorial2program/files/stack.png)

## What is a Stack?
> A "LIFO" data structure, Last In First Out. 
> The last element added to the stack will be the first element out 
> Think about a stack of plates, the last one added will be the first cleaned or used

## Why use a stack?
 A - Because you can push and pop in constant time.
## When not to use a stack?
 A - Searching and accessing the contents.

## Time complexity of Stacks
Need| Big O
------------ | -------------
Insertion | O(1)
Removal | O(1) 
Searching | O(N)
Access | O(N)

## ** Bellow is Pseudocode for some of the methods in the file **

### .push()
> 1. We want to create a new node to give it all the properties it needs. 
> 2. If there are no values `!this.first` set the first and last to newly created node
> 3. Else create a var that stores the current first property on the stack meaning the last one 
> 4. Reset the first property to be the new node
> 5. Set the next property to be the variable and increment length by one   