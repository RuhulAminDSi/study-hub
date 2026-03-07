# Artificial Intelligence - Study Notes

## Table of Contents
1. [Introduction to AI](#1-introduction-to-ai)
2. [Search Algorithms](#2-search-algorithms)
3. [Knowledge Representation](#3-knowledge-representation)
4. [Machine Learning](#4-machine-learning)
5. [Neural Networks](#5-neural-networks)
6. [Natural Language Processing](#6-natural-language-processing)
7. [Expert Systems](#7-expert-systems)
8. [AI Applications](#8-ai-applications)

---

## 1. Introduction to AI

### What is Artificial Intelligence?
- Intelligence exhibited by machines
- Mimics human cognitive functions
- Learns, reasons, solves problems

### Goals of AI
- Think like humans
- Think rationally
- Act like humans
- Act rationally

### AI Categories
- **ANI (Artificial Narrow Intelligence)**: Specific tasks
- **AGI (Artificial General Intelligence)**: Human-level
- **ASI (Artificial Super Intelligence)**: Beyond human

### History
- **1956**: Dartmouth Conference (AI term coined)
- **1966**: First chatbot (ELIZA)
- **1997**: Deep Blue beats Kasparov
- **2012**: Deep Learning revolution
- **2020s**: Large Language Models

---

## 2. Search Algorithms

### Problem-Solving Approach
1. Define problem
2. Represent state space
3. Search for solution

### Types of Search

#### Uninformed Search (Blind)
| Algorithm | Description | Pros | Cons |
|----------|-------------|------|------|
| BFS | Level by level | Optimal for unweighted | Memory intensive |
| DFS | Deep first | Low memory | May not find optimal |
| Uniform Cost | Cheapest first | Optimal | Slow |
| Depth Limited | DFS with limit | Controls depth | Incomplete |
| Iterative Deepening | Repeat with increasing limit | Optimal + complete | Slow |

#### Informed Search (Heuristic)
| Algorithm | Description |
|-----------|-------------|
| **Greedy Best-First** | Uses heuristic only |
| **A*** | f(n) = g(n) + h(n) |
| **IDA*** | Iterative deepening A* |
| **RBFS** | Recursive best-first |

### Heuristic Function
- Estimates cost to goal
- Must be **admissible** (never overestimates)

### A* Search Properties
- Complete if finite
- Optimal if heuristic is admissible
- Time: O(b^d)
- Space: O(b^d)

---

## 3. Knowledge Representation

### Types of Knowledge
- **Declarative**: Facts
- **Procedural**: How to do
- **Heuristic**: Rules of thumb

### Representation Schemes

#### Propositional Logic
- Variables: True/False
- Connectives: ∧, ∨, ¬, →, ↔
- Limitations: Cannot handle uncertainty

#### First-Order Logic (Predicate Logic)
- Predicates, variables, quantifiers
- More expressive
- ∀ (for all), ∃ (exists)

#### Semantic Networks
- Graph representation
- Nodes = concepts
- Edges = relationships

#### Frames
- Structured representation
- Slots and fillers
- Inheritance

#### Production Rules
- IF-THEN rules
- Forward chaining
- Backward chaining

---

## 4. Machine Learning

### What is Machine Learning?
- Subset of AI
- Systems learn from data
- No explicit programming

### Types of Learning

#### Supervised Learning
- Labeled data
- Learn input-output mapping
- Classification (discrete)
- Regression (continuous)

#### Unsupervised Learning
- No labels
- Find patterns
- Clustering (group similar)
- Dimensionality reduction

#### Reinforcement Learning
- Learn from rewards/penalties
- Agent interacts with environment
- Policy learning

### Common Algorithms
| Algorithm | Type | Use Case |
|-----------|------|----------|
| Linear Regression | Supervised | Prediction |
| Logistic Regression | Supervised | Classification |
| Decision Tree | Supervised | Classification |
| Random Forest | Supervised | Ensemble |
| SVM | Supervised | Classification |
| K-Means | Unsupervised | Clustering |
| Neural Networks | Both | Complex patterns |

### Evaluation Metrics
- **Accuracy**: Correct predictions / Total
- **Precision**: TP / (TP + FP)
- **Recall**: TP / (TP + FN)
- **F1 Score**: 2 × Precision × Recall / (Precision + Recall)

---

## 5. Neural Networks

### What are Neural Networks?
- Inspired by brain
- Layers of neurons
- Learns patterns

### Components
- **Input Layer**: Features
- **Hidden Layers**: Process
- **Output Layer**: Results
- **Weights**: Connections between neurons
- **Bias**: Offset

### Activation Functions
| Function | Formula |
|----------|---------|
| Sigmoid | 1/(1+e^-x) |
| ReLU | max(0,x) |
| Tanh | (e^x - e^-x)/(e^x + e^-x) |
| Softmax | exp(x)/Σexp(x_i) |

### Training Process
1. **Forward Propagation**: Input → Output
2. **Loss Calculation**: Compare with actual
3. **Backpropagation**: Update weights
4. **Repeat**: Until convergence

### Deep Learning
- Many hidden layers
- Can learn complex patterns
- Requires lots of data

### Types of Networks
- **CNN**: Image recognition
- **RNN**: Sequential data
- **LSTM**: Long-term dependencies
- **GANs**: Generative models

---

## 6. Natural Language Processing (NLP)

### What is NLP?
- AI for understanding human language
- Text and speech

### Tasks
- **Tokenization**: Split text into words
- **POS Tagging**: Part of speech
- **NER**: Named Entity Recognition
- **Sentiment Analysis**: Emotion detection
- **Translation**: Language conversion
- **Chatbots**: Conversation

### Techniques
- **Bag of Words**: Count word frequencies
- **TF-IDF**: Term frequency-inverse document frequency
- **Word Embeddings**: Word2Vec, GloVe
- **Transformers**: BERT, GPT

---

## 7. Expert Systems

### What are Expert Systems?
- AI program mimicking human experts
- Knowledge base + Inference engine
- Solves complex problems

### Components
1. **Knowledge Base**: Facts and rules
2. **Inference Engine**: Reasoning
3. **User Interface**: Interaction
4. **Explanation System**: Why/how answers

### Knowledge Acquisition
- Experts → Knowledge Engineer → System

### Limitations
- Narrow domain
- No common sense
- Hard to maintain

---

## 8. AI Applications

| Domain | Applications |
|--------|--------------|
| **Healthcare** | Diagnosis, drug discovery, imaging |
| **Finance** | Fraud detection, trading |
| **Gaming** | Chess, Go, video games |
| **Robotics** | Autonomous vehicles, automation |
| **Vision** | Face recognition, object detection |
| **Speech** | Voice assistants, transcription |
| **Recommendation** | Netflix, Amazon, Spotify |

### Ethical Considerations
- Bias in AI
- Privacy concerns
- Job displacement
- AI safety
- Autonomous weapons

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| AI | Machine intelligence |
| BFS | Level-order search |
| DFS | Deep-first search |
| A* | Optimal with admissible heuristic |
| ML | Learning from data |
| Neural Network | Inspired by brain |
| NLP | Understanding language |
| Deep Learning | Many neural network layers |

---

*Last Updated: 2026*
*Subject: Artificial Intelligence*
