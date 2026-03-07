# Graphs - Detailed Review Questions

---

## Question 1
Compare BFS and DFS algorithms with time complexity and applications.

**Answer:** Breadth-First Search (BFS):

Algorithm:
1. Start from source, mark visited, enqueue
2. While queue not empty:
   - Dequeue vertex
   - Process it
   - Enqueue all unvisited neighbors

Time Complexity: O(V + E)
Space Complexity: O(V)

Implementation:
```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        vertex = queue.popleft()
        print(vertex, end=' ')
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

Applications:
- Shortest path in unweighted graph
- Level-order traversal
- Finding connected components
- Social network friend suggestions

Depth-First Search (DFS):

Algorithm:
1. Start from source, mark visited
2. Process vertex
3. Recursively visit unvisited neighbors

Time Complexity: O(V + E)
Space Complexity: O(V)

Implementation:
```python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start, end=' ')
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
```

Applications:
- Detecting cycles
- Topological sorting
- Path finding
- Maze solving
- Strongly connected components

---

## Question 2
Explain Dijkstra's algorithm with step-by-step execution.

**Answer:** Dijkstra's Algorithm:
- Finds shortest path from single source
- Works for non-negative weights
- Greedy approach

Algorithm:
1. Initialize distances: source = 0, others = ∞
2. Add all vertices to priority queue
3. While queue not empty:
   - Extract minimum distance vertex
   - For each neighbor:
     - If new distance < current:
       - Update distance
       - Update parent

Example:
Graph with vertices: A, B, C, D, E
Starting from A

Step-by-step:
- Initial: A=0, B=∞, C=∞, D=∞, E=∞
- From A: B=4 (A→B), C=2 (A→C)
- Pick C (2): D=4 (C→D)
- Pick B/D (4): E=5 (B→E) or (D→E)
- Pick E: Done

Shortest paths from A:
- A→B: 4
- A→C: 2
- A→C→D: 4
- A→B→E: 5

Time Complexity:
- With array: O(V²)
- With binary heap: O(E log V)
- With Fibonacci heap: O(E + V log V)

---

## Question 3
Explain Kruskal's and Prim's algorithms for MST.

**Answer:** Minimum Spanning Tree (MST):
- Connects all vertices with minimum total weight
- No cycles
- V-1 edges

Kruskal's Algorithm:
- Sort edges by weight
- Add edges that don't form cycle
- Use Union-Find (Disjoint Set)

Steps:
1. Sort all edges by weight
2. For each edge (in order):
   - If adding doesn't form cycle: include
   - Else: skip
3. Stop when V-1 edges

Time: O(E log V)

Example:
Edges sorted: AB(1), CD(2), AC(3), BD(4), AD(5)
- Add AB ✓
- Add CD ✓
- Add AC → forms cycle with AB, CD? No ✓
- Add BD → forms cycle? Yes, skip
- Add AD ✓
MST edges: AB, CD, AC (total: 1+2+3=6)

Prim's Algorithm:
- Start from arbitrary vertex
- Grow tree by adding minimum edge

Steps:
1. Start with vertex 0 in tree
2. While all vertices not in tree:
   - Add minimum weight edge connecting tree to new vertex
3. Stop when all vertices included

Time: O(V²) or O(E log V)

---

## Question 4
Explain the Floyd-Warshall algorithm for all-pairs shortest path.

**Answer:** Floyd-Warshall Algorithm:
- Finds shortest paths between all pairs
- Dynamic programming approach
- Works with negative weights (no negative cycles)

Algorithm:
```python
n = len(graph)
dist = graph.copy()  # Initialize

for k in range(n):           # Via intermediate k
    for i in range(n):       # Source i
        for j in range(n):   # Destination j
            if dist[i][k] + dist[k][j] < dist[i][j]:
                dist[i][j] = dist[i][k] + dist[k][j]
```

Time Complexity: O(V³)
Space Complexity: O(V²)

DP Approach:
- dp[k][i][j] = shortest path from i to j using vertices 0..k
- Recurrence: dp[k][i][j] = min(dp[k-1][i][j], dp[k-1][i][k] + dp[k-1][k][j])

Example:
4 vertices, initial distance matrix:
    A   B   C   D
A   0   5  ∞  10
B  ∞   0   3  ∞
C  ∞  ∞   0   1
D  ∞  ∞  ∞   0

After algorithm, get all-pair shortest paths

Can detect negative cycles:
- If dist[i][i] < 0 after algorithm
- Negative cycle exists

---

## Question 5
Explain topological sorting with Kahn's algorithm.

**Answer:** Topological Sorting:
- Linear ordering of vertices in DAG
- For every edge (u,v), u comes before v
- Only for Directed Acyclic Graphs

Kahn's Algorithm:
1. Calculate in-degree for all vertices
2. Add all vertices with in-degree 0 to queue
3. While queue not empty:
   - Remove vertex from queue
   - Add to topological order
   - Decrease in-degree of neighbors
   - If neighbor becomes 0, add to queue

Example:
Graph: A→C, B→C, B→D, D→E
In-degrees: A=0, B=0, C=2, D=1, E=1

Steps:
- Queue: A, B
- Process A: Remove, reduce C to 1
- Queue: B
- Process B: Remove, reduce C to 0, D to 0
- Add C, D to queue
- Process C: Remove
- Process D: Remove, reduce E to 0
- Add E to queue
- Process E

Topological Order: A, B, C, D, E

Applications:
- Course prerequisite ordering
- Build systems
- Task scheduling
- Package dependency resolution

---

## Question 6
Explain strongly connected components with Tarjan's algorithm.

**Answer:** Strongly Connected Component (SCC):
- In directed graph
- Maximum subgraph where every vertex reachable from every other
- Vertices in same SCC can reach each other

Tarjan's Algorithm:
- Uses DFS
- Finds SCCs in O(V+E)
- Uses stack and discovery times

Key Concepts:
- Discovery time (disc[v]): When vertex first visited
- Lowest reachable (low[v]): Lowest discovery time reachable from v's subtree

Algorithm:
```python
def tarjan_scc(graph):
    index = 0
    stack = []
    on_stack = set()
    indices = {}
    low = {}
    sccs = []
    
    def strongconnect(v):
        nonlocal index
        indices[v] = low[v] = index
        index += 1
        stack.append(v)
        on_stack.add(v)
        
        for w in graph[v]:
            if w not in indices:
                strongconnect(w)
                low[v] = min(low[v], low[w])
            elif w in on_stack:
                low[v] = min(low[v], indices[w])
        
        if low[v] == indices[v]:
            scc = []
            while True:
                w = stack.pop()
                on_stack.remove(w)
                scc.append(w)
                if w == v:
                    break
            sccs.append(scc)
    
    for v in graph:
        if v not in indices:
            strongconnect(v)
    
    return sccs
```

---

## Question 7
Explain bipartite graph testing using BFS.

**Answer:** Bipartite Graph:
- Vertices can be divided into two disjoint sets
- No edge within same set
- All edges between sets

Testing using BFS (2-coloring):
1. Start BFS from any vertex
2. Color it (say set A)
3. Color all neighbors opposite (set B)
4. If conflict found → not bipartite
5. Continue until all vertices colored

Algorithm:
```python
def is_bipartite(graph):
    color = {}  # -1 = unset, 0 = set A, 1 = set B
    
    for start in graph:
        if start not in color:
            queue = [start]
            color[start] = 0
            
            while queue:
                v = queue.pop()
                
                for neighbor in graph[v]:
                    if neighbor not in color:
                        color[neighbor] = 1 - color[v]
                        queue.append(neighbor)
                    elif color[neighbor] == color[v]:
                        return False
    
    return True
```

Example:
Graph: 0-1, 1-2, 2-0 (triangle) → Not bipartite
Graph: 0-1, 1-2, 2-3, 3-0 (cycle of 4) → Bipartite

---

## Question 8
Explain graph representations - adjacency matrix vs adjacency list.

**Answer:** Adjacency Matrix:
- 2D array of size V × V
- matrix[i][j] = weight or 1/0
- Space: O(V²)
- Check edge: O(1)
- Add edge: O(1)
- Get neighbors: O(V)

Python:
```python
graph = [[0]*n for _ in range(n)]
graph[i][j] = 1  # edge exists
```

Use when:
- Dense graphs
- Frequent edge checking needed
- V is small

Adjacency List:
- Array of lists
- Each vertex has list of neighbors
- Space: O(V + E)
- Check edge: O(degree)
- Add edge: O(1)
- Get neighbors: O(degree)

Python:
```python
graph = [[] for _ in range(n)]
graph[i].append(j)  # edge i→j
```

Use when:
- Sparse graphs
- Memory is limited
- Iterating neighbors often

Comparison:
Feature        | Matrix  | List
---------------|---------|------
Space (dense)  | V²      | V+E
Space (sparse) | V²      | V+E
Check edge     | O(1)    | O(V)
Add edge       | O(1)    | O(1)
Neighbors      | O(V)    | O(degree)

---

## Question 9
Explain Eulerian and Hamiltonian paths.

**Answer:** Eulerian Path/Circuit:
- Visits every edge exactly once
- Eulerian Circuit: Starts and ends at same vertex
- Eulerian Path: Can start and end at different vertices

Conditions:
- Undirected graph:
  - Circuit: All vertices with even degree
  - Path: Exactly 0 or 2 vertices with odd degree
  
- Directed graph:
  - Circuit: Equal in-degree and out-degree for all
  - Path: At most 2 vertices with (out - in) = 1 and (in - out) = 1

Finding Eulerian Path (Hierholzer's):
1. Start from vertex with odd degree (or any for circuit)
2. Follow edges until stuck
3. Cycle found, splice into main path

Hamiltonian Path/Circuit:
- Visits every vertex exactly once
- NP-complete problem
- No efficient algorithm known

Conditions (sufficient but not necessary):
- Dirac's theorem: If n ≥ 3 and every vertex degree ≥ n/2 → Hamiltonian

Differences:
Eulerian: Every edge once (easy to find)
Hamiltonian: Every vertex once (hard problem)

---

## Question 10
Explain graph coloring and its applications.

**Answer:** Graph Coloring:
- Assign colors to vertices
- No two adjacent vertices share color
- Minimum colors = chromatic number

Applications:
- Map coloring (4 colors theorem)
- Scheduling problems
- Register allocation in compilers
- Sudoku solving
- Frequency assignment

Greedy Coloring Algorithm:
1. Order vertices
2. Assign smallest available color
3. Skip if adjacent has that color

Example:
```python
def greedy_color(graph):
    colors = {}
    for vertex in graph:
        forbidden = set()
        for neighbor in graph[vertex]:
            if neighbor in colors:
                forbidden.add(colors[neighbor])
        
        color = 0
        while color in forbidden:
            color += 1
        colors[vertex] = color
    
    return colors
```

Four Color Theorem:
- Any planar graph can be colored with 4 colors
- Proved using computers (1976)

Chromatic Number:
- Minimum colors needed
- Finding it is NP-hard
- Bounds: χ(G) ≥ ω(G) (clique number)
- χ(G) ≥ Δ(G) + 1 (max degree) for some graphs

---

*End of Graphs Detailed Questions*
