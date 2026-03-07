# Digital Logic Design - Detailed Review Questions

---

## Question 1
Simplify the Boolean expression Y = A'B'C' + A'BC' + AB'C' + ABC' using Karnaugh Map method.

**Answer:**
Given: Y = A'B'C' + A'BC' + AB'C' + ABC'
Group terms with C' = 1:
- A'B'C' (m₀) + A'BC' (m₂) = A'C'(B' + B) = A'C'
- AB'C' (m₄) + ABC' (m₆) = AC'(B' + B) = AC'

Final simplified expression: Y = C'(A' + A) = C'

Using K-Map:
      BC=00  BC=01  BC=11  BC=10
A=0   1     0     1     0
A=1   1     0     1     0

Group all 1s horizontally → Y = C'

---

## Question 2
Design a full adder circuit and derive the Sum and Carry expressions.

**Answer:**
Full Adder has three inputs: A, B, Carry_in (Cin)
Two outputs: Sum, Carry_out (Cout)

Truth Table:
A B Cin | Sum Cout
0 0  0  |  0   0
0 0  1  |  1   0
0 1  0  |  1   0
0 1  1  |  0   1
1 0  0  |  1   0
1 0  1  |  0   1
1 1  0  |  0   1
1 1  1  |  1   1

Expressions:
- Sum = A ⊕ B ⊕ Cin (three-input XOR)
- Cout = (A·B) + (Cin·(A ⊕ B))

Implementation:
- Two half adders + one OR gate
- First HA: Sum1 = A ⊕ B, Carry1 = A·B
- Second HA: Sum = Sum1 ⊕ Cin, Carry2 = Sum1·Cin
- Cout = Carry1 + Carry2

---

## Question 3
Explain the working of a JK flip-flop and describe the race-around condition.

**Answer:** JK Flip-Flop truth table:
J K | Q(t+1)
0 0 | No change (Q)
0 1 | Reset (0)
1 0 | Set (1)
1 1 | Toggle (Q')

Characteristic Equation: Q(t+1) = JQ' + K'Q

Race-Around Condition:
- Occurs when J = K = 1 and clock pulse width > propagation delay
- Output toggles multiple times during one clock pulse
- Problem: Unpredictable output

Solutions:
1. Master-slave flip-flop (two flip-flops in series)
2. Edge-triggered flip-flops (triggered on clock edge)
3. Ensure clock pulse width < propagation delay

---

## Question 4
Design a 3-bit asynchronous (ripple) counter and explain its working.

**Answer:** 
A 3-bit ripple counter counts from 0 (000) to 7 (111).

Structure:
- 3 JK flip-flops connected in cascade
- All flip-flops have J=K=1 (toggle mode)
- Q output of each flip-flop clocks the next
- LSB flip-flop clocks on external clock
- Each flip-flop divides frequency by 2

Counting Sequence:
Clock | Q2 Q1 Q0 (Binary)
 0   | 0  0  0
 1   | 0  0  1
 2   | 0  1  0
 3   | 0  1  1
 4   | 1  0  0
 5   | 1  0  1
 6   | 1  1  0
 7   | 1  1  1
 8   | 0  0  0 (rollover)

Disadvantage: Propagation delay accumulates (ripple effect)

---

## Question 5
Differentiate between multiplexer and demultiplexer with applications.

**Answer:**
Multiplexer (MUX):
- Selects one input from multiple inputs
- Has n selection lines for 2^n inputs
- Example: 4-to-1 MUX selects one of 4 data inputs
- Output Y = S₁'S₀'I₀ + S₁'S₁I₁ + S₁S₀'I₂ + S₁S₀I₃
- Applications: Data selection, function implementation, parallel-to-serial conversion

Demultiplexer (DEMUX):
- Routes one input to one of multiple outputs
- Has n selection lines for 2^n outputs
- Example: 1-to-4 DEMUX routes input to selected output
- Applications: Data distribution, decoder, serial-to-parallel conversion

---

## Question 6
Explain the difference between combinational and sequential circuits.

**Answer:**
Combinational Circuits:
- Output depends only on current input
- No memory element
- Examples: Adders, multiplexers, encoders
- Output changes immediately with input change
- Can be represented by Boolean expressions

Sequential Circuits:
- Output depends on current input AND previous state
- Contains memory elements (flip-flops)
- Examples: Counters, registers, shift registers
- Requires clock for synchronization
- Can be represented by state tables/diagrams

Key Difference: Sequential circuits have memory, combinational don't

---

## Question 7
Design a 2-to-4 decoder and explain its operation.

**Answer:**
2-to-4 Decoder has:
- 2 inputs: A, B
- 4 outputs: D0, D1, D2, D3
- 1 enable input (E)

Truth Table:
E A B | D0 D1 D2 D3
0 x x | 0  0  0  0
1 0 0 | 1  0  0  0
1 0 1 | 0  1  0  0
1 1 0 | 0  0  1  0
1 1 1 | 0  0  0  1

Output Expressions:
- D0 = E'·A'·B' = EAB (if enabled high)
- D1 = E·A'·B
- D2 = E·A·B'
- D3 = E·A·B

Operation: Decoder activates exactly one output HIGH based on binary input code. Enable must be HIGH for operation.

---

## Question 8
State and prove De Morgan's theorems.

**Answer:** De Morgan's Theorems:

Theorem 1: (A + B)' = A' · B'
Theorem 2: (A · B)' = A' + B'

Proof of Theorem 1 using truth table:
A B | A+B | (A+B)' | A' | B' | A'·B'
0 0 |  0  |   1    | 1  | 1  |   1
0 1 |  1  |   0    | 1  | 0  |   0
1 0 |  1  |   0    | 0  | 1  |   0
1 1 |  1  |   0    | 0  | 0  |   0

Since (A+B)' = A'·B' for all combinations, theorem is proved.

Theorem 2 can be proved similarly.

Applications:
- Convert AND to OR using inversions
- Simplify Boolean expressions
- Design logic gates using NAND/NOR only

---

## Question 9
Explain the working of a shift register with different types.

**Answer:** Shift Register: Stores and shifts data serially/bit by bit.

Types:
1. SISO (Serial In Serial Out):
   - Data shifts in one bit at a time
   - Outputs one bit at a time
   - Used in data transmission

2. SIPO (Serial In Parallel Out):
   - Data shifts in serially
   - All bits available in parallel after shift
   - Used in serial-to-parallel conversion

3. PISO (Parallel In Serial Out):
   - All bits loaded in parallel
   - Outputs serially one bit at a time
   - Used in parallel-to-serial conversion

4. PIPO (Parallel In Parallel Out):
   - Parallel load and parallel output
   - Simple storage register

Operation: Each clock pulse shifts data one position left or right.

---

## Question 10
Compare synchronous and asynchronous counters.

**Answer:**
Asynchronous (Ripple) Counter:
- Flip-flops not clocked simultaneously
- Output of one flip-flop clocks next
- Simple design (no combinational logic)
- Slower due to propagation delay
- Delay accumulates (ripple effect)
- Used for simple counting applications

Synchronous Counter:
- All flip-flops clocked simultaneously
- Uses combinational logic for next state
- Faster operation (no ripple)
- More complex design
- No propagation delay issues
- Used for high-speed applications

Comparison:
Feature        | Async   | Sync
--------------|---------|-------
Clock          | Ripple  | Simultaneous
Speed          | Slow    | Fast
Design         | Simple  | Complex
Delay          | Accumulate | No delay
Applications   | Simple  | High-speed

---

*End of Digital Logic Design Detailed Questions*
