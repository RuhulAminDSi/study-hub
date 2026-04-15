import type { Module } from '../../types'

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

export const module2 = m2