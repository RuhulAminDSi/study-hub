# Data Structures and Algorithms - Detailed Review Questions

---

## Question 1
Explain the difference between array and linked list with time complexities.

**Answer:** Array:
- Contiguous memory locations
- Fixed size (in most languages)
- Random access by index: O(1)
- Insertion at end: O(1) if space available
- Insertion at beginning: O(n)
- Deletion at beginning: O(n)
- Search: O(n) linear, O(log n) binary if sorted
- No memory overhead per node

Linked List:
- Nodes with data and pointer
- Dynamic size
- No random access: O(n) to find element
- Insertion at beginning: O(1)
- Insertion at end: O(n) or O(1) with tail pointer
- Deletion: O(1) at head
- Search: O(n)
- Extra memory for pointers

Comparison:
Operation      | Array  | Linked List
---------------|--------|------------
Access         | O(1)   | O(n)
Insert head   | O(n)   | O(1)
Insert tail   | O(1)   | O(n)/O(1)*
Search        | O(n)   | O(n)
Memory waste  | None   | Pointer overhead
Cache friend  | Yes    | No

*With tail pointer

---

## Question 2
Explain binary search with recursive and iterative implementations.

**Answer:** Binary Search:
- Requires sorted array
- Divide and conquer
- Time: O(log n)

Recursive Implementation:
```python
def binary_search(arr, target, low, high):
    if low > high:
        return -1
    
    mid = (low + high) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search(arr, target, mid + 1, high)
    else:
        return binary_search(arr, target, low, mid - 1)

# Usage
result = binary_search(arr, target, 0, len(arr) - 1)
```

Iterative Implementation:
```python
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    
    while low <= high:
        mid = (low + high) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    
    return -1  # Not found
```

Time Complexity: O(log n)
Space Complexity: O(log n) recursive, O(1) iterative

---

## Question 3
Explain merge sort with step-by-step execution.

**Answer:** Merge Sort:
- Divide and conquer
- Stable sort
- Time: O(n log n)
- Space: O(n)

Algorithm:
1. Divide array into two halves
2. Recursively sort each half
3. Merge sorted halves

Implementation:
```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result
```

Example:
[38, 27, 43, 3, 9, 82, 10]

Split:
[38, 27, 43, 3] | [9, 82, 10]
[38, 27] | [43, 3] | [9, 82] | [10]
[38] [27] [43] [3] [9] [82] [10]

Merge:
[27, 38] [3, 43] [9, 82] [10]
[3, 27, 38, 43] [9, 10, 82]
[3, 9, 10, 27, 38, 43, 82]

---

## Question 4
Explain Dijkstra's algorithm with example.

**Answer:** Dijkstra's Algorithm:
- Single-source shortest path
- Non-negative weights only
- Greedy approach

Algorithm:
```python
import heapq

def dijkstra(graph, start):
    distances = {v: float('inf') for v in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_dist, current = heapq.heappop(pq)
        
        if current_dist > distances[current]:
            continue
        
        for neighbor, weight in graph[current]:
            distance = current_dist + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances
```

Example Graph:
A--4-->B
| \     |
2  1   3
v    v
C--5-->D

From A:
- Initial: A=0, B=∞, C=∞, D=∞
- From A: B=4, C=2, D=1
- From D (1): D=1
- From C (2): B=4 (same), D=1 (smaller, skip)
- From B (4): done

Shortest paths:
- A→B: 4
- A→C: 2
- A→D: 1
- A→C→B: 7

---

## Question 5
Explain AVL tree rotation types.

**Answer:** AVL Tree:
- Self-balancing BST
- Balance factor: height(left) - height(right)
- |BF| ≤ 1 for all nodes
- Rotations to maintain balance

Four Rotations:

1. LL Rotation (Right Rotate):
- Left-left imbalance
- Right rotation on unbalanced node
```
     y                x
    / \             /  \
   x   T3   =>    T1   y
  / \                 / \
 T1  T2              T2  T3
```

2. RR Rotation (Left Rotate):
- Right-right imbalance
- Left rotation
```
   y                x
  / \             /  \
 T1  x     =>    y   T3
    / \         / \
   T2  T3     T1  T2
```

3. LR Rotation (Left-Right):
- Left-right imbalance
- Left rotate child, then right rotate parent
```
   z                 z                  y
  / \              / \               /  \
 T1  y     =>    T1  x      =>     z   x
    / \              / \         / \ / \
   x  T4            T2 y       T1 T2 T3 T4
  / \                  / \
 T2 T3                T3 T4
```

4. RL Rotation (Right-Left):
- Right-left imbalance
- Right rotate child, then left rotate parent

---

## Question 6
Explain hashing and collision resolution techniques.

**Answer:** Hashing:
- Key-value mapping
- O(1) average case for search/insert

Hash Function:
- Should distribute keys uniformly
- Examples: modulo, multiplicative

Collision Resolution:

1. Chaining (Open Hashing):
- Linked list at each bucket
- Insert at head or tail
- Search: O(n) worst, O(1) average

2. Open Addressing:
- Linear Probing: h(k,i) = (h(k) + i) % m
- Quadratic Probing: h(k,i) = (h(k) + i²) % m
- Double Hashing: h(k,i) = (h1(k) + i × h2(k)) % m

Example - Linear Probing:
- Insert: 25, 35, 45 into table size 10
- h(25) = 5 → index 5
- h(35) = 5 → collision → index 6
- h(45) = 5 → collision → index 7

3. Rehashing:
- When load factor > threshold
- New larger table
- Rehash all elements

---

## Question 7
Explain dynamic programming with Fibonacci example.

**Answer:** Dynamic Programming:
- Overlapping subproblems
- Optimal substructure
- Memoization or tabulation

Fibonacci - Three Approaches:

1. Naive Recursion:
```python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
# Time: O(2^n) - exponential!
```

2. Memoization (Top-down):
```python
def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
# Time: O(n)
```

3. Tabulation (Bottom-up):
```python
def fib(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
# Time: O(n), Space: O(n)
```

4. Space Optimization:
```python
def fib(n):
    if n <= 1:
        return n
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr
# Time: O(n), Space: O(1)
```

---

## Question 8
Explain quicksort with partition algorithm.

**Answer:** Quicksort:
- Divide and conquer
- Average: O(n log n)
- Worst: O(n²)

Algorithm:
1. Choose pivot
2. Partition: elements < pivot left, > pivot right
3. Recursively sort partitions

Partition Algorithm:
```python
def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1
```

Quicksort:
```python
def quicksort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quicksort(arr, low, pi - 1)
        quicksort(arr, pi + 1, high)

# Usage
quicksort(arr, 0, len(arr) - 1)
```

Example:
[10, 7, 8, 9, 1, 5]
- Choose pivot 5
- Partition: [1] [5] [10, 7, 8, 9]
- Sort left: [1]
- Sort right: [7, 8, 9, 10]
- Result: [1, 5, 7, 8, 9, 10]

---

## Question 9
Explain B-tree and B+ tree differences.

**Answer:** B-Tree:
- Self-balancing
- All keys in internal nodes and leaves
- All leaves at same level
- Used in databases and file systems

B+ Tree:
- All keys in leaves
- Internal nodes only for routing
- Leaves linked for range queries
- More common in databases

Comparison:
Feature          | B-Tree     | B+ Tree
----------------|------------|----------
Keys in node    | All       | Only leaves
Leaf nodes      | Scattered | Linked list
Search         | May stop   | Always leaf
Range query     | Difficult | Easy (linked)
Full nodes      | Variable  | Typically full
I/O per search  | More      | Less

Structure:
B-Tree:
```
    [10|20|30]
   /   |   \
[5]  [15] [25|35]
```

B+ Tree:
```
    [10|20]
   /     \
[10]----[20|30]
 |        |
[5|10]--[15|20|25|30]
```

---

## Question 10
Explain greedy algorithm with activity selection problem.

**Answer:** Greedy Algorithm:
- Make locally optimal choice
- Hope for global optimum
- Not always correct

Activity Selection:
- Select maximum activities that don't overlap
- Activities sorted by finish time

Problem:
- n activities with start and finish times
- Find max set of non-overlapping activities

Greedy Approach:
1. Sort by finish time
2. Select first activity
3. Select next activity that starts after last ends

Example:
Activities: [(1,4), (3,5), (0,6), (5,7), (3,9), (5,9), (6,10), (8,11)]

Sorted by finish: (1,4), (3,5), (5,7), (8,11), (6,10), (3,9), (5,9), (0,6)

Selection:
- (1,4) ✓
- (3,5) ✓ (starts after 4)
- (5,7) ✓ (starts after 5)
- (8,11) ✓ (starts after 7)

Maximum activities: 4

Correctness Proof:
- Activities sorted by finish time
- First activity has earliest finish
- Removing conflicting activities, greedy stays optimal

---

*End of Data Structures and Algorithms Detailed Questions*
