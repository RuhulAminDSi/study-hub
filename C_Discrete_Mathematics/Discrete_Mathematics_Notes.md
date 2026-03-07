# Discrete Mathematics - Study Notes

## Table of Contents
1. [Set Theory](#1-set-theory)
2. [Relations and Functions](#2-relations-and-functions)
3. [Logic](#3-logic)
4. [Proof Techniques](#4-proof-techniques)
5. [Counting](#5-counting)
6. [Probability](#6-probability)
7. [Recurrence Relations](#7-recurrence-relations)

---

## 1. Set Theory

### Basic Definitions
- **Set**: Collection of distinct elements
- **Element**: Member of a set
- **Notation**: A = {1, 2, 3} or A = {x | condition}

### Types of Sets
- **Empty/Null Set**: ∅ or {}
- **Universal Set (U)**: Contains all elements
- **Singleton**: Single element
- **Finite vs Infinite**: Limited vs unlimited elements
- **Subset (⊆)**: All elements in A are in B
- **Proper Subset (⊂)**: A ⊆ B and A ≠ B
- **Power Set**: All subsets of a set

### Set Operations
| Operation | Symbol | Definition |
|-----------|--------|------------|
| Union | A ∪ B | Elements in A or B |
| Intersection | A ∩ B | Elements in both |
| Difference | A - B | Elements in A not in B |
| Complement | A' or Aᶜ | Elements not in A |
| Cartesian Product | A × B | Ordered pairs (a,b) |

### Laws
- **Commutative**: A ∪ B = B ∪ A
- **Associative**: (A ∪ B) ∪ C = A ∪ (B ∪ C)
- **Distributive**: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
- **De Morgan's**: (A ∪ B)' = A' ∩ B'

### Venn Diagrams
- Visual representation of sets
- Used for operations and counting

---

## 2. Relations and Functions

### Relations
- **Definition**: Subset of Cartesian product
- **Properties**:
  - Reflexive: (a,a) ∈ R
  - Symmetric: (a,b) ∈ R → (b,a) ∈ R
  - Transitive: (a,b) ∈ R, (b,c) ∈ R → (a,c) ∈ R

### Equivalence Relation
- Reflexive + Symmetric + Transitive
- Creates equivalence classes

### Partial Order
- Reflexive + Antisymmetric + Transitive
- Creates partially ordered sets (posets)

### Functions
- **Definition**: Relation where each input has exactly one output
- **Domain**: Input values
- **Codomain**: Possible output values
- **Range**: Actual output values

### Types of Functions
| Type | Definition |
|------|------------|
| One-to-One (Injective) | f(a) = f(b) → a = b |
| Onto (Surjective) | Every codomain element has preimage |
| Bijective | Both one-to-one and onto |
| Constant | Same output for all inputs |
| Identity | f(a) = a |

### Composition
- (f ∘ g)(x) = f(g(x))

---

## 3. Logic

### Propositions
- **Statement** that is either True or False
- **Atomic**: Single statement
- **Compound**: Combined with connectives

### Logical Connectives
| Symbol | Name | Meaning |
|--------|------|---------|
| ¬ or ' | Negation | NOT |
| ∧ | Conjunction | AND |
| ∨ | Disjunction | OR |
| → | Implication | IF-THEN |
| ↔ | Biconditional | IF AND ONLY IF |

### Truth Tables

| A | B | A∧B | A∨B | A→B | A↔B |
|---|---|-----|-----|-----|-----|
| T | T | T | T | T | T |
| T | F | F | T | F | F |
| F | T | F | T | T | F |
| F | F | F | F | T | T |

### Tautology and Contradiction
- **Tautology**: Always True
- **Contradiction**: Always False
- **Contingency**: Sometimes True, sometimes False

### Logical Equivalences
- **Identity**: p ∧ T = p, p ∨ F = p
- **Domination**: p ∨ T = T, p ∧ F = F
- **Idempotent**: p ∧ p = p, p ∨ p = p
- **De Morgan's**: ¬(p ∧ q) = ¬p ∨ ¬q

### Predicates and Quantifiers
- **Predicate**: Statement with variables
- **∀ (Universal)**: For all
- **∃ (Existential)**: There exists
- **∀x P(x)**: P(x) is true for all x
- **∃x P(x)**: There exists x where P(x) is true

---

## 4. Proof Techniques

### Direct Proof
- Start with assumptions
- Use logical steps to reach conclusion

### Proof by Contradiction
- Assume negation of conclusion
- Show contradiction
- Conclude original statement is true

### Proof by Induction
1. **Base Case**: Prove for n=1
2. **Inductive Hypothesis**: Assume true for n=k
3. **Inductive Step**: Prove for n=k+1

### Strong Induction
- Base case for multiple values
- Assume true for all values up to k

### Counterexample
- Find one example that disproves statement

---

## 5. Counting

### Basic Rules
- **Product Rule**: If task A has m ways, task B has n ways → m × n ways
- **Sum Rule**: m + n ways (mutually exclusive)

### Permutations
- **Arrangement** of objects
- **Formula**: P(n,r) = n! / (n-r)!
- **Circular Permutation**: (n-1)!

### Combinations
- **Selection** of objects
- **Formula**: C(n,r) = n! / (r!(n-r)!)

### Pigeonhole Principle
- If n items placed in m containers and n > m, at least one container has >1 item

### Inclusion-Exclusion
- |A ∪ B| = |A| + |B| - |A ∩ B|

---

## 6. Probability

### Definitions
- **Experiment**: Action with uncertain outcome
- **Sample Space (S)**: All possible outcomes
- **Event (E)**: Subset of sample space

### Probability
- **P(E) = |E| / |S|**
- **Range**: 0 ≤ P(E) ≤ 1

### Rules
- **Addition**: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
- **Complement**: P(A') = 1 - P(A)
- **Conditional**: P(A|B) = P(A ∩ B) / P(B)
- **Multiplication**: P(A ∩ B) = P(A|B) × P(B)

### Independent Events
- P(A ∩ B) = P(A) × P(B)

### Bayes' Theorem
- P(A|B) = P(B|A) × P(A) / P(B)

---

## 7. Recurrence Relations

### Definition
- Equation expressing term based on previous terms

### Types
- **Linear**: aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ...
- **Homogeneous**: Right side = 0
- **Non-homogeneous**: Right side ≠ 0

### Solving Linear Recurrence
1. Write characteristic equation
2. Find roots
3. Write general solution
4. Use initial conditions

### Examples
- **Fibonacci**: Fₙ = Fₙ₋₁ + Fₙ₋₂, F₀=0, F₁=1

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| Set Operations | Union, Intersection, Complement |
| Relations | Subset of A×B |
| Functions | Each input → exactly one output |
| Logic Connectives | ∧, ∨, ¬, →, ↔ |
| Proof | Direct, Contradiction, Induction |
| Permutations | Order matters (n!) |
| Combinations | Order doesn't matter (nCr) |
| Probability | P(E) = favorable/total |

---

*Last Updated: 2026*
*Subject: Discrete Mathematics*
