# Software Engineering - Study Notes

## Table of Contents
1. [Introduction to Software Engineering](#1-introduction-to-software-engineering)
2. [Software Development Life Cycle](#2-software-development-life-cycle)
3. [Requirements Engineering](#3-requirements-engineering)
4. [System Design](#4-system-design)
5. [Coding and Testing](#5-coding-and-testing)
6. [Software Quality](#6-software-quality)
7. [Project Management](#7-project-management)
8. [UML Diagrams](#8-uml-diagrams)

---

## 1. Introduction to Software Engineering

### What is Software Engineering?
- Systematic approach to software development
- Engineering principles applied to software
- Process, methods, tools

### Software Crisis
- Projects over budget
- Delayed delivery
- Poor quality
- Unmaintainable code

### Software Attributes
- **Functionality**: Features
- **Reliability**: Works correctly
- **Efficiency**: Performance
- **Usability**: Easy to use
- **Maintainability**: Easy to change
- **Portability**: Works on different platforms

---

## 2. Software Development Life Cycle (SDLC)

### Phases

| Phase | Activities |
|-------|------------|
| **Requirement** | Gather, analyze, document |
| **Design** | System architecture, database |
| **Development** | Coding |
| **Testing** | Find bugs |
| **Deployment** | Release to users |
| **Maintenance** | Fixes, updates |

### Models

#### Waterfall Model
- Sequential phases
- Each phase completes before next
- Good for stable requirements

#### Agile Model
- Iterative, incremental
- Flexible, adaptive
- Examples: Scrum, Kanban

#### Spiral Model
- Risk-driven
- Combines iterative and waterfall
- Good for large projects

#### V-Model
- Testing integrated early
- Verification and validation

---

## 3. Requirements Engineering

### Types of Requirements
1. **Functional**: What system should do
   - Features, functions
   - User interactions
2. **Non-functional**: Quality attributes
   - Performance
   - Security
   - Usability

### Requirements Gathering Techniques
- Interviews
- Questionnaires
- Observation
- Document analysis
- Prototyping

### SRS (Software Requirements Specification)
- Complete description
- Functional and non-functional
- Use cases
- Constraints

### Requirements Document Contents
1. Introduction
2. Overall description
3. Functional requirements
4. Non-functional requirements
5. Appendices

---

## 4. System Design

### Design Levels
1. **Architectural Design**: High-level structure
2. **Detailed Design**: Component-level
3. **Database Design**: Data storage

### Architectural Patterns
- **Layered**: Presentation, Business, Data
- **Client-Server**: Front-end, Back-end
- **MVC**: Model-View-Controller
- **Microservices**: Small services

### Coupling and Cohesion
- **Coupling**: Dependency between modules (low is better)
- **Cohesion**: Relatedness within module (high is better)

### Design Principles
- **Single Responsibility**: One reason to change
- **Open/Closed**: Open for extension, closed for modification
- **Liskov Substitution**: Subtypes must be substitutable
- **Interface Segregation**: Specific interfaces
- **Dependency Inversion**: Depend on abstractions

---

## 5. Coding and Testing

### Coding Standards
- Naming conventions
- Commenting
- Code organization
- Error handling

### Code Review
- Peer review
- Find defects early
- Share knowledge

### Testing Levels

| Level | Purpose |
|-------|---------|
| **Unit** | Test individual components |
| **Integration** | Test component interactions |
| **System** | Test complete system |
| **Acceptance** | User validates system |

### Testing Types

| Type | Description |
|------|-------------|
| **Black Box** | No knowledge of internal code |
| **White Box** | Knowledge of internal code |
| **Functional** | Test functions |
| **Non-functional** | Performance, security |

### Testing Techniques
- **Static**: Reviews, walkthroughs
- **Dynamic**: Execute program

### Bug Lifecycle
1. New
2. Assigned
3. Open
4. Fixed
5. Verified
6. Closed

---

## 6. Software Quality

### Quality Metrics
- **Defect Density**: Defects per KLOC
- **Mean Time Between Failures**
- **Code Coverage**: % tested

### Quality Assurance
- Process-focused
- Prevents defects
- Standards compliance

### Quality Control
- Product-focused
- Finds defects
- Testing

### CMMI (Capability Maturity Model Integration)
| Level | Name | Description |
|-------|------|-------------|
| 1 | Initial | Ad-hoc, unpredictable |
| 2 | Managed | Basic processes |
| 3 | Defined | Standardized |
| 4 | Quantitatively Managed | Measured |
| 5 | Optimizing | Continuously improving |

---

## 7. Project Management

### Project Constraints
- **Scope**: What to deliver
- **Time**: Schedule
- **Budget**: Cost

### Estimation Techniques
- **Expert Judgment**
- **Analogous**: Compare to past projects
- **Parametric**: Use formulas
- **Three-Point**: Optimistic + Pessimistic + Most Likely

### Risk Management
1. **Identify**: Find risks
2. **Analyze**: Assess probability and impact
3. **Plan**: Mitigation strategies
4. **Monitor**: Track risks

### Gantt Chart
- Visual timeline
- Task bars
- Dependencies

### PERT Chart
- Network diagram
- Shows task relationships
- Critical path

### Critical Path Method (CPM)
- Longest path
- Determines minimum time
- Critical tasks have no slack

---

## 8. UML Diagrams

### Types of Diagrams

#### Structural Diagrams
| Diagram | Purpose |
|---------|---------|
| **Class** | Classes and relationships |
| **Object** | Object instances |
| **Component** | System components |
| **Deployment** | Hardware configuration |
| **Package** | Grouping elements |

#### Behavioral Diagrams
| Diagram | Purpose |
|---------|---------|
| **Use Case** | User interactions |
| **Activity** | Workflow |
| **State Machine** | Object states |
| **Sequence** | Message flow over time |
| **Collaboration** | Object relationships |

### Use Case Diagram
- Actors (users)
- Use cases (functions)
- Relationships

### Class Diagram
- Attributes
- Methods
- Relationships (Association, Aggregation, Composition, Inheritance)

### Sequence Diagram
- Time-based
- Objects at top
- Messages as arrows

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| SDLC | Phases: Req → Design → Code → Test → Deploy → Maint |
| Agile | Iterative, flexible |
| Coupling | Low is better |
| Cohesion | High is better |
| Black Box | No internal knowledge |
| White Box | With internal knowledge |
| Critical Path | Longest path, determines duration |

---

*Last Updated: 2026*
*Subject: Software Engineering*
