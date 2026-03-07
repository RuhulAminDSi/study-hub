# Database Systems - Detailed Review Questions

---

## Question 1
Explain database normalization with normal forms.

**Answer:** Normalization:
- Process of organizing data
- Reduces redundancy
- Avoids anomalies

Anomalies:
1. Insert: Can't add data without related data
2. Update: Same data in multiple places
3. Delete: Lose unrelated data

Normal Forms:

1NF (First Normal Form):
- Atomic values (no repeating groups)
- Each column has single value

Example (not 1NF):
Student | Subjects
John    | Math, Science
Fix: Create separate rows or Subject table

2NF (Second Normal Form):
- 1NF + No partial dependencies
- Non-key attributes depend on entire key

Example (not 2NF):
OrderID, ProductID → ProductName, Quantity, CustomerID
- ProductName depends on ProductID only (partial)
- Fix: Separate Product table

3NF (Third Normal Form):
- 2NF + No transitive dependencies
- Non-key → key → non-key eliminated

Example (not 3NF):
StudentID → DeptID → DeptName
- DeptName transitively depends on StudentID
- Fix: Separate Department table

BCNF (Boyce-Codd):
- Every determinant is a candidate key
- Stricter than 3NF

---

## Question 2
Explain ACID properties of transactions.

**Answer:** ACID Properties:

1. Atomicity:
- "All or nothing"
- Transaction either completes fully or fails completely
- Example: Bank transfer
  - Debit from account A
  - Credit to account B
  - Both must succeed or both fail
- Implemented by logging

2. Consistency:
- Valid state to valid state
- Database rules maintained
- Constraints, triggers enforced
- Example: Balance cannot be negative

3. Isolation:
- Concurrent transactions appear serial
- Intermediate results not visible
- Prevents interference
- Implemented by locking

4. Durability:
- Committed data is permanent
- Survives system failure
- Written to persistent storage
- Implemented by write-ahead logging

Transaction States:
- Active → Partially Committed → Committed
                 ↓
               Failed → Aborted

---

## Question 3
Explain join types with examples.

**Answer:** Joins:
- Combine rows from two tables
- Based on related columns

1. INNER JOIN:
- Returns matching rows from both tables

```sql
SELECT * FROM Customers c
INNER JOIN Orders o ON c.CustomerID = o.CustomerID
```

2. LEFT (OUTER) JOIN:
- All from left + matching from right

```sql
SELECT * FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
```

3. RIGHT (OUTER) JOIN:
- All from right + matching from left

```sql
SELECT * FROM Customers c
RIGHT JOIN Orders o ON c.CustomerID = o.CustomerID
```

4. FULL (OUTER) JOIN:
- All rows from both tables

```sql
SELECT * FROM Customers c
FULL OUTER JOIN Orders o ON c.CustomerID = o.CustomerID
```

5. CROSS JOIN:
- Cartesian product
- Each row from first × each from second

```sql
SELECT * FROM Customers CROSS JOIN Orders
```

6. SELF JOIN:
- Table joins with itself

```sql
SELECT a.EmployeeName, b.ManagerName
FROM Employees a, Employees b
WHERE a.ManagerID = b.EmployeeID
```

---

## Question 4
Explain indexing in databases with types.

**Answer:** Indexing:
- Improves query speed
- Like book index
- Trade-off: storage + update overhead

Types:

1. Single-column Index:
```sql
CREATE INDEX idx_name ON Employees(Name);
```

2. Composite Index:
```sql
CREATE INDEX idx_name_dept ON Employees(Name, Department);
```

3. Unique Index:
```sql
CREATE UNIQUE INDEX idx_email ON Users(Email);
```

4. Primary Index:
- Automatically created for primary key
- Clustered

5. Clustered vs Non-Clustered:

Clustered:
- Sorts physical data
- One per table
- Example: Dictionary (one arrangement)

Non-Clustered:
- Separate from data
- Multiple per table
- Example: Book index (many indexes)

B-Tree (Balanced Tree):
- Most common
- O(log n) search
- Ordered, balanced

When to Use:
- Columns in WHERE
- JOIN conditions
- ORDER BY
- High selectivity

When NOT to Use:
- Small tables
- Frequently updated columns
- Low cardinality (few values)

---

## Question 5
Explain concurrency control problems.

**Answer:** Concurrency Problems:

1. Lost Update:
- Two transactions update same data
- One update lost
- T1: Read X=10
- T2: Read X=10
- T1: Write X=20
- T2: Write X=30
- Result: X=30 (T1's update lost)

2. Dirty Read:
- Read uncommitted data
- T1: Update X=20
- T2: Read X=20
- T1: Rollback X=10
- T2 has invalid data

3. Non-repeatable Read:
- Same query returns different results
- T1: Read X=10
- T2: Update X=20
- T1: Read X=20
- T1 gets different value

4. Phantom Read:
- New rows appear between reads
- T1: SELECT * FROM employees WHERE dept='IT'
- T2: INSERT new IT employee
- T1: SELECT again
- New row appears

Solutions:
- Locking
- Timestamp ordering
- Isolation levels

---

## Question 6
Explain ER model components.

**Answer:** ER (Entity-Relationship) Model:

Components:

1. Entity:
- Object with existence
- Student, Employee, Product
- Rectangle in ERD

2. Entity Set:
- Collection of similar entities
- Students: all student entities

3. Attributes:
- Properties of entity
- Types:
  - Simple: Single value
  - Composite: Multi-part (Address: city, street)
  - Derived: Calculated (Age from DOB)
  - Multi-valued: Multiple values (Phone numbers)
- Ellipse in ERD

4. Keys:
- Candidate Key: Minimal superkey
- Primary Key: Selected candidate key
- Foreign Key: References another table

5. Relationships:
- Association between entities
- Types:
  - One-to-One (1:1)
  - One-to-Many (1:N)
  - Many-to-Many (M:N)
- Diamond in ERD

6. Cardinality:
- Number of entities in relationship
- 1, N, M notation

7. Participation:
- Total: Entity must participate
- Partial: Optional

---

## Question 7
Explain SQL aggregate functions with examples.

**Answer:** Aggregate Functions:
- Operate on groups of rows
- Return single value

1. COUNT:
```sql
SELECT COUNT(*) FROM Employees;
SELECT COUNT(DISTINCT Department) FROM Employees;
```

2. SUM:
```sql
SELECT SUM(Salary) FROM Employees;
SELECT SUM(Salary) FROM Employees GROUP BY Department;
```

3. AVG:
```sql
SELECT AVG(Salary) FROM Employees;
```

4. MIN/MAX:
```sql
SELECT MIN(Salary), MAX(Salary) FROM Employees;
```

5. GROUP BY:
```sql
SELECT Department, COUNT(*) as Count, AVG(Salary) as AvgSalary
FROM Employees
GROUP BY Department;
```

6. HAVING:
- Filter groups (like WHERE for groups)
```sql
SELECT Department
FROM Employees
GROUP BY Department
HAVING COUNT(*) > 5;
```

7. ORDER BY with aggregates:
```sql
SELECT Department, SUM(Salary) as Total
FROM Employees
GROUP BY Department
ORDER BY Total DESC;
```

---

## Question 8
Explain triggers in databases.

**Answer:** Triggers:
- Automatic actions
- Fired on events (INSERT, UPDATE, DELETE)
- Stored in database

Types:
- BEFORE: Execute before event
- AFTER: Execute after event
- INSTEAD OF: Replace event (for views)

Example - Audit Trail:
```sql
CREATE TRIGGER Employee_Audit
AFTER UPDATE ON Employees
FOR EACH ROW
BEGIN
    INSERT INTO AuditLog (TableName, Action, OldValue, NewValue, ChangeDate)
    VALUES ('Employees', 'UPDATE', OLD.Salary, NEW.Salary, SYSDATE);
END;
```

Use Cases:
- Auditing
- Enforcing business rules
- Cascading changes
- Automatic calculations

Example - Auto-update:
```sql
CREATE TRIGGER Update_Total
AFTER INSERT ON OrderItems
FOR EACH ROW
BEGIN
    UPDATE Orders
    SET Total = Total + NEW.Quantity * NEW.Price
    WHERE OrderID = NEW.OrderID;
END;
```

Considerations:
- Performance impact
- Recursive triggers
- Testing complexity

---

## Question 9
Explain views in databases.

**Answer:** Views:
- Virtual table
- Based on query
- No physical storage

Creating Views:
```sql
CREATE VIEW EmployeeDetails AS
SELECT e.EmployeeID, e.Name, d.DepartmentName, e.Salary
FROM Employees e
JOIN Departments d ON e.DeptID = d.DeptID;
```

Using Views:
```sql
SELECT * FROM EmployeeDetails WHERE Salary > 50000;
```

Types:
1. Simple View:
- Based on single table
- Can be updatable

2. Complex View:
- Multiple tables
- Aggregations
- Usually not updatable

3. Materialized View:
- Physically stored
- Refreshed periodically
- For performance

Advantages:
- Security: Restrict data access
- Simplicity: Complex queries made simple
- Abstraction: Underlying changes hidden

Disadvantages:
- Performance: Additional layer
- Update restrictions
- Dependency issues

---

## Question 10
Explain the differences between DBMS and RDBMS.

**Answer:** DBMS (Database Management System):
- Manages database
- No relations between tables
- No SQL (usually)
- Example: FoxPro, dBase

RDBMS (Relational Database Management System):
- Based on relational model
- Tables with relationships
- Uses SQL
- Example: MySQL, Oracle, PostgreSQL

Comparison:
Feature           | DBMS      | RDBMS
-----------------|-----------|-----------
Data Structure   | Hierarchical/Network | Tables (relations)
Relationship    | No        | Yes (FK)
Integrity       | Limited   | ACID, constraints
Language        | Proprietary| SQL (standard)
Multi-user      | Limited   | Full support
Normalization   | Not required | Required
Transaction     | Basic     | Full ACID
Scalability     | Limited   | Better
Examples        | dBase     | MySQL, Oracle

---

*End of Database Systems Detailed Questions*
