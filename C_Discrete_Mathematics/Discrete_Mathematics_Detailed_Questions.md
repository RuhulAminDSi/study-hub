# Discrete Mathematics - Detailed Review Questions

---

## Question 1
Prove that the sum of angles in a triangle is 180° using logical reasoning.

**Answer:** Proof: Sum of angles in triangle = 180°

Given: Triangle ABC

Construction:
1. Draw line through vertex A parallel to BC
2. Label intersection points as D and E

Proof:
- ∠ABC = ∠BAD (alternate interior angles)
- ∠ACB = ∠CAE (alternate interior angles)
- ∠BAC + ∠BAD + ∠CAE = 180° (straight line)
- Substituting: ∠BAC + ∠ABC + ∠ACB = 180°

Therefore, sum of angles = 180°

---

## Question 2
Using mathematical induction, prove that 1 + 2 + 3 + ... + n = n(n+1)/2

**Answer:** Proof by Mathematical Induction

Statement: S(n): 1 + 2 + 3 + ... + n = n(n+1)/2

Base Case (n = 1):
- LHS = 1
- RHS = 1(1+1)/2 = 1
- S(1) is true ✓

Inductive Hypothesis:
Assume S(k) is true for some k ≥ 1:
1 + 2 + ... + k = k(k+1)/2

Inductive Step (prove S(k+1)):
- LHS = 1 + 2 + ... + k + (k+1)
- Using hypothesis: = k(k+1)/2 + (k+1)
- = [k(k+1) + 2(k+1)]/2
- = (k+1)(k+2)/2
- = (k+1)[(k+1)+1]/2
- RHS for n = k+1: (k+1)(k+2)/2

Since both sides are equal, S(k+1) is true.

Conclusion: By mathematical induction, S(n) is true for all n ≥ 1

---

## Question 3
Explain De Morgan's Laws with truth table proof.

**Answer:** De Morgan's Laws:

Law 1: (A ∪ B)' = A' ∩ B'
Law 2: (A ∩ B)' = A' ∪ B'

Proof using truth table:

A | B | A∪B | (A∪B)' | A' | B' | A'∩B'
--+--+-----+---------+----+----+------
T | T |  T  |    F    | F  | F  |   F
T | F |  T  |    F    | F  | T  |   F
F | T |  T  |    F    | T  | F  |   F
F | F |  F  |    T    | T  | T  |   T

Since columns (A∪B)' and A'∩B' are identical, Law 1 is proved.

Similarly for Law 2:

A | B | A∩B | (A∩B)' | A' | B' | A'∪B'
--+--+-----+---------+----+----+------
T | T |  T  |    F    | F  | F  |   F
T | F |  F  |    T    | F  | T  |   T
F | T |  F  |    T    | T  | F  |   T
F | F |  F  |    T    | T  | T  |   T

Since columns match, Law 2 is proved.

---

## Question 4
Explain the Pigeonhole Principle with an example.

**Answer:** Pigeonhole Principle:

Basic Form:
If n items are placed into m containers and n > m, then at least one container contains more than one item.

Extended Form:
If n items placed into m containers, then at least one container contains ⌈n/m⌉ items.

Example 1:
- In any group of 13 people, at least 2 share a birth month
- 12 months (containers), 13 people (items)
- Since 13 > 12, at least one month has 2 people

Example 2:
- In a deck of 52 cards, how many must you draw to guarantee 3 of same suit?
- Worst case: 2 of each suit = 8 cards
- 9th card ensures 3 of same suit
- Answer: 9 cards

Example 3:
- Show that among any 5 integers, there are two whose difference is divisible by 4
- Remainders when divided by 4: 0, 1, 2, 3 (4 categories)
- 5 numbers → by pigeonhole → 2 have same remainder
- Their difference is divisible by 4

---

## Question 5
Solve the recurrence relation: F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1

**Answer:** This is the Fibonacci recurrence.

Solving:
1. Write characteristic equation:
   r² = r + 1
   r² - r - 1 = 0

2. Find roots:
   r = [1 ± √(1+4)]/2 = (1 ± √5)/2
   r₁ = (1+√5)/2 ≈ 1.618 (golden ratio)
   r₂ = (1-√5)/2 ≈ -0.618

3. General solution:
   F(n) = A(r₁)ⁿ + B(r₂)ⁿ

4. Use initial conditions:
   F(0) = 0: A + B = 0  → B = -A
   
   F(1) = 1: A(r₁) + B(r₂) = 1
             A(r₁) - A(r₂) = 1
             A(r₁ - r₂) = 1
             A = 1/(r₁ - r₂)
             A = 1/√5

5. Final solution:
   F(n) = (1/√5)[(1+√5)/2]ⁿ - (1/√5)[(1-√5)/2]ⁿ

This is Binet's formula for Fibonacci numbers.

---

## Question 6
Explain equivalence relations with an example.

**Answer:** Equivalence Relation:
- Relation that is reflexive, symmetric, and transitive

Properties:
1. Reflexive: aRa for all a
2. Symmetric: aRb implies bRa
3. Transitive: aRb and bRc implies aRc

Example: Congruence Modulo n

Let R = "has same remainder when divided by 3" on integers

Reflexive:
- a has same remainder as a when divided by 3
- aRa: true ✓

Symmetric:
- If a has same remainder as b, then b has same remainder as a
- aRb implies bRa: true ✓

Transitive:
- If a has same remainder as b, and b has same remainder as c
- Then a has same remainder as c
- aRb and bRc implies aRc: true ✓

Therefore, congruence modulo 3 is an equivalence relation.

Equivalence Classes:
- [0] = {..., -6, -3, 0, 3, 6, ...}
- [1] = {..., -5, -2, 1, 4, 7, ...}
- [2] = {..., -4, -1, 2, 5, 8, ...}

---

## Question 7
Differentiate between permutations and combinations with formulas.

**Answer:**
Permutations:
- Order matters
- Arrangements of r objects from n
- P(n,r) = n! / (n-r)!

Examples:
- arranging 3 people in 5 chairs: P(5,3) = 5!/2! = 60
- selecting president, VP, secretary from 10: P(10,3) = 720

Combinations:
- Order doesn't matter
- Selections of r objects from n
- C(n,r) = n! / (r!(n-r)!)

Examples:
- selecting 3 people from 10 for committee: C(10,3) = 120
- choosing 5 cards from deck: C(52,5) = 2,598,960

Comparison:
- "arrange" → permutation
- "choose" → combination

Formula relationship:
- C(n,r) = P(n,r) / r!

---

## Question 8
Explain the inclusion-exclusion principle.

**Answer:** Inclusion-Exclusion Principle:

For two sets A and B:
|A ∪ B| = |A| + |B| - |A ∩ B|

For three sets A, B, C:
|A ∪ B ∪ C| = |A| + |B| + |C| 
             - |A ∩ B| - |A ∩ C| - |B ∩ C|
             + |A ∩ B ∩ C|

General formula for n sets:
|A₁ ∪ A₂ ∪ ... ∪ Aₙ| = Σ|Aᵢ| - Σ|Aᵢ∩Aⱼ| + Σ|Aᵢ∩Aⱼ∩Aₖ| - ...

Example Problem:
- In a class: 30 study Math, 25 study Physics, 28 study Chemistry
- 12 study Math & Physics, 10 study Math & Chemistry, 8 study Physics & Chemistry
- 5 study all three
- Total students?

Solution:
|union| = 30 + 25 + 28 - 12 - 10 - 8 + 5
      = 83 - 30 + 5
      = 58

---

## Question 9
Explain Bayes' Theorem with a practical example.

**Answer:** Bayes' Theorem:

Formula:
P(A|B) = P(B|A) × P(A) / P(B)

Where:
- P(A|B): Probability of A given B occurred
- P(B|A): Probability of B given A occurred

Example Problem:
- Test for disease: 95% accurate (true positive), 10% false positive
- 1% of population has disease
- Person tests positive, what's probability they have disease?

Given:
- P(D) = 0.01 (disease)
- P(T|D) = 0.95 (positive if diseased)
- P(T|not D) = 0.10 (false positive)

Find: P(D|T)

Solution:
P(T) = P(T|D)×P(D) + P(T|not D)×P(not D)
     = 0.95×0.01 + 0.10×0.99
     = 0.0095 + 0.099 = 0.1085

P(D|T) = P(T|D)×P(D) / P(T)
        = 0.95×0.01 / 0.1085
        = 0.0095 / 0.1085
        ≈ 0.0876 ≈ 8.76%

Despite positive test, only 8.76% actually have disease!

---

## Question 10
Explain functions - injective, surjective, and bijective with examples.

**Answer:** Functions:

Injective (One-to-One):
- Each element in domain maps to unique element in codomain
- f(a₁) = f(a₂) implies a₁ = a₂
- No two domain elements map to same range element

Example: f(x) = 2x from ℤ to ℤ
- f(1) = 2, f(2) = 4, f(3) = 6...
- Each has unique image ✓

Surjective (Onto):
- Every element in codomain has preimage
- For every y in codomain, ∃x such that f(x) = y

Example: f(x) = x² from ℤ to ℤ (non-negative)
- 0, 1, 4, 9... are in range
- But -1, -4 not reachable ✗
- Not surjective for ℤ

For ℤ≥₀ (non-negative integers), f(x) = x² IS surjective

Bijective:
- Both injective and surjective
- One-to-one correspondence
- Has inverse function

Example: f(x) = x+1 from ℤ to ℤ
- Injective: a+1 = b+1 implies a=b ✓
- Surjective: For any y, x=y-1 maps to y ✓
- Bijective ✓

---

*End of Discrete Mathematics Detailed Questions*
