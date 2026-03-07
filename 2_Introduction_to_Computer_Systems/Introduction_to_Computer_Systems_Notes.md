# Introduction to Computer Systems - Study Notes

## Table of Contents
1. [Introduction to Computation](#1-introduction-to-computation)
2. [History of Computing Devices](#2-history-of-computing-devices)
3. [Computer Basics](#3-computer-basics)
4. [Hardware Components](#4-hardware-components)
5. [Software](#5-software)
6. [Computer Architecture](#6-computer-architecture)
7. [Number Systems](#7-number-systems)
8. [Internet Basics](#8-internet-basics)

---

## 1. Introduction to Computation

### What is Computation?
- **Definition**: Process of solving problems, performing calculations, or processing information using well-defined rules/instructions
- **Formula**: Input → Algorithm → Output

### Types of Computation
1. **Exact Computation**: Precise, deterministic results (e.g., 5 × 7 = 35)
2. **Approximate Computation**: Results close to exact value (e.g., numerical solutions)
3. **Symbolic Computation**: Manipulates symbols/expressions (e.g., algebraic simplification)
4. **Logical/Boolean Computation**: Uses true/false values (e.g., decision-making)

### Models of Computation
- **Turing Machine**: Abstract model defining what problems are computable
- **Finite Automata**: Computation with limited memory
- **Lambda Calculus**: Mathematical model for defining functions

---

## 2. History of Computing Devices

### Timeline
| Period | Device/Concept | Contribution |
|--------|----------------|--------------|
| Prehistoric | Tally sticks | Counting & recording |
| Ancient | Abacus | Arithmetic operations |
| 17th c. | Pascaline, Leibniz's Engine | Mechanical addition, multiplication |
| 19th c. | Babbage's Analytical Engine | Concept of programmable computer |
| Late 19th | Punched cards (Hollerith) | Data processing & automation |

### Key Inventions
- **Abacus** (c. 2400 BCE): First mechanical aid for arithmetic
- **Pascaline** (1642): First mechanical adding machine
- **Analytical Engine** (Charles Babbage): First programmable computer concept
- **ENIAC** (1945): First electronic computer
- **Transistor** (1947): Replaced vacuum tubes
- **Microprocessor** (1971): Integrated CPU on a chip

---

## 3. Computer Basics

### What is a Computer?
An electronic device that accepts input, processes data, stores information, and produces output.

### Key Characteristics
- **Speed**: Performs operations faster than humans
- **Accuracy**: High precision in calculations
- **Automation**: Executes instructions automatically
- **Storage**: Can store vast amounts of data
- **Versatility**: Can perform various tasks

### Types of Computers
| Type | Description | Example |
|------|-------------|---------|
| Supercomputer | Extremely fast, complex computations | IBM Summit, Fugaku |
| Mainframe | Large, powerful, multi-user | IBM Z series |
| Minicomputer | Medium power, departmental | DEC PDP series |
| Personal Computer | Desktop/laptop for individual | Windows/Mac/Linux |
| Workstation | High-performance for engineering | CAD workstations |
| Embedded Systems | Integrated into devices | Washing machines, cars |

### Generations of Computers
| Generation | Technology | Key Features |
|------------|------------|--------------|
| 1st (1940-1956) | Vacuum tubes | Large, expensive, slow |
| 2nd (1956-1963) | Transistors | Smaller, reliable |
| 3rd (1964-1971) | Integrated Circuits | Compact, faster |
| 4th (1971-present) | Microprocessors | Personal computers |
| 5th (Present/Future) | AI, Quantum | Advanced processing |

---

## 4. Hardware Components

### 4.1 Central Processing Unit (CPU)
The "brain" of the computer

**Components**:
- **ALU (Arithmetic Logic Unit)**: Performs arithmetic and logical operations
- **Control Unit (CU)**: Directs data flow, decodes instructions
- **Registers**: Small, high-speed storage for temporary data

**Function**: Fetch → Decode → Execute → Store

### 4.2 Memory

**Primary Memory (Volatile)**:
- **RAM (Random Access Memory)**: Temporary storage for running programs
- **Cache Memory**: Fast memory near CPU for frequently used data
- **Registers**: Extremely fast storage inside CPU

**Secondary Memory (Non-volatile)**:
- Hard disk drives (HDD)
- Solid-state drives (SSD)
- Optical disks

### 4.3 Input/Output Devices

**Input Devices**: Keyboard, mouse, scanner, microphone
**Output Devices**: Monitor, printer, speakers
**I/O Devices**: Touchscreen, network cards, USB devices

### 4.4 System Bus
- **Data Bus**: Transfers actual data
- **Address Bus**: Specifies memory/I/O addresses
- **Control Bus**: Carries control signals (read/write, interrupt)

---

## 5. Software

### 5.1 System Software
- **Operating System**: Interface between user and hardware
  - Manages resources
  - Provides user interface (CLI/GUI)
  - Examples: Windows, Linux, macOS, Android

### 5.2 Application Software
Designed for specific user tasks:
- **Productivity**: MS Office, Google Docs
- **Graphics**: Photoshop, CorelDRAW
- **Web Browsers**: Chrome, Firefox
- **Enterprise**: SAP, Oracle ERP

---

## 6. Computer Architecture

### Basic Components
1. **CPU**: Processing
2. **Memory**: Storage (RAM, Cache, HDD)
3. **I/O Devices**: Input/Output
4. **System Bus**: Connection between components

### Instruction Cycle
1. **Fetch**: CU fetches instruction from memory
2. **Decode**: CU decodes instruction
3. **Execute**: ALU performs operation
4. **Store**: Result stored in memory

---

## 7. Number Systems

### Types
1. **Binary (Base-2)**: Uses 0 and 1
2. **Octal (Base-8)**: Uses 0-7
3. **Decimal (Base-10)**: Uses 0-9
4. **Hexadecimal (Base-16)**: Uses 0-9 and A-F

### Conversions
- **Binary to Decimal**: Sum of (bit × 2^position)
- **Decimal to Binary**: Repeated division by 2
- **Binary to Hexadecimal**: Group 4 bits
- **Hexadecimal to Binary**: Each hex digit to 4 bits

### Binary Arithmetic
- **Addition**: 0+0=0, 0+1=1, 1+1=0 (carry 1)
- **Subtraction**: 0-0=0, 1-0=1, 1-1=0 (borrow)
- **Multiplication**: AND operations

---

## 8. Internet Basics

### What is the Internet?
Global network of interconnected computers using TCP/IP protocol to share information.

### History
- **ARPANET** (1960s): First packet-switching network
- **TCP/IP** (1983): Standard protocol
- **World Wide Web** (1991): Tim Berners-Lee

### Key Concepts
- **IP Address**: Unique identifier for devices
- **DNS**: Domain Name System (converts names to IPs)
- **HTTP/HTTPS**: Web communication protocol
- **URL**: Uniform Resource Locator

---

## Quick Reference

| Component | Function |
|-----------|----------|
| CPU | Executes instructions, controls other components |
| ALU | Performs arithmetic and logical operations |
| RAM | Temporary data storage (volatile) |
| HDD/SSD | Permanent data storage |
| Bus | Connects components, transfers data |

---

*Last Updated: 2026*
*Subject: Introduction to Computer Systems*
