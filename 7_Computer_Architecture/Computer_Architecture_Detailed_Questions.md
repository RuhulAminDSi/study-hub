# Computer Architecture - Detailed Review Questions

---

## Question 1
Explain the instruction cycle of a CPU with timing diagrams.

**Answer:** The instruction cycle (also called fetch-decode-execute cycle) consists of:

1. Fetch Cycle:
   - PC → MAR (address placed on address bus)
   - Memory read signal activated
   - Data (instruction) → MDR → IR
   - PC incremented

2. Decode Cycle:
   - Instruction decoded by control unit
   - Determine operation type
   - Identify addressing mode
   - Fetch operands if needed

3. Execute Cycle:
   - ALU performs operation
   - Data transferred between registers
   - Memory accessed if needed

4. Store Cycle:
   - Results written back to memory/register
   - Flags updated

Timing:
- Each step requires clock cycles (T-states)
- Complex instructions need more cycles
- Pipelining overlaps these phases

Example for ADD M (8085):
- T1: Opcode fetch
- T2: Decode
- T3: Operand fetch
- T4-T5: Execute (ALU operation)
- T6: Store result

---

## Question 2
Differentiate between cache mapping techniques.

**Answer:** Cache Mapping Techniques:

1. Direct Mapping:
   - Each main memory block maps to one cache line
   - Address: Tag | Line | Offset
   - Simple hardware
   - Problem: Fixed location may cause thrashing

2. Fully Associative Mapping:
   - Any block can go anywhere in cache
   - Address: Tag | Offset
   - Flexible, least misses
   - Expensive hardware (comparators)

3. Set Associative Mapping:
   - Compromise between direct and fully associative
   - Cache divided into sets, each with n lines (n-way)
   - Address: Tag | Set | Offset
   - Most common in modern CPUs (2-way, 4-way, 8-way)

Comparison:
Feature         | Direct    | Set Assoc | Fully Assoc
---------------|-----------|-----------|-------------
Hit Rate       | Low       | Medium    | High
Hardware       | Simple    | Medium    | Complex
Speed          | Fast      | Medium    | Slow
Flexibility    | Low       | Medium    | High

---

## Question 3
Explain the concept of virtual memory with paging.

**Answer:** Virtual Memory:
- Provides illusion of larger memory than physical
- Uses disk as secondary storage
- Allows execution of programs larger than RAM

Paging:
- Memory divided into fixed-size pages
- Physical memory divided into frames (same size as pages)
- Page table maps virtual pages to physical frames

Address Translation:
- Virtual address: Page Number | Offset
- Physical address: Frame Number | Offset
- MMU (Memory Management Unit) performs translation

Page Fault:
- Occurs when page not in memory
- OS loads page from disk to RAM
- Updates page table
- Continues program execution

Advantages:
- Programs don't need contiguous memory
- Multi-programming efficiency
- Protection between processes

Disadvantages:
- Complexity
- Page fault overhead

---

## Question 4
Describe pipeline hazards and their solutions.

**Answer:** Pipeline Hazards:

1. Structural Hazards:
   - Hardware cannot support all combinations
   - Solution: Duplicate hardware resources

2. Data Hazards:
   - Instructions depend on results of previous
   - Types: Read After Write (RAW), Write After Read (WAR), Write After Write (WAW)
   - Solutions:
     a) Forwarding (bypassing): Pass results directly
     b) Stalling: Insert NOPs
     c) Compiler scheduling: Reorder instructions

3. Control Hazards:
   - Branch instructions cause pipeline stalls
   - Solutions:
     a) Branch prediction (static/dynamic)
     b) Delay slots: Fill with useful instructions
     c) Flush pipeline on misprediction

Performance Impact:
- Each stall adds cycles
- Modern CPUs use sophisticated prediction (95%+ accuracy)

---

## Question 5
Explain IEEE 754 floating-point representation.

**Answer:** IEEE 754 Single Precision (32-bit):

Layout: Sign (1) | Exponent (8) | Mantissa (23)

1. Sign (S): 0=positive, 1=negative

2. Exponent (E): 8 bits, biased by 127
   - Bias: 127
   - Actual exponent = E - 127
   - Range: -126 to +127
   - Special values: 0 and 255

3. Mantissa (M): 23 bits
   - Implicit leading 1 (normalized)
   - Value = 1.M (stored as .M)
   - Precision: 24 bits

Value Calculation:
- Normal: (-1)^S × 2^(E-127) × 1.M
- Special: ±Infinity, NaN, denormalized

Example: 5.0
- Binary: 101.0
- Normalized: 1.01 × 2²
- Sign: 0
- Exponent: 2 + 127 = 129 = 10000001
- Mantissa: 0100000... (23 bits)

Double Precision: 64 bits (1+11+52)

---

## Question 6
Differentiate between Little Endian and Big Endian byte ordering.

**Answer:**
Little Endian:
- Least significant byte stored at lowest address
- "Little end comes first"
- Example: 0x12345678 stored as 78 56 34 12
- Used by: x86, ARM (usually)

Big Endian:
- Most significant byte stored at lowest address
- "Big end comes first"
- Example: 0x12345678 stored as 12 34 56 78
- Used by: Network protocols, PowerPC, SPARC

Comparison:
Address:    00  01  02  03
Little:     78  56  34  12
Big:        12  34  56  78

Advantages:
- Big Endian: Easier to read (network protocols, debugging)
- Little Endian: Easier for arithmetic (LSB at low address)

ARM supports both (bi-endian)

---

## Question 7
Explain the working of a cache with write policies.

**Answer:** Cache Operation:
- CPU requests data
- Check cache tag
- Hit: Return data
- Miss: Fetch from main memory

Write Policies:

1. Write Through:
   - Write to cache and main memory simultaneously
   - Data always consistent
   - Slower writes
   - Simple

2. Write Back:
   - Write to cache only
   - Modified (dirty) bit tracks changes
   - Write to main memory on replacement
   - Faster writes
   - May cause inconsistency

Write Miss Policies:

1. Write Allocate:
   - Load block into cache, then update
   - Good for temporal locality

2. No Write Allocate:
   - Write directly to main memory
   - Bypass cache
   - Good for non-cacheable data

---

## Question 8
Differentiate between RISC and CISC processors.

**Answer:**
RISC (Reduced Instruction Set Computer):
- Simple, few instructions (32-100)
- Fixed instruction length (32 bits)
- Load-Store architecture
- Many registers (32+)
- One instruction per cycle
- Hardwired control unit
- Pipelining efficient
- Examples: ARM, MIPS, SPARC

CISC (Complex Instruction Set Computer):
- Complex instructions (100-300)
- Variable length (1-15 bytes)
- Memory-to-memory operations
- Few registers (8-16)
- Multiple cycles per instruction
- Microprogrammed control
- Complex pipelining
- Examples: x86, VAX, 68000

Modern Approach:
- x86 decodes to RISC-like micro-ops
- Uses concepts from both
- Hybrid architecture

---

## Question 9
Explain the concept of multiprocessing and its types.

**Answer:** Multiprocessing:
- Use of multiple CPUs
- True parallel execution
- Increased throughput and reliability

Types:

1. Symmetric Multiprocessing (SMP):
   - All CPUs share memory and I/O
   - Common in servers
   - OS manages equally
   - Examples: Multi-core x86, ARM Cortex-A

2. Asymmetric Multiprocessing (AMP):
   - CPUs have different roles
   - Master controls slaves
   - Used in embedded systems
   - Example: DSP + microcontroller

3. Cluster Computing:
   - Multiple computers connected
   - Workstation clusters
   - High availability
   - Used in supercomputers

4. Multi-core Processing:
   - Multiple processors on single chip
   - Shared cache (usually)
   - Common in modern CPUs
   - 2, 4, 8, 16 cores

Advantages: Performance, reliability, scalability

---

## Question 10
Describe the working of translation lookaside buffer (TLB).

**Answer:** TLB (Translation Lookaside Buffer):
- Cache for page table entries
- Hardware component in MMU
- Speeds up virtual address translation

Structure:
- Contains: Virtual Page Number | Frame Number | Attributes
- Fully associative or set associative
- Size: 32-512 entries typically

Operation:
1. CPU generates virtual address
2. TLB searched for virtual page number
3. TLB Hit: Get frame number quickly
4. TLB Miss: Access page table in memory
5. Update TLB with new entry
6. Access physical memory

Performance:
- TLB hit rate: 90-99%
- Miss penalty: 10-100 cycles
- Larger TLB improves hit rate

Management:
- Replacement policies: LRU, FIFO, Random
- Invalidation on context switch
- Address space identifiers (ASIDs) avoid flush

---

*End of Computer Architecture Detailed Questions*
