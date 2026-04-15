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
      contentBn: "গণনা: সুসংজ্ঞায়িত নিয়ম ব্যবহার করে সমস্যা সমাধান, গণনা বা তথ্য প্রক্রিয়াকরণের প্রক্রিয়া।\n\nমূল উপাদান:\n• ইনপুট: গণনায় প্রদত্ত তথ্য\n• প্রক্রিয়া: প্রয়োগকৃত অপারেশন/অ্যালগরিদম\n• আউটপুট: উৎপাদিত ফলাফল\n\nগণনার প্রকার:\n• সঠিক: নির্দিষ্ট, নির্ণায়ক ফলাফল\n• আসন্ন: সঠিক মানের কাছে\n• প্রতীকী: প্রতীক/অভিব্যক্তি হেরফের করে\n• যৌক্তিক/বুলিয়ান: সত্য/মিথ্যা মান ব্যবহার করে\n\nগণনার মডেল:\n• টিউরিং মেশিন: গণনাযোগ্যতা সংজ্ঞায়িত করে বিমূর্ত মডেল\n• ফাইনিট অটোমাটা: সীমিত স্মৃতি, প্যাটার্ন চেনাশোনা\n• ল্যাম্ডা ক্যালকুলাস: গাণিতিক ফাংশন মডেল",
      code: "Computation: Input → Algorithm → Output",
      takeaways: [
        "Computation transforms input to output via algorithm",
        "Multiple types: exact, approximate, symbolic, logical",
        "Turing Machine defines what problems are computable",
        "Foundation for programming and algorithms"
      ],
      takeawaysBn: [
        "গণনা অ্যালগরিদমের মাধ্যমে ইনপুটকে আউটপুটে রূপান্তর করে",
        "একাধিক প্রকার: সঠিক, আসন্ন, প্রতীকী, যৌক্তিক",
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
      contentBn: "প্রাচীন ও প্রাগৈতিহাসিক সরঞ্জাম:\n• ট্যালি স্টিক: গণনার জন্য খাঁজ\n• অ্যাব্যাকাস (২৪০০ BCE): গাণিতিকের জন্য দণ্ডে পুঁতি\n\nযান্ত্রিক গণনা:\n• অ্যান্টিকিথেরা মেকানিজম (১০০ BCE): প্রাচীনতম অ্যানালগ যন্ত্র\n• নেপিয়ারের হাড় (1617): গুণন/ভাগের দণ্ড\n• পাস্কেলিন (1642): যান্ত্রিক যোগযন্ত্র\n\n১৯শ শতাব্দী - অ্যানালিটিক্যাল ইঞ্জিন:\n• চার্লস ব্যাবেজ: ডিফারেন্স ইঞ্জিন, অ্যানালিটিক্যাল ইঞ্জিন\n• অ্যাডা লাভলেস: প্রথম প্রোগ্রামার, অ্যালগরিদম লিখেছিলেন\n\nশেষ ১৯শ শতাব্দী:\n• পাঞ্চড কার্ড সিস্টেম (হলারিথ): যুক্তরাষ্ট্রের জনগণনা, IBM এর পূর্বসূরি",
      takeaways: [
        "Progressed from manual counting to mechanical devices",
        "Babbage's Analytical Engine is precursor to modern computers",
        "Ada Lovelace wrote first computer program",
        "Punched cards enabled automation in data processing"
      ],
      takeawaysBn: [
        "ম্যানুয়াল গণনা থেকে যান্ত্রিক যন্ত্রে অগ্রগতি হয়েছে",
        "ব্যাবেজের অ্যানালিটিক্যাল ইঞ্জিন আধুনিক কম্পিউটারের পূর্বসূরি",
        "অ্যাডা লাভলেস প্রথম প্রোগ্রাম লিখেছিলেন",
        "পাঞ্চড কার্ড ডেটা প্রসেসিংয়ে অটোমেশন সক্ষম করেছে"
      ],
      level: "Beginner"
    },
    {
      id: "cs3",
      title: "Computer Basics",
      titleBn: "কম্পিউটারের মৌলিক ধারণা",
      content: "Computer: Electronic device accepting input, processing data, storing information, producing output.\n\nKey Characteristics:\n• Speed: Much faster than humans\n• Accuracy: High precision\n• Automation: Executes instructions automatically\n• Storage: Stores vast data amounts\n• Versatility: Multiple tasks\n\nBasic Components:\n• Input Devices: Keyboard, mouse, scanner\n• Output Devices: Monitor, printer, speakers\n• CPU: Brain, executes instructions, controls components\n• Memory: RAM (temporary), HDD/SSD (permanent)\n\nTypes of Computers:\n• Supercomputer, Mainframe, Minicomputer, Personal Computer, Workstation, Embedded Systems",
      contentBn: "কম্পিউটার: ইনপুট গ্রহণ, ডেটা প্রসেসিং, তথ্য সংরক্ষণ এবং আউটপুট উৎপাদ���কারী ইলেকট্রনিক যন্ত্র।\n\nমূল বৈশিষ্ট্য:\n• গতি: মানুষের চেয়ে অনেক দ্রুত\n• নির্ভুলতা: উচ্চ সঠিকতা\n• অটোমেশন: স্বয়ংক্রিয়ভাবে নির্দেশনা বাস্তবায়ন করে\n• সংরক্ষণ: প্রচুর পরিমাণ ডেটা সংরক্ষণ করে\n• বহুমুখীতা: একাধিক কাজ\n\nমূল উপাদান:\n• ইনপুট ডিভাইস: কীবোর্ড, মাউস, স্ক্যানার\n• আউটপুট ডিভাইস: মনিটর, প্রিন্টার, স্পিকার\n• CPU: মস্তিষ্ক, নির্দেশনা বাস্তবায়ন ও উপাদান নিয়ন্ত্রণ করে\n• মেমরি: RAM (অস্থায়ী), HDD/SSD (স্থায়ী)\n\nকম্পিউটারের প্রকার:\n• সুপারকম্পিউটার, মেইনফ্রেম, মিনিকম্পিউটার, ব্যক্তিগত কম্পিউটার, ওয়ার্কস্টেশন, এম্বেডেড সিস্টেম",
      takeaways: [
        "Computer processes input to produce output",
        "CPU is the brain executing instructions",
        "Multiple computer types for different needs",
        "Generations: Vacuum tubes → Transistors → ICs → Microprocessors"
      ],
      takeawaysBn: [
        "কম্পিউটার ইনপুট থেকে আউটপুট প্রসেস করে",
        "CPU নির্দেশনা বাস্তবায়নকারী মস্তিষ্ক",
        "বিভিন্ন প্রয়োজনে একাধিক কম্পিউটার প্রকার",
        "প্রজন্ম: ভ্যাক্যুম টিউব → ট্রানজিস্টর → IC → মাইক্রোপ্রসেসর"
      ],
      level: "Beginner"
    },
    {
      id: "cs4",
      title: "Hardware Components",
      titleBn: "হার্ডওয়্যার উপাদান",
      content: "Processor (CPU): Brain of computer, executes instructions.\n\nParts:\n• ALU: Arithmetic and Logic operations\n• Control Unit: Directs data flow, decodes instructions\n• Registers: High-speed temporary storage\n\nInstruction Cycle: Fetch → Decode → Execute → Store\n\nMemory:\n• Primary (Volatile): RAM, Cache, Registers\n• Secondary (Non-volatile): HDD, SSD, Optical disks\n\nSystem Bus:\n• Data Bus: Transfers actual data\n• Address Bus: Specifies memory/I/O addresses\n• Control Bus: Control signals",
      contentBn: "প্রসেসর (CPU): কম্পিউটারের মস্তিষ্ক, নির্দেশনা বাস্তবায়ন করে।\n\nঅংশ:\n• ALU: গাণিতিক ও যৌক্তিক অপারেশন\n• কন্ট্রোল ইউনিট: ডেটা প্রবাহ নিয়ন্ত্রণ, নির্দেশনা ডিকোড করে\n• রেজিস্টার: উচ্চ-গতিসম্পন্ন অস্থায়ী সংরক্ষণ\n\nনির্দেশনা চক্র: ফেচ → ডিকোড → এক্সিকিউট → স্টোর\n\nমেমরি:\n• প্রাথমিক (অস্থায়ী): RAM, ক্যাশ, রেজিস্টার\n• গৌণ (স্থায়ী): HDD, SSD, অপ্টিক্যাল ডিস্ক\n\nসিস্টেম বাস:\n• ডেটা বাস: প্রকৃত ডেটা স্থানান্তর\n• অ্যাড্রেস বাস: মেমরি/I/O অ্যাড্রেস নির্দিষ্ট করে\n• কন্ট্রোল বাস: কন্ট্রোল সিগন্যাল",
      code: "Instruction Cycle: Fetch → Decode → Execute → Store",
      takeaways: [
        "CPU has ALU, Control Unit, and Registers",
        "Primary memory is volatile, secondary is permanent",
        "I/O devices connect computer to external world",
        "Buses transfer data, addresses, and control signals"
      ],
      takeawaysBn: [
        "CPU তে ALU, কন্ট্রোল ইউনিট ও রেজিস্টার আছে",
        "প্রাথমিক মেমরি অস্থায়ী, গৌণ স্থায়ী",
        "I/O ডিভাইস কম্পিউটারকে বাহ্যিক বিশ্বের সাথে সংযুক্ত করে",
        "বাস ডেটা, অ্যাড্রেস ও কন্ট্রোল সিগন্যাল স্থানান্তর করে"
      ],
      level: "Beginner"
    },
    {
      id: "cs5",
      title: "Software Overview",
      titleBn: "সফটওয়্যারের সংক্ষিপ্ত বিবরণ",
      content: "Software: Set of instructions telling computer how to perform tasks.\n\nTypes:\n• System Software: Manages hardware, provides platform\n• Application Software: Specific user tasks\n\nOperating System (OS): Interface between user and hardware.\n\nKey Functions:\n• Process Management, Memory Management\n• File System, Device Management\n• User Interface: CLI or GUI\n\nExamples: Windows, Linux, macOS, Android, iOS",
      contentBn: "সফটওয়্যার: নির্দেশনার সেট যা কম্পিউটারকে কীভাবে কাজ করতে হবে তা বলে।\n\nপ্রকার:\n• সিস্টেম সফটওয়্যার: হার্ডওয়্যার পরিচালনা করে, প্ল্যাটফর্ম প্রদান করে\n• অ্যাপ্লিকেশন সফটওয়্যার: নির্দিষ্ট ব্যবহারকারী কাজ\n\nঅপারেটিং সিস্টেম (OS): ব্যবহারকারী ও হার্ডওয়্যারের মধ্যে ইন্টারফেস।\n\nমূল কার্যক্রম:\n• প্রসেস ম্যানেজমেন্ট, মেমরি ম্যানেজমেন্ট\n• ফাইল সিস্টেম, ডিভাইস ম্যানেজমেন্ট\n• ইউজার ইন্টারফেস: CLI বা GUI\n\nউদাহরণ: উইন্ডোজ, লিনাক্স, ম্যাকওএস, অ্যান্ড্রয়েড, আইওএস",
      takeaways: [
        "OS manages hardware and provides user interface",
        "Application software performs specific user tasks",
        "Process, memory, and file management are OS functions",
        "Application software requires OS to run"
      ],
      takeawaysBn: [
        "OS হার্ডওয়্যার পরিচালনা করে এবং ইউজার ইন্টারফেস প্রদান করে",
        "অ্যাপ্লিকেশন সফটওয়্যার নির্দিষ্ট ব্যবহারকারী কাজ সম্পাদন করে",
        "প্রসেস, মেমরি এবং ফাইল ম্যানেজমেন্ট OS এর কার্যক্রম",
        "অ্যাপ্লিকেশন সফটওয়্যার চালাতে OS প্রয়োজন"
      ],
      level: "Beginner"
    },
    {
      id: "cs6",
      title: "Computer Architecture",
      titleBn: "কম্পিউটার আর্কিটেকচার",
      content: "Computer Architecture: Organization and interconnection of hardware components.\n\nComponents:\n• CPU: Executes instructions, controls components\n  - ALU, Control Unit, Registers\n• Memory: Primary (RAM, Cache), Secondary (HDD, SSD)\n• I/O Devices: Input (keyboard, mouse), Output (monitor, printer)\n• System Bus: Data, Address, Control\n\nInstruction Cycle: CU fetches → decodes → ALU executes → stores result",
      contentBn: "কম্পিউটার আর্কিটেকচার: হার্ডওয়্যার উপাদানের সংগঠন ও পারস্পরিক সংযোগ।\n\nউপাদান:\n• CPU: নির্দেশনা বাস্তবায়ন করে, উপাদান নিয়ন্ত্রণ করে\n  - ALU, কন্ট্রোল ইউনিট, রেজিস্টার\n• মেমরি: প্রাথমিক (RAM, ক্যাশ), গৌণ (HDD, SSD)\n• I/O ডিভাইস: ইনপুট (কীবোর্ড, মাউস), আউটপুট (মনিটর, প্রিন্টার)\n• সিস্টেম বাস: ডেটা, অ্যাড্রেস, কন্ট্রোল\n\nনির্দেশনা চক্র: CU ফেচ করে → ডিকোড করে → ALU এক্সিকিউট করে → ফলাফল সংরক্ষণ করে",
      takeaways: [
        "Architecture defines how components work together",
        "CPU executes instructions in fetch-decode-execute cycle",
        "Memory hierarchy: Registers → Cache → RAM → Secondary",
        "System bus connects all components"
      ],
      takeawaysBn: [
        "আর্কিটেকচার নির্ধারণ করে উপাদানগুলো একসাথে কীভাবে কাজ করে",
        "CPU ফেচ-ডিকোড-এক্সিকিউট চক্রে নির্দেশনা বাস্তবায়ন করে",
        "মেমরি হায়ারার্কি: রেজিস্টার → ক্যাশ → RAM → গৌণ",
        "সিস্টেম বাস সমস্ত উপাদান সংযুক্ত করে"
      ],
      level: "Beginner"
    }
  ]
}

export const module2 = m2