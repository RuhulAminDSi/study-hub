import type { Module } from '../../types'

const m14: Module = {
  title: "14. Theory of Computation",
  titleBn: "১৪. গণনার তত্ত্ব",
  level: "Advanced",
  lessons: [
    {
      id: "tc1",
      title: "Automata Theory",
      titleBn: "অটোমাটা তত্ত্ব",
      content: "Automata: Abstract machine performing computations.\n\nFinite Automaton (FA):\n• States: Finite set\n• Alphabet: Input symbols\n• Transition: State changes\n• Start state: Initial\n• Accept states: Final\n\nDFA: Deterministic, one transition per symbol.\nNFA: Non-deterministic, multiple possible transitions.\n\nRegular Languages: Recognized by FA.\n\nRegular Expressions: Describe patterns.\n• Union: a + b\n• Concatenation: ab\n• Kleene star: a*\n\nPumping Lemma: For regular languages, strings can be pumped.\n\nContext-Free Grammar (CFG):\n• Terminals: Basic symbols\n• Non-terminals: Variables\n• productions: Rules\n• Start symbol: Initial\n\nPushdown Automaton (PDA): FA + Stack memory.",
      contentBn: "অটোমাটা: গণনা সম্পাদনকারী বিমূর্ত যন্ত্র।\n\nফাইনিট অটোমাটন (FA):\n• স্টেট: সসীম সেট\n• অ্যালফাবেট: ইনপুট প্রতীক\n• ট্রানজিশন: স্টেট পরিবর্তন\n• স্টার্ট স্টেট: ���্রাথমিক\n• অ্যাক্সেপ্ট স্টেট: চূড়ান্ত\n\nDFA: নির্ণায়ক, প্রতীকে একটি ট্রানজিশন।\nNFA: অ-নির্ণায়ক, একাধিক সম্ভাব্য ট্রানজিশন।\n\nরেগুলার ভাষা: FA দ্বারা চেনা যায়।\n\nরেগুলার এক্সপ্রেশন: প্যাটার্ন বর্ণনা করে।\n• ইউনিয়ন: a + b\n• কনক্যাটেনেশন: ab\n• ক্লিন স্টার: a*\n\nপাম্পিং লেমা: রেগুলার ভাষার জন্য, স্ট্রিং পাম্প করা যায়।\n\nকনটেক্সট-ফ্রি গ্রামার (CFG):\n• টার্মিনাল: মৌলিক প্রতীক\n• নন-টার্মিনাল: ভেরিয়েবল\n• প্রোডাকশন: নিয়ম\n• স্টার্ট প্রতীক: প্রাথমিক\n\nপাশডাউন অটোমাটন (PDA): FA + স্ট্যাক মেমোরি।",
      takeaways: [
        "FA recognizes regular languages",
        "DFA vs NFA: deterministic vs non-deterministic",
        "Regular expressions describe patterns",
        "CFG generates context-free languages"
      ],
      takeawaysBn: [
        "FA রেগুলার ভাষা চিনে",
        "DFA বনাম NFA: নির্ণায়ক বনাম অ-নির্ণায়ক",
        "রেগুলার এক্সপ্রেশন প্যাটার্ন বর্ণনা করে",
        "CFG কনটেক্সট-ফ্রি ভাষা তৈরি করে"
      ],
      level: "Advanced"
    },
    {
      id: "tc2",
      title: "Computability",
      titleBn: "গণনাযোগ্যতা",
      content: "Turing Machine: Most powerful computation model.\n\nComponents:\n• Tape: Infinite, divided into cells\n• Head: Reads/writes/moves\n• State: Current computation step\n• Transition: (state, symbol) → (new state, write, direction)\n\nChurch-Turing Thesis: Turing-computable = Algorithmically computable.\n\nDecidability:\n• Decidable: Algorithm exists to answer\n• Undecidable: No algorithm exists\n\nHalting Problem: Cannot decide if arbitrary program halts.\n\nReduction: Transform one problem to another.\n\nComplexity Classes:\n• P: Polynomial time solvable\n• NP: Non-deterministic polynomial\n• NP-Complete: Hardest in NP\n• NP-Hard: At least as hard as NP-Complete",
      contentBn: "টিউরিং মেশিন: সবচেয়ে শক্তিশালী গণনা মডেল।\n\nউপাদান:\n• টেপ: অসীম, সেলে বিভক্ত\n• হেড: পড়ে/লিখে/চলে\n• স্টেট: বর্তমান গণনা ধাপ\n• ট্রানজিশন: (স্টেট, প্রতীক) → (নতুন স্টেট, লিখুন, দিক)\n\nচার্চ-টিউরিং থিসিস: টিউরিং-গণনাযোগ্য = অ্যালগরিদমিক্যালি গণনাযোগ্য।\n\nসিদ্ধান্তযোগ্যতা:\n• সিদ্ধান্তযোগ্য: উত্তর দেওয়ার অ্যালগরিদম আছে\n• অসিদ্ধান্তযোগ্য: কোনো অ্যালগরিদম নেই\n\nহাল্টিং সমস্যা: যেকোনো প্রোগ্রাম হাল্ট হয় কি না সিদ্ধান্ত নেওয়া যায় না।\n\nরিডাকশন: এক সমস্যা অন্য সমস্যায় রূপান্তর করা।\n\nকমপ্লেক্সিটি ক্লাস:\n• P: পলিনোমিয়াল সময়ে সমাধানযোগ্য\n• NP: নন-ডিটারমিনিস্টিক পলিনোমিয়াল\n• NP-কমপ্লিট: NP এর সবচেয়ে কঠিন\n• NP-হার্ড: NP-কমপ্লিটের কমপক্ষে যতটা কঠিন",
      takeaways: [
        "Turing machine is universal computation model",
        "Halting problem is undecidable",
        "P vs NP is major open question",
        "NP-Complete problems are inter-reducible"
      ],
      takeawaysBn: [
        "টিউরিং মেশিন সর্বজনীন গণনা মডেল",
        "হাল্টিং সমস্যা অসিদ্ধান্তযোগ্য",
        "P বনাম NP হলো প্রধান খোলা প্রশ্ন",
        "NP-কমপ্লিট সমস্যা পারস্পরিক-রিডিউসিবল"
      ],
      level: "Advanced"
    }
  ]
}

export const module14 = m14