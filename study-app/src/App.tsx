import { useState } from 'react'
import './index.css'

interface Lesson {
  id: string
  title: string
  titleBn?: string
  content: string
  contentBn?: string
  code?: string
  codeBn?: string
  takeaways: string[]
  takeawaysBn?: string[]
  level: string
}

interface Module {
  title: string
  titleBn?: string
  level: string
  lessons: Lesson[]
}

const translations = {
  en: {
    modules: "Modules",
    lesson: "Lesson",
    previous: "Previous",
    next: "Next",
    keyTakeaways: "Key Takeaways",
    keyFormula: "Key Formula",
    copy: "Copy",
    copied: "Copied!",
    progress: "Progress",
    search: "Search lessons...",
    darkMode: "Dark",
    lightMode: "Light",
    noResults: "No results found",
  },
  bn: {
    modules: "মডিউল",
    lesson: "পাঠ",
    previous: "আগে",
    next: "পরে",
    keyTakeaways: "গুরুত্বপূর্ণ বিষয়",
    keyFormula: "গুরুত্বপূর্ণ সূত্র",
    copy: "কপি",
    copied: "কপি হয়েছে!",
    progress: "অগ্রগতি",
    search: "পাঠ খুজুন...",
    darkMode: "ডার্ক",
    lightMode: "লাইট",
    noResults: "কোনো ফলাফল পাওয়া যায়নি",
  }
}

const modules: Module[] = [
  {
    title: "1. Basic Physics",
    titleBn: "১. পদার্থবিদ্যার মূল ধারণা",
    level: "Beginner",
    lessons: [
      {
        id: "bp1",
        title: "Electromagnetism Basics",
        titleBn: "তড়িৎচুম্বকত্বের মূল ধারণা",
        content: "Charge, Coulomb's law, electric field, Gauss's law, electric potential, magnetic field, Faraday's law, Maxwell's equations.\n\n⚡ Charge: Fundamental property of matter causing electromagnetic interaction. Types: Positive (+) and Negative (-). Unit: Coulomb (C). Conservation: Charge cannot be created/destroyed, only transferred.\n\n⚡ Coulomb's Law: Force between two electric charges: F = k(q1×q2)/r². Force is attractive for opposite charges, repulsive for like charges.\n\n⚡ Electric Field (E): Region around charged particle where it exerts force on other charges. E = F/q. Unit: N/C or V/m. Direction: Away from positive, toward negative charge.\n\n⚡ Gauss's Law: Electric flux through closed surface = enclosed charge/ε₀. Used to calculate electric field of symmetric charge distributions.\n\n⚡ Electric Potential (V): Work done bringing unit positive charge from infinity to a point. V = W/q. Unit: Volt (V). Relation: E = -dV/dx.\n\n🧲 Magnetic Field: Region around moving charge or magnet where magnetic forces act. Unit: Tesla (T). Created by moving charges and permanent magnets. Right-Hand Rule: Thumb = Current direction, Fingers = Magnetic field direction.\n\n🧲 Faraday's Law: Changing magnetic field induces EMF. EMF = -dΦB/dt. Key: Changing magnetic field → Induced voltage → Induced current.\n\n🌐 Maxwell's Equations (4 fundamental laws):\n1. ∇·E = ρ/ε₀ (Gauss's Law for Electricity)\n2. ∇·B = 0 (Gauss's Law for Magnetism - no monopoles)\n3. ∇×E = -∂B/∂t (Faraday's Law)\n4. ∇×B = μ₀J + μ₀ε₀(∂E/∂t) (Ampere-Maxwell Law)",
        contentBn: "আধান, কুলম্বের সূত্র, তড়িৎক্ষেত্র, গাউসের সূত্র, তড়িৎবিভব, চুম্বকক্ষেত্র, ফ্যারাডের সূত্র, ম্যাক্সওয়েলের সমীকরণ।\n\n⚡ আধান: পদার্থের একটি মৌলিক ধর্ম যা তড়িৎচুম্বকীয় মিথস্ক্রিয়া সৃষ্টি করে। প্রকার: ধনবাহী (+) এবং ঋণবাহী (-)। একক: কুলম্ব (C)। সংরক্ষণ: আ��ান তৈরি বা ধ্বংস করা যায় না, শুধু স্থানান্তর করা যায়।\n\n⚡ কুলম্বের সূত্র: দুটি তড়িৎআধানের মধ্যে বল: F = k(q1×q2)/r²। বল বিপরীত আধানের জন্য আকর্ষণকারক, একই রকম আধানের জন্য বিকর্ষণকারক।\n\n⚡ তড়িৎক্ষেত্র (E): চার্জযুক্ত কণার চারপাশে অঞ্চল যেখানে এটি অন্যান্য আধানের উপর বল প্রয়োগ করে। E = F/q। একক: N/C বা V/m। দিক: ধনবাহী থেকে দূরে, ঋণবাহীর দিকে।\n\n⚡ গাউসের সূত্র: বদ্ধ পৃষ্ঠের মধ্য দিয়ে তড়িৎফ্লাক্স = আবদ্ধ আধান/ε₀। প্রতিসম আধান বিতরণের তড়িৎক্ষেত্র গণনা করতে ব্যবহৃত হয়।\n\n⚡ তড়িৎবিভব (V): অসীম থেকে একটি বিন্দুতে একক ধনবাহী আধান আনতে করা কাজ। V = W/q। একক: ভোল্ট (V)। সম্পর্ক: E = -dV/dx।\n\n🧲 চুম্বকক্ষেত্র: চলমান আধান ব চুম্বকের চারপাশে অঞ্চল যেখানে চুম্বকীয় বল কাজ করে। একক: টেসলা (T)। চলমান আধান এবং স্থায়ী চুম্বক দ্বারা তৈরি। ডান-হাতের নিয়ম: বুড়ো = প্রবাহের দিক, আঙুল = চুম্বকক্ষেত্রের দিক।\n\n🧲 ফ্যারাডের সূত্র: পরিবর্তনশীল চুম্বকক্ষেত্র EMF প্রবর্তন করে। EMF = -dΦB/dt। মূল: পরিবর্তনশীল চুম্বকক্ষেত্র → আবিষ্ট ভোল্টেজ → আবিষ্ট প্রবাহ।\n\n🌐 ম্যাক্সওয়েলের সমীকরণ (৪টি মৌলিক সূত্র):\n১. ∇·E = ρ/ε₀ (বিদ্যুতের জন্য গাউসের সূত্র)\n২. ∇·B = ০ (চুম্বকত্বের জন্য গাউসের সূত্র - একক চুম্বক নেই)\n৩. ∇×E = -∂B/∂t (ফ্যারাডের সূত্র)\n৪. ∇×B = μ₀J + μ₀ε₀(∂E/∂t) (অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র)",
        code: "F = k × (q1 × q2) / r²\nE = F/q\nV = W/q\nEMF = -dΦB/dt\n∇·E = ρ/ε₀\n∇×B = μ₀J + μ₀ε₀(∂E/∂t)",
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
        content: "Oscillation: Back-and-forth repetitive motion around mean position. Examples: pendulum, mass on spring, AC current.\n\nTypes of Oscillations:\n• Free: Body oscillates without external force\n• Forced: External periodic force keeps it oscillating\n• Damped: Amplitude decreases due to friction/resistance\n• Undamped: No energy loss, constant amplitude\n• Resonance: External frequency = natural frequency → maximum amplitude\n\nKey Terms:\n• Amplitude (A): Maximum displacement from mean position (meter)\n• Time Period (T): Time for one complete oscillation (seconds)\n• Frequency (f): Number of oscillations per second. f = 1/T in Hz\n• Angular Frequency (ω): ω = 2πf (radians/sec)\n• Phase (φ): Position of oscillation at any instant (radians)\n\nSimple Harmonic Motion (SHM): Simplest oscillation. Restoring force proportional to displacement: F = -kx. Equation: x(t) = A×sin(ωt + φ).\n\n\nWave: Disturbance transferring energy without transferring matter.\n\nTypes:\n• Mechanical (require medium): sound, water waves\n• Electromagnetic (no medium): light, radio\n• Transverse: particle motion ⟂ wave direction\n• Longitudinal: particle motion ∥ wave direction\n\nWave Properties:\n• Wavelength (λ): Distance between two crests (meter)\n• Frequency (f): Number of cycles per second (Hertz)\n• Wave speed (v): v = fλ (m/s)\n• Amplitude (A): Height of crest (energy level)\n\n\nWave Phenomena:\n• Reflection: Wave bounces back from surface\n• Refraction: Wave bends passing into another medium\n• Diffraction: Wave bends around obstacles\n• Interference: Two waves overlap to form resultant wave\n• Standing Waves: Appear stationary due to interference",
        code: "f = 1/T\nv = fλ\nx(t) = A × sin(ωt + φ)\nF = -kx (SHM)\nω = 2πf",
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
        content: "Theory of Special Relativity (Einstein, 1905) explains how space, time, and motion relate at speeds near light.\n\nTwo Postulates:\n1. Principle of Relativity: Laws of physics identical in all inertial frames. No absolute rest.\n2. Constancy of Speed of Light: c = 3×10⁸ m/s same for all observers.\n\nConsequences:\n\na) Time Dilation: Moving clocks run slower.\nt = t₀ / √(1 - v²/c²)\n\nb) Length Contraction: Moving objects appear shorter.\nL = L₀ × √(1 - v²/c²)\n\nc) Relativity of Simultaneity: Events simultaneous in one frame may not be in another.\n\nd) Mass-Energy Equivalence: E = mc² (mass and energy interchangeable)\n\ne) Mass Increase with Velocity: m = m₀ / √(1 - v²/c²)\n\nSpacetime: 4-dimensional entity with coordinates (x, y, z, t).\n\nApplications: GPS (time dilation), particle accelerators, nuclear energy, astrophysics.",
        code: "t = t₀ / √(1 - v²/c²)\nL = L₀ × √(1 - v²/c²)\nE = mc²\nm = m₀ / √(1 - v²/c²)",
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
        content: "Electromagnetic Waves: Oscillations of electric and magnetic fields traveling through space. Don't require medium. Produced by accelerating charges. E and B fields perpendicular to each other and wave direction. Formula: c = λν.\n\nEM Spectrum:\n• Radio waves: λ > 1m\n• Microwaves: 1m - 1mm\n• Infrared: 1mm - 700nm\n• Visible light: 700-400nm\n• Ultraviolet: 400-10nm\n• X-rays: 10-0.01nm\n• Gamma rays: < 0.01nm\n\nPhotoelectric Effect: Light shining on metal surface emits electrons (photoelectrons).\nFacts:\n• No electrons below threshold frequency\n• Intensity affects number, not energy\n• Energy depends on frequency, not intensity\n\nEinstein's Explanation: Light behaves as particles (photons). Energy: E = hν (h = 6.626 × 10⁻³⁴ Js). If photon energy > work function, electrons emitted: hν = φ + ½mv²\n\nQuantum Theory: Light has dual nature (wave-particle duality). Photon: quantum of EM energy. E = hν, p = h/λ.\n\nX-rays: High-energy EM waves produced when high-speed electrons strike metal. Used in medical imaging, crystallography.\nX-ray Diffraction: Bragg's Law: nλ = 2d×sinθ\nCompton Effect: X-ray scattering by electrons causes wavelength change. Δλ = h/(mₑc) × (1 - cosθ)\n\nDe Broglie Waves: Particles have wave-like properties. Formula: λ = h/p (p = momentum)\nPhase velocity: vₚ = ω/k\nGroup velocity: vg = dω/dk",
        code: "c = fλ\nE = hν\nhν = φ + ½mv²\nΔλ = h/(mₑc)(1 - cosθ)\nλ = h/p",
        takeaways: [
          "Light has both wave and particle properties",
          "Photoelectric effect proves particle nature",
          "X-ray diffraction reveals crystal structure",
          "Compton effect confirms photon momentum"
        ],
        level: "Beginner"
      }
    ]
  },
  {
    title: "2. Introduction to Computer Systems",
    titleBn: "২. কম্পিউটার সিস্টেমের পরিচিতি",
    level: "Beginner",
    lessons: [
      {
        id: "cs1",
        title: "Introduction to Computation",
        titleBn: "গণনার পরিচিতি",
        content: "Computation: Process of solving problems, performing calculations, or processing information using well-defined rules.\n\nKey Components:\n• Input: Data provided to computation\n• Process: Operations/algorithms applied\n• Output: Result produced\n\nTypes of Computation:\n• Exact: Precise, deterministic results\n• Approximate: Close to exact value\n• Symbolic: Manipulates symbols/expressions\n• Logical/Boolean: Uses true/false values\n\nModels of Computation:\n• Turing Machine: Abstract model defining computability\n• Finite Automata: Limited memory, pattern recognition\n• Lambda Calculus: Mathematical function model\n\nComputation is fundamental to programming, algorithms, and computational theory.",
        contentBn: "গণনা: সুসংজ্ঞায়িত নিয়ম ব্যবহার করে সমস্যা সমাধান, গণনা বা তথ্য প্রক্রিয়াকরণের প্রক্রিয়া।\n\nমূল উপাদান:\n• ইনপুট: গণনায় প্রদত্ত তথ্য\n• প্রক্রিয়া: প্রয়োগকৃত অপারেশন/অ্যালগরিদম\n• আউটপুট: উৎপাদিত ফলাফল\n\nগণনার প্রকার:\n• সঠিক: নির্দিষ্ট, নির্ণায়ক ফলাফল\n• আসন্ন: সঠিক মানের কাছে\n• প্রতীকী: প্রতীক/অভিব্যক্তি হেরফের করে\n• যৌক্তিক/বুলিয়ান: সত্য/মিথ্যা মান ব্যবহার করে\n\nগণনার মডেল:\n• টিউরিং মেশিন: গণনাযোগ্যতা সংজ্ঞায়িত করে বিমূর্ত মডেল\n• ফাইনিট অটোমাটা: সীমিত স্মৃতি, প্যাটার্ন চেনাশোনা\n• ল্যাম্ডা ক্যালকুলাস: গাণিতিক ফাংশন মডেল\n\nগণনা প্রোগ্রামিং, অ্যালগরিদম এবং গণনা তত্ত্বের মূল ভিত্তি।",
        code: "Computation: Input → Algorithm → Output",
        takeaways: [
          "Computation transforms input to output via algorithm",
          "Multiple types: exact, approximate, symbolic, logical",
          "Turing Machine defines what problems are computable",
          "Foundation for programming and algorithms"
        ],
        takeawaysBn: [
          "গণনা অ্যালগরিদমের মাধ্যমে ইনপুটকে আউটপুটে রূপান্তর করে",
          "একাধিক প্রকার: সঠিক, আসন্ন, প্রতীকী, যৌক্ত���ক",
          "টিউরিং মেশিন কোন সমস্যা গণনাযোগ্য তা সংজ্ঞায়িত করে",
          "প্রোগ্রামিং এবং অ্যালগরিদমের ভিত্তি"
        ],
        level: "Beginner"
      },
      {
        id: "cs2",
        title: "History of Computing Devices",
        titleBn: "গণনা যন্ত্রের ইতিহাস",
        content: "Prehistoric & Ancient Tools:\n• Tally sticks: Notches for counting\n• Quipus (Inca): Knotted strings for numbers\n• Abacus (2400 BCE): Beads on rods for arithmetic\n\nMechanical Computation:\n• Antikythera Mechanism (100 BCE): Earliest analog device, calculated celestial positions\n• Napier's Bones (1617): Multiplication/division rods\n• Slide Rule (1620s): Logarithm-based calculations\n• Pascaline (1642): Mechanical adding machine\n• Leibniz's Step Reckoner (1673): Advanced calculator with multiplication/division\n\n19th Century - Analytical Engine:\n• Charles Babbage: Difference Engine, Analytical Engine\n• Components: Input (punched cards), Processing (ALU), Memory, Output\n• Ada Lovelace: First programmer, wrote algorithms\n\nLate 19th Century:\n• Punched Card Systems (Hollerith): U.S. Census, precursor to IBM\n• Analog Computers: Continuous physical quantities for solving equations",
        contentBn: "প্রাচীন ও প্রাগৈতিহাসিক সরঞ্জাম:\n• ট্যালি স্টিক: গণনার জন্য খাঁজ।\n• কুইপুস (ইনকা): সংখ্যার জন্য গিঁট দেওয়া সুতা\n• অ্যাব্যাকাস (২৪০০ BCE): গাণিতিকের জন্য দণ্ডে পুঁতি\n\nযান্ত্রিক গণনা:\n• অ্যান্টিকিথেরা মেকানিজম (১০০ BCE): প্রাচীনতম অ্যানালগ যন্ত্র, গ্রহের অবস্থান গণনা করত\n• নেপিয়ারের হাড় (1617): গুণন/ভাগের দণ্ড\n• স্লাইড রুল (1620s): লগারিদম ভিত্তিক গণনা\n• পাস্কেলিন (1642): যান্ত্রিক যোগযন্ত্র\n• লাইবনিৎজের স্টেপ রেকনার (1673): গুণন/ভাগ সহ উন্নত ক্যালকুলেটর\n\n১৯শ শতাব্দী - অ্যানালিটিক্যাল ইঞ্জিন:\n• চার্লস ব্যাবেজ: ডিফারেন্স ইঞ্জিন, অ্যানালিটিক্যাল ইঞ্জিন\n• উপাদান: ইনপুট (পাঞ্চড কার্ড), প্রসেসিং (ALU), মেমরি, আউটপুট\n• অ্যাডা লাভলেস: প্রথম প্রোগ্রামার, অ্যালগরিদম লিখেছিলেন\n\nশেষ ১৯শ শতাব্দী:\n• পাঞ্চড কার্ড সিস্টেম (হলারিথ): যুক্তরাষ্ট্রের জনগণনা, IBM এর পূর্বসূরি\n• অ্যানালগ কম্পিউটার: সমীকরণ সমাধানে অবিচ্চিন্ন ভৌত পরিমাণ",
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
        content: "Computer: Electronic device accepting input, processing data, storing information, producing output.\n\nKey Characteristics:\n• Speed: Much faster than humans\n• Accuracy: High precision\n• Automation: Executes instructions automatically\n• Storage: Stores vast data amounts\n• Versatility: Multiple tasks\n\nBasic Components:\n• Input Devices: Keyboard, mouse, scanner\n• Output Devices: Monitor, printer, speakers\n• CPU: Brain, executes instructions, controls components\n• Memory: RAM (temporary), HDD/SSD (permanent)\n• Motherboard & Buses: Connects components\n\nTypes of Computers:\n• Supercomputer: Complex computations (weather, simulations)\n• Mainframe: Large, multi-user for organizations\n• Minicomputer: Medium power, departmental\n• Personal Computer: Individual use\n• Workstation: High-performance for engineering\n• Embedded Systems: Integrated into devices",
        contentBn: "কম্পিউটার: ইনপুট গ্রহণ, ডেটা প্রসেসিং, তথ্য সংরক্ষণ এবং আউটপুট উৎপাদনকারী ইলেকট্রনিক যন্ত্র।\n\nমূল বৈশিষ্ট��য:\n• গতি: মানুষের চেয়ে অনেক দ্রুত\n• নির্ভুলতা: উচ্চ সঠিকতা\n• অটোমেশন: স্বয়ংক্রিয়ভাবে নির্দেশনা বাস্তবায়ন করে\n• সংরক্ষণ: প্রচুর পরিমাণ ডেটা সংরক্ষণ করে\n• বহুমুখীতা: একাধিক কাজ\n\nমূল উপাদান:\n• ইনপুট ডিভাইস: কীবোর্ড, মাউস, স্ক্যানার\n• আউটপুট ডিভাইস: মনিটর, প্রিন্টার, স্পিকার\n• CPU: মস্তিষ্ক, নির্দেশনা বাস্তবায়ন ও উপাদান নিয়ন্ত্রণ করে\n• মেমরি: RAM (অস্থায়ী), HDD/SSD (স্থায়ী)\n• মাদারবোর্ড ও বাস: উপাদান সংযুক্ত করে\n\nকম্পিউটারের প্রকার:\n• সুপারকম্পিউটার: জটিল গণনা (আবহাওয়া, সিমুলেশন)\n• মেইনফ্রেম: বড়, সংস্থার জন্য বহু-ব্যবহারকারী\n• মিনিকম্পিউটার: মাঝারি শক্তি, বিভাগীয়\n• ব্যক্তিগত কম্পিউটার: একক ব্যবহার\n• ওয়ার্কস্টেশন: প্রকৌশলের জন্য উচ্চ-পারফরম্যান্স\n• এম্বেডেড সিস্টেম: যন্ত্রে সংহত",
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
        content: "Processor (CPU): Brain of computer, executes instructions.\n\nParts:\n• ALU: Arithmetic and Logic operations\n• Control Unit: Directs data flow, decodes instructions\n• Registers: High-speed temporary storage\n\nInstruction Cycle: Fetch → Decode → Execute → Store\n\nMemory:\n• Primary (Volatile): RAM, Cache, Registers\n• Secondary (Non-volatile): HDD, SSD, Optical disks\n\nInput/Output Devices:\n• Input: Keyboard, mouse, scanner, microphone\n• Output: Monitor, printer, speakers\n• I/O: Touchscreen, network cards, USB\n\nSystem Bus:\n• Data Bus: Transfers actual data\n• Address Bus: Specifies memory/I/O addresses\n• Control Bus: Control signals (read/write, interrupt)",
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
        content: "Software: Set of instructions telling computer how to perform tasks.\n\nTypes:\n• System Software: Manages hardware, provides platform\n• Application Software: Specific user tasks\n\nOperating System (OS): Interface between user and hardware.\n\nKey Functions:\n• Process Management: Creates, schedules, terminates processes\n• Memory Management: Allocates RAM, manages virtual memory\n• File System: Organizes, stores, retrieves, protects data\n• Device Management: Controls I/O devices using drivers\n• User Interface: CLI or GUI\n\nExamples: Windows, Linux, macOS, Android, iOS\n\nApplication Software:\n• Productivity: MS Office, Google Docs\n• Graphics: Photoshop, CorelDRAW\n• Web Browsers: Chrome, Firefox\n• Educational: Duolingo, Khan Academy\n• Enterprise: SAP, Oracle ERP",
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
        content: "Computer Architecture: Organization and interconnection of hardware components determining how system functions.\n\nComponents:\n• CPU: Executes instructions, controls components\n  - ALU: Arithmetic and logical operations\n  - Control Unit: Fetches, decodes, executes instructions\n  - Registers: High-speed temporary storage\n\n• Memory: Stores instructions/data\n  - Primary: RAM, Cache (volatile)\n  - Secondary: HDD, SSD (non-volatile)\n\n• I/O Devices: Input (keyboard, mouse), Output (monitor, printer)\n\n• System Bus: Parallel wires connecting components\n  - Data Bus: Actual data transfer\n  - Address Bus: Memory/I/O addresses\n  - Control Bus: Control signals\n\nInstruction Cycle: CU fetches from memory → decodes → ALU executes → stores result",
        takeaways: [
          "Architecture defines how components work together",
          "CPU executes instructions in fetch-decode-execute cycle",
          "Memory hierarchy: Registers → Cache → RAM → Secondary",
          "System bus connects all components"
        ],
        level: "Beginner"
      }
    ]
  },
  {
    title: "3. Electrical Circuits",
    titleBn: "৩. তড়িৎ সার্কিট",
    level: "Beginner",
    lessons: [
      {
        id: "ec1",
        title: "Basic Circuit Concepts",
        content: "Electric Circuit: Closed path for current flow.\n\nKey Concepts:\n• Current (I): Flow of charge. I = Q/t. Unit: Ampere (A)\n• Voltage (V): Potential difference. V = W/Q. Unit: Volt (V)\n• Resistance (R): Opposition to current flow. R = V/I. Unit: Ohm (Ω)\n\nOhm's Law: V = I × R\n\nPower: Rate of energy transfer. P = V × I = I²R = V²/R. Unit: Watt (W)\n\nCircuit Elements:\n• Resistor: Opposes current flow\n• Capacitor: Stores electrical energy in electric field\n• Inductor: Stores energy in magnetic field\n• Voltage Source: Provides potential difference\n• Current Source: Provides constant current\n\nKirchhoff's Laws:\n• KCL: Current entering = current leaving at junction\n• KVL: Sum of voltage drops = sum of voltage rises in loop",
        code: "V = I × R\nP = V × I\nI = Q/t",
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
        content: "Series Circuits:\n• Same current through all elements\n• Total resistance: Rtotal = R1 + R2 + ...\n• Voltage divides across elements\n\nParallel Circuits:\n• Same voltage across all branches\n• Total resistance: 1/Rtotal = 1/R1 + 1/R2 + ...\n• Current divides across branches\n\nNetwork Theorems:\n• Superposition: Sum responses from individual sources\n• Thevenin: Replace network with voltage source + resistance\n• Norton: Replace network with current source + resistance\n• Maximum Power Transfer: Load = Thevenin resistance\n\nCircuit Analysis:\n• Mesh Analysis: Apply KVL to loops\n• Nodal Analysis: Apply KCL to nodes\n• Delta-Wye Transformation: Simplify complex networks",
        code: "Series: Rtotal = R1 + R2 + ...\nParallel: 1/Rtotal = 1/R1 + 1/R2 + ...",
        takeaways: [
          "Series: current same, voltage divides",
          "Parallel: voltage same, current divides",
          "Thevenin simplifies complex circuits",
          "Mesh and nodal analysis solve circuits"
        ],
        level: "Beginner"
      }
    ]
  },
  {
    title: "4. Digital Logic Design",
    titleBn: "৪. ডিজিটাল লজিক ডিজাইন",
    level: "Intermediate",
    lessons: [
      {
        id: "dl1",
        title: "Number Systems",
        content: "Number Systems:\n• Binary (Base 2): 0, 1\n• Octal (Base 8): 0-7\n• Decimal (Base 10): 0-9\n• Hexadecimal (Base 16): 0-9, A-F\n\nConversions:\n• Binary to Decimal: Sum of bit × 2^position\n• Decimal to Binary: Repeated division by 2\n• Binary to Hex: Group 4 bits\n• Binary to Octal: Group 3 bits\n\nBinary Arithmetic:\n• Addition: 0+0=0, 0+1=1, 1+0=1, 1+1=0 (carry 1)\n• Subtraction: 0-0=0, 1-0=1, 1-1=0, 0-1=1 (borrow)\n• Multiplication: Same as decimal\n\nSigned Numbers:\n• Sign-Magnitude: MSB is sign bit\n• 2's Complement: Invert bits and add 1\n• Range for n-bit: -2^(n-1) to +2^(n-1)-1",
        code: "Binary to Decimal: 1011 = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 11",
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
        content: "Boolean Algebra: Mathematical system for logic operations.\n\nBasic Operations:\n• OR (+): Output 1 if any input is 1. A + B\n• AND (×): Output 1 if all inputs are 1. A × B\n• NOT (¬ or '): Inverts input. A'\n\nLaws:\n• Identity: A + 0 = A, A × 1 = A\n• Null: A + 1 = 1, A × 0 = 0\n• Idempotent: A + A = A, A × A = A\n• Complement: A + A' = 1, A × A' = 0\n• Commutative: A + B = B + A, A × B = B × A\n• Associative: (A + B) + C = A + (B + C)\n• Distributive: A × (B + C) = (A × B) + (A × C)\n\nDe Morgan's Theorems:\n• (A + B)' = A' × B'\n• (A × B)' = A' + B'",
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
        content: "Basic Logic Gates:\n• NOT: Inverts input\n• AND: Output 1 when all inputs are 1\n• OR: Output 1 when any input is 1\n\nDerived Gates:\n• NAND: AND + NOT. Universal gate\n• NOR: OR + NOT. Universal gate\n• XOR: Output 1 when inputs differ\n• XNOR: Output 1 when inputs same\n\nTruth Table: Shows output for all input combinations.\n\nBoolean Expression from Truth Table:\n• Sum of Products (SOP): OR of AND terms for 1s\n• Product of Sums (POS): AND of OR terms for 0s\n\nKarnaugh Map (K-Map): Simplifies Boolean expressions visually.\n• Group adjacent 1s (powers of 2)\n• Eliminate variables that change in group",
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
        content: "Combinational Circuits: Output depends only on current inputs. No memory.\n\nDesign Process:\n1. Identify inputs and outputs\n2. Create truth table\n3. Write Boolean expressions\n4. Simplify using K-maps or algebra\n5. Implement with gates\n\nCommon Circuits:\n• Adders: Half adder (sum, carry), Full adder (3 inputs)\n• Subtractors: Half, Full\n• Multiplexer (MUX): Selects one input from many\n• Demultiplexer (DEMUX): Routes input to one output\n• Encoder: Converts signal to binary\n• Decoder: Converts binary to signal\n• Comparator: Compares two numbers",
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
        content: "Sequential Circuits: Output depends on current inputs and past history. Has memory.\n\nComponents:\n• Latches: Basic memory elements (SR, D, JK, T)\n• Flip-Flops: Edge-triggered latches\n\nTypes:\n• SR Latch: Set-Reset, with enable\n• D Flip-Flop: Data, transfers input on clock edge\n• JK Flip-Flop: Toggle, set, reset capabilities\n• T Flip-Flop: Toggle on each clock pulse\n\nCounters:\n• Ring Counter: Shift register feedback\n• Johnson Counter: Inverted feedback\n• Binary Counter: Counts in binary\n\nRegisters: Groups of flip-flops storing data.\n\nState Machines:\n• Mealy: Output depends on input and state\n• Moore: Output depends only on state",
        takeaways: [
          "Sequential circuits have memory (flip-flops)",
          "Flip-flops trigger on clock edge",
          "Counters and registers store data",
          "State machines model sequential behavior"
        ],
        level: "Advanced"
      }
    ]
  },
  {
    title: "5. Basic Electronics",
    titleBn: "৫. মৌলিক ইলেকট্রনিক্স",
    level: "Beginner",
    lessons: [
      {
        id: "be1",
        title: "Semiconductor Basics",
        content: "Semiconductor: Material with conductivity between conductor and insulator.\n\nTypes:\n• Intrinsic: Pure semiconductor (Si, Ge)\n• Extrinsic: Doped with impurities\n  - N-type: Doped with donor (extra electrons)\n  - P-type: Doped with acceptor (holes)\n\nPN Junction: Interface between P and N regions.\n\nForward Bias: P connected to positive, N to negative. Current flows.\n\nReverse Bias: P to negative, N to positive. Small reverse saturation current.\n\nBreakdown:\n• Zener: Reverse bias at specific voltage\n• Avalanche: High reverse voltage\n\nDiodes: Allow current one direction.\n• Rectifier: AC to DC\n• Zener: Voltage regulation\n• LED: Emits light\n• Photodiode: Converts light to current",
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
        content: "Transistor: Semiconductor device to amplify or switch signals.\n\nBJT (Bipolar Junction Transistor):\n• NPN: Emitter to Collector current\n• PNP: Opposite direction\n\nRegions:\n• Active: Amplifier mode\n• Saturation: Fully ON\n• Cutoff: Fully OFF\n\nConfigurations: Common Emitter, Common Base, Common Collector\n\nParameters: α (alpha), β (beta)\n\nFET (Field Effect Transistor):\n• MOSFET: Metal-Oxide-Semiconductor\n• JFET: Junction FET\n\nModes:\n• Depletion: Normally on\n• Enhancement: Normally off\n\nApplications: Amplifiers, switches, digital circuits, oscillators",
        code: "β = Ic / Ib\nIc = β × Ib",
        takeaways: [
          "BJT uses current, FET uses voltage to control",
          "Transistors can amplify or switch",
          "Three configurations: CE, CB, CC",
          "MOSFET is most common in digital circuits"
        ],
        level: "Intermediate"
      }
    ]
  },
  {
    title: "6. Microprocessor and Interfacing",
    titleBn: "৬. মাইক্রোপ্রসেসর ও ইন্টারফেসিং",
    level: "Intermediate",
    lessons: [
      {
        id: "mp1",
        title: "Microprocessor Basics",
        content: "Microprocessor: Integrated circuit containing CPU functions.\n\nArchitecture:\n• Von Neumann: Single memory for code and data\n• Harvard: Separate memories for code and data\n\n8086 Architecture:\n• 16-bit data bus, 20-bit address bus\n• Registers: AX, BX, CX, DX, SP, BP, SI, DI\n• Segments: CS, DS, SS, ES\n\nInstruction Cycle:\n1. Fetch instruction from memory\n2. Decode instruction\n3. Execute operation\n4. Store result\n\nAddressing Modes:\n• Immediate: Data in instruction\n• Register: Data in CPU register\n• Direct: Address in instruction\n• Indirect: Register contains address\n• Indexed: Base + index\n\nInterrupts: External signals causing CPU to execute specific code.\n• Hardware: External devices\n• Software: INT instruction",
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
        content: "I/O Interfacing: Connecting CPU with external devices.\n\nMethods:\n• Programmed I/O: CPU polls device\n• Interrupt-driven: Device notifies CPU\n• DMA: Direct memory access without CPU\n\nPeripheral Interfaces:\n• Parallel: Multiple wires, fast (Printer)\n• Serial: One wire, slower (USB, RS232)\n• Keyboard: Matrix scanning\n• Display: 7-segment, LCD, CRT\n\nCommunication Protocols:\n• UART: Async serial communication\n• SPI: Serial Peripheral Interface\n• I2C: Inter-Integrated Circuit\n• USB: Universal Serial Bus\n\nMemory Interface:\n• RAM: Read/Write memory\n• ROM: Read-only memory\n• Address Decoding: Chip select generation\n• Wait States: Slow memory synchronization",
        takeaways: [
          "I/O interfacing connects CPU to devices",
          "Three methods: programmed, interrupt, DMA",
          "Serial vs parallel for different speeds",
          "Communication protocols enable device talk"
        ],
        level: "Intermediate"
      }
    ]
  },
  {
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
  },
  {
    title: "8. Communication Theory",
    titleBn: "৮. যোগাযোগ তত্ত্ব",
    level: "Intermediate",
    lessons: [
      {
        id: "ct1",
        title: "Signals and Systems",
        content: "Signal: Function conveying information.\n\nTypes:\n• Analog: Continuous amplitude\n• Digital: Discrete levels\n\nClassification:\n• Periodic: Repeats over time\n• Aperiodic: Non-repeating\n• Deterministic: Predictable\n• Random: Probabilistic\n\nOperations:\n• Shifting: Time shift\n• Scaling: Amplitude change\n• Reversal: Time reversal\n\nSystems:\n• Linear: Superposition applies\n• Time-invariant: Same response over time\n• Causal: Output depends on past/present\n• Stable: Bounded input → bounded output\n\nFourier Series: Periodic signals as sum of sinusoids.\nFourier Transform: Aperiodic signals in frequency domain.",
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
        content: "Modulation: Varying carrier signal to encode information.\n\nReasons:\n• Efficient transmission\n• Multiplexing\n• Antenna size\n• Reduce noise\n\nTypes:\n\nAnalog Modulation:\n• AM: Amplitude varies with signal\n• FM: Frequency varies with signal\n• PM: Phase varies with signal\n\nDigital Modulation:\n• ASK: Amplitude shift keying\n• FSK: Frequency shift keying\n• PSK: Phase shift keying\n• QAM: Combined amplitude and phase\n\nPulse Modulation:\n• PAM: Pulse amplitude\n• PWM: Pulse width\n• PCM: Pulse code\n\nDemodulation: Extracting original signal from modulated carrier.",
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
  },
  {
    title: "9. Computer Networking and Security",
    titleBn: "৯. কম্পিউটার নেটওয়ার্কিং ও নিরাপত্তা",
    level: "Intermediate",
    lessons: [
      {
        id: "ns1",
        title: "Network Fundamentals",
        content: "Network: Connected computers sharing resources.\n\nTypes:\n• LAN: Local Area Network (building/campus)\n• MAN: Metropolitan Area Network (city)\n• WAN: Wide Area Network (country/world)\n\nTopology:\n• Bus: Single backbone\n• Star: Central hub\n• Ring: Circular connection\n• Mesh: Interconnected\n\nProtocols: Rules for communication.\n• TCP/IP: Internet protocol suite\n• HTTP: Web traffic\n• FTP: File transfer\n• SMTP: Email\n\nOSI Model (7 layers):\n1. Physical: Bits on wire\n2. Data Link: Frames, MAC\n3. Network: Packets, IP\n4. Transport:Segments, TCP/UDP\n5. Session: Session management\n6. Presentation: Data format\n7. Application: User interface",
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
        code: "Symmetric: E(M, K) = C\nAsymmetric: E(M, Kpublic) = C, D(C, Kprivate) = M",
        takeaways: [
          "CIA triad: Confidentiality, Integrity, Availability",
          "Encryption protects data confidentiality",
          "Multiple authentication methods exist",
          "Firewalls filter traffic based on rules"
        ],
        level: "Advanced"
      }
    ]
  },
  {
    title: "10. Structured Programming Language (C)",
    titleBn: "১০. স্ট্রাকচার্ড প্রোগ্রামিং ল্যাংগুয়েজ (C)",
    level: "Intermediate",
    lessons: [
      {
        id: "sp1",
        title: "C Programming Basics",
        content: "C: Procedural programming language.\n\nStructure:\n• Headers: #include <stdio.h>\n• Main function: int main()\n• Statements: Instructions\n• Return: Exit status\n\nData Types:\n• Primary: int, float, double, char\n• Derived: arrays, pointers, structures\n\nVariables:\n• Declaration: type name;\n• Initialization: type name = value;\n• Scope: local, global\n\nOperators:\n• Arithmetic: +, -, *, /, %\n• Relational: ==, !=, <, >, <=, >=\n• Logical: &&, ||, !\n• Bitwise: &, |, ^, ~, <<, >>\n\nControl Structures:\n• if-else: Conditional\n• switch: Multi-way branch\n• for: Counter-controlled loop\n• while: Condition-controlled\n• do-while: Post-test loop",
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
        content: "Function: Reusable code block.\n\nDeclaration: return_type name(parameters);\n\nTypes:\n• Library: printf, scanf, math functions\n• User-defined: Custom functions\n\nParameter Passing:\n• Pass by value: Copy of data\n• Pass by reference: Address of data\n\nRecursion: Function calling itself.\n\nArray: Collection of same-type elements.\n\nDeclaration: type array[size];\n\nTypes:\n• 1D: Linear collection\n• 2D: Matrix/table\n• Multi-dimensional\n\nOperations:\n• Traversal: Access all elements\n• Search: Find element\n• Sort: Arrange in order\n\nPointer: Stores memory address.\n\nRelationship: Array name = pointer to first element.",
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
  },
  {
    title: "11. Object Oriented Programming (OOP)",
    titleBn: "১১. অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP)",
    level: "Intermediate",
    lessons: [
      {
        id: "oop1",
        title: "OOP Fundamentals",
        content: "OOP: Programming paradigm based on objects.\n\nKey Concepts:\n\n1. Class: Blueprint for objects\n• Attributes: Data (properties)\n• Methods: Functions (behavior)\n\n2. Object: Instance of class\n• Has state (values)\n• Has behavior (methods)\n\n3. Encapsulation: Hide internal details\n• Public interface\n• Private implementation\n\n4. Abstraction: Show essential features\n• Hide complexity\n• Define clear interface\n\n5. Inheritance: Reuse from parent class\n• Code reuse\n• Hierarchy creation\n• Types: Single, Multiple, Multilevel, Hierarchical\n\n6. Polymorphism: One name, many forms\n• Method overloading: Same name, different params\n• Method overriding: Redefine parent method",
        takeaways: [
          "Class is blueprint, object is instance",
          "Encapsulation bundles data and methods",
          "Inheritance enables code reuse",
          "Polymorphism allows multiple forms"
        ],
        level: "Intermediate"
      },
      {
        id: "oop2",
        title: "OOP Implementation",
        content: "Constructor: Special method initializing object.\n• Default: No parameters\n• Parameterized: With parameters\n• Copy: From another object\n\nDestructor: Cleans up when object destroyed.\n\nAccess Specifiers:\n• Private: Only class members\n• Protected: Class + derived classes\n• Public: Everyone\n\nVirtual Functions: Dynamic binding at runtime.\n\nPure Virtual: Abstract method (no implementation).\n\nAbstract Class: Has at least one pure virtual function.\n\nInterface: Contract specifying methods.\n\nComposition: Has-a relationship (contains object).\n\nAggregation: Has-a relationship (uses object).",
        code: "class Rectangle {\nprivate:\n    int width, height;\npublic:\n    Rectangle(int w, int h) {\n        width = w; height = h;\n    }\n    int area() { return width * height; }\n};",
        takeaways: [
          "Constructors initialize, destructors clean up",
          "Access specifiers control visibility",
          "Abstract classes define interfaces",
          "Composition and aggregation model relationships"
        ],
        level: "Advanced"
      }
    ]
  },
  {
    title: "12. Discrete Mathematics",
    titleBn: "১২. ডিসক্রিট গণিত",
    level: "Intermediate",
    lessons: [
      {
        id: "dm1",
        title: "Logic and Propositions",
        content: "Propositional Logic: Study of truth values and logical operations.\n\nProposition: Statement that's either true or false.\n\nLogical Operations:\n• Negation (¬): Inverts truth\n• Conjunction (∧): AND\n• Disjunction (∨): OR\n• Implication (→): If-then\n• Biconditional (↔): If and only if\n\nLaws:\n• Identity: p ∧ T ≡ p, p ∨ F ≡ p\n• Dominance: p ∧ F ≡ F, p ∨ T ≡ T\n• Idempotent: p ∧ p ≡ p\n• Complement: p ∧ ¬p ≡ F\n• De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q\n\nTautology: Always true\nContradiction: Always false\nContingency: Sometimes true, sometimes false\n\nPredicate Logic: Quantifiers (∃, ∀) over variables.",
        code: "p → q ≡ ¬p ∨ q\n¬(p ∧ q) ≡ ¬p ∨ ¬q",
        takeaways: [
          "Propositions have truth values",
          "Logical operations combine propositions",
          "De Morgan's laws transform expressions",
          "Predicates use quantifiers over variables"
        ],
        level: "Intermediate"
      },
      {
        id: "dm2",
        title: "Set Theory and Relations",
        content: "Set: Collection of distinct elements.\n\nOperations:\n• Union (∪): All elements in either\n• Intersection (∩): Common elements\n• Difference (-): Elements in A not B\n• Complement (A'): Elements not in A\n\nLaws:\n• Commutative: A ∪ B = B ∪ A\n• Associative: (A ∪ B) ∪ C = A ∪ (B ∪ C)\n• Distributive: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)\n• De Morgan: (A ∪ B)' = A' ∩ B'\n\nVenn Diagrams: Visual representation.\n\nRelation: Subset of Cartesian product.\n\nProperties:\n• Reflexive: (a,a) ∈ R\n• Symmetric: (a,b) ∈ R → (b,a) ∈ R\n• Transitive: (a,b) ∈ R, (b,c) ∈ R → (a,c) ∈ R\n\nEquivalence Relation: Reflexive, symmetric, transitive.\n\nPartial Order: Reflexive, antisymmetric, transitive.",
        takeaways: [
          "Sets are collections of distinct elements",
          "Operations combine sets in various ways",
          "Relations connect elements between sets",
          "Equivalence and partial orders are key relations"
        ],
        level: "Intermediate"
      }
    ]
  },
  {
    title: "13. Graphs",
    titleBn: "১৩. গ্রাফ তত্ত্ব",
    level: "Intermediate",
    lessons: [
      {
        id: "gr1",
        title: "Graph Fundamentals",
        content: "Graph: G = (V, E) where V = vertices, E = edges.\n\nTypes:\n• Simple: No loops, no multiple edges\n• Multi: Multiple edges allowed\n• Directed: Edges have direction\n• Undirected: Edges bidirectional\n\nSpecial Graphs:\n• Complete (Kn): Every pair connected\n• Cycle (Cn): Closed loop\n• Path: Sequence of vertices\n• Tree: Connected, no cycles\n• Bipartite: V partitioned, edges between parts\n\nGraph Representation:\n• Adjacency Matrix: O(V²) space\n• Adjacency List: O(V+E) space\n\nDegree: Number of edges incident.\n• In-degree: Incoming edges\n• Out-degree: Outgoing edges\n\nHandshaking Lemma: Sum of degrees = 2|E|",
        takeaways: [
          "Graphs consist of vertices and edges",
          "Directed vs undirected edges matter",
          "Adjacency list is efficient for sparse graphs",
          "Handshaking lemma relates degrees to edges"
        ],
        level: "Intermediate"
      },
      {
        id: "gr2",
        title: "Graph Algorithms",
        content: "Traversal:\n• BFS: Level-order using queue\n• DFS: Depth-order using stack/recursion\n\nConnectivity:\n• Connected: Path between all pairs\n• Components: Maximal connected subgraphs\n• Strongly connected (digraph): Bidirectional paths\n\nShortest Path:\n• Dijkstra: Weighted, positive weights\n• Bellman-Ford: Handles negative weights\n• BFS: Unweighted\n\nMinimum Spanning Tree:\n• Prim: Grow from one vertex\n• Kruskal: Sort edges, add if no cycle\n\nTopological Sort: Order for DAG (Directed Acyclic Graph).\n\nCycle Detection:\n• DFS: Back edge detection\n• Union-Find: Detect cycle in undirected",
        code: "BFS: Queue based level traversal\nDFS: Stack/recursion based depth traversal",
        takeaways: [
          "BFS finds shortest path in unweighted graphs",
          "DFS explores depth before breadth",
          "Dijkstra finds shortest weighted path",
          "MST connects all vertices with minimum total weight"
        ],
        level: "Advanced"
      }
    ]
  },
  {
    title: "14. Theory of Computation",
    titleBn: "১৪. গণনার তত্ত্ব",
    level: "Advanced",
    lessons: [
      {
        id: "tc1",
        title: "Automata Theory",
        content: "Automata: Abstract machine performing computations.\n\nFinite Automaton (FA):\n• States: Finite set\n• Alphabet: Input symbols\n• Transition: State changes\n• Start state: Initial\n• Accept states: Final\n\nDFA: Deterministic, one transition per symbol.\nNFA: Non-deterministic, multiple possible transitions.\n\nRegular Languages: Recognized by FA.\n\nRegular Expressions: Describe patterns.\n• Union: a + b\n• Concatenation: ab\n• Kleene star: a*\n\nPumping Lemma: For regular languages, strings can be pumped.\n\nContext-Free Grammar (CFG):\n• Terminals: Basic symbols\n• Non-terminals: Variables\n• Productions: Rules\n• Start symbol: Initial\n\nPushdown Automaton (PDA): FA + Stack memory.",
        takeaways: [
          "FA recognizes regular languages",
          "DFA vs NFA: deterministic vs non-deterministic",
          "Regular expressions describe patterns",
          "CFG generates context-free languages"
        ],
        level: "Advanced"
      },
      {
        id: "tc2",
        title: "Computability",
        content: "Turing Machine: Most powerful computation model.\n\nComponents:\n• Tape: Infinite, divided into cells\n• Head: Reads/writes/moves\n• State: Current computation step\n• Transition: (state, symbol) → (new state, write, direction)\n\nChurch-Turing Thesis: Turing-computable = Algorithmically computable.\n\nDecidability:\n• Decidable: Algorithm exists to answer\n• Undecidable: No algorithm exists\n\nHalting Problem: Cannot decide if arbitrary program halts.\n\nReduction: Transform one problem to another.\n\nComplexity Classes:\n• P: Polynomial time solvable\n• NP: Non-deterministic polynomial\n• NP-Complete: Hardest in NP\n• NP-Hard: At least as hard as NP-Complete",
        takeaways: [
          "Turing machine is universal computation model",
          "Halting problem is undecidable",
          "P vs NP is major open question",
          "NP-Complete problems are inter-reducible"
        ],
        level: "Advanced"
      }
    ]
  },
  {
    title: "15. Data Structures and Algorithms",
    titleBn: "১৫. ডেটা স্ট্রাকচার ও অ্যালগরিদম",
    level: "Advanced",
    lessons: [
      {
        id: "dsa1",
        title: "Data Structures",
        content: "Data Structure: Organization for efficient data handling.\n\nLinear:\n• Array: Indexed, fixed size\n• Linked List: Nodes with pointers\n  - Singly: One direction\n  - Doubly: Both directions\n  - Circular: Last connects to first\n• Stack: LIFO (Last In First Out)\n• Queue: FIFO (First In First Out)\n  - Circular\n  - Priority\n\nNon-Linear:\n• Tree: Hierarchical\n  - Binary: Max 2 children\n  - BST: Ordered binary tree\n  - AVL: Self-balancing\n  - Heap: Priority queue\n• Graph: Networks\n\nHashing:\n• Hash table: Key-value with hash function\n• Collision handling: Chaining, open addressing",
        takeaways: [
          "Arrays provide O(1) access, O(n) insertion",
          "Linked lists allow O(1) insertion/deletion",
          "Stacks and queues enable specific orderings",
          "Trees and graphs model hierarchical/network data"
        ],
        level: "Advanced"
      },
      {
        id: "dsa2",
        title: "Algorithms",
        content: "Algorithm: Step-by-step problem solution.\n\nSorting:\n• Bubble: O(n²), simple\n• Selection: O(n²), minimum swap\n• Insertion: O(n²), efficient for small data\n• Merge: O(n log n), divide-conquer\n• Quick: O(n log n) average, O(n²) worst\n• Heap: O(n log n), tree-based\n\nSearch:\n• Linear: O(n)\n• Binary: O(log n), sorted data\n• Hash: O(1) average\n\nComplexity:\n• Time: How many operations\n• Space: How much memory\n\nBig-O Notation:\n• O(1): Constant\n• O(log n): Logarithmic\n• O(n): Linear\n• O(n log n): Linearithmic\n• O(n²): Quadratic\n• O(2^n): Exponential",
        takeaways: [
          "Sorting algorithms have different trade-offs",
          "Merge sort and quick sort are O(n log n)",
          "Binary search requires sorted data",
          "Big-O describes worst-case complexity"
        ],
        level: "Advanced"
      }
    ]
  },
  {
    title: "16. Database Systems",
    titleBn: "১৬. ডেটাবেস সিস্টেম",
    level: "Advanced",
    lessons: [
      {
        id: "db1",
        title: "Database Fundamentals",
        content: "Database: Organized collection of data.\n\nDBMS: Database Management System.\n\nArchitecture:\n• External: User view\n• Conceptual: Logical structure\n• Internal: Physical storage\n\nData Models:\n• Relational: Tables with rows/columns\n• Hierarchical: Tree structure\n• Network: Graph structure\n• Object-oriented: Objects with methods\n\nER Model:\n• Entity: Real-world object\n• Attribute: Entity property\n• Relationship: Entity associations\n• Key: Unique identifier\n\nKeys:\n• Primary: Unique identifier\n• Foreign: References another table\n• Candidate: Potential primary\n• Composite: Multiple attributes",
        takeaways: [
          "DBMS provides data management",
          "Relational model uses tables",
          "ER modeling visualizes database design",
          "Keys ensure data uniqueness and relationships"
        ],
        level: "Advanced"
      },
      {
        id: "db2",
        title: "SQL and Normalization",
        content: "SQL: Structured Query Language.\n\nCommands:\n• DDL: CREATE, ALTER, DROP\n• DML: SELECT, INSERT, UPDATE, DELETE\n• DCL: GRANT, REVOKE\n\nJoins:\n• Inner: Matching rows\n• Left: All left + matching right\n• Right: All right + matching left\n• Full: All rows\n\nNormalization: Organize to reduce redundancy.\n\nForms:\n• 1NF: Atomic values\n• 2NF: No partial dependency\n• 3NF: No transitive dependency\n• BCNF:强化 3NF\n\nTransaction (ACID):\n• Atomic: All or nothing\n• Consistent: Valid state\n• Isolated: Concurrent independent\n• Durable: Permanent after commit",
        code: "SELECT name FROM employees WHERE dept = 'IT' ORDER BY salary DESC;",
        takeaways: [
          "SQL queries retrieve and manipulate data",
          "Joins combine tables based on relationships",
          "Normalization reduces data redundancy",
          "ACID ensures reliable transactions"
        ],
        level: "Advanced"
      },
      {
        id: "db3",
        title: "Query Optimization and Recovery",
        content: "Query Optimization: Choose most efficient execution plan.\n\nTechniques:\n• Use indexes\n• Avoid SELECT *\n• Use joins efficiently\n• Avoid subqueries when possible\n• Use proper join types\n\nCost Model: I/O, CPU, communication.\n\nConcurrency Control: Handle simultaneous access.\n\nProblems:\n• Dirty Read: Read uncommitted data\n• Lost Update: Both updates, one lost\n• Non-repeatable Read: Different reads\n\nSolutions:\n• Locking: Shared/Exclusive\n• Two-Phase Locking (2PL)\n• Timestamp ordering\n\nRecovery:\n• Log-based: Write-ahead logging\n• Checkpoint: Periodic snapshots\n• Backup: Full, incremental, differential\n\nIsolation Levels:\n• Read Uncommitted\n• Read Committed\n• Repeatable Read\n• Serializable",
        takeaways: [
          "Optimizer evaluates execution plans",
          "Locks prevent concurrent access issues",
          "Logging enables recovery from failures",
          "Isolation levels trade performance for consistency"
        ],
        level: "Advanced"
      }
    ]
  },
  {
    title: "17. Software Engineering",
    titleBn: "১৭. সফটওয়্যার ইঞ্জিনিয়ারিং",
    level: "Advanced",
    lessons: [
      {
        id: "se1",
        title: "SDLC and Design",
        content: "Software Engineering: Systematic approach to software development.\n\nSDLC Phases:\n1. Requirements: Gather and analyze\n2. Design: System architecture\n3. Implementation: Coding\n4. Testing: Verify functionality\n5. Deployment: Release to users\n6. Maintenance: Updates and fixes\n\nModels:\n• Waterfall: Sequential phases\n• Agile: Iterative, flexible\n• Spiral: Risk-driven\n• V-Model: Testing integrated\n\nDesign Principles:\n• Abstraction: Hide details\n• Encapsulation: Bundle data/methods\n• Modularity: Separate concerns\n• Coupling: Dependency between modules\n• Cohesion: Internal relatedness\n\nDesign Patterns:\n• Creational: Object creation (Factory, Singleton)\n• Structural: Structure (Adapter, Decorator)\n• Behavioral: Behavior (Observer, Strategy)",
        takeaways: [
          "SDLC provides structured development process",
          "Agile emphasizes iterative development",
          "Low coupling and high cohesion are goals",
          "Design patterns solve common problems"
        ],
        level: "Advanced"
      },
      {
        id: "se2",
        title: "Testing and Project Management",
        content: "Testing: Verify software works correctly.\n\nLevels:\n• Unit: Individual components\n• Integration: Combined parts\n• System: Complete system\n• Acceptance: User validation\n\nTypes:\n• Black-box: No internal knowledge\n• White-box: Internal structure known\n• Regression: After changes\n\nTechniques:\n• Functional: Requirements-based\n• Performance: Load, stress\n• Security: Vulnerability check\n\nProject Management:\n• Planning: Tasks, timeline\n• Estimation: Effort, cost\n• Risk: Identify and mitigate\n• Quality: Standards compliance\n\nMetrics:\n• LOC: Lines of code\n• Function Points: Functionality measure\n• Cyclomatic Complexity: Code complexity",
        takeaways: [
          "Testing verifies correct functionality",
          "Multiple levels test different aspects",
          "Risk management identifies potential issues",
          "Metrics measure project progress and quality"
        ],
        level: "Advanced"
      }
    ]
  },
  {
    title: "18. Operating System",
    titleBn: "১৮. অপারেটিং সিস্টেম",
    level: "Advanced",
    lessons: [
      {
        id: "os1",
        title: "OS Fundamentals",
        content: "Operating System: Interface between user and hardware.\n\nGoals:\n• Convenience: Easy to use\n• Efficiency: Resource utilization\n• Evolution: Allow changes\n\nFunctions:\n• Process Management: Create, schedule, terminate\n• Memory Management: Allocate, deallocate\n• File Management: Store, retrieve, protect\n• Device Management: Drivers, I/O\n• Security: Protection, authentication\n\nTypes:\n• Batch: Process jobs in batches\n• Time-sharing: Multiple users\n• Real-time: Immediate response\n• Distributed: Multiple machines\n\nProcess: Executing program.\n\nStates: New, Ready, Running, Waiting, Terminated.\n\nScheduling:\n• FCFS: First come first served\n• SJF: Shortest job first\n• Round Robin: Time slice\n• Priority: Based on priority",
        takeaways: [
          "OS manages hardware resources",
          "Process states: new, ready, running, waiting, terminated",
          "CPU scheduling decides execution order",
          "Types include batch, time-sharing, real-time"
        ],
        level: "Advanced"
      },
      {
        id: "os2",
        title: "Memory and File Systems",
        content: "Memory Management:\n\nTechniques:\n• Contiguous: Single block allocation\n• Non-contiguous: Multiple blocks\n• Paging: Fixed-size pages\n• Segmentation: Variable segments\n\nVirtual Memory:\n• Pages in RAM + on disk\n• Page table maps virtual to physical\n• TLB speeds up translation\n\nPage Replacement:\n• FIFO: Oldest page out\n• LRU: Least recently used\n• Optimal: Future reference prediction\n\nFile System:\n• File: Named collection of data\n• Directory: Organizes files\n• Allocation: How space managed\n  - Contiguous\n  - Linked\n  - Indexed\n\nFile Access:\n• Sequential: Start to end\n• Direct: Any location\n\nI/O Management:\n• Buffers: Temporary storage\n• Caching: Fast access copy\n• Spooling: Queue for devices",
        takeaways: [
          "Virtual memory extends available space",
          "Page replacement algorithms manage memory",
          "File systems organize and store data",
          "I/O management optimizes device access"
        ],
        level: "Advanced"
      }
    ]
  },
  {
    title: "19. Artificial Intelligence",
    titleBn: "১৯. আর্টিফিসিয়াল ইন্টেলিজেন্স",
    level: "Advanced",
    lessons: [
      {
        id: "ai1",
        title: "AI Fundamentals",
        content: "Artificial Intelligence: Machines mimicking human intelligence.\n\nTypes:\n• Narrow AI: Specific tasks\n• General AI: Any cognitive task\n• Super AI: Surpass human intelligence\n\nApproaches:\n• Symbolic: Rules and logic\n• Statistical: Probability and data\n• Connectionist: Neural networks\n\nSearch:\n• Uninformed: BFS, DFS, Uniform-cost\n• Informed: A*, Greedy\n\nKnowledge Representation:\n• Propositional Logic\n• Predicate Logic\n• Frames\n• Semantic Networks\n\nPlanning:\n• State-space search\n• Partial-order planning\n• Hierarchical task network",
        takeaways: [
          "AI mimics human cognitive functions",
          "Search algorithms solve problems systematically",
          "Knowledge representation captures information",
          "Planning generates action sequences"
        ],
        level: "Advanced"
      },
      {
        id: "ai2",
        title: "Machine Learning",
        content: "Machine Learning: Systems learning from data.\n\nTypes:\n• Supervised: Labeled data\n• Unsupervised: No labels\n• Reinforcement: Trial and error\n\nAlgorithms:\n• Regression: Continuous output\n• Classification: Discrete output\n• Clustering: Group similar\n• Decision Trees: Rule-based\n• Neural Networks: Inspired by brain\n\nDeep Learning:\n• Neural networks with many layers\n• CNN: Image processing\n• RNN: Sequential data\n• Transformers: Natural language\n\nEvaluation:\n• Accuracy, Precision, Recall\n• F1-Score\n• Confusion Matrix\n\nOverfitting: Model memorizes training data.\nUnderfitting: Model too simple.",
        code: "accuracy = (TP + TN) / (TP + TN + FP + FN)\nprecision = TP / (TP + FP)\nrecall = TP / (TP + FN)",
        takeaways: [
          "ML enables systems to learn from data",
          "Supervised, unsupervised, and reinforcement learning",
          "Neural networks process complex patterns",
          "Proper evaluation prevents over/underfitting"
        ],
        level: "Advanced"
      }
    ]
  }
]

function App() {
  const [currentModule, setCurrentModule] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'bn'>('bn')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const searchResults = searchQuery.length >= 2 ? modules.flatMap(m => 
    m.lessons.filter(l => 
      (language === 'bn' && l.titleBn ? l.titleBn : l.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (language === 'bn' && l.contentBn ? l.contentBn : l.content).toLowerCase().includes(searchQuery.toLowerCase())
    ).map(l => ({
      ...l,
      moduleTitle: language === 'bn' && m.titleBn ? m.titleBn : m.title,
      moduleIndex: modules.indexOf(m),
      lessonIndex: m.lessons.indexOf(l)
    }))
  ).slice(0, 10) : []

  const t = translations[language]

  const module = modules[currentModule]
  const lesson = module.lessons[currentLesson]
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const currentPosition = modules.slice(0, currentModule).reduce((acc, m) => acc + m.lessons.length, 0) + currentLesson + 1
  const progress = Math.round((currentPosition / totalLessons) * 100)

  const navigate = (dir: 'prev' | 'next') => {
    if (dir === 'next') {
      if (currentLesson < module.lessons.length - 1) {
        setCurrentLesson(currentLesson + 1)
      } else if (currentModule < modules.length - 1) {
        setCurrentModule(currentModule + 1)
        setCurrentLesson(0)
      }
    } else {
      if (currentLesson > 0) {
        setCurrentLesson(currentLesson - 1)
      } else if (currentModule > 0) {
        setCurrentModule(currentModule - 1)
        setCurrentLesson(modules[currentModule - 1].lessons.length - 1)
      }
    }
  }

  const getLevelColor = (_level: string) => {
    return 'bg-amber-500 text-black'
  }

  const copyCode = (code?: string) => {
    if (code) navigator.clipboard.writeText(code)
  }

  return (
    <div className={`min-h-screen ${language === 'bn' ? 'bengali' : ''} ${theme === 'light' ? 'light-theme' : ''}`}>
      <div className="app-bg" />
      
      {/* Navbar */}
      <nav className="navbar">
        <button 
          className="mobile-menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="navbar-brand">StudyHub</h1>
        <div className="navbar-actions">
          <button onClick={() => setShowSearch(!showSearch)} className="theme-toggle" title="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {showSearch && (
            <div className="search-dropdown">
              <input
                type="text"
                className="search-input"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); }}
                autoFocus
              />
              {searchQuery.length >= 2 && (
                <div className="search-results">
                  {searchResults.length > 0 ? searchResults.map((result, i) => (
                    <div
                      key={i}
                      className="search-result-item"
                      onClick={() => { setCurrentModule(result.moduleIndex); setCurrentLesson(result.lessonIndex); setSearchQuery(''); setShowSearch(false); }}
                    >
                      <div className="search-result-title">{language === 'bn' && result.titleBn ? result.titleBn : result.title}</div>
                      <div className="search-result-module">{result.moduleTitle}</div>
                    </div>
                  )) : (
                    <div className="search-result-item">
                      <div className="search-result-title">{t.noResults}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="theme-toggle" title={theme === 'dark' ? t.lightMode : t.darkMode}>
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.75 9.75 0 0012 21.75 9.75 9.75 0 0020.354 15.354z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="language-toggle"
          >
            {language === 'en' ? 'বাংলা' : 'English'}
          </button>
          <svg className="progress-ring" viewBox="0 0 36 36">
            <path
              stroke="var(--text-dim)"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="progress-ring-circle"
              stroke="var(--accent)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${progress}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span className="nav-counter">{progress}%</span>
        </div>
      </nav>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-section">
          <h2 className="sidebar-title">{t.modules}</h2>
          {modules.map((m, idx) => (
            <div
              key={idx}
              onClick={() => { setCurrentModule(idx); setCurrentLesson(0); setSidebarOpen(false) }}
              className={`sidebar-item ${currentModule === idx ? 'active' : ''}`}
            >
              <span className="sidebar-number">{idx + 1}</span>
              <span>{language === 'bn' && m.titleBn ? m.titleBn : m.title}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="lesson-header animate-fade">
          <div className="lesson-meta">
            <span className={`level-tag ${getLevelColor(lesson.level)}`}>{language === 'bn' && lesson.level === 'Beginner' ? 'শুরু' : language === 'bn' && lesson.level === 'Intermediate' ? 'মধ্যম' : language === 'bn' && lesson.level === 'Advanced' ? 'উন্নত' : lesson.level}</span>
            <span className="lesson-subtitle">{language === 'bn' && module.titleBn ? module.titleBn : module.title} • {t.lesson} {currentLesson + 1} / {module.lessons.length}</span>
          </div>
          <h1 className="lesson-title">{language === 'bn' && lesson.titleBn ? lesson.titleBn : lesson.title}</h1>
        </div>

        <div className="content-card animate-fade delay-1">
          <div className="content-text">
            {(language === 'bn' && lesson.contentBn ? lesson.contentBn : lesson.content).split('\n').map((para, i) => (
              <p key={i} className="mb-4">{para}</p>
            ))}
          </div>
        </div>

        <div className="takeaways-card animate-fade delay-2">
          <h3 className="takeaways-title">{t.keyTakeaways}</h3>
          {(language === 'bn' && lesson.takeawaysBn ? lesson.takeawaysBn : lesson.takeaways).map((takeaway, i) => (
            <div key={i} className="takeaway-item">
              <span className="takeaway-dot" />
              <span>{takeaway}</span>
            </div>
          ))}
        </div>

        {(lesson.code || lesson.codeBn) && (
          <div className="code-block animate-fade delay-3">
            <div className="code-header">
              <span className="code-label">{t.keyFormula}</span>
              <button onClick={() => copyCode(language === 'bn' && lesson.codeBn ? lesson.codeBn : lesson.code || '')} className="code-copy">{t.copy}</button>
            </div>
            <pre className="code-content">{language === 'bn' && lesson.codeBn ? lesson.codeBn : lesson.code}</pre>
          </div>
        )}

        <div className="nav-buttons animate-fade delay-4">
          <button 
            onClick={() => navigate('prev')} 
            disabled={currentModule === 0 && currentLesson === 0}
            className="nav-btn nav-btn-secondary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          <span className="nav-counter">{currentPosition} / {totalLessons}</span>
          <button onClick={() => navigate('next')} className="nav-btn nav-btn-primary">
            Next
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default App