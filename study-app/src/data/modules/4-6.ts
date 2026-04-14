import type { Module } from '../../types'

const m4: Module = {
  title: "4. Digital Logic Design",
  titleBn: "৪. ডিজিটাল লজিক ডিজাইন",
  level: "Intermediate",
  lessons: [
    {
      id: "dl1",
      title: "Number Systems",
      content: "Number Systems:\n• Binary (Base 2): 0, 1\n• Octal (Base 8): 0-7\n• Decimal (Base 10): 0-9\n• Hexadecimal (Base 16): 0-9, A-F\n\nConversions:\n• Binary to Decimal: Sum of bit × 2^position\n• Decimal to Binary: Repeated division by 2\n• Binary to Hex: Group 4 bits\n\nSigned Numbers:\n• Sign-Magnitude: MSB is sign bit\n• 2's Complement: 1's complement + 1 (for negative numbers)\n• Range for n-bit: -2^(n-1) to +2^(n-1)-1",
      code: "Binary to Decimal: 1011 = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 11\n2's Comp: invert bits, add 1",
      takeaways: [
        "All number systems are positional",
        "Binary is base-2, Hex is base-16",
        "2's complement represents negative numbers",
        "Binary arithmetic is fundamental to computers"
      ],
      level: "Intermediate"
    },
    {
      id: "dl2",
      title: "Boolean Algebra",
      content: "Boolean Algebra: Mathematical system for logic operations.\n\nBasic Operations:\n• OR (+): Output 1 if any input is 1\n• AND (×): Output 1 if all inputs are 1\n• NOT (¬): Inverts input\n\nLaws:\n• Identity: A + 0 = A, A × 1 = A\n• Null: A + 1 = 1, A × 0 = 0\n• Complement: A + A' = 1, A × A' = 0\n• Commutative, Associative, Distributive\n\nDe Morgan's Theorems:\n• (A + B)' = A' × B'\n• (A × B)' = A' + B'",
      code: "F = A + B × C\nDe Morgan: (A + B)' = A' × B'",
      takeaways: [
        "Boolean algebra uses AND, OR, NOT operations",
        "Laws simplify and transform expressions",
        "De Morgan's theorems convert between forms",
        "Fundamental to digital circuit design"
      ],
      level: "Intermediate"
    },
    {
      id: "dl3",
      title: "Logic Gates",
      content: "Basic Logic Gates:\n• NOT: Inverts input\n• AND: Output 1 when all inputs are 1\n• OR: Output 1 when any input is 1\n\nDerived Gates:\n• NAND: AND + NOT. Universal gate\n• NOR: OR + NOT. Universal gate\n• XOR: Output 1 when inputs differ\n• XNOR: Output 1 when inputs same\n\nKarnaugh Map (K-Map): Simplifies Boolean expressions visually.\n• Group adjacent 1s (powers of 2: 1, 2, 4, 8...)\n• Groups can wrap around edges",
      code: "NAND = (A × B)'\nNOR = (A + B)'\nXOR = A ⊕ B",
      takeaways: [
        "Basic gates: NOT, AND, OR",
        "NAND and NOR are universal gates",
        "K-map simplifies Boolean expressions",
        "Truth table defines gate behavior"
      ],
      level: "Intermediate"
    },
    {
      id: "dl4",
      title: "Combinational Circuits",
      content: "Combinational Circuits: Output depends only on current inputs. No memory.\n\nDesign Process:\n1. Identify inputs and outputs\n2. Create truth table\n3. Write Boolean expressions\n4. Simplify using K-maps or algebra\n5. Implement with gates\n\nCommon Circuits:\n• Adders: Half adder (sum, carry), Full adder (3 inputs)\n• Multiplexer (MUX): Selects one input from many\n• Demultiplexer (DEMUX): Routes input to one output\n• Encoder/Decoder, Comparator",
      code: "Half Adder:\nS = A ⊕ B\nC = A × B",
      takeaways: [
        "Combinational circuits have no memory",
        "Adders perform binary addition",
        "MUX selects from multiple inputs",
        "Design follows truth table → simplified expression → gates"
      ],
      level: "Intermediate"
    },
    {
      id: "dl5",
      title: "Sequential Circuits",
      content: "Sequential Circuits: Output depends on current inputs AND past history. Has memory.\n\nComponents:\n• Combinational Logic: Gates\n• Memory Elements: Flip-flops\n• Feedback: Output fed back as input\n\nFlip-Flops (Edge-triggered):\n• SR: Q* = S + R'Q\n• D: Q* = D (Delay element)\n• JK: Q* = JQ' + K'Q (Toggle when J=K=1)\n• T: Q* = T ⊕ Q (Toggle on each pulse)\n\nCounters:\n• Asynchronous (Ripple): Slow\n• Synchronous: Faster\n• MOD-n: Counts from 0 to n-1 states\n\nState Machines:\n• Mealy: Output depends on input AND state\n• Moore: Output depends only on state",
      code: "Q* = S + R'Q (SR)\nQ* = D (D FF)\nQ* = JQ' + K'Q (JK)\nQ* = T ⊕ Q (T FF)",
      takeaways: [
        "Sequential circuits have memory (flip-flops)",
        "Flip-flops trigger on clock edge",
        "Counters and registers store data",
        "State machines model sequential behavior"
      ],
      level: "Advanced"
    }
  ]
}

const m5: Module = {
  title: "5. Basic Electronics",
  titleBn: "৫. মৌলিক ইলেকট্রনিক্স",
  level: "Beginner",
  lessons: [
    {
      id: "be1",
      title: "Semiconductor Basics",
      content: "Semiconductor: Material with conductivity between conductor and insulator.\n\nMaterial Types:\n• Conductor: Low resistance (copper, gold)\n• Insulator: High resistance (glass, rubber)\n• Semiconductor: Between conductor and insulator\n\nSemiconductor Materials:\n• Silicon (Si): Most common\n• Germanium (Ge): Used in older devices\n\nIntrinsic Semiconductor:\n• Pure semiconductor\n• Equal electrons and holes\n\nExtrinsic Semiconductor (Doped):\n• N-type: Pentavalent dopants (P, As). Majority: Electrons\n• P-type: Trivalent dopants (B, Ga). Majority: Holes\n\nPN Junction:\n• Forward Bias: Current flows when V > 0.7V (Si)\n• Reverse Bias: Small reverse saturation current\n\nDiode Types:\n• Rectifier Diode: Power supply (AC to DC)\n• Zener Diode: Voltage regulation",
      code: "Forward: V > 0.7V (Si)\nI = I_s(e^(V/nVT) - 1)",
      takeaways: [
        "Semiconductors are doped to create N and P types",
        "PN junction allows current forward, blocks reverse",
        "Diodes conduct in one direction only",
        "Zener diodes regulate voltage in reverse bias"
      ],
      level: "Beginner"
    },
    {
      id: "be2",
      title: "Transistors",
      content: "Transistor: Three-terminal semiconductor device to amplify or switch signals.\n\nBJT (Bipolar Junction Transistor):\n• NPN: Current flows from Collector to Emitter\n• PNP: Opposite direction\n• Three regions: Emitter, Base, Collector\n\nBJT Modes:\n• Active: For amplification\n• Cutoff: Fully OFF\n• Saturation: Fully ON\n\nCurrent Relations:\n• I_C = β × I_B (β = current gain, typically 100)\n\nFET (Field Effect Transistor):\n• Voltage-controlled (not current-controlled like BJT)\n• MOSFET: Most common in digital circuits\n\nOp-Amp (Operational Amplifier):\n• High-gain differential amplifier\n• Very high input impedance (MΩ)\n• Low output impedance (Ω)",
      code: "β = Ic / Ib\nAv = R_f / R_in (inverting)",
      takeaways: [
        "BJT uses current, FET uses voltage to control",
        "Transistors can amplify or switch",
        "Three configurations: CE, CB, CC",
        "MOSFET is most common in digital circuits"
      ],
      level: "Intermediate"
    }
  ]
}

const m6: Module = {
  title: "6. Microprocessor and Interfacing",
  titleBn: "৬. মাইক্রোপ্রসেসর ও ইন্টারফেসিং",
  level: "Intermediate",
  lessons: [
    {
      id: "mp1",
      title: "Microprocessor Basics",
      content: "Microprocessor: Integrated circuit containing CPU functions.\n\nArchitecture:\n• Von Neumann: Single memory for code and data\n• Harvard: Separate memories for code and data\n\n8086 Architecture:\n• 16-bit data bus, 20-bit address bus\n• Registers: AX, BX, CX, DX, SP, BP, SI, DI\n• Segments: CS, DS, SS, ES\n\nInstruction Cycle:\n1. Fetch instruction from memory\n2. Decode instruction\n3. Execute operation\n4. Store result\n\nAddressing Modes:\n• Immediate, Register, Direct, Indirect, Indexed",
      takeaways: [
        "Microprocessor is CPU on a chip",
        "8086 is 16-bit processor with segment architecture",
        "Instruction cycle: fetch-decode-execute-store",
        "Multiple addressing modes for data access"
      ],
      level: "Intermediate"
    },
    {
      id: "mp2",
      title: "Interfacing and Peripherals",
      content: "I/O Interfacing: Connecting CPU with external devices.\n\nMethods:\n• Programmed I/O: CPU polls device\n• Interrupt-driven: Device notifies CPU\n• DMA: Direct memory access without CPU\n\nPeripheral Interfaces:\n• Parallel: Multiple wires, fast\n• Serial: One wire, slower (USB, RS232)\n• Keyboard: Matrix scanning\n• Display: 7-segment, LCD, CRT\n\nCommunication Protocols:\n• UART: Async serial communication\n• SPI: Serial Peripheral Interface\n• I2C: Inter-Integrated Circuit\n• USB: Universal Serial Bus",
      takeaways: [
        "I/O interfacing connects CPU to devices",
        "Three methods: programmed, interrupt, DMA",
        "Serial vs parallel for different speeds",
        "Communication protocols enable device talk"
      ],
      level: "Intermediate"
    }
  ]
}

export const modules: Module[] = [m4, m5, m6]
