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

### Depth First Search (recursive)
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