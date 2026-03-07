# Theory of Computation - Detailed Review Questions

---

## Question 1
Explain the Chomsky hierarchy with examples.

**Answer:** Chomsky Hierarchy (4 types):

Type 0 - Unrestricted Grammar:
- No restrictions on productions
- Form: α → β where α, β any strings (α ≠ ε)
- Languages: Recursively Enumerable
- Recognizer: Turing Machine
- Example: {ww | w ∈ {a,b}* (not context-free)}

Type 1 - Context-Sensitive Grammar:
- Productions: αAβ → αγβ
- Length of right ≥ length of left
- Languages: Context-Sensitive
- Recognizer: Linear Bounded Automaton
- Example: {aⁿbⁿcⁿ | n ≥ 1}

Type 2 - Context-Free Grammar:
- Productions: A → α where A is non-terminal
- Languages: Context-Free
- Recognizer: Pushdown Automaton
- Example: {aⁿbⁿ | n ≥ 1}

Type 3 - Regular Grammar:
- Productions: A → aB or A → a (right linear)
- Languages: Regular
- Recognizer: Finite Automaton
- Example: {aⁿb | n ≥ 0}

Hierarchy:
Type 3 ⊂ Type 2 ⊂ Type 1 ⊂ Type 0

---

## Question 2
Design a DFA that accepts strings ending with '01'.

**Answer:** DFA Design for "strings ending with 01":

States:
- q0: Initial state (no suffix)
- q1: Last bit was 0
- q2: Last bits were 01 (accepting)
- Dead state (for rejection)

Transition Table:
δ(q, input):
         0    1
q0      q1   q0
q1      q1   q2
q2      q1   q0
q_dead  q_dead  q_dead

Transition Diagram:
```
     0           0
  ┌──────────────┐
  │              ▼
→(q0)──1──►q1───1──►(q2)
  ▲           │
  └───────────┘
        0
```

Test:
- "01": q0-0→q1-1→q2 (accept)
- "101": q0-1→q0-0→q1-1→q2 (accept)
- "010": q0-0→q1-1→q2-0→q1 (reject)
- "11": q0-1→q0-1→q0 (reject)

---

## Question 3
Explain the pumping lemma for regular languages.

**Answer:** Pumping Lemma:
- Necessary condition for regular languages
- If language is regular, lemma holds

Statement:
For regular language L:
∃ n (pumping length)
∀ w ∈ L with |w| ≥ n
w = xyz where:
  1. |y| ≥ 1
  2. |xy| ≤ n
  3. ∀ i ≥ 0: xyⁱz ∈ L

Proof Idea:
- DFA with n states
- Any string longer than n causes cycle
- Pump the cycle portion

Use:
- Prove language is NOT regular
- Assume regular → apply lemma → contradiction

Example: L = {0ⁿ1ⁿ | n ≥ 0}

Proof not regular:
1. Assume regular, let n be pumping length
2. Take w = 0ⁿ1ⁿ (in L)
3. w = xyz with |xy| ≤ n
4. y consists only of 0s
5. Pump: xy²z = 0ⁿ+|y|1ⁿ
6. Not in L (more 0s than 1s)
7. Contradiction → Not regular

---

## Question 4
Explain pushdown automata with example.

**Answer:** Pushdown Automaton (PDA):
- Finite Automaton + Stack
- More powerful than FA
- Recognizes CFLs

Components:
- Q: Finite states
- Σ: Input alphabet
- Γ: Stack alphabet
- δ: Transition function
- q0: Initial state
- Z0: Initial stack symbol
- F: Final states

Two types:
1. Accept by final state
2. Accept by empty stack

Example: L = {0ⁿ1ⁿ | n ≥ 0}

PDA Design:
- Push 0s onto stack when seeing 0
- Pop from stack when seeing 1
- Accept if stack empty at end

Transitions:
δ(q0, 0, Z0) = (q0, 0Z0)    # push
δ(q0, 0, 0) = (q0, 00)      # push more 0s
δ(q0, 1, 0) = (q1, ε)       # pop one 0
δ(q1, 1, 0) = (q1, ε)       # continue popping
δ(q1, ε, Z0) = (qf, Z0)      # accept

---

## Question 5
Explain Turing machine variants.

**Answer:** Turing Machine Variants:

1. Basic Turing Machine:
- Infinite tape
- Read/write head
- Move left or right
- Accept, reject, or loop

2. Multi-tape TM:
- Multiple tapes
- Each has own head
- Can simulate in O(T³) time
- Faster computation

3. Non-deterministic TM (NTM):
- Multiple choices at each step
- Accepts if any path leads to accept
- Can be simulated by deterministic TM
- Exponential time blow-up suspected

4. Enumerator:
- Outputs strings in language
- Like TM with printer
- Generates language

5. Universal TM:
- Takes TM description as input
- Simulates that TM
- Basis for stored-program computers

Church-Turing Thesis:
- All "reasonable" models are equivalent
- Turing machine captures computability

---

## Question 6
Explain the Halting Problem and its implications.

**Answer:** Halting Problem:
- Given program and input, determine if program halts
- Cannot be decided by any algorithm
- Proved by Alan Turing (1936)

Proof (Diagonalization):
- Assume H(P) decides halting
- Create D(P):
  - If H(P,P) halts → loop forever
  - If H(P,P) doesn't halt → halt
- Run D on itself:
  - If D(D) halts → loops forever
  - If D(D) loops → halts
- Contradiction!

Implications:
- No general algorithm can analyze programs
- Rice's Theorem: All non-trivial properties are undecidable
- Cannot determine if program has virus
- Cannot determine if two programs equivalent

Practical Impact:
- Compilers can't find all infinite loops
- Program verification is limited
- Some problems inherently unsolvable

---

## Question 7
Explain NP-completeness with an example.

**Answer:** P vs NP:
- P: Solvable in polynomial time
- NP: Verifiable in polynomial time
- NP-Complete: Hardest in NP

NP-Complete Problems:

1. SAT (Boolean Satisfiability):
- Given Boolean formula, is it satisfiable?
- Cook-Levin theorem: First NP-complete

2. Vertex Cover:
- Find minimum vertices covering all edges
- From SAT reduction

3. Hamiltonian Path:
- Visit each vertex exactly once
- From SAT reduction

4. Knapsack:
- Maximize value with weight limit
- From SAT reduction

5. Traveling Salesman:
- Visit all cities minimum distance
- From Hamiltonian Path

6. 3-SAT:
- SAT with each clause having 3 literals
- NP-complete

Example reduction:
- SAT → 3-SAT: Convert each clause
- 3-SAT → Vertex Cover: Create graph
- Vertex Cover → Hamiltonian Path: Graph construction

If any NP-complete solved in P:
- All NP problems in P
- P = NP

---

## Question 8
Explain context-free grammars with derivation and parse trees.

**Answer:** Context-Free Grammar (CFG):
- Productions: A → α (A is non-terminal)
- Generates CFLs

Example: L = {aⁿbⁿ | n ≥ 1}

Grammar:
S → aSb | ab

Derivation:
S ⇒ aSb ⇒ aaSbb ⇒ aaaSbbb ⇒ aaaabbbb

Parse Tree:
```
       S
     / | \
    a  S  b
   / | \
  a  S  b
 / \
a   b
```

- Root: Start symbol
- Internal nodes: Non-terminals
- Leaves: Terminals

Leftmost Derivation:
- Replace leftmost non-terminal first

Rightmost Derivation:
- Replace rightmost non-terminal first

Ambiguity:
- Grammar is ambiguous if string has multiple parse trees
- Example: if-then-else can parse differently

---

## Question 9
Explain conversion from NFA to DFA.

**Answer:** NFA to DFA Conversion:
- Subset construction
- Each DFA state = set of NFA states

Algorithm:
1. Start with ε-closure of initial state
2. For each input symbol, find reachable states
3. New DFA states as needed
4. Continue until no new states

Example:
NFA:
- States: {q0, q1, q2}
- Alphabet: {0, 1}
- q0 initial, q2 final
- δ(q0, 0) = {q0, q1}
- δ(q0, 1) = {q0}
- δ(q1, 1) = {q2}

Step 1:
- ε-closure({q0}) = {q0} = A

Step 2 (from A with 0):
- Move(A, 0) = {q0, q1}
- ε-closure = {q0, q1} = B

Step 3 (from A with 1):
- Move(A, 1) = {q0}
- ε-closure = {q0} = A

Step 4 (from B with 0):
- Move(B, 0) = {q0, q1}
- ε-closure = B

Step 5 (from B with 1):
- Move(B, 1) = {q0, q2}
- ε-closure = {q0, q2} = C (contains final q2)

DFA: States {A, B, C}

---

## Question 10
Explain regular expressions with examples.

**Answer:** Regular Expressions:
- Describe regular languages
- Concatenation, union, Kleene star

Operators:
- a: Character a
- ε: Empty string
- *: Zero or more
- +: One or more
- ?: Zero or one
- |: Union (or)
- (): Grouping

Examples:

1. Strings with even number of a:
   (b|ab*a)*

2. Binary strings with no consecutive 1s:
   (0|10)*1|ε

3. Email pattern:
   [a-z]+@[a-z]+\.[a-z]+

4. Phone number:
   \d{3}-\d{3}-\d{4}

5. URL:
   https?://[a-z]+\.[a-z]+

6. Binary divisible by 3:
   (0|1(01*0)*1)*

Equivalence:
- RE → NFA: Thompson's construction
- NFA → RE: State elimination
- FA → RE: Generalized transition graph

---

*End of Theory of Computation Detailed Questions*
