# Operating System - Detailed Review Questions

---

## Question 1
Explain the operating system services.

**Answer:** OS Services:

1. Process Management:
- Create/terminate processes
- Schedule CPU time
- Handle inter-process communication
- Process synchronization

2. Memory Management:
- Allocate/deallocate memory
- Track memory usage
- Virtual memory management
- Paging and segmentation

3. File System Management:
- Create/delete files
- Directory management
- File access control
- Space allocation

4. I/O Management:
- Buffering
- Caching
- Device drivers
- Spooling

5. Networking:
- TCP/IP support
- Socket management
- Routing

6. Security:
- User authentication
- Access control
- Encryption
- Protection mechanisms

7. Error Detection:
- Hardware errors
- Software bugs
- Recovery procedures

8. Resource Management:
- CPU scheduling
- Disk scheduling
- Memory allocation
- I/O scheduling

---

## Question 2
Explain process scheduling algorithms.

**Answer:** CPU Scheduling Algorithms:

1. FCFS (First-Come-First-Served):
- Jobs in order of arrival
- Simple but convoy effect

Example: Arrival: P1(10), P2(5), P3(2)
- Order: P1, P2, P3
- Waiting: 0, 10, 15
- Avg: 25/3 = 8.33

2. SJF (Shortest Job First):
- Shortest burst time first
- Optimal average waiting
- Problem: Can't know burst time

Non-preemptive vs Preemptive (SRTF)

3. Priority Scheduling:
- Highest priority first
- Problem: Starvation
- Solution: Aging

4. Round Robin:
- Time quantum
- Fair, time-sharing
- Context switching overhead

Example: Q=4, Processes: P1(10), P2(5), P3(8)
- P1: 0-4
- P2: 4-8 (completes)
- P3: 8-12
- P1: 12-14 (completes)
- P3: 14-18 (completes)

5. Multilevel Queue:
- Multiple queues
- Different scheduling per queue

6. Multilevel Feedback Queue:
- Processes move between queues

---

## Question 3
Explain deadlock conditions and handling.

**Answer:** Deadlock:
- Processes waiting indefinitely
- Circular wait

Four Necessary Conditions:
1. Mutual Exclusion:
- Only one process can use resource

2. Hold and Wait:
- Process holds resources while waiting

3. No Preemption:
- Can't forcibly take resources

4. Circular Wait:
- P1 waits for P2, P2 waits for P3... Pn waits for P1

Handling Approaches:

1. Prevention:
- Ensure one condition false
- Prevent hold and wait: Request all resources at once
- Prevent circular wait: Define resource order

2. Avoidance:
- Banker's Algorithm
- Safe state detection

3. Detection:
- Resource Allocation Graph
- Periodically check for cycles

4. Recovery:
- Kill one process
- Rollback to checkpoint
- Terminate all deadlocked

Banker's Algorithm:
- Track available resources
- Check if allocation leads to safe state
- Process request only if safe

---

## Question 4
Explain paging in memory management.

**Answer:** Paging:
- Fixed-size pages
- Fixed-size frames
- No external fragmentation

Address Translation:
- Virtual address: Page Number | Offset
- Physical address: Frame Number | Offset

Page Table:
- Maps virtual pages to frames
- Stored in main memory
- TLB (cache) for speed

Structure:
- Valid/Invalid bit
- Frame number
- Protection bits
- Modified (dirty) bit

Types:
1. Single-level: Simple but large table

2. Two-level:
- Outer page table
- Inner page table

3. Inverted:
- One entry per physical frame
- Reduces memory

4. Hierarchical:
- Multi-level paging

Page Fault:
- Page not in memory
- OS loads from disk
- Serves: 10-20% of memory access time

TLB (Translation Lookaside Buffer):
- Cache of recent translations
- 90%+ hit rate
- Hardware managed

---

## Question 5
Explain virtual memory with demand paging.

**Answer:** Virtual Memory:
- Illusion of larger memory
- Uses disk as backing store

Demand Paging:
- Load pages only when needed
- Page fault on first access

Page Fault Handling:
1. Check page table
2. If not valid:
   - Find free frame
   - Load page from disk
   - Update page table
   - Restart instruction

Memory Management:
- Working Set: Pages currently in memory
- Thrashing: Excessive paging
- Solution: Reduce degree of multiprogramming

Page Replacement Algorithms:

1. FIFO:
- Replace oldest page
- Simple but not optimal

2. LRU (Least Recently Used):
- Replace least recently used
- Good approximation of optimal
- Hardware support needed

3. Optimal (OPT):
- Replace page not used longest
- Not implementable (future knowledge)

4. Second Chance:
- Circular queue
- Give second chance if referenced

---

## Question 6
Explain interprocess communication (IPC) mechanisms.

**Answer:** IPC Mechanisms:

1. Pipes:
- Unidirectional data flow
- Parent-child communication
- Named pipes (FIFO)

Example:
```c
int pipefd[2];
pipe(pipefd);
write(pipefd[1], "hello", 5);
read(pipefd[0], buf, 5);
```

2. Message Queues:
- Structured messages
- Can have priority

3. Shared Memory:
- Fastest IPC
- Multiple processes share memory
- Requires synchronization

```c
shmget(key, size, IPC_CREAT);
shmat(shmid, NULL, 0);
```

4. Signals:
- Asynchronous notifications
- Like interrupts

5. Semaphores:
- Synchronization
- Counting or binary

```c
sem_init(&sem, 0, 1);
sem_wait(&sem);  // P
sem_post(&sem);  // V
```

6. Sockets:
- Network communication
- Can be local (Unix domain)

---

## Question 7
Explain disk scheduling algorithms.

**Answer:** Disk Scheduling:

1. FCFS:
- Service requests in order
- Simple but not optimal

2. SSTF (Shortest Seek Time First):
- Choose closest request
- Better than FCFS
- May cause starvation

3. SCAN (Elevator):
- Go to one end, then back
- All requests handled
- Better fairness

4. C-SCAN:
- Circular scan
- Returns to start quickly
- More uniform wait time

5. LOOK:
- Like SCAN but doesn't go to end
- If no requests, stops

Example with requests: 98, 183, 37, 122, 14, 124, 65, 67
Head starts at 53

FCFS: 98→183→37→122→14→124→65→67
SSTF: 65→67→37→14→98→122→124→183

SCAN: 37→14→65→67→98→122→124→183→return

---

## Question 8
Explain critical section problem and solutions.

**Answer:** Critical Section:
- Code accessing shared resources
- Only one process at a time

Requirements:
1. Mutual Exclusion
2. Progress
3. Bounded Waiting

Software Solutions:

1. Peterson's Solution:
```c
while (true) {
    flag[i] = true;
    turn = j;
    while (flag[j] && turn == j);
    // critical section
    flag[i] = false;
    // remainder section
}
```

Hardware Solutions:

1. Test-and-Set:
```c
bool test_and_set(bool *lock) {
    bool temp = *lock;
    *lock = true;
    return temp;
}
```

2. Swap:
```c
do {
    key = true;
    while (key == true)
        swap(&lock, &key);
} while (key);
```

Synchronization Primitives:

1. Mutex:
- Binary semaphore
- Lock/unlock

2. Semaphore:
- Counting or binary
- P (wait) and V (signal) operations

3. Monitor:
- High-level synchronization
- Encapsulates data and procedures

---

## Question 9
Explain file allocation methods.

**Answer:** File Allocation Methods:

1. Contiguous Allocation:
- Blocks allocated consecutively
- Fast access
- Problem: External fragmentation
- Compaction needed

Example:
File A: blocks 2,3,4,5
File B: blocks 6,7
File C: block 8

2. Linked Allocation:
- Each block points to next
- No fragmentation
- No random access
- Pointer overhead

Example:
File A: 2→5→8→null
File B: 3→6→null

3. Indexed Allocation:
- Index block contains pointers
- Random access possible
- No external fragmentation
- Extra I/O for index

Variants:
- Linked index
- Multi-level index
- Combined (Unix inode)

Comparison:
Feature        | Contiguous | Linked  | Indexed
--------------|------------|---------|---------
Access        | Sequential |Sequential| Random
Fragmentation | Yes        | No      | No
Size estimate | Needed     | No      | No
I/O count     | Less       | More    | Medium

---

## Question 10
Explain thrashing and its solutions.

**Answer:** Thrashing:
- Excessive paging
- CPU spends more time paging than executing

Symptoms:
- High page fault rate
- Low CPU utilization
- System slowdown

Causes:
- Too many processes
- Insufficient memory
- Poor page replacement

Solution Approaches:

1. Working Set Model:
- Keep active pages in memory
- Monitor page faults

2. Page Fault Frequency:
- If too high → add frames
- If too low → remove frames

3. VMM Enhancements:
- Increase memory
- Optimize replacement
- Reduce processes

4. OS-Level:
- Suspend processes
- Adjust multiprogramming level

5. Application-Level:
- Locality optimization
- Efficient algorithms
- Data structure tuning

Prevention:
- Good page replacement algorithm
- Adequate memory
- Monitoring tools

---

*End of Operating System Detailed Questions*
