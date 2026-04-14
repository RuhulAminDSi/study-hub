import type { Module } from '../../types'

const m7: Module = {
  title: "7. Computer Architecture",
  titleBn: "৭. কম্পিউটার আর্কিটেকচার",
  level: "Intermediate",
  lessons: [
    {
      id: "ca1",
      title: "CPU Organization",
      content: "CPU (Central Processing Unit): Brain of computer.\n\nComponents:\n• ALU: Performs arithmetic/logic operations\n• Registers: Fast internal storage\n• Control Unit: Decodes and executes instructions\n• Cache: Fast memory between CPU and RAM\n\nInstruction Format:\n• Opcode: Operation to perform\n• Operands: Data addresses\n• Mode: Addressing method\n\nInstruction Types:\n• Data Transfer: MOV, LOAD, STORE\n• Data Processing: ADD, SUB, AND, OR\n• Control Flow: JMP, CALL, RET\n• I/O: IN, OUT\n\nPipelining: Overlap instruction execution stages.\n• Stages: Fetch, Decode, Execute, Memory, Writeback\n• Pipeline hazard: Structural, Data, Control\n\nRISC vs CISC:\n• RISC: Simple instructions, pipelining\n• CISC: Complex instructions, variable length",
      takeaways: [
        "CPU has ALU, control unit, registers, cache",
        "Instruction format: opcode + operands + addressing",
        "Pipelining improves performance by overlapping stages",
        "RISC = simple fast, CISC = complex capable"
      ],
      level: "Intermediate"
    },
    {
      id: "ca2",
      title: "Memory Hierarchy",
      content: "Memory Hierarchy: Organized levels for speed vs cost tradeoff.\n\nLevels (fastest to slowest):\n• Registers: Few bytes, 1 cycle\n• Cache: KB-MB, 1-10 cycles\n• Main Memory (RAM): GB, 50-100 cycles\n• Secondary Storage: TB, millions of cycles\n\nCache:\n• L1: On-chip, fastest\n• L2: On or near chip\n• L3: Shared, larger\n\nMapping:\n• Direct: Each block to one line\n• Associative: Any location\n• Set-Associative: Hybrid\n\nCache Operations:\n• Hit: Data in cache\n• Miss: Data not in cache\n• Write Policy: Write-through, Write-back\n\nVirtual Memory:\n• Pages: Fixed-size blocks\n• Page Table: Maps virtual to physical\n• TLB: Translation lookaside buffer",
      takeaways: [
        "Memory hierarchy balances speed and cost",
        "Cache uses spatial and temporal locality",
        "Virtual memory extends addressable space",
        "Page tables map virtual to physical addresses"
      ],
      level: "Advanced"
    }
  ]
}

const m8: Module = {
  title: "8. Communication Theory",
  titleBn: "৮. যোগাযোগ তত্ত্ব",
  level: "Intermediate",
  lessons: [
    {
      id: "ct1",
      title: "Signals and Systems",
      content: "Signal: Function conveying information.\n\nTypes:\n• Analog: Continuous amplitude\n• Digital: Discrete levels\n\nClassification:\n• Periodic: Repeats over time\n• Aperiodic: Non-repeating\n• Deterministic: Predictable\n• Random: Probabilistic\n\nSystems:\n• Linear: Superposition applies\n• Time-invariant: Same response over time\n• Causal: Output depends on past/present\n• Stable: Bounded input → bounded output\n\nFourier Series: Periodic signals as sum of sinusoids.\nFourier Transform: Aperiodic signals in frequency domain.",
      takeaways: [
        "Signals can be analog or digital",
        "Linear time-invariant (LTI) systems are foundational",
        "Fourier analysis converts time to frequency domain",
        "Systems can be classified by properties"
      ],
      level: "Intermediate"
    },
    {
      id: "ct2",
      title: "Modulation",
      content: "Modulation: Varying carrier signal to encode information.\n\nReasons:\n• Efficient transmission\n• Multiplexing\n• Antenna size\n• Reduce noise\n\nAnalog Modulation:\n• AM: Amplitude varies with signal\n• FM: Frequency varies with signal\n• PM: Phase varies with signal\n\nDigital Modulation:\n• ASK: Amplitude shift keying\n• FSK: Frequency shift keying\n• PSK: Phase shift keying\n• QAM: Combined amplitude and phase\n\nPulse Modulation:\n• PAM: Pulse amplitude\n• PWM: Pulse width\n• PCM: Pulse code",
      code: "AM: s(t) = [Ac + m(t)] × cos(ωct)\nFM: s(t) = Ac × cos(ωc + k×m(t))×t",
      takeaways: [
        "Modulation embeds info in carrier signal",
        "AM and FM are analog modulation methods",
        "PSK, FSK, QAM are digital methods",
        "Modulation enables efficient transmission"
      ],
      level: "Intermediate"
    }
  ]
}

const m9: Module = {
  title: "9. Computer Networking and Security",
  titleBn: "৯. কম্পিউটার নেটওয়ার্কিং ও নিরাপত্তা",
  level: "Intermediate",
  lessons: [
    {
      id: "ns1",
      title: "Network Fundamentals",
      content: "Network: Connected computers sharing resources.\n\nTypes:\n• LAN: Local Area Network (building/campus)\n• MAN: Metropolitan Area Network (city)\n• WAN: Wide Area Network (country/world)\n\nTopology:\n• Bus: Single backbone\n• Star: Central hub\n• Ring: Circular connection\n• Mesh: Interconnected\n\nProtocols: Rules for communication.\n• TCP/IP: Internet protocol suite\n• HTTP: Web traffic\n• FTP: File transfer\n• SMTP: Email\n\nOSI Model (7 layers):\n1. Physical: Bits on wire\n2. Data Link: Frames, MAC\n3. Network: Packets, IP\n4. Transport: TCP/UDP\n5. Session: Session management\n6. Presentation: Data format\n7. Application: User interface",
      takeaways: [
        "Networks categorized by geographic scope",
        "Topology defines physical arrangement",
        "OSI model has 7 distinct layers",
        "TCP/IP is the internet protocol suite"
      ],
      level: "Intermediate"
    },
    {
      id: "ns2",
      title: "Network Security",
      content: "Security: Protecting information from threats.\n\nCIA Triad:\n• Confidentiality: Authorized access only\n• Integrity: Data accurate, unaltered\n• Availability: Accessible when needed\n\nThreats:\n• Malware: Virus, worm, trojan, ransomware\n• Phishing: Fake communications\n• DoS: Denial of service\n• MITM: Man-in-the-middle\n\nEncryption:\n• Symmetric: Same key (DES, AES)\n• Asymmetric: Public/Private key (RSA)\n• Hash: One-way (MD5, SHA)\n\nAuthentication:\n• Password: Knowledge\n• Token: Possession\n• Biometric: Inherence\n\nFirewalls: Filter network traffic based on rules.\n\nVPN: Virtual Private Network for secure remote access.",
      code: "Symmetric: E(M, K) = C\nAsymmetric: E(M, Kpublic) = C",
      takeaways: [
        "CIA triad: Confidentiality, Integrity, Availability",
        "Encryption protects data confidentiality",
        "Multiple authentication methods exist",
        "Firewalls filter traffic based on rules"
      ],
      level: "Advanced"
    }
  ]
}

const m10: Module = {
  title: "10. Structured Programming Language (C)",
  titleBn: "১০. স্ট্রাকচার্ড প্রোগ্রামিং ল্যাংগুয়েজ (C)",
  level: "Intermediate",
  lessons: [
    {
      id: "sp1",
      title: "C Programming Basics",
      content: "C: Procedural programming language.\n\nStructure:\n• Headers: #include <stdio.h>\n• Main function: int main()\n• Statements: Instructions\n• Return: Exit status\n\nData Types:\n• Primary: int, float, double, char\n• Derived: arrays, pointers, structures\n\nVariables:\n• Declaration: type name;\n• Initialization: type name = value;\n• Scope: local, global\n\nOperators:\n• Arithmetic: +, -, *, /, %\n• Relational: ==, !=, <, >, <=, >=\n• Logical: &&, ||, !\n• Bitwise: &, |, ^, ~, <<, >>\n\nControl Structures:\n• if-else: Conditional\n• switch: Multi-way branch\n• for: Counter-controlled loop\n• while: Condition-controlled",
      code: "#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\");\n    return 0;\n}",
      takeaways: [
        "C is procedural, needs main function",
        "Data types determine variable storage",
        "Operators perform computations",
        "Control structures direct program flow"
      ],
      level: "Intermediate"
    },
    {
      id: "sp2",
      title: "Functions and Arrays",
      content: "Function: Reusable code block.\n\nDeclaration: return_type name(parameters);\n\nTypes:\n• Library: printf, scanf, math functions\n• User-defined: Custom functions\n\nParameter Passing:\n• Pass by value: Copy of data\n• Pass by reference: Address of data\n\nRecursion: Function calling itself.\n\nArray: Collection of same-type elements.\n\nDeclaration: type array[size];\n\nTypes:\n• 1D: Linear collection\n• 2D: Matrix/table\n• Multi-dimensional\n\nPointer: Stores memory address.\n\nRelationship: Array name = pointer to first element.",
      code: "int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n-1);\n}",
      takeaways: [
        "Functions organize code into reusable units",
        "Recursion solves problems by self-calling",
        "Arrays store multiple same-type values",
        "Array name acts as pointer to first element"
      ],
      level: "Intermediate"
    },
    {
      id: "sp3",
      title: "Pointers and Dynamic Memory",
      content: "Pointer: Variable storing memory address.\n\nDeclaration: type *pointer_name;\n\nOperators:\n• &: Address-of operator\n• *: Value-at (dereference)\n\nPointer Arithmetic:\n• Increment moves to next element\n• Decrement moves to previous\n• Addition/subtraction changes address\n\nDynamic Memory:\n• malloc: Allocate memory\n• calloc: Allocate and zero\n• realloc: Resize allocation\n• free: Release memory\n\nPointers to Pointers: int **ptr;\n\nFunction Pointers: Store function addresses.\n\nStrings: Character arrays ending with null ('\\0').",
      code: "int *ptr = malloc(10 * sizeof(int));\nfree(ptr);",
      takeaways: [
        "Pointers store memory addresses",
        "Dynamic allocation handles runtime memory",
        "Pointer arithmetic respects data types",
        "Memory must be freed to prevent leaks"
      ],
      level: "Advanced"
    },
    {
      id: "sp4",
      title: "Structures and File I/O",
      content: "Structure: User-defined data type grouping different types.\n\nDeclaration:\nstruct name {\n    type member1;\n    type member2;\n};\n\nAccess: struct_var.member\n\nArray of Structures: Multiple structure instances.\n\nFile Operations:\n• fopen: Open file\n• fclose: Close file\n• fread: Read data\n• fwrite: Write data\n• fprintf: Formatted output\n• fscanf: Formatted input\n\nFile Modes:\n• r: Read\n• w: Write\n• a: Append\n• rb/wb: Binary",
      code: "struct Student {\n    char name[50];\n    int age;\n    float marks;\n};",
      takeaways: [
        "Structures group different data types",
        "Files persist data between program runs",
        "Binary files store raw data efficiently",
        "Proper file handling prevents data loss"
      ],
      level: "Advanced"
    }
  ]
}

export const modules: Module[] = [m7, m8, m9, m10]
