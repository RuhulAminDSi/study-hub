import type { Module } from '../../types'

const m1: Module = {
  title: "1. Basic Physics",
  titleBn: "১. পদার্থবিদ্যার মূল ধারণা",
  level: "Beginner",
  lessons: [
    {
      id: "bp1",
      title: "Electromagnetism Basics",
      titleBn: "তড়িৎচুম্বকত্বের মূল ধারণা",
      content: "Charge, Coulomb's law, electric field, Gauss's law, electric potential, magnetic field, Faraday's law, Maxwell's equations.\n\n⚡ Charge: Fundamental property of matter causing electromagnetic interaction. Types: Positive (+) and Negative (-). Unit: Coulomb (C). Conservation: Charge cannot be created/destroyed, only transferred.\n\n⚡ Coulomb's Law: Force between two electric charges: F = k(q1×q2)/r². Force is attractive for opposite charges, repulsive for like charges.\n\n⚡ Electric Field (E): Region around charged particle where it exerts force on other charges. E = F/q. Unit: N/C or V/m.\n\n🧲 Magnetic Field: Region around moving charge or magnet where magnetic forces act. Unit: Tesla (T). Right-Hand Rule: Thumb = Current direction, Fingers = Magnetic field direction.\n\n🧲 Faraday's Law: Changing magnetic field induces EMF. EMF = -dΦB/dt.\n\n🌐 Maxwell's Equations (4 fundamental laws):\n1. ∇·E = ρ/ε₀\n2. ∇·B = 0\n3. ∇×E = -∂B/∂t\n4. ∇×B = μ₀J + μ₀ε₀(∂E/∂t)",
      contentBn: "আধান, কুলম্বের সূত্র, তড়িৎক্ষেত্র, গাউসের সূত্র, তড়িৎবিভব, চুম্বকক্ষেত্র, ফ্যারাডের সূত্র, ম্যাক্সওয়েলের সমীকরণ।\n\n⚡ আধান: পদার্থের একটি মৌলিক ধর্ম। প্রকার: ধনবাহী (+) এবং ঋণবাহী (-)।\n\n⚡ কুলম্বের সূত্র: দুটি তড়িৎআধানের মধ্যে বল: F = k(q1×q2)/r²।\n\n🧲 চুম্বকক্ষেত্র: চলমান আধান বা চুম্বকের চারপাশে অঞ্চল।\n\n🧲 ফ্যারাডের সূত্র: পরিবর্তনশীল চুম্বকক্ষেত্র EMF প্রবর্তন করে।\n\n🌐 ম্যাক্সওয়েলের সমীকরণ (৪টি মৌলিক সূত্র)",
      code: "F = k × (q1 × q2) / r²\nE = F/q\nV = W/q\nEMF = -dΦB/dt",
      takeaways: [
        "Charge is fundamental property with + and - types",
        "Coulomb's law defines force between charges",
        "Electric field = force per unit charge",
        "Maxwell's equations unify all electromagnetism"
      ],
      takeawaysBn: [
        "আধান + এবং - প্রকার সহ মৌলিক ধর্ম",
        "কুলম্বের সূত্র আধানের মধ্যে বল সংজ্ঞায়িত করে",
        "তড়িৎক্ষেত্র = একক আধান প্রতি বল",
        "ম্যাক্সওয়েলের সমীকরণ সমস্ত তড়িৎচুম্বকত্ব একত্রিত করে"
      ],
      level: "Beginner"
    },
    {
      id: "bp2",
      title: "Waves and Oscillations",
      content: "Oscillation: Back-and-forth repetitive motion around mean position. Examples: pendulum, mass on spring, AC current.\n\nKey Terms:\n• Amplitude (A): Maximum displacement from mean position\n• Time Period (T): Time for one complete oscillation\n• Frequency (f): Number of oscillations per second. f = 1/T in Hz\n• Angular Frequency (ω): ω = 2πf\n\nSimple Harmonic Motion (SHM): F = -kx. Equation: x(t) = A×sin(ωt + φ).\n\nWave: Disturbance transferring energy without transferring matter.\nTypes:\n• Mechanical (require medium): sound, water waves\n• Electromagnetic (no medium): light, radio\n• Transverse: particle motion ⟂ wave direction\n• Longitudinal: particle motion ∥ wave direction\n\nWave Properties:\n• Wavelength (λ): Distance between two crests\n• Wave speed (v): v = fλ",
      code: "f = 1/T\nv = fλ\nx(t) = A × sin(ωt + φ)\nω = 2πf",
      takeaways: [
        "Oscillation is repetitive back-and-forth motion",
        "Wave transfers energy without matter transfer",
        "v = fλ relates speed, frequency, wavelength",
        "Resonance occurs when frequencies match"
      ],
      level: "Beginner"
    },
    {
      id: "bp3",
      title: "Special Relativity",
      content: "Theory of Special Relativity (Einstein, 1905) explains how space, time, and motion relate at speeds near light.\n\nTwo Postulates:\n1. Principle of Relativity: Laws of physics identical in all inertial frames.\n2. Constancy of Speed of Light: c = 3×10⁸ m/s same for all observers.\n\nConsequences:\na) Time Dilation: Moving clocks run slower.\nt = t₀ / √(1 - v²/c²)\n\nb) Length Contraction: Moving objects appear shorter.\nL = L₀ × √(1 - v²/c²)\n\nc) Mass-Energy Equivalence: E = mc²",
      code: "t = t₀ / √(1 - v²/c²)\nL = L₀ × √(1 - v²/c²)\nE = mc²",
      takeaways: [
        "Speed of light is constant for all observers",
        "Time dilation: moving clocks run slower",
        "Length contraction: moving objects shorten",
        "E = mc² shows mass-energy equivalence"
      ],
      level: "Beginner"
    },
    {
      id: "bp4",
      title: "Quantum Physics & EM Waves",
      content: "Electromagnetic Waves: Oscillations of electric and magnetic fields traveling through space. Don't require medium. Formula: c = λν.\n\nEM Spectrum:\n• Radio waves: λ > 1m\n• Microwaves: 1m - 1mm\n• Infrared: 1mm - 700nm\n• Visible light: 700-400nm\n• Ultraviolet: 400-10nm\n• X-rays: 10-0.01nm\n• Gamma rays: < 0.01nm\n\nPhotoelectric Effect: Light shining on metal surface emits electrons.\nEinstein's Explanation: Light behaves as particles (photons). Energy: E = hν\n\nDe Broglie Waves: Particles have wave-like properties. Formula: λ = h/p",
      code: "c = fλ\nE = hν\nλ = h/p",
      takeaways: [
        "Light has both wave and particle properties",
        "Photoelectric effect proves particle nature",
        "X-ray diffraction reveals crystal structure",
        "Compton effect confirms photon momentum"
      ],
      level: "Beginner"
    }
  ]
}

const m2: Module = {
  title: "2. Introduction to Computer Systems",
  titleBn: "২. কম্পিউটার সিস্টেমের পরিচিতি",
  level: "Beginner",
  lessons: [
    {
      id: "cs1",
      title: "Introduction to Computation",
      titleBn: "গণনার পরিচিতি",
      content: "Computation: Process of solving problems, performing calculations, or processing information using well-defined rules.\n\nKey Components:\n• Input: Data provided to computation\n• Process: Operations/algorithms applied\n• Output: Result produced\n\nTypes of Computation:\n• Exact: Precise, deterministic results\n• Approximate: Close to exact value\n• Symbolic: Manipulates symbols/expressions\n• Logical/Boolean: Uses true/false values\n\nModels of Computation:\n• Turing Machine: Abstract model defining computability\n• Finite Automata: Limited memory, pattern recognition\n• Lambda Calculus: Mathematical function model",
      contentBn: "গণনা: সুসংজ্ঞায়িত নিয়ম ব্যবহার করে সমস্যা সমাধান, গণনা বা তথ্য প্রক্রিয়াকরণের প্রক্রিয়া।",
      code: "Computation: Input → Algorithm → Output",
      takeaways: [
        "Computation transforms input to output via algorithm",
        "Multiple types: exact, approximate, symbolic, logical",
        "Turing Machine defines what problems are computable",
        "Foundation for programming and algorithms"
      ],
      takeawaysBn: [
        "গণনা অ্যালগরিদমের মাধ্যমে ইনপুটকে আউটপুটে রূপান্তর করে",
        "টিউরিং মেশিন কোন সমস্যা গণনাযোগ্য তা সংজ্ঞায়িত করে",
        "প্রোগ্রামিং এবং অ্যালগরিদমের ভিত্তি"
      ],
      level: "Beginner"
    },
    {
      id: "cs2",
      title: "History of Computing Devices",
      titleBn: "গণনা যন্ত্রের ইতিহাস",
      content: "Prehistoric & Ancient Tools:\n• Tally sticks: Notches for counting\n• Abacus (2400 BCE): Beads on rods for arithmetic\n\nMechanical Computation:\n• Antikythera Mechanism (100 BCE): Earliest analog device\n• Napier's Bones (1617): Multiplication/division rods\n• Pascaline (1642): Mechanical adding machine\n\n19th Century - Analytical Engine:\n• Charles Babbage: Difference Engine, Analytical Engine\n• Ada Lovelace: First programmer, wrote algorithms\n\nLate 19th Century:\n• Punched Card Systems (Hollerith): U.S. Census, precursor to IBM",
      contentBn: "প্রাচীন ও প্রাগৈতিহাসিক সরঞ্জাম: ট্যালি স্টিক, অ্যাব্যাকাস।\nযান্ত্রিক গণনা: অ্যান্টিকিথেরা মেকানিজম, পাস্কেলিন।\nব্যাবেজের অ্যানালিটিক্যাল ইঞ্জিন।",
      takeaways: [
        "Progressed from manual counting to mechanical devices",
        "Babbage's Analytical Engine is precursor to modern computers",
        "Ada Lovelace wrote first computer program",
        "Punched cards enabled automation in data processing"
      ],
      takeawaysBn: [
        "ম্যানুয়াল গণনা থেকে যান্ত্রিক যন্ত্রে অগ্রগতি হয়েছে",
        "ব্যাবেজের অ্যানালিটিক্যাল ইঞ্জিন আধুনিক কম্পিউটারের পূর্বসূরি",
        "অ্যাডা লাভলেস প্রথম প্রোগ্রাম লিখেছিলেন"
      ],
      level: "Beginner"
    },
    {
      id: "cs3",
      title: "Computer Basics",
      titleBn: "কম্পিউটারের মৌলিক ধারণা",
      content: "Computer: Electronic device accepting input, processing data, storing information, producing output.\n\nKey Characteristics:\n• Speed: Much faster than humans\n• Accuracy: High precision\n• Automation: Executes instructions automatically\n• Storage: Stores vast data amounts\n• Versatility: Multiple tasks\n\nBasic Components:\n• Input Devices: Keyboard, mouse, scanner\n• Output Devices: Monitor, printer, speakers\n• CPU: Brain, executes instructions, controls components\n• Memory: RAM (temporary), HDD/SSD (permanent)\n\nTypes of Computers:\n• Supercomputer, Mainframe, Minicomputer, Personal Computer, Workstation, Embedded Systems",
      contentBn: "কম্পিউটার: ইনপুট গ্রহণ, ডেটা প্রসেসিং, তথ্য সংরক্ষণ এবং আউটপুট উৎপাদনকারী ইলেকট্রনিক যন্ত্র।\nমূল উপাদান: CPU, মেমরি, ইনপুট/আউটপুট ডিভাইস।",
      takeaways: [
        "Computer processes input to produce output",
        "CPU is the brain executing instructions",
        "Multiple computer types for different needs",
        "Generations: Vacuum tubes → Transistors → ICs → Microprocessors"
      ],
      takeawaysBn: [
        "কম্পিউটার ইনপুট থেকে আউটপুট প্রসেস করে",
        "CPU নির্দেশনা বাস্তবায়নকারী মস্তিষ্ক",
        "বিভিন্ন প্রয়োজনে একাধিক কম্পিউটার প্রকার"
      ],
      level: "Beginner"
    },
    {
      id: "cs4",
      title: "Hardware Components",
      content: "Processor (CPU): Brain of computer, executes instructions.\n\nParts:\n• ALU: Arithmetic and Logic operations\n• Control Unit: Directs data flow, decodes instructions\n• Registers: High-speed temporary storage\n\nInstruction Cycle: Fetch → Decode → Execute → Store\n\nMemory:\n• Primary (Volatile): RAM, Cache, Registers\n• Secondary (Non-volatile): HDD, SSD, Optical disks\n\nSystem Bus:\n• Data Bus: Transfers actual data\n• Address Bus: Specifies memory/I/O addresses\n• Control Bus: Control signals",
      code: "Instruction Cycle: Fetch → Decode → Execute → Store",
      takeaways: [
        "CPU has ALU, Control Unit, and Registers",
        "Primary memory is volatile, secondary is permanent",
        "I/O devices connect computer to external world",
        "Buses transfer data, addresses, and control signals"
      ],
      level: "Beginner"
    },
    {
      id: "cs5",
      title: "Software Overview",
      content: "Software: Set of instructions telling computer how to perform tasks.\n\nTypes:\n• System Software: Manages hardware, provides platform\n• Application Software: Specific user tasks\n\nOperating System (OS): Interface between user and hardware.\n\nKey Functions:\n• Process Management, Memory Management\n• File System, Device Management\n• User Interface: CLI or GUI\n\nExamples: Windows, Linux, macOS, Android, iOS",
      takeaways: [
        "OS manages hardware and provides user interface",
        "Application software performs specific user tasks",
        "Process, memory, and file management are OS functions",
        "Application software requires OS to run"
      ],
      level: "Beginner"
    },
    {
      id: "cs6",
      title: "Computer Architecture",
      content: "Computer Architecture: Organization and interconnection of hardware components.\n\nComponents:\n• CPU: Executes instructions, controls components\n  - ALU, Control Unit, Registers\n• Memory: Primary (RAM, Cache), Secondary (HDD, SSD)\n• I/O Devices: Input (keyboard, mouse), Output (monitor, printer)\n• System Bus: Data, Address, Control\n\nInstruction Cycle: CU fetches → decodes → ALU executes → stores result",
      takeaways: [
        "Architecture defines how components work together",
        "CPU executes instructions in fetch-decode-execute cycle",
        "Memory hierarchy: Registers → Cache → RAM → Secondary",
        "System bus connects all components"
      ],
      level: "Beginner"
    }
  ]
}

const m3: Module = {
  title: "3. Electrical Circuits",
  titleBn: "৩. তড়িৎ সার্কিট",
  level: "Beginner",
  lessons: [
    {
      id: "ec1",
      title: "Basic Circuit Concepts",
      content: "Electric Circuit: Closed path for current flow.\n\nKey Concepts:\n• Current (I): Flow of charge. I = Q/t. Unit: Ampere (A)\n• Voltage (V): Potential difference. V = W/Q. Unit: Volt (V)\n• Resistance (R): Opposition to current flow. R = V/I. Unit: Ohm (Ω)\n\nOhm's Law: V = I × R\n\nPower: Rate of energy transfer. P = V × I = I²R = V²/R. Unit: Watt (W)\n\nCircuit Elements:\n• Resistor: Series: R_total = R₁ + R₂; Parallel: 1/R_total = 1/R₁ + 1/R₂\n• Capacitor: Stores electrical energy in electric field. C = Q/V\n• Inductor: Stores energy in magnetic field. V = L(dI/dt)\n\nKirchhoff's Laws:\n• KCL: ΣI_in = ΣI_out\n• KVL: ΣV = 0",
      code: "V = I × R\nP = V × I = I²R\nI = Q/t\nC = Q/V\nV = L(dI/dt)",
      takeaways: [
        "Ohm's Law: V = IR is fundamental circuit relationship",
        "Power is energy transfer rate: P = VI",
        "Kirchhoff's laws govern current and voltage in circuits",
        "Circuit elements: resistor, capacitor, inductor"
      ],
      level: "Beginner"
    },
    {
      id: "ec2",
      title: "Circuit Analysis Methods",
      content: "Series Circuits:\n• Same current through all elements\n• Total resistance: R_total = R₁ + R₂ + ...\n• Voltage divides across elements\n\nParallel Circuits:\n• Same voltage across all branches\n• Total resistance: 1/R_total = 1/R₁ + 1/R₂ + ...\n• Current divides across branches\n\nNetwork Theorems:\n• Superposition: Total response = Sum of responses from each source\n• Thevenin's Theorem: Replace network with V_th + R_th\n• Norton's Theorem: Replace network with I_n + R_n\n• Maximum Power Transfer: Maximum power when R_load = R_th\n\nCircuit Analysis:\n• Mesh Analysis: Apply KVL to loops\n• Nodal Analysis: Apply KCL to nodes",
      code: "Series: R_total = R1 + R2\nParallel: 1/R_total = 1/R1 + 1/R2\nZ = R + jX",
      takeaways: [
        "Series: current same, voltage divides",
        "Parallel: voltage same, current divides",
        "Thevenin simplifies complex circuits",
        "Mesh and nodal analysis solve circuits"
      ],
      level: "Beginner"
    }
  ]
}

export const modules: Module[] = [m1, m2, m3]
