import type { Module } from '../../types'

const m11: Module = {
  title: "11. Object Oriented Programming (OOP)",
  titleBn: "১১. অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP)",
  level: "Intermediate",
  lessons: [
    {
      id: "oop1",
      title: "OOP Fundamentals",
      content: "OOP: Programming paradigm based on objects.\n\nKey Concepts:\n\n1. Class: Blueprint for objects\n• Attributes: Data (properties)\n• Methods: Functions (behavior)\n\n2. Object: Instance of class\n• Has state (values)\n• Has behavior (methods)\n\n3. Encapsulation: Hide internal details\n• Public interface\n• Private implementation\n\n4. Abstraction: Show essential features\n• Hide complexity\n\n5. Inheritance: Reuse from parent class\n• Code reuse\n• Hierarchy creation\n• Types: Single, Multiple, Multilevel, Hierarchical\n\n6. Polymorphism: One name, many forms\n• Method overloading: Same name, different params\n• Method overriding: Redefine parent method",
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
}

const m12: Module = {
  title: "12. Discrete Mathematics",
  titleBn: "১২. ডিসক্রিট গণিত",
  level: "Intermediate",
  lessons: [
    {
      id: "dm1",
      title: "Logic and Propositions",
      content: "Propositional Logic: Study of truth values and logical operations.\n\nProposition: Statement that's either true or false.\n\nLogical Operations:\n• Negation (¬): Inverts truth\n• Conjunction (∧): AND\n• Disjunction (∨): OR\n• Implication (→): If-then\n• Biconditional (↔): If and only if\n\nLaws:\n• Identity: p ∧ T ≡ p, p ∨ F ≡ p\n• Dominance: p ∧ F ≡ F, p ∨ T ≡ T\n• Complement: p ∧ ¬p ≡ F\n• De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q\n\nTautology: Always true\nContradiction: Always false\nContingency: Sometimes true, sometimes false\n\nPredicate Logic: Quantifiers (∃, ∀) over variables.",
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
      content: "Set: Collection of distinct elements.\n\nOperations:\n• Union (∪): All elements in either\n• Intersection (∩): Common elements\n• Difference (-): Elements in A not B\n• Complement (A'): Elements not in A\n\nLaws:\n• Commutative: A ∪ B = B ∪ A\n• Associative: (A ∪ B) ∪ C = A ∪ (B ∪ C)\n• Distributive: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)\n• De Morgan: (A ∪ B)' = A' ∩ B'\n\nRelation: Subset of Cartesian product.\n\nProperties:\n• Reflexive: (a,a) ∈ R\n• Symmetric: (a,b) ∈ R → (b,a) ∈ R\n• Transitive: (a,b) ∈ R, (b,c) ∈ R → (a,c) ∈ R\n\nEquivalence Relation: Reflexive, symmetric, transitive.\n\nPartial Order: Reflexive, antisymmetric, transitive.",
      takeaways: [
        "Sets are collections of distinct elements",
        "Operations combine sets in various ways",
        "Relations connect elements between sets",
        "Equivalence and partial orders are key relations"
      ],
      level: "Intermediate"
    }
  ]
}

const m13: Module = {
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
}

const m14: Module = {
  title: "14. Theory of Computation",
  titleBn: "১৪. গণনার তত্ত্ব",
  level: "Advanced",
  lessons: [
    {
      id: "tc1",
      title: "Automata Theory",
      content: "Automata: Abstract machine performing computations.\n\nFinite Automaton (FA):\n• States: Finite set\n• Alphabet: Input symbols\n• Transition: State changes\n• Start state: Initial\n• Accept states: Final\n\nDFA: Deterministic, one transition per symbol.\nNFA: Non-deterministic, multiple possible transitions.\n\nRegular Languages: Recognized by FA.\n\nRegular Expressions: Describe patterns.\n• Union: a + b\n• Concatenation: ab\n• Kleene star: a*\n\nPumping Lemma: For regular languages, strings can be pumped.\n\nContext-Free Grammar (CFG):\n• Terminals: Basic symbols\n• Non-terminals: Variables\n• productions: Rules\n• Start symbol: Initial\n\nPushdown Automaton (PDA): FA + Stack memory.",
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
}

const m15: Module = {
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
}

export const modules: Module[] = [m11, m12, m13, m14, m15]
