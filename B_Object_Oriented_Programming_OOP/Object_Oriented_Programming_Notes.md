# Object-Oriented Programming (OOP) - Study Notes

## Table of Contents
1. [Introduction to OOP](#1-introduction-to-oop)
2. [Classes and Objects](#2-classes-and-objects)
3. [Inheritance](#3-inheritance)
4. [Polymorphism](#4-polymorphism)
5. [Encapsulation](#5-encapsulation)
6. [Abstraction](#6-abstraction)
7. [OOP Principles](#7-oop-principles)
8. [Design Patterns](#8-design-patterns)

---

## 1. Introduction to OOP

### What is OOP?
- Programming paradigm based on objects
- Objects contain data (attributes) and code (methods)
- Focus on data rather than procedures

### Benefits
- **Reusability**: Use existing code
- **Maintainability**: Easier to update
- **Modularity**: Independent components
- **Security**: Data hiding

### Languages Supporting OOP
- C++, Java, Python, C#, JavaScript, Ruby

---

## 2. Classes and Objects

### Class
- **Blueprint** for creating objects
- Defines attributes (properties) and methods (behaviors)
- **Template** that describes the kind of object

### Object
- **Instance** of a class
- Has actual values for attributes
- Can invoke methods

### Class vs Object

| Class | Object |
|-------|--------|
| Blueprint | Actual thing |
| Logical entity | Physical entity |
| Defines structure | Uses memory |
| One definition | Many can exist |

### Class Members
- **Fields/Attributes**: Variables storing data
- **Methods**: Functions performing operations
- **Constructors**: Initialize objects
- **Destructors**: Cleanup (in some languages)

### Access Modifiers
| Modifier | Same Class | Same Package | Subclass | Anywhere |
|----------|------------|--------------|----------|----------|
| private | ✓ | ✗ | ✗ | ✗ |
| protected | ✓ | ✓ | ✓ | ✗ |
| public | ✓ | ✓ | ✓ | ✓ |
| default | ✓ | ✓ | ✗ | ✗ |

---

## 3. Inheritance

### What is Inheritance?
- Mechanism where class acquires properties of another class
- **Parent/Base Class**: Original class
- **Child/Derived Class**: New class inheriting

### Types of Inheritance

| Type | Description |
|------|-------------|
| Single | One parent, one child |
| Multiple | Multiple parents (C++ only) |
| Multilevel | Parent → Child → Grandchild |
| Hierarchical | One parent, multiple children |
| Hybrid | Combination of above |

### Method Overriding
- Child class provides different implementation of parent method
- **super** keyword to call parent method

### super() and this()
- **this**: Reference to current object
- **super**: Reference to parent class

---

## 4. Polymorphism

### What is Polymorphism?
- "Many forms"
- Same interface, different implementations

### Types

#### Compile-time (Static) Polymorphism
- **Method Overloading**: Same name, different parameters
- **Operator Overloading**: Same operator, different meanings

#### Runtime (Dynamic) Polymorphism
- **Method Overriding**: Child overrides parent method
- **Upcasting**: Parent reference to child object

### Example
```java
class Animal {
    void sound() { System.out.println("Animal sound"); }
}

class Dog extends Animal {
    void sound() { System.out.println("Bark"); }
}

// Parent reference to child object
Animal a = new Dog();
a.sound(); // Outputs "Bark"
```

---

## 5. Encapsulation

### What is Encapsulation?
- Bundling data and methods together
- **Data hiding**: Restrict access to internal data

### How to Achieve
- Make fields **private**
- Provide **public getters/setters**
- Validates data before setting

### Benefits
- Data protection
- Flexibility
- Reusability
- Easy maintenance

### Example
```java
class BankAccount {
    private double balance; // Hidden
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}
```

---

## 6. Abstraction

### What is Abstraction?
- Hiding complexity
- Showing only essential features
- Focus on "what" not "how"

### Abstract Classes
- **abstract** keyword
- Can have abstract methods (no body)
- Cannot instantiate

### Interfaces
- 100% abstract
- All methods are abstract (Java 7)
- Can have default methods (Java 8+)
- A class can implement multiple interfaces

### Abstract vs Interface

| Abstract Class | Interface |
|----------------|-----------|
| Can have concrete methods | Pre-Java 8: only abstract |
| Single inheritance | Multiple inheritance |
| Can have constructors | Cannot have constructors |
| Can have fields | Fields are constants only |

---

## 7. OOP Principles

### The 4 Pillars
1. **Encapsulation**: Data + methods together, data hiding
2. **Inheritance**: Acquire properties from parent
3. **Polymorphism**: Multiple forms
4. **Abstraction**: Hide complexity

### SOLID Principles
- **S**: Single Responsibility
- **O**: Open/Closed
- **L**: Liskov Substitution
- **I**: Interface Segregation
- **D**: Dependency Inversion

---

## 8. Design Patterns

### Creational Patterns
| Pattern | Description |
|---------|-------------|
| Singleton | One instance only |
| Factory | Creates objects without specifying class |
| Builder | Constructs complex objects |
| Prototype | Clones objects |

### Structural Patterns
| Pattern | Description |
|---------|-------------|
| Adapter | Convert interface |
| Decorator | Add functionality |
| Facade | Simplified interface |
| Proxy | Placeholder for object |

### Behavioral Patterns
| Pattern | Description |
|---------|-------------|
| Observer | Notifies changes |
| Strategy | Interchangeable algorithms |
| Command | Encapsulate request |
| Iterator | Traverse collections |

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| Class | Blueprint for objects |
| Object | Instance of a class |
| Inheritance | Acquire parent properties |
| Polymorphism | Many forms |
| Encapsulation | Data hiding |
| Abstraction | Hide complexity |
| Override | Different child implementation |
| Overload | Same name, different parameters |

---

*Last Updated: 2026*
*Subject: Object-Oriented Programming*
