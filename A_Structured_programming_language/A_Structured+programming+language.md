Date: Sat, 18 Oct 2025 11:08:57 +0000 (UTC)
Message-ID: 
Subject: Exported From Confluence
MIME-Version: 1.0
Content-Type: multipart/related; 
	boundary="----=_Part_4_1116826261.1760785737818"

------=_Part_4_1116826261.1760785737818
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: quoted-printable
Content-Location: file:///C:/exported.html

    
    Structured programming language
    
    
        
            1024x640
            72
            
        
        
            Print
            90
            
        
    
    
    
                
    

    # Structured programming language

    
        
- 
data types, operators, expressions, control structures;

- 
Functions and program structure: parameter passing conventions, scope ru=
les and storage classes, recursion;

- 
Header files;

- 
Preprocessor;

- 
Pointers and arrays;

- 
Strings;

- 
Multidimensional array;

- 
User defined data types: structures, unions, enumerations;

- 
Input and Output: standard input and output, formatted input and output,=
 file access;

- 
Variable length argument list;

- 
Command line parameters;

- 
Error Handling;

- 
Graphics;

- 
Linking;

- 
Library functions

- 
data types, operators, expressions, control structures;

Sure =F0=9F=91=8D -- let's briefly go through each topic =
one by one. These are **core concepts** of any programming lan=
guage (like C, C++, Java, or Python).

---

## =F0=9F=A7=
=A9 1. **Data Types**

Data types define **what kind of data** a variable can hold=
.

| Type | Example | Description |
|---|---|---|
| **int** | int age =3D 25; | Stores whole numbers (no decimals) |
| **float / double** | float price =3D 10.5; | Stores numbers with decimals |
| **char** | char grade =3D 'A'; | Stores a single character |
| **string** | "Hello" | Stores a sequence of characters (text) |
| **bool** | true / false | Logical value (used in conditions) |

=F0=9F=92=A1 Example:

int mar=
ks =3D 85;
float temp =3D 36.5;
char letter =3D 'A';

---

## =E2=
=9A=99 2. **Operators**

Operators perform **operations** on variables and values.

| Type | Example | Meaning |
|---|---|---|
| **Arithmetic** | +, -, *, /, % | Math operations |
| **Relational** | >, , >=3D, , =3D=3D, !=3D | Compare two values |
| **Logical** | &&, ` |
| **Assignment** | =3D, +=3D, -=3D, *=3D, /=3D | Assign values |
| **Increment/Decrement** | ++, -- | Increase or decrease by 1 |

=F0=9F=92=A1 Example:

int a =
=3D 10, b =3D 5;
int sum =3D a + b;        // Arithmetic
bool check =3D (a > b);   // Relational

---

## =F0=9F=
=A7=AE 3. **Expressions**

An expression is **a combination of variables, constants, and oper=
ators** that produces a value.

=F0=9F=92=A1 Example:

int res=
ult =3D (a + b) * c - 10;

Here, `(a + b) * c - 10` is an **expression** =
-- it calculates a value and assigns it to `result`.

---

## =
=F0=9F=94=81 4. **Control Structures**

Control structures **control the flow** of the program =E2=
=80=94 decide *what executes and when*.

### (a) **Deci=
sion Making**

Used for conditional execution.

if (mar=
ks >=3D 40)
    printf("Pass");
else
    printf("Fail");

Other types:

- 
`if...else`

- 
`else if`

- 
`switch...case`

---

### (b) **Loops

Used for repeating tasks**.

| Loop Type | Example | Purpose |
|---|---|---|
| **for** | for(i=3D0;i | Known number of repetitions |
| **while** | while(i | Unknown repetitions |
| **do...while** | Executes at least once |

=F0=9F=92=A1 Example:

for (in=
t i =3D 1; i 

---

### (c) **Jump=
 Statements**

Used to **change flow suddenly**.

- 
`break` -> exit from loop/switch

- 
`continue` -> skip current iteration

- 
`return` -> exit from function

---

✓ **In short:**

- 
**Data types** -> what kind of data

- 
**Operators** -> how to process data

- 
**Expressions** -> combination of data + operators

- 
**Control structures** -> how the program decides an=
d repeats actions

---

Would you like me to give **short MCQs and answers** for th=
ese topics (for govt job exam style)?

- 
Functions and program structure: parameter passing conventions, scope ru=
les and storage classes, recursion;

Excellent ✓ -- this topic is **core programming =
theory**, and it's very common in **govt IT exams, =
 ICT**, and **computer fundamentals tests**.

Let's go through each part clearly and simply -- with sho=
rt examples =F0=9F=91=87

---

## =F0=9F=A7=A9 **1. Functions and Program Structure**
A **function** is a **block of code** that per=
forms a specific task.

It helps in reusing code, improving readability, and modular programming.
### 📙 Function Syntax (in C/C++):

```
returnT=
ype functionName(parameter list) {
    // body
    return value;
}

```

### Example:

```
int add=
(int a, int b) {
    return a + b;
}

int main() {
    int result =3D add(5, 3);
    printf("%d", result);
}

```

=F0=9F=9F=A2 Output: `8`

---

### =F0=
=9F=A7=B1 Program Structure

A simple C program has:

- 
**Preprocessor directives** -> `#include `

- 
**Global declarations** -> global variables or const=
ants

- 
**Functions** -> `main()` and user-define=
d ones

=F0=9F=92=A1 Example structure:

#includ=
e 

int square(int x); // function declaration

int main() {
    int num =3D 4;
    printf("%d", square(num));
    return 0;
}

int square(int x) {  // function definition
    return x * x;
}

---

❙ **2. Parameter Passing Conventions

When we call a function, we can pass data (arguments)** i=
n two main ways:

| Type | Meaning | Example | Behavior |
|---|---|---|---|
| **Call by Value** | A **copy** of the variable is sent | add(x, y) | Changes inside function **don't affect** original v=
ariables |
| **Call by Reference** | The **actual variable address** is sent | add(&x, &y) |

### Example:

// Call=
 by value
void modify(int a) {
    a =3D a + 5;
}

int main() {
    int x =3D 10;
    modify(x);
    printf("%d", x); // Output: 10 (no change)
}

---

## =F0=9F=A7=
=A0 **3. Scope Rules**

Scope means **where a variable can be accessed**.

| Type | Description | Example |
|---|---|---|
| **Local Scope** | Declared inside a function/block -- accessible only there

int x inside main() |
| **Global Scope** | Declared outside all functions -- accessible anywhere | int x outside main() |
| **Block Scope** | Declared inside { } -- exists only within that block= | for (int i=3D0; i |

=F0=9F=92=A1 Example:

int g =
=3D 100; // global

void show() {
    int x =3D 5; // local
    printf("%d", x);
}

---

## =F0=9F=97=82 **4. Storage Classes**

Storage classes define **how long**, **where**=
, and **how accessible** a variable is.

| Keyword | Scope | Lifetime | Default Value | Meaning |
|---|---|---|---|---|
| **auto** | Local | Function/block | Garbage | Default for local variables |
| **static** | Local/Global | Program lifetime | 0 | Keeps value between function calls |
| **extern** | Global | Program lifetime | 0 | Declared in another file or outside function |
| **register** | Local | Function/block | Garbage | Stored in CPU register (faster access) |

=F0=9F=92=A1 Example:

void co=
unter() {
    static int count =3D 0;
    count++;
    printf("%d ", count);
}

int main() {
    counter(); // 1
    counter(); // 2
    counter(); // 3
}

=F0=9F=9F=A2 *Static variable keeps its value between calls.*

---

## =F0=9F=94=
=81 **5. Recursion**

Recursion means a **function calling itself** directly or i=
ndirectly.

It's used when a problem can be divided into **smaller sub=
problems** of the same type.

### Ex=
ample: Factorial using recursion

int fac=
torial(int n) {
    if (n =3D=3D 1)
        return 1;          // base case
    else
        return n * factorial(n - 1);  // recursive call
}

int main() {
    printf("%d", factorial(5));
}

=F0=9F=9F=A2 Output: `120`

=F0=9F=93=9D Here, `factorial(5)` -> `5 * 4 * 3 * 2 =
* 1`.

---

✓ **Summary Table**

| Concept | Description |
|---|---|
| **Function** | Block of reusable code |
| **Parameter Passing** | Sending data to function (by value/reference) |
| **Scope** | Where variable is visible |
| **Storage Class** | How long variable exists & where stored |
| **Recursion** | Function calling itself |

---

Would you like me to give you **MCQs + answers** on this to=
pic (like govt job exam style)?

- 
Header files;

Excellent =F0=9F=91=8D -- understanding **header files is very important, especially for C/C++** and **G=
ovt IT job / ICT** exams.

Let's explain it **simply and clearly** =F0=9F=91=87

---

## =F0=
=9F=A7=A9 **What is a Header File?**

A **header file** is a file that contains **function =
declarations**, **macros**, **constants**,=
 and sometimes **data type definitions** that can be used by m=
any C programs.

You include it at the beginning of your program using the `#include=
` directive.

---

### =
💡 **Purpose of Header Files**

✓ To reuse commonly used functions

✓ To make code modular and organized

✓ To avoid rewriting function declarations

✓ To use predefined library functions (like `printf()`, =
`scanf()`, etc.)

---

## 📝 **How to Include Header Files**

There are two types of includes:

### 📙 1. **Standard Library Header Files**

- 
These come with the C/C++ compiler.

- 
They are enclosed in **angle brackets **`.

=F0=9F=92=A1 Example:

#includ=
e    // standard input-output
#include     // math functions
#include   // string operations

=F0=9F=9F=A2 Example program:

#includ=
e 
#include 

int main() {
    printf("Square root of 16 is %.2f", sqrt(16));
    return 0;
}

---

### 📙 2. **User-Defined Header Files**

- 
Created by the programmer.

- 
Used to share your own functions across multiple files.

- 
Enclosed in **double quotes **" "`.

=F0=9F=92=A1 Example:

#includ=
e "myheader.h"

Suppose you create:

// myhe=
ader.h
void greet() {
    printf("Hello, User!");
}

and then in main file:

#includ=
e 
#include "myheader.h"

int main() {
    greet();
}

=F0=9F=9F=A2 Output: `Hello, User!`

---

## =F0=9F=93=9A **Common Standard Header Files in C**

| **Header File** | **Used For** | **Example Functions** |
|---|---|---|
| Standard Input/Output | printf(), scanf(), gets(), =
puts() |
| Console I/O (Turbo C only) | clrscr(), getch() |
| Mathematical functions | sqrt(), pow(), sin(), cos()= |
| String handling | strlen(), strcpy(), strcmp(), strcat() |
| General utilities | malloc(), free(), atoi(), e=
xit() |
| Character handling | toupper(), tolower(), isalpha() |
| Date and time | time(), clock() |
| Boolean data type | true, false |
| - | Integer limits | INT_MAX, INT_MIN |
| Floating-point limits | FLT_MAX, FLT_MIN |

---

## ❙ **How Header Files Work Internally

When you write:

#includ=
e 

=F0=9F=91=89 the preprocessor** literally copies the cont=
ents of that header file into your program **before compilation.

It's as if the file's contents are pasted at that line.

---

## 💡 In Short**

| Concept | Explanation |
|---|---|
| **Header File** | File that contains function declarations and macros |
| **Include Syntax** | #include  or #include "filename" |
| **Types** | Standard library & User-defined |
| **Purpose** | Reuse code, use library functions, organize program |

---

Would you like me to give you **MCQs (two-column format)** =
on header files next -- just like before?

Preprocessor;

Excellent ✓ -- the **C Preprocessor** is =
one of the most **important but often overlooked** topics in I=
CT/government IT exams.

Let's understand it **clearly, step by step**, with ex=
amples =F0=9F=91=87

---

## =
=F0=9F=A7=A9 **What is a Preprocessor?**

Before a C program is compiled, it first passes through a **Prepro=
cessor**.

💡 The **preprocessor** performs **text sub=
stitution and file inclusion** *before actual compilation starts.=
*

It handles all lines starting with `#` (hash symbol).

---

## ❙ **Role of the Preprocessor**

✓ Includes header files

✓ Defines constants and macros

✓ Controls conditional compilation

✓ Replaces macros and removes comments

After preprocessing, the **compiler** receives the expanded=
 source code.

---

## 💡 **Main Preprocessor Directives**

| Directive | Purpose |
|---|---|
| #include | Includes header files |
| #define | Defines constants or macros |
| #undef | Undefines a macro |
| #ifdef / #ifndef / #if / #e=
lse / #endif | Conditional compilation |
| #error | Generates an error message during compilation |
| #pragma | Gives special instructions to the compiler |

---

### =F0=9F=94=
=B9 1. `#include`

Used to include a header file.

✓ **Example:**

#includ=
e 
#include "myheader.h"

📘 ``* for system files, *`" "=
`* for user-defined files.*

---

### 📙 2. `#define` -- **Macro De=
finition**

Used to define constants or short code replacements.

✓ **Example 1:**

#define=
 PI 3.1416

float area =3D PI * r * r;

✓ **Example 2 (macro function):**

#define=
 SQUARE(x) (x * x)

int a =3D SQUARE(5);   // expands to (5 * 5)

=F0=9F=92=A1 *The preprocessor replaces every occurrence of *PI* or *`SQUARE(x)`* before compilation.*=

---

### 📙 =
3. `#undef`

Used to **cancel** a previous `#define`.

✓ Example:

#define=
 SIZE 100
#undef SIZE
#define SIZE 200

---

### 📙 4. **Conditional Compilation**

Used to compile specific parts of code depending on conditions.

✓ Example:

#define=
 DEBUG 1

#ifdef DEBUG
    printf("Debug mode ON\n");
#endif

=F0=9F=92=A1 *If *`DEBUG`* is defined, that block w=
ill compile.*

---

### 📙 5. `#if`, `#else`, `#elif`=
, `#endif`

Used for advanced conditional compilation.

✓ Example:

#define=
 VERSION 2

#if VERSION =3D=3D 1
    printf("Old version\n");
#elif VERSION =3D=3D 2
    printf("New version\n");
#else
    printf("Unknown version\n");
#endif

---

### 📙=
 6. `#pragma`

Used to give special commands to the compiler.

✓ Example:

#pragma=
 startup init
#pragma exit cleanup

=F0=9F=92=A1 These tell the compiler to call `init()` before =
`main()` and `cleanup()` after `main()` (d=
epends on compiler).

---

### 📙 =
7. `#error`

Used to stop compilation and display a custom error.

✓ Example:

#if VER=
SION 

---

## =F0=9F=94=81 **Order of Compilation Steps**

```
Source =
Code (.c)
      =E2=86=93
Preprocessor (# directives handled)
      =E2=86=93
Expanded Source
      =E2=86=93
Compiler (converts to object code)
      =E2=86=93
Linker (links libraries)
      =E2=86=93
Executable (.exe)

```

---

## =F0=
=9F=93=9A **Quick Summary Table**

| Directive | Meaning | Example |
|---|---|---|
| #include | Include header file | #include |
| #define | Define macro/constant | #define PI 3.14 |
| #undef | Remove macro definition | #undef PI |
| #ifdef | If defined | #ifdef DEBUG |
| #ifndef | If not defined | #ifndef TEST |
| #if / #elif / #else / #endif | Conditional compilation | #if VALUE =3D=3D 10 |
| #error | Generate compile-time error | #error "Invalid Input" |
| #pragma | Compiler-specific instruction | #pragma once |

---

✓ **In Short:**

> 
The **C Preprocessor** prepares your code before compilatio=
n -- it **includes files, replaces macros, and controls which =
code gets compiled.**

---

Would you like me to give a **two-column MCQ set** on *P=
reprocessor directives* next (exam-style, like before)?

- 
Pointers and arrays;

Excellent ✓ -- "**Pointers and Arrays" is one of the most important & confusing chapters in C programming -- but once you understand the relation=
ship between them, everything becomes very logical and easy.

Let's go step-by-step clearly =F0=9F=91=87

---

## =F0=9F=
=A7=A9 What is a Pointer?**

=F0=9F=91=89 A **pointer** is a **variable that store=
s the memory address** of another variable.

### Example:

int a =
=3D 10;
int *p;      // declare pointer
p =3D &a;      // assign address of a to pointer p

💡 **Explanation:**

- 
`a` holds the value `10`

- 
`&a` gives the **address of a**

- 
`p` holds that address

- 
`*p` gives the **value stored at that address**

✓ Example:

printf(=
"%d", *p);   // prints 10

---

## =F0=9F=
=93=A6 **Memory Concept**

| Variable | Value | Address (example) |
|---|---|---|
| a | 10 | 1000 |
| p | 1000 | 2000 |

=F0=9F=91=89 `p` -> points to -> `a`=

---

## =F0=
=9F=A7=A0 **Pointer Operators**

| Operator | Meaning |
|---|---|
| & | Address-of operator |
| * | Value-at (dereference) operator |

✓ Example:

int x =
=3D 5;
int *ptr =3D &x;
printf("%d", *ptr); // 5

---

## =F0=
=9F=94=B9 **Pointer to Pointer**

You can have a pointer that stores the address of another pointer.

int a =
=3D 10;
int *p =3D &a;
int **q =3D &p;

printf("%d", **q); // prints 10

---

## =F0=9F=
=A7=B1 **What is an Array?**

=F0=9F=91=89 An **array** is a **collection of elemen=
ts** of the same type stored in **contiguous memory**.
✓ Example:

int arr=
[3] =3D {10, 20, 30};

💡 Memory layout:

| Index | Address | Value |
|---|---|---|
| 0 | 1000 | 10 |
| 1 | 1004 | 20 |
| 2 | 1008 | 30 |

(assuming each int =3D 4 bytes)

---

## =F0=9F=92=A1 **Relationship Between Arrays and Pointer=
s**

=F0=9F=91=89 The **array name itself acts like a pointer** =
to its first element.

✓ Example:

int arr=
[3] =3D {10, 20, 30};
printf("%d", *arr);      // prints 10
printf("%d", *(arr + 1)); // prints 20

=F0=9F=92=AC Here:

- 
`arr` =3D address of `arr[0]`

- 
`arr + 1` =3D address of `arr[1]`

- 
`*(arr + 1)` =3D value at that address -> `20

---

### =F0=
=9F=94=B9 Pointer Arithmetic

You can move through an array using pointer arithmetic.

int arr=
[3] =3D {10, 20, 30};
int *p =3D arr;

printf("%d\n", *p);     // 10
p++;
printf("%d\n", *p);     // 20

📘 When you increment a pointer, it moves to the **next =
element's address** (not +1 byte, but +sizeof(type)).

---

## =F0=9F=94=81 **Array Traversal Using Pointers**

✓ Example:

int arr=
[] =3D {10, 20, 30, 40, 50};
int *p =3D arr;

for(int i =3D 0; i 

Output:

10 20 3=
0 40 50

---

## =F0=9F=
=A7=A0 **Important Facts**

- 
arr` and `&arr[0]` -> same address

=

- 
But `arr` and `&arr` have **different ty=
pes**:

`arr` -> pointer to first element

- 
`&arr` -> pointer to the entire array

- 
`*(arr + i)` is same as `arr[i]`

- 
Pointer arithmetic depends on the data type.

---

## 📙 **Pointer and Array Example with Strings

✓ Example:

char na=
me[] =3D "Ruhul";
char *p =3D name;

while(*p !=3D '\0') {
    printf("%c", *p);
    p++;
}

Output:

Ruhul

---

## ❙ Pointers to Arrays vs Array of=
 Pointers**

| Concept | Description | Example |
|---|---|---|
| Pointer to array | One pointer pointing to an entire array | int (*p)[5]; |
| Array of pointers | Multiple pointers stored in an array | int *p[5]; |

---

## =F0=9F=93=
=9A **Summary Table**

| Concept | Example | Meaning |
|---|---|---|
| Declare pointer | int *p; | p can hold address of int |
| Assign address | p =3D &a; | p stores address of a |
| Dereference | *p | Value at address |
| Pointer to array | int *p =3D arr; | p points to arr[0] |
| Access using pointer | *(p+i) | same as arr[i] |
| Increment pointer | p++ | moves to next element |

---

✓ **In Short:**

> 

- 
A **pointer** holds a **memory address**.

An **array name** is like a **constant pointer.

- 
You can access array elements using pointers and pointer arithmetic.

=

---

Would you like me to give you an MCQ practice set (15 questions)=
** on *Pointers & Arrays* -- formatted like an ICT=
 exam sheet (with answers and explanations)?

- 
Strings;

Excellent ✓ -- now let's cover **Strings=
** -- one of the most common C programming topics that freque=
ntly appears in **Govt IT / ICT** exams.

We'll go step-by-step so you understand it fully =F0=9F=91=87

---

## =F0=9F=
=A7=A9 **What is a String?**

=F0=9F=91=89 A **string** in C is a **sequence of cha=
racters** stored in memory **terminated by a null character (`'\0'`)**.

### Example:

char na=
me[] =3D "Ruhul";

💡 Internally it is stored as:

| Index | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Value | R | u | h | u | l | \0 |

✓ `\0` =3D null character (marks the **end of s=
tring**)

---

## =F0=
=9F=A7=B1 **String Declaration**

There are two main ways to declare strings in C:

### =F0=
=9F=94=B9 1. **Character Array**

char st=
r[6] =3D {'H','e','l','l','o','\0'};

### 📙 2. **String Literal (Shortcut)**

```
char st=
r[] =3D "Hello";

```

=F0=9F=92=A1 The compiler automatically adds `'\0'`.

---

## =
=F0=9F=93=A5 **String Input and Output**

### =
✓ Using `printf()` and `scanf()`

char na=
me[20];
printf("Enter your name: ");
scanf("%s", name);   // input stops at first space
printf("Hello %s", name);

### =E2=
=9A=A0 Limitation:

`scanf()` stops reading at space, tab, or newline.

If you input "Md Ruhul", only "Md" will be =
read.

### ✓ To read full line (with spaces):

Use `gets()` or better, `fgets()`:

char na=
me[50];
fgets(name, 50, stdin);
printf("Hello %s", name);

---

## )">=F0=9F=94=A7 **String Functions (from **``**)**

| Function | Description | Example |
|---|---|---|
| strlen(str) | Returns length of string (excluding \0) | strlen("Hi") -> 2 |
| strcpy(dest, src) | Copies string src to dest | strcpy(a, b) |
| strcat(s1, s2) | Concatenates two strings | "Hi" + "Bye" =3D "HiBye" |
| strcmp(s1, s2) | Compares two strings | 0 if equal |
| strupr(str) | Converts to uppercase (compiler-specific) | "abc" -> "ABC" |
| strlwr(str) | Converts to lowercase (compiler-specific) | "ABC" -> "abc" |
| strrev(str) | Reverses string (compiler-specific) | "abc" -> "cba" |

---

## =F0=9F=92=A1 =
**Examples**

### =F0=
=9F=94=B9 1. **Find String Length**

#includ=
e 
#include 

int main() {
    char name[] =3D "Ruhul";
    printf("Length: %d", strlen(name));
    return 0;
}

✓ Output: `Length: 5`

---

### =F0=9F=
=94=B9 2. **Copy a String**

char sr=
c[] =3D "Govt Job";
char dest[20];
strcpy(dest, src);
printf("%s", dest);

✓ Output: `Govt Job`

---

### =
📙 3. **Compare Two Strings**

char a[=
] =3D "Hello";
char b[] =3D "World";

if(strcmp(a,b) =3D=3D 0)
    printf("Equal");
else
    printf("Not Equal");

✓ Output: `Not Equal`

---

### 📙 4. **Concatenate Two Strings**

char s1=
[20] =3D "Govt ";
char s2[] =3D "Job";
strcat(s1, s2);
printf("%s", s1);

✓ Output: `Govt Job`

---

### 📙 5. **Manual String Traversal**

char st=
r[] =3D "Hello";
int i =3D 0;

while(str[i] !=3D '\0') {
    printf("%c ", str[i]);
    i++;
}

✓ Output: `H e l l o`

---

## 💡 **How Strings Work in Memory**

- 
Strings are **arrays of characters**

- 
Each character takes **1 byte**

- 
The last byte is `\0`** (null terminator)**

### Example:

char s[=
] =3D "ICT";

| Index | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Value | I | C | T | \0 |

---

## ❙ **Difference Between Char and Strin=
g**

| Type | Example | Meaning |
|---|---|---|
| char c =3D 'A'; | Single character | 'A' |
| char s[] =3D "A"; | String (2 chars: 'A' + \0) | "A\0" |

---

## 📝 **String vs Character Array**

| Concept | String | Character Array |
|---|---|---|
| Declaration | char str[] =3D "Hi"; | char str[3] =3D {'H','i','\0'}; |
| Size | Auto-added \0 | Must add \0 manually |
| Library Support | Manual processing |
| Use | Easier and safer | Lower-level control |

---

## 💡 =
**Key Notes**

✓ Always ensure your array has space for `'\0'`

✓ `str1 =3D=3D str2` **does not compare strings -- use `strcmp()` instead

✓ String operations require ``

✓ Avoid `gets()` (unsafe); use `fgets()`

---

## =F0=9F=AA=
=84 Summary Table**

| Topic | Example | Explanation |
|---|---|---|
| Declaration | char name[] =3D "ICT"; | Stores "ICT\0" |
| Input | scanf("%s", name); | Reads a single word |
| Output | printf("%s", name); | Prints string |
| Copy | strcpy(a,b); | Copies b -> a |
| Join | strcat(a,b); | Appends b after a |
| Compare | strcmp(a,b); | Returns 0 if equal |
| Length | strlen(a); | Counts chars before \0 |

---

Would you like me to give you **10 two-column MCQs with answers an=
d explanations** on **Strings** next (formatted like IC=
T exam)?

Multidimensional array;

Perfect ✓ -- now let's cover **Multidime=
nsional Arrays** in C. This is a **key topic** for prog=
ramming exams like **Govt IT / ICT**. I'll explain=
 it **step by step with examples**.

---

## =F0=9F=A7=A9 **What is a Multidimensional Array?**
=F0=9F=91=89 A **multidimensional array** is an **arr=
ay of arrays**.

It allows you to store data in **rows and columns** (like a ta=
ble or matrix).

### Syntax:

data_ty=
pe array_name[size1][size2]...[sizeN];

- 
`size1, size2,...` -> number of elements in each dimen=
sion

- 
Most common: **2D array** (rows =C3=97 columns)

---

📙 **1. Two-Dimensional (2D) Array**

- 
Think of it as a **table** with **rows and columns.

### Example: D=
eclare a 2D array

int mat=
rix[2][3]; // 2 rows, 3 columns

### Assign values

```
matrix[=
0][0] =3D 1;
matrix[0][1] =3D 2;
matrix[0][2] =3D 3;
matrix[1][0] =3D 4;
matrix[1][1] =3D 5;
matrix[1][2] =3D 6;

```

### Memory Repres=
entation

| Index | Value |
|---|---|
| [0][0] | 1 |
| [0][1] | 2 |
| [0][2] | 3 |
| [1][0] | 4 |
| [1][1] | 5 |
| [1][2] | 6 |

---

### 📙 2. Initialization at Declaration

int mat=
rix[2][3] =3D { {1,2,3}, {4,5,6} };

or using flattened form**:

int mat=
rix[2][3] =3D {1,2,3,4,5,6};

---

### =
📙 3. Accessing Elements

```
printf(=
"%d", matrix[1][2]); // prints 6

```

---

### =
📙 4. Traversing a 2D Array

```
for(int=
 i =3D 0; i 

✓ Output:

1 2 3
4 5 6

---

## 📙 **3. Three-Dimensional (3D) Array**

- 
Think of it as a **cube** or **stack of matrices.

### Declaration:

int arr=
[2][3][4]; // 2 blocks, 3 rows, 4 columns

### Example:

```
int arr=
[2][2][3] =3D {=20
    { {1,2,3}, {4,5,6} },=20
    { {7,8,9}, {10,11,12} }=20
};

```

### Access:

```
printf(=
"%d", arr[1][0][2]); // prints 9

```

---

## =F0=9F=
=94=B9 Important Notes**

- 
**Row-Major Storage**: In C, multidimensional arrays are st=
ored **row by row** in memory.

- 
**Index starts at 0**: First row -> 0, first column =
-> 0

- 
**Size must be constant** (for standard C arrays)

- 
Can be **partially initialized**: uninitialized elements be=
come 0.

---

## =
📙 **2D Array Example Program**

#includ=
e 

int main() {
    int matrix[2][3] =3D { {1,2,3}, {4,5,6} };

    printf("Matrix:\n");
    for(int i =3D 0; i 

✓ Output:

Matrix:
1 2 3
4 5 6

---

## =F0=
=9F=94=B9 **Quick Summary Table**

| Concept | Example | Explanation |
|---|---|---|
| 2D Array | int a[2][3]; | 2 rows =C3=97 3 columns |
| 3D Array | int a[2][3][4]; | 2 matrices =C3=97 3 rows =C3=97 4 columns |
| Access Element | a[1][2] | Row 1, column 2 |
| Traverse | Nested loops | Outer -> rows, Inner -> columns |
| Initialization | int a[2][3] =3D {{1,2,3},{4,5,6}}; | Directly assign values |

---

✓ **In Short:**

> 
Multidimensional arrays let you store **data in tabular or matrix =
form**, and you can traverse them using **nested loops.

2D arrays -> most common; 3D or higher -> rare, usually for a=
dvanced problems.

---

I can make a two-column MCQ sheet (15 questions) on Multidimensi=
onal Arrays** next, just like your previous MCQs.

Do you want me to do that?

- 
User defined data types: structures, unions, enumerations;

Perfect ✓ -- now let's cover **User-Defi=
ned Data Types (UDTs)** in C: **Structures, Unions, and Enumer=
ations**. These are very important for **Govt IT / ICT exa=
ms**. I'll explain clearly with examples.

---

## =
=F0=9F=A7=A9 **1. Structures (**`struct`**)

### =F0=
=9F=94=B9 What is a Structure?**

A **structure** is a **user-defined data type that can store different types of data together** under a =
single name.

Think of it as a **record** or **object**.

### Syntax:

struct =
structure_name {
    data_type member1;
    data_type member2;
    ...
};

### Example:

```
#includ=
e 

struct Student {
    int id;
    char name[20];
    float marks;
};

int main() {
    struct Student s1;

    s1.id =3D 101;
    strcpy(s1.name, "Ruhul");
    s1.marks =3D 85.5;

    printf("ID: %d\nName: %s\nMarks: %.2f\n", s1.id, s1.name, s1.marks);
    return 0;
}

```

✓ Output:

ID: 101
Name: Ruhul
Marks: 85.50

### Key Points:

- 
Can contain **different data types**.

- 
Access members using **dot operator (**`.`).

- 
Useful for **grouping related data**.

---

## =F0=9F=
=A7=A9 **2. Unions (**`union`**)**
### =F0=9F=
=94=B9 **What is a Union?**

A **union** is similar to a structure, but **all memb=
ers share the same memory location**.

- 
Only **one member** can store a value at a time.

- 
Saves memory but overwrites previous value if you assign a new member.

### Syntax:

```
union u=
nion_name {
    data_type member1;
    data_type member2;
    ...
};

```

### Example:

```
#includ=
e 

union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    union Data d;

    d.i =3D 10;
    printf("i: %d\n", d.i);

    d.f =3D 3.14;  // overwrites previous i
    printf("f: %.2f\n", d.f);

    strcpy(d.str, "Hello");  // overwrites previous f
    printf("str: %s\n", d.str);

    return 0;
}

```

✓ Output:

i: 10
f: 3.14
str: Hello

### Key Points:

- 
Saves memory.

- 
Only **one member usable at a time**.

- 
Access members using **dot operator (**`.`).

---

=
=F0=9F=A7=A9 **3. Enumerations (**`enum`**)

### =
📙 What is an Enumeration?**

An **enumeration** is a user-defined type that consists of =
a set of **named integer constants**.

- 
Useful for **making code readable**.

- 
Each name gets an integer value by default, starting from 0.

### Syntax:

enum en=
um_name { name1, name2, ..., nameN };

### Example:

```
#includ=
e 

enum Week { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday =
};

int main() {
    enum Week today;
    today =3D Wednesday;

    printf("Day number: %d\n", today); // Wednesday =3D 3
    return 0;
}

```

✓ Output:

Day num=
ber: 3

### Key Points:

- 
Default values start from **0** and increment by 1.

Can **assign custom values**:

enum Mo=
nth { Jan=3D1, Feb, Mar, Apr };

- 
Makes code more **readable and maintainable**.

---

## ❙ **Comparison Table: **struct** vs **`union`** vs `enum`

| Feature | struct | union | enum |
|---|---|---|---|
| Memory | Each member gets its own memory | All members share memory | Each name =3D int constant |
| Use | Store different types together | Save memory, one value at a time | Named constants for readability |
| Access | s.member | u.member | e.value |
| Example | struct Student { int id; float marks; }; | union Data { int i; float f; }; | enum Week {Sun,Mon,Tue}; |

---

✓ In Short:**

> 

- 
**Structure** -> Group different types, each has its=
 own memory.

- 
**Union** -> Group different types, share memory, sa=
ve space.

- 
**Enumeration** -> Named integer constants, improve =
readability.

---

I can make a **two-column MCQ sheet (15 questions)** for Structures, Unions, and Enumerations, just like your previou=
s topics.

Do you want me to do that next?

- 
Input and Output: standard input and output, formatted input and output,=
 file access;

Perfect ✓ -- now let's cover **Input and=
 Output (I/O) in C**, including **standard I/O, formatted I/O,=
 and file access**. This is a **very common topic** in =
Govt IT / ICT exams. I'll explain **step by step with exa=
mples**.

---

## =F0=9F=A7=A9 **1. Standard Input and Output**

C provides **standard input** and **output streams:

| Stream | Symbol | Description |
|---|---|---|
| Standard Input | stdin | Keyboard input (scanf()) |
| Standard Output | stdout | Screen output (printf()) |
| Standard Error | stderr | Error messages (usually console) |

### 📙 a) Standard Output: **`printf()`=

- 
Prints data to the screen

- 
Can format text using **format specifiers**

| Specifier | Data Type | Example |
|---|---|---|
| %d | int | printf("%d", 10); |
| %f | float | printf("%.2f", 3.1415); |
| %c | char | printf("%c", 'A'); |
| %s | string | printf("%s", "Hello"); |
| %u | unsigned int | printf("%u", 100); |
| %x | hexadecimal | printf("%x", 255); |

**Example:**

#includ=
e 

int main() {
    int a =3D 10;
    float b =3D 3.14;
    char c =3D 'R';
    printf("Int: %d, Float: %.2f, Char: %c\n", a, b, c);
    return 0;
}

✓ Output:

Int: 10=
, Float: 3.14, Char: R

---

### 📙 **b) Standard Input: **`scanf()`

- 
Reads input from keyboard

- 
Format specifier **must match variable type**

**Example:**

#includ=
e 

int main() {
    int age;
    char name[20];

    printf("Enter your name: ");
    scanf("%s", name);

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Name: %s, Age: %d\n", name, age);
    return 0;
}

=E2=9A=A0 **Note:** `scanf("%s", name)`=
 stops at the first space. Use `fgets()` for strings with spaces=
.

---

## =F0=9F=A7=A9 **2. Formatted Input and Output**

📙 **Formatted Output (**`printf`)

- 
Control width, precision, alignment

printf(=
"%10d", 50);   // prints 50 in a field width of 10
printf("%.2f", 3.14159); // prints 3.14
printf("%-10s", "Hi"); // left-align in width 10

### =
📙 **Formatted Input (**`scanf`**)

- 
Read specific types of data

scanf("=
%d %f %c", &a, &b, &c);

- 
Can read multiple inputs in a single line

---

## =F0=9F=
=A7=A9 3. File Access in C**

C allows **reading from and writing to files** using the FILE** structure** and functions like `fopen()=
`, `fclose()`, `fprintf()`, `fscanf(), fread()`, `fwrite()`.

### =F0=9F=
=94=B9 **a) File Opening**

FILE *f=
p;
fp =3D fopen("data.txt", "r"); // "r" =3D read, "w" =3D write, "a" =3D appe=
nd
if(fp =3D=3D NULL) {
    printf("File not found!\n");
}

### =F0=
=9F=94=B9 **b) Writing to a File**

```
FILE *f=
p =3D fopen("output.txt", "w"); // write mode
fprintf(fp, "Hello World!\n");
fclose(fp);  // Always close file

```

### =F0=
=9F=94=B9 **c) Reading from a File**

```
FILE *f=
p =3D fopen("input.txt", "r");
char str[100];

while(fgets(str, 100, fp) !=3D NULL) {
    printf("%s", str);
}

fclose(fp);

```

### =F0=9F=94=
=B9 **d) File Modes**

| Mode | Meaning |
|---|---|
| "r" | Open file for reading |
| "w" | Open file for writing (overwrite) |
| "a" | Append to file |
| "r+" | Read & write |
| "w+" | Write & read (overwrite) |
| "a+" | Append & read |

---

## =
📙 **e) Example: Full File I/O**

#includ=
e 

int main() {
    FILE *fp;
    fp =3D fopen("data.txt", "w");
    fprintf(fp, "C Programming\n");
    fclose(fp);

    fp =3D fopen("data.txt", "r");
    char str[50];
    while(fgets(str, 50, fp) !=3D NULL) {
        printf("%s", str);
    }
    fclose(fp);

    return 0;
}

✓ Output (on screen):

C Progr=
amming

---

## =
💡 **Key Points to Remember**

- 
**Always check** if file opened successfully (`fp !=3D=
 NULL`)

- 
Use `fclose()` to release resources

- 
`fprintf`** / **`fscanf` -> fo=
rmatted file I/O

- 
`fgets`** / **`fputs` -> strin=
g-based file I/O

- 
Standard I/O (`printf`, `scanf`) -> works w=
ith console

---

## =F0=9F=
=93=9A **Summary Table**

| Concept | Function / Example | Description |
|---|---|---|
| Std Output | printf("%d", x); | Print to screen |
| Std Input | scanf("%d", &x); | Read from keyboard |
| Formatted Output | printf("%10d", x); | Width & precision control |
| File Write | fprintf(fp, "text"); | Write formatted data to file |
| File Read | fgets(str, size, fp); | Read line from file |
| File Open | fopen("file","r/w/a"); | Open file in mode |
| File Close | fclose(fp); | Close file to save resources |

---

✓ **In Short:**

> 

- 
**Standard I/O** -> keyboard & screen

- 
**Formatted I/O** -> control how input/output looks

- 
**File I/O** -> read/write data from/to files using =
`FILE*` and related functions

---

- 
Variable length argument list;

Perfect ✓ -- now let's cover **Variable =
Length Argument Lists (variadic functions)** in C. This is a slightl=
y advanced topic, but very useful for **Govt IT / ICT exams and practical programming.

---

## =F0=9F=A7=A9 What is a Variable Length Argument List?

A variadic function** is a function that can accept a variable number of arguments.

- 
Normally, C functions have a **fixed number of parameters**=
, but variadic functions allow **flexibility**.

- 
Classic example: `printf()` -- it can take many argume=
nts depending on the format string.

---

## =E2=
=9A=99 **How it Works**

C provides `` library to handle variable argu=
ments.

### ">=
📙 **Key Macros in **``

| Macro | Purpose |
|---|---|
| va_list | Declare a variable to hold argument list |
| va_start | Initialize the argument list |
| va_arg | Access the next argument |
| va_end | Clean up |

---

## 📙 **Syntax of a Variadic Function**

return_=
type function_name(fixed_parameters, ...) {
    va_list arg;      // declare variable to handle arguments
    va_start(arg, last_fixed_parameter); // initialize

    // access each argument using va_arg
    type value =3D va_arg(arg, type);

    va_end(arg);      // clean up
}

- 
`...` -> represents **variable arguments

- 
`last_fixed_parameter` -> required for `va_start

---

## =
📙 Example 1: Sum of Numbers**

#includ=
e 
#include 

int sum(int count, ...) {
    va_list args;
    va_start(args, count);

    int total =3D 0;
    for(int i =3D 0; i 

✓ Output:

Sum: 10=
0
Sum: 20

---

## 📙 **Example 2: Simple Print Function**

```
#includ=
e 
#include 

void printNumbers(int n, ...) {
    va_list args;
    va_start(args, n);

    for(int i =3D 0; i 

✓ Output:

10 20 3=
0
1 2 3 4 5

---

## =F0=9F=
=A7=A0 **Important Notes**

- 
**At least one fixed argument** is recommended to know how =
many variable arguments exist (e.g., count` in `sum() example).

- 
**Type safety is not enforced** -- you must know the=
 correct type when using va_arg`.

- 
**Always call **`va_end()` to clean up.

- 
Variadic functions are **less safe** than fixed-parameter f=
unctions because of type and argument count issues.

---

## =F0=9F=
=94=B9 **Key Points Table**

| Concept | Example | Notes |
|---|---|---|
| Header file | Needed for variadic functions |
| Declare list | va_list args; | Holds argument list |
| Initialize | va_start(args, last_fixed_arg); | Must specify last fixed argument |
| Access arg | va_arg(args, type) | Returns next argument of given type |
| Clean up | va_end(args) | Free resources |
| Example function | int sum(int count, ...) | Returns sum of variable arguments |

---

✓ **In Short:**

> 
Variadic functions allow you to pass **any number of arguments to a function. They are flexible but unsafe** unless h=
andled carefully. `printf()` is the most famous example.

---

- 
Command line parameters;

Perfect ✓ -- now let's cover **Command L=
ine Parameters (Arguments)** in C. This is an **important topi=
c** for exams and practical programming. I'll explain it clearly, step by step, with examples.

---

## =F0=9F=A7=A9 **What are Command Line Parameters?**
=F0=9F=91=89 **Command line parameters** are values passed =
to a program **when it is executed from the terminal or command promp=
t**.

- 
Allows the program to **receive input without using **`scanf()`.

- 
Useful for programs that need **dynamic input**, like filen=
ames or numbers.

---

📙 **How to Receive Command Line Arguments

In C, the `main()` function** can be written a=
s:

int mai=
n(int argc, char *argv[])

or

int mai=
n(int argc, char **argv)

Explanation:

| Parameter | Meaning |
|---|---|
| argc | Argument Count -- total number of command line arguments (includi=
ng program name) |
| argv | Argument Vector -- array of strings containing arguments |

---

### 📙 **Example: Print Command Line Arguments

#includ=
e 

int main(int argc, char *argv[]) {
    printf("Number of arguments: %d\n", argc);
    for(int i =3D 0; i 

✓ Example execution in terminal:

./progr=
am Hello 123

Output:

Number =
of arguments: 3
Argument 0: ./program
Argument 1: Hello
Argument 2: 123

=F0=9F=92=A1 Note:

- 
`argv[0]` is always the program name**.

Remaining elements are the arguments.

---

## 📙 **Example: Sum of Numbers Using Command L=
ine**

#includ=
e 
#include 

int main(int argc, char *argv[]) {
    int sum =3D 0;

    for(int i =3D 1; i 

✓ Execution:

./sum 1=
0 20 30

Output:

Sum: 60

=F0=9F=92=A1 `atoi()` converts **string to integer.

---

## =F0=
=9F=94=B9 Points to Remember**

- 
**argc** =E2=89=A5 1 always, because program name is counte=
d.

- 
**argv** is an array of strings (char pointers).

- 
Convert string arguments to numeric types using:

`atoi()` -> integer

- 
`atof()` -> float/double

- 
Command line arguments allow **non-interactive input**, use=
ful for scripts and automation.

- 
Maximum number of arguments depends on the system.

---

## 📙 **Example: Check File Name from Command L=
ine**

#includ=
e 

int main(int argc, char *argv[]) {
    if(argc 

✓ Execution:

./progr=
am data.txt

Output:

File to=
 open: data.txt

---

## =
📙 **Quick Summary Table**

| Concept | Example | Notes |
|---|---|---|
| argc | int argc | Number of arguments (including program name) |
| argv | char *argv[] | Array of strings (arguments) |
| Convert string -> int | atoi(argv[1]) | Converts argument to integer |
| Program name | argv[0] | Always first element |
| Usage | ./program arg1 arg2 ... | Pass multiple inputs |

---

✓ **In Short:**

> 
Command line parameters let a C program **receive input from termi=
nal at runtime**, making programs more flexible and script-friendly.=

---

- 
Error Handling;

Perfect ✓ -- now let's cover **Error Han=
dling in C**. This is a fundamental topic for **Govt IT / =
ICT exams**, especially when working with **file I/O, memory a=
llocation, or system calls**. I'll explain it **clearl=
y, step by step**.

---

## =
=F0=9F=A7=A9 **What is Error Handling?**

**Error handling** is the process of **detecting and =
responding to errors** in a program to prevent **crashes or in=
correct results**.

- 
In C, **errors can occur** due to:

Invalid user input

- 
File not found

- 
Division by zero

- 
Memory allocation failure

---

## 📙 **1. Error Handling in Standard I/O**

### a) Checking =
File Opening

#includ=
e 

int main() {
    FILE *fp =3D fopen("data.txt", "r");
    if(fp =3D=3D NULL) {
        printf("Error: File not found!\n");
        return 1;  // exit program with error
    }
    printf("File opened successfully.\n");
    fclose(fp);
    return 0;
}

=F0=9F=92=A1 Always check if `fopen()`** returns NULL before reading or writing a file.

---

### b) Checking Us=
er Input

#includ=
e 

int main() {
    int num;
    printf("Enter an integer: ");
    if(scanf("%d", &num) !=3D 1) {
        printf("Error: Invalid input!\n");
        return 1;
    }
    printf("You entered %d\n", num);
    return 0;
}

=F0=9F=92=A1 `scanf()` returns the number of successf=
ully read items** -- check it to catch invalid input.

---

## 📙 **2. Error Handling with **`errno`
C provides `errno` in `` to identif=
y **system-level errors**.

#includ=
e 
#include 
#include 

int main() {
    FILE *fp =3D fopen("nofile.txt", "r");
    if(fp =3D=3D NULL) {
        printf("Error opening file: %s\n", strerror(errno));
    }
    return 0;
}

- 
`errno` -> global variable set by system/library funct=
ions

- 
`strerror(errno)` -> human-readable error message

---

📙 **3. Exit Status of a Program**

C programs can return an **exit status** using `return=
` in `main()` or `exit()` from ``.

| Status | Meaning |
|---|---|
| 0 | Success |
| Non-zero | Error occurred |

### Example:

#includ=
e 
#include 

int main() {
    printf("Exiting with error code 1\n");
    exit(1);
}

---

## 📙 **4. Handling Division by Zero**

```
#includ=
e 

int main() {
    int a =3D 10, b =3D 0;

    if(b =3D=3D 0) {
        printf("Error: Division by zero!\n");
        return 1;
    }

    printf("Result =3D %d\n", a / b);
    return 0;
}

```

=F0=9F=92=A1 Always **check for illegal operations** before=
 performing them.

---

## 📙 **5. Using **`assert()`** =
for Debugging**

- 
`assert()` from `` can **ter=
minate program if a condition is false**.

#includ=
e 
#include 

int main() {
    int x =3D -5;
    assert(x >=3D 0); // program stops if x 

- 
Helpful for **debugging and detecting logic errors** during=
 development.

---

## 📙 **6. Summary Table of Error Handling T=
echniques**

| Technique | Function / Concept | Example |
|---|---|---|
| File Error Check | fopen(), check NULL | if(fp=3D=3DNULL) |
| Input Validation | scanf() return | if(scanf("%d",&x)!=3D1) |
| System Errors | errno, strerror(errno) | FILE *fp=3Dfopen("nofile","r"); |
| Program Exit Status | exit() | exit(1) |
| Logic Assertion | assert() | assert(x>=3D0) |

---

✓ **In Short:**

> 
Error handling in C involves **checking return values**, validating inputs, using `errno`, and **ass=
ertions** to prevent crashes and undefined behavior. Proper error ha=
ndling is **essential for reliable programs**, especially in f=
ile operations and user input scenarios.

---

- 
Graphics;

Perfect ✓ -- now let's cover **Graphics =
in C**. While graphics is less common in standard exams, it sometime=
s appears in **Govt IT / ICT practicals** or programming q=
uestions. I'll explain **step by step**.

---

## =F0=
=9F=A7=A9 **What is Graphics in C?**

Graphics in C is about **drawing images, shapes, and text**=
 on the screen using functions provided by graphics libraries.

- 
C **itself does not have built-in graphics**.

- 
We usually use libraries like:

`graphics.h` (Turbo C / Borland C)

- 
Modern alternatives: SDL, OpenGL, or Windows API

---

## =F0=9F=
=94=B9 **1. Basic Concepts**

**Graphics programs** usually follow these steps:

- 
**Initialize graphics mode**

- 
**Draw graphics objects** (line, circle, rectangle, text)

- 
**Wait for user input or delay**

- 
**Close graphics mode**

---

### 📙 **2. Using **`graphics.h` (Turbo C style)

**Header file:**

#includ=
e 
#include 

### a) Initialize=
 Graphics

```
int gd =
=3D DETECT, gm;
initgraph(&gd, &gm, "C:\\Turboc3\\BGI");

```

- 
`gd` -> Graphics driver

- 
`gm` -> Graphics mode

- 
Third parameter -> path to BGI driver (Turbo C only)

---

### b) Draw Shapes

| Function | Description |
|---|---|
| line(x1, y1, x2, y2) | Draw line from (x1,y1) to (x2,y2) |
| circle(x, y, r) | Draw circle at (x,y) with radius r |
| rectangle(x1, y1, x2, y2) | Draw rectangle |
| outtextxy(x, y, "text") | Display text at (x,y) |
| setcolor(color) | Set color of shape |

### Example:

#includ=
e 
#include 

int main() {
    int gd =3D DETECT, gm;
    initgraph(&gd, &gm, "");

    setcolor(RED);
    rectangle(100, 100, 200, 200);

    setcolor(BLUE);
    circle(150, 150, 50);

    outtextxy(120, 220, "Graphics Example");

    getch();
    closegraph();
    return 0;
}

✓ Output:

- 
A red rectangle

- 
A blue circle inside it

- 
Text below shapes

---

### c) Close Graphics

closegr=
aph();

- 
Releases graphics memory

- 
Restores normal text mode

---

## =F0=
=9F=94=B9 **3. Colors in Graphics**

- 
C graphics uses predefined **color constants**:

| Color | Constant |
|---|---|
| Black | BLACK |
| White | WHITE |
| Red | RED |
| Green | GREEN |
| Blue | BLUE |
| Yellow | YELLOW |
| Cyan | CYAN |
| Magenta | MAGENTA |

---

## =
📙 **4. Modern Graphics in C**

- 
Turbo C graphics is **old** and runs in DOS only

- 
Modern alternatives:

**SDL** -> Game & graphics development

- 
**OpenGL** -> 2D/3D graphics

- 
**Windows API** -> GUI applications

- 
**Qt / GTK** -> Advanced graphics & GUI

---

## =F0=9F=
=94=B9 **5. Summary Table**

| Concept | Function / Example | Description |
|---|---|---|
| Initialize graphics | initgraph(&gd, &gm, "path") | Start graphics mode |
| Draw line | line(x1,y1,x2,y2) | Draws line |
| Draw circle | circle(x,y,r) | Draws circle |
| Draw rectangle | rectangle(x1,y1,x2,y2) | Draw rectangle |
| Display text | outtextxy(x,y,"text") | Show text |
| Set color | setcolor(RED) | Set color of shape |
| Close graphics | closegraph() | Restore normal mode |

---

✓ **In Short:**

> 
Graphics in C allows you to **draw shapes, text, and images on the screen.
`graphics.h` is the classic library (Turbo =
C), while modern libraries like SDL, OpenGL, or Qt** are use=
d today for real-world applications.

---

- 
Linking;

Perfect ✓ -- now let's cover **Linking i=
n C**. This is an important topic for **Govt IT / ICT exam=
s**, especially when dealing with **program compilation and mu=
ltiple files**. I'll explain **step by step**.

---

## =F0=9F=
=A7=A9 **What is Linking?**

**Linking** is the process of **combining object file=
s and libraries** to create a **single executable program.

- 
After writing and compiling C code, the compiler produces object=
 files (**`.obj`** or **`.o`).

- 
The **linker** combines these object files and resolves ref=
erences to produce the **final executable (**`.exe`=
** or a.out`)**.

---

## =F0=
=9F=94=B9 **Types of Linking in C**

- 
**Static Linking**

- 
**Dynamic Linking (Shared Libraries)**

---

=F0=9F=
=94=B9 **1. Static Linking**

- 
All required code from **libraries** is copied into the final executable during compile-time.

- 
Resulting executable is **larger** but **independent =
of external libraries at runtime**.

**Example:**

// main=
.c
#include 
#include "mathlib.h"

int main() {
    printf("Sum: %d\n", add(10, 20));
    return 0;
}

- 
Suppose `add()` is defined in `mathlib.c`.

**Steps to compile:**

gcc -c =
main.c      # produces main.o
gcc -c mathlib.c   # produces mathlib.o
gcc main.o mathlib.o -o program   # linker combines both
./program

`-c` -> compile only (produces object file)

- 
Linking happens in the last step to produce executable

---

### 📙 **2. Dynamic Linking (Shared Libraries)

- 
Code is not copied** into executable. Instead, it **links at runtime**.

- 
Produces **smaller executable** but requires **librar=
y present at runtime**.

**Example (Linux):**

gcc mai=
n.c -lm    # links with math library dynamically
./a.out

- 
`-lm` -> links with math library (`libm.so`=
) at runtime

---

## 📙 **3. Steps in Compilation & Linking

| Step | Description |
|---|---|
| Preprocessing | Handles #include, #define, macros -> pr=
oduces .i file |
| Compilation | Converts .i file to assembly -> .s file= |
| Assembly | Converts .s to object code -> .o file |
| Linking | Combines object files & libraries -> executable (.exe) |

✓ Flow:

Source =
Code -> Preprocessor -> Compiler -> Assembler =E2=86=
=92 Linker -> Executable

---

### 📙 4. Example of Linking Multiple Files

File1: add.c**

int add=
(int a, int b) {
    return a + b;
}

**File2: main.c**

#includ=
e 

int add(int, int); // function prototype

int main() {
    printf("Sum: %d\n", add(5, 10));
    return 0;
}

**Compile & Link:**

gcc mai=
n.c add.c -o program
./program

✓ Output:

Sum: 15

- 
Both `.c` files are compiled and linked to form the final pro=
gram.

---

## =
📙 **5. Linking in Practice**

- 
**Header files (**`.h`**)** =E2=86=
=92 tell compiler **what functions exist**

- 
**Source files (**`.c`**)** =E2=86=
=92 contain **actual implementation**

- 
**Linker** resolves **references between files

- 
If linker cannot find a function**, it gives **=E2=
=80=9Cundefined reference"** error.

---

## =
📙 **Quick Summary Table**

| Concept | Description |
|---|---|
| Linking | Combining object files and libraries to create executable |
| Static Linking | Libraries copied into executable, bigger size, independent |
| Dynamic Linking | Libraries linked at runtime, smaller executable, requires library presen=
t |
| Header Files | Provide function declarations to compiler |
| Object Files | Compiled .o files ready for linking |
| Compilation Flow | Preprocessing -> Compilation -> Assembly -> Linking=
 -> Executable |

---

✓ **In Short:**

> 
**Linking** is the process of **connecting compiled c=
ode and libraries** to make a complete program.

- 
**Static linking** -> compile-time, bigger executabl=
e

- 
**Dynamic linking** -> runtime, smaller executable

---

- 
Library functions

Perfect ✓ -- now let's cover **Library F=
unctions in C**. This is an **important topic** for Gov=
t IT / ICT exams because **many programs rely on built-in functio=
ns**. I'll explain **step by step with examples.

---

## =F0=9F=A7=A9 What are Library Functions?**

**Library functions** are **predefined functions in C that you can use directly** without writing their =
code.

- 
They are **stored in standard libraries**.

- 
They save time and reduce errors.

- 
Examples: `printf()`, `scanf()`, `strlen(), sqrt()`, etc.

---

## 📙 **1. Categories of Library Functions**

| Category | Header File | Examples |
|---|---|---|
| Input/Output | printf(), scanf(), fprintf(), fscanf() |
| String Handling | strlen(), strcpy(), strcmp(), strcat() |
| Mathematics | sqrt(), pow(), sin(), cos()= |
| Character Handling | isalpha(), isdigit(), toupper(), =
tolower() |
| Time Functions |
| Memory Management | malloc(), free(), calloc(), realloc() |
| Miscellaneous | exit(), system(), rand(), a=
bs() |

---

📙 **2. Example: String Functions**

#includ=
e 
#include 

int main() {
    char str1[20] =3D "Hello";
    char str2[20];

    strcpy(str2, str1);   // Copy str1 into str2
    printf("Copied string: %s\n", str2);

    printf("Length of str1: %lu\n", strlen(str1));

    return 0;
}

✓ Output:

Copied =
string: Hello
Length of str1: 5

---

## 📙 **3. Example: Math Functions**

```
#includ=
e 
#include 

int main() {
    double x =3D 9.0;
    double y =3D 2.0;

    printf("Square root of %.1f: %.2f\n", x, sqrt(x));
    printf("%.1f raised to %.1f: %.2f\n", x, y, pow(x, y));

    return 0;
}

```

✓ Output:

Square =
root of 9.0: 3.00
9.0 raised to 2.0: 81.00

=F0=9F=92=A1 **Note:** Use `-lm` when compiling =
math functions in GCC:

gcc pro=
gram.c -o program -lm

---

## 📙 **4. Example: Character Functions**

```
#includ=
e 
#include 

int main() {
    char c =3D 'a';
    if(isalpha(c)) {
        printf("%c is a letter\n", c);
    }

    printf("Uppercase: %c\n", toupper(c));
    return 0;
}

```

✓ Output:

a is a =
letter
Uppercase: A

---

## =F0=9F=94=
=B9 **5. Key Points**

- 
**Library functions are precompiled** -- no need to =
write code.

- 
Always **include the correct header file**.

- 
Can be used for **input/output, math, string manipulation, memory =
management, etc.**

- 
Saves **time and reduces errors**.

- 
Some require **linking with libraries** (like -lm for math functions).

---

## =
📙 **6. Quick Summary Table**

| Header File | Functions | Use |
|---|---|---|
| printf(), scanf() | Input/output |
| strlen(), strcpy(), strcmp() | String handling |
| sqrt(), pow(), sin(), cos() | Math operations |
| isalpha(), toupper() | Character handling |
| malloc(), free(), rand() | Memory & utility |

---

✓ **In Short:**

> 
**Library functions** are **ready-to-use functions provided by C standard libraries.

They make programming faster, easier, and more reliable**.

---

    

------=_Part_4_1116826261.1760785737818--