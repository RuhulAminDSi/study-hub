# Software Engineering - Detailed Review Questions

---

## Question 1
Explain the SDLC phases with deliverables.

**Answer:** Software Development Life Cycle:

1. Requirements Phase:
- Gather user needs
- Analyze feasibility
- Create SRS (Software Requirements Specification)

Deliverables:
- Requirements Document
- Use Cases
- User Stories
- Feasibility Report

2. Design Phase:
- System architecture
- Database design
- Interface design

Deliverables:
- Design Documents
- ER Diagrams
- Class Diagrams
- Architecture Document

3. Development Phase:
- Coding
- Unit testing
- Integration

Deliverables:
- Source Code
- Test Cases
- Unit Test Reports

4. Testing Phase:
- System testing
- Integration testing
- Acceptance testing

Deliverables:
- Test Plans
- Bug Reports
- Test Results

5. Deployment Phase:
- Install to production
- User training
- Configuration

Deliverables:
- Deployment Guide
- User Manual
- Release Notes

6. Maintenance Phase:
- Bug fixes
- Updates
- Enhancements

Deliverables:
- Maintenance Reports
- Change Requests

---

## Question 2
Compare Waterfall and Agile methodologies.

**Answer:**
Waterfall Model:
- Sequential phases
- Each phase completes before next
- Requirements frozen early
- Testing at end

Advantages:
- Simple to understand
- Clear milestones
- Works for stable requirements

Disadvantages:
- Inflexible to changes
- Late testing
- High risk

Agile Methodology:
- Iterative, incremental
- Flexibility welcome
- Customer collaboration

Principles:
- Individuals over processes
- Working software over documentation
- Customer collaboration over contracts
- Responding to change over following plan

Scrum (Agile Framework):
- Sprints (2-4 weeks)
- Daily standups
- Sprint reviews
- Retrospectives

Comparison:
Feature        | Waterfall  | Agile
---------------|------------|---------
Approach      | Sequential | Iterative
Requirements  | Fixed      | Changing
Customer      | At end     | Continuous
Testing       | At end     | Continuous
Risk          | High       | Low
Documentation | Extensive | Minimal

---

## Question 3
Explain coupling and cohesion with examples.

**Answer:** Coupling:
- Dependency between modules
- Low coupling = good design
- High coupling = bad design

Types (best to worst):
1. Content: One module modifies another
2. Common: Share global data
3. Stamp: Pass entire object
4. Data: Pass required data only

Example (High Coupling):
```python
class Order:
    def process(self):
        db = Database()  # Direct dependency
        db.connect()
        # ... process
```

Example (Low Coupling):
```python
class Order:
    def __init__(self, repository):
        self.repository = repository
    
    def process(self):
        self.repository.save(self)
```

Cohesion:
- Relatedness within module
- High cohesion = good

Types (low to high):
1. Coincidental
2. Logical
3. Temporal
4. Procedural
5. Communicational
6. Sequential
7. Functional

Example (Low Cohesion):
```python
class Utility:
    def calculate_tax(self): pass
    def send_email(self): pass
    def format_date(self): pass
```

Example (High Cohesion):
```python
class TaxCalculator:
    def calculate(self): pass
    def get_rate(self): pass
    
class EmailService:
    def send(self): pass
    def validate(self): pass
```

---

## Question 4
Explain black-box and white-box testing.

**Answer:** Black-box Testing:
- No knowledge of internal code
- Tests functionality
- Based on requirements

Techniques:
1. Equivalence Partitioning
2. Boundary Value Analysis
3. Decision Table Testing
4. State Transition Testing
5. Use Case Testing

Example:
```python
def login(username, password):
    # Internal code hidden
    pass

# Test without knowing code
def test_login():
    assert login("user", "pass") == True
    assert login("", "") == False
    assert login("user", "wrong") == False
```

White-box Testing:
- Complete knowledge of code
- Tests internal logic

Techniques:
1. Statement Coverage
2. Branch Coverage
3. Path Coverage
4. Condition Coverage
5. Loop Testing

Example:
```python
def grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    else:
        return "C"

# Test all branches
def test_grade():
    assert grade(95) == "A"
    assert grade(85) == "B"
    assert grade(75) == "C"
```

Comparison:
Feature      | Black-box  | White-box
-------------|------------|----------
Knowledge   | None       | Full
Focus       | Function   | Structure
Skills      | Business   | Programming
When        | User specs | Design

---

## Question 5
Explain software quality metrics.

**Answer:** Quality Metrics:

1. Defect Density:
- Defects per KLOC (thousand lines of code)
- Formula: Defects / Size
- Good: < 1 per KLOC

2. Lines of Code (LOC):
- Total lines in program
- Measure of size

3. Cyclomatic Complexity:
- Measures code complexity
- Formula: E - N + 2P
- E = edges, N = nodes, P = components
- Good: < 10

4. Code Coverage:
- % of code executed by tests
- Types: Line, Branch, Path

5. Mean Time Between Failures (MTBF):
- Average time between failures
- Higher = more reliable

6. Test Coverage:
- Requirements covered by tests

7. Maintainability Index:
- Composite metric
- Based on Halstead, cyclomatic complexity, LOC

8. Technical Debt:
- Cost to fix problems now vs later

Metrics Collection:
- Static analysis tools
- Test frameworks
- Version control

---

## Question 6
Explain use case diagram components.

**Answer:** Use Case Diagram:
- Shows system functionality
- User interactions

Components:

1. Actor:
- External user/system
- Stick figure

2. Use Case:
- System functionality
- Oval shape

3. System Boundary:
- Rectangle containing use cases

4. Relationships:
- Include: Must include (<<include>>)
- Extend: Extend behavior (<<extend>>)
- Inheritance: Generalization

Example:
```
       ┌─────────────┐
       │   SYSTEM    │
       │ ┌─────────┐ │
       │ │ Login   │ │
       │ └─────────┘ │
       │ ┌─────────┐ │
       │ │ Search  │ │
       │ └─────────┘ │
       └─────────────┘
           ↑
      ┌────┴────┐
      │  Actor  │
      └─────────┘
```

Use Cases:
- Login
- Search Products
- Add to Cart
- Checkout
- View Order History

Actors:
- Customer
- Admin
- Guest

---

## Question 7
Explain class diagram relationships.

**Answer:** Class Diagram Relationships:

1. Association:
- Basic relationship
- One-way or two-way
- Arrow: →

2. Aggregation:
- "Has-a" relationship
- Part can exist without whole
- Hollow diamond ◇

3. Composition:
- Strong "has-a"
- Part cannot exist without whole
- Filled diamond ◆

4. Inheritance (Generalization):
- "Is-a" relationship
- Triangle arrow △

5. Dependency:
- One class depends on another
- Dotted arrow --→

6. Realization:
- Implements interface
- Dotted triangle

Example:
```
    ┌─────────┐        ┌─────────┐
    │  Person │        │  Account│
    ├─────────┤        ├─────────┤
    │-name    │        │-id      │
    │-age     │        │-balance │
    └────┬────┘        └────┬────┘
         │                  │
         │◇                 │1
         │                  │
    ┌────┴────┐       ┌────┴────┐
    │ Student │       │  Bank   │
    ├─────────┤       └─────────┘
    │-studentID│
    │-gpa     │
    └─────────┘
```

---

## Question 8
Explain risk management process.

**Answer:** Risk Management:

1. Risk Identification:
- Brainstorming
- Checklists
- Expert consultation
- Root cause analysis

2. Risk Analysis:
- Probability: High/Medium/Low
- Impact: High/Medium/Low

Risk Matrix:
            | Probability |
            | Low  | Med | High|
Impact|High | Med  | High| High|
      |Med  | Low  | Med | High|
      |Low  | Low  | Low | Med |

3. Risk Planning:
- Avoid: Change plan
- Mitigate: Reduce probability/impact
- Transfer: Insurance
- Accept: Contingency plan

4. Risk Monitoring:
- Track risks
- Update status
- Review triggers

Common Software Risks:
- Schedule overrun
- Budget overrun
- Staff turnover
- Technology changes
- Requirements changes
- Integration issues

---

## Question 9
Explain Gantt chart and PERT chart.

**Answer:** Gantt Chart:
- Horizontal bar chart
- Shows schedule
- Visual timeline

Components:
- Tasks on Y-axis
- Time on X-axis
- Bars show duration
- Dependencies shown

Example:
```
Task        |Week1|Week2|Week3|Week4|
Requirements| ████ |     |     |     |
Design      |     | ████ |     |     |
Coding      |     |     | ████ |     |
Testing     |     |     |     | ████ |
```

PERT Chart (Program Evaluation Review Technique):
- Network diagram
- Shows task dependencies
- Critical path highlighted

Components:
- Nodes: Tasks
- Arrows: Dependencies
- Numbers: Duration estimates
- Critical Path: Longest path

Estimates:
- Optimistic (O)
- Most Likely (M)
- Pessimistic (P)
- Expected = (O + 4M + P) / 6

Critical Path:
- Longest sequence
- No slack
- Determines minimum time

---

## Question 10
Explain test-driven development (TDD).

**Answer:** Test-Driven Development:

Cycle:
1. Write failing test
2. Write minimal code to pass
3. Refactor

Steps:
1. Red: Write failing test
2. Green: Write minimal code
3. Refactor: Improve code

Example:
```python
# 1. Write failing test
def test_add():
    assert add(2, 3) == 5

# Function doesn't exist - fails!

# 2. Write minimal code
def add(a, b):
    return 5  # minimal pass

# 3. Refactor
def add(a, b):
    return a + b  # proper implementation
```

TDD Benefits:
- Better design
- Fewer bugs
- Living documentation
- Confidence for refactoring

Drawbacks:
- Learning curve
- Initial time investment
- Not all tests useful

Best Practices:
- Keep tests small
- Test one thing
- Use descriptive names
- Run tests frequently

---

*End of Software Engineering Detailed Questions*
