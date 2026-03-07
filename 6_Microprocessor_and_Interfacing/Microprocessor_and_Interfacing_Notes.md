# Microprocessor and Interfacing - Study Notes

## Table of Contents
1. [Introduction to Microprocessors](#1-introduction-to-microprocessors)
2. [8085 Microprocessor](#2-8085-microprocessor)
3. [8086 Microprocessor](#3-8086-microprocessor)
4. [Instruction Set](#4-instruction-set)
5. [Assembly Language Programming](#5-assembly-language-programming)
6. [Memory and I/O Interfacing](#6-memory-and-io-interfacing)
7. [Interrupts](#7-interrupts)
8. [Microcontroller Basics](#8-microcontroller-basics)

---

## 1. Introduction to Microprocessors

### What is a Microprocessor?
- Central Processing Unit (CPU) on a single chip
- Executes instructions
- Controls other components

### Evolution
1. **4-bit**: Intel 4004 (1971)
2. **8-bit**: Intel 8080, Zilog Z80
3. **16-bit**: Intel 8086, Motorola 68000
4. **32-bit**: Intel 80386, Motorola 68020
5. **64-bit**: Modern processors

### Key Terms
- **Clock Speed**: MHz/GHz (timing)
- **Word Length**: 8, 16, 32, 64 bits
- **Address Bus**: Carries memory addresses
- **Data Bus**: Carries data
- **Control Bus**: Carries control signals

### Types
- **CISC**: Complex Instruction Set
- **RISC**: Reduced Instruction Set
- **EPIC**: Explicitly Parallel

---

## 2. 8085 Microprocessor

### Features
- 8-bit data bus
- 16-bit address bus (64KB memory)
- 40-pin DIP package
- +5V supply
- 3.125 MHz clock

### Architecture
- **Accumulator (A)**: 8-bit register for arithmetic/logical
- **Registers**: B, C, D, E, H, L (general purpose)
- **Temporary Register**: W, Z (internal)
- **Program Counter (PC)**: 16-bit address of next instruction
- **Stack Pointer (SP)**: 16-bit address of stack
- **Flag Register**: 5 flags (S, Z, AC, P, CY)

### Flags
| Flag | Meaning |
|------|---------|
| S (Sign) | 1 if MSB is 1 |
| Z (Zero) | 1 if result is 0 |
| AC (Auxiliary Carry) | Carry from bit 3 to 4 |
| P (Parity) | 1 if even parity |
| CY (Carry) | 1 if carry out |

### Registers
- **B-C, D-E, H-L**: Can be used as pairs for 16-bit operations
- **HL**: Special, used for memory addressing

---

## 3. 8086 Microprocessor

### Features
- 16-bit data bus
- 20-bit address bus (1MB memory)
- 16-bit ALU
- Segment:Offset addressing
- Minimum and Maximum modes

### Registers
- **AX**: Accumulator (AH:AL)
- **BX**: Base
- **CX**: Count
- **DX**: Data
- **SP**: Stack Pointer
- **BP**: Base Pointer
- **SI**: Source Index
- **DI**: Destination Index
- **IP**: Instruction Pointer

### Segment Registers
- **CS**: Code Segment
- **DS**: Data Segment
- **SS**: Stack Segment
- **ES**: Extra Segment

### Addressing Modes
- **Register**: MOV AX, BX
- **Immediate**: MOV AX, 5
- **Direct**: MOV AX, [1000h]
- **Register Indirect**: MOV AX, [BX]
- **Based**: MOV AX, [BP+5]
- **Indexed**: MOV AX, [SI+5]
- **Based-Indexed**: MOV AX, [BX+SI]

---

## 4. Instruction Set

### Instruction Types
1. **Data Transfer**: MOV, LOAD, STORE
2. **Arithmetic**: ADD, SUB, MUL, DIV, INC, DEC
3. **Logical**: AND, OR, XOR, NOT
4. **Branch**: JMP, CALL, RET
5. **Compare**: CMP, TEST
6. **Shift/Rotate**: SHL, SHR, ROL, ROR

### Addressing Modes (8085)
1. **Immediate**: MVI A, 05h
2. **Register**: MOV A, B
3. **Direct**: LDA 2000h
4. **Register Indirect**: MOV A, M

### Common 8085 Instructions
| Mnemonic | Meaning |
|----------|---------|
| MOV r1, r2 | Copy register |
| MVI r, data | Move immediate |
| LDA addr | Load accumulator direct |
| STA addr | Store accumulator direct |
| ADD r | Add register to accumulator |
| SUB r | Subtract register |
| INR r | Increment register |
| DCR r | Decrement register |
| JMP addr | Jump unconditionally |
| JZ addr | Jump if zero |
| CALL addr | Call subroutine |
| RET | Return from subroutine |
| HLT | Halt |

---

## 5. Assembly Language Programming

### Assembly vs Machine Language
- **Machine**: Binary (1s and 0s)
- **Assembly**: Mnemonics (human readable)

### Program Structure
```assembly
ORG 0000h     ; Origin
LXI H, 0000h  ; Load immediate to HL
MOV A, M      ; Move memory to accumulator
INR A         ; Increment accumulator
MOV M, A      ; Move accumulator to memory
HLT           ; Halt
```

### Loops
```assembly
    MVI C, 05h ; Counter
LOOP:
    ; do something
    DCR C
    JNZ LOOP
```

### Arrays
```assembly
    LXI H, 0000h ; Base address
    MVI B, 05h   ; Count
NEXT:
    MOV A, M
    ; process
    INX H
    DCR B
    JNZ NEXT
```

### Subroutines
```assembly
CALL DELAY    ; Call subroutine
; continue

DELAY:
    PUSH B      ; Save registers
    LXI B, 0FFFFh
WAIT:
    DCX B
    MOV A, B
    ORA C
    JNZ WAIT
    POP B       ; Restore
    RET         ; Return
```

---

## 6. Memory and I/O Interfacing

### Memory Interfacing
- **Address Decoding**: Select memory chips
- **Chip Select**: Enable/disable memory chips
- **Wait States**: Add delays for slow memory

### I/O Interfacing
- **Port-mapped I/O**: Separate address space
- **Memory-mapped I/O**: I/O devices treated as memory

### 8255 PPI (Programmable Peripheral Interface)
- 3 ports (Port A, B, C)
- 8 bits each
- Modes: Simple I/O, Bidirectional, Strobed

### 8259 PIC (Programmable Interrupt Controller)
- Handles 8 interrupt sources
- Can be cascaded for more

### 8253/8254 Timer/Counter
- 3 independent 16-bit counters
- Modes: Rate generator, Square wave, Software triggered

---

## 7. Interrupts

### What is Interrupt?
- Signal to CPU to pause current program
- Handle urgent tasks

### Types
- **Hardware**: External signal
- **Software**: INT instruction

### 8085 Interrupts
| Interrupt | Vector |
|-----------|--------|
| TRAP | 0024h |
| RST 7.5 | 003Ch |
| RST 6.5 | 0034h |
| RST 5.5 | 002Ch |
| INTR | External |

### Interrupt Handling
1. Complete current instruction
2. Save PC on stack
3. Load interrupt service routine address
4. Execute ISR
5. Return from interrupt

### Priority
TRAP > RST 7.5 > RST 6.5 > RST 5.5 > INTR

---

## 8. Microcontroller Basics

### What is a Microcontroller?
- CPU + Memory + I/O on single chip
- Designed for embedded systems

### Popular Microcontrollers
- **8051**: Intel, 8-bit, classic
- **AVR**: Atmel, used in Arduino
- **PIC**: Microchip
- **ARM Cortex**: 32-bit, modern

### 8051 Features
- 4KB ROM, 128B RAM
- 4 ports (32 I/O lines)
- 2 timers
- Serial communication
- Interrupt controller

---

## Quick Reference

| Component | Function |
|-----------|----------|
| Accumulator | Main arithmetic/logical register |
| PC | Next instruction address |
| SP | Stack top address |
| Flags | Status of last operation |
| Registers | Fast temporary storage |

| Instruction | Purpose |
|-------------|---------|
| MOV | Copy data |
| ADD/SUB | Arithmetic |
| AND/OR/XOR | Logical |
| JMP/CALL | Flow control |
| IN/OUT | I/O |

---

*Last Updated: 2026*
*Subject: Microprocessor and Interfacing*
