# Introduction to Computer Systems - Detailed Review Questions

---

## Question 1
Enumerate the five generations of computers with their key technology and characteristics.

**Answer:** 
1st Generation (1940-1956): Vacuum tubes - large, expensive, slow, high heat
2nd Generation (1956-1963): Transistors - smaller, reliable, less heat
3rd Generation (1964-1971): Integrated Circuits - compact, faster, cheaper
4th Generation (1971-present): Microprocessors - personal computers, GUI
5th Generation (Present/Future): AI, Quantum computing - advanced processing, machine learning

---

## Question 2
Draw and explain the basic functional units of a computer system.

**Answer:** The basic functional units are:
1. Input Unit: Accepts data (keyboard, mouse)
2. Memory Unit: Stores data (RAM, HDD)
3. Arithmetic Logic Unit (ALU): Performs calculations
4. Control Unit: Directs operations
5. Output Unit: Displays results (monitor, printer)
The CPU contains ALU and Control Unit. Data flows from input → memory → ALU → memory → output.

---

## Question 3
Explain the instruction cycle (fetch-decode-execute) in detail.

**Answer:** The instruction cycle has four steps:
1. Fetch: CPU fetches instruction from memory using address in Program Counter (PC)
2. Decode: Control unit interprets the instruction
3. Execute: ALU performs the operation
4. Store: Result is written back to memory
The PC increments after each fetch. This cycle repeats for every instruction.

---

## Question 4
Convert the decimal number 47 to binary, octal, and hexadecimal systems.

**Answer:**
Decimal 47 to Binary: 101111 (32+8+4+2+1 = 47)
Binary 101111 to Octal: Group 3 bits → 101 111 = 57₈
Binary 101111 to Hexadecimal: Group 4 bits → 0010 1111 = 2F₁₆

---

## Question 5
Differentiate between primary memory and secondary memory with examples.

**Answer:**
Primary Memory (Volatile):
- RAM: Random Access Memory - temporary storage, loses data when power off
- Cache: Fast memory near CPU
- Examples: DDR4, SRAM

Secondary Memory (Non-volatile):
- Magnetic: Hard Disk Drive (HDD)
- Solid State: SSD, USB Flash
- Optical: CD, DVD
Primary is fast but expensive; secondary is slower but cheaper and permanent.

---

## Question 6
Explain the evolution of computing devices from Abacus to modern computers.

**Answer:**
- Abacus (2400 BCE): First mechanical counting device
- Pascaline (1642): First mechanical adding machine by Blaise Pascal
- Analytical Engine (1837): Charles Babbage's design for programmable computer
- ENIAC (1945): First electronic computer using vacuum tubes
- Transistor (1947): Replaced vacuum tubes, smaller computers
- Microprocessor (1971): Intel 4004 - CPU on a single chip
- Modern: Multi-core processors, AI computers, quantum computers

---

## Question 7
Describe the OSI model with functions of each layer.

**Answer:** 7 layers:
1. Physical: Transmits raw bits, cables, hubs
2. Data Link: Framing, MAC addressing, error detection, switches
3. Network: IP addressing, routing, routers
4. Transport: TCP/UDP, flow control, ports
5. Session: Session management, synchronization
6. Presentation: Data format, encryption, compression
7. Application: User interface, HTTP, FTP

---

## Question 8
Explain the difference between system software and application software.

**Answer:**
System Software:
- Manages computer hardware
- Provides platform for application software
- Examples: Windows, Linux, macOS, Device drivers
- Runs automatically when computer starts

Application Software:
- Designed for specific user tasks
- Runs on top of system software
- Examples: MS Office, Photoshop, Chrome, Games
- User-oriented, performs useful tasks

---

## Question 9
State and explain Boolean operations with truth tables.

**Answer:** Three basic Boolean operations:
1. AND (·): Output = 1 only when all inputs = 1
   0·0=0, 0·1=0, 1·0=0, 1·1=1

2. OR (+): Output = 1 when any input = 1
   0+0=0, 0+1=1, 1+0=1, 1+1=1

3. NOT (' or ¬): Inverts the input
   0'=1, 1'=0

These form the basis of all digital logic circuits.

---

## Question 10
Explain the client-server model and list its advantages.

**Answer:** Client-Server Model:
- Server: Provides services, resources, manages database
- Client: Requests services from server
- Communication: Network protocols (HTTP, TCP/IP)

Advantages:
1. Centralized data management
2. Easy backup and security
3. Scalability - add more clients easily
4. Resource sharing - printers, databases
5. Better performance through specialization

---

*End of Introduction to Computer Systems Detailed Questions*
