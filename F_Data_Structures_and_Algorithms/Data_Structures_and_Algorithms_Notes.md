# Data Structures and Algorithms - Study Notes

## Table of Contents
1. [Introduction](#1-introduction)
2. [Arrays](#2-arrays)
3. [Linked Lists](#3-linked-lists)
4. [Stacks and Queues](#4-stacks-and-queues)
5. [Trees](#5-trees)
6. [Graphs](#6-graphs)
7. [Sorting](#7-sorting)
8. [Searching](#8-searching)
9. [Algorithm Analysis](#9-algorithm-analysis)
10. [Complexity](#10-complexity)

---

## 1. Introduction

### What is a Data Structure?
- Organized way to store and manage data
- Enables efficient data access and modification

### Types
- **Linear**: Arrays, Linked Lists, Stacks, Queues
- **Non-linear**: Trees, Graphs, Heaps

### What is an Algorithm?
- Step-by-step procedure to solve a problem
- Input → Process → Output

---

## 2. Arrays

### Characteristics
- **Contiguous memory** locations
- **Fixed size** (in most languages)
- **Random access** via index (O(1))
- **Time Complexity**:
  - Access: O(1)
  - Search: O(n)
  - Insertion: O(n)
  - Deletion: O(n)

### Types
- **1D Array**: Linear list
- **2D Array**: Matrix (row-major, column-major)
- **Dynamic Array**: Resizable (e.g., ArrayList)

---

## 3. Linked Lists

### Node Structure
```
data | pointer
```

### Types
1. **Singly Linked List**: One pointer per node
2. **Doubly Linked List**: Two pointers (prev, next)
3. **Circular Linked List**: Last node points to first

### Operations (Time Complexity)
| Operation | Singly | Doubly |
|-----------|--------|--------|
| Access | O(n) | O(n) |
| Insertion at head | O(1) | O(1) |
| Deletion at head | O(1) | O(1) |
| Insertion at tail | O(n) | O(1)* |
| Search | O(n) | O(n) |

*With tail pointer

---

## 4. Stacks and Queues

### Stack (LIFO - Last In First Out)
- **Operations**: push(), pop(), peek(), isEmpty()
- **Time Complexity**: O(1) for all operations
- **Applications**: Function calls, Expression evaluation, Undo/Redo

### Queue (FIFO - First In First Out)
- **Operations**: enqueue(), dequeue(), front(), rear()
- **Time Complexity**: O(1) for all operations
- **Types**:
  - Simple Queue
  - Circular Queue
  - Priority Queue
  - Deque (Double-ended)

---

## 5. Trees

### Binary Tree
- Each node has at most 2 children

### Binary Search Tree (BST)
- Left child < Parent < Right child
- **Operations**:
  - Search: O(h)
  - Insert: O(h)
  - Delete: O(h)
  - *h = height (log n for balanced)*

### Tree Traversals
1. **Inorder**: Left → Root → Right
2. **Preorder**: Root → Left → Right
3. **Postorder**: Left → Right → Root
4. **Level-order**: BFS (level by level)

### Balanced Trees
- **AVL Tree**: Height difference ≤ 1
- **Red-Black Tree**: Self-balancing BST
- **B-Tree**: Multi-way search tree
- **B+ Tree**: Optimized for disk access

### Heap
- **Max-Heap**: Parent ≥ Children
- **Min-Heap**: Parent ≤ Children
- **Operations**: insert O(log n), extract O(log n)
- **Use**: Priority queue, Heap sort

---

## 6. Graphs

### Types
- **Directed vs Undirected**
- **Weighted vs Unweighted**
- **Cyclic vs Acyclic**

### Representations
1. **Adjacency Matrix**: O(V²) space
2. **Adjacency List**: O(V+E) space

### Graph Traversals
- **BFS (Breadth-First Search)**: Level by level
- **DFS (Depth-First Search)**: Explore deep first

### Shortest Path Algorithms
- **Dijkstra's**: O((V+E) log V) - positive weights
- **Bellman-Ford**: O(VE) - handles negative weights
- **Floyd-Warshall**: O(V³) - all pairs

### Minimum Spanning Tree
- **Kruskal's**: O(E log V)
- **Prim's**: O(E log V)

---

## 7. Sorting

### Comparison Sorting

| Algorithm | Best | Average | Worst | Stable |
|-----------|------|---------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | Yes |
| Insertion Sort | O(n) | O(n²) | O(n²) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | No |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | No |

### Non-Comparison Sorting
- **Counting Sort**: O(n + k)
- **Radix Sort**: O(nk)
- **Bucket Sort**: O(n + k)

---

## 8. Searching

### Linear Search
- **Time**: O(n)
- **Process**: Check each element sequentially

### Binary Search
- **Requirement**: Sorted array
- **Time**: O(log n)
- **Process**: Divide and conquer

### Hashing
- **Hash Table**: Key-value store
- **Hash Function**: Maps keys to indices
- **Collision Resolution**:
  - Chaining (linked list)
  - Open addressing (linear, quadratic, double hashing)

---

## 9. Algorithm Analysis

### Asymptotic Notation
- **Big-O (O)**: Upper bound (worst case)
- **Big-Omega (Ω)**: Lower bound (best case)
- **Big-Theta (Θ)**: Tight bound (average)

### Common Complexities
| Complexity | Name | Example |
|------------|------|---------|
| O(1) | Constant | Array index |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search |
| O(n log n) | Linearithmic | Merge sort |
| O(n²) | Quadratic | Bubble sort |
| O(2ⁿ) | Exponential | Recursive Fibonacci |
| O(n!) | Factorial | Permutations |

---

## 10. Key Concepts

### Recursion
- Function calls itself
- Base case required
- Stack memory used

### Divide and Conquer
- Break problem into subproblems
- Solve recursively
- Combine results

### Dynamic Programming
- Overlapping subproblems
- Optimal substructure
- Memoization or tabulation

### Greedy Approach
- Local optimal choice
- Hope for global optimum
- May not always work

### Backtracking
- Try all possibilities
- Backtrack when failed
- Used in puzzles, combinations

---

## Quick Reference

| Data Structure | Access | Search | Insert | Delete |
|---------------|--------|--------|--------|--------|
| Array | O(1) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1)* | O(1)* |
| Stack | - | - | O(1) | O(1) |
| Queue | - | - | O(1) | O(1) |
| BST (balanced) | O(log n) | O(log n) | O(log n) | O(log n) |
| Hash Table | - | O(1) | O(1) | O(1) |

*At head/tail

---

*Last Updated: 2026*
*Subject: Data Structures and Algorithms*
