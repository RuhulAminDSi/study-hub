# Object-Oriented Programming - Detailed Review Questions

---

## Question 1
Explain the four pillars of OOP with practical examples.

**Answer:** The Four Pillars of OOP:

1. Encapsulation:
   - Bundling data and methods together
   - Data hiding through access modifiers
   Example:
   ```java
   class BankAccount {
       private double balance;
       
       public void deposit(double amount) {
           if(amount > 0)
               balance += amount;
       }
       
       public double getBalance() {
           return balance;
       }
   }
   ```

2. Inheritance:
   - Acquiring properties from parent class
   Example:
   ```java
   class Animal {
       void eat() { }
   }
   
   class Dog extends Animal {
       void bark() { }
   }
   ```

3. Polymorphism:
   - Same interface, different implementations
   Example:
   ```java
   class Shape {
       void draw() { }
   }
   
   class Circle extends Shape {
       void draw() { System.out.println("Circle"); }
   }
   
   class Square extends Shape {
       void draw() { System.out.println("Square"); }
   }
   ```

4. Abstraction:
   - Hiding complexity
   Example:
   ```java
   abstract class Vehicle {
       abstract void start();
   }
   ```

---

## Question 2
Differentiate between abstract classes and interfaces.

**Answer:**
Abstract Class:
- Can have abstract methods (no body)
- Can have concrete methods
- Can have constructors
- Single inheritance only
- Can have instance variables
- Use for "is-a" relationship

Example:
```java
abstract class Animal {
    String name;
    
    Animal(String name) {  // constructor
        this.name = name;
    }
    
    abstract void sound();  // abstract method
    
    void sleep() {  // concrete
        System.out.println("Sleeping");
    }
}
```

Interface:
- All methods abstract (pre-Java 8)
- No constructors
- Multiple inheritance
- Variables are constants (static final)
- Use for "can-do" relationship

Example:
```java
interface Drawable {
    void draw();  // implicitly abstract
    
    default void display() {  // Java 8
        System.out.println("Displaying");
    }
}

class Circle implements Drawable {
    public void draw() {
        System.out.println("Drawing Circle");
    }
}
```

Comparison:
Feature         | Abstract Class | Interface
---------------|---------------|-----------
Methods        | Abstract + Con | Java 7: Only abstract
Inheritance    | Single         | Multiple
Constructors  | Yes            | No
Variables      | Any            | Constants only
Implementation | extends        | implements

---

## Question 3
Explain method overloading and method overriding with examples.

**Answer:** Method Overloading (Compile-time):
- Same class, same name, different parameters
- Also: operator overloading (C++)

Example:
```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    
    double add(double a, double b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
}

Calculator c = new Calculator();
c.add(5, 3);        // calls int version
c.add(5.5, 3.3);    // calls double version
c.add(1, 2, 3);     // calls three-param version
```

Method Overriding (Runtime):
- Different class (parent-child)
- Same signature
- Uses super keyword

Example:
```java
class Parent {
    void show() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    @Override
    void show() {
        System.out.println("Child");
    }
}

Parent p = new Child();
p.show();  // prints "Child" (dynamic binding)
```

Rules for Overriding:
1. Method name must be same
2. Parameter list must be same
3. Return type must be same or covariant
4. Cannot reduce visibility
5. Cannot throw new unchecked exceptions

---

## Question 4
Explain SOLID principles in object-oriented design.

**Answer:** SOLID Principles:

S - Single Responsibility:
- Class should have one reason to change
- One task per class

Bad:
```java
class User {
    void save() { }      // persistence
    void validate() { }  // validation
    void print() { }     // display
}
```

Good:
```java
class User { }
class UserRepository { void save() { } }
class UserValidator { void validate() { } }
class UserPrinter { void print() { } }
```

O - Open/Closed:
- Open for extension, closed for modification
- Use inheritance, polymorphism

L - Liskov Substitution:
- Subclass should be substitutable for parent
- Child must honor parent's contract

I - Interface Segregation:
- Many specific interfaces > one general
- Don't force unused methods

D - Dependency Inversion:
- Depend on abstractions, not concretions
- Use interfaces

Example:
```java
// Bad
class MySQLDatabase {
    void connect() { }
}

// Good
interface Database {
    void connect();
}

class MySQL implements Database { }
class PostgreSQL implements Database { }

class Service {
    Database db;  // depends on abstraction
    Service(Database db) { this.db = db; }
}
```

---

## Question 5
Explain design patterns - Singleton and Factory with implementations.

**Answer:** Singleton Pattern:
- One instance of class globally
- Use: Logger, Config, Connection pool

Implementation:
```java
class Singleton {
    private static Singleton instance;
    
    private Singleton() { }  // private constructor
    
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}

// Usage
Singleton s1 = Singleton.getInstance();
Singleton s2 = Singleton.getInstance();
// s1 == s2 (same instance)
```

Factory Pattern:
- Creates objects without specifying exact class
- Use: Object creation based on conditions

Implementation:
```java
interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() { System.out.println("Circle"); }
}

class Square implements Shape {
    public void draw() { System.out.println("Square"); }
}

class ShapeFactory {
    public static Shape getShape(String type) {
        if (type.equals("circle"))
            return new Circle();
        else if (type.equals("square"))
            return new Square();
        return null;
    }
}

// Usage
Shape s = ShapeFactory.getShape("circle");
s.draw();
```

---

## Question 6
Explain the concept of composition over inheritance.

**Answer:** Composition:
- "Has-a" relationship
- Contains other objects as fields
- More flexible than inheritance

Example:
```java
class Engine {
    void start() { System.out.println("Engine starts"); }
}

class Car {
    private Engine engine;  // Car HAS engine
    
    Car() {
        engine = new Engine();
    }
    
    void drive() {
        engine.start();
        System.out.println("Car drives");
    }
}
```

Inheritance:
- "Is-a" relationship
- Child inherits from parent

Comparison:
Composition:
- Flexible (change at runtime)
- Loose coupling
- Favor composition over inheritance

Inheritance:
- Tight coupling
- Changes affect children
- Use when truly "is-a"

When to Use:
- Use inheritance for true "is-a"
- Use composition for "has-a" or "uses"
- Composition preferred for flexibility

---

## Question 7
Explain polymorphism in OOP with runtime and compile-time examples.

**Answer:** Compile-time Polymorphism (Overloading):
- Method overloading
- Operator overloading (C++)

Example:
```java
class Math {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}
```

Runtime Polymorphism (Overriding):
- Method overriding
- Achieved through inheritance and upcasting

Example:
```java
class Animal {
    void sound() { System.out.println("Some sound"); }
}

class Dog extends Animal {
    void sound() { System.out.println("Bark"); }
}

class Cat extends Animal {
    void sound() { System.out.println("Meow"); }
}

public class Main {
    public static void main(String[] args) {
        Animal a;
        
        a = new Dog();
        a.sound();  // Bark
        
        a = new Cat();
        a.sound();  // Meow
    }
}
```

Dynamic Method Dispatch:
- JVM decides which method to call at runtime
- Based on actual object type, not reference type

---

## Question 8
Explain access modifiers in OOP with their scope.

**Answer:** Access Modifiers:

1. private:
   - Scope: Same class only
   - Most restrictive
   ```java
   class A {
       private int x = 10;
   }
   // x accessible only in class A
   ```

2. default (package-private):
   - Scope: Same package
   ```java
   class A {  // no modifier
       int x = 10;
   }
   // Accessible in same package
   ```

3. protected:
   - Scope: Same package + subclasses
   ```java
   protected int x = 10;
   ```

4. public:
   - Scope: Anywhere
   ```java
   public int x = 10;
   ```

Summary Table:
Modifier    | Class | Package | Subclass | World
------------|-------|---------|----------|-------
private     | ✓     | ✗       | ✗        | ✗
default     | ✓     | ✓       | ✗        | ✗
protected   | ✓     | ✓       | ✓        | ✗
public      | ✓     | ✓       | ✓        | ✓

---

## Question 9
Explain the Observer design pattern with implementation.

**Answer:** Observer Pattern:
- One-to-many dependency
- When one object changes, all dependents notified
- Use: Event handling, MVC

Components:
1. Subject (Observable): Maintains list of observers
2. Observer: Interface for updates

Implementation:
```java
// Observer interface
interface Observer {
    void update(String message);
}

// Subject
class NewsAgency {
    private List<Observer> observers = new ArrayList<>();
    private String news;
    
    public void subscribe(Observer o) {
        observers.add(o);
    }
    
    public void unsubscribe(Observer o) {
        observers.remove(o);
    }
    
    public void setNews(String news) {
        this.news = news;
        notifyAll();
    }
    
    private void notifyAll() {
        for (Observer o : observers) {
            o.update(news);
        }
    }
}

// Concrete Observer
class NewsChannel implements Observer {
    private String name;
    
    NewsChannel(String name) {
        this.name = name;
    }
    
    public void update(String news) {
        System.out.println(name + " received: " + news);
    }
}

// Usage
NewsAgency agency = new NewsAgency();
agency.subscribe(new NewsChannel("CNN"));
agency.subscribe(new NewsChannel("BBC"));
agency.setNews("Breaking News!");
```

---

## Question 10
Explain constructor chaining and super/this keywords.

**Answer:** Constructor Chaining:
- Calling one constructor from another
- Uses this() or super()

Example:
```java
class Parent {
    Parent() {
        System.out.println("Parent default");
    }
    
    Parent(int x) {
        System.out.println("Parent param: " + x);
    }
}

class Child extends Parent {
    Child() {
        super();  // calls Parent()
        System.out.println("Child default");
    }
    
    Child(int x) {
        super(x);  // calls Parent(int)
        System.out.println("Child param: " + x);
    }
}
```

this keyword:
- Reference to current object
- Used to differentiate instance variables

```java
class A {
    int x;
    
    A(int x) {
        this.x = x;  // this.x is instance variable
    }
}
```

super keyword:
- Reference to parent class
- Used to access parent members

```java
class Parent {
    void show() { System.out.println("Parent"); }
}

class Child extends Parent {
    void show() {
        super.show();  // calls Parent's show
        System.out.println("Child");
    }
}
```

Rules:
- this() or super() must be first statement
- Cannot use both in same constructor
- Default: super() called implicitly

---

*End of Object-Oriented Programming Detailed Questions*
