# Graphs - Study Notes

## Table of Contents
1. [Introduction](#1-introduction)
2. [Graph Representations](#2-graph-representations)
3. [Graph Traversals](#3-graph-traversals)
4. [Minimum Spanning Trees](#4-minimum-spanning-trees)
5. [Shortest Path Algorithms](#5-shortest-path-algorithms)
6. [Graph Connectivity](#6-graph-connectivity)
7. [Special Graphs](#7-special-graphs)

---

## 1. Introduction

### What is a Graph?
- Set of vertices (nodes) connected by edges
- G = (V, E) where V = vertices, E = edges

### Types of Graphs

| Type | Description |
|------|-------------|
| **Undirected** | Edges have no direction |
| **Directed** | Edges have direction |
| **Weighted** | Edges have weights/costs |
| **Unweighted** | All edges equal |
| **Simple** | No self-loops, no parallel edges |
| **Multi** | May have parallel edges |

### Basic Terminology
- **Vertex**: Node (singular of vertices)
- **Edge**: Connection between vertices
- **Degree**: Number of edges incident to vertex
  - In-degree: incoming edges (directed)
  - Out-degree: outgoing edges (directed)
- **Path**: Sequence of vertices
- **Cycle**: Path that returns to start
- **Subgraph**: Part of a graph

### Graph Order
- **Order**: Number of vertices (|V|)
- **Size**: Number of edges (|E|)

---

## 2. Graph Representations

### Adjacency Matrix
- **2D array** of size V × V
- Matrix[i][j] = 1 if edge exists, else 0
- For weighted: store weight
- **Space**: O(V²)
- **Time**:
  - Add edge: O(1)
  - Remove edge: O(1)
  - Traverse neighbors: O(V)

### Adjacency List
- **Array of lists**
- Each vertex has list of neighbors
- **Space**: O(V + E)
- **Time**:
  - Add edge: O(1)
  - Remove edge: O(V) (search in list)
  - Traverse neighbors: O(degree)

### Comparison

| Aspect | Matrix | List |
|--------|--------|------|
| Space | O(V²) | O(V+E) |
| Add Edge | O(1) | O(1) |
| Remove Edge | O(1) | O(V) |
| Check Edge | O(1) | O(V) |
| Dense Graph | Better | - |
| Sparse Graph | - | Better |

---

## 3. Graph Traversals

### BFS (Breadth-First Search)
- **Level by level** traversal
- Uses **queue** data structure
- **Time**: O(V + E)
- **Space**: O(V)

**Algorithm**:
```
1. Start at source, mark visited, enqueue
2. While queue not empty:
   a. Dequeue, process
   b. Enqueue unvisited neighbors
```

**Applications**:
- Shortest path in unweighted graph
- Level-order traversal
- Finding connected components

### DFS (Depth-First Search)
- **Deep as possible** before backtracking
- Uses **stack** (or recursion)
- **Time**: O(V + E)
- **Space**: O(V)

**Algorithm**:
```
1. Start at source, mark visited
2. Process vertex
3. Recursively visit unvisited neighbors
```

**Applications**:
- Detecting cycles
- Topological sort
- Finding connected components
- Path finding

### Comparison

| Aspect | BFS | DFS |
|--------|-----|-----|
| Data Structure | Queue | Stack |
| Memory | More | Less |
| Optimal Path | Yes (unweighted) | No |
| Finds Cycle | No | Yes |

---

## 4. Minimum Spanning Trees (MST)

### What is MST?
- Subgraph that connects all vertices
- Minimum total weight
- No cycles
- |V| - 1 edges

### Algorithms

#### Kruskal's Algorithm
- **Greedy** approach
- Sort edges by weight
- Add edges (no cycle)
- **Time**: O(E log V)
- **Use**: Sparse graphs

**Algorithm**:
```
1. Sort all edges by weight
2. For each edge (in order):
   a. If adding doesn't form cycle: include
   b. Else: skip
3. Stop when |V| - 1 edges
```

#### Prim's Algorithm
- **Greedy** approach
- Start from one vertex
- Grow tree by adding minimum edge
- **Time**: O(V²) or O(E log V) with heap
- **Use**: Dense graphs

**Algorithm**:
```
1. Start with arbitrary vertex
2. While tree doesn't include all vertices:
   a. Add minimum weight edge connecting tree to new vertex
```

### Comparison

| Aspect | Kruskal's | Prim's |
|--------|-----------|--------|
| Approach | Edge-based | Vertex-based |
| Data Structure | Disjoint Set | Priority Queue |
| Best For | Sparse | Dense |
| Time | O(E log V) | O(V²) or O(E log V) |

---

## 5. Shortest Path Algorithms

### Single Source Shortest Path

#### Dijkstra's Algorithm
- **Greedy** approach
- Works for **non-negative** weights
- **Time**: O(V²) or O(E log V)
- **Does not work** with negative weights

**Algorithm**:
```
1. Initialize distances (source = 0, others = ∞)
2. Use priority queue (min distance)
3. Extract min, relax neighbors
4. Repeat until queue empty
```

#### Bellman-Ford Algorithm
- **Dynamic programming**
- Works with **negative weights**
- **Time**: O(VE)
- Detects **negative cycles**

**Algorithm**:
```
1. Initialize distances
2. Repeat V-1 times:
   a. For each edge: relax
3. Check for negative cycle
```

### All Pairs Shortest Path

#### Floyd-Warshall Algorithm
- **Dynamic programming**
- **Time**: O(V³)
- Works with negative weights
- **Space**: O(V²)

**Algorithm**:
```
1. Initialize distance matrix
2. For each intermediate k:
   a. For each pair (i,j):
      i. Update distance via k
```

### Comparison

| Algorithm | Type | Weights | Time |
|-----------|------|---------|------|
| Dijkstra | Single | Non-negative | O(E log V) |
| Bellman-Ford | Single | Any | O(VE) |
| Floyd-Warshall | All Pairs | Any | O(V³) |

---

## 6. Graph Connectivity

### Connected Graph
- Path between every pair of vertices
- Single component

### Connected Components
- Maximal connected subgraphs
- BFS/DFS from unvisited vertices

### Directed Graph Types
- **Strongly Connected**: Path in both directions
- **Weakly Connected**: Underlying undirected is connected

### Tarjan's Algorithm
- Finds strongly connected components
- Uses DFS
- **Time**: O(V + E)

---

## 7. Special Graphs

### Trees
- **Graph** with **no cycles**
- **Connected** + **|E| = |V| - 1**
- Rooted tree: Has root node
- Binary tree: Max 2 children
- BST: Binary Search Tree

### Directed Acyclic Graph (DAG)
- **Directed** + **No cycles**
- Used in task scheduling, dependencies

### Bipartite Graph
- Vertices can be divided into two sets
- No edge within same set
- **Testing**: BFS with 2-coloring

### Complete Graph
- Every pair of vertices connected
- **|E| = n(n-1)/2** (undirected)

### Regular Graph
- All vertices have same degree

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| BFS | Level by level, queue |
| DFS | Deep first, stack/recursion |
| MST | Kruskal's/Prim's |
| Shortest Path | Dijkstra's (positive), Bellman-Ford (any) |
| Cycle | Path returning to start |
| Tree | No cycles, V-1 edges |
| DAG | Directed, no cycles |

---

*Last Updated: 2026*
*Subject: Graphs*
