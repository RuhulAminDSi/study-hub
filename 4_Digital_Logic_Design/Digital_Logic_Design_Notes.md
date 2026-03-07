# Digital Logic Design - Study Notes

## Table of Contents
1. [Number Systems](#1-number-systems)
2. [Boolean Algebra](#2-boolean-algebra)
3. [Logic Gates](#3-logic-gates)
4. [Combinational Circuits](#4-combinational-circuits)
5. [Sequential Circuits](#5-sequential-circuits)
6. [Flip-Flops](#6-flip-flops)
7. [Counters and Registers](#7-counters-and-registers)

---

## 1. Number Systems

### Types
- **Binary**: Base-2 (0, 1)
- **Octal**: Base-8 (0-7)
- **Decimal**: Base-10 (0-9)
- **Hexadecimal**: Base-16 (0-9, A-F)

### Conversions
- Binary → Decimal: Add 2^n for each 1 bit
- Decimal → Binary: Repeated division by 2
- Binary → Hex: Group 4 bits
- Hex → Binary: Each hex digit = 4 bits

### Binary Codes
- **BCD (Binary Coded Decimal)**: Each decimal digit as 4-bit binary
- **Excess-3**: BCD + 3
- **Gray Code**: Only one bit changes between consecutive numbers

### Boolean Arithmetic
- **1's Complement**: Flip all bits
- **2's Complement**: 1's complement + 1 (for signed numbers)

---

## 2. Boolean Algebra

### Basic Operations
- **AND (·)**: 1·1=1, otherwise 0
- **OR (+)**: 0+0=0, otherwise 1
- **NOT (')**: Inverts input (0→1, 1→0)

### Laws
1. **Identity Law**: A+0=A, A·1=A
2. **Null Law**: A+1=1, A·0=0
3. **Idempotent Law**: A+A=A, A·A=A
4. **Complement Law**: A+A'=1, A·A'=0
5. **Commutative Law**: A+B=B+A, A·B=B·A
6. **Associative Law**: (A+B)+C=A+(B+C)
7. **Distributive Law**: A·(B+C)=A·B+A·C

### De Morgan's Theorems
1. (A+B)' = A' · B'
2. (A·B)' = A' + B'

### Boolean Expressions
- **Sum of Products (SOP)**: OR of AND terms
- **Product of Sums (POS)**: AND of OR terms
- **Canonical SOP**: Each term includes all variables
- **Canonical POS**: Each sum includes all variables

---

## 3. Logic Gates

### Basic Gates

| Gate | Symbol | Function |
|------|--------|----------|
| **AND** | □─●─& | Output=1 if ALL inputs=1 |
| **OR** | □─●≥1 | Output=1 if ANY input=1 |
| **NOT** | □─●1 | Inverts input |
| **NAND** | □─●&─○ | NOT-AND |
| **NOR** | □─●≥1─○ | NOT-OR |
| **XOR** | □─●=1 | Output=1 if ODD inputs=1 |
| **XNOR** | □─●=1─○ | Output=1 if EVEN inputs=1 |

### Universal Gates
- **NAND**: Can implement AND, OR, NOT
- **NOR**: Can implement AND, OR, NOT

### Gate Symbols
```
AND:    A ──|──●─── Y
OR:     A ──|──≥1─── Y
NOT:    A ──|──1─── Y
NAND:   A ──|──●──○── Y
NOR:    A ──|──≥1─○── Y
XOR:    A ──|──=1─── Y
XNOR:   A ──|──=1─○── Y
```

---

## 4. Combinational Circuits

### Design Process
1. Identify inputs and outputs
2. Create truth table
3. Write Boolean expressions
4. Simplify using K-map or Boolean algebra
5. Draw circuit diagram

### Multiplexer (MUX)
- **Definition**: Selects one of many inputs
- **2-to-1 MUX**: Y = S'·I₀ + S·I₁
- **4-to-1 MUX**: Y = S₁'S₀'I₀ + S₁'S₁I₀ + S₁S₀'I₂ + S₁S₀I₃

### Demultiplexer (DEMUX)
- **Definition**: Routes one input to one of many outputs

### Encoder
- **Definition**: Converts input to binary code
- **Priority Encoder**: Higher priority input gets encoded

### Decoder
- **Definition**: Converts binary code to one-hot output
- **2-to-4 Decoder**: Enables one of 4 outputs
- **3-to-8 Decoder**: Enables one of 8 outputs

### Half Adder
- Sum = A ⊕ B (XOR)
- Carry = A · B (AND)

### Full Adder
- Sum = A ⊕ B ⊕ Cin
- Cout = (A·B) + (Cin·(A ⊕ B))

### Parity Generator/Checker
- **Even Parity**: Number of 1s should be even
- **Odd Parity**: Number of 1s should be odd

---

## 5. Sequential Circuits

### Difference from Combinational
- **Combinational**: Output depends only on current input
- **Sequential**: Output depends on current input AND previous state

### Components
- **Combinational Logic**: Gates
- **Memory Elements**: Flip-flops
- **Feedback**: Output fed back as input

### Clock
- **Synchronous**: All flip-flops use common clock
- **Asynchronous**: Flip-flops use different clocks

---

## 6. Flip-Flops

### Types

| Flip-Flop | Characteristic Equation | Description |
|-----------|----------------------|-------------|
| **SR** | Q* = S + R'Q | Set-Reset |
| **D** | Q* = D | Delay |
| **JK** | Q* = JQ' + K'Q | Toggle when J=K=1 |
| **T** | Q* = T ⊕ Q | Toggle |

### Race Around Condition
- Problem in JK flip-flop when J=K=1
- Occurs when clock pulse width > propagation delay
- **Solution**: Master-slave flip-flop or edge-triggered flip-flop

### Edge Triggering
- **Positive Edge**: Triggered on rising edge (0→1)
- **Negative Edge**: Triggered on falling edge (1→0)

---

## 7. Counters and Registers

### Counters

**Asynchronous (Ripple) Counter**:
- Output of one flip-flop clocks the next
- Slow due to propagation delay

**Synchronous Counter**:
- All flip-flops clocked simultaneously
- Faster than ripple

**Modulus (MOD) Counter**:
- MOD-n counts from 0 to n-1
- Number of states = n

| Counter Type | States |
|--------------|--------|
| MOD-2 | 0,1 |
| MOD-8 | 0-7 |
| MOD-10 | 0-9 |
| MOD-16 | 0-15 |

### Registers
- **Shift Register**: Stores and shifts data
- **Types**: SISO, SIPO, PISO, PIPO

---

## Karnaugh Map (K-Map)

### Grouping Rules
1. Groups must be powers of 2 (1, 2, 4, 8...)
2. Groups can wrap around edges
3. Maximize group size
4. Cover all 1s (minimize don't cares)

### 2-Variable K-Map
```
      B=0   B=1
A=0    0     1
A=1    2     3
```

### 3-Variable K-Map
```
      BC=00  BC=01  BC=11  BC=10
A=0     0      1      3      2
A=1     4      5      7      6
```

### 4-Variable K-Map
```
      BC=00  BC=01  BC=11  BC=10
A=0     0      1      3      2
A=1     4      5      7      6
D=0    ---
D=1     8      9     11     10
```

---

## Quick Reference

| Concept | Formula/Key Point |
|---------|------------------|
| AND | 1·1=1, else 0 |
| OR | 0+0=0, else 1 |
| XOR | Output=1 if odd 1s |
| NAND | Universal gate |
| NOR | Universal gate |
| Half Adder | Sum=A⊕B, Carry=A·B |
| Full Adder | Sum=A⊕B⊕Cin, Cout=AB+Cin(A⊕B) |
| JK Flip-Flop | Toggle when J=K=1 |
| MOD-n Counter | n states (0 to n-1) |

---

*Last Updated: 2026*
*Subject: Digital Logic Design*
