# Structured Programming Language (C) - Study Notes

## Table of Contents
1. [Introduction to C](#1-introduction-to-c)
2. [Data Types and Variables](#2-data-types-and-variables)
3. [Control Structures](#3-control-structures)
4. [Functions](#4-functions)
5. [Arrays and Strings](#5-arrays-and-strings)
6. [Pointers](#6-pointers)
7. [Structures and Unions](#7-structures-and-unions)
8. [File I/O](#8-file-io)

---

## 1. Introduction to C

### Why C?
- Procedural programming language
- Basis for many modern languages (C++, Java, Python)
- Low-level memory access
- Portable

### C Program Structure
```c
#include <stdio.h>  // Preprocessor directive

// Function declarations
int main() {       // Main function
    // Statements
    return 0;
}
```

### Basic I/O
```c
// Input
scanf("%d", &variable);

// Output
printf("Hello");
printf("Value: %d", number);
```

### Format Specifiers
| Specifier | Type |
|-----------|------|
| %d, %i | Integer |
| %f | Float |
| %c | Character |
| %s | String |
| %lf | Double |
| %p | Pointer |

---

## 2. Data Types and Variables

### Basic Data Types
| Type | Size | Range |
|------|------|-------|
| char | 1 byte | -128 to 127 |
| int | 2/4 bytes | -32768 to 32767 |
| float | 4 bytes | 3.4E-38 to 3.4E+38 |
| double | 8 bytes | 1.7E-308 to 1.7E+308 |
| void | No value | - |

### Modifiers
- **short**: Smaller range
- **long**: Larger range
- **signed**: Can be negative
- **unsigned**: Only positive

### Variables
```c
int age = 25;        // Integer
float salary = 5000.50;  // Float
char grade = 'A';     // Character
```

### Constants
```c
#define PI 3.14159    // Macro constant
const int MAX = 100; // const variable
```

### Operators
| Type | Operators |
|------|-----------|
| Arithmetic | + - * / % |
| Relational | == != > < >= <= |
| Logical | && \|\| ! |
| Bitwise | & \| ^ ~ << >> |
| Assignment | = += -= *= /= %= |
| Increment/Decrement | ++ -- |

---

## 3. Control Structures

### Conditional Statements

#### if-else
```c
if (condition) {
    // statements
} else if (condition2) {
    // statements
} else {
    // statements
}
```

#### switch
```c
switch (variable) {
    case 1: 
        // statements
        break;
    case 2:
        // statements
        break;
    default:
        // statements
}
```

### Loops

#### for Loop
```c
for (int i = 0; i < n; i++) {
    // statements
}
```

#### while Loop
```c
while (condition) {
    // statements
}
```

#### do-while Loop
```c
do {
    // statements
} while (condition);
```

### Control Statements
- **break**: Exit loop/switch
- **continue**: Skip iteration
- **goto**: Jump to label (avoid)

---

## 4. Functions

### Function Definition
```c
return_type function_name(parameters) {
    // body
    return value;
}
```

### Function Declaration (Prototype)
```c
int add(int a, int b);  // Declaration
```

### Types of Functions
- **No return, no parameter**
- **No return, with parameter**
- **With return, no parameter**
- **With return, with parameter**

### Passing Arguments
- **Call by Value**: Copy of argument passed
- **Call by Reference**: Address passed (using pointers)

### Recursion
- Function calls itself
- Needs base case

```c
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

---

## 5. Arrays and Strings

### Arrays
```c
// 1D Array
int numbers[5];
int arr[] = {1, 2, 3, 4, 5};

// 2D Array
int matrix[3][3];
```

### Strings
- Character array ending with '\0'
```c
char name[] = "Hello";  // Automatically adds \0
char name[6] = "Hello";
```

### String Functions (string.h)
```c
strlen(s)     // Length
strcpy(d, s)  // Copy
strcat(d, s)  // Concatenate
strcmp(s1, s2) // Compare
strchr(s, c)  // Find character
strstr(s1, s2) // Find substring
```

---

## 6. Pointers

### What is a Pointer?
- Variable storing memory address
- **Type**: Type of data it points to

### Declaration and Use
```c
int *ptr;       // Pointer to int
int var = 10;
ptr = &var;    // Store address
*ptr = 20;     // Access value at address
```

### Pointer Arithmetic
```c
ptr++;      // Move to next memory location
ptr--;     // Move back
ptr + n;   // n positions ahead
```

### Pointers and Arrays
```c
int arr[5];
int *p = arr;  // Points to first element
p[i] == *(p + i) == arr[i]
```

### Pointers and Functions
```c
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
```

### Dynamic Memory Allocation
```c
// Allocate
int *ptr = (int*)malloc(sizeof(int));
int *arr = (int*)malloc(n * sizeof(int));

// Free
free(ptr);
free(arr);
```

---

## 7. Structures and Unions

### Structure
```c
struct Student {
    char name[50];
    int age;
    float marks;
};

struct Student s1;
s1.age = 20;
strcpy(s1.name, "John");
```

### typedef
```c
typedef struct {
    int x;
    int y;
} Point;

Point p1 = {10, 20};
```

### Union
```c
union Data {
    int i;
    float f;
    char c;
};

union Data d;
d.i = 10;  // Overwrites other members
```

### Difference: Struct vs Union
- **Struct**: All members have separate memory
- **Union**: All members share same memory

---

## 8. File I/O

### File Operations
```c
// Opening file
FILE *fp = fopen("filename.txt", "mode");

// Modes: r, w, a, r+, w+, a+, rb, wb, etc.

// Closing
fclose(fp);
```

### Reading/Writing
```c
// Character
fputc('A', fp);
fgetc(fp);

// String
fputs("Hello", fp);
fgets(buffer, size, fp);

// Formatted
fprintf(fp, "%d %s", num, str);
fscanf(fp, "%d %s", &num, str);
```

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| printf/scanf | Output/Input |
| if-else | Conditional |
| for/while/do-while | Loops |
| function | Reusable code block |
| array | Same type collection |
| pointer | Memory address |
| struct | Different types grouped |
| union | Shared memory |

---

*Last Updated: 2026*
*Subject: Structured Programming Language (C)*
