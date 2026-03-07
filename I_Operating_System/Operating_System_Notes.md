# Operating System - Study Notes

## Table of Contents
1. [Introduction to Operating System](#1-introduction-to-operating-system)
2. [Operating System Concepts & Structure](#2-operating-system-concepts--structure)
3. [Process Management](#3-process-management)
4. [Memory Management](#4-memory-management)
5. [Input/Output](#5-inputoutput)
6. [Deadlock](#6-deadlock)
7. [File Systems](#7-file-systems)

---

## 1. Introduction to Operating System

### What is an Operating System?
An Operating System (OS) is **system software** that acts as a **bridge between the user and the computer hardware**. It manages hardware, software, memory, processes, and provides services to applications.

### Role of an Operating System
1. **Process Management** - Handles creation, scheduling, and termination of processes
2. **Memory Management** - Allocates and deallocates memory to programs
3. **File System Management** - Organizes and stores data in files and directories
4. **Device Management** - Controls and coordinates I/O devices via drivers
5. **Security & Protection** - Provides authentication and prevents unauthorized access
6. **User Interface (UI)** - Provides CLI (Command Line Interface) or GUI (Graphical User Interface)
7. **Networking** - Supports communication between computers via TCP/IP
8. **Resource Management** - Manages CPU, memory, disk, and I/O devices

### Examples of Operating Systems
Windows, Linux, macOS, Android, iOS, UNIX

---

## 2. Operating System Concepts & Structure

### Key Concepts
1. **Process** - A program in execution
2. **Threads** - Lightweight processes within a process
3. **CPU Scheduling** - Decides which process runs next (FCFS, SJF, Round Robin, Priority)
4. **Memory Management** - Allocation & deallocation of memory (Paging, Segmentation, Virtual Memory)
5. **File System** - Manages files, directories, and storage
6. **I/O System Management** - Handles input/output devices via device drivers
7. **Protection & Security** - Protects resources from unauthorized access
8. **Virtualization** - Provides abstract view of hardware
9. **Concurrency & Synchronization** - Manages multiple processes/threads running simultaneously

### OS Structure Types

| Structure | Description | Examples | Pros | Cons |
|-----------|-------------|----------|------|------|
| **Monolithic** | Entire OS runs in one large kernel | UNIX, MS-DOS | Fast | Hard to maintain/debug |
| **Layered** | OS divided into layers (bottom=hardware, top=UI) | THE OS | Easy to debug | Performance overhead |
| **Microkernel** | Only essential services in kernel, others in user space | Minix, QNX, macOS | Secure, modular | Slower due to communication |
| **Modules** | Kernel divided into loadable modules | Linux | Flexibility + efficiency | - |
| **Hybrid** | Mix of Monolithic + Microkernel | Windows, macOS | Balance of performance and modularity | - |

---

## 3. Process Management

### What is a Process?
A process = **a program in execution**. It includes:
- Program code (text section)
- Data (variables, heap, stack)
- Program Counter (PC) - next instruction
- Registers & Resources

### Process States
```
New → Ready → Running → Waiting → Terminated
```

### Process Control Block (PCB)
Data structure containing:
- PID (Process ID)
- State
- Registers
- Program Counter
- Scheduling info
- Memory info

### Process Creation
- **UNIX**: `fork()` system call
- **Windows**: `CreateProcess()` system call

### Inter-Process Communication (IPC) Mechanisms
1. **Message Passing** - Pipes, Message Queues, Sockets
2. **Shared Memory** - Fast but needs synchronization
3. **Signals** - Notify processes about events (e.g., SIGKILL)
4. **Semaphores** - Synchronization tool for shared resources
5. **Monitors** - High-level synchronization construct

### Classical IPC Problems

#### (a) Producer-Consumer Problem
- Producer generates data and puts in buffer
- Consumer takes data from buffer
- Problem: Producer shouldn't add to full buffer, Consumer shouldn't remove from empty buffer

#### (b) Readers-Writers Problem
- Multiple readers can read simultaneously
- Writers need exclusive access

#### (c) Dining Philosophers Problem
- 5 philosophers, 5 forks
- Each needs 2 forks to eat
- Problem: Prevent deadlock and starvation

#### (d) Sleeping Barber Problem
- 1 barber, N waiting chairs
- Barber sleeps if no customers

### CPU Scheduling Algorithms

| Algorithm | Description | Pros | Cons |
|-----------|-------------|------|------|
| **FCFS** | First-Come, First-Served | Simple | Convoy Effect |
| **SJF** | Shortest Job First | Optimal for avg waiting time | Requires knowledge of burst time |
| **Priority** | Based on priority | Simple | Starvation possible |
| **Round Robin** | Fixed time quantum | Fair for time-sharing | Depends on quantum size |
| **Multilevel Queue** | Multiple queues with different algorithms | Flexible | Complex |
| **Multilevel Feedback Queue** | Processes move between queues | Very flexible | Complex |

### Scheduling Criteria
- **CPU Utilization** - Keep CPU busy
- **Throughput** - Processes completed per unit time
- **Turnaround Time** - Submission to completion
- **Waiting Time** - Time in ready queue
- **Response Time** - Request to first response

### Multiprocessing vs Time-Sharing

| Feature | Multiprocessing | Time-Sharing |
|---------|----------------|--------------|
| Definition | Uses multiple CPUs for parallel execution | Single CPU shares time among processes |
| Execution | True parallelism | Pseudo-parallelism (context switching) |
| Goal | Speed & efficiency | Fairness & responsiveness |
| Hardware | Multiple CPUs required | Single CPU is enough |

---

## 4. Memory Management

### Swapping
- **Definition**: Temporarily move entire processes between RAM and disk
- **Advantages**: Allows more processes than physical memory
- **Disadvantages**: Slow (disk I/O), can cause thrashing

### Paging
- **Definition**: Divides memory into fixed-size blocks
- **Logical memory** → **Pages**
- **Physical memory** → **Frames**
- **Page Table**: Maps pages to frames
- **Advantages**: No external fragmentation
- **Disadvantages**: Internal fragmentation, page table overhead

### Segmentation
- **Definition**: Divides memory into variable-sized segments (code, data, stack)
- **Segment Table**: Base address and limit for each segment
- **Advantages**: Logical view of memory, no internal fragmentation
- **Disadvantages**: External fragmentation possible

### Virtual Memory
- **Definition**: Gives illusion of more memory than physically available
- **Page Fault**: When page is not in memory
- **Demand Paging**: Load pages only when needed

---

## 5. Input/Output

### I/O Hardware
- **Controllers**: Interface between CPU and devices
- **Device Drivers**: Software to control devices

### I/O Software
- **Device Independent I/O Software**: Common interface for all devices
- **Buffers**: Temporary storage for data transfer

### Disk Scheduling Algorithms
1. **FCFS** - First-Come, First-Served
2. **SSTF** - Shortest Seek Time First
3. **SCAN** - Elevator algorithm
4. **C-SCAN** - Circular SCAN

---

## 6. Deadlock

### Deadlock Definition
A situation where two or more processes are waiting for each other to release resources.

### Necessary Conditions (Coffman Conditions)
1. **Mutual Exclusion** - Only one process can use a resource
2. **Hold and Wait** - Process holds resources while waiting for others
3. **No Preemption** - Resources cannot be forcibly taken
4. **Circular Wait** - Circular chain of processes waiting for resources

### Deadlock Handling
1. **Prevention** - Ensure one condition is false
2. **Avoidance** - Banker's Algorithm
3. **Detection** - Resource allocation graph
4. **Recovery** - Kill process or rollback

---

## 7. File Systems

### File Concepts
- **File**: Collection of related information
- **Attributes**: Name, type, size, dates, permissions
- **Operations**: Create, read, write, delete, seek

### Directory Structure
- **Single-level**: One directory
- **Two-level**: One directory per user
- **Hierarchical**: Tree structure
- **Acyclic Graph**: Shared subdirectories

### File Allocation Methods
1. **Contiguous Allocation** - Sequential blocks
2. **Linked Allocation** - Pointers to next block
3. **Indexed Allocation** - Index block with pointers

### File System Types
FAT32, NTFS, ext4, ISO 9660

### Security & Protection
- **Access Control**: User IDs, permissions
- **Encryption**: Protect data at rest

---

## Quick Reference Table

| Topic | Key Points |
|-------|------------|
| OS Role | Interface between user and hardware |
| Process | Program in execution |
| Thread | Lightweight process |
| PCB | Process Control Block - stores process info |
| IPC | Message Passing, Shared Memory, Semaphores |
| Scheduling | FCFS, SJF, Priority, Round Robin |
| Paging | Pages → Frames, no external fragmentation |
| Segmentation | Variable-sized segments |
| Virtual Memory | Illusion of more memory |
| Deadlock | 4 conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait |

---

## Exam Tips
1. Remember the 4 conditions for deadlock
2. Know difference between paging and segmentation
3. Practice CPU scheduling problems (calculate waiting time, turnaround time)
4. Understand the difference between multiprogramming, multiprocessing, and time-sharing
5. Know common IPC problems: Producer-Consumer, Readers-Writers, Dining Philosophers

---

*Last Updated: 2026*
*Subject: Operating System*
