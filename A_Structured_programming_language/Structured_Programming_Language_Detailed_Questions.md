# Structured Programming Language (C) - Detailed Review Questions

---

## Question 1
Explain the difference between pass by value and pass by reference with code examples.

**Answer:** Pass by Value:
- Copy of argument passed to function
- Changes don't affect original
- Used for basic types

Example:
```c
void increment(int x) {
    x = x + 1;
    printf("Inside: %d\n", x);
}

int main() {
    int a = 5;
    increment(a);
    printf("After: %d\n", a);  // Output: 5
    return 0;
}
```

Pass by Reference:
- Address of argument passed
- Changes affect original
- Used for arrays, structures

Example:
```c
void increment(int *x) {
    *x = *x + 1;
    printf("Inside: %d\n", *x);
}

int main() {
    int a = 5;
    increment(&a);
    printf("After: %d\n", a);  // Output: 6
    return 0;
}
```

Key Differences:
- Value: Creates copy, safer
- Reference: Modifies original, efficient for large data

---

## Question 2
Explain dynamic memory allocation in C with malloc, calloc, and realloc.

**Answer:** Dynamic Memory Allocation:

malloc (Memory Allocation):
- Allocates single block
- Returns void pointer
- Initializes to garbage

Example:
```c
int *ptr = (int*)malloc(sizeof(int));
*ptr = 10;
free(ptr);
```

calloc (Contiguous Allocation):
- Allocates multiple blocks
- Initializes to zero
- Slower than malloc

Example:
```c
int *arr = (int*)calloc(5, sizeof(int)); // 5 integers
arr[0] = 10;
free(arr);
```

realloc (Reallocation):
- Resizes previously allocated memory
- Preserves existing data

Example:
```c
int *ptr = (int*)malloc(5 * sizeof(int));
ptr = realloc(ptr, 10 * sizeof(int)); // resize to 10
free(ptr);
```

Memory Leak:
- Not freeing allocated memory
- Causes memory exhaustion
- Always use free()

---

## Question 3
Explain the difference between structure and union in C.

**Answer:** Structure (struct):
- Each member has separate memory
- Size = sum of all members (with padding)
- All members accessible

Example:
```c
struct Student {
    int id;
    char name[20];
    float marks;
};
// Size: 4 + 20 + 4 = 28 bytes (approx)
```

Union:
- All members share same memory
- Size = largest member
- Only one member valid at a time

Example:
```c
union Data {
    int i;
    float f;
    char c;
};
// Size: 4 bytes (largest member)
```

Usage:
- Struct: Store different data together
- Union: Save memory, store one type at a time

Example:
```c
union Data d;
d.i = 10;
printf("%d\n", d.i); // Valid
printf("%c\n", d.c); // May show garbage
```

---

## Question 4
Explain recursion with an example and discuss its advantages and disadvantages.

**Answer:** Recursion:
- Function calling itself
- Requires base case to stop

Example - Factorial:
```c
int factorial(int n) {
    if (n <= 1)  // Base case
        return 1;
    return n * factorial(n - 1);  // Recursive call
}
```

Execution:
factorial(4) = 4 * factorial(3)
             = 4 * 3 * factorial(2)
             = 4 * 3 * 2 * factorial(1)
             = 4 * 3 * 2 * 1 = 24

Advantages:
- Simplifies complex problems
- Elegant code
- Good for tree/graph traversal
- Natural for divide-and-conquer

Disadvantages:
- Memory overhead (stack)
- Slower than iteration
- Risk of stack overflow
- Hard to debug

Tail Recursion:
- Recursive call at end
- Compiler can optimize

Example:
```c
int factorial(int n, int result) {
    if (n <= 1)
        return result;
    return factorial(n-1, n*result);
}
```

---

## Question 5
Explain file operations in C with examples of reading and writing.

**Answer:** File Operations:

Opening File:
```c
FILE *fp = fopen("data.txt", "r");
// Modes: r, w, a, r+, w+, a+, rb, wb
```

Writing to File:
```c
// Character
fputc('A', fp);

// String
fputs("Hello", fp);

// Formatted
fprintf(fp, "Name: %s, Age: %d", name, age);

// Line
fgets(buffer, 100, fp);
```

Reading from File:
```c
// Character
char ch = fgetc(fp);

// String
fgets(buffer, 100, fp);

// Formatted
fscanf(fp, "%s %d", name, &age);

// Check end
if (feof(fp)) printf("End of file");
```

Closing File:
```c
fclose(fp);
```

Binary Files:
```c
// Write binary
fwrite(&data, sizeof(data), 1, fp);

// Read binary
fread(&data, sizeof(data), 1, fp);
```

---

## Question 6
Explain pointers and their arithmetic with examples.

**Answer:** Pointers:
- Variable storing address
- Type: type*

Example:
```c
int x = 10;
int *ptr = &x;  // & gets address
printf("%d", *ptr);  // * dereferences
```

Pointer Arithmetic:
- Increment/decrement moves by sizeof(type)
- Addition/subtraction with integers
- Difference between pointers

Example:
```c
int arr[] = {10, 20, 30, 40};
int *p = arr;  // Points to first element

p++;       // Points to arr[1]
p = p + 2; // Points to arr[3]
printf("%d", *p);  // 40

// Pointer difference
int *p1 = &arr[0];
int *p2 = &arr[3];
printf("%ld", p2 - p1);  // 3
```

Pointers and Arrays:
- Array name = address of first element
- arr[i] = *(arr + i) = *(p + i)

Pointer to Pointer:
```c
int x = 10;
int *p = &x;
int **pp = &p;  // Pointer to pointer
```

Function Pointers:
```c
int (*func)(int, int);  // Function pointer
```

---

## Question 7
Explain preprocessor directives in C with examples.

**Answer:** Preprocessor Directives:

1. #include:
   - Includes header files
   - Examples:
     ```c
     #include <stdio.h>     // System
     #include "myfile.h"    // User
     ```

2. #define:
   - Macro definition
   - Examples:
     ```c
     #define PI 3.14159
     #define MAX(a, b) ((a) > (b) ? (a) : (b))
     #define SQUARE(x) ((x) * (x))
     ```

3. Conditional Compilation:
   ```c
   #ifdef DEBUG
       printf("Debug mode");
   #endif

   #ifndef HEADER_H
   #define HEADER_H
   // content
   #endif
   ```

4. #undef:
   ```c
   #define PI 3.14
   #undef PI
   ```

5. #error and #pragma:
   ```c
   #ifndef __STDC__
   #error Compiler not ANSI compliant
   #pragma GCC optimize("O3")
   ```

6. Stringification:
   ```c
   #define PRINT(x) printf(#x " = %d", x)
   PRINT(val);  // prints: val = value
   ```

---

## Question 8
Explain command line arguments in C with an example.

**Answer:** Command Line Arguments:

main() with arguments:
```c
int main(int argc, char *argv[]) {
    // argc: argument count
    // argv: argument vector (array of strings)
}
```

Example execution:
```
./program hello world 123
```

- argc = 4
- argv[0] = "./program" (program name)
- argv[1] = "hello"
- argv[2] = "world"
- argv[3] = "123"

Example Program:
```c
#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Program: %s\n", argv[0]);
    
    for (int i = 1; i < argc; i++) {
        printf("Arg %d: %s\n", i, argv[i]);
    }
    
    return 0;
}
```

Use Cases:
- Passing filenames
- Options/flags
- Configuration values

atoi/ atol:
```c
int num = atoi(argv[3]);  // Convert "123" to 123
```

---

## Question 9
Explain storage classes in C with their characteristics.

**Answer:** Storage Classes:

1. auto:
   - Default for local variables
   - Automatic storage duration
   - Scope: function/block
   ```c
   auto int x;  // Same as int x
   ```

2. register:
   - Stored in CPU register (if possible)
   - Faster access
   - Cannot use & operator
   ```c
   register int i;
   for (i = 0; i < 100; i++)
   ```

3. static:
   - Retains value between calls
   - Scope: function/file
   - Initialized once
   ```c
   void counter() {
       static int count = 0;
       count++;
       printf("%d\n", count);
   }
   ```

4. extern:
   - Declares external variable
   - Defined elsewhere
   - Global scope
   ```c
   extern int global_var;
   ```

5. typedef:
   - Creates type alias
   - Readability
   ```c
   typedef unsigned long ulong;
   ulong x;
   ```

Summary:
Storage Class | Scope    | Lifetime    | Default Value
-------------|----------|------------|---------------
auto         | Block    | Block      | Garbage
register     | Block    | Block      | Garbage
static       | Block    | Program    | Zero
extern       | File     | Program    | Zero

---

## Question 10
Explain bitwise operators in C with practical examples.

**Answer:** Bitwise Operators:

Operators:
- & (AND)
- | (OR)
- ^ (XOR)
- ~ (NOT)
- << (Left shift)
- >> (Right shift)

1. Setting a bit:
```c
num = num | (1 << position);
// Set 3rd bit: num | (1 << 2)
```

2. Clearing a bit:
```c
num = num & ~(1 << position);
// Clear 3rd bit: num & ~(1 << 2)
```

3. Toggling a bit:
```c
num = num ^ (1 << position);
// Toggle 3rd bit: num ^ (1 << 2)
```

4. Checking a bit:
```c
if (num & (1 << position))  // Check bit set
```

5. Swapping without temp:
```c
a = a ^ b;
b = a ^ b;
a = a ^ b;
```

6. Finding odd/even:
```c
if (num & 1)  // Odd
else          // Even
```

7. Multiplying by 2^n:
```c
result = num << n;  // num * 2^n
```

8. Dividing by 2^n:
```c
result = num >> n;  // num / 2^n
```

---

*End of Structured Programming Language Detailed Questions*
