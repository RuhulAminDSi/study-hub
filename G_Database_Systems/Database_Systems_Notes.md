# Database Systems - Study Notes

## Table of Contents
1. [Introduction to Databases](#1-introduction-to-databases)
2. [Data Models](#2-data-models)
3. [ER Model](#3-er-model)
4. [Relational Model](#4-relational-model)
5. [Normalization](#5-normalization)
6. [SQL](#6-sql)
7. [Transaction Management](#7-transaction-management)
8. [Concurrency Control](#8-concurrency-control)

---

## 1. Introduction to Databases

### What is a Database?
- Organized collection of data
- Stored electronically
- Managed by DBMS

### DBMS (Database Management System)
- Software to create and manage databases
- Examples: MySQL, Oracle, SQL Server, PostgreSQL

### Types of Databases
- **Relational**: Tables with rows/columns
- **NoSQL**: Document, Key-Value, Graph, Column-family
- **Object-Oriented**: Objects as in OOP
- **Hierarchical**: Tree structure
- **Network**: Graph structure

---

## 2. Data Models

### Three-Level Architecture
1. **External Level**: User view
2. **Conceptual Level**: Logical structure
3. **Internal Level**: Physical storage

### Schema vs Instance
- **Schema**: Structure (blueprint)
- **Instance**: Actual data

---

## 3. ER Model

### Entities
- **Entity**: Object with independent existence
- **Entity Set**: Collection of similar entities
- **Weak Entity**: Depends on another entity

### Attributes
- **Simple**: Single value
- **Composite**: Multiple sub-attributes
- **Derived**: Calculated from other attributes
- **Multi-valued**: Multiple values

### Keys
- **Candidate Key**: Minimal superkey
- **Primary Key**: Selected candidate key
- **Alternate Key**: Unselected candidate key
- **Foreign Key**: References another table

### Relationships
- **Degree**: Number of entities involved
- **Cardinality**: 1:1, 1:N, M:N
- **Participation**: Total or Partial

### ERD Symbols
```
Rectangle: Entity
Ellipse: Attribute
Diamond: Relationship
Double Rectangle: Weak Entity
Double Diamond: Identifying Relationship
```

---

## 4. Relational Model

### Terminology
- **Relation**: Table
- **Tuple**: Row
- **Attribute**: Column
- **Domain**: Set of allowed values
- **Degree**: Number of attributes
- **Cardinality**: Number of tuples

### Integrity Rules
1. **Entity Integrity**: Primary key cannot be NULL
2. **Referential Integrity**: Foreign key must reference valid primary key
3. **Domain Integrity**: All values follow domain constraints

### Relational Algebra Operations
1. **Select (σ)**: Choose rows
2. **Project (π)**: Choose columns
3. **Union (∪)**: Combine sets
4. **Difference (-)**: Remove
5. **Cartesian Product (×)**: Combine all combinations
6. **Rename (ρ)**: Change names

### Extended Operations
- **Join (⋈)**: Combine related tuples
- **Natural Join**: Join on common attributes
- **Outer Join**: Include unmatched tuples

---

## 5. Normalization

### Purpose
- Eliminate redundancy
- Avoid anomalies (Insert, Update, Delete)
- Ensure data integrity

### Normal Forms

| Form | Rule | Purpose |
|------|------|---------|
| **1NF** | Atomic values, no repeating groups | Eliminate multi-valued attributes |
| **2NF** | 1NF + No partial dependencies | Eliminate redundant data |
| **3NF** | 2NF + No transitive dependencies | Eliminate transitive dependencies |
| **BCNF** | 3NF + Every determinant is a candidate key | Stronger normalization |
| **4NF** | BCNF + No multi-valued dependencies | Eliminate multi-valued dependencies |
| **5NF** | 4NF + No join dependencies | Preserve dependencies |

### Functional Dependency
- **X → Y**: X determines Y
- **Full FD**: X → Y and no proper subset of X determines Y
- **Transitive**: X → Y, Y → Z, then X → Z

### Anomalies
- **Insert**: Cannot add data without related data
- **Update**: Same data stored in multiple places
- **Delete**: Losing unrelated data when deleting

---

## 6. SQL

### Data Types
- **Numeric**: INT, FLOAT, DECIMAL
- **String**: CHAR, VARCHAR, TEXT
- **Date**: DATE, DATETIME, TIMESTAMP
- **Boolean**: BOOLEAN

### DDL (Data Definition Language)
```sql
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints
);
ALTER TABLE table_name ADD column_name datatype;
DROP TABLE table_name;
```

### DML (Data Manipulation Language)
```sql
SELECT column1, column2 FROM table_name WHERE condition;
INSERT INTO table_name VALUES (value1, value2);
UPDATE table_name SET column = value WHERE condition;
DELETE FROM table_name WHERE condition;
```

### DQL (Data Query Language)
- SELECT with various clauses

### DCL (Data Control Language)
```sql
GRANT permission ON object TO user;
REVOKE permission ON object FROM user;
```

### SQL Functions
- **Aggregate**: COUNT, SUM, AVG, MIN, MAX
- **Scalar**: UPPER, LOWER, LENGTH, SUBSTRING
- **Date**: NOW, DATE, YEAR, MONTH

### Joins
```sql
-- Inner Join
SELECT * FROM A INNER JOIN B ON A.id = B.a_id;

-- Left Join
SELECT * FROM A LEFT JOIN B ON A.id = B.a_id;

-- Right Join
SELECT * FROM A RIGHT JOIN B ON A.id = B.a_id;

-- Full Outer Join
SELECT * FROM A FULL OUTER JOIN B ON A.id = B.a_id;
```

### Subqueries
- Nested SELECT statements
- Can be used in WHERE, FROM, SELECT

### Views
- Virtual table based on query
- Does not store data physically

---

## 7. Transaction Management

### ACID Properties
1. **Atomicity**: All or nothing
2. **Consistency**: Valid state to valid state
3. **Isolation**: Concurrent transactions seem serial
4. **Durability**: Committed data permanent

### Transaction States
```
Active → Partially Committed → Committed
                ↓
           Failed → Aborted
```

### Commit and Rollback
- **COMMIT**: Save changes permanently
- **ROLLBACK**: Undo changes

---

## 8. Concurrency Control

### Problems with Concurrency
1. **Lost Update**: Two transactions update same data
2. **Dirty Read**: Read uncommitted data
3. **Non-repeatable Read**: Different values on re-read
4. **Phantom Read**: New rows appear on re-read

### Locking
- **Shared Lock (S)**: Read only
- **Exclusive Lock (X)**: Read and write
- **Lock Levels**: Database, Table, Page, Row

### Isolation Levels
| Level | Dirty Read | Non-repeatable | Phantom |
|-------|-----------|----------------|---------|
| Read Uncommitted | Yes | Yes | Yes |
| Read Committed | No | Yes | Yes |
| Repeatable Read | No | No | Yes |
| Serializable | No | No | No |

### Protocols
- **Two-Phase Locking (2PL)**: Growing + Shrinking phase
- **Timestamp Ordering**: Use timestamps instead of locks

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| Primary Key | Unique, not null |
| Foreign Key | References another table |
| Normalization | Eliminate redundancy |
| SQL | Standard database language |
| ACID | Atomicity, Consistency, Isolation, Durability |
| Transaction | Unit of work |
| Lock | Mechanism for concurrency |

---

*Last Updated: 2026*
*Subject: Database Systems*
