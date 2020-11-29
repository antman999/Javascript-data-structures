# Graphs

![graph](https://adrianmejia.com/images/graph-parts.jpg)

## What is a graph?
> A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.

## Why use a graph?
 A - A graph can be very useful to model many things such as users, data and connections. 

## Undirected and Directed graphs
1. A directed graph has pointers pointing to the next node or both. (Example - Twitter You can follow people and they can follow you back.)
2. Undirected graphs have no directions can be modeled any way. (Example - Facebook friends 2 way connection)
![graphCp](https://miro.medium.com/max/4106/1*HpYMnHjGZWmH9NKRG05lAg.jpeg)

## Weighted Graph Vs Unweighted Graph
1. A weighted graph has a value attached to their vertices this can be to prioritize a node / connection.
2. An unweighted graph doesn't have them.
![graphCp](https://www.bogotobogo.com/python/images/Graph/graph_diagram.png)  

## How do we store a graph? 
1. We can store in rows and columns called adjancency matrix or in an array adjancency list 
> For most of the methods we will build we will use a list to model it. 
![types](https://www.researchgate.net/profile/Anirban_Mitra11/publication/272172339/figure/fig1/AS:392001062227980@1470471744830/Fig-3-i-Digraph-G-ii-Adjacency-Matrix-of-G-iii-Adjacency-List-of-G-Considering-an.png)

## Traversing a graph
> like a binary search tree which is also a graph we can traverse the graph using depth first (DFS) and breadth first search (BFS). 
> Im going to cover the steps for both traversal methods. 
![traverse](https://open4tech.com/wp-content/uploads/2019/01/BFS-DFS.png)

### 1. Depth First Search (recursive)
1. Create a function that takes in a starting point from the graph. 
2. Create a results array this can be empty and will be returned at the end. 
3. Create a visited object this can be empty. We will use this to mark nodes we have visited like this ``` visited[5] = true ```
4. Create a variable called list or adjacencyList and set this to ``` this.adjacencyList``` this is because in our recursive function we wont have the same output of the keyword ``` This ```.
5. Next we can write our traverse function and this will take a vertex. 
6.  -Base case- If the vertex is null return null. 
7. Now we can set our vertex in the object visited to true. 
8. we can push the vertex into our results array. 
9. We need to find the children so we need to write a foreach loop
   * We need to loop thru our list we created earlier ``` list[vertex] ```.
   * In the loop we need to create an if statement to check if we have visited this node before. If not we can call our helper function with that neighbor
10. Outside the recursive function we can now call it with the starting node. 
11. return results.

### 2. Depth First Search (iterative)
>for this Method we will use a stack which is a LIFO structure last in first out. 
1. First we create a function this will also take a vertex.
2. Next we can create a stack which can be an empty array. 
3. Next we can create a results array which we will return at the end. 
4. Next we also need a visited object which can be empty. 
5. we can create a node this should just be nothing for now. 
6. We have to push the node into our stack. 
7. we need to write a while loop and this loop will run until the stack has any length. 
8. next in the node var we need to pop off the the value of the stack.
9. and push it into the results array. 
10. Next we need to find its sibling we do so by looping with a for each loop of our list ``` this.adjacencyList[vertex] ``` and once again ask
  * if the value is not in the visited object lets add it to visited and equal it to true. 
  * Push the value of that sibling into the stack. 
11. Return the results. 

