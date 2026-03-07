# Computer Architecture - Study Notes

## Table of Contents
1. [Introduction](#1-introduction)
2. [Data Representation](#2-data-representation)
3. [CPU Organization](#3-cpu-organization)
4. [Memory Hierarchy](#4-memory-hierarchy)
5. [Instruction Set Architecture](#5-instruction-set-architecture)
6. [Pipelining](#6-pipelining)
7. [RISC vs CISC](#7-risc-vs-cisc)
8. [I/O Systems](#8-io-systems)

---

## 1. Introduction

### What is Computer Architecture?
- Design and organization of computer system
- Hardware-software interface
- Performance optimization

### Computer Organization vs Architecture
- **Architecture**: What the programmer sees (instruction set)
- **Organization**: How to implement (internal structure)

---

## 2. Data Representation

### Number Systems
- **Binary**: Base-2 (0, 1)
- **Octal**: Base-8 (0-7)
- **Decimal**: Base-10 (0-9)
- **Hexadecimal**: Base-16 (0-9, A-F)

### Data Types
- **Bits**: 0 or 1
- **Nibble**: 4 bits
- **Byte**: 8 bits
- **Word**: 16, 32, or 64 bits

### Signed Number Representations
1. **Sign-Magnitude**: MSB is sign, rest is magnitude
2. **1's Complement**: Invert all bits
3. **2's Complement**: 1's complement + 1
   - Most common representation
   - Range: -2ⁿ⁻¹ to 2ⁿ⁻¹ - 1

### Floating Point (IEEE 754)
- **Single Precision (32-bit)**: 1 sign, 8 exponent, 23 mantissa
- **Double Precision (64-bit)**: 1 sign, 11 exponent, 52 mantissa

### ASCII and Unicode
- **ASCII**: 7-bit (128 characters)
- **Extended ASCII**: 8-bit (256 characters)
- **Unicode**: 16-bit (65,536+ characters)

---

## 3. CPU Organization

### Components
1. **Control Unit (CU)**: Fetch-decode-execute
2. **Arithmetic Logic Unit (ALU)**: Operations
3. **Registers**: Fast storage
4. **Cache**: Fast memory

### CPU Registers
- **Program Counter (PC)**: Next instruction address
- **Instruction Register (IR)**: Current instruction
- **Accumulator (ACC)**: Arithmetic operations
- **Memory Address Register (MAR)**: Address to access
- **Memory Data Register (MDR)**: Data being transferred
- **Status Register**: Flags (Zero, Carry, etc.)

### Instruction Cycle
1. **Fetch**: Get instruction from memory
2. **Decode**: Interpret instruction
3. **Execute**: Perform operation
4. **Store**: Write result back

### Addressing Modes
| Mode | Example | Meaning |
|------|---------|---------|
| Immediate | ADD #5 | Use 5 as operand |
| Register | ADD R1 | Use R1 contents |
| Direct | ADD 100 | Memory[100] |
| Indirect | ADD (R1) | Memory[R1] |
| Indexed | ADD 100(R1) | Memory[100+R1] |

---

## 4. Memory Hierarchy

### Levels (Fast → Slow)
1. **Registers**: Few bytes, <1ns
2. **Cache**: KB-MB, 1-10ns
3. **Main Memory (RAM)**: GB, 50-100ns
4. **Secondary Storage**: TB, ms
5. **Tertiary**: Optical, magnetic

### Cache Memory
- **Levels**: L1, L2, L3
- **Mapping**:
  - Direct Mapped: One location per block
  - Fully Associative: Any location
  - Set Associative: Compromise
- **Replacement Policies**: LRU, FIFO, Random
- **Write Policies**: Write-through, Write-back

### Virtual Memory
- **Paging**: Fixed-size pages
- **Segmentation**: Variable-size segments
- **Page Table**: Maps virtual to physical
- **TLB**: Translation Lookaside Buffer (cache for page table)

### Memory Access Time
- **Hit Rate**: % of memory accesses found in cache
- **Hit Time**: Time to access cache
- **Miss Penalty**: Additional time for main memory
- **Average Access Time**: T_avg = Hit_Rate × Hit_Time + Miss_Rate × Miss_Penalty

---

## 5. Instruction Set Architecture

### Instruction Types
1. **Data Transfer**: MOV, LOAD, STORE
2. **Data Processing**: ADD, SUB, AND, OR
3. **Control Flow**: JMP, CALL, BRANCH
4. **Input/Output**: IN, OUT

### Instruction Format
- **R-type**: Register operations
- **I-type**: Immediate values
- **J-type**: Jumps

### Instruction Length
- Fixed length: Easier to decode
- Variable length: More compact

### Little Endian vs Big Endian
- **Little Endian**: Least significant byte first
- **Big Endian**: Most significant byte first

---

## 6. Pipelining

### What is Pipelining?
- Overlap instruction execution
- Multiple instructions at different stages
- Increases throughput

### Pipeline Stages
1. **IF**: Instruction Fetch
2. **ID**: Instruction Decode
3. **EX**: Execute
4. **MEM**: Memory Access
5. **WB**: Write Back

### Hazards
1. **Structural**: Hardware conflict
2. **Data**: Dependency between instructions
   - **Solutions**: Forwarding, Stalling
3. **Control**: Branch instructions
   - **Solutions**: Branch prediction, Delay slots

### Performance
- **Speedup**: k stages → k times faster (ideal)
- **Throughput**: Instructions per cycle

---

## 7. RISC vs CISC

### RISC (Reduced Instruction Set Computer)
- **Philosophy**: Simple, few instructions
- **Features**:
  - Fixed instruction length
  - Load-Store architecture
  - Many registers
  - Pipelining friendly
- **Examples**: ARM, MIPS, SPARC

### CISC (Complex Instruction Set Computer)
- **Philosophy**: Complex, many instructions
- **Features**:
  - Variable instruction length
  - Memory-to-memory operations
  - Few registers
  - Microcode
- **Examples**: x86, VAX

### Comparison

| Feature | RISC | CISC |
|---------|------|------|
| Instructions | Simple | Complex |
| Registers | Many | Few |
| Memory | Load-Store | Memory-Register |
| Pipelines | Easy | Hard |
| Execution | 1 cycle/ins | Multiple cycles |

---

## 8. I/O Systems

### I/O Methods
1. **Programmed I/O**: CPU polls device
2. **Interrupt-Driven I/O**: Device interrupts CPU
3. **DMA (Direct Memory Access)**: Direct memory transfer

### Bus Types
- **System Bus**: CPU-Memory
- **I/O Bus**: Peripherals
- **Expansion Bus**: Add-on cards

### Common Buses
- **PCI**: Peripheral Component Interconnect
- **PCI Express**: Faster, point-to-point
- **USB**: Universal Serial Bus
- **SATA**: Storage devices

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| 2's Complement | Range: -2ⁿ⁻¹ to 2ⁿ⁻¹-1 |
| IEEE 754 | Floating point standard |
| Cache | Fast memory between CPU and RAM |
| Virtual Memory | Expands addressable memory |
| Pipeline | Overlaps instruction execution |
| RISC | Simple instructions, many registers |
| CISC | Complex instructions, few registers |

---

*Last Updated: 2026*
*Subject: Computer Architecture*
