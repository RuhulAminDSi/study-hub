import type { Module } from '../../types'

const m12: Module = {
  title: "12. Discrete Mathematics",
  titleBn: "১২. ডিসক্রিট গণিত",
  level: "Intermediate",
  lessons: [
    {
      id: "dm1",
      title: "Logic and Propositions",
      titleBn: "লজিক ও প্রতিজ্ঞা",
      content: "Propositional Logic: Study of truth values and logical operations.\n\nProposition: Statement that's either true or false.\n\nLogical Operations:\n• Negation (¬): Inverts truth\n• Conjunction (∧): AND\n• Disjunction (∨): OR\n• Implication (→): If-then\n• Biconditional (↔): If and only if\n\nLaws:\n• Identity: p ∧ T ≡ p, p ∨ F ≡ p\n• Dominance: p ∧ F ≡ F, p ∨ T ≡ T\n• Complement: p ∧ ¬p ≡ F\n• De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q\n\nTautology: Always true\nContradiction: Always false\nContingency: Sometimes true, sometimes false\n\nPredicate Logic: Quantifiers (∃, ∀) over variables.",
      contentBn: "প্রপোজিশনাল লজিক: সত্য মান এবং লজিক্যাল অপারেশনের অধ্যয়ন।\n\nপ্রতিজ্ঞা: যা সত্য বা মিথ্যা।\n\nলজিক্যাল অপারেশন:\n• নিগেশন (¬): সত্য উল্টায়\n• কনজাংশন (∧): AND\n• ডিসজাংশন (∨): OR\n• ���মপ্লিকেশন (→): যদি-তবে\n• বাইকন্ডিশনাল (↔): শুধু এবং শুধু যদি\n\nসূত্র:\n• প্রত্যক্ষতা: p ∧ T ≡ p, p ∨ F ≡ p\n• প্রাধিকার: p ∧ F ≡ F, p ∨ T ≡ T\n• সম্পূরক: p ∧ ¬p ≡ F\n• ডি মর্গান: ¬(p ∧ q) ≡ ¬p ∨ ¬q\n\nটটোলজি: সবসময় সত্য\nকন্ট্রাডিকশন: সবসময় মিথ্যা\nকন্টিঞজেন্সি: কখনো সত্য, কখনো মিথ্যা\n\nপ্রেডিকেট লজিক: চলকের উপর কোয়ান্টিফায়ার (∃, ∀)।",
      code: "p → q ≡ ¬p ∨ q\n¬(p ∧ q) ≡ ¬p ∨ ¬q",
      takeaways: [
        "Propositions have truth values",
        "Logical operations combine propositions",
        "De Morgan's laws transform expressions",
        "Predicates use quantifiers over variables"
      ],
      takeawaysBn: [
        "প্রতিজ্ঞার সত্য মান আছে",
        "লজিক্যাল অপারেশন প্রতিজ্ঞা সংযুক্ত করে",
        "ডি মর্গানের সূত্র প্রকাশ রূপান্তরিত করে",
        "প্রেডিকেট চলকের উপর কোয়ান্টিফায়ার ব্যবহার করে"
      ],
      level: "Intermediate"
    },
    {
      id: "dm2",
      title: "Set Theory and Relations",
      titleBn: "সেট তত্ত্ব ও সম্পর্ক",
      content: "Set: Collection of distinct elements.\n\nOperations:\n• Union (∪): All elements in either\n• Intersection (∩): Common elements\n• Difference (-): Elements in A not B\n• Complement (A'): Elements not in A\n\nLaws:\n• Commutative: A ∪ B = B ∪ A\n• Associative: (A ∪ B) ∪ C = A ∪ (B ∪ C)\n• Distributive: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)\n• De Morgan: (A ∪ B)' = A' ∩ B'\n\nRelation: Subset of Cartesian product.\n\nProperties:\n• Reflexive: (a,a) ∈ R\n• Symmetric: (a,b) ∈ R → (b,a) ∈ R\n• Transitive: (a,b) ∈ R, (b,c) ∈ R → (a,c) ∈ R\n\nEquivalence Relation: Reflexive, symmetric, transitive.\n\nPartial Order: Reflexive, antisymmetric, transitive.",
      contentBn: "সেট: স্বতন্ত্র উপাদানের সংগ্রহ।\n\nঅপারেশন:\n• ইউনিয়ন (∪): যেকোনো একটিতে সব উপাদান\n• ইন্টারসেকশন (∩): সাধারণ উপাদান\n• ডিফারেন্স (-): A তে B নেই এমন উপাদান\n• কম্প্লিমেন্ট (A'): A তে নেই এমন উপাদান\n\nসূত্র:\n• কমিউটেটিভ: A ∪ B = B ∪ A\n• অ্যাসোসিয়েটিভ: (A ∪ B) ∪ C = A ∪ (B ∪ C)\n• ডিস্ট্রিবিউটিভ: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)\n• ডি মর্গান: (A ∪ B)' = A' ∩ B'\n\nসম্পর্ক: কার্টেশিয়ান প্রোডাক্টের উপসেট।\n\nবৈশিষ্ট্য:\n• রিফ্লেক্সিভ: (a,a) ∈ R\n• সিমেট্রিক: (a,b) ∈ R → (b,a) ∈ R\n• ট্রানজিটিভ: (a,b) ∈ R, (b,c) ∈ R → (a,c) ∈ R\n\nইকুইভ্যালেন্স সম্পর্ক: রিফ্লেক্টিভ, সিমেট্রিক, ট্রানজিটিভ।\n\nপার্শিয়াল অর্ডার: রিফ্লেক্টিভ, অ্যান্টিসিমেট্রিক, ট্রানজিটিভ।",
      takeaways: [
        "Sets are collections of distinct elements",
        "Operations combine sets in various ways",
        "Relations connect elements between sets",
        "Equivalence and partial orders are key relations"
      ],
      takeawaysBn: [
        "সেট হলো স্বতন্ত্র উপাদানের সংগ্রহ",
        "অপারেশন বিভিন্নভাবে সেট সংযুক্ত করে",
        "সম্পর্ক সেটের মধ্যে উপাদান সংযুক্ত করে",
        "ইকুইভ্যালেন্স ও পার্শিয়াল অর্ডার হলো মূল সম্পর্ক"
      ],
      level: "Intermediate"
    }
  ]
}

export const module12 = m12