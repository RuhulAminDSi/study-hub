# Artificial Intelligence - Detailed Review Questions

---

## Question 1
Explain the A* search algorithm with heuristic properties.

**Answer:** A* Search:
- Informed search algorithm
- Finds optimal path
- Uses evaluation function

Evaluation Function:
f(n) = g(n) + h(n)

Where:
- g(n): Cost from start to node n
- h(n): Estimated cost from n to goal (heuristic)

Algorithm:
```
1. Initialize open list with start node
2. While open list not empty:
   a. Get node with lowest f
   b. If goal: return path
   c. For each neighbor:
      - Calculate g, h, f
      - Add to open list
3. Return failure
```

Heuristic Properties:

1. Admissible:
- Never overestimates
- Always ≤ actual cost
- Guarantees optimality
- Example: Straight-line distance

2. Consistent (Monotonic):
- For all edges: h(n) ≤ cost(n→n') + h(n')
- No need to revisit nodes
- Optimality guaranteed

Example:
Grid with 4-directional movement:
- g = actual steps taken
- h = Manhattan distance (|x1-x2| + |y1-y2|)

Optimality Proof:
- If h is admissible, A* finds optimal path
- f-value along optimal path never exceeds optimal cost

---

## Question 2
Explain machine learning types with examples.

**Answer:** Machine Learning Types:

1. Supervised Learning:
- Learning from labeled data
- Input → Output mapping
- Types:
  a) Classification: Discrete output
     - Examples: Spam detection, Image recognition
     - Algorithms: Decision Tree, SVM, Neural Network
  b) Regression: Continuous output
     - Examples: Price prediction, Temperature forecasting
     - Algorithms: Linear Regression, Random Forest

2. Unsupervised Learning:
- Learning from unlabeled data
- Find patterns
- Types:
  a) Clustering: Group similar
     - Examples: Customer segmentation, Document grouping
     - Algorithms: K-Means, Hierarchical
  b) Dimensionality Reduction
     - Examples: PCA, t-SNE
     - Reduce features while preserving variance

3. Reinforcement Learning:
- Learn from rewards/penalties
- Agent interacts with environment
- Examples: Game AI, Robotics
- Algorithms: Q-Learning, Deep Q-Network

4. Semi-supervised Learning:
- Small labeled + large unlabeled data
- Examples: Image classification with few labels

5. Self-supervised Learning:
- Generate labels from data
- Recent deep learning approach

---

## Question 3
Explain neural network backpropagation.

**Answer:** Backpropagation:
- Training algorithm for neural networks
- Gradient descent optimization
- Minimizes loss function

Steps:

1. Forward Pass:
- Input → Hidden → Output
- Calculate predictions
- Compute loss

2. Backward Pass:
- Output error → Hidden → Input
- Compute gradients
- Update weights

Formula:
- For weight w: w_new = w_old - learning_rate × gradient

Chain Rule:
∂E/∂w = ∂E/∂a × ∂a/∂z × ∂z/∂w

Where:
- E = error
- a = activation
- z = weighted sum

Example (Single Layer):
```
Forward:
z = w1*x1 + w2*x2 + b
a = sigmoid(z)
error = (a - y) × sigmoid'(z)

Gradients:
∂E/∂w1 = error × x1
∂E/∂w2 = error × x2
∂E/∂b = error
```

Update:
w1 = w1 - η × ∂E/∂w1
w2 = w2 - η × ∂E/∂w2

Process repeats until convergence.

---

## Question 4
Explain CNN architecture and components.

**Answer:** Convolutional Neural Network (CNN):

Components:

1. Convolutional Layer:
- Filters/kernels scan input
- Extract features
- Parameters: Filter size, stride, padding
- Output: Feature maps

2. Pooling Layer:
- Downsamples
- Reduces spatial size
- Types: Max pooling, Average pooling

3. Fully Connected Layer:
- Traditional neural network
- Flattens features
- Classification

4. Activation Functions:
- ReLU: f(x) = max(0,x)
- Softmax: For multi-class

Example Architecture:
Input → Conv → ReLU → Pool → Conv → ReLU → Pool → Flatten → FC → Output

Parameters:
- Weight sharing reduces parameters
- Translation invariant
- Spatial hierarchy learning

Training:
- Backpropagation
- Data augmentation
- Dropout for regularization

Applications:
- Image classification (ResNet, VGG)
- Object detection (YOLO)
- Face recognition

---

## Question 5
Explain natural language processing tasks.

**Answer:** NLP Tasks:

1. Tokenization:
- Split text into words/tokens
- Challenges: Hyphenation, punctuation

2. Part-of-Speech Tagging:
- Label each word: Noun, Verb, Adjective
- Example: "The cat sits" → DT NN VBZ

3. Named Entity Recognition (NER):
- Identify: Person, Organization, Location
- "Apple is in California" → Apple(ORG) California(LOC)

4. Sentiment Analysis:
- Positive/Negative/Neutral
- Applications: Reviews, Social media

5. Machine Translation:
- Convert between languages
- Sequence-to-sequence models

6. Question Answering:
- Answer questions from text
- BERT, T5 models

7. Text Summarization:
- Abstractive or extractive
- News, documents

8. Text Generation:
- GPT models
- Chatbots, writing assistants

Techniques:
- Bag of Words
- TF-IDF
- Word embeddings (Word2Vec, GloVe)
- Transformers (BERT, GPT)

---

## Question 6
Explain the minimax algorithm with alpha-beta pruning.

**Answer:** Minimax Algorithm:
- Two-player game AI
- Minimizing player (MIN)
- Maximizing player (MAX)

Algorithm:
```
function minimax(node, depth, isMaximizing):
    if node is terminal or depth == 0:
        return heuristic(node)
    
    if isMaximizing:
        maxEval = -infinity
        for child in node:
            eval = minimax(child, depth-1, false)
            maxEval = max(maxEval, eval)
        return maxEval
    else:
        minEval = +infinity
        for child in node:
            eval = minimax(child, depth-1, true)
            minEval = min(minEval, eval)
        return minEval
```

Alpha-Beta Pruning:
- Optimizes minimax
- Cuts branches that won't be explored
- α: MAX's best option
- β: MIN's best option

Pruning Condition:
- If β ≤ α: prune

Example:
- MAX at root
- First child returns 8 (β = 8)
- Second child: explore, find 7
- Since 7 ≤ 8, prune remaining

Complexity:
- Without pruning: O(b^d)
- With pruning: O(b^(d/2)) average

---

## Question 7
Explain expert system components.

**Answer:** Expert System:

Components:

1. Knowledge Base:
- Facts and rules
- Domain knowledge
- IF-THEN rules
- Example: IF temperature > 30 THEN turn_on_ac

2. Inference Engine:
- Reasoning mechanism
- Forward chaining (data-driven)
- Backward chaining (goal-driven)

3. User Interface:
- Interaction with user
- Question/answer format
- Explanation facility

4. Explanation System:
- How conclusions reached
- Why questions answered
- Builds trust

5. Knowledge Acquisition System:
- Gather knowledge from experts
- Tools for knowledge engineers

Working:
- User provides facts
- Inference engine applies rules
- System derives conclusions
- Explanation provided

Limitations:
- Narrow domain
- Knowledge acquisition hard
- No common sense
- Maintenance challenges

Examples:
- MYCIN: Medical diagnosis
- DENDRAL: Chemical analysis
- XCON: Computer configuration

---

## Question 8
Explain genetic algorithm.

**Answer:** Genetic Algorithm:
- Evolutionary computation
- Based on natural selection
- Optimization search

Components:

1. Population:
- Set of candidate solutions
- Each solution: chromosome

2. Fitness Function:
- Evaluates solution quality
- Higher fitness = better

3. Selection:
- Choose parents for reproduction
- Roulette wheel, tournament

4. Crossover:
- Combine parents
- Single-point, two-point

5. Mutation:
- Random changes
- Maintains diversity
- Prevents premature convergence

Algorithm:
```
1. Initialize population
2. Evaluate fitness
3. While not converged:
   a. Select parents
   b. Crossover
   c. Mutate
   d. Evaluate fitness
4. Return best solution
```

Example: Function Maximization
- f(x) = x², x ∈ [0,31]
- Binary chromosome: 5 bits
- Crossover at midpoint
- Mutation: flip bit (small probability)

Applications:
- Scheduling
- Route optimization
- Machine learning hyperparameter tuning
- Neural network training

---

## Question 9
Explain support vector machine (SVM).

**Answer:** Support Vector Machine (SVM):
- Supervised learning
- Classification and regression
- Finds optimal hyperplane

Key Concepts:

1. Hyperplane:
- Decision boundary
- Separates classes
- w·x + b = 0

2. Support Vectors:
- Data points closest to hyperplane
- Define margin
- Critical for classification

3. Margin:
- Distance between hyperplane and support vectors
- Maximize margin = better generalization
- Functional margin vs geometric margin

Linear SVM:
- For linearly separable data
- Maximize geometric margin

Non-linear SVM:
- Kernel trick
- Maps to higher dimension

Kernels:
1. Linear: K(x,y) = x·y
2. Polynomial: K(x,y) = (x·y + c)^d
3. RBF (Gaussian): K(x,y) = exp(-γ||x-y||²)

Soft Margin:
- Allow misclassification
- Slack variables
- Trade-off: margin vs error

Advantages:
- Effective in high dimensions
- Memory efficient
- Versatile via kernels

Disadvantages:
- Sensitive to scaling
- Not suitable for large datasets
- No probability estimates (need calibration)

---

## Question 10
Explain reinforcement learning Q-learning.

**Answer:** Q-Learning:
- Model-free RL
- Learns action values
- Temporal difference learning

Q-Table:
- State-action pairs
- Q(s,a): Expected reward for action a in state s

Algorithm:
```
Initialize Q(s,a) = 0 for all s,a

For each episode:
    Initialize state s
    For each step:
        Choose action a (ε-greedy)
        Take action, observe r, s'
        Q(s,a) = Q(s,a) + α[r + γ max Q(s',a') - Q(s,a)]
        s = s'
    Until terminal state
```

Parameters:
- α (alpha): Learning rate
- γ (gamma): Discount factor
- ε (epsilon): Exploration rate

Q-Update Formula:
- New = Old + Learning × (Target - Old)
- Target = Reward + γ × max future Q

Example: Grid World
- States: Grid positions
- Actions: Up, Down, Left, Right
- Rewards: +1 goal, -0.1 step

Exploration vs Exploitation:
- ε-greedy: Explore with ε probability
- Annealing: Decrease ε over time

Convergence:
- With infinite episodes
- Proper learning rate schedule
- All states visited sufficiently

---

*End of Artificial Intelligence Detailed Questions*
