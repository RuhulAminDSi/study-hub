# Quick Review - 10 Questions Each Subject

---

## 1. Basic Physics

1. **What is Coulomb's Law?**
   - F = k × (q₁ × q₂) / r²

2. **What is an electric field?**
   - Region around a charged particle where it exerts force on other charges.

3. **What is Faraday's Law of Electromagnetic Induction?**
   - EMF = -dΦB/dt (changing magnetic field induces voltage)

4. **What is simple harmonic motion?**
   - F = -kx (restoring force proportional to displacement)

5. **What is the wave equation?**
   - v = fλ (velocity = frequency × wavelength)

6. **What is time dilation in special relativity?**
   - t = t₀ / √(1 - v²/c²) (moving clocks run slower)

7. **What is mass-energy equivalence?**
   - E = mc²

8. **What is the photoelectric effect equation?**
   - hν = φ + ½mv² (Einstein's explanation)

9. **What is de Broglie's wavelength?**
   - λ = h/p

10. **What is resonance?**
    - When external frequency equals natural frequency → maximum amplitude

---

## 2. Introduction to Computer Systems

1. **What is a computer?**
   - Electronic device that accepts input, processes data, stores information, and produces output.

2. **What are the generations of computers?**
   - 1st: Vacuum tubes, 2nd: Transistors, 3rd: IC, 4th: Microprocessors, 5th: AI/Quantum

3. **What is the CPU?**
   - Central Processing Unit - the brain of the computer that executes instructions.

4. **What is RAM?**
   - Random Access Memory - temporary storage for running programs (volatile).

5. **What is the difference between hardware and software?**
   - Hardware: Physical components; Software: Programs and instructions.

6. **What is an algorithm?**
   - Step-by-step procedure to solve a problem.

7. **What is binary number system?**
   - Base-2 system using digits 0 and 1.

8. **What is the Internet?**
   - Global network of interconnected computers using TCP/IP protocol.

9. **What is an operating system?**
   - System software that manages hardware and provides user interface.

10. **What is an embedded system?**
    - Computer integrated into devices (washing machines, cars, etc.)

---

## 3. Electrical Circuits

1. **What is Ohm's Law?**
   - V = IR (Voltage = Current × Resistance)

2. **What is the unit of resistance?**
   - Ohm (Ω)

3. **What is power? Give its formula.**
   - Rate of energy transfer. P = VI = I²R = V²/R

4. **State Kirchhoff's Current Law (KCL).**
   - Total current entering a junction equals total current leaving.

5. **State Kirchhoff's Voltage Law (KVL).**
   - Total voltage around a closed loop equals zero.

6. **What is Thevenin's Theorem?**
   - Any linear circuit can be replaced by a voltage source (Vth) in series with resistance (Rth).

7. **What happens at resonance in a series RLC circuit?**
   - Impedance becomes minimum and current becomes maximum (XL = XC).

8. **What is the resonant frequency formula?**
   - fr = 1/(2π√(LC))

9. **What is the time constant of an RC circuit?**
   - τ = RC

10. **When is maximum power transferred to a load?**
    - When load resistance equals Thevenin resistance (R_load = R_th)

---

## 4. Digital Logic Design

1. **What are the basic logic gates?**
   - AND, OR, NOT

2. **What is a universal gate?**
   - NAND and NOR can implement any Boolean function.

3. **What is the difference between combinational and sequential circuits?**
   - Combinational: Output depends on current input only; Sequential: Output depends on current input AND previous state.

4. **What is a flip-flop?**
   - Basic memory element that stores 1 bit of data.

5. **What is a multiplexer (MUX)?**
   - Selects one of many inputs.

6. **What is a decoder?**
   - Converts binary code to one-hot output.

7. **What is a counter?**
   - Sequential circuit that counts pulses.

8. **What is K-map?**
   - Karnaugh Map - method for simplifying Boolean expressions.

9. **What is a half adder?**
   - Circuit that adds two bits: Sum = A ⊕ B, Carry = A · B

10. **What is a register?**
    - Group of flip-flops for storing data.

---

## 5. Basic Electronics

1. **What is a semiconductor?**
   - A material with electrical conductivity between conductor and insulator.

2. **What is doping in semiconductors?**
   - Adding impurities (pentavalent or trivalent) to change electrical properties.

3. **What is a PN junction?**
   - The boundary between P-type and N-type semiconductor regions.

4. **What is the barrier potential for silicon diode?**
   - Approximately 0.7V

5. **What is the main use of a Zener diode?**
   - Voltage regulation (operates in breakdown region).

6. **What are the three regions of a BJT?**
   - Emitter, Base, Collector

7. **What is the difference between NPN and PNP transistors?**
   - NPN: electrons are majority carriers; PNP: holes are majority carriers.

8. **What is an operational amplifier (op-amp)?**
   - High-gain differential amplifier with high input impedance and low output impedance.

9. **What is the voltage gain of a voltage follower?**
   - 1 (unity gain)

10. **What is the Barkhausen criterion for oscillation?**
    - Loop gain = 1 and phase shift = 360° (or 0°)

---

## 6. Microprocessor and Interfacing

1. **What is a microprocessor?**
   - Central Processing Unit (CPU) fabricated on a single chip.

2. **How much memory can 8085 microprocessor address?**
   - 64 KB (16-bit address bus)

3. **What is the function of the accumulator?**
   - Main register for arithmetic and logical operations.

4. **What are the flags in 8085?**
   - Sign (S), Zero (Z), Auxiliary Carry (AC), Parity (P), Carry (CY)

5. **What is the difference between RISC and CISC?**
   - RISC: Reduced Instruction Set; CISC: Complex Instruction Set.

6. **What is an interrupt?**
   - Signal that pauses current program to handle urgent task.

7. **What is the priority order of 8085 interrupts?**
   - TRAP > RST 7.5 > RST 6.5 > RST 5.5 > INTR

8. **What is the function of DMA?**
   - Direct Memory Access - transfers data without CPU intervention.

9. **What is the difference between memory-mapped I/O and port-mapped I/O?**
   - Memory-mapped: I/O uses same address space as memory; Port-mapped: separate address space.

10. **What is the purpose of a stack?**
    - Stores return addresses and data during subroutine calls and interrupts.

---

## 7. Computer Architecture

1. **What is the difference between computer organization and architecture?**
   - Architecture: What programmer sees (instruction set); Organization: How it's implemented.

2. **What is 2's complement?**
   - Method for representing signed numbers. Range: -2^(n-1) to 2^(n-1)-1

3. **What is cache memory?**
   - Fast memory between CPU and main memory.

4. **What is virtual memory?**
   - Gives illusion of more memory than physically available.

5. **What is pipelining?**
   - Overlapping instruction execution to increase throughput.

6. **What are the pipeline stages?**
   - IF (Fetch), ID (Decode), EX (Execute), MEM (Memory), WB (Write Back)

7. **What is the difference between RISC and CISC?**
   - RISC: Simple instructions, many registers, load-store; CISC: Complex instructions, memory-register.

8. **What is DMA?**
   - Direct Memory Access - transfers data directly between I/O and memory without CPU.

9. **What is Little Endian vs Big Endian?**
   - Little Endian: Least significant byte first; Big Endian: Most significant byte first.

10. **What is a hazard in pipelining?**
    - Problem that prevents smooth pipeline execution (structural, data, control hazards).

---

## 8. Communication Theory

1. **What is modulation?**
   - Process of combining information signal with carrier wave for transmission.

2. **What is the Nyquist sampling theorem?**
   - Sampling rate must be at least twice the highest frequency (fs ≥ 2fmax).

3. **What is the advantage of FM over AM?**
   - Better noise immunity.

4. **What is PCM?**
   - Pulse Code Modulation - converts analog signal to digital through sampling, quantization, and encoding.

5. **What is the difference between FDM and TDM?**
   - FDM: signals share frequency bands; TDM: signals share time slots.

6. **What is QAM?**
   - Quadrature Amplitude Modulation - combines ASK and PSK.

7. **What is Shannon's capacity theorem?**
   - Channel capacity C = B log2(1 + S/N)

8. **What are the types of transmission media?**
   - Guided (twisted pair, coaxial, fiber optic) and unguided (radio, microwave, infrared).

9. **What causes multipath fading?**
   - Signal reaching receiver via multiple paths with different delays.

10. **What is the purpose of a repeater?**
    - Amplifies and regenerates signals to extend transmission distance.

---

## 9. Computer Networking and Security

1. **What is the OSI model?**
   - 7-layer model: Physical, Data Link, Network, Transport, Session, Presentation, Application.

2. **What is TCP and UDP?**
   - TCP: Reliable, connection-oriented; UDP: Fast, connectionless.

3. **What is an IP address?**
   - Unique identifier for devices on a network.

4. **What is a subnet mask?**
   - Defines network and host portions of an IP address.

5. **What is DNS?**
   - Domain Name System - converts domain names to IP addresses.

6. **What is encryption?**
   - Converting data into code to prevent unauthorized access.

7. **What is the difference between symmetric and asymmetric encryption?**
   - Symmetric: Same key for encrypt/decrypt; Asymmetric: Public and private keys.

8. **What is a firewall?**
   - Security system that filters network traffic.

9. **What is a VPN?**
   - Virtual Private Network - creates secure connection over internet.

10. **What is phishing?**
    - Cyber attack using fake emails/websites to steal information.

---

## 10. Structured Programming Language (C)

1. **What is the difference between = and ==?**
   - = is assignment operator; == is comparison operator.

2. **What is a pointer?**
   - Variable that stores memory address of another variable.

3. **What is the difference between struct and union?**
   - Struct: all members have separate memory; Union: all members share same memory.

4. **What is recursion?**
   - Function calling itself.

5. **What is the difference between pass by value and pass by reference?**
   - Pass by value: copy of argument passed; Pass by reference: address passed.

6. **What is the purpose of malloc()?**
   - Allocates dynamic memory.

7. **What does #define do?**
   - Creates macro constants.

8. **What is the difference between while and do-while loop?**
   - While checks condition first; do-while executes at least once.

9. **What is a null character in strings?**
   - '\0' (ASCII value 0) marks end of string.

10. **What is the difference between break and continue?**
    - break exits loop/switch; continue skips current iteration.

---

## 11. Object-Oriented Programming (OOP)

1. **What are the four pillars of OOP?**
   - Encapsulation, Inheritance, Polymorphism, Abstraction.

2. **What is a class?**
   - Blueprint for creating objects.

3. **What is an object?**
   - Instance of a class.

4. **What is inheritance?**
   - Mechanism where a class acquires properties of another class.

5. **What is polymorphism?**
   - Same interface, different implementations.

6. **What is encapsulation?**
   - Bundling data and methods together with data hiding.

7. **What is abstraction?**
   - Hiding complexity, showing only essential features.

8. **What is method overloading?**
   - Same method name, different parameters (compile-time polymorphism).

9. **What is method overriding?**
   - Child class provides different implementation of parent method (runtime polymorphism).

10. **What is an interface?**
    - 100% abstract type with method declarations.

---

## 12. Discrete Mathematics

1. **What is a set?**
   - Collection of distinct elements.

2. **What are the set operations?**
   - Union, Intersection, Difference, Complement.

3. **What is a function?**
   - Relation where each input has exactly one output.

4. **What is a proposition?**
   - Statement that is either true or false.

5. **What are the logical connectives?**
   - AND (∧), OR (∨), NOT (¬), IMPLIES (→), BICONDITIONAL (↔).

6. **What is proof by induction?**
   - Prove base case, assume true for k, prove for k+1.

7. **What is the Pigeonhole Principle?**
   - If n items placed in m containers and n > m, at least one container has more than 1 item.

8. **What is a permutation?**
   - Arrangement of objects where order matters. P(n,r) = n!/(n-r)!

9. **What is a combination?**
   - Selection of objects where order doesn't matter. C(n,r) = n!/(r!(n-r)!)

10. **What is Bayes' Theorem?**
    - P(A|B) = P(B|A) × P(A) / P(B)

---

## 13. Graphs

1. **What is a graph?**
   - Set of vertices connected by edges. G = (V, E)

2. **What is the difference between BFS and DFS?**
   - BFS: Level by level (queue); DFS: Deep first (stack/recursion).

3. **What is a minimum spanning tree (MST)?**
   - Subgraph connecting all vertices with minimum total weight, no cycles.

4. **What is Dijkstra's algorithm?**
   - Finds shortest path from single source (works for non-negative weights).

5. **What is Bellman-Ford algorithm?**
   - Finds shortest path, works with negative weights, detects negative cycles.

6. **What is a directed acyclic graph (DAG)?**
   - Directed graph with no cycles.

7. **What is a bipartite graph?**
   - Vertices can be divided into two sets with no edges within same set.

8. **What is a complete graph?**
   - Every pair of vertices connected.

9. **How is a graph represented?**
   - Adjacency Matrix (O(V²) space) or Adjacency List (O(V+E) space).

10. **What is topological sorting?**
    - Ordering of vertices in DAG where for every edge (u,v), u comes before v.

---

## 14. Theory of Computation

1. **What is a finite automaton?**
   - Mathematical model with states and transitions, recognizes regular languages.

2. **What is the difference between DFA and NFA?**
   - DFA: Deterministic (one transition); NFA: Non-deterministic (multiple transitions).

3. **What is a regular expression?**
   - Pattern that describes regular languages.

4. **What is a context-free grammar (CFG)?**
   - Grammar that generates context-free languages.

5. **What is a pushdown automaton (PDA)?**
   - Finite automaton with stack memory, recognizes CFLs.

6. **What is a Turing machine?**
   - Most powerful computational model with infinite tape.

7. **What is the Church-Turing thesis?**
   - Turing machine captures notion of computability.

8. **What is the Halting Problem?**
   - Cannot decide whether arbitrary TM halts (undecidable).

9. **What is the Chomsky hierarchy?**
   - Type 0 (Unrestricted), Type 1 (Context-Sensitive), Type 2 (Context-Free), Type 3 (Regular).

10. **What is P vs NP?**
    - P: Problems solvable in polynomial time; NP: Problems verifiable in polynomial time.

---

## 15. Data Structures and Algorithms

1. **What is an array?**
   - Contiguous memory locations, fixed size, random access O(1).

2. **What is a linked list?**
   - Nodes with data and pointer, dynamic size, O(n) access.

3. **What is a stack?**
   - LIFO (Last In First Out).

4. **What is a queue?**
   - FIFO (First In First Out).

5. **What is a binary search tree (BST)?**
   - Left child < Parent < Right child, O(log n) operations for balanced tree.

6. **What is Big-O notation?**
   - Upper bound (worst case) complexity.

7. **What is merge sort?**
   - O(n log n) sorting algorithm, divide and conquer.

8. **What is binary search?**
   - O(log n) search on sorted array, divide and conquer.

9. **What is dynamic programming?**
   - Technique using memoization for overlapping subproblems.

10. **What is Dijkstra's algorithm?**
    - Greedy algorithm for shortest path with non-negative weights.

---

## 16. Database Systems

1. **What is a database?**
   - Organized collection of data stored electronically.

2. **What is a primary key?**
   - Unique identifier for a record, cannot be NULL.

3. **What is a foreign key?**
   - Field that references primary key of another table.

4. **What is normalization?**
   - Process of organizing data to eliminate redundancy.

5. **What are the ACID properties?**
   - Atomicity, Consistency, Isolation, Durability.

6. **What is SQL?**
   - Standard database language for managing relational databases.

7. **What is a join?**
   - Combines rows from two or more tables based on related column.

8. **What is a transaction?**
   - Unit of work that either all succeeds9. **What or all fails.

 is indexing?**
   - Data structure to improve query speed.

10. **What is a view?**
    - Virtual table based on query result.

---

## 17. Software Engineering

1. **What is SDLC?**
   - Software Development Life Cycle: Requirement → Design → Development → Testing → Deployment → Maintenance.

2. **What is the difference between functional and non-functional requirements?**
   - Functional: What system should do; Non-functional: Quality attributes (performance, security).

3. **What is the Waterfall model?**
   - Sequential phases, each completes before next.

4. **What is Agile?**
   - Iterative, incremental development, flexible.

5. **What is black box testing?**
   - Testing without knowledge of internal code.

6. **What is white box testing?**
   - Testing with knowledge of internal code.

7. **What is coupling?**
   - Dependency between modules (low is better).

8. **What is cohesion?**
   - Relatedness within module (high is better).

9. **What is a use case diagram?**
   - Shows interactions between actors and system.

10. **What is the critical path in project management?**
    - Longest path in PERT chart, determines minimum project duration.

---

## 18. Operating System

1. **What is an operating system?**
   - System software that manages hardware and provides services to applications.

2. **What is a process?**
   - Program in execution.

3. **What is a thread?**
   - Lightweight process within a process.

4. **What are the deadlock conditions?**
   - Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.

5. **What is paging?**
   - Memory management using fixed-size pages and frames.

6. **What is virtual memory?**
   - Illusion of more memory than physically available.

7. **What is a semaphore?**
   - Synchronization tool for managing concurrent processes.

8. **What is Round Robin scheduling?**
   - CPU scheduler using time quantum, fair for time-sharing.

9. **What is a file system?**
   - Manages files and directories on storage.

10. **What is thrashing?**
    - Excessive paging causing poor performance.

---

## 19. Artificial Intelligence

1. **What is AI?**
   - Intelligence exhibited by machines, mimics human cognitive functions.

2. **What is the difference between BFS and DFS?**
   - BFS: Level by level (optimal for unweighted); DFS: Deep first (low memory).

3. **What is A* search?**
   - Informed search using f(n) = g(n) + h(n), optimal if heuristic is admissible.

4. **What is machine learning?**
   - Subset of AI where systems learn from data without explicit programming.

5. **What is supervised learning?**
   - Learning from labeled data (classification, regression).

6. **What is unsupervised learning?**
   - Learning from unlabeled data (clustering, dimensionality reduction).

7. **What is a neural network?**
   - Computing system inspired by brain, layers of neurons.

8. **What is deep learning?**
   - Neural networks with many hidden layers.

9. **What is NLP?**
   - Natural Language Processing - AI for understanding human language.

10. **What is an expert system?**
    - AI program with knowledge base and inference engine mimicking human experts.

---

*End of Quick Review - 190 Questions (10 per subject)*
*All 19 Subjects Covered*
