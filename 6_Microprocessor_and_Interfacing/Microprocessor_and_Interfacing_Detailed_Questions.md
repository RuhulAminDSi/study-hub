# Microprocessor and Interfacing - Detailed Review Questions

---

## Question 1
Explain the architecture of 8085 microprocessor with a block diagram.

**Answer:** 8085 Microprocessor Architecture:

1. Accumulator (A): 8-bit register, primary register for arithmetic/logic operations

2. General Purpose Registers: B, C, D, E, H, L (can be used individually or as pairs: BC, DE, HL)

3. Special Purpose Registers:
   - Program Counter (PC): 16-bit, points to next instruction address
   - Stack Pointer (SP): 16-bit, points to top of stack
   - Instruction Register (IR): Holds current instruction
   - Instruction Decoder: Interprets instructions

4. Flag Register (8-bit, 5 flags used):
   - Sign (S): 1 if MSB is 1
   - Zero (Z): 1 if result is 0
   - Auxiliary Carry (AC): Carry from bit 3 to 4
   - Parity (P): 1 if even parity
   - Carry (CY): 1 if carry/borrow

5. Control Unit: Generates timing and control signals

6. ALU: Performs arithmetic (ADD, SUB, INR, DCR) and logical (ANA, ORA, CMP) operations

Data Bus: 8-bit
Address Bus: 16-bit (can address 64KB memory)

---

## Question 2
Explain the instruction cycle of 8085 microprocessor.

**Answer:** Instruction Cycle = Machine Cycle(s) = T-state(s)

Basic Steps:
1. Fetch: Get opcode from memory
2. Decode: Interpret instruction
3. Read Operand: If needed, get data
4. Execute: Perform operation
5. Write Result: Store output

Machine Cycle Types:
- Opcode Fetch (4T): Get instruction code
- Memory Read (3T): Read data from memory
- Memory Write (3T): Write data to memory
- I/O Read (3T): Read from input port
- I/O Write (3T): Write to output port

Example - MVI A, 32h:
- Machine Cycle 1: Opcode Fetch (4T)
- Machine Cycle 2: Memory Read (3T) - gets 32h
- Total: 7T-states

Example - ADD B:
- Machine Cycle 1: Opcode Fetch (4T)
- Machine Cycle 2: Read from register (no memory)
- Total: 4T-states

---

## Question 3
Differentiate between memory-mapped I/O and port-mapped I/O.

**Answer:**
Memory-Mapped I/O:
- I/O devices treated as memory locations
- Uses same address space as memory
- Any memory instruction can access I/O
- Example: LDA 2000h loads from memory/I/O address 2000h
- Advantages: More flexible, simpler instructions
- Disadvantages: Reduces memory address space
- Processors: 8086, 68000

Port-Mapped (Isolated) I/O:
- Separate address space for I/O
- Uses special IN and OUT instructions
- Example: IN 01h reads from port 01h
- Advantages: Doesn't consume memory space
- Disadvantages: Limited I/O instructions
- Processors: 8085, x86

Comparison:
Feature        | Memory-Mapped | Port-Mapped
--------------|---------------|-------------
Address Space | Shared        | Separate
Instructions  | Any memory    | Special (IN/OUT)
Access        | Slower        | Faster
Hardware      | Complex       | Simple

---

## Question 4
Explain the interrupt structure of 8085 microprocessor.

**Answer:** 8085 Interrupt Types:

Hardware Interrupts (5):
1. TRAP (RST 4.5): Vector 0024h
   - Highest priority
   - Edge and level triggered
   - Non-maskable
   - Used for critical events (power failure)

2. RST 7.5: Vector 003Ch
   - Edge triggered
   - Maskable (via SIM)
   - Priority: 2nd

3. RST 6.5: Vector 0034h
   - Level triggered
   - Maskable
   - Priority: 3rd

4. RST 5.5: Vector 002Ch
   - Level triggered
   - Maskable
   - Priority: 4th

5. INTR
   - Lowest priority
   - Maskable
   - Vector address provided by external device
   - Can be connected to 8259 PIC for more interrupts

Software Interrupt:
- RST n (n = 0-7): Vector = n × 8
- Example: RST 5 calls address 0028h

Priority Order: TRAP > RST 7.5 > RST 6.5 > RST 5.5 > INTR

---

## Question 5
Explain the addressing modes of 8086 microprocessor with examples.

**Answer:** 8086 Addressing Modes:

1. Immediate Addressing:
   - Data provided directly in instruction
   - Example: MOV AX, 1234h

2. Register Addressing:
   - Data in registers
   - Example: MOV AX, BX

3. Direct Addressing:
   - Memory address given in instruction
   - Example: MOV AX, [1000h]

4. Register Indirect Addressing:
   - Address in registers (BX, BP, SI, DI)
   - Example: MOV AX, [BX]

5. Based Addressing:
   - Address = Base register + displacement
   - Example: MOV AX, [BP+4]

6. Indexed Addressing:
   - Address = Index register + displacement
   - Example: MOV AX, [SI+100h]

7. Based-Indexed Addressing:
   - Address = Base + Index + displacement
   - Example: MOV AX, [BX+SI+2]

8. String Addressing:
   - Special for string operations
   - Uses SI and DI registers
   - Example: MOVSB, LODSB

---

## Question 6
Describe the architecture of 8051 microcontroller.

**Answer:** 8051 Architecture:

CPU Core:
- 8-bit ALU
- Accumulator (A)
- B register (for multiplication/division)
- Program Status Word (PSW): Flags
- Stack Pointer (SP)
- Program Counter (PC): 16-bit

Memory:
- Internal RAM: 128 bytes (00-7Fh)
- Internal ROM: 4KB (0000-0FFFh)
- External memory: 64KB each for code/data

Special Function Registers (SFR):
- P0, P1, P2, P3: I/O ports
- TCON, TMOD: Timer control
- SCON, SBUF: Serial port
- IE: Interrupt enable
- IP: Interrupt priority

Timers: 2 (16-bit each)

Serial Port: Full-duart (9600 baud typical)

I/O Ports: 4 ports (8 pins each)

Interrupts: 5 sources (2 external, 2 timer, 1 serial)

---

## Question 7
Explain DMA data transfer with its advantages over interrupt-driven transfer.

**Answer:** DMA (Direct Memory Access):

Definition: Data transfer directly between I/O device and memory without CPU intervention.

DMA Controller (8257):
- 4 channels
- Each channel can request transfer
- CPU grants bus control via HOLD signal
- DMA takes control of address and data bus

Transfer Sequence:
1. CPU programs DMA controller (source, destination, count)
2. I/O device requests DMA (DREQ signal)
3. CPU acknowledges via HRQ
4. DMA takes bus control (HOLD/HLDA)
5. DMA performs transfer (memory ↔ I/O)
6. Upon completion, DMA releases bus
7. CPU resumes control

Advantages over Interrupt:
1. Speed: No CPU overhead for each data byte
2. CPU free: Can perform other operations during transfer
3. Throughput: Much higher data rates
4. Efficiency: Better for block transfers

Used in: Hard disk, sound cards, network cards, memory-to-memory transfers

---

## Question 8
Explain the difference between RISC and CISC architectures.

**Answer:**
RISC (Reduced Instruction Set Computer):
- Fewer, simple instructions
- Fixed instruction length (32 bits)
- Load-Store architecture (memory only via load/store)
- Many registers (32+)
- Pipelining easy
- One instruction per cycle
- Examples: ARM, MIPS, SPARC

CISC (Complex Instruction Set Computer):
- Many, complex instructions
- Variable instruction length
- Memory-to-memory operations
- Fewer registers
- Microcode execution
- Multiple cycles per instruction
- Examples: x86, VAX, 68000

Comparison:
Feature          | RISC       | CISC
----------------|------------|---------
Instructions     | Simple     | Complex
Instruction Len  | Fixed      | Variable
Registers        | Many (32+) | Few (8-16)
Memory Access    | Load/Store | Direct
Pipelining       | Easy       | Difficult
Execution Time   | 1 cycle    | Multiple cycles
Code Size        | Larger     | Smaller

Modern processors often use hybrid approach.

---

## Question 9
Design an interface circuit for stepper motor control using 8085.

**Answer:** Stepper Motor Interface with 8085:

Components:
- 8085 microprocessor
- 8255 PPI (Programmable Peripheral Interface)
- Stepper motor (4-phase)
- Driver circuit (ULN2803)

Connections:
- 8255 Port A (PA0-PA3) → Motor phases (A, B, C, D)
- Port B: Control signals
- +5V supply through driver IC

Stepper Motor Sequence (Full Step):
- Phase A: 0001
- Phase B: 0010
- Phase C: 0100
- Phase D: 1000

Program Logic:
1. Initialize 8255 (Port A as output)
2. Load phase sequence in memory
3. Output to Port A
4. Delay between steps (speed control)
5. Update phase sequence
6. Repeat

Assembly Code:
MVI A, 80h    ; Control word
OUT CR        ; Control register

LOOP:
LXI H, TABLE  ; Phase table
MOV A, M      ; Get phase
OUT PA        ; Output to port
CALL DELAY    ; Speed control
INX H
JMP LOOP

TABLE: DB 01h, 02h, 04h, 08h

---

## Question 10
Explain the working of 8255 Programmable Peripheral Interface.

**Answer:** 8255 PPI Features:
- 3 parallel 8-bit ports (Port A, B, C)
- 3 modes of operation
- 40-pin DIP package

Port Details:
- Port A: 8-bit I/O (can be bidirectional with mode 2)
- Port B: 8-bit I/O
- Port C: 8-bit I/O (can be split into two 4-bit ports)
- Can generate handshake signals

Control Word Format:
- D7 = 1 (Control word flag)
- D6-D5 = Mode selection (00=Mode 0, 01=Mode 1, 1x=Mode 2)
- D4 = Port A direction (1=Input, 0=Output)
- D3 = Upper Port C (1=Input, 0=Output)
- D2 = Mode (for Port B)
- D1 = Port B direction
- D0 = Lower Port C

Modes:
Mode 0 (Simple I/O):
- Basic input/output
- No handshake
- All ports can be input/output

Mode 1 (Strobed I/O):
- Handshake signals
- Used for input/output with acknowledgment
- Port C provides handshake

Mode 2 (Bidirectional Bus):
- Only for Port A
- Bidirectional data transfer
- Uses Port C for handshake

---

*End of Microprocessor and Interfacing Detailed Questions*
