Date: Sat, 18 Oct 2025 11:07:29 +0000 (UTC)
Message-ID: 
Subject: Exported From Confluence
MIME-Version: 1.0
Content-Type: multipart/related; 
	boundary="----=_Part_526_507440834.1760785649195"

------=_Part_526_507440834.1760785649195
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: quoted-printable
Content-Location: file:///C:/exported.html

    
    Database Systems
    
    
        
            1024x640
            72
            
        
        
            Print
            90
            
        
    
    
    
                
    

    # Database Systems

    
        
- 
Concepts of database systems;

- 
Data Models: Entity-Relationship model, Relational model; `- 
Query Languages: Relational algebra, SQL; `

- 
Constraints and triggers;

- 
Functional dependencies and normalization; 

- 
File organization and data storage;

- 
Indexing: primary and secondary indexes, B+ trees, hash tables; `BC=
S`

- 
Query optimization;

- 
Transaction management;

- 
Recovery;

- 
Concurrency control;

- 
Access control and security; 

- 
Semi-structured database: XML, XPath, XQuery;

- 
Object oriented and object relational databases.

- 
Concepts of database systems;

Got it =F0=9F=91=8D Let's move to **Database Systems Conce=
pts**.

---

# =F0=9F=93=
=8C Concepts of Database Systems

A **Database System** is a structured way to store, manage,=
 and retrieve data efficiently. It combines **databases (the data its=
elf)** with **DBMS (Database Management System - the s=
oftware to manage data)**.

---

## =F0=9F=94=91 Key Concept=
s

### 1. **Database**

- 
A **collection of related data** organized to make access, =
retrieval, and update easy.

- 
Example: A university database stores students, courses, and enrollment =
data.

---

### 2. **DBMS=
 (Database Management System)**

- 
Software that manages databases.

- 
Provides operations: **CRUD** (Create, Read, Update, Delete=
).

- 
Examples: **MySQL, Oracle, PostgreSQL, MongoDB, SQL Server.

---

### 3. Data Models**
Ways to represent data:

- 
**Hierarchical Model** - tree-like (parent-child).

- 
**Network Model** - graph-like with relationships.

- 
**Relational Model (most popular)** - uses **=
tables (relations)** with rows and columns.

- 
**Object-oriented Model** - stores objects with att=
ributes & methods.

- 
**NoSQL Models** - key-value, document, column, or =
graph based.

---

4. **Schemas and Ins=
tances**

- 
**Schema**: Structure/blueprint of the database (like a pla=
n).

Example: Student(id, name, dept).

- 
**Instance**: Actual data at a point in time.

Example: (101, "Alice", "CSE").

---

### 5. **Keys**

- 
**Primary Key** -> uniquely identifies a row.

**Foreign Key** -> references a key in another table=
 (to maintain relationships).

- 
**Candidate Key** -> any attribute that can be a pri=
mary key.

- 
**Composite Key** -> key formed from multiple attrib=
utes.

---

### 6. **Constraints**
Rules to maintain **data integrity**:

- 
**Entity Integrity** -> primary key must be unique &=
amp; not null.

- 
**Referential Integrity** -> foreign key must match =
a primary key in another table.

- 
**Domain Constraint** -> values must be valid (e.g.,=
 age > 0).

---

7. **Normalization

- 
Process of reducing redundancy and improving data consistency.

- 
Steps: 1NF -> 2NF -> 3NF -> BCNF**.

---

### 8. **Transactions**

- 
A transaction =3D sequence of database operations treated as a single un=
it.

- 
Must follow **ACID properties**:

**Atomicity** -> all or nothing.

- 
**Consistency** -> maintains valid state.

- 
**Isolation** -> transactions don't interfer=
e.

- 
**Durability** -> results persist even after failure=
.

---

9. **Concurrency Cont=
rol**

- 
Ensures multiple users can access the DB at the same time without confli=
cts.

- 
Methods: **Locking, Timestamp ordering, Optimistic concurrency.

---

### 10. Database Langua=
ges**

- 
**DDL (Data Definition Language)** - defines schema=
 (CREATE, DROP, ALTER).

- 
**DML (Data Manipulation Language)** - modifies dat=
a (INSERT, UPDATE, DELETE).

- 
**DQL (Data Query Language)** - retrieves data (SEL=
ECT).

- 
**DCL (Data Control Language)** - security (GRANT, =
REVOKE).

---

### 11. **Databa=
se Storage and Indexing**

- 
Data stored on disk in **files and pages**.

- 
**Indexes** improve search speed (like a book's ind=
ex).

---

### 12. **Database Securit=
y**

- 
Protects against unauthorized access.

- 
Uses authentication, encryption, access control.

---

### 13. **Types of Databas=
es**

- 
**Relational (SQL)** - MySQL, PostgreSQL.

- 
**NoSQL** - MongoDB, Cassandra, Neo4j.

- 
**Distributed** - Google Spanner.

- 
**Cloud DBs** - Amazon RDS, Firebase.

---

✓ **In short**:

A **Database System** =3D Database (data) + DBMS (software).
It ensures **efficient storage, easy retrieval, security, consistency=
, and concurrency control**.

---

Would you like me to also prepare a **diagram (3-level architectur=
e: Internal -> Conceptual -> External)** that is stand=
ard in database system concepts?

- 
Data Models: Entity-Relationship model, Relational model; `Perfect =F0=9F=91=8D Let's go deeper into **Data Models, focusing on Entity-Relationship (E-R) model and the Relational model**.

---

# =F0=9F=93=8C Data Models
A **Data Model** provides a framework for describing the st=
ructure of a database, the relationships between data, and the constraints =
that apply.

The two most fundamental models are:

---

## 1. Entity-Relationship (E-R) Model

The **E-R model** is a **high-level (conceptual) data model used to design a database before implementing it.

### =F0=9F=94=91 Key Concep=
ts:

- 
Entity** -> Object in the real world with an indep=
endent existence.

Example: Student, Course, Teacher.

- 
Represented by a **rectangle**.

- 
**Attributes** -> Properties of entities.

Example: Student(name, roll, dept).

- 
Represented by an **oval**.

- 
**Entity Set** -> Collection of similar entities. (e=
.g., all students).

- 
**Primary Key** -> Uniquely identifies each entity.

- 
**Relationship** -> Association between entities.

Example: Student *enrolls* in Course.

- 
Represented by a **diamond**.

- 
**Cardinality** -> Defines participation:

**1:1** (One-to-One) -> e.g., Person =E2=86=94 Passp=
ort

- 
**1:N** (One-to-Many) -> e.g., Department =E2=86=94 =
Students

- 
**M:N** (Many-to-Many) -> e.g., Student =E2=86=94 Co=
urses

---

### ✓ Example:

**University E-R Diagram**

- 
Entities: Student, Course

- 
Attributes: Student(id, name, dept), Course(code, title, credit)

Relationship: *Enrolls* (between Student and Course)

This diagram is later converted into **Relational tables**.=

---

## 2. **Relational Model

The Relational Model** is a **logical model proposed by E. F. Codd (1970). It represents data in the form of =
tables (relations)**.

### =F0=9F=94=91 Key Conc=
epts:

- 
**Relation (Table)** -> A set of tuples (rows) with =
attributes (columns).

Example:

**Student Table**

ID Name Dept 1 Alice CSE 2 Bob EEE

- 
**Tuple (Row)** -> A record (e.g., (1, Alice, CSE)).=

- 
**Attribute (Column)** -> Field (e.g., Name, Dept).

- 
**Domain** -> Allowed values of an attribute.

**Keys**:

**Primary Key**: Unique identifier (Student.ID).

- 
**Foreign Key**: Refers to another table's key.

=

- 
**Integrity Constraints**:

**Entity Integrity** -> Primary Key != NULL.

- 
**Referential Integrity** -> Foreign Key must match =
a valid record.

---

### ✓ Example:

From the E-R model -> convert to tables:

- 
**Student(ID, Name, Dept)**

- 
**Course(Code, Title, Credit)**

- 
**Enrolls(Student_ID, Course_Code)**

Here, Student_ID` is a foreign key referencing `Student=
(ID)` and `Course_Code` references `Course(Code).

---

## =F0=9F=93=8A Difference Between E-R Model & Relational Model

| Aspect | E-R Model (Conceptual) | Relational Model (Logical) |
|---|---|---|
| Purpose | Database design (planning stage) | Database implementation (actual storage) |
| Representation | Entities, attributes, relationships | Tables, rows, columns |
| Abstraction level | High-level (human friendly) | Low-level (machine implementable) |
| Example | Student --enrolls-> Course | Student(ID, Name, Dept), Enrolls(Student_ID, Course_Code) |

---

=F0=9F=91=89 So, the **E-R model** is used to **desig=
n**, and the **Relational model** is used to **im=
plement** databases.

---

Do you want me to also draw a **diagram showing how an E-R model i=
s mapped to the relational model** (like converting entities/relatio=
nships into tables)?

Perfect =F0=9F=91=8D Let's carefully go through **Normaliz=
ation** in DBMS, step by step.

---

=F0=9F=93=8C Normalization in DBMS

### =F0=9F=94=8E Definition:=

Normalization is the **process of organizing data** in a da=
tabase to:

- 
Reduce **data redundancy** (duplicate data).

- 
Improve **data consistency**.

- 
Ensure **data integrity**.

It is done by decomposing large tables into smaller related tables and a=
pplying **normal forms** (1NF, 2NF, 3NF, BCNF, etc.).

---

1=EF=B8=
=8F **First Normal Form (1NF)**

- 
Rule: **Each column must have atomic (indivisible) values.

- 
No repeating groups or arrays.

✓ Example:**

Bad table (Not in 1NF):

| StudentID | Name | Courses |
|---|---|---|
| 1 | Alice | CSE101, MAT201 |
| 2 | Bob | CSE101 |

Problem -> Multiple courses in one column (not atomic).

=F0=9F=91=89 Convert to **1NF**:

| StudentID | Name | Course |
|---|---|---|
| 1 | Alice | CSE101 |
| 1 | Alice | MAT201 |
| 2 | Bob | CSE101 |

---

## 2=EF=B8=
=8F **Second Normal Form (2NF)**

- 
Rule: Must be in **1NF**.

- 
**No partial dependency**: A non-key attribute should depen=
d on the **whole primary key**, not part of it.

- 
Applies to tables with **composite primary keys**.

✓ **Example:**

Suppose a table:

| StudentID | CourseID | StudentName | CourseName |
|---|---|---|---|

Primary Key =3D (StudentID, CourseID).

Problem -> StudentName` depends only on `Student=
ID`, and `CourseName` depends only on `CourseID.

=F0=9F=91=89 Convert to **2NF**:

- 
**Student(StudentID, StudentName)**

- 
**Course(CourseID, CourseName)**

- 
**Enrollment(StudentID, CourseID)**

---

## 3=EF=B8=
=8F **Third Normal Form (3NF)**

- 
Rule: Must be in **2NF**.

- 
**No transitive dependency**: Non-key attributes should not=
 depend on other non-key attributes.

✓ **Example:**

Table:

| StudentID | Name | DeptID | DeptName |
|---|---|---|---|

Problem -> DeptName` depends on `DeptID`, =
not directly on `StudentID`.

=F0=9F=91=89 Convert to **3NF**:

- 
**Student(StudentID, Name, DeptID)**

- 
**Department(DeptID, DeptName)**

---

## 4=
 **Boyce-Codd Normal Form (BCNF)**

- 
Rule: Must be in **3NF**.

- 
For every functional dependency (X -> Y), **X must be a sup=
er key**.

- 
Stricter than 3NF.

✓ **Example:**

Table:

| Teacher | Subject | Department |
|---|---|---|

Functional Dependencies:

- 
Teacher -> Department

- 
Subject -> Department

Here, neither Teacher nor Subject is a **superkey** =E2=86=
=92 violation of BCNF.

=F0=9F=91=89 Convert to **BCNF**:

- 
**Teacher(Teacher, Department)**

- 
**Subject(Subject, Department)**

---

# =F0=9F=93=8A Su=
mmary of Normal Forms

| Normal Form | Removes... | Focus |
|---|---|---|
| **1NF** | Repeating groups, non-atomic values | Atomic attributes |
| **2NF** | Partial dependency | Attributes depend on whole primary key |
| **3NF** | Transitive dependency | Non-key attributes depend only on key |
| **BCNF** | Anomalies due to functional dependency | Every determinant is a superkey |

---

=F0=9F=91=89 Would you like me to also add a **step-by-step worked=
-out example** (one big table -> apply 1NF -> 2NF =E2=
=86=92 3NF -> BCNF) so you can clearly see how a table is normalized=
?

Got it =F0=9F=91=8D Let's cover **ACID Properties**=
 of database transactions in a **brief but informative** way.

---

# =F0=9F=94=91 ACID Properties in DBMS

Database transactions must follow **ACID** to ensure reliab=
ility, correctness, and consistency.

---

## 1 **Atomicity** - *=
"All or Nothing"*

- 
A transaction is **atomic**, meaning it is **indivisi=
ble**.

- 
Either the **whole transaction executes** or **none o=
f it does**.

- 
If any step fails, all previous changes are **rolled back**=
.

✓ Example: Money transfer

- 
Debit =E2=82=B9500 from Account A

- 
Credit =E2=82=B9500 to Account B

If credit fails, debit must rollback.

---

## 2 **Consistency** -=
 *"Preserve Rules"*

- 
A transaction should bring the database from **one valid state to =
another valid state**.

- 
Must follow all **constraints, triggers, cascades**.

✓ Example: If total money in bank =3D =E2=82=B91,00,000, after a=
ny transaction it should still be =E2=82=B91,00,000.

---

## 3 **Isolation** - "No Interference"

Multiple transactions should execute as if they were running **one=
 after another (serially)**.

- 
Intermediate states of a transaction must be **invisible** =
to others.

✓ Example: If A is transferring money while B is checking balanc=
e, B should not see the **half-completed state**.

---

## 4 **Durability** -=
 *"Permanent Effect"*

- 
Once a transaction is **committed**, the changes are permanent, even if the system crashes.

- 
Achieved using **logs, backups, recovery systems**.

✓ Example: If money transfer is completed and committed, the upd=
ate remains even after power failure.

---

# =F0=9F=93=8A Quick Summary Table

| Property | Ensures |
|---|---|
| **Atomicity** | All or nothing execution |
| **Consistency** | Data integrity before & after transaction |
| **Isolation** | Transactions don't interfere |
| **Durability** | Results survive crashes |

---

=F0=9F=91=89 Do you want me to also add **real-world scenarios (li=
ke online shopping, ticket booking, banking)** to make ACID properti=
es more intuitive?

Query Languages: Relational algebra, SQL; 

Got it =F0=9F=91=8D Let's go step by step and cover both **Relational Algebra** and **SQL**, since they are the t=
wo main **query languages** in databases.

---

# 📙=
 1. **Relational Algebra (RA)**

- 
A **theoretical language** used to describe queries in term=
s of mathematical operations on relations (tables).

- 
Works on **sets of tuples (rows)**.

- 
Basis for SQL.

- 
Helps in query optimization.

### =E2=9C=A8 Basic Operat=
ions:

- 
**Selection (=CF=83)** -> filters rows.

Example:

=CF=83 =
salary > 50000 (Employee)

-> Selects employees with salary > 50k.

- 
**Projection (=CF=80)** -> selects specific columns.=

=CF=80 =
name, salary (Employee)

-> Shows only `name` and `salary`.

- 
**Union (=E2=8B=83)** -> combines tuples from two re=
lations.

A =E2=
=8B=83 B

-> All tuples from `A` and `B` (no duplicat=
es).

- 
**Set Difference (=E2=88=92)** -> tuples in one rela=
tion but not in another.

A =E2=
=88=92 B

- 
**Cartesian Product (=C3=97)** -> combines all tuple=
s of two relations.

A =C3=
=97 B

-> Used for joins.

- 
**Rename (=CF=81)** -> renames attributes.

- 
**Joins (=E2=8B=88)**

**=CE=B8-join**: based on condition

- 
**Natural join**: automatic join on same attribute names
Example:

Employe=
e =E2=8B=88 Department

=F0=9F=91=89 Relational Algebra =3D abstract, mathematical foundation.

---

# =F0=
=9F=94=B9 2. **SQL (Structured Query Language)**

- 
A **practical language** used in real DBMS (MySQL, PostgreS=
QL, Oracle).

- 
Based on **relational algebra + relational calculus**.

Includes:

**DDL (Data Definition Language)** -> create, alter,=
 drop tables

- 
**DML (Data Manipulation Language)** -> insert, upda=
te, delete, select

- 
**DCL (Data Control Language)** -> grant, revoke per=
missions

- 
**TCL (Transaction Control Language)** -> commit, ro=
llback

---

### =E2=9C=A8 Common SQL =
Queries:

- 
**Selection (like =CF=83 in RA):**

SELECT =
*=20
FROM Employee
WHERE salary > 50000;

- 
**Projection (=CF=80 in RA):**

SELECT =
name, salary=20
FROM Employee;

- 
**Union:**

SELECT =
name FROM Employee
UNION
SELECT name FROM Manager;

- 
**Set Difference (EXCEPT in SQL):**

SELECT =
name FROM Employee
EXCEPT
SELECT name FROM Manager;

- 
**Cartesian Product:**

SELECT =
*=20
FROM Employee, Department;

- 
**Join:**

SELECT =
e.name, d.dept_name
FROM Employee e
JOIN Department d
ON e.dept_id =3D d.id;

---

# =F0=9F=94=91 **=
Main Difference**

- 
**Relational Algebra** -> **theory** (a=
bstract way to describe queries).

- 
**SQL** -> **implementation** (actual l=
anguage to query DBMS).

---

=F0=9F=91=89 Do you want me to make a **side-by-side comparison ta=
ble (RA vs SQL)** so it's easier to remember for exams/inter=
views?

Perfect =F0=9F=91=8D Here's a **side-by-side comparison of Relational Algebra (RA) vs SQL** so you can quickl=
y revise:

---

# =F0=9F=93=8A =
Relational Algebra vs SQL

| Feature | **Relational Algebra (RA)** | **SQL (Structured Query Language)** |
|---|---|---|
| **Type** | Theoretical, mathematical query language | Practical, implementation query language |
| **Purpose** | Provides **formal foundation** for queries | Used in **real DBMS** (MySQL, Oracle, PostgreSQL, etc.)

= |
| **Level** | **Procedural** -> tells *how* to get the resu=
lt | **Declarative** -> tells *what* result you wa=
nt |
| **Operations** | Selection (=CF=83), Projection (=CF=80), Union (=E2=8B=83), Difference (=
=E2=88=92), Cartesian Product (=C3=97), Join (=E2=8B=88), Rename (=CF=81) | SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, JOIN, UNION, EXCEPT, etc. |
| **Focus** | Works on **sets of tuples** (mathematical relations)

Works on **tables (relations)** in databases |
| **Duplicates** | No duplicates (set theory) | Allows duplicates unless DISTINCT is used |
| **Optimization** | Basis for query optimization in DBMS | Optimizer internally converts SQL -> RA for execution |
| **Example Query** | =CF=83 salary > 50000 (Employee) | SELECT * FROM Employee WHERE salary > 50000; |

---

✓ **Quick Note**:

- 
SQL queries are **implemented using relational algebra internally by the DBMS engine.

- 
So RA is the theory** and **SQL is the practice.

---

=F0=9F=91=89 Do you want me to also include a diagram** t=
hat shows the **flow from SQL -> Relational Algebra -> =
Execution Plan** (so it becomes very clear how DBMS processes querie=
s)?

Got it =F0=9F=91=8D You want an example with **multiple database t=
ables** (to understand how relational algebra and SQL work across th=
em). Let's build a **mini university database** exampl=
e.

---

# =F0=9F=8E=
=93 Example: University Database

We have **3 tables**:

### 1. `Students`

| StudentID | Name | Dept |
|---|---|---|
| 1 | Alice | CSE |
| 2 | Bob | EEE |
| 3 | Charlie | CSE |
| 4 | Diana | BBA |

---

### 2. `Courses`

| CourseID | CourseName | Dept |
|---|---|---|
| C1 | DBMS | CSE |
| C2 | Algorithms | CSE |
| C3 | Circuits | EEE |
| C4 | Accounting | BBA |

---

### 3. `Enrollments`

| StudentID | CourseID |
|---|---|
| 1 | C1 |
| 1 | C2 |
| 2 | C3 |
| 3 | C2 |
| 4 | C4 |

---

# 📙 Example =
Queries

### **Q1: Find names of students enrolled in "Algor=
ithms".**

**Relational Algebra (RA):**

=CF=80 =
Name ( (Students =E2=8B=88 Enrollments =E2=8B=88 Courses)=20
         =CF=83 CourseName =3D "Algorithms" (Courses) )

**SQL:**

SELECT =
s.Name
FROM Students s
JOIN Enrollments e ON s.StudentID =3D e.StudentID
JOIN Courses c ON e.CourseID =3D c.CourseID
WHERE c.CourseName =3D 'Algorithms';

✓ **Answer -> Alice, Charlie**

---

### Q2: List all students with their enrolled courses.

**RA:**

=CF=80 =
Name, CourseName (Students =E2=8B=88 Enrollments =E2=8B=88 Courses)

**SQL:**

SELECT =
s.Name, c.CourseName
FROM Students s
JOIN Enrollments e ON s.StudentID =3D e.StudentID
JOIN Courses c ON e.CourseID =3D c.CourseID;

✓ Output:

| Name | CourseName |
|---|---|
| Alice | DBMS |
| Alice | Algorithms |
| Bob | Circuits |
| Charlie | Algorithms |
| Diana | Accounting |

---

### **Q3: Find all courses offered by CSE department but =
not taken by any student.**

**RA:**

=CF=80 =
CourseName (=CF=83 Dept=3D'CSE' (Courses))=20
=E2=88=92 =CF=80 CourseName (Courses =E2=8B=88 Enrollments)

**SQL:**

SELECT =
c.CourseName
FROM Courses c
WHERE c.Dept =3D 'CSE'
AND c.CourseID NOT IN (SELECT CourseID FROM Enrollments);

✓ **Answer -> None (all CSE courses are taken).

---

=E2=9C=A8 This shows how multiple tables** can be connect=
ed using **JOINs (SQL)** or **=E2=8B=88 (RA)**.

---

=F0=9F=91=89 Do you want me to also add a **diagram (ER model + jo=
in illustration)** for these 3 tables so you can visually see how th=
ey link?

Alright =F0=9F=91=8D I'll explain **only SQL Joins (without extra things).

---

## 📙 Types o=
f SQL Joins

### 1. INNER JOIN**

- 
Returns rows where there is a match in **both tables**.

=

SELECT =
Students.StudentID, Students.Name, Enrollments.CourseID
FROM Students
INNER JOIN Enrollments ON Students.StudentID =3D Enrollments.StudentID;

---

### 2. **LEFT JOIN (=
LEFT OUTER JOIN)**

- 
Returns **all rows from the left table** and matched rows f=
rom the right.

- 
Unmatched rows -> `NULL` for right table.

SELECT =
Students.StudentID, Students.Name, Enrollments.CourseID
FROM Students
LEFT JOIN Enrollments ON Students.StudentID =3D Enrollments.StudentID;

---

### 3. **RIGHT JOI=
N (RIGHT OUTER JOIN)**

- 
Returns **all rows from the right table** and matched rows =
from the left.

- 
Unmatched rows -> `NULL` for left table.

SELECT =
Students.StudentID, Students.Name, Enrollments.CourseID
FROM Students
RIGHT JOIN Enrollments ON Students.StudentID =3D Enrollments.StudentID;

---

### 4. **FULL OUTER JOIN

- 
Returns all rows from both tables**.

- 
Unmatched rows show `NULL`.

SELECT =
Students.StudentID, Students.Name, Enrollments.CourseID
FROM Students
FULL OUTER JOIN Enrollments ON Students.StudentID =3D Enrollments.StudentID=
;

---

### 5. **CROSS JOIN**

- 
Returns the **Cartesian product** of both tables (every row=
 =C3=97 every row).

SELECT =
Students.Name, Courses.CourseName
FROM Students
CROSS JOIN Courses;

---

### 6. **SELF JOIN**

- 
Table joined with itself.

SELECT =
e1.EmployeeName AS Employee, e2.EmployeeName AS Manager
FROM Employees e1
INNER JOIN Employees e2 ON e1.ManagerID =3D e2.EmployeeID;

---

### 7. **NATURAL JOIN**

- 
Joins automatically on columns with the **same name**.

SELECT =
*
FROM Students
NATURAL JOIN Enrollments;

---

=F0=9F=91=89 These are the **main SQL joins** you'l=
l see in database systems.

Do you also want me to **add example tables with sample data so you can see the output of each join clearly?

Got it =F0=9F=91=8D You mean you want to see actual tables joine=
d together with results** (input tables + output after join).

Let's build some **sample tables** and show how differ=
ent joins work.

---

## =F0=9F=93=8C Example T=
ables

**Table 1: Students

| StudentID | Name |
|---|---|
| 1 | Alice |
| 2 | Bob |
| 3 | Charlie |
| 4 | David |

### Table 2: Enrollments

| StudentID | Course |
|---|---|
| 1 | Math |
| 2 | Science |
| 2 | English |
| 5 | History |

---

## 📙 JOIN Examp=
les

### 1. INNER JOIN**
=F0=9F=91=89 Only matching rows (StudentID present in both).

SELECT =
Students.StudentID, Name, Course
FROM Students
INNER JOIN Enrollments ON Students.StudentID =3D Enrollments.StudentID;

**Result**

| StudentID | Name | Course |
|---|---|---|
| 1 | Alice | Math |
| 2 | Bob | Science |
| 2 | Bob | English |

---

2. **LEFT JOIN**

=F0=9F=91=89 All students, with courses if available.

SELECT =
Students.StudentID, Name, Course
FROM Students
LEFT JOIN Enrollments ON Students.StudentID =3D Enrollments.StudentID;

**Result**

| StudentID | Name | Course |
|---|---|---|
| 1 | Alice | Math |
| 2 | Bob | Science |
| 2 | Bob | English |
| 3 | Charlie | NULL |
| 4 | David | NULL |

---

### 3. **RIGHT JOIN**

=F0=9F=91=89 All enrollments, with student info if available.

SELECT =
Students.StudentID, Name, Course
FROM Students
RIGHT JOIN Enrollments ON Students.StudentID =3D Enrollments.StudentID;

**Result**

| StudentID | Name | Course |
|---|---|---|
| 1 | Alice | Math |
| 2 | Bob | Science |
| 2 | Bob | English |
| NULL | NULL | History |

---

### 4. **FULL OUTER JOIN

=F0=9F=91=89 All rows from both tables.

SELECT =
Students.StudentID, Name, Course
FROM Students
FULL OUTER JOIN Enrollments ON Students.StudentID =3D Enrollments.StudentID=
;

Result**

| StudentID | Name | Course |
|---|---|---|
| 1 | Alice | Math |
| 2 | Bob | Science |
| 2 | Bob | English |
| 3 | Charlie | NULL |
| 4 | David | NULL |
| NULL | NULL | History |

---

### 5. **CROSS JOIN**
=F0=9F=91=89 Every student =C3=97 every enrollment (cartesian product).

```
SELECT =
Students.Name, Course
FROM Students
CROSS JOIN Enrollments;

```

**Result** (only a few rows shown)

| Name | Course |
|---|---|
| Alice | Math |
| Alice | Science |
| Alice | English |
| Alice | History |
| Bob | Math |
| Bob | Science |
| ... | ... |

---

Would you like me to also **draw a clear diagram** (tables =
+ arrows + result) for each join type? That way you'll **visu=
alize how tables combine**.

Got it =F0=9F=91=8D you want **only the JOIN queries** (wit=
hout extra explanations or tables).

Here they are:

-- INNE=
R JOIN
SELECT Students.StudentID, Name, Course
FROM Students
INNER JOIN Enrollments
ON Students.StudentID =3D Enrollments.StudentID;

-- LEFT JOIN
SELECT Students.StudentID, Name, Course
FROM Students
LEFT JOIN Enrollments
ON Students.StudentID =3D Enrollments.StudentID;

-- RIGHT JOIN
SELECT Students.StudentID, Name, Course
FROM Students
RIGHT JOIN Enrollments
ON Students.StudentID =3D Enrollments.StudentID;

-- FULL OUTER JOIN
SELECT Students.StudentID, Name, Course
FROM Students
FULL OUTER JOIN Enrollments
ON Students.StudentID =3D Enrollments.StudentID;

-- CROSS JOIN
SELECT Students.Name, Course
FROM Students
CROSS JOIN Enrollments;

Do you also want me to include **SELF JOIN** in this list?

Ah okay =F0=9F=91=8D you want only the **basic JOIN query syntax like:

-- INNE=
R JOIN
SELECT *=20
FROM t1=20
JOIN t2 ON t1.id =3D t2.id;

-- LEFT JOIN
SELECT *=20
FROM t1=20
LEFT JOIN t2 ON t1.id =3D t2.id;

-- RIGHT JOIN
SELECT *=20
FROM t1=20
RIGHT JOIN t2 ON t1.id =3D t2.id;

-- FULL OUTER JOIN
SELECT *=20
FROM t1=20
FULL OUTER JOIN t2 ON t1.id =3D t2.id;

-- CROSS JOIN
SELECT *=20
FROM t1=20
CROSS JOIN t2;

-- SELF JOIN
SELECT *=20
FROM t1 a
JOIN t1 b ON a.manager_id =3D b.emp_id;

=F0=9F=91=89 Do you want me to also show output examples (with small dummy data) for each join, or just keep the queries?

Perfect =F0=9F=91=8D Let's take two small tables `t1`=
 and `t2` and see the JOIN queries with actual outputs.

---

Sample Tables

t1 (Employees)**

| id | name | dept_id |
|---|---|---|
| 1 | Alice | 10 |
| 2 | Bob | 20 |
| 3 | Charlie | 30 |

**t2 (Departments)**

| dept_id | dept_name |
|---|---|
| 10 | HR |
| 20 | IT |
| 40 | Finance |

---

### 1. **INNER JOIN**

SELECT =
*=20
FROM t1=20
JOIN t2 ON t1.dept_id =3D t2.dept_id;

=F0=9F=91=89 Result: (only matching rows)

| id | name | dept_id | dept_id | dept_name |
|---|---|---|---|---|
| 1 | Alice | 10 | 10 | HR |
| 2 | Bob | 20 | 20 | IT |

---

2. **LEFT JOIN**

SELECT =
*=20
FROM t1=20
LEFT JOIN t2 ON t1.dept_id =3D t2.dept_id;

=F0=9F=91=89 Result: (all from `t1`, matched from `t2)

| id | name | dept_id | dept_id | dept_name |
|---|---|---|---|---|
| 1 | Alice | 10 | 10 | HR |
| 2 | Bob | 20 | 20 | IT |
| 3 | Charlie | 30 | NULL | NULL |

---

### 3. **RIGHT JOIN**

SELECT =
*=20
FROM t1=20
RIGHT JOIN t2 ON t1.dept_id =3D t2.dept_id;

=F0=9F=91=89 Result: (all from t2`, matched from `t1)

| id | name | dept_id | dept_id | dept_name |
|---|---|---|---|---|
| 1 | Alice | 10 | 10 | HR |
| 2 | Bob | 20 | 20 | IT |
| NULL | NULL | NULL | 40 | Finance |

---

4. **FULL OUTER JOIN

SELECT =
*=20
FROM t1=20
FULL OUTER JOIN t2 ON t1.dept_id =3D t2.dept_id;

=F0=9F=91=89 Result: (all rows from both tables)

| id | name | dept_id | dept_id | dept_name |
|---|---|---|---|---|
| 1 | Alice | 10 | 10 | HR |
| 2 | Bob | 20 | 20 | IT |
| 3 | Charlie | 30 | NULL | NULL |
| NULL | NULL | NULL | 40 | Finance |

---

### 5. CROSS JOIN**

SELECT =
*=20
FROM t1=20
CROSS JOIN t2;

=F0=9F=91=89 Result: (cartesian product -> 3 =C3=97 3 =3D 9 rows)=

| id | name | dept_id | dept_id | dept_name |
|---|---|---|---|---|
| 1 | Alice | 10 | 10 | HR |
| 1 | Alice | 10 | 20 | IT |
| 1 | Alice | 10 | 40 | Finance |
| 2 | Bob | 20 | 10 | HR |
| 2 | Bob | 20 | 20 | IT |
| 2 | Bob | 20 | 40 | Finance |
| 3 | Charlie | 30 | 10 | HR |
| 3 | Charlie | 30 | 20 | IT |
| 3 | Charlie | 30 | 40 | Finance |

---

6. **SELF JOIN**

(Same table joined with itself)

SELECT =
a.id AS emp_id, a.name AS emp_name, b.name AS manager_name
FROM t1 a
JOIN t1 b ON a.dept_id =3D b.dept_id;

=F0=9F=91=89 Example output (employees in same dept considered as "linke=
d")

| emp_id | emp_name | manager_name |
|---|---|---|
| 1 | Alice | Alice |
| 2 | Bob | Bob |
| 3 | Charlie | Charlie |

---

✓ These are **all SQL JOIN queries with examples**.=

Do you want me to also **draw a Venn diagram style image** =
for joins (to visualize them)?

Constraints and triggers;

Got it =F0=9F=91=8D Let's briefly explain both:

---

### **1. Constraints i=
n Database**

Constraints are rules applied to table columns to maintain **data =
accuracy and integrity**.

=F0=9F=94=91 Common Types:

- 
**NOT NULL** -> Ensures a column cannot have NULL va=
lues.

CREATE =
TABLE Students (
  ID INT NOT NULL,
  Name VARCHAR(50) NOT NULL
);

- 
**UNIQUE** -> No duplicate values allowed in a colum=
n.

- 
**PRIMARY KEY** -> Combination of NOT NULL + UNIQUE.=
 Identifies each row uniquely.

- 
**FOREIGN KEY** -> Ensures a value must exist in ano=
ther table (referential integrity).

- 
**CHECK** -> Restricts values based on a condition.

```
CHECK (=
Age >=3D 18)

```

- 
**DEFAULT** -> Provides a default value if none is g=
iven.

---

### **2. Triggers in Data=
base**

A trigger is a **special stored procedure** that automatica=
lly executes when an event occurs (INSERT, UPDATE, DELETE) on a table.

=F0=9F=94=91 Example:

CREATE =
TRIGGER update_student_count
AFTER INSERT ON Students
FOR EACH ROW
BEGIN
   UPDATE Department
   SET StudentCount =3D StudentCount + 1
   WHERE DeptID =3D NEW.DeptID;
END;

Here: Whenever a new student is added, the StudentCount` in =
the respective `Department` updates automatically.

---

=F0=9F=91=89 Would you like me to also add **real-life examples (like banking or e-commerce triggers) for better understanding?

- 
Functional dependencies and normalization; 

Sure! Let's go step by step** and in detail about=
 **Functional Dependencies** and **Normalization. I'll also include examples and simple explanations in Bangla whe=
re needed.

---

## 1. Functio=
nal Dependencies (FDs)**

A **functional dependency** is a relationship that exists w=
hen one attribute (or a set of attributes) in a relation uniquely determine=
s another attribute (or set of attributes).

### **Definition**:

In a relation **R**, an attribute **B** is sai=
d to be **functionally dependent** on attribute **A (written as A -> B**) if, for every pair of tupl=
es in R, whenever the values of A are the same, the values of B are also th=
e same.

**Notation:**

A =E2=
=86=92 B   (read as "A determines B" or "B is functionally dependent on A")

### **Example:**

Consider a table of **Students**:

| StudentID | Name | Department |
|---|---|---|
| 101 | Rahim | CSE |
| 102 | Karim | EEE |
| 103 | Rahim | CSE |

- 
`StudentID -> Name` ✓ (StudentID uniquely dete=
rmines Name)

- 
`StudentID -> Department` ✓ (StudentID uniquel=
y determines Department)

- 
`Name -> Department` =E2=9D=8C (Because two students c=
an have the same Name but different departments)

### **Types of =
Functional Dependencies:**

- 
**Trivial FD:**

When an attribute is functionally dependent on a superset that includes =
itself.

- 
Example: `{A, B} -> A`

- 
**Non-Trivial FD:**

When B is not a subset of A.

- 
Example: `StudentID -> Name`

- 
**Full Functional Dependency:**

B depends on the whole set of attributes A, not just part of it.

Example: `{StudentID, CourseID} -> Grade`

Here, Grade depends on both StudentID and CourseID.

- 
**Partial Functional Dependency:**

B depends only on part of a composite key.

- 
Example: In `{StudentID, CourseID} -> Instructor`, if =
`CourseID -> Instructor`, it's a partial dependen=
cy.

- 
**Transitive Dependency:**

If A -> B and B -> C, then C is transitively dependent on =
A.

- 
Example: `StudentID -> Department` and `Departmen=
t -> Head` =E2=87=92 `StudentID -> Head` (tr=
ansitive dependency)

---

## **2. Normalization

Normalization** is the process of organizing data in a da=
tabase to reduce redundancy and improve data integrity. It divides large ta=
bles into smaller, related tables and defines relationships between them.
### **Goals of Normaliza=
tion:**

- 
Eliminate **redundant data**

- 
Avoid **update, insert, and delete anomalies**

- 
Ensure **data integrity**

---

### **Normal Forms (NFs)

- 
First Normal Form (1NF)**

Rule: Every attribute must have **atomic (indivisible)** va=
lues.

- 
**No repeating groups or arrays**.

**Example:**

Before 1NF:

StudentID Name Courses 101 Rahim CSE, MATH

After 1NF:

StudentID Name Course 101 Rahim CSE 101 Rahim MATH

---

- 
**Second Normal Form (2NF)**

Rule: **1NF + No partial dependency**

- 
Every non-prime attribute must be fully functionally dependent on the whole primary key.

**Example:**

Table: `{StudentID, CourseID} -> {StudentName, Instructor}

- 
StudentName` depends only on `StudentID` (partial=
 dependency)

- 
`Instructor` depends only on `CourseID` (partial d=
ependency)

**2NF Solution:** Split into two tables:

**Students Table:**

StudentID StudentName 101 Rahim

**Courses Table:**

CourseID Instructor CSE Mr. Alam

**Enrollment Table:**

StudentID CourseID 101 CSE

---

- 
**Third Normal Form (3NF)**

Rule: **2NF + No transitive dependency**

- 
Non-prime attributes should not depend on other non-prime attributes.

**Example:**

Table: `{StudentID, Department, DeptHead}`

- 
`StudentID -> Department`

- 
`Department -> DeptHead` (transitive dependency)

**3NF Solution:** Split into:

**Student Table:** `{StudentID, Department}`
=
**Department Table:** `{Department, DeptHead}`

---

**Boyce-Codd Normal Form (BCNF)**

Stronger version of 3NF.

- 
Rule: **Every determinant must be a candidate key.**

Example: If `CourseID + Semester -> Instructor` but Instructor -> CourseID exists, BCNF requires decompositio=
n.

---

- 
**Higher Normal Forms** (4NF, 5NF)

Deal with multi-valued dependencies and join dependencies.

- 
Mostly used in very complex database designs.

---

### **Summary Table:**

| Normal Form | Requirement |
|---|---|
| 1NF | Atomic values, no repeating groups |
| 2NF | 1NF + no partial dependency |
| 3NF | 2NF + no transitive dependency |
| BCNF | Every determinant is a candidate key |

---

**Key Points in Bangla =
(=E0=A6=B8=E0=A6=82=E0=A6=95=E0=A7=8D=E0=A6=B7=E0=A7=87=E0=A6=AA=E0=A7=87):=
**

- 
**Functional Dependency (FD)** -> =E0=A6=95=E0=A7=8B=
=E0=A6=A8 =E0=A6=8F=E0=A6=95=E0=A6=9F=E0=A6=BF attribute =E0=A6=86=E0=A6=B0=
=E0=A7=87=E0=A6=95=E0=A6=9F=E0=A6=BF attribute =E0=A6=95=E0=A7=87 =E0=A6=A8=
=E0=A6=BF=E0=A6=B0=E0=A7=8D=E0=A6=A7=E0=A6=BE=E0=A6=B0=E0=A6=A3 =E0=A6=95=
=E0=A6=B0=E0=A7=87=E0=A5=A4

- 
**Normalization** -> =E0=A6=A1=E0=A7=87=E0=A6=9F=E0=
=A6=BE=E0=A6=AC=E0=A7=87=E0=A6=B8=E0=A6=95=E0=A7=87 =E0=A6=9B=E0=A7=8B=E0=
=A6=9F =E0=A6=9B=E0=A7=8B=E0=A6=9F =E0=A6=9F=E0=A7=87=E0=A6=AC=E0=A6=BF=E0=
=A6=B2=E0=A7=87 =E0=A6=AD=E0=A6=BE=E0=A6=97 =E0=A6=95=E0=A6=B0=E0=A6=BE =E0=
=A6=AF=E0=A6=BE=E0=A6=A4=E0=A7=87 **=E0=A6=A1=E0=A7=81=E0=A6=AA=E0=A7=
=8D=E0=A6=B2=E0=A6=BF=E0=A6=95=E0=A7=87=E0=A6=9F =E0=A6=A1=E0=A7=87=E0=A6=
=9F=E0=A6=BE =E0=A6=A8=E0=A6=BE =E0=A6=A5=E0=A6=BE=E0=A6=95=E0=A7=87 =E0=A6=8F=E0=A6=AC=E0=A6=82 =E0=A6=A1=E0=A7=87=E0=A6=9F=E0=A6=BE=
 integrity =E0=A6=AC=E0=A6=9C=E0=A6=BE=E0=A6=AF=E0=A6=BC =E0=A6=A5=E0=A6=BE=
=E0=A6=95=E0=A7=87**=E0=A5=A4

- 
**1NF** -> =E0=A6=A1=E0=A7=87=E0=A6=9F=E0=A6=BE atom=
ic =E0=A6=B9=E0=A6=A4=E0=A7=87 =E0=A6=B9=E0=A6=AC=E0=A7=87

- 
**2NF** -> Partial dependency =E0=A6=A6=E0=A7=82=E0=
=A6=B0 =E0=A6=95=E0=A6=B0=E0=A6=A4=E0=A7=87 =E0=A6=B9=E0=A6=AC=E0=A7=87

=

- 
**3NF** -> Transitive dependency =E0=A6=A6=E0=A7=82=
=E0=A6=B0 =E0=A6=95=E0=A6=B0=E0=A6=A4=E0=A7=87 =E0=A6=B9=E0=A6=AC=E0=A7=87

- 
**BCNF** -> =E0=A6=B8=E0=A6=AC determinant candidate=
 key =E0=A6=B9=E0=A6=A4=E0=A7=87 =E0=A6=B9=E0=A6=AC=E0=A7=87

---

If you want, I can also **draw diagrams showing functional depende=
ncies and normalization decomposition** for better visualization.
Do you want me to do that?

- 
File organization and data storage;

Sure! Let's go **step by step** and in detail about=
 **File Organization** and **Data Storage**, incl=
uding examples and simple explanations.

---

## **1. File Organization

File Organization** refers to the way records of a file a=
re **stored physically** on storage media like **hard di=
sks, SSDs, or tapes**. It affects how **efficiently data can b=
e accessed, updated, and stored**.

### **Goals of File Or=
ganization**

- 
Efficient retrieval of records

- 
Efficient insertion, deletion, and updating

- 
Minimizing storage space

- 
Supporting sequential or random access

---

### **Types of File Or=
ganization**

- 
**Heap File Organization (Unordered)**

Records are stored **in no particular order**.

- 
Easy to insert (just append at the end).

- 
Searching is **slow** (requires scanning the whole file).

- 
Good for small files or batch processing.

**Example:**

Record =
1 -> Record 2 -> Record 3 -> Record 4

- 
To find Record 3, you may need to scan Record 1, 2, and 3.

---

- 
**Sequential File Organization**

Records are stored **in a sorted order** based on a key fie=
ld.

- 
Efficient for **range queries**.

- 
Insertion can be costly because you may need to shift records.

**Example:**

Student records sorted by `StudentID`:

101 =E2=
=86=92 102 -> 103 -> 104

---

- 
**Hashed File Organization**

Uses a **hash function** to compute the location of a recor=
d based on a key.

- 
Allows **direct access** (fast retrieval).

- 
Efficient for **equality searches** (find a record with a s=
pecific key).

- 
Collisions (two keys mapping to the same address) need to be handled.

**Example:**

Hash function: `h(StudentID) =3D StudentID % 10`

Student=
ID 101 -> bucket 1
StudentID 112 -> bucket 2

---

- 
**Clustered/Indexed File Organization**

Data records are stored **together based on index values**.=

- 
Supports fast **search, insertion, and deletion**.

- 
Index contains **pointers to the actual data**.

**Example:**

Index: =
StudentID -> Record location
101 -> address 100
102 -> address 105

---

### **Comparison Table

| Organization | Insertion | Deletion | Search | Notes |
|---|---|---|---|---|
| Heap | Fast | Moderate | Slow | No order |
| Sequential | Slow | Slow | Fast | Sorted order |
| Hashed | Moderate | Moderate | Fast | Direct access |
| Indexed | Moderate | Moderate | Very Fast | Extra space for index |

---

## 2. Data Storage**
**Data Storage** refers to **how data is stored physi=
cally** on storage devices and logically in the database.

### **Types of Data Storage=
**

- 
**Primary Storage**

Also called **main memory / RAM**.

- 
Fast access, **volatile** (data lost when power off).

Used for **active processing**.

- 
**Secondary Storage**

Permanent storage like **HDDs, SSDs**.

- 
Slower than RAM but persistent.

- 
Used to store **databases, files, backups**.

- 
**Tertiary Storage**

Removable media like **tapes, optical disks**.

- 
Very slow access.

- 
Used for **archiving large amounts of data**.

---

### **Logical vs Phys=
ical Storage**

- 
**Logical Storage** -> How data is **conceptua=
lly organized** (tables, columns, records)

- 
**Physical Storage** -> How data is **actually=
 stored** on disk (blocks, pages, clusters)

---

### **Data Storage Units

| Unit | Description |
|---|---|
| Bit | 0 or 1 |
| Byte | 8 bits |
| Block/Page | Group of bytes (smallest I/O unit) |
| File | Collection of records |
| Database | Collection of files |

---

### Key Points in Bangla (=
=E0=A6=B8=E0=A6=82=E0=A6=95=E0=A7=8D=E0=A6=B7=E0=A7=87=E0=A6=AA=E0=A7=87)

- 
File Organization** -> =E0=A6=A1=E0=A7=87=E0=A6=9F=
=E0=A6=BE =E0=A6=A1=E0=A6=BF=E0=A6=B8=E0=A7=8D=E0=A6=95=E0=A7=87 **=
=E0=A6=95=E0=A6=BF=E0=A6=AD=E0=A6=BE=E0=A6=AC=E0=A7=87 =E0=A6=B8=E0=A6=BE=
=E0=A6=9C=E0=A6=BE=E0=A6=A8=E0=A7=8B** =E0=A6=A4=E0=A6=BE =E0=A6=A8=
=E0=A6=BF=E0=A6=B0=E0=A7=8D=E0=A6=A7=E0=A6=BE=E0=A6=B0=E0=A6=A3 =E0=A6=95=
=E0=A6=B0=E0=A7=87=E0=A5=A4

Heap -> =E0=A6=AF=E0=A7=87=E0=A6=95=E0=A7=8B=E0=A6=A8=E0=A7=8B or=
der, insertion fast, search slow

- 
Sequential -> sorted order, search fast, insertion slow

- 
Hashed -> direct access, fast equality search

- 
Indexed -> pointer =E0=A6=A6=E0=A6=BF=E0=A7=9F=E0=A7=87 fast acce=
ss

- 
**Data Storage** -> =E0=A6=A1=E0=A7=87=E0=A6=9F=E0=
=A6=BE =E0=A6=95=E0=A7=8B=E0=A6=A5=E0=A6=BE=E0=A7=9F =E0=A6=93 =E0=A6=95=E0=
=A6=BF=E0=A6=AD=E0=A6=BE=E0=A6=AC=E0=A7=87 =E0=A6=B0=E0=A6=BE=E0=A6=96=E0=
=A6=BE =E0=A6=B9=E0=A6=9A=E0=A7=8D=E0=A6=9B=E0=A7=87=E0=A5=A4

Primary -> RAM (volatile, fast)

- 
Secondary -> HDD/SSD (persistent)

- 
Tertiary -> tape/CD (slow, archival)

- 
**Logical vs Physical storage:**

Logical -> tables, columns, rows

- 
Physical -> blocks, sectors, clusters

---

If you want, I can also **draw a diagram showing file organization=
 types with access paths**--it makes understanding much easie=
r.

Do you want me to make that diagram?

- 
Indexing: primary and secondary indexes, B+ trees, hash tables; `BC=
S`

Great topic =F0=9F=91=8D Let's go step by step into **Data=
base Query Optimization**.

---

# =F0=9F=94=
=B9 **What is Query Optimization?**

Query optimization is the process of **choosing the most efficient=
 way** to execute a given SQL query.

- 
A single SQL query can be executed in **different ways** (c=
alled query execution plans).

- 
The **Query Optimizer** (part of the DBMS) decides the best execution plan.

- 
Goal: **Minimize cost** -> CPU, memory, disk I/O, an=
d execution time.

---

# =F0=
=9F=94=B9 **Why Query Optimization is Important?**

- 
Databases can store **millions of records** -> naive=
 queries become **very slow**.

- 
Optimized queries reduce:

**Execution time** (faster results).

- 
**System resource usage** (CPU, RAM, disk I/O).

- 
**Network traffic** (less data transfer).

---

# 📙 Query Processing Stages

- 
**Parsing & Translation**

SQL query converted into a **relational algebra expression.

- 
Syntax and semantic checks are performed.

- 
Optimization**

Optimizer chooses the **best execution plan**.

- 
Uses **statistics** (table size, index availability, data d=
istribution).

- 
Considers multiple strategies (nested loops, hash joins, etc.).

- 
**Execution**

The plan is executed by the DBMS engine.

- 
Results returned to the user.

---

# =F0=9F=
=94=B9 **Query Optimization Techniques**

### **1. Using Indexes**=

- 
Use **B+ trees or Hash indexes** on columns used in `W=
HERE`, `JOIN`, `ORDER BY`.

SELECT =
* FROM Students WHERE ID =3D 102;

=E2=9E=A1 With index on `ID` -> O(log n).

=E2=9E=A1 Without index -> full table scan (O(n)).

---

### **2. Avoid **`S=
ELECT *`

- 
Selecting all columns is costly.

-- Bad
SELECT * FROM Students;

-- Good (only required columns)
SELECT ID, Name FROM Students;

---

### **3. Use Joins Effic=
iently**

- 
Use proper join types:

**Hash Join** -> good for large, unsorted datasets.

- 
**Merge Join** -> good for sorted datasets.

- 
**Nested Loop Join** -> small tables.

SELECT =
s.Name, c.CourseName=20
FROM Students s
JOIN Courses c ON s.ID =3D c.StudentID;

---

### **4. Avoid=
 Subqueries (when possible)**

- 
Replace with `JOIN` or `EXISTS`.

-- Bad =
(subquery)
SELECT Name FROM Students=20
WHERE ID IN (SELECT StudentID FROM Courses);

-- Better (join)
SELECT s.Name=20
FROM Students s
JOIN Courses c ON s.ID =3D c.StudentID;

---

### **5. Use Quer=
y Hints (DB-specific)**

- 
Some DBs (Oracle, SQL Server) allow hints like:

SELECT =
/*+ INDEX(Students idx_student_id) */ *=20
FROM Students WHERE ID =3D 101;

---

### **6. Partition=
ing & Sharding**

- 
Large tables split into **partitions** (by date, region, et=
c.) -> reduces scan cost.

---

### **7. Caching Results

- 
Frequently run queries can use materialized views** or query cache.

---

# 📙 =
**Cost-Based Optimization**

The optimizer uses a **cost model**:

- 
**I/O cost**: Number of disk pages read/written.

- 
**CPU cost**: Number of operations (comparisons, hash compu=
tations).

- 
**Communication cost**: In distributed DBs (network transfe=
rs).

The optimizer selects the plan with the **lowest total cost.

---

# =
📙 Heuristic (Rule-Based) Optimization**

Instead of cost models, some optimizers use **rules**:

- 
Perform `SELECT` early (reduce rows).

- 
Perform projections early (reduce columns).

- 
Perform most restrictive joins first.

---

# 📙 **Example=
**

Query:

SELECT =
Name=20
FROM Students=20
WHERE Age > 20 AND Department =3D 'CSE';

Possible execution plans:

- 
**Full table scan** -> check every row.

- 
**Index on Age** -> fetch matching records.

- 
**Index on Department** -> fetch CSE students first.=

- 
**Composite Index (Age, Department)** -> best perfor=
mance.

---

✓ **In Summary**:

- 
Query optimization makes queries **faster & cheaper**.

- 
Uses **indexes, better join strategies, caching, partitioning.

- 
Optimizer evaluates different execution plans** and picks=
 the best.

---

Would you like me to also make a **visual diagram of the query opt=
imization process (parsing -> plan -> optimizer -> exe=
cution)** so it's easier to understand?

- 
Query optimization;

- 
Transaction management;

Perfect =F0=9F=91=8D Let's go step by step into **Transact=
ion Management in Databases**.

---

# 📙 What is a Transaction?

A **transaction** in a database is a **sequence of op=
erations** (like `INSERT`, `UPDATE`, `DEL=
ETE`, `SELECT`) performed as a single **logical unit=
 of work**.

=F0=9F=91=89 Either **all operations succeed (commit)** or =
**none of them take effect (rollback)**.

**Example:**

Bank Transfer:

- 
Deduct =E2=82=B91000 from Account A

- 
Add =E2=82=B91000 to Account B

=E2=9E=A1 If step 1 succeeds but step 2 fails -> rollback (undo s=
tep 1).

---

# =F0=9F=
=94=B9 **ACID Properties of Transactions**

Transactions must satisfy **ACID properties**:

- 
**Atomicity** - "All or nothing"

Entire transaction executes, or none of it does.

- 
Implemented using **commit** and **rollback**.=

- 
**Consistency** - Database remains in a **val=
id state** before and after transaction.

Example: Bank balances must add up correctly before & after transfer=
.

- 
**Isolation** - Transactions run as if they are alone in the system.

Ensures no interference between concurrent transactions.

- 
**Durability** - Once committed, changes are permanent, even after crash.

Achieved using **logs & backups**.

---

# 📙 Transaction States

- 
**Active** -> Transaction is executing.

- 
**Partially Committed** -> Last statement executed, =
waiting for commit.

- 
**Committed** -> Success; changes made permanent.

- 
**Failed** -> Error occurs; transaction cannot proce=
ed.

- 
**Aborted** -> Changes rolled back; DB restored to p=
revious state.

---

# =
📙 **Transaction Management in Concurrency**

When **multiple users** access the DB at the same time:

- 
Problems can occur without control -> **Concurrency Issues.

### Concurrency Problem=
s:**

- 
**Dirty Read** - One transaction reads uncommitted =
data from another.

- 
**Lost Update** - Two transactions update the same =
record, one is lost.

- 
**Non-Repeatable Read** - A row changes between two=
 reads.

- 
**Phantom Read** - New rows appear/disappear betwee=
n two queries.

---

# =F0=9F=
=94=B9 **Concurrency Control Techniques**

To avoid problems, DBMS uses **concurrency control**:

### **1. Lock-Based Prot=
ocols**

- 
**Shared Lock (S)** -> For reading.

- 
**Exclusive Lock (X)** -> For writing.

- 
Follow **Two-Phase Locking (2PL)**:

Growing phase (acquire locks).

- 
Shrinking phase (release locks).

### **2. Timestamp Orderin=
g**

- 
Each transaction gets a **timestamp**.

- 
Operations ordered based on timestamps.

### **3. Optimi=
stic Concurrency Control**

- 
Transactions execute without locks.

- 
Before commit -> system checks for conflicts.

- 
If conflict -> rollback.

---

# =F0=9F=
=94=B9 **Isolation Levels (SQL Standard)**

SQL defines 4 isolation levels (trade-off between consistency & perf=
ormance):

- 
**Read Uncommitted** -> Allows dirty reads (fast but=
 unsafe).

- 
**Read Committed** -> Prevents dirty reads, but non-=
repeatable reads possible.

- 
**Repeatable Read** -> Prevents dirty & non-repe=
atable reads, but phantom reads possible.

- 
**Serializable** -> Highest level, prevents all issu=
es, but slowest.

---

# =F0=
=9F=94=B9 **Recovery in Transaction Management**

If system crashes:

- 
**Undo Log** -> Rollback uncommitted transactions.

- 
**Redo Log** -> Reapply committed transactions.

**Checkpointing** -> Periodic snapshots to speed up =
recovery.

---

# 📙 **Ex=
ample in SQL**

BEGIN T=
RANSACTION;

UPDATE Accounts SET Balance =3D Balance - 1000 WHERE AccNo =3D 101;
UPDATE Accounts SET Balance =3D Balance + 1000 WHERE AccNo =3D 202;

COMMIT;  -- If both succeed

-- If error occurs
ROLLBACK;

---

✓ **In Summary**:

- 
A **transaction** =3D unit of work ensuring **ACID properties.

- 
Transaction management** =3D concurrency control + recove=
ry + commit/rollback.

- 
DBMS ensures correctness with **locks, timestamps, isolation level=
s**.

---

Would you like me to also create a **diagram of transaction states=
 (Active -> Commit/Rollback -> End)** so it's =
easier to visualize?

Got it =F0=9F=91=8D Let's take some **real-world style exa=
mples** for each **SQL Isolation Level** so you can cle=
arly see the differences.

---

# =F0=
=9F=94=B9 **1. Read Uncommitted (Lowest, Unsafe)**

=F0=9F=91=89 Transactions can **see uncommitted changes** f=
rom others (**dirty reads**).

**Example:**

- 
**T1:** Bank clerk transfers =E2=82=B91000 from A ->=
 B. (Updates A =3D A - 1000, not committed yet)

- 
**T2:** Another user checks Account A's balance.

- 
**T2 sees A =3D =E2=82=B99000** (instead of correct =E2=82=
=B910,000) because T1 hasn't committed yet.

=E2=9E=A1 If T1 later **rolls back**, T2 has seen **i=
ncorrect data**.

**Real-world analogy:** Like looking at a draft version of =
an invoice that might later be cancelled.

---

# =
📙 **2. Read Committed (Most common default)**

=F0=9F=91=89 Prevents dirty reads, but **non-repeatable reads may happen.

Example:**

- 
**T1:** Reads Account A's balance =3D =E2=82=B910,0=
00.

- 
Meanwhile, **T2:** Deducts =E2=82=B91000 and commits (A =3D=
 =E2=82=B99000).

- 
**T1:** Reads Account A's balance again -> n=
ow sees =E2=82=B99000.

=E2=9E=A1 T1 got **different results in the same transaction (non-repeatable read).

Real-world analogy:** Checking product stock on an e-comm=
erce site -> first it shows **20 items left**, then ref=
reshing shows **15 left** because someone else bought.

---

# 📙 3. Repeatable Read

=F0=9F=91=89 Prevents dirty reads + non-repeatable reads, but **ph=
antom rows** can appear.

**Example:**

- 
**T1:** Runs query -> `SELECT * FROM Orders WHE=
RE Price > 1000`

(finds 5 rows).

- 
Meanwhile, **T2:** Inserts a new order worth =E2=82=B92000 =
and commits.

- 
**T1:** Runs the same query again -> now finds 6 rows.

=E2=9E=A1 Data **inside the same range changed** (phantom r=
ead).

**Real-world analogy:** You count **how many tickets =
are sold above =E2=82=B91000**, then suddenly one more appears even =
though you haven't finished your transaction.

---

# =
📙 **4. Serializable (Highest, Strictest)**

=F0=9F=91=89 Transactions are executed **one after another, as if in a queue.

=F0=9F=91=89 Prevents dirty, non-repeatable, and phantom reads.

Example:**

- 
**T1:** Runs query -> `SELECT COUNT(*) FROM Ord=
ers WHERE Price > 1000` (gets 5 rows).

- 
While T1 is active, **T2 is blocked** from inserting new or=
ders with Price > 1000.

- 
**T1 completes** safely with consistent results.

=E2=9E=A1 No new phantom rows, no inconsistent reads.

**Real-world analogy:** At a ticket counter, only **o=
ne person is served at a time** -> no confusion, but everyone=
 waits longer.

---

✓ **Summary Table**

| Isolation Level | Prevents Dirty Read | Prevents Non-Repeatable Read | Prevents Phantom Read | Performance |
|---|---|---|---|---|
| Read Uncommitted | =E2=9D=8C No | =E2=9D=8C No | =E2=9D=8C No | * Fastest |
| Read Committed | ✓ Yes | =E2=9D=8C No | =E2=9D=8C No | * Fast |
| Repeatable Read | ✓ Yes | ✓ Yes | =E2=9D=8C No | ** Slower |
| Serializable | ✓ Yes | ✓ Yes | ✓ Yes | =F0=9F=90=A2 Slowest |

---

Do you want me to also make a **timeline-style diagram** sh=
owing how two transactions (T1 & T2) interact differently under each is=
olation level? That will visually clarify things.

- 
Recovery;

Great question =F0=9F=91=8D Let's go step by step into **D=
atabase Recovery** -- how databases handle crashes and restor=
e consistency.

---

# 📙=
 **What is Database Recovery?**

**Database Recovery** is the process of **restoring t=
he database to a correct state** after a failure (system crash, powe=
r failure, transaction error, disk failure, etc.).

=F0=9F=91=89 Goal: Ensure **ACID properties** of transactio=
ns, especially **Atomicity** and **Durability**.

---

# 📙 **Types of Failures**

- 
**Transaction Failure**

A single transaction fails due to errors (divide by zero, invalid data).=

- 
Example: Transferring money but destination account doesn't exis=
t.

- 
**System Crash**

Hardware/software crash, power failure.

- 
Example: Server restarts while transactions are mid-way.

- 
**Disk Failure**

Disk head crash, corruption, bad sectors.

- 
Entire database may become unreadable.

- 
**Natural Disasters**

Flood, fire, earthquake.

- 
Handled by **remote backups & replication**.

---

# 📙 Recovery Techniques

Database uses **logs, checkpoints, and backups** to recover=
.

---

1. Logging (Write-Ahead Logging - WAL)

- 
All changes are **first written to a log** (before database=
).

- 
Log stores:

**Transaction start**

- 
**Before image (UNDO)**

- 
**After image (REDO)**

- 
**Commit / Abort info**

**Example:**

If transaction updates `Balance=3D5000 -> 4000`

Log entry:

If system crashes:

- 
If **committed** -> redo (apply new=3D4000).

If **not committed** -> undo (restore old=3D5000).

---

## **2. Checkpointing

- 
A checkpoint** =3D snapshot of the DB + clearing logs up =
to that point.

- 
Reduces recovery time.

**Example:**

- 
Without checkpoint -> DB must read the entire log from the beginn=
ing.

- 
With checkpoint -> recovery starts from last checkpoint.

---

## **3. Backup & Res=
tore**

- 
**Full Backup** -> entire database copy.

- 
**Incremental Backup** -> only changes since last ba=
ckup.

- 
**Differential Backup** -> changes since last full b=
ackup.

**Recovery:** Restore backup + apply logs.

---

## **4. Shadow Paging**=

- 
Instead of modifying the database directly:

Create a **shadow copy** of pages.

- 
Update shadow copy.

- 
If transaction commits -> switch pointer to new pages.

- 
If transaction aborts -> discard shadow copy.

**Advantage:** No need for undo/redo.
**Disadvanta=
ge:** More space overhead.

---

# 📙 **Types of Recovery**

### **1. Transa=
ction-Oriented Recovery**

- 
**Undo** -> For uncommitted transactions.

- 
**Redo** -> For committed but not saved transactions=
.

### **2. Crash Recovery

- 
Restart DB -> look at logs -> undo/redo as needed.

### 3. Media Recovery

If disk is damaged -> restore from backup -> redo logs.

---

# 📙 Example Scenario**

Bank Transaction (Transfer =E2=82=B91000 from A to B):

- 
`T1: Deduct 1000 from A`

- 
`T1: Add 1000 to B`

- 
Crash happens after step 1 but before step 2.

**Recovery:**

- 
Log shows `T1` started but not committed.

- 
Undo step 1 (restore A's balance).

- 
Database remains consistent.

---

# 📙 **Summary=
**

- 
**Recovery =3D Restore DB consistency after failure.**

**Techniques**: Logging (WAL), Checkpointing, Backups, Shad=
ow Paging.

- 
**Undo** for uncommitted, **Redo** for committ=
ed.

- 
Ensures **Atomicity + Durability**.

---

Would you like me to also **draw a flowchart of database recovery =
(failure -> log check -> undo/redo -> recovery complet=
e)** so it's easier to visualize?

- 
Concurrency control;

Perfect =F0=9F=91=8D Let's expand your note on **Concurren=
cy Control** in databases so it stays **short, clear, but info=
rmative**.

---

# * Concurrency Control in DBMS

=F0=9F=91=89 **Concurrency Control** =3D Techniques to ensu=
re **correctness and consistency** when **multiple trans=
actions** run at the same time.

- 
Without control -> problems like **dirty read, lost update,=
 uncommitted data** may occur.

- 
Goal -> Maintain **isolation** (from ACID).

---

## 📙 Why is i=
t Needed?

- 
Multiple users access the same data simultaneously.

- 
To **avoid conflicts** and maintain **database consis=
tency**.

- 
Example: Two people booking the **last ticket** at the same=
 time.

---

## =F0=9F=94=
=91 **Concurrency Control Methods**

### 1=
 **Locking Protocols**

- 
Transactions lock data before accessing.

- 
Types:

**Shared Lock (S):** Multiple reads allowed.

- 
**Exclusive Lock (X):** Only one write allowed.

- 
Example: If Transaction A updates balance, Transaction B must wait until=
 lock is released.

---

### 2=
 **Timestamp Ordering**

- 
Each transaction gets a **unique timestamp**.

- 
Operations execute in **timestamp order**.

- 
Ensures **serializability** -> database behaves as i=
f transactions were run one by one.

---

### =
3 **Optimistic Concurrency Control**

- 
Assumes **conflicts are rare**.

- 
Transactions execute **without locks**, but validation happ=
ens **before commit**.

- 
If conflict -> transaction rolls back.

- 
Useful in systems with **more reads, fewer writes**.

---

## =F0=9F=93=8A **Q=
uick Example:**

Transaction A: Transfer money =E2=82=B9500

- 
Transaction B: Check balance

- 
**With control:** B sees balance after A completes.

**Without control:** B may see wrong intermediate value.

---

✓ **Summary:**

Concurrency control ensures safe **parallel execution** of tra=
nsactions. Main techniques: **Locking, Timestamp ordering, Optimistic=
 concurrency**.

---

Would you like me to also cover the **common problems in concurren=
cy** (like dirty read, lost update, phantom read) with examples? Tha=
t will make it even clearer.

Great =F0=9F=91=8D Let's add the **common concurrency prob=
lems** that concurrency control prevents.

---

# =E2=
=9A=A0 **Concurrency Problems in DBMS**

When multiple transactions run together **without control**=
, the database may show **incorrect results**.

---

## 📙 1. **=
Dirty Read**

- 
A transaction reads data **modified by another transaction but not=
 committed yet**.

- 
If the first transaction rolls back -> the second one has read invalid data.

=F0=9F=91=89 Example:

- 
T1 updates balance =3D 1000 -> 1500 (not committed).

- 
T2 reads balance =3D 1500.

- 
T1 rolls back -> actual balance =3D 1000.

- 
=E2=9D=8C T2 has used wrong data.

---

## 📙 2. **Lost Update**

- 
Two transactions **overwrite each other's updates**=
.

=F0=9F=91=89 Example:

- 
T1 reads balance =3D 1000 -> adds 200 -> plans to write 12=
00.

- 
T2 reads balance =3D 1000 -> adds 300 -> writes 1300.

Then T1 writes 1200.

- 
Final balance should be **1500**, but it becomes **12=
00** -> =E2=9D=8C update lost.

---

## =
📙 3. **Uncommitted Data / Inconsistent Read**

- 
One transaction sees **different values** of the same data =
because another transaction is modifying it in between.

=F0=9F=91=89 Example:

- 
T1 transfers money (debit + credit).

- 
T2 reads balance during the middle of transfer.

- 
=E2=9D=8C T2 sees inconsistent state (money deducted but not credited).

---

## 📙 4. Phantom Read

- 
A transaction re-executes a query and **finds new rows inserted by=
 another transaction**.

=F0=9F=91=89 Example:

- 
T1 counts employees with salary > 50k =3D 10.

- 
T2 inserts a new employee with salary 60k.

- 
T1 runs same query -> gets 11.

- 
=E2=9D=8C Phantom rows appear.

---

# ✓ **=
How Control Fixes These**

- 
**Locks** -> prevent dirty & lost updates.

**Timestamp ordering** -> avoids conflicts.

- 
**Optimistic methods** -> check before commit.

---

=F0=9F=91=89 **Summary:**

Concurrency control prevents problems like **dirty read, lost update,=
 inconsistent data, phantom read** and ensures correctness of transa=
ctions.

---

Do you want me to also explain **Isolation Levels (Read Uncommitte=
d, Read Committed, Repeatable Read, Serializable)** since they direc=
tly deal with these problems?

Perfect =F0=9F=91=8D Let's go step by step -- **Iso=
lation Levels in DBMS (SQL standard)**.

These levels define how much **isolation** a transaction has f=
rom others. Lower isolation =3D more speed * but more anomalies =E2=
=9D=8C.

---

# 📙 **Isolation Levels**

### 1. **Read U=
ncommitted (Lowest Level)**

Transactions can **read uncommitted/dirty data**.

- 
Fastest but least safe.

✓ Allowed Problems:

- 
**Dirty Read**

- 
**Non-repeatable Read**

- 
**Phantom Read**

=F0=9F=91=89 Example:

- 
T1 updates balance -> not committed.

- 
T2 reads it anyway.

---

### 2. **Read Committed

- 
A transaction can only read committed data**.

- 
Prevents dirty reads.

- 
But if a value is updated between two reads, results may change.

✓ Problems avoided: **Dirty Read**

=E2=9D=8C Still possible: **Non-repeatable Read, Phantom Read

=F0=9F=91=89 Example:

T1 commits an update.

- 
T2 reads once -> gets old value. Reads again -> gets new v=
alue.

---

### 3. Repeatable Read

- 
Ensures if you read the same row twice, you always get the same =
value** (no non-repeatable read).

- 
But new rows can still appear (phantom).

✓ Prevents: **Dirty Read, Non-repeatable Read**

=E2=9D=8C Still possible: **Phantom Read**

=F0=9F=91=89 Example:

- 
T1 selects employees with salary > 50k.

- 
T2 inserts a new employee with 60k.

- 
T1 re-runs -> phantom row appears.

---

### 4. **Serializ=
able (Highest Level)**

- 
Transactions are executed as if they run **one after another (full isolation).

- 
Most secure but slowest.

✓ Prevents: Dirty Read, Non-repeatable Read, Phantom Rea=
d**

✓ Provides **full consistency**

=F0=9F=91=89 Example:

- 
T1 selects employees with salary > 50k.

- 
T2 tries to insert a new row -> blocked until T1 finishes.

---

# =F0=9F=94=91 Quick Comparison Table

| Isolation Level | Dirty Read | Non-repeatable Read | Phantom Read |
|---|---|---|---|
| Read Uncommitted | ✓ Allowed | ✓ Allowed | ✓ Allowed |
| Read Committed | =E2=9D=8C No | ✓ Allowed | ✓ Allowed |
| Repeatable Read | =E2=9D=8C No | =E2=9D=8C No | ✓ Allowed |
| Serializable | =E2=9D=8C No | =E2=9D=8C No | =E2=9D=8C No |

---

=F0=9F=91=89 **Summary:**

**Read Uncommitted** =3D Fastest, least safe.

- 
**Serializable** =3D Safest, slowest.

- 
Real DBMS often use **Read Committed** (Oracle, PostgreSQL =
default) or **Repeatable Read** (MySQL default).

---

Do you want me to also show this with a **small SQL example (like transactions on a bank balance) so it's crystal clear?

Great =F0=9F=91=8D Let's make it practical with a bank a=
ccount example**.

We'll use two transactions running at the same time:

- 
**T1 (Transaction 1):** Reads balance.

- 
**T2 (Transaction 2):** Updates or inserts records.

---

# =
📙 1. **Read Uncommitted (Dirty Read allowed)**

-- T1
START TRANSACTION;
SELECT balance FROM accounts WHERE id =3D 1;   -- Reads 1000

-- T2
START TRANSACTION;
UPDATE accounts SET balance =3D 500 WHERE id =3D 1;   -- Not committed yet

-- T1
SELECT balance FROM accounts WHERE id =3D 1;   -- Reads 500 (dirty read!)

=F0=9F=91=89 If T2 rolls back, T1 read **wrong data**. =E2=
=9D=8C

---

# 📙 2. Read Committed

-- T1
START TRANSACTION;
SELECT balance FROM accounts WHERE id =3D 1;   -- Reads 1000

-- T2
UPDATE accounts SET balance =3D 500 WHERE id =3D 1;
COMMIT;   -- Commit done

-- T1 again
SELECT balance FROM accounts WHERE id =3D 1;   -- Reads 500 now

=F0=9F=91=89 No dirty read, but value **changed mid-transaction =3D Non-repeatable read** =E2=9D=8C.

---

# 📙 3. Repeatable Read

-- T1
START TRANSACTION;
SELECT balance FROM accounts WHERE id =3D 1;   -- Reads 1000

-- T2
UPDATE accounts SET balance =3D 500 WHERE id =3D 1;
COMMIT;

-- T1 again
SELECT balance FROM accounts WHERE id =3D 1;   -- Still 1000 (consistent)

=F0=9F=91=89 Same row gives **same result** ✓.

But if T1 does:

SELECT =
* FROM accounts WHERE balance > 800;

And T2 inserts a new row with balance `900`,

T1 may see a **phantom row** =E2=9D=8C.

---

# 📙 4. Serializable

-- T1
START TRANSACTION;
SELECT * FROM accounts WHERE balance > 800;

-- T2 (blocked until T1 finishes)
INSERT INTO accounts VALUES (2, 900);

=F0=9F=91=89 Prevents dirty, non-repeatable, phantom ✓.

But **slower** since DB locks more aggressively.

---

* **Key takeaway**:

If you want **speed > safety** -> use **Rea=
d Committed**.

- 
If you want **strict correctness** (like in banks) =E2=86=
=92 use **Serializable**.

---

=F0=9F=91=89 Would you like me to draw a **timeline-style diagram (T1 vs T2 actions side by side) so you can *visualize* how =
these anomalies happen?

Perfect =F0=9F=91=8D Let's go through Concurrency Contro=
l in Databases** step by step.

---

# =F0=9F=94=
=B9 **What is Concurrency Control?**

- 
In a multi-user database, many transactions run **at the same time=
**.

- 
**Concurrency control** ensures these transactions execute =
**safely and correctly**, without interfering with each other.=

=F0=9F=91=89 Goal: Maintain **consistency & isolation**=
 (ACID).

---

# =F0=
=9F=94=B9 **Why Concurrency Control is Needed?**

If multiple transactions run together **without control**, =
problems can occur:

### **Problem=
s in Concurrent Transactions**

- 
**Dirty Read**

One transaction reads uncommitted changes of another.

- 
Example: T1 updates balance =3D 9000 but not committed -> T2 read=
s it -> T1 rolls back -> T2 saw wrong data.

- 
**Lost Update**

Two transactions overwrite each other's changes.

- 
Example: T1 updates balance =3D 9500, T2 updates balance =3D 9300 =E2=86=
=92 final =3D 9300 (T1 lost).

- 
**Non-Repeatable Read**

Same query in one transaction gives different results.

- 
Example: T1 reads balance =3D 10000 -> T2 deducts 1000 and commit=
s -> T1 reads again =3D 9000.

- 
**Phantom Read**

New rows appear/disappear during transaction.

- 
Example: T1 checks orders > =E2=82=B91000 (5 rows) -> T2 inser=
ts a new order of =E2=82=B92000 -> T1 checks again, sees 6 rows.

=

---

# =F0=
=9F=94=B9 **Concurrency Control Techniques**

### **1. Lock-Based Pr=
otocols**

- 
DBMS uses **locks** to control access.

Types of locks:

- 
**Shared Lock (S)** -> For reading (many can read).

- 
**Exclusive Lock (X)** -> For writing (only one can =
write).

#### Two-Phase Locking (2PL):

- 
**Growing phase** -> acquire locks.

- 
**Shrinking phase** -> release locks.

=F0=9F=91=89 Guarantees serializability but can cause **deadlocks.

---

### 2. Timestamp=
 Ordering Protocol**

- 
Each transaction gets a **timestamp**.

- 
Operations are ordered by timestamps.

- 
Ensures older transactions are not overwritten by younger ones.

---

### **3. Opti=
mistic Concurrency Control**

- 
Assume conflicts are rare.

- 
Transactions execute **without locks**.

- 
At commit: system checks for conflicts.

If none -> commit.

- 
If conflict -> rollback.

=E2=9E=A1 Used in systems with **many reads, fewer writes**=
.

---

### **4=
. Multiversion Concurrency Control (MVCC)**

- 
DBMS keeps **multiple versions** of a record.

- 
Readers see a **snapshot** (no locks).

- 
Writers update new versions.

=E2=9E=A1 PostgreSQL, Oracle use MVCC.

=E2=9E=A1 Prevents readers being blocked by writers.

---

# =
📙 **Isolation Levels (SQL Standard Recap)**

- 
**Read Uncommitted** -> Allows dirty reads.

- 
**Read Committed** -> No dirty reads, but non-repeat=
able reads possible.

- 
**Repeatable Read** -> Prevents dirty & non-repe=
atable reads, phantom possible.

- 
**Serializable** -> Prevents all issues (safe but sl=
ow).

---

# =F0=9F=
=94=B9 **Deadlocks in Concurrency Control**

- 
**Deadlock** happens when two transactions wait forever for=
 each other's lock.

Example:

- 
T1 locks Account A, waits for Account B.

- 
T2 locks Account B, waits for Account A.

=E2=9E=A1 Both stuck -> deadlock.

**Solutions:**

- 
**Deadlock prevention** -> assign priorities, abort =
lower priority.

- 
**Deadlock detection & recovery** -> detect cycl=
e in wait graph, abort one transaction.

---

# 📙 Real-Life Example

**Bank Example**

- 
T1: Transfer =E2=82=B91000 from A -> B.

- 
T2: Transfer =E2=82=B92000 from B -> C.

If both run together without control:

- 
T1 reads balance of A, T2 updates B -> inconsistent final balance=
s.

With **locks / timestamps / MVCC**, DBMS ensures:

- 
Either T1 finishes before T2 starts,

- 
Or T2 waits until T1 commits,

- 
Or snapshot version is used (MVCC).

---

✓ **In Summary**:

- 
Concurrency control ensures **correct execution** of multip=
le transactions.

- 
Problems: dirty read, lost update, non-repeatable read, phantom read.

- 
Techniques: **Locks (2PL), Timestamp ordering, Optimistic control,=
 MVCC**.

- 
Issues: **Deadlocks** must be handled.

---

Do you want me to also make a **transaction timeline diagram (showing how T1 & T2 run under lock-based, timestamp-based, and MVC=
C) to visualize concurrency control better?

- 
Access control and security; 

Alright =F0=9F=91=8D let's go through Access Control and=
 Security in Databases** step by step.

---

# 📙=
 **What is Database Security?**

Database security ensures that **data is protected** from:

- 
**Unauthorized access** (hackers, unprivileged users)

**Data corruption or loss** (malicious or accidental)

**Privacy violations** (sensitive data leaks)

=F0=9F=91=89 Main goal: Ensure **Confidentiality, Integrity, and A=
vailability (CIA triad)**.

---

# =F0=9F=94=
=B9 **1. Access Control in Databases**

Access control decides **who can do what** in the database.=

### **Types of Access Con=
trol**

- 
**Discretionary Access Control (DAC)**

Data owner decides **who can access what**.

- 
Implemented via **GRANT/REVOKE** in SQL.

-- Give=
 user read access
GRANT SELECT ON Employees TO User1;

-- Remove permission
REVOKE SELECT ON Employees FROM User1;

- 
**Mandatory Access Control (MAC)**

Access is based on **security labels/levels** (Top Secret, =
Confidential, Public).

- 
Example: Military or government systems.

- 
**Role-Based Access Control (RBAC)**

Permissions are assigned to **roles**, users are assigned t=
o roles.

- 
Easier to manage than per-user permissions.

-- Crea=
te role
CREATE ROLE Manager;

-- Give role permission
GRANT SELECT, UPDATE ON Employees TO Manager;

-- Assign role to user
GRANT Manager TO User2;

---

# =F0=9F=
=94=B9 **2. Database Security Mechanisms**

- 
**Authentication**

Verifying user identity before access.

- 
Methods: username/password, biometrics, 2FA, LDAP, Kerberos.

- 
**Authorization**

Deciding what actions an authenticated user can perform.

- 
Example: Only HR can view salaries.

- 
**Encryption**

Protects sensitive data in transit (SSL/TLS) and at rest.

- 
Example: Encrypt credit card numbers in the database.

- 
**Auditing and Logging**

Tracks who accessed what data and when.

- 
Helps detect suspicious activity.

- 
**Views** (Virtual Tables)

Restrict access to certain columns/rows.

CREATE =
VIEW Public_Employees AS
SELECT Name, Department FROM Employees;

- 
Prevents users from seeing sensitive fields like `Salary`.

- 
**Database Hardening**

Disable unused accounts, services, and default passwords.

- 
Apply patches and updates.

- 
**Inference Control (for Privacy)**

Prevents users from deducing sensitive info by running aggregate queries=
.

- 
Example: In medical DB, don't allow a query like "Averag=
e age of patients with HIV =3D 1 person."

---

# =F0=9F=
=94=B9 **3. Threats to Database Security**

- 
**SQL Injection**

Attacker inserts malicious SQL into queries.

SELECT =
* FROM Users WHERE username =3D 'admin' OR '1'=3D'1';

- 
Fix: Use **prepared statements**.

- 
**Privilege Abuse**

Authorized users misuse access.

- 
Fix: Use RBAC, least privilege principle.

- 
**Malware & Ransomware**

Attackers steal or encrypt DB files.

- 
**Denial of Service (DoS)**

Overloading DB with fake requests -> service unavailable.

---

# 📙 4. Real-Life Example

- 
In a **banking system**:

Customer -> Can see only **their own account**.

Teller -> Can see **customers' balances**, b=
ut not system admin details.

- 
Manager -> Can approve large transactions.

- 
Admin -> Can manage DB but **not view sensitive data.

This is implemented using RBAC + Views + Auditing + Encryption.

---

✓ In Summary**:

- 
**Access Control** -> DAC, MAC, RBAC (who can access=
 what).

- 
**Security Mechanisms** -> Authentication, Authoriza=
tion, Encryption, Views, Auditing.

- 
**Threats** -> SQL Injection, privilege abuse, malwa=
re, DoS.

- 
**Goal** -> Protect Confidentiality, Integrity, Avai=
lability (CIA).

---

Would you like me to also make a **diagram showing Access Control =
flow (User -> Authentication -> Authorization -> DB Ac=
cess -> Auditing)** so you can visualize it?

- 
Semi-structured database: XML, XPath, XQuery;

Alright =F0=9F=91=8D let's break down **Semi-Structured Da=
tabases** with **XML, XPath, and XQuery** in simple ter=
ms.

---

## =F0=9F=93=8C=
 Semi-Structured Database

A **semi-structured database** is one where data does not f=
ollow a strict relational (table) model but has some organizational structu=
re (tags, hierarchy).

=F0=9F=91=89 Examples: **XML, JSON**

- 
Flexible format -> No fixed schema like relational DB.

- 
Data is stored in hierarchical / tree structure.

- 
Useful for **web data, documents, configuration files**.

---

## =F0=9F=97=82 1. **XML (eXtensible Markup Language)

- 
XML is a self-describing data format**.

- 
Data is stored in **tags** like HTML, but tags are custom-d=
efined.

- 
Represents hierarchical/semi-structured data.

✓ Example (XML file):

- 
   
      Database Systems
      Navathe
   
   
      Introduction to Algorithms
      CLRS
   

---

## =
=F0=9F=9B=A0 2. **XPath (XML Path Language)**

XPath is a **query language** to **navigate and selec=
t nodes** in XML.

- 
Works like a "path" expression (similar to directory paths).

✓ Example Queries:

- 
**Select all book titles:**

/librar=
y/book/title

- 
**Select author of book with id=3D2:**

/librar=
y/book[@id=3D"2"]/author

- 
**Select all attributes of book nodes:**

/librar=
y/book/@id

---

## =F0=9F=94=
=8E 3. **XQuery (XML Query Language)**

- 
A more powerful **query language** for XML (like SQL but fo=
r XML).

- 
Uses XPath internally for navigation.

- 
Supports iteration, filtering, sorting, joins, etc.

✓ Example Queries:

- 
**Get all book titles:**

for $b =
in /library/book
return $b/title

- 
**Get titles of books written by "CLRS":**

for $b =
in /library/book
where $b/author =3D "CLRS"
return $b/title

- 
**Return a new XML with just titles:**

   {
      for $b in /library/book
      return { $b/title/text() }
   }

Output:

   Database Systems
   Introduction to Algorithms

---

## ✓ Summary

- 
**Semi-Structured Database** -> Flexible, schema-les=
s or partial schema (XML, JSON).

- 
**XML** -> Stores data in a tree with tags.

- 
**XPath** -> Navigates inside XML (like file paths).=

- 
**XQuery** -> Powerful query language for XML (like =
SQL for XML).

---

=F0=9F=91=89 Do you also want me to cover **JSON + JSONPath + SQL/=
NoSQL usage** (modern alternative to XML, XPath, XQuery)?

Great =F0=9F=91=8D let's extend the discussion to **JSON +=
 JSONPath + NoSQL** (modern alternative to XML, XPath, XQuery).

---

## =
=F0=9F=93=8C Semi-Structured Database (Extended)

### 1. **XM=
L -> XPath -> XQuery**

(as already explained: XML stores data, XPath navigates, XQuery queries)=

---

### 2. **JSON=
 (JavaScript Object Notation)**

- 
Lightweight, text-based format.

- 
Easier to read/write compared to XML.

- 
Widely used in **APIs, NoSQL databases (MongoDB, CouchDB, etc.).

- 
Stores data as key-value pairs, arrays, objects**=
.

✓ Example (same data in JSON):

{
  "library": {
    "books": [
      {
        "id": 1,
        "title": "Database Systems",
        "author": "Navathe"
      },
      {
        "id": 2,
        "title": "Introduction to Algorithms",
        "author": "CLRS"
      }
    ]
  }
}

---

### 3. **JSONPath**

- 
Equivalent of **XPath** but for JSON.

- 
Used to **navigate JSON structure**.

✓ Example Queries:

- 
**Select all book titles:**

$.libra=
ry.books[*].title

Result -> `["Database Systems", "Introduction to Algorithms"=
]`

- 
**Select author of book with id=3D2:**

$.libra=
ry.books[?(@.id=3D=3D2)].author

Result -> `["CLRS"]`

- 
**Select all book IDs:**

$.libra=
ry.books[*].id

---

### 4. **Querying JS=
ON in Databases**

(a) MongoDB (NoSQL DB with JSON-like storage)

- 
Data is stored as **BSON** (binary JSON).

✓ Example Queries:

Insert document:

db.libr=
ary.insertOne({
   id: 1,
   title: "Database Systems",
   author: "Navathe"
})

Find by author:

db.libr=
ary.find({ author: "CLRS" })

Projection (only titles):

db.libr=
ary.find({}, { title: 1 })

---

#### (b) **SQL Databases with JSON Support (PostgreSQL, MySQL, =
SQL Server)**

- 
Modern RDBMS now supports JSON functions.

✓ Example in **PostgreSQL**:

-- JSON=
 data
SELECT '{"id":1, "title":"Database Systems", "author":"Navathe"}'::json;

-- Extract JSON value
SELECT data->>'title'
FROM books
WHERE data->>'author' =3D 'CLRS';

✓ Example in **MySQL**:

-- Inse=
rt JSON
INSERT INTO books (info) VALUES
('{"id":2, "title":"Introduction to Algorithms", "author":"CLRS"}');

-- Query JSON
SELECT JSON_EXTRACT(info, '$.title') FROM books;

---

## ✓ Quick Compari=
son

| Feature | XML + XPath/XQuery | JSON + JSONPath/NoSQL |
|---|---|---|
| Data Format | Verbose (tags) | Lightweight (key-value) |
| Schema | Optional, but heavier | Flexible, simpler |
| Query Language | XPath, XQuery | JSONPath, MongoDB queries, SQL JSON functions |
| Storage | XML DB (e.g., BaseX) | NoSQL DB (e.g., MongoDB) + RDBMS JSON support |
| Usage Today | Legacy, configs, documents | APIs, Web Apps, Modern DBs |

---

✓ **Summary:**

- 
XML -> Good for document-oriented storage (older systems).

JSON -> Lighter, widely used in **web apps + NoSQL**=
.

- 
XPath/XQuery -> Query XML.

- 
JSONPath/MongoDB SQL-JSON -> Query JSON.

---

=F0=9F=91=89 Do you want me to also create a **side-by-side exampl=
e** showing the **same query in XML/XPath/XQuery vs JSON/JSONP=
ath/MongoDB** for better comparison?

- 
Object oriented and object relational databases. Nice one =F0=9F=91=8D Let's carefully go through **Object-=
Oriented Databases (OODB)** and **Object-Relational Databases =
(ORDB)** with examples.

---

# =F0=9F=93=8C Object-Oriented vs Object-Relational Databases

---

## 1 **Object-Oriented Database (OODB)**

=F0=9F=91=89 Definition:

- 
A database that stores **data as objects**, just like in Ob=
ject-Oriented Programming (OOP).

- 
Each object has **attributes (fields)** and **methods=
 (functions)**.

- 
Directly integrates with OOP languages (C++, Java, Python).

=F0=9F=91=89 Features:

- 
Supports **encapsulation, inheritance, polymorphism**.

Complex data types like images, audio, video can be stored as objects.

- 
Closer match between programming language objects and database storage (=
no "impedance mismatch").

✓ Example (Java-like OODB style):

class S=
tudent {
   int id;
   String name;
   Course course; // object reference
}

class Course {
   int courseId;
   String courseName;
}

In an OODB -> these objects are stored directly with relationship=
s.

---

## 2 **Object-Relational Database (ORDB)**
=F0=9F=91=89 Definition:

- 
A **hybrid** between relational DB (RDBMS) and object-orien=
ted DB.

- 
Stores data in tables (like RDBMS) but supports **object-like feat=
ures** (user-defined types, inheritance, references).

- 
Example systems: PostgreSQL, Oracle, Informix.

=F0=9F=91=89 Features:

- 
Still table-based, but supports:

**Abstract Data Types (ADT)**

- 
**User-Defined Types (UDT)**

- 
**Nested tables & arrays**

- 
**Inheritance of types**

- 
**Object identifiers (OIDs)**

✓ Example (PostgreSQL):

-- Defi=
ne a custom type (object-like)
CREATE TYPE Course AS (
   courseId INT,
   courseName TEXT
);

-- Use object type inside a table
CREATE TABLE Students (
   id INT,
   name TEXT,
   course Course
);

-- Insert with object type
INSERT INTO Students VALUES
(1, 'Alice', (101, 'Database Systems'));

Here, **course** is not just a string, it's a composite object type.

---

3=E2=
=83=A3 **Comparison Table**

| Feature | Object-Oriented DB (OODB) | Object-Relational DB (ORDB) |
|---|---|---|
| Data Model | Objects (like in OOP) | Tables + object extensions |
| Schema | Classes & objects | Tables with user-defined types |
| Query Language | OQL (Object Query Language) | SQL with object extensions |
| Storage | Directly stores objects | Relational with object support |
| Best for | Complex apps (CAD, multimedia) | Apps needing both relational + complex objects |
| Examples | db4o, ObjectDB, Versant | PostgreSQL, Oracle, Informix |

---

## 4=
 **When to Use**

- 
✓ **OODB** ->

Best when application is **purely object-oriented** (C++/Ja=
va).

- 
Multimedia, CAD, simulations, real-time systems.

- 
✓ **ORDB** ->

Best when you want **traditional SQL + object features**.

- 
Business systems, scientific data, applications with complex but structu=
red data.

---

✓ **In short:**

- 
**OODB** -> Pure object storage, no tables.

- 
**ORDB** -> Relational tables **extended with =
object features**.

---

=F0=9F=91=89 Do you want me to also show a **real-world example (like storing a Student with multiple Courses) in both OODB style and ORDB** style side by side for clarity?

Perfect =F0=9F=91=8D Let's illustrate with a **real-world =
example**:

=F0=9F=91=89 Task: Store **Students** where each student ca=
n take **multiple Courses**.

---

# =F0=9F=93=8C Sid=
e-by-Side Example

## 1 **Object-Oriented Database (OODB)**
Here everything is stored as **objects** (like Java, C++, P=
ython).

// Defi=
ne Course class
class Course {
   int courseId;
   String courseName;

   Course(int id, String name) {
      this.courseId =3D id;
      this.courseName =3D name;
   }
}

// Define Student class
class Student {
   int id;
   String name;
   List courses;  // student has multiple courses

   Student(int id, String name) {
      this.id =3D id;
      this.name =3D name;
      this.courses =3D new ArrayList<>();
   }

   void addCourse(Course c) {
      courses.add(c);
   }
}

// Example usage
Student s1 =3D new Student(1, "Alice");
s1.addCourse(new Course(101, "Database Systems"));
s1.addCourse(new Course(102, "Algorithms"));

=F0=9F=91=89 In an OODB -> these objects (`Student` + =
`Course`) are stored directly with **object references.

No need for JOINs since objects already contain other objects.

---

2 Object-Relational Database (ORDB)**=

Here we use **tables + object-like types**.

-- Step=
 1: Define Course type
CREATE TYPE Course AS (
   courseId INT,
   courseName TEXT
);

-- Step 2: Students table with nested courses array
CREATE TABLE Students (
   id INT,
   name TEXT,
   courses Course[]
);

-- Step 3: Insert student with multiple courses
INSERT INTO Students VALUES
(1, 'Alice', ARRAY[
      (101, 'Database Systems'),
      (102, 'Algorithms')
   ]::Course[]
);

-- Step 4: Query student courses
SELECT name, unnest(courses) AS course
FROM Students
WHERE id =3D 1;

=F0=9F=91=89 In ORDB ->

- 
Data is still in **tables**, but `courses` is st=
ored as an **array of Course objects**.

- 
We can query them using **extended SQL features**.

---

## =F0=9F=
=94=8E Quick Comparison in This Example

| Aspect | OODB | ORDB |
|---|---|---|
| Data Representation | Direct Student + Course objects | Table Students with object/array type |
| Storage | Stores object graphs (with references) | Stores rows with embedded object types |
| Query | OQL or programming language methods | Extended SQL (with ARRAY, UDT, unnest) |
| Flexibility | Natural fit with OOP languages | Balanced between tables + objects |

---

✓ **In short:**

- 
**OODB** -> "Feels like programming"=
 (objects inside objects).

- 
**ORDB** -> "Feels like SQL with extra power=
" (tables + object extensions).

---

=F0=9F=91=89 Do you want me to also add a **diagram** (OODB=
 object graph vs ORDB table with nested objects) so it's even easie=
r to visualize?

    

------=_Part_526_507440834.1760785649195
Content-Type: application/octet-stream
Content-Transfer-Encoding: base64
Content-Location: file:///C:/7091b282625dee532c4a10df1792179f2dab6cbc3b698f776b0c2d05da84e85e

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
Ix/1yN/8jd/gsr/4i788feb0sePHx3F8iZd48et/6/rP/IzP+q7v+s7f+Z3f4X5/8Rd/8bSnPe0d
3uEd3vZt3/Zt3uZt/+qv/vqlXvqlAElAqSVbAy5dulRKlFIk2ZY0tRYl5ovFq77qq77yK7/ya7/W
a586dXK5XG5tbc3nc0OttbXWd13XVdvAe7/Pe7/8K7z8r/3qr73P+77vD/3QDx0/doz7HT9x4lu/
7dv/4A//4Cu+/Cve9M3e7P3e9335PwcAKogHOH78+Hd/13c9+CEPvvOO20+eOsX/PD/wAz/wsR/7
sY985COBr/yKL7+4e3EYhijlm77xm/7+H/7hsY95zBd+0Rfu7u5+9md/9t333H3tmWu++Eu/9L57
7/vGb/zGCxfOv/Zrv/Z8Nl8tVweHB9/5Hd/xxV/0Jfeeu+/zPvdzl8vVqdOnPuPTP317e5t/JWMw
/3Faa4959KNf8RVfkf/Npmn6uZ/7OduS+Hdrra1XK+7XWlseHV1/w/Wv9Mqv9Pmf/wVf9VVf+b3f
+70f/CEf8tjHPuaHf+iHv+iLvkiwXq+Bd3+Pd1+tVq/wCq/wK7/yK9hctrmx+aVf+qXnz59fLlcH
B/uPfexjF/PFvffe+03f9E3v937v98hHPuqbvvmbL+5e+vlf+IVXf7VXv+666za3tr7xG7/x5MlT
f/s3fzubzd/6Ld/yp3/mZ44dP/ZTP/mTH/ABH3DyxIlhvW4tS4k2Tdnaqeuuw3z7t3/7u77Lu37D
N33jddde+7qv+zq//4d/0FrjAZ78pCd9wed/wcd83Mc+7OEPPzw44P8iAAgwDzCbzR78kAd//ud/
/od86Ie+93u9F//DHB0d3X333S/+Yi8OAMeOHXvwgx4s6fy58y/zsi/zvd/7PX/+l3/+13/zN09+
ylNe4RVe4Qd/4Afuuefen/jxH0f88q/88nu913u98zu/8zAMEuMwPuXJT1Xocz/3c1/iJV7iW7/1
W0L65m/+Fv4NjPmPZKed/G8nZbbM5D/Ce77ne77ma74m93und37nV3nVVwU+7uM+7jVf8zUkfce3
f/srvsIrrtfrb/3Wb32t13qtzPz4j//406dPv9IrvuK3fMs3A2/8xm/8iq/0Slz26Mc8+ju/87vO
nTvXWvvWb/3WM2fOzGazL/7iL75w/sKlvUsf/MEf9Cqv8iqPf8LjPvuzP+vN3vRNgS/7si89d+7c
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
vd9787d4i1d4xVf8uI/92Nd4jVf/hV/8hXvuvffmm2568IMf/Kd/+icv8RIv8f3f9/1f/TVfPU1T
axOQmethDVx73TXf9/3fd/MtNys0jiMg8du/9dtIf/zHf3zs2M6bvdmbcr+P+4SPb9PEZaUU7vew
hz705ImTf/7nf37jTTf+7M/+3Fd8+Vf89m//9p133vmYxzzmAz/gA7/wi76w67oLFy884hEPv7S3
9+d/9md/9Ed/dO211955552/8eu/8fSnP+3pT3/6qVOnZrPZd3/Pd7/4i7/47/zO77zFW7z5m7zJ
m3zcx37cfffd96d/+qeGj/nojx7W68wEpmlqrR0/fqyW8rM/+3Pv8i7vnHbLVGi1Wv7mb/zm5tbW
D//wD7/NW7/N9dddz78SAJSHP/zhr/qqr8r/SH/+F3+5e3H39V//9fmf6s///C++93u+91M+5VO2
t7f5D/IjP/KjL/uyL/vIRz6SB/jt3/7tk6dOvsqrvAogabFYRJSu66ap/fiP/dibvfmbb29v8zyO
jo5++qd/+m3e5m02NjaAv/7rv77m2ms3Nza++Zu/+Rd/6Ze+9uu+7mVe6qXf/d3f/c677vq93/u9
N3jDN/yTP/7j13md1/n8L/j893//9//bv/mbt37rt37Zl33Zn/yJn/jar/va3/6d337Jl3rJUydP
GcS/7NZbb/2zP//zd3iHd+A/wou9+Iu/+Eu8xBOe8IRXf/VX/+iP/qhauxMnTrzYi73YDTfcsLFY
vPZrvfZLvNRLXnvttVy2mM83Nzd/9Ed/tGV+7Md8zPb29r333Hf+3LmXe7mXu/HGG2+++ebv//7v
f/wTnvCRH/mRL/uyL3v8+PGuq3/4B3/w6q/+Gq/4Sq/0S7/0S3feecebvMmbPvrRj36xF3ux7e2d
n/zJn3zJl3zJl3+5l3/xF3/xV3nVV/293/v9v/qrv3y7t3/7Rz3qUeM43nDDDY985COnaVosFi/x
Ei/x2Mc+9u/+/u9AL/FiL94yX+EVXr7v+8PDw+XR0eu8zut86Id+aNd13K/rutlsNpvNZrNZ13Xc
r5Tyqq/2ar/2a7/293//D2/3dm/78Ic97MlPfvLZs2ff/M3f/Oabb/7+7/+Bv/+Hv//wD/vwl3v5
l7/22mvX6+FP/uSP3/It3/Kaa6757u/+nptuufnVX+3VXuZlXvZVXvVVfvqnf+bee+59y7d8y0c/
+tGPfvSjz1xzzQ/+4A90tXuf93nvra3N5Wr1si/7shsbG8vl8iVe7CVOnjp18803/fqv//rLvMzL
bGxunjl9+iEPecj+wf4znvGM8xfOvfO7vPM7v9M78a8HAHrYwx72DV//9a/5Wq+VmdlagrhMYJ5N
YF50trmfJMA2z8MAYEsCDGAMMJvNv+Wbv/mOO+/4wi/8wuVqBRbYPCeBeRYhhISNhEGIZxKyjLnC
AMYYsAHAgA0YY8A2YBvANpA2drb8+3/4+4/7uI9767d+68/5nM/hP85bv/Vbf8D7f8Cbvfmb8QDf
8A3fcPvtt3/xF38xABweHs7n81LKer1++7d7+2/+lm+58cYbeB7nzp17r/d6r+/5nu85ffo08P7v
//7v9E7v1HXdV37lV377d3z7/v7Bx3zMx3zEh3/4DTfc8NEf/dHf+73f+4Ef+IFv8iZv8uQnP/lj
P/ZjP+VTPuX7vu/7JAF33333l3/5Vzz96U/7yZ/8SV40v/3bv/NN3/gNP/KjP8r/GAbxH8sgrnrB
AKB+1Ed91Cd+0ictFotaKsI2IEmSjcQzSQA2AtsGJGHAliQpnU4kQGDbXCYJsM1zMuYKIwQYY6cN
RJTl8sjOP/6TP25Tsw3OtG0us22MuaJlAgJJaTttJ8ZYCrAkQJIUkngmRwQgycZ2RJQSxjYCgQEk
jMK2BFIbJ4Xe7d3f7aM/+qP5DyVFc/KcXue1X+eDP+RD7r7rrutvuOGuO+/60A/90G/4xm+48cYb
QZlpJy+A7YgA/uLP/+JpT3vaK77SK/3Jn/xJP5tdc+aaa85cc3zn+N133X3TTTdN03T99de/7Mu+
7Bd/8Rf/0i/9kp3A0dHy4z72Yz/t0z/95ptvesu3fMvP+7zPA4N4EUiA+J9E/IcTV71QAFA/4iM+
4l3f7d1uffrTJc1mM0kCJEmSeB4GsADEZcZCkgDbXCbJWIgHkGRb4jIhMJKAtMWz2cYoZDyOo9PY
SLadiQTOdGYKgLSdachMwLZt23ZiDIBtQZQiUEREAJJKKREhKRQts5ToalUISSgiSomIAkSEpIgo
pQhtb28vNhb8RwshnttjX+yx7/SO7/hu7/ZuL/nSL/WXf/lXb/EWb3HjjTcCwunMTJ6fEmV/b+9D
PvhDCHYvXvr0z/iMYzs7XVcf9w+Pe7d3e7fd3d2Njc23fpu3vvXWW/uuA97jPd7zmmuufbEXe7Gn
Pu1pkjY3Nx7xyEe813u95yu/yqv+7u/8zvu///uDeNEYK7jq/zkAkG2u+p/k7d/+7d/jPd7zrd7q
LXkeT3ziE5/4xCc+9KEPffEXf3Euy8wnPvGJD33oQ2ezGc+jtfa0pz398PCg1vqgBz1oe3sbODw8
vPUZzxiHYTabPfShD53NZsvl8p577nnIQx7C/dbDcPdddz/4wQ+y/Zd/9VdPftKTHvWoR7/My7w0
L7Lf+q3f+pZv/uYf/pEf4ar/xwCgctX/MLXUzOT5edSjHvWoRz2KB4iIxzzmMbwApZRHPOLhPKfN
zc0Xe+xjeYDFYvGQhzyEB5j1/YMf/CBA0su97Mu+3Mu+LP8W4qr/3wAguOp/mNIVO3nRmf+JjDH/
oXZ3d3/xF39pHEfgT//0z77t277tD//wD7nsr/7qrx7/+Met1+uf+umf3t3dBe6+++7f+73f4wHu
vvvuL/mSL/n4j//43/3d3+Wq/xIAEFz1P0yNYpsXnfifSPyHu+vOuz7ncz57mqYf/IEf+OiP/qhb
b731kz7pk7/hG74B+Kmf+qlf+7VfPzo6+tAP+ZBv/MZvBP7+7//+G7/hG7nfvffe+17v9d62X+ql
XuoTP/ETf+7nfo7Ljo6OhmEADLYBwLZtIJ2ZOQwD0Fo7ODjITC6bpung4MA2l7XWDg4OMpPnZ7lc
rtdr/v8BgMpV/8Mowjb/+0n8x1Ko7/oLFy9+0zd/81d/9Ve/4iu+4pOe9KT3fI/3fLd3f/d+NisR
dt58882/9Iu/9O7v/u6z2azUwv2+53u+++Vf/uU++ZM/GXjxl3iJ5dES+NZv/bZf/dVf6Wezj/no
j3mFV3j5T/jET3qXd3nnl33Zl/2e7/merc2tt3uHt//oj/zog4ODRzzyER/2YR/2qZ/6qffec++D
HvygL/riL77v3ns///M/b7UaHvGIh3/Kp3zK7qVLn/mZn3XfvffceOONn//5n7+xscED/MiP/uiP
/NAPq+hDPvhDXv/1X5//TwAguOp/GEn8HyH+w0ln77vP9mMe8xjgEY94xOkzp5/w+MfXUmynOX7s
+Lu867t+yZd8SaYxz/I3f/N3r/qqr8plL/PSL/2qr/oqf/lXf/kLv/gL3//93//RH/VRn/d5n2v7
iU964v7ePnDPPffcd999gt/9vd97pVd+pY/7uI/7zd/4zWEYfvTHfvSVX/mVl8vl53/+F7zcy738
t3zLN996660/8zM/+xd//ud7l3Z/5Ed+5LVe+7X3D/Z5gKc//enf/V3f/a3f9q2f+Rmf+bd/+7f8
PwMAwVX/w5RSeAFs1sNgm3+Hw8PDcZz412jZbPOvYVsS/6EiQpIh0601LmutIQAkofWwftd3fZf9
g4Nf/MVfmM1n3G9jY7FcLnmAv/rLv3roQx4yn89f4iVe4uDg8O677571sygBYAzA6dOn3vRN37Tv
+1d9tVfd399/+7d/e6Stra0nPPEJv/f7v//xH//x+3v7+/t7r/wqr2L7rd/mrff29q45cw0PcNtt
tz3kIQ8+ffr0S73US33sx34s/88AQHDV/zjKTJ7H05/+9A/6oA9867d6q/d67/d60pOeBNx1110f
/uEf/vbv8A7f8A3fwAt21113vdd7v/edd97JZR/0QR/0p3/6J/xrfOmXfOlP/MRPAE992tOOlkte
RDb/ES5duvSZn/mZl/b27r777trVRzziEbNZ//u///vAX//1X58/f+HFX+zFp9Zsg0GzfvYJn/Dx
P/XTP91a436v8qqv+pM/+ZNc9hVf8RXf/d3f/aAHPfj8+fPAwcGBxM7OTq3l6OgIuOuuuyIECATA
arX6yq/8qi//8i//5m/8pr/9m7+5/rrr3vd93udrv/ZrP/MzP+P1X//19/b2vviLv/hrv/brfugH
f/C3f/u3eYDjx47fdeddwN7e3q//+m/w/wwABFf9j2PbXGGu2N8/+KAP+qCXedmX/Z7v+Z6Xf7lX
+KiP+mjbn/LJn/Lwhz/8K7/yK3/6p3/693//93kBfvM3fvPXf+3Xf/3Xf53LLlw4Pwxrnj/b5nm8
zdu+7Su/8qsAn/7pn/7kJz2JF41t/iMcO3bs3Plzb/NWb/Xpn/7p7/e+77e1ufkZn/GZX/hFX/Su
7/ouH/mRH/nxn/DxW1tb0zi21owzcxiHl3jxl3iHt3/7w4ND7veu7/Kui42Nt32bt32f93nfX/yF
X3zN13zN13md1+66/qM+6iM/8iM/6m3f9u22trbe+I3f+Iu/+Is/4zM/82//7m9LKQBS2sA//MPj
3v/93u8Hf/AHT5w6edNNN33wB3/wl3zJl3zCJ3zCx3zMx+7v7z/piU/8wA/4gB/54R9eLBYPuuVB
PMBLvfRLPeoxj37f932f9/+AD/izP/8z/p8BANnmqv9JPuADPuB1X/d13+Vd3oUH+LEf/7Gf/dmf
+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
Ads8kw1GATbINhI2GJwGCIVtY2yQMbYBAwYi4sLF3V/8pV/54R/+kR/50R95+MMexn8cSfzne9VX
fdUv/uLTf/Znf/YxH/Mxr/zKr8x/NNv8x/mhH/qhb/yGb/ywD/+w3//93/+gD/zAH/nRH33qU5/y
yZ/8qadOnX6v93rPf/iHf3jqU5/yHu/+7tzv4PDwb//mb2688cYHPehBPMC3fuu3/uEf/tG3fuu3
3nvvPR/z0R/7Yi/2Yi/+4i9+7ty5xz/+CY9+1CPPXHPNNLXz589dc+YaxMWLF0+eOLm3d2mcpvPn
z1933XWbm5t/93d/t7Oz89CHPhTIzH/4h8fN57NHPOIRwN/8zd889GEPe8mXfsk//7M/+9qv+zrb
X/ZlX3bfffd91Ed9FC+CZ9x22+d+zud+xVd8+cu+3Mt//dd/3Vd+9Vd9/dd9fWvtL//yL7uuf8mX
fImIuPfee3eOHVvM55cu7WW248eP33nHnX3fnz179sVe7MXuuuvuJz/5SY997GPPnDkDPO1pT7v9
jjte5qVfemdnp7V2dHQEPPWpT/uCL/z8l3+5l/+RH/3RD/uwD/vRH/3RxWLBfxoAqE94whN++id/
8OYH3USbsME8k8AYEAIMgMAYJDAGcYWNxDMZxGUCwBjEZQLAAIgHMggwiGcyiOcmMBKYBIGEARAY
APEcDIAAYwEIzDMJMAgbCYwFIIN4FoO4zBgiPuLDPuhDP/zjPvVTPvVHf/RH+I8jKW3+8z3ykY98
5CMfyX8OA4j/CK217/zO7/ysz/6s13/913/7t3+7N3yjN/nDP/yjUsorvuIrfO/3fPebvumbzBeL
rvbcb3f34id90ic/7GEPe+ITn/hu7/7ur/s6r8NlmflLv/TLn/3Zn3XzzTfffPPNP/4TP37s2LGn
PvVpn/iJn3DzzTc//WlP+5Iv/dLTp8988Ad/yA/+4A8o4qM+6qO+6Zu+6cd+4ie+//t/4Mzp05/3
eZ/3Yz/+Y3feeefepUtv+qZv+m7v9m5f/uVffs899y6Xy1d65Vd67/d6r1JKV6vT88XGYx796Pli
8YVf+IUf9MEf/P7v//6bm5tc9nM/93N/9md/VruujePDHv7w93zP9+R+v/orv/IKr/gKL/fyLw98
yId8yMHBAfAZn/EZ99xzD+ihD3vop3/ap33u537uu7/7u7/Kq7zKT/7UT166uPsRH/kR7/ke73ns
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
YuMbv/4rT5zYPjhYzmazImVzICBt25K4zASKa6+95kd/+PvuvPOub/+O7/2AD/qI3/71nzt58ljL
xv3MAwgMAjCXCQCDAJBs8x+qZfIfpOu6F3uxF+OyF3+Jl+Cyxz72xbjsxhtvfPu3ezvud/PNN73b
u70r/0EkScF/hDOnT4/T+Ixn3Dab9b/xm7/xuq/7Oo961COf+tSn3Xzzzffde9/hwSEgcf782Wka
L+1duu666374h394WK+2d3Z+6Id+6NGPefQ3f/M3/fqv/8bnfPbnvPZrvda5c2c/7uM+9o3f+I2O
jpabm5vc7+LFi9/zPd+zXK7e+73f6/rrr+d+3/iN33jmmmu+4su/HPiMz/jMP/2zP3/jN3rDn/qp
n/qLv/zLN33TN33VV3mV8+fP//0//MNrveZrLpfLv/zLv3y1V3u1v/rrvx6G4e/+9m/f9u3eNhTf
9V3fFRHv+q7veubMmWc847Yf+ZEfvvnmW97u7d627/vVcvUHf/gHv/Zrv/YGb/AGe3t7R0dHwC/9
0i/98R//8Ru+0Ru+2qu+2tNvvfXee+/527/9u3EY3/ld3vknfuLHl8vV+73v+25tbe3v7X3/D/zA
4dHRu77ru9xw/Q38jwQAgXkuAoGQDEiI5yHEs6mU8jd//Tef/mmf8kmf9Jmf8Amf9o3f9J2KMo7j
OE2A0+vVymYax3EaDdnazTdd/5qv+Wqf+Zmf/8u//Muf+mmf11p70zd+g/V6vR7WTjs9DAPIyTCO
AGaapmmaANvTNI3D+Eqv+LJdLd/yrd/xd3/7+I/+6E/4+V/4JXXdOI0tE8j0MAxtyp2d7X7Wf+d3
fv+f/9lff+d3/cB7vc8HlRIPfdiD7ZQECAEYsDDPYhDPwWAQACCMEVc9NxvzH0OhRz3q0U960hP/
/M///I3e4A0e9/jHPeUpT50v5qdPn661+4u//Mtf/uVf/tmf/dm9S3sRERFHR4d/9qd/+hd/+ZcR
UaIsj1a3337HPffce/zYsVKKFE996lP/7M/+4klPetJiscH9Pu7jPu7g4GBzc+MTPvETM5P7/c1f
/83bvs3bAMDnfd7nvvEbveF3f9d3/+zP/syrveqrftEXfOGf//mf33rrrZ/zOZ8DXDh/4fM+7/OA
7/2e7/nQD/mQO++8a9bPPvmTP7nWruv6b/u2b9vd3f2ET/zEF3+Jl3ja05/2ZV/25UA63+d93ucb
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
GMQDiJbBfzzzPH72Z3/upV/qpd/yLd8SeOd3fufXfM3XBD73cz9nPp+vVsudnZ2NxYLn8Sd/8ifL
o6NP/MRPkPQWb/7mj3nMY6695pqv+sqvfMVXfMXTZ858wRd8/no9fNAHf9DZe8/+8I/8MPAO7/AO
7/7u7/YxH/Mxn/3Zn33mzJnP/bzPefmXf/lMr9erm2+6+W/+5m/Pn79w4003njt//ju+/TvAr/Va
r/XRH/3RPD8CJP6vM4irXiAAqH/5V39z6zOe7rSxEIAA2QgbAIWwbUASTkvYIJ7JgBDCBhAGDCCw
QTwHGwAbsHgWgZ1YCEcpJcowDoBtsBDCRpC20wA4bRtAOJ02AlDLtImQRKbB2RIBAuwEbK4QgAAE
gM0DCZBAEmAbSdL+/n5E4T+ODYjn9JSnPOXlX+HluayUcvPNNwPb29u/+7u/+yEf+qGv/3qv9+hH
P5rn8bSnPe2aa66RxGUPf9jDgIu7u6v1umU++clP+f7v/742ta/48q/4wR/8wfV69XVf//WX9vbu
ve++qTXg7Nlze3t7Ii5d2n3Xd3nXl3qpl3qf93nvV37lV37Lt3yLj/yoj37N13iN3/qt38rMiOD/
K3HVCwMA9Qd+8EeOjo5AAiRAArCxDSCEwAAI2zgibJ5JksCEpJBtkLEgSpGEnXZIAJIAoxASWAgh
ZFNK2LaN1HfdnXfeeddd97zUS70EIMlGQagoEAEGJEkhYVsSSIEU2JJswFGKINNgUEgGCduAFEA6
hSRssI2RMBGybSywBQaBMQRO7+3tR4j/OLaNeU4bGxuXLl3iebziK77ST/3UT33SJ33iX/zFX77c
y70sz2k2m4/TwHMqJSQN4/ASL/ESj370Y37iJ37iEY985OnTp4Ev/qIvXq5WgBRALQVkpySgFM1m
PfABH/CBX/HlX/4jP/TDH/TBHxQRPH+yzX8y25cuXTp27Jgk/qPZvnDhwrHjx2sp/CsdHBxsbGxE
BP+/AUD9yq/8yoc85CH8j/RDP/RDP/7jP/4TP/ET/E+Vma/3eq/fWuM/lHhur/AKL/9N3/RNH/Zh
Hybp3Lnzn/Ipn/KFX/j5P/fzv/A6r/3aj3zEI44fO/7kJz/55V7uZXlOr/iKr/DVX/3Vd99zz/XX
Xdda+6zP/Kz3e//36/oeEMIAx0+c2N/bB1prv/lbv/UKL//ybtmmAdjfP4iI1hoCqLWfpga83Mu9
3I/8yI/8/u///sd+7Mf91E/95KlTp/hv8hd/8Ze/+Au/8Jmf9ZnAl3zJlxw/ceKDPvADgb/4y7/8
sz/90w/+4A/mRfbXf/M3P/njP/G5n/e5Z+87izhz5sx6tX6/93u/r/u6r7v55pv51zg6Wr77u7/H
l37plzzykY/k/zcAqLb5n8rOzOR/Non/WJIk8Zze4A3e4Cd+8ife/d3f49Ve7VV/6Zd/+bGPeeyZ
M9ecP3fuIz/yIx/z2Be79757X+d1X4fn8aAHPejt3u5t3/u93ust3uIt/+zP/uzS3u6DH/zgNrXM
lpnNCbzaq77qt37Lt3zRF37hpb292++44w1e//Wvv+GGT/mUT3vkIx/5jGfcWiKyZTYDL//yL/dF
X/zFXdf/3M/+7Ob25kMe8tDrrr9uc3OTF8TmP9lf/MWfP/VpTwUuXrz4sz/7sydOnnif937vvu/v
vOOOP/j9P/jgD/5gYL1eA7PZzCBw5sHh4ebmZkSAQa21qbWbbrzxjd/kTYBv+ZZvmc36T/jET0y8
t7c/TtOFCxd2dnZqrVx2dLTsutp13XK5RFrM51y2Xq9r7UqJ2azv+w7E/3sAUPkfTfyvYP4D2Uji
OZVSvu5rv+5nf+7nnvKkJ7//+73fm73ZmwEf93Ef97Iv87LPeMatH/NRH3ntNdfw/Hzsx37sy73s
y/7hH/3Ra7/2a7/d272tpHd/93c/cfx41/cf97EfC8zn82/8xm/8yZ/8iWuvu+5TPuVTgM///M//
8Z/48dOnT73927/dYj6PUsZxBD7wgz7o+htuOHHi+Od9/uf95E/+5KW9va/6qq+az+e8AOY/zO/8
zu/cddddUco0TTfecMNrv/ZrA8AbvdEbP+QhDwF+8zd/65Ve6ZUuXbr0x3/8x6/5mq8ZUWpXgd/8
zd/6hm/8hlMnT9r+hE/4hJtvueWTP/mTb33606+77rov+uIvWq/Wn/M5nyPFy7zMy7zyK7/Sr/zK
r1x77bU///M/N01tY2v7gz/oA6OUL/vSL33605/2yEc9+mu/5mu+7/u+7w//6I/2Ll2apukt3uIt
fuEXfmF399JXfMWXP/axj/36r//6P/zDP6pd/YxP//Sbb775Pd/zPR/+8Ify/x4AVMT/WKWEFPzP
lpkW/4HE8zefz9/xHd6BB4iI13v91+Nf8lqv/dqv9dqvzf0e+chHctnx48e57NSpUx/wAR/I/Y4f
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
zDde4sVfHPjcz/vckydPAp/xGZ/eMoFP+uRPfsM3fqNrrrnmphtvftSjHgV87ud+3u7uxam1EydO
3HjDDdwvIiTxnE6ePPEDP/gDj/uHf1itVo95zGOOHTsGfOmXfdnf//3fO/MlXuIlgBtvvPGnfuqn
nvGMZzz84Q8/f+5cRHz6p336fDEHTp8+86M/8iN//w9/f/r06Yc//OHAD/3gD/793//9zs7OIx/5
yMz8ru/6rhtvvBH4lV/+lfWwjogbbrhhsVjw/Bgh2eY/jjMxz2VqbWdzmwe4ePHiN37zN33RF37h
3t6l1qZhPfSznufxm7/5m8dPHE/7xMkTv/u7v/tiL/ZimfmhH/KhwJu/2Zvdcecdz3jGrV//9V83
n89f9dVfTYo//eM/+bZv/7abbrrpnd75nX/qp37qPd7jPWb9jMtKKQJFvOd7vMerv/qrP/GJT7z3
3vue8IQnfPqnf9o4tpd5mZf+7M/+bJ5FXHUVAFTbPKdTp0+/2qu/Og/woAc96EEPehCXveIrviIP
sLGx8Rqv8Ro8wGKxeOVXemXu99CHPpTLzpw5w2WLxeJVX+VVAWA+vxa47rprr7vuWp6H04jn1Xfd
S7/0S/MAtZSXfqmX4gGuv/7666+/Hjh9+jRw7XXXcr+t7a1XfuVX5n7z+fzlX/7lASAiHvrQh3LZ
LQ+6hX+JbNuS+I/TWkrBc3roQx/yy7/8y1w2DMNv/tZvhXSwv//FX/LFuxd3H/e4x//oj/7ou7/H
u/M8fuM3fuP8uQuf9ImfuHtx9zd+4zce/OAHl1K5bGNj49777gNqrUDf9cvlahiHruuAErFeD6Ao
AjITc8XW9hZQu25Yrx/28Id/9md/ts3W1hYPIKQQV/3/BgBhm/+pjPmfTrb5D5XZJPGc3vRN3+yu
O+/6mq/92qc85Slf9mVf+lVf+VWv8Zqv8XM/93Pf8s3f8smf/MmPecyj3+ld3pnn8eQnP/m22277
0R/7ke/93u/9kR/5kac85al93w/D8Nu//bt/8Rd/8a7v+q7Hjx87c801P/VTP/3kJz/lPd7zPXcv
7b7Yi7/YD//wD991550/8RM/8UZv9IanT5/6h79/3OMe97gf+7Efu/e++yKiTS0zAWdO49jV+uIv
/hIv8RIv8ZCHPITnJMRV/78BQCDxP5UN4n80UWtNm3+TaZp4HrYl8ZyOHdv5tm//tic8/vEf8AEf
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
------=_Part_526_507440834.1760785649195
Content-Type: application/octet-stream
Content-Transfer-Encoding: base64
Content-Location: file:///C:/6d0050809989ae2b1afc36e51dfd3add91a0a19b34a0155e5a5f35a3ccc56aea

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
f/XXVqvVG73BG37N13zND/3QD33GZ3zGV3zFVzzollumltwvbWzuZ7B5lvl8/hu/8Rvv8PZv967v
8i5f/EVffNddd/32b//2e77Xe77qq73qD/7gD/7ET/zEdddd963f+q1f9IVf2Pf9t3/7t33e533e
t3/7t+/v7//2b//2OAwf/hEf8fEf//Hf+i3f8imf/Mlf8RVf8RIv/mLTOHG/cRw///M+/yM/4iO6
2tmJzf1qqX/zN3/zvu/7vq/wiq/4Lu/yLjfddNP3fM/3vvmbv/lbvPmb/9iP/uif/umf3XnH7d/1
nd/5Ld/6LY98xCO++qu/6t3f7d2+8Ru+8aVe6qV+8id/wpmv/uqv/oVf+IU/8iM//H7v935f9dVf
9cqv8irDMHK/v/27v/v27/iOUydPASGJZ4qIixcvftzHf/xLv/TLHB4evf/7v9/Xf+M3POzhD3uv
93qvZzzj1l/+pV/+qZ/6yW/4hm/49m//9td6zdf8nu/57ld/9Vf/9m//9rd667f6nu/5buCGG2/8
xm/8xt///d9/5Vd5lW/6pm963dd9ndV6yQNIEuJ/jMy0Dbz6a7zG7//e7wN/8qd/euLEyWuvvRbI
TNu8YAKJF87OzGxTe8TDH37fPffceuuth4eHf/+4f3ilV3qln/zJn/yVX/mVT/rET9zd3U2bF0CS
EC+UJPA0ji/90i/zhCc84cKFC/fed9/5C+df7MVe7Fd/9dcU8ZjHPnq5XK1XK14wSbxobNuOiOuu
v/43f/M3gV/7tV97yZd8yeuuu+7666//yZ/8ybvuvOvP/+LPh3HghRJXmBcZAFT+3YQs8QDr9fot
3uItv/RLv/SN3uiNzpy5Zr1er1arX//1X2vZ3uzN3/wZz3jG6dNngFd7tVcFzp49e+ONNwI33nD9
PffcXWt96EMfCgzDcPr0aeCmm25yJi+AeA7r9fqN3+RNvv7rvu5N3/RN+tlsuVweHR39yi//yjiO
b/RGb/T0pz/9+uuvB17u5V8+M8dxuubMNcD29vY999yzubn5iEc8AhjG8cyZM8D1N9yY2bjfZ3/2
Z7/8K7z8m73Zm3GZEfcbhuFlXvZlf/RHf/TDP/zDs+XU2tHR0Z//xV/2XfdO7/zOh0eHW1vbwM03
3QycPXv25IkTwPXXX3d0dAg88pGPBC5dunTy5Eng2muusc39Xu3VXu1P/uRP3vIt3/If/uEfatcZ
c1lmnjx58ju/87t+/dd/7Zd+6ZeAC+fPT6393M/93Gu+5mseP35sGMbNzc2tra1XfuVX/rmf+7nH
POYxwM0333Tr05+emQ97+MOBCxcuPOQhDwGuu+76pz/96fwPtlgsHvawhwFv9ZZv8Ud/8Idv/3Zv
r9Cnfuqnctn1N9ywWq54ISQb88KUUh75yEdK2tnZ+YiP+siP/KiP7Gr3Tu/4jg960IM+5VM+ZRiG
D/7gD7722mu/7uu+bj6f84KYF07SQx/y0My85ZZb3vu93/u93uu9JL3/+3/Addde+21/+idf/dVf
1ff9+7//+9140028YJJsXhQPf9jDtra2gE//tE/7lE/5lJ//+Z8/ffr0O73TO21ubr7jO74j0Pf9
+7//+y/mC/6jAUDl381YmAfIzGmaSinv//7v9xmf8Rnf9/3fd+MNN7zJm7zJOI4HBwcv9ZIv+TEf
8zFPe9rTvvf7vu/N3uzNXv3VX/1HfvRH54v5X/7lX33AB3zgn/7pn7bWgMc85jE/8IM/qNBv//Zv
v9u7vzv3c+Y0NR5AEvez7UzgQz/swz/jMz7je773e2644YY3e7M3u+OOOxaLxWu8xqt/yqd86tu8
zdt88zd/8/u93/u9+Iu/2Ld/57e/xVu85VOe8tRP/dRP/dEf/TFj4KVe6qW/67u/J+3f+M1ff4d3
fHsu+5qv+Zpf/KVf/LzP+/xf+qVffP3XfwOFJB5IAHz8x3/8O7/zO7/5W7z5S73US774Yx9784Nu
ufXpt77MS7/MM55x62/91m/95V/+5cMf/vC3euu3+sEf+qEbbrzxF37hF77gC77gD/7gD0opwOu+
3uv9wA/8wLXXXvvLv/zLL/bYx3LZt3zLtywWi1se9KD9/f3rrrsuMxFXGFpr0zS+8zu/8/d+7/f+
2q//+hu+4Rv+8R//8Xu853v++I//2KMf/ejjx0/86I/92OnTp5/w+Me/xmu+5td//de/yqu+yg//
0A+/7du+bToDAa/+6q/+VV/91a/2aq/2y7/yKw9/2MN4ANv8l5H4lzz2sY/9iq/4CqCU+qVf9qV3
3333sWPHNjc3uex93uu9kHihJIkX5tjx49/8zd8cIeDt3vbtXu91Xndq7fTp07a/53u+N92yZSml
73teEAnxwm0uNr78K76ilADe933f9y3e4i1AZ86cBj7j0z/93nvvrbWeOnWKF8q2MC+CL/yiLwYD
j3jEI77v+77vwvnz111/fSmF+33xF38x/zkAoHz2Z382/z7TNP3mb/7W673e65VSuN+NN9748Ic/
/FGPetSlvb3HPOYxr/Qqr/Ld3/M9T3nKU17/Dd7gsY997MbGxjd98zedOX3NW7/1W77qq7zKH/zB
H/7kT/7kB37gB77yK7/yMAyPfvSjr7322ld4hVf8i7/488c97h/e+q3f6iVe4iWPHz/GZba3trde
8iVegsv+4XH/cHh4+Iqv+IpcZvuGG254xCMe8fCHP2y1Wj360Y9+2Zd72R/8gR+8uHvxjd/4jR/1
qEdvbW197/d+76Mf8+g3fMM3fLVXe7W/+eu//e3f/q2P/MiPeKmXeinbL/kSL7m5ufmKr/gK//AP
f/+Upz7lrd7yrV7iJV7i+PHjwO133H7i+Ik777jj3Llzr/hKr7RerX77t3/7Ld7iLbhM0vb29ou/
+IsfP3781KlTtXZv8zZv/Uu//CtPfOITX/u1X/shD3nwS77kS/7Ij/zIfD5/67d561d+pVc6d+7c
L/3iL73zO7/L677u67bWbrnlQTfccMNLv/RL33nnnX/113/1Fm/25i/9Mi9z7bXXApubm7/8S7/8
N3/91x/zsR/7yEc+8i/+/C82Nzcf9ahHcVlEvNiLvdhsNnv0ox999uy5d3iHd7jjjjt+8Rd+4aVe
8iVf9mVf7pVf6ZV++Zd/6elPf/o7v/M7v8orv/I0Td//fT/waq/+au/5Hu/RWrvm2mse9rCHPepR
j2rT9Du/8zuv8zqv8/Iv/3IPechDud/e3t6f/umfvsEbvAH/+X7j13/91V7t1TY2NnjBJEniMknb
29t933M/SZJ4wTLz13/911/ndV6n73teAIEkEADMF4uNjQ1AUilRS+26rpTCC/bUJz/lwsULr/SK
r8QLISLE/TY3Nzc3N7jf1tbWxsYG/5I/+7M/e/CDH3zttdfyL5GQxGVd1+3s7EQE/3rTNP36b/zG
G7z+69daedEAgGzz77NarT7zMz/z8z//8/u+57/cj/3Yj917770f/uEfzn+tO+644/M+7/O+5Vu+
hf9a3/md33HmzDVv8RZvwX++O+644+u//uu/+Iu/mP98n/RJn/yJn/gJp06d4j/NNE2f9Emf9Dmf
+7lbm5v8p/mlX/qlpzz1KR/x4R/Bf7Kv//qvf63Xeq2XeImX4L/KarX6lE/5lC/+4i+ezWa8aACg
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
SuGq/0wAULnqqv+RfuzHfvQlX/IlH/nIR2Y2LIOweQ6SsA0IzPMQWBKAMYBBme3rv/7rX+/1Xn9n
Z4er/jMBQOWqq/5HKqW+3Mu9/GMf+1j+o2Xm93//D2QmV/0nA4DKVVf9D2Vn8p/Atm2u+s8HAJWr
rvofKY0x/zkkrvovAACVq676H0kA4j+BAImr/vMBQPnsz/5s/uP8xV/8xY/86I8++lGP7rv6vd/7
vb/7O7/7oIc8uJTyXd/1XX/8x3/88Ec8oqvd93zf9/7hH/7hIx7+8FLK93zP9/ze7//eQx7ykL6f
fd/3fe/v//7vP/ShD+37/nu/53t/53d/5+Zbbl7MF9/7vd/7+7//+w97+MNns/n3fd/3/v4f/P7D
HvawWut3f/d3/+Ef/MFDH/awUsr3fM/3/NEf/dEjH/XIruu+53u/54/+8I8f+chH2v6u7/quP/mT
P33EIx45DMN3fOd3/Nmf/dnDHv7wruu++7u/+w//8A8f8YhHAN/9Xd/1x3/8x494xCO6rv/e7/3e
P/njP3nsYx87jsN3ftd3/fVf/fVjH/vYo6PD7/yO7/yLP/+LRz36UcMwfOd3fudf/9VfPfaxjx2G
4bu+67v+5E/+5OEPf0Qt9Xu/93v/+I//+NGPfrSk7/me7/n93//9hzzkIX3ff+/3fd/v//7vPeQh
D53P59/3fd/3O7/zOzfccOOxY8d+5Ed+5Nd+7deuu+66EydO/OAP/sCv/dqvnzlz5uTJkz/zMz/z
i7/4i9dcc83Jkyd//Cd+4pd++ZdOHD9x5syZn/qpn/rFX/ql7a2ta6+99qd/+qd/4Rd+YXt7+9pr
r/2lX/qln/3Znz19+vSpU6d+7ud/7hd+/heuufbakydO/NiP/div/MqvnD59+tSpUz/wAz/wG7/x
69dee+2JEyd+4id+8ld+5ZdvvvnmnZ2dH/qhH/rN3/rNm2+6eWdn56d+6qd+8Rd/sdR604038j/A
r//6r7/US73UNddcw3+0hF/6xV98/dd//fl8zlX/mQBAtvmP82u//uvHjh17hZd7OaR77rlnatM1
11xTa3f33XdjX3vttbXUe+69u7W85tpra6n33Ht3trzmmmu6Wu+5997W2rXXXltrveeee6apXXPm
TN/399xzT8t2zTXXdl295557WmvXXnttKeWee+5p2a695tpa6z333JOZ1113bSn1nnvubunrrr02
Iu6+5x5nXnvtdRL33nuv7euuuy5Kuffue1q26667Vop77rnH5tprr6213HPPPZl5/fXX277nnnsk
XXfddZl57733Atdde63RvffeA1x33XXAPffcY/vaa68tpd57z91pX3vdtRHlnnvubi2vveaaWrt7
7r07W15zzbVdV++5555pms6cOTOfz++79971MJw6fXpjsbjnnnvGYTx1+tTGxsbZs+eWy6PTp09v
bGycPXt2uVyeOnVqc3Pz7Nmzy9Xy5ImTW1tbZ8+eXS6XJ0+e3NraOn/+/OHh4elTpzc2N86dO3d0
tDxz+vRiY3Hfffet1qvTp05vbGzcc8+94zCcPnN6sVjcd/a+1Wp17ZlrZvP5vffeOwzra665djab
nT17drlcnjh+fHtnh/8BPumTPuk93uM9XvzFX5znx/b+/v729rYk2894xjOABz3oQZKAcZyWy+XO
zjbPT8v24R/24V/0RV90/PhxrvrPBACyzX+cP/rDP3yZl33Z+XzOVf877e3tbW9vS+K/2yd+0ie9
53u8x4u/+IvzPJ705Cd/1Vd+5ZOf/ORf+Pmfn83nX/ZlX/Ynf/LH09Re6zVf62M+9mN+/Td+4yu+
4ise/KAHfdM3fRPPT2vtwz7sQ7/kS7702LFjXPWfCQCC/1B/+Vd/vR4GrvrfKTO//du/vbXG/wDi
Bbrj9ttf8zVfs5aiiCc98Um/8Ru/8QM/8IPf933f9zM/97NPv/XWvUuX3uot3+ro6IgXIEKX9vb/
4i/+wjZX/WcCgOA/1Mu8zMvM+p6r/tdKJ//jve7rvu4bvuEbGkqpf/Jnf/LQhz50Npttb29fd921
T3ziE972bd/2xV/8xZ3JC6S+637nd37nEz/pk372Z3/28PCQq/5zAEDlP9SrvuqrYK76Xyoi3v/9
3q+Uwv8MNi9IZgIR2ru0l5kAsJhvuBmw07xAmTmfzz/u4z5uvR5+7ud+9lM+5VNe6iVf8s3f/C2u
ve5arvoPBQCV/1C/+Zu/+cqv8iobiwVX/e/U9zP+xxAvkO20W2uPfvSjf/d3fxcAzp0/e8211/Av
EpLSPnPm9Pu+7/seHR39+q//xpd82ZeeOX36zd/8zV/8xV9cEv9x1sPwIz/yI/t7exHBM9kgywCW
BMZYCIwEBvGvYCMBGAABGGQQz2QbAElgEGAQBtkIDBJgjG0fO3b8Hd7xHWZ9z78JAFT+Qz3+8Y9/
uZd/eRYLrvqvYBD/cTLz27/92z/0Qz+01sr/BOIFMZA5juOrvuqrftVXfdW3feu3LVfL7e2dl3mZ
lwFsG/MCSRKYyzY2Nt7yLd/izd7sTf/yL//yx3/8x7/v+7//Td74TV791V+t6zr+I5w/d+7P/uxP
3+LN36K1ZgMGMJfZIASAzTNJwkYCAATmMoFBCNnmMoMAQGDAdigAYyFjAMAgbAQA2FwhCcBphQAM
QtJ3fMd3vP7rv951113HvwkAVP5DvezLvdys7/mPNk3TarXa2triv9bFixePHTsWEfwPJf6jrYc1
/2PY5gU4trPzmZ/1WV3X11q+/du+7bu/53vm8/nXf93XRQTwmMc+9qM/6qN5QWxjnlMp5RVe4RVe
4RVe4em3Pv3nfu7nfu7nf/YVX/GV3viN3vj48WP8+4zT9LCHPuwN3/AN+V/oF37+523zbwUAlf9A
5lVe+ZX5d/vJn/zJ06dOv+ZrvSb3+4Zv/IaXfImXfPjDH/5FX/RF995333u+53u81Vu+1TiOhr7r
eH4u7u5+27d+60d/zEf3Xc8LYHscx77vn/60p//94/7hzd/szb7pG7/pnnvvXiw2Xvd1X/eVXumV
fu7nf65EvNu7vTsvwDCOP/xDP/T4xz/ulV/lVd/yLd5Ckm1JvAC/93u/d+r0qcc+5rG8YFObIkpI
P/IjP/Kar/Eaq/X6F3/pl6ZpvOXmW17/9V9/e3uby6Y2/eEf/OEtt9zy4Ac/eG9v72i5vO7aa7nf
0dHR4dHRmdOngbvuuusZt932Ui/5khsbG7xQEfH+7//+pRT+B7AB8QLM5/PXeI3X4LLrrr/+kz/5
k3mAM6dPnzl9mhdIWFg8Pw958EM+8iM+8uLuxV/95V/57M/+7Ic+9CFv/VZvdcuDHsS/Q2byv5Mx
5t8MAIL/QOL3f//3V8sV/z6Pf/zj77jzDu73a7/2a5d2L73O67zOB3zAB7zES77kR33UR37nd3zn
XXfd9WM/9mPf9E3fxPNjfHR4+Gu/9mttasBqvR7Hkfu1zKk14K677vrIj/oo4KlPf9pP/9RPtda+
7du/7ZZbHnT99dd/1Ed91Hd993e953u85x/+0R//wz/8Ay/A13/d1/38L/zCq73aq3/t13zNz/zM
zx4cHHzqp36qbS4zz+13f+d3/u5v/47LzPP3hV/4Rb/3u78LfPd3f8+dd939h3/0R9/5Hd958sSp
3/iN33ibt3mbe++9l8t+5qd++nd/9/e+6Zu+aRzGb//2b7/9Gbdxv9/8rd9867d664/5mI8Gfu/3
fu/DP/zDf+zHfvT93//99/b2+Rd4Npsj/mcwmP8EwmBkXrATx0+80zu/85d96Ze8xEu8xNd/wzd+
zud87l/91V/Z5t/A5n8tI/4dAKDyH+ov//IvX/IlX3K+mPPv0Pf9T//0T/3ET/zEgx70oK/8yq/8
xV/4xQ/4wA8Alsul4FVe+VV+5md+5uDw4Du/4zufcfttj33sY//6r/7qzd7szR796Ed/wid+4md9
5mf+8q/88vd+z/fefNNNtmez2a/+6q9+53d9V4n4tE/7tO3t7c/+7M+OiGfcdtuXf/mX/cxP/8yP
/9iPXXvNta/6aq+qEGY+n7/pm7zpDTfe8Aqv8Aof9EEf9J7v8R5v/3Zv9wu/8Asv9mIvdvfdd//0
T/+MsTPn8/k7vdM7bW1t3XnnnY959KPe/M3f/FVf9VX7vv/u7/7u7/3e7z116tRrvdZr/sVf/OUH
f/AH/9AP/fDGxuIN3/ANP+7jPm4ax4u7Fx/7Yi9m+LRP+7QnPP7xb/mWb/Xe7/1eX/3VX33u3Lm/
+7u/e7u3e7vXeZ3X/aEf+MHf/q3f+rZv//bZrJfI1h7xiIe/x3u8+3u8x7t/8id/8rd927d9+qd/
OvCkJz/5zd/8zX/1V37lN3/rN4dheIVXfAXud8stD3qf933fn/iJnwC++Zu/+aM/+qNe8zVf6+M/
/hN++qd/6j3f8z15wTL9rd/yrR/+4R9Wa+W/n/jPYS6z+Jd0ff86r/M6r/3ar/P3f/d3P/OzP/tD
P/zDr/e6r/tar/Va8/mcfwXxv5jB/FsBQPAf6qVf+qW7ruPfZz0MO9vHvuM7vvPv/v7vf+/3f//i
pYs33HAD8E3f9E2/8iu/8mqv9mpf/dVfvbW59QZv+AZv9ZZv+Qav//qPe9zj9vf2gMc//vFPf/rT
v+EbvuGrvuqr3uRN33S5XF26dOkrv/IrP+WTP/mt3uqtPvdzP+9g/+AP/uAPP+VTP/Wt3uItfvD7
f/Cd3/mdX/qlX/pjPuajSykYY0mWgcc+9rFnzpy+++57HvrQh95+++3AxsbGS73US77US73Uy7z0
y7z4i79413XAx3zMx/7d3/3dq7/6q3/zN39z7brXfb3XfYmXeMn3fM/3uOeee/72b/4WeMpTn3LX
XXd94zd8w2zWf9EXf9E999zbz2bf+R3fKfimb/7mH/mRH3nCE57wZ3/2Z8eOHfu8z/+8b/zGb9ze
3nqlV37ld3u3d3vYQx86ThNgnu2N3uiNnvjEJ3LZm73Zm33bt33bqdOn/+RP/uQt3uItbnvGM2xz
2cMf9rBTp0+11gx7+3uPeexjgRd77GP/6q/+in/Jar3kfwaBJP4TSLIB86KReImXfIlP//RP+6iP
+qinP/3pn/AJn/i93/u9586d40UnXhS2f//3/2B/f5/7/cVf/MVtt9/Ov8/R4dGFCxe4bBiGJz3p
SRcvXuR+991335Of/ORxnHh+hED8WwFA5T/Ua77ma/LvJvR6r/96x48fe/CDHrS/v9/V3hh4xCMe
8VM/9VO33Xbbe73Xe73sy77csWPH1+s1IAkJ6LvuqU972qyfPeIRj9ja3Dx16uTZc2dvv+P2r/6a
r14tV4uNxeHR0cMf/vCHPuQhD3v4w5/0lCdvb28vFovjx48LDEiAELC7u3vx4u5iY3F4eBgRwHq9
/ou//AunQf2sf/RjHjObzW666caf+ImffMpTnvKZn/EZn/95n/eJn/iJW1ub11xzLah2HRCSzdNv
vfVt3uatT506/fqv/3rTOD7u8f/wV3/5l3feeedqtdrd3d3Y2HiDN3iDxz7msbPZfBrHzc2Na6+9
FrANiGe7++67t7a2uOwlX/Ilv+7rv+7Xf+3XWpt+7ud+9r77zr7+67/+m77pm3KFDRZky2wJtGyS
eKEi9N7v/T4lCv8TiKOjo9V6PY0jYBAviEGAbYSQQTwXgwBJrbXMJol/pRtvuOGDP/iD9/f3f+M3
fuMLvuALr7/+urd667d+1CMfyb/IvIi+4As+/2u/7uu2t7e57Ju/+Ztf53Vf513f5V35t/qJn/zJ
r/jyL3/pl37pb/zGbzw4OPiIj/zI5dHR/v7+53zu5778y73cr//Gb3zlV3zl5sbGqdOnvvZrv7bv
e56X+DcDgMp/qD/4gz94uZd7ufl8zr+DnWBgnMaNxeLGG2982lOf9pjHPPbd3/3dPu3TPu1lX+Zl
rrvuuqPlUdfV9XoNlFLuvvuupz39aXffffdDHvzgo6Oj+87e96SnPOXixYsnT5y8/rrrPu5jP26x
WJw7f342nyEDaWMB4zhOUwOwBa218xfO11o/7/M+71GPfvSpk6ee/MQn7xw7Bmxubr7SK74SJnEp
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
v477SZrNZjOej8ViDgDHjh07duwYD1BKKaVw2XXXXXfdddfxIoiI93mf9yml8D+AZCT+U0gCzH+c
M6dPv8d7vMc7vuM7/cEf/sE3f/M3b21tvfRLvfT3f//3ffXXfE3XdZJ4gIODg0/+pE9+gzd8w9d/
vde77RnPsC0ESAKlMyJCAkoptoFrr70WyMxZ3504cfylX+qlXvM1XuMVXv7lv+f7vvfXf/XX3u/9
3++7v/u7vvEbv+G3f+u3vvt7vudP//TPvviLv4jncebMmX/4h394jdd4jbNnz9VaX+IlXiIzdy/u
Hj9x/IlPetJNN93M8yHEvxkABP+hfvVXf225XPJCiX+1iNjY2OC/3LXXXNt1Hf+fnDhxAoL/EST+
UwgDIP6jzWb9677O63zJF3/x27zNW3/zt3zTj/7oj77Zm77p0572tK7veYC9/b1nPOMZj3zEI/7h
Hx63v7//Yo99MYW+4iu+4ju/4zuf9rSn7WzvvMZrvuaXf/mX/8Iv/MLv//7v930fEbaBl3zJl9ze
3jncP7hw4fy5c+f+8I/+6Cu//Cte/uVf/sSJ47sXdz/pkz55nNorvMIrHh0d8pxsA2//9m//Yz/2
Y7/+G7/xpV/6Ja/zOq9zww03vMRLvsQXftEX/vIv/8pv/eZvveVbviXPQwKLfysAKJ/92Z/Nf5xf
/MVfeomXeInZbMZV/wtl5jd/y7e83Mu+bETw3+3Xf/3XX/KlXuraa67hP5rtX/jFX3z913/9+XzO
fw7bd99zz8bGxt7e3q//+q89/OEPf/VXf3Xut729/chHPvLXfu3XXvmVX+kN3/ANH/nIR77Wa73W
7//+799yyy1v93Zv98hHPOK1Xuu17rrrrvvuve893uM9XuIlXuKaa6656aabbr755r7vX+M1XuM3
fuM3jd/pnd7p4Q9/+O7u7q/92q+90zu+8xu+4Rs+6MEP/pVf/uX5bPaxH/uxi8WC+81mswfd8qCH
PPQhN95444Mf8uBf+Pmff4VXeIX3f7/3i4jXes3XetpTn/aXf/VXH/3RH/XiL/7iPI9f+MVfeM3X
fM3t7W3+TQBAtvmP84d/+Icv+7IvO5/Puep/ocz8yq/4io/+mI+ptfLf7ZM+6ZPe/d3f4yVe4sX5
j9ayfdiHftgXf/EXHz9+nP98f/3Xf/0bv/HrH/dxH8//Qh/2YR/26Z/+6ddffz3/JgBQ+Q/1qq/6
qlz1v1ZEvN/7v18phf8ZJPMCPOMZz3jCE5/4+q/3eqWUs2fP/szP/Ozm5sZbv/VbLxaLe+6550d+
5Ee2trbe6Z3eaWtri+dP/Fc5c+ZMKZX/tYz5twKA4D/U7/7O76xWK676X6vv50j8jyAjnp+f//mf
/8AP/MDP+PRPn6ZptVp94Ad+4O7uxT/90z/9hE/4hMz20R/90ev1+q/+6q8+9VM/jefLAJL4L9Fa
s83/SwAQ/If6m7/922EYuOp/J2d+yzd/c5sm/kewMM/Py77sy37zN3/zNWfOlFJ++7d/e3t7++M/
/uO/9Eu/9MlPfvJTn/q0b/jGb/zET/zE93u/93vyU57M8xMlzp87+3u/93v81zD/exnEvx0ABP+h
Hv3oR3ddx1X/OxmGcTDmfwADiOfnhhtu2N7aHseplPLEJz7hIQ95CNB13Xw2f/qtTz918iTwfd//
/W/x5m/O8+P0zrFjv//7v/9lX/blBweH/GcTkvjfSWDEvxUAVP4Dmdd/gzfgqv+1IuL93v/9aqn8
T2BsXiChEBAqq9UaABTqux74oR/6oXvuuedLv+RLeL5M3/Wf+qmf+sd/9Mef+imf8v4f+P4v+RIv
yX+mvf29++67d70ehIxBAJjnJp7JxkISBgwAkrARRrINEjYCC5DABixhJMAY80wCA2AQz0VgHkil
xmq1Ev92AFD5DyT+9m//9tGPfvSs77nqf6ed7R0k/gcQRrwgNrZbay/9Mi/927/7O8Dh4eFqtXqx
F3uxP/2zP/uRH/2Rb/2Wb6218vwYG9t+wzd6wxd7sRf72q/72r98zF+9x3u8eymF/wS11r/567/9
pm/+FmcCxiAMMkYSxhiEDAJjrpAEGAMCkI3EFTYSYBtAEmAjGcT9bANIAgMYc4UkANsASBgwAoOk
22+/vdbKvxUAVP5D/c7v/M5DHvzgWd9z1YvAIP4Hycxv/bZv+5AP/uBaK//dDGBeAInZbDaO42u8
xmv84A/+4Id92Ictl6vXe/3XP378+Ad/0Afv7Gx94id+4rXXXvsFX/iFtRSei5CwDdx4041f+IVf
+D3f8z2f+qmf+hEf8eE33XQz/9GmaXqN13j1j/7oj+Z/oQ/7sA+bpol/KwCo/Id60C23lFq56kUj
/sdZHR3Z5n8CSRYvwIkTJ77lW751NpsBX/01X/1Hf/iHGxubr/AKr9Ba+4mf+PFhHNs0zWazEsHz
J/FMpZT3fd/3/Zu/+Zsv+dIve+M3eqM3e7M34z+abf73svm3AgyV/1Bv9VZvxf1aa7/7u7+7e3HX
MuYBBAZAYC4TMuYFkcQz2TZIeq3XfM1Tp07xALfffvuf/dmfSQGAeV4SNs+PQTyTbYEBJAHYfuSj
HvXiL/ZiPMDR4dFv/fZvDesBYcBImGcSAAYwBklgwEYCwBiBAYEBEAKD7cc85rGPfcxjeIBbb336
n//FX0ZIiPsZBOaZBIBtgwAhBBgkgTEYAAG2sTlx4vhrvdZrlVLe9/3er9bK/wS2MS9AKeX666/j
slk/e+3Xfh0uq7U+5CEP4YUSsjHiAV7qpV7qi7/4i77pG7/pL//yLz/iIz7i+PHj/Aexsc3/Wpb4
twIEwX+oxz/hCcMwcNnu7u63fOu31K72Xd93Xdd1Xdd1fdd1Xdf1Xdd1Xdd1Xdf3XdfVrnZd13Vd
13Vd13Vd13Vd13Vd13Vd19Wuq12tXa2167rNjY2/+9u/+/M//3Oe06//+m/cfttt8/ms1lJrrbXW
rqu11trVWrtau1JqrbXW2tXa1VprrbV2Xe1qV2utteu6WmvXdbXrur7rulprN5/Pb7/jju/8ju/k
OT3lqU/5lV/+5Y3NjdrVrtau62qtXa1d7bpaa+1qrV3tutp1Xdd1tXZdV2vXd7XWrtaudl3X1a7r
uq6rXdd1Xdd1tau1m8/mZ+879z3f8908p1/6pV++795757N57WrX1dp1tXZdrbXWvtau1q6rtdZa
u67r+q7ruq6rXa21drWrXa21llprV7vadV2ttda+67r5bPaDP/CDl/b2gI2NDf6vsw2WeC6bG5sf
//Ef/xqv8Rqf+mmf9od/9Ef8BxH/i0nI/JsBQOU/1K/+6q++z3u/d9/3gO3rrr3uLd7iLfhPUGsd
x5HnVEq87uu93ku8xEvwH+2mm276vu/7Pp5Ta9NjX+zF3uiN3oj/BE996lO/67u+i+dUSnmd13md
RzziEfxH+7M//zOngW/+5m/+iI/48Fo7/rtJksR/CgFgnp/Xfu3XfrEXe7Gv+dqv+cu/+Iv3/4AP
mM9m/PtY/O9lg/g3A4DgP9TNN99cS+V+5j9Ly+R52ZnJfwJjng8Z85/DPH+Z5j+BbQlAEhb/I0iI
/wQSgHmBzpw58/mf93nXXX/dJ3/yJz3xiU/k30eAxIvmi77oi57ylKdyv5/8yZ/8wz/8Q/59nvrU
p/7N3/wtlz3lKU/93u/7vj/90z/lsj/8wz/8kR/5kR/+4R/+vd/7PZ4fAzb/VgBQ+Q/1tm/zNtzP
/CcS4nkYEP8pzPOyzX8a8YKY/wySbeADP/CDai38j+CDo8PVajVNI4gXQmCeD4GRAMxlRlLLzLQQ
L4ze/u3e/mVe5mW+8Ru+6eVf4eXf6R3fMSL4tzPPIzNtl1K4zLakX/qlX3rN13qthz/8YbYl/eVf
/uUjH/WoV33VVwXsNISitSYpIgDbrbVaK5e11iRFBPf7lm/5lm/91m97iZd88e/+ru9+8pOf/GEf
+qFv8IZv9KM/+qMf8P7v/1Zv9VZf9mVf9tjHPnZjY8ELZsS/FQBU/kP9wz/8wyMe8ci+7wBA/Ocx
z48s/lOI/3KSeB5C/GewkYBxHLyYi/9+4zh+7/d+z80335wtATAW4t9JUst2xx13lCj8Sx720Id9
8Rd/0Xd+13d92qd/2kd++Edef8P1/OsZMM/lT//sz77yK75iGIb3e7/3f7M3e9M/+IM/+KIv+qIX
e/EXG4Zx1vcXLlz4sA/9sM2tzQsXLrzMy7zM4x73Dz/0Qz/8+Cc84cM/7MPa1L7hG79hZ2fncz77
s2+86abP/MzP/Lu///vHPuYxn/8FX/B7v/t73/zN39Ra+7iP+7hXfdVX5bLXe73XPX369M/93M8D
3/Vd3/U2b/M2H/KhH/par/WaX/AFX/B6r/d6x48f//AP+/Cu606fOc3zI0D8mwFA5T/Ur//6r998
88193wEC85/INs9F/KexzfNh8Z/D2DbPyQaZ/wSSBMC3feu3fvRHf0ztKv/duq57v/d7vxd7sRfj
P1pmfviHfdiUjRdB13Uf9IEf+Bd/8Ref/wWf/9Zv/dZv8AZvwL+SeD5+53d+5yM+4iO6vvv4j/+E
V3u1V/vkT/7kT/j4T7j+huu/53u+ZzabfcEXftEjHvmID//wD3/DN3yjKHHx4u53f/d3/+AP/uCN
N974gR/4gd/8zd/8R3/0R5//BV/w3u/93n/5l3/5Qz/8wz/5kz954cKFL/2SL/mwj/jw66+//p67
7+Z+D3/4I5785KdIAE964hPf9E3fFHj4Ix6e9u6l3cc97nGf8EmfeMcdd7zHu7/7+73f+/E8DLL5
twKA4D/UDTfcEBE8i80LMKzXP/ZjP/Zd3/XdXPaLv/iLH/RBH/TVX/016/UaeMYznvH13/ANz3jG
M/jXEeIFuffee7/u677ub//2b4F/eNw/fMVXfMW58+eBH/yhH3rf933fb/3Wb8tMXjCJ5yYkXhDb
f/AHf/DTP/3TwNHR0dd93dd/6Id+6K//+q9z2Y/92I9/5Ed+1E/+5E/yAgiZ58Pm+Zra9Ou/8Ru/
9Eu/BNxzzz2f//mf/2Ef9mF/9Vd/Bezu7n7RF33xx33cx/393/09/5LWGjL/M2Qm/wkMaWPzInu5
l3u5L/6iL/7zP//zL/3SLz04OODf7U3e5E1+9Ed/9Ku/6qt3L1689danz2azN3jDN3iFV3iFxzz6
MXt7e3/5F3/+dm/7dtdcc80bvP7rTeM0juOrv9qrvcZrvMZ99933jGc84/M///N/4id+4hnPeMYj
H/nInZ2dd3nndz7YP7j2mmve8q3f8ou+4Au+6Ru/8WEPfxjPT6m1tQZMUxuHYWd753u/93u/89u/
/du/7du++Zu/ZW9vj+dl/j0AIPgP9Q7v8A5bW1s8k3nBvv4bvuE7vuM7fuEXfh74oz/6o6/8yq/8
oA/+oFtvvfVLvuRLzp47+/mf//nf9I3feNttt/GCSeI5Cds8X5f29r7wi77oB37wB5/8lKc8/elP
/4Iv+IIf+IEf2Lt06YlPfNJv/9Zvf/hHfMTP/fzP/czP/AwvhM1zMS/ED//wD3/xF3/xD/3QDwG/
+mu/+tSnPuU93/M9P+szP+spT37KT/30T//oj/7Iu7/7u33nd37nz/zMz/CiE0I8P9/4jd/0xV/0
RT/90z8N/OIv/mI/m73xm7zJJ3/Kp2Tmp33ap0m8yZu+ycd9wsedv3Ce58fmivd7v/crpfI/gDH/
qcS/yvbO9qd8yqe82Iu92Cd/yif/7d/+Df8aEg+UmR/6IR/ymq/5mp/12Z89Xyw2NjaWR8tLly5N
07R76VLfz06cOHnv2XuB226/w9h4c2sL2NrauvnmWz73cz/vS7/0S7/8y7+8lPIFX/AF3/zN3/wr
v/LLP/VTP/VWb/lWP/fzP/8yL/uyn/Dxn8ADGAPAox/96D/7sz8FHve4f9g5trPYWPR9389mi8Vi
NuvN82XEvxkAVP5D/d3f/d2jHvWovu8BEIgX4CM+/CNe/MVf/Nu+7duAn/3Zn3vnd37nl32Zl732
mms+4AM+8GM/9uO+7du+7e3e7u1aa7xgknheMs/P1ubm13z1V3/Mx37ssF4/5CEP+d7v+d53eId3
WK1Wj33sY7/5m78pIl7ixV98d/cSL4TE87DNC/CWb/mWL/3SL/0FX/gFwFu+xVu+5Vu8ZUScuebM
2XNnf+qnfuojP/IjX/EVX/HDPuzDfuzHf/yt3uqteNGJ5+v93//9X/zFX/yHf+iHgPd93/cFbr/9
9vl8vru7+8QnPunTPu3Tbrjhhu/+7u/+0z/50zd5kzfheQkDcOLkCYn/CYRA/CeQDWD+Dd7szd7s
pV7ypb7ma7/mJV7ib97t3d6tlMK/RADiASLiuuuv/63f/u0//MM/bON43XXXv97rv977f8AHvPiL
vdjhwcF8Pn+/93vfz/qsz/7t3/qdZ9z2jMV8UaLUWoEXf/EXf4mXeInP+/zPHYfxNV/zNWez+Yd8
yIe8/uu/XkQ89GEP/bIv+7JhHGqpL/0yL80D1Ki1dsD7vO/7ftAHfOD+/sGf/tmfftqnffr+3v6H
fuiHvczLvPTjn/D4d37ndz62s8Pzkvh3AIDKf6jf/M3fetCDHtT3PQAoxAvQ9R0QEcDB4f6DHvQg
4Nix48MwrFbLra1N8y+wzXOywTxfpRRgGicQUGu1zWUR8dSnPe0v/uIvP/qjP5p/DWNesM3NzVKK
CCAigF/7tV9bbCxe4RVf4Su/6isf9KAHATfccMM4DDw/BvG8bJvnZ2OxCEniir/6q796j/d4jw/8
wA88efLkgx/0oB/8wR98uZd/+b/+6795h7d/B54fgQD45m/+lg/6oA+qtfLfzTbiP4Ml/h1uuvmm
L/7iL/7e7/veT/3UT/3Ij/rIG2+4kRfKYJ7bt33rt/7+H/zBox71qI/5mI/Z3Fx85md+5p/8yZ/s
7Ox81Ed/1PHjx1/iJV78lltu2d/f/9iP/Zj5fBZRHvnIR3LZl3/Zl/35X/z5fD5/yZd6qRLxfd/3
vX/393//bu/2bg960IO+5Eu+5E/+5E9qra/4iq/IA7z6a7z6S770SwIPftCDvvf7vvdP//RP3+u9
3uuhD30o8P0/8P1/+Ad/+A7v+A4v89Ivw/MjMP92AFD5D3XTTTeWUngW88IJAMyF8xeAaZpms9li
sQDECyfEcxMvnASYyyRx2eHh0ad88id/3Md97DXXXMO/hhAvlA2Yy57ylKd8/dd//Vd91VfVUnPK
w8NDYP/goLXG8yNeEPHCiMse9ahH/cAP/uDHf/zHv8VbvOVXftVXfs3XfM3f/e3fvMarvZptni8J
Cdjb2wPzP4TNfwLZAsS/WSnlfd77ff7mr//6C7/gC9/iLd7ijd/4jXmhxHM7duzYm73pm/IAr/Zq
r8YDvMRLvAQPsLGxwWVd373Kq7wK97vxxhtvvPFGLpvNZq/5mq/J89jY2NjY2OCya6+99i3e4i24
36mTJ9/iLd6cF8wY828GAMF/qLd7u7fb3NzkMgGYF8ym2cDLvfzL/cZv/gbwW7/929ddf93m5iaQ
mbwQwua5CIF4wTIzbe4XEcCHf/iHv8zLvMwrvuIrHR4d8oKZ52bMv8DGwNmzZz/yoz7yAz7wA0+e
PAk84pGP+MVf/EXgt37zN1/6pV+G58cgnpsQmBfMNvAbv/Eb586fe4kXf7FaytHR4TAMH/mRH/lB
H/TBt99xx4u/+IvzfBls4J3f5Z0jCv+zZeZv/dZvfcVXfMU4jsCf/umfvNd7v9d7vdd7/eVf/hXw
cz/3c+/yzu/ynu/5no973ON4fgxGmH+nl3rpl/6SL/mSv/mbv/miL/7ivf19/m8SEv9WABD8h3rq
0542jiOXmX/Bzs72g255EPAu7/wui8Xibd7mbX70R37kUz75U7jslgc9aHNzkxfE5vkzL9gNN9x4
8sQJLnvQgx60tbX153/+53/5l3/5x3/8x2/3dm/7W7/5W7xg4nmJF2rWz2664Sbgh37oh+66865v
/9Zve6d3eue//uu//qRP+qS/+uu/fru3e/s77rjjgz74A3l+BOb5kMQLsLm5cf311wO3337HB7z/
B77d2739677u67zYi73Yn/7pn77ne7znO77jO775m7/Fwx/+cJ4/c9mDH/yQiOB/BvP8/cSP/8S3
ftu3/ezP/qztc+fOffInf8qHf9iHv+u7vusnfdIn7l669Jd/+Zef8qmf8iZv+iaf+7mfx/MlgcV/
gK2trU/6pE96uZd92U/6pE/68z//c/7PEcj8mwFA5T/Uz//cz733+7zPsa4DMGleiFd+pVd+hVd4
BWA2m33VV33VuXPndo7tzGdzLvvyL/uyUgovmPhX+8RP/ISI4LIv/bIv7Wp3/fXX/8mf/HFmAl3X
8wJIAvGcBBIvxIMe/KDP/bzPBT74gz/4Az7gA5y2mM9mpZTv+s7vvHjx4smTJ2utPD/GkngetnkB
Xu7lXv6lX/plgPd+7/d667d+q9baqVOngDd90zd91Vd91dbaqVOneAHStg380A/+wDu90zuXUvgf
QDx/b/lWb/Far/1a7/me71lK+YM/+IOHP/zhr/AKrwB8wzd8w+Me9w+f9VmfBTzpyU8+fvwYL4TE
f5A3fMM3fImXeImv+dqv/Zu//pv3eq/3ql3lOZj/1cS/GQBU/kPtHDsWEpdZCPOCKVSjcllEXHPN
NTxA13X8KxnzQtVauV/f9UAppZTCv8Q8fzYvhKS+74G+73lOXdddc801vDAyz828MBEREVx2/Phx
HuD48eO8cLYBeMYzbk+78D/abDaX9m1HxNOf/vTZrAeAzc2tS5f2gK/66q/+2q/5mu/4zu/g+SkR
995z7w//8A9/4Ad+oCT+I1x//fVf+AVf8IM/+IOf8qmf+hEf+eG33HwL95NivV4fHh6u12sewIAt
CTCWZSyJ+xkEtiUBtiXxLDbCRpIAyTbYIAQAxiABYMAGgblCYEACZBAABgFAKWWcRv4dAKDyH+o9
3+M9SilcJiSJ/yziecj8JxGAeR4S/4lsnpNAEv8JbHACb/SGb1gi+B/ANi+YsW3bZ86cefzjHw8A
h4eHm5ubwId8yIe83Mu93Jd8yZe8xmu8Rlc7nlNmXnvdtYeHh5/xGZ/xUR/90WdOn+Y/QkS8+7u/
+8u8zD98+Zd9+Ru84Ru+8Ru/0V//1V+/wiu8Qq31L/7iL77yK78yM7mfbZ6LwEgAtsACA4AAYfNA
4jIJgwDbxiLAPICEzTMJG0DYCCzEswjMMwmZW59+a62FfysAqPyH2t3dPX78eCkFANvmP4dk/ouJ
5yJk/rMIQPyXEvCyL/ey/M8giRfC2J6m6VVf9VW/6Zu/+c477zw8PFyvV4959KN+8Id+6E3e5E22
NremccS8IB/4gR/4uMc97rM+67Pe7V3f9dVe7dX4D/JiL/ZiX/zFX/zN3/ItT3va037rt37rAz/w
A17uZV/u1V7t1T76oz+a/4U+7MM+bJom/q0AoPIf6od/+Ife493fY+fYMcAmbf5zSCElz0WKCP4T
RATmuRgL8Z/GTp6HJP4TSFzx4z/+E2/zNm9dSuF/APEClVof8tCHZuZDHvKQD/ngD/7QD/2QUurH
fuzHnjlzzeMf//gf/MEf7Gr9tE/7tK7reAGmaXrFV3zFhz/84V/91V/9t3/3d+//fu/fdZX/CBsb
Gx/0QR/0UR/5kT/z0z/9Z3/6p9/+7d/e9z3/LwFA5T9UP5sRwWWz+ez8+fOf9EmfJAmwDUIIDNiS
MEhgKQ4O9vu+77qOF8zYpka58847PuADP5DntLGx+bVf87Wnz5zOTAmQAds2IAkwCCQNwzAM6+2d
Y9gGbMA295MEGEI6d+7sgx70YJ7T5ubmr/zKrzzxiU/INGAQGIQkbAQGBBg0DgNoNutt2wYByEIG
bIQABFy8ePGWW27hOUWJz/u8zzt56qTTYJDASMIGLGEQAg3DWlC7HgwGSQIMYJDAtoSte+65ez6f
237yk5+U6VL4n8C8QCdPnvimb/zGUgrwbu/2bm//9m8Pms164PM+93OXy2Uttes7XgABCDh58uTn
fu7n/uAP/dAnf8qnfMzHfPRNN97If4RhvX6t13qtiPiDP/j9D/vwD3v/93t//reS+bcDgMp/qHd/
9/eYz2ZctrO9/U3f+I2Hh4fcTxLY5pkk2SBE389+5Ed++BGPeMRLv/RLj+MIIAEYsAQIbMAApZRT
p07xnN7qrd7y1V7tVW3znGwDkgAb5K52f/O3f/unf/InH/qhH7parQDb3M8AiGcTOnHyBM/p4Q9/
+Nd8zdeM4yhkjMAASDIGMJJspK7rfv3Xf/3o6Oit3/qtV+s1NpcJLAEC25IwYMPp06d5Tu/6Lu/6
Oq/9OtzPIJ6/2Wz2sz/7s7NZ/4Zv8IbrYZR4DgbxQIuNja2tLdtv+IZvWErwP4AkSbwAQqUU7jeb
zXiAxWLBC2YwCHO/d32Xd3nxF3uxL/qiL3qbt37r13/91+ff7cSJE+/xHu/xHu/xHpn5W7/1W3/y
p3/K/1KyEP9WAFD5D7U8POy7rpQCAMeOHTt27BgvmhMnTpw+ffrMmTP8W3Vdd/311/OiuebMNdvb
2ydOnODfqpRyyy238CK74YYbDg4ObrzxRv6tNjY2Hvawh/Giufbaa+fz+c233MKLTNLLvdzLmf8p
bP7zGPEAL/mSL/nFX/hFX/XVX/V3f/d3H/qhHzKbzfmPEBGPfvSj/+7v/o7/pcy/BwAE/6F+9Md+
9PDggH+TtG3zX8VOMP+FbDuT/0LZkn8N2z//87+QbeJ/CvOfQLZtxHPZ3tn+zM/8zAc/6EGf+Imf
9NSnPo3/IK21tHnR/P3f//3epUvc77bbbrv77rv5d7PN/dLmsnEc77vvvtaS/zQAEPyH6vsZEv8m
wvxXE/+FDBb/pST+NWz/3d/9rdP8zxAh/jNIigDz/LzN277th33Yh33N13z1z/7sz/IfRLyoPuMz
PuPv/v7vud/3fd/3/eIv/RL/Do973OM+8AM/8PM+7/OAv/7rv373d3+Pb/iGbwDuvPPO93u/9/vQ
D/2wj/rIjzw8POQ/BwBU/kO98zu/82Kx4N/EBvNfxmDMfyWbNP+lzL+GpNd67deOKPwPkOknPvFJ
UozTJJ5JwollLITANgIEBkASTsBcJon7pRFgHx4eSuIFeOQjH/lFX/RFX/d1X/+4xz/+Iz78wzc3
N/mPNo7jr//6b1y4cOF1X/d1rr/++tVq9cu/9MvHjh8rtSABv/Wbv3V4dLRcLvta9/cPbr311qc8
5ckv87Ive82ZMz//8z+/ubX5Rm/4RrXWv/3bv/2Lv/iLl37pl36Zl3mZw8PDX/mVX0Z6wzd8w63N
LS77gz/8w2PHjj/96U8H/uAP/3B7Z+vO2+8AvvALv/A1XuM1P+AD3v9jP/Zjv/M7v/MjPuIjeH5s
Y/NvBQCV/2jGQvzbiP865r+aQOJ/MEmv+iqvwv8Mme2v/uqvLly40FrjMknY5oEE5l9HrbW9S5dC
wQu2ubn5yZ/8ST//8z//KZ/yKR/+ER/+yEc8kn8X85y+5mu++m//9u9e4iVf8kM+9EN/+qd+6jM+
4zOe8YxnvPiLv8Qf//GfbG9t/ciP/Og3fuM3vNmbv/mP//iPf8EXfsHf/d3fvvd7v/fbvu3bvszL
vMzHf8LH33jDjXfceeeTn/Tkt327t/moj/6od3u3d/uyL/uyr/rKr/yiL/7iEtHPZrc94/aP/uiP
4rIPeP/3/+Vf/uUf+qEfAj7sQz/0e7/3e//+7/8eePzjH/9Jn/RJwBu/8Rt/9/d8z0d8xEfwfElI
/FsBQOU/1A/90A+9wzu+4872Nv8Gwua/jozFfyWL/0LmX832r//6r7/u675uKYX/bl3t3vmd3/nF
XuzF+I+WmX/3d3/bWvIvefM3f/PHPvaxX/t1X/tar/Vab/PWb8O/lc1zeeu3euuXfZmXffozbn38
4x//9//wD7//B3/w4z/+4zfecMOv/dqvHh0eff/3f9/nfu7nvtZrvdbTnvqUYT2M43jLLbd88Rd/
8VOe8uQ//7M/f51PeJ2+n/3ET/zE673e6x3sHyzmi8/6rM+69rrrdi/tzmfzt3nbt32Jl3gJHsA2
93PadtqhmM3mQJQ4d/YcL4D4dwGA4D/UOE3Y/BsJzH8hif9KEv+VxL+a7T//8z+3k/8BjDPNfwJj
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
5+6u6/gvkZk8j9/7vd/7ki/5kq7rX+u1XvOjP/qjf+d3f/czPv3TH/7whz/pSU/a2Fjcfvvt7/d+
73fTTTfdeccdb/wmb/y3f/s3n/d5n3+wf/CJn/SJu7u73/u932v7Yz/2Y1/+5V/+Iz/yI3d3dzc2
Nr7lW77lR37kR3725352vR4+8iM+8o3e6A0Bw8d+zMe83Mu+7A/+4A8Cn/apn/qyL/OyP//zPw/s
7e2/+Iu9WKn1VV/hFRbzOf85AEC2+Q9iEP8BbEviv45B/NeyLYkX6vDwcDab1Vp5fvb39zc2Nkop
wDAMmTmfz7ns8PCwTW3n2A73s207Ivb29jY2NmqtwNHRUWtte3sbsH3u/Lntre2+70NC4r/b2bNn
n/60pyFJss1lkrBBxlxhjCVxmcASNoBBXGEbEEKk89TJk494xCP5L3Hbbbf9xE/8xMd8zMfwAD/2
4z9+4w03HDt27N3e7d1++Zd/+X3f930/5mM/5lVe+VVe7dVe7bu+67u+7/u//8Ybb/j4j/v4t3iL
t3jt137tV3mVV3mP93iP3/md36ld907v9E7f/E3f9PSnPf0bv+kbP+3TPu3TP/3Tf/RHf/QJT3jC
S77US771W731R33URz/2xR67XB69xIu/BPf7pV/+5R/4/u///u//fuAnf+Inf/4Xf/47v+M7P+Zj
PvbWW5/+sIc+9G///u9++Id++OTJkzw/H/ZhH/7pn/6p119/A/8mAFD5jyP41V/91dd4jddYLBb8
O0jiv5T4LyeJf8nm5iYv2Pb2Nvfr+54H2Nzc5DlJkgTs7Oxwv42NDe4n6czpM8DTn/70Bz3oQSHx
3+3MmTNnzpzh/6ibb7rpa7/267qu7u8f3H33Pffde+9LvsRLbm1tveRLvdRqtbrvvvve+Z3eCXiN
V3+NaZpaay/5ki950003PeUpTzl39uxXfuVXrpar666//qVe6qVe9VVf9a3e+q1e+qVe+mVe5mU+
4RM+4au+6qsV+pRP/mQeQADiCiEEfMEXfH5EzOfzd3u3d/vd3/u9t36rt+L5kQzi3woAgv9QT3jC
E8dx5Kr/nTLzh3/4h7Ml/6eZ/1rmeX3Kp37Ke733e37xl3xRKXH8+LHTZ8488YlPHMfx8Y9//Hwx
P3Pm9B/+4R8Bf/nXf1VrTWfXdcD29vbp06c/67M+8yu/6is/9EM+9N57732DN3jD3/qN37rv3vt+
+Zd/eb5Y/ORP/cQHvP/7f8M3fAMPYBvMZQZnAr/9279z4cKFzNzd3T154gQvgPl3AYDKf6iXeZmX
6fueq/7XOn78OOL/NvFfysI2z+mN3vCNvuWbv/VBD3rQox/1qO3t7Y/+qI/+jE//jEc/5tE33XRj
3/Uf8eEf8YEf+IF//ud/tl6trrnmms3F5g033ABce+217/u+7/OhH/qhXde/w9u/w6u/5mt8xVd+
+bXXXhcRr/zKr/xt3/7t3/D1Xx8Rb/mWb8kDbG5uXn/99Vy2tbF5zbXXAk960hO/7uu+dmNj4+Vf
/uVf8zVfkxdAiH8HAJBtrrrqfm1qUUISV/0Hue0Zz/jxn/iJj/3Yj+UBbN9xx53Hjx9bLBalFEm7
u7st2/FjxyVFxNHh4eHh0YmTJyRJysxaK5dduHBB0okTJ4D1en3fffedPn16sVgA99xzT0Rcc801
PEBmZmatFcjM1lrXdcC5c+fGcbz++ut5wT7swz700z/9M66//nr+TQCg8h/qN3/zN1/lVV5lsVhw
1f9Cts+eO3vttddy1X8k8Twk3XzzTTzA8ePHeYCNzc2NzU3uFxHc7+TJk9xvNpvdfPPN3O+6667j
eURERHBZREQEl50+fZp/mbD5twKA4D/U4/7hH6Zp4n88g/nfwWD+c5lnsv1d3/Vd0zRx1X8cCyT+
lxJI/FsBQPnsz/5s/uPs7By79dZbf+Znfna1Wj74wQ/+8z//8x//iZ/YvbT78Ic9/B/+4R9+9Ed/
9K677nr0ox/9tKc97Yd+6IduvfXWF3uxF3vGbbf9wA/8wNOe9rQXe/EXv+P223/wB3/wqU976mMf
+9h77rnnB77/B57wxCc85jGPOTo8+v7v//6/+qu/fPjDH479gz/4g3/0x390yy231Fp/4Ad+4I//
5I9vvOnG7a3tH/3RH/3t3/nta85cu72988M//EO///u/f9111x07duwnf/Inf+u3f/va667d2dn5
4R/+kd/7vd89dfLkyZMnf+7nfu7Xf+3Xj584cerUqR//8R//rd/6rRMnT546efLnf/7nf/VXf/XY
sWOnT5/+uZ/7uV/7tV9bLBbXXnvtr/3ar/3SL/1Sa+3mm2/+87/485/4iZ/Y29t72MMe9od/+Ic/
/dM/PQzDgx70oL/5m7/5sR/7sYsXLz784Q//4z/545/6yZ86PDh4yEMf+qd/8qc/+VM/tbt78eEP
f/jjHve4H/mRH7nvvnsf+chHPfWpT/2hH/rB22677bGPfewznvGMH/zBH3zGM57x2Mc+9o477viB
H/j+pz71qS/22Mfu7l78/u///r/927991KMedXB48P3f/wN/89d/8/CHP3wcx+///u//8z//s4c+
9KGGH/zBH/iTP/mTW255UO26H/iB7/+TP/6TW265pZ/1P/zDP/KHf/AHN9x4w8bGxg//8A///u//
/okTJ06ePPnjP/5jv/Vbv33i5MlTJ0/+zM/89K//xq/PZrOTJ04++CEPiQiu+g+yd+nS4x//+Fd5
lVfhf6Ff+oVfes3XfM3t7W3+TQBAtvkPdf78+fPnzx8/fvyaa645f+HC+XPndna2r7vu+t3d3fvu
O7tYLG6++aaDg4O77757Npvdcssth4eHd911V9/3D3rQg46Oju68886+n91yy82r1eqOO+7suvqg
W26ZWrvt9tswt9xyS5Ry2zOe0Vq76aab+r5/xjOe0Vq76aab5vP5M267bb1a3XjjjRsbG7fddts4
jjfccMPGxsbtt9++Wq1uvPHGjY2NZzzjGcMwXH/99VtbW3fceefR0eF11123s71z2223rVar62+4
YXtr68477zo8PLjuuut2dnbuvOvOw4PDa6655vjx43fffff+/v7JUydPnzp9/vz58+fP7+zsXHfd
dWfPnbt44cLxE8evOXPN7u7ufffdu7W1fcMNN5w7d+78hQvHjh277tprz58/f/78+a2trRtuuOHS
pb17771nc3PzxhtvPDg4uOvuu+fz2S0333J4eHjXXXfNZrNbbrnl6Ojozjvv7Pv+lltuGcfx9ttv
l/SgBz2otXbb7beHdMvNtyBue8Yz0r7llltKKbfddlvLdvNNN3Vd/4xnPKO1dtNNN/V9f9ttt43j
eNNNN83n82c84xnjOF533XXb29u33XbberW+7vrrtre377j9jqPl0TXXXHP8+HGu+g912223/eRP
/MRHf8zH8L/Qh334h3/6p37a9Tdcz78JAMg2V1111X+a22677Qd/4Ac/8iM/cj2sAQziedhIPJux
EABIss0zGcQDGMSLyFiIF0xg7ldK+diP/djP/dzPu+GG6/k3AYDKVVdd9Z9pa2vrrrvv+ozP/Ayu
EEIA2EiAMQYhA0IG8WySbHOZjQTGshAABvGCGQNCxiBxmY0EBhkEtiUBxgCIzMVisbW1xb8VAMg2
V1111f8qxkL8jwcAlauuuup/GyH+NwCAylVXXXXVfw4AqFx11VVX/ecAgMpVV1111X8OAKhcddVV
V/3nAIDKVVddddV/DgCoXHXVVVf95wCAylVXXXXVfw4AqFx11VVX/ecAgMpVV1111X8OAAj+HzPY
ts39bMC8yIzTtvnXsm2bq/6nMi8q8x/Mtvk/AgCC/8fOnT37Kq/yKj/0Qz/E/T7+4z/+3d/9PXiR
/dmf/dkrvPzLP/GJT+Bf6X3f930/8iM/kqv+57n33ntf67Ve66d/+qd5EfzD4x73Kq/yKn//9//A
f5Bz5869xmu+5i/8/M/zfwIABP+PDcPwF3/xF/fddx/3e8pTnvx3f/d3vMj2Lu395V/+5Wq14l/p
CU94wlOe+hSu+p9nvV7/3u/93t133cWLYHl09Gd/9qcHh/v8BxmH4a/+8i/Pnz/P/wkAUPn/TACS
uJ8kSVw2TtOTnvSk5dHRgx70oDNnznDZvffee/vtt586derBD36IhCRF2H76059+eHj4yEc+su97
Ljt//vzTnva006dOP+ShD+F+d9xxx7333vuoRz2q1BqIq/6HEgBcuHBhmqatra2nPOUpp06duvHG
GwFgmqYnPelJOzvHJIVCCAAu7u4+/WlPu/7666+//vq077zjzq2trRMnjgPnzp1rLa+99hrgvvvu
u+222x/84AedPn2ay2w//elPH4Zhc2uz1iqJ/xMAIPh/ThqGwebo6Mj21BoC2Nvbe6u3fMvXfd3X
fZd3eZeXfdmX/b3f+z3g5372Z1/hFV7h3d7t3V7+5V/+kz7pEwEpSpRP/dRPe6VXeqWXfMmXfP/3
f//WGvALv/gLL/MyL/vu7/Eer/Kqr/LZn/3ZXPYDP/iDL/7iL/4Wb/EWb/Imb3rH7XeUWrnqfyQJ
APjkT/nk13qt13rTN32TV37lV37sYx/7Mz/zM8BqtX7v937vl3/5l3/d13vdr/3ar+37jst+/ud/
/uVe9mXf9u3e7uVe7uW+8Ru+MaQv+dIvfb3Xfd3Van3r05/+ci/7sr/4i78AfPd3fffLvuzLvt3b
ve3LvOzL/sRP/iSXfe7nfu6Lv/iLvf7rv/6Hf9iHA4rg/wQACP4/MxuLxed93ufddOMND3/4w26+
+eZf+eVfns/mwJ/92Z9f2r30h3/wB09+8pNf7MVe7Au/8AuBr/rqr37pl3rpJz7xiT/yIz+8f7Bv
LDFN48mTJ/727/7ui77oi77v+77vr/7qr46Wyw/+oA9+t3d/tyc+4Qk/+qM/+mVf9mV/8Pu/f+nS
3kd/1Ee9w9u//ZOf/ORP+qRPfMYzbo0Irvqf7fDg8AlPeMJ7vfd7/8Pj/uFhD3vYV37lVwLf+Z3f
8SM/8iM//dM//Ud/+Af7B/tHR8tSy6VLlz7gAz7gfd7nfW59+tO/6qu+6hM+8RMe/7jHf9qnfsrt
d9z+Ld/yzV/+FV9x6vTp93zP93z84x//ER/5EV/4RV/0jGc846M/6qM+7EM/dHd394/+6I8+9/M+
94u+6Iuf8IQnvORLvuTe3l5I/J8AAJX/34ZhfKM3esPXfd3XXQ9DV+u3fMu3TtMEvN7rve6Lvdhj
f+EXfuEbv/Ebn/jEJx07tgO81Eu91Ld8y7d88Ad90Fu85Vt+2Zd+mVBmAh/+4R9+3bXXvvEbv/En
f/Innz179vGPf/wdd9xx9uzZz//8L5imUeL3/+APWstz58594Ad90Obm5pu/+Zu/9Eu/9DiMXPU/
2zRNj370o9/rPd8rIt7ojd7oJ3/qp4Bf+IVfeM3XfM03fMM3BD78wz78p3/qp2vt/vpv/uaee++5
dOnSV37lV166dOno6OgP/+gP3+/93u/Lv/zLP+IjPqLrup/6qZ8qpfzO7/zOOI7PuPXWL//yL7/n
nnvuvffev/qrv/rzP/+LUydPv8/7vM/W1tb7v9/7femXfEm2xv8JAFD5/22axtd5ndf5yI/8SAD4
7d/67VtvvRX44z/+47d7u7e7+eab3/AN3/CGG67f3993+su+7Mte+qVf+vu+7/ve+Z3f+VGPetRv
/uZvllIEGxsbgCRA0jgMwNl77z06PFytVm/yJm968803717aLaUcO3aMyzYWG8Zc9T+PeTbDbDaP
CKCUgj1N031nz958001cdvz48VqLYByGUPz93//DP/z9Pyj0lm/5ljfddDPwMi/zMsvl8uTJky/x
Ei8BXLhwYZzGP/qjP8rMUupbvMVbbG1vHx0dbm5u9H0P9LNZ1/eZ5v8EAKj8v2eb+xkjgB/4gR/Y
2tr63d/93b7v//Iv//Li7sV0/tzP/fwrvMIrvNd7vdff/t3fvfzLvdxf/MWf9/3MYJv7TVO75ZYH
bWxsvNu7v/s7vuM72v6TP/nTl3/5l3/84x/XWvvDP/zDRz7ykWfPnn3yU5/8yq/0ylz1P5skMJfZ
BmqtL/PSL/1rv/Zrh4eHm5ubv/u7vzuOU2bedOONXdd93Md97Bu8wRtM0/R3f/d3L/mSL2n7kz7p
k9/wDd/ojjtu/8Iv/MIv+7Ive/EXf4lZP/uqr/yqRz36Uev1+h8e97iXfZmX+Zu//uvbbrvtaU97
2mMf+9jHP+Hxh4eHpRb+TwCAyv9rApC4n21j4FGPeuQ3fdM3feRHfuRqvf7jP/7j66+/XtIP/uAP
/P7v//67vMs7P+UpTzt+/PjDHvbwpz3taQACsA2M03jDDdd/+Ed8xAd+0Af9zu/8zn333fdbv/Vb
v/3bv/0SL/ES7/AO7/gxH/Mxf/4Xf37r02/dvXgpM7nqfx6BbTCQLTOTZ3JrzeZDPvRDf+RHfuSt
3/qtH/XIR/3O7/5OKWW1Wr3My7zM+77v+77bu737u77ruz796U/78z//8z//87/4hV/4+d/93d/5
67/+myc/5clv+zZv8+Zv/mZv/hZv9gqv8Apv9uZv9nZv93Z/+Zd/efc99/zxH/3R277t237pl37p
27/927/Jm7zJH/7hHwKtNf5PAIDy2Z/92fx/FdLpU6df8zVf8/rrrweAjY2Nl3vZl32pl3qpl3mZ
l73++usf//jHv+EbvOF7v/d7vdiLPfZlX+bl3uIt3uL666//+3/4+xtvuOErvuIrHvWoR2Fuvvnm
V3+1V9/c3IxSrrnmmtd6zdc4efLU677O6zzqkY/4+7//++uvv/7Lv+IrXuolXxJ44zd+462trVtv
vfW93uu93vIt3+JlX/ZlH/vYx3LV/zTS6dOnX/M1XvP666/f3Nh4mZd5mZd6qZcC+r5/7GMf+5Iv
+VI33nDD677u6z7hCU/Y3Nz8rM/6rMc89rGv8iqvsrOz84Zv+IbXXHPmT/7kT2666cav+PKveMQj
HvEPf/8P7/BO7/gar/7qD33oQ2+44YbZbPaoRz7qrd7yrSL0F3/xFy/5ki/5VV/5lddcc81isXjT
N33T8+fPnzt3/hM+4RNf+ZVf6ZVe6ZWuvfZa/vcDANnmqquu+v/KIP6zAEDlqquu+n9M/CcCgOCq
q6666oUy/0YAULnqqquueqHEvxEAVK666qqr/nMAQOWqq6666j8HAFSuuuqqq/5zAEDlqquuuuo/
BwBUrrrqqqv+cwBA5aqrrrrqPwcAVK666qqr/nMAQHDVVf/DmKv+jwCAylVX/Q8jrvo/AgCCq67C
XHXVfwIAqFx1FeKqq/4TAEDlqquuuuo/BwBUrrrqqqv+cwBA5aqrrrrqPwcA/CMiduVRsIwFjwAA
AABJRU5ErkJggg==
------=_Part_526_507440834.1760785649195--