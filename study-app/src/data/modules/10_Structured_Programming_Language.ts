import type { Module } from '../../types'

const m10: Module = {
  title: "10. Structured Programming Language (C)",
  titleBn: "১০. স্ট্রাকচার্ড প্রোগ্রামিং ল্যাংগুয়েজ (C)",
  level: "Intermediate",
  lessons: [
{
      id: "sp1",
      title: "C Programming Basics",
      titleBn: "C প্রোগ্রামিংয়ের মৌলিক ধারণা",
      content: "C: Procedural programming language.\n\nStructure:\n• Headers: #include <stdio.h>\n• Main function: int main()\n• Statements: Instructions\n• Return: Exit status\n\nData Types:\n• Primary: int, float, double, char\n• Derived: arrays, pointers, structures\n\nVariables:\n• Declaration: type name;\n• Initialization: type name = value;\n• Scope: local, global\n\nOperators:\n• Arithmetic: +, -, *, /, %\n• Relational: ==, !=, <, >, <=, >=\n• Logical: &&, ||, !\n• Bitwise: &, |, ^, ~, <<, >>\n\nControl Structures:\n• if-else: Conditional\n• switch: Multi-way branch\n• for: Counter-controlled loop\n• while: Condition-controlled",
      contentBn: "C: প্রোসিডুরাল প্রোগ্রামিং ল্যাংগুয়েজ।\n\nকাঠামো:\n• হেডার: #include <stdio.h>\n• মেইন ফাংশন: int main()\n• স্টেটমেন্ট: নির্দেশনা\n• রিটার্ন: এক্সিট স্ট্যাটাস\n\nডেটা টাইপ:\n• প্রাইমারি: int, float, double, char\n• ডেরাইভড: অ্যারে, পয়েন্টার, স্ট্রাকচার\n\nভ্যেরিয়েবল:\n• ডিক্লারেশন: type name;\n• ইনিশিয়ালাইজেশন: type name = value;\n• স্কোপ: লোকাল, গ্লোবাল\n\nঅপারেটর:\n• অ্যারিথমেটিক: +, -, *, /, %\n• রিলেশনাল: ==, !=, <, >, <=, >=\n• লজিক্যাল: &&, ||, !\n• বিটওয়াইজ: &, |, ^, ~, <<, >>\n\nকন্ট্রোল স্ট্রাকচার:\n• if-else: শর্তাধীন\n• switch: বহু-পথ শাখা\n• for: কাউন্টার-নিয়ন্ত্রিত লুপ\n• while: শর্ত-নিয়ন্ত্রিত",
      code: "#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\");\n    return 0;\n}",
      takeaways: [
        "C is procedural, needs main function",
        "Data types determine variable storage",
        "Operators perform computations",
        "Control structures direct program flow"
      ],
      takeawaysBn: [
        "C প্রোসিডুরাল, মেইন ফাংশন দরকার",
        "ডেটা টাইপ ভ্যেরিয়েবল সংরক্ষণ নির্ধারণ করে",
        "অপারেটর গণনা করে",
        "কন্ট্রোল স্ট্রাকচার প্রোগ্রাম ফ্লো নির্দেশ করে"
      ],
      level: "Intermediate"
    },
    {
      id: "sp2",
      title: "Functions and Arrays",
      titleBn: "ফাংশন ও অ্যারে",
      content: "Function: Reusable code block.\n\nDeclaration: return_type name(parameters);\n\nTypes:\n• Library: printf, scanf, math functions\n• User-defined: Custom functions\n\nParameter Passing:\n• Pass by value: Copy of data\n• Pass by reference: Address of data\n\nRecursion: Function calling itself.\n\nArray: Collection of same-type elements.\n\nDeclaration: type array[size];\n\nTypes:\n• 1D: Linear collection\n• 2D: Matrix/table\n• Multi-dimensional\n\nPointer: Stores memory address.\n\nRelationship: Array name = pointer to first element.",
      contentBn: "ফাংশন: পুনরায় ব্যবহারযোগ্য কোড ব্লক।\n\nডিক্লারেশন: return_type name(parameters);\n\nপ্রকার:\n• লাইব্রেরি: printf, scanf, math functions\n• ইউজার-ডিফাইনড: কাস্টম ফাংশন\n\nপ্যারামিটার পাসিং:\n• পাস বাই ভ্যালু: ডেটার কপি\n• পাস বাই রেফারেন্স: ডেটার অ্যাড্রেস\n\nরিকার্সন: ফাংশন নিজে নিজে কল করা।\n\nঅ্যারে: একই টাইপের উপাদানের সংগ্রহ।\n\nডিক্লারেশন: type array[size];\n\nপ্রকার:\n• 1D: রৈখিক সংগ্রহ\n• 2D: ম্যাট্রিক্স/টেবিল\n• মাল্টি-ডাইমেনশনাল\n\nপয়েন্টার: মেমোরি অ্যাড্রেস সংরক্ষণ করে।\n\nসম্পর্ক: অ্যারের নাম = প্রথম উপাদানে পয়েন্টার।",
      code: "int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n-1);\n}",
      takeaways: [
        "Functions organize code into reusable units",
        "Recursion solves problems by self-calling",
        "Arrays store multiple same-type values",
        "Array name acts as pointer to first element"
      ],
      takeawaysBn: [
        "ফাংশন কোডকে পুনরায় ব্যবহারযোগ্য ইউনিটে সংগঠিত করে",
        "রিকার্সন নিজে কল করে সমস্যা সমাধান করে",
        "অ্যারে একই টাইপের একাধিক মান সংরক্ষণ করে",
        "অ্যারের নাম প্রথম উপাদানে পয়েন্টার হিসেবে কাজ করে"
      ],
      level: "Intermediate"
    },
    {
      id: "sp3",
      title: "Pointers and Dynamic Memory",
      titleBn: "পয়েন্টার ও ডায়নামিক মেমোরি",
      content: "Pointer: Variable storing memory address.\n\nDeclaration: type *pointer_name;\n\nOperators:\n• &: Address-of operator\n• *: Value-at (dereference)\n\nPointer Arithmetic:\n• Increment moves to next element\n• Decrement moves to previous\n• Addition/subtraction changes address\n\nDynamic Memory:\n• malloc: Allocate memory\n• calloc: Allocate and zero\n• realloc: Resize allocation\n• free: Release memory\n\nPointers to Pointers: int **ptr;\n\nFunction Pointers: Store function addresses.\n\nStrings: Character arrays ending with null ('\\0').",
      contentBn: "পয়েন্টা���: ��েমোরি অ্যাড্রেস সংরক্ষণকারী ভ্যেরিয়েবল।\n\nডিক্লারেশন: type *pointer_name;\n\nঅপারেটর:\n• &: অ্যাড্রেস-অফ অপারেটর\n• *: ভ্যালু-অ্যাট (ডিরিফারেন্স)\n\nপয়েন্টার অ্যারিথমেটিক:\n• ইনক্রিমেন্ট পরবর্তী উপাদানে যায়\n• ডিক্রিমেন্ট পূর্ববর্তী উপাদানে যায়\n• যোগ/বিয়োগ অ্যাড্রেস পরিবর্তন করে\n\nডায়নামিক মেমোরি:\n• malloc: মেমোরি বরাদ্দ\n• calloc: বরাদ্দ ও শূন্য করা\n• realloc: বরাদ্দ পুনর্মাপন\n• free: মেমোরি মুক্ত করা\n\nপয়েন্টার টু পয়েন্টার: int **ptr;\n\nফাংশন পয়েন্টার: ফাংশন অ্যাড্রেস সংরক্ষণ করে।\n\nস্ট্রিং: নল ('\\0') দিয়ে শেষ হওয়া ক্যারেক্টার অ্যারে।",
      code: "int *ptr = malloc(10 * sizeof(int));\nfree(ptr);",
      takeaways: [
        "Pointers store memory addresses",
        "Dynamic allocation handles runtime memory",
        "Pointer arithmetic respects data types",
        "Memory must be freed to prevent leaks"
      ],
      takeawaysBn: [
        "পয়েন্টার মেমোরি অ্যাড্রেস সংরক্ষণ করে",
        "ডায়নামিক বরাদ্দ রানটাইম মেমোরি পরিচালনা করে",
        "পয়েন্টার অ্যারিথমেটিক ডেটা টাইপ সম্মান করে",
        "��িক প্রতিরোধ করতে মেমোরি মুক্ত করতে হবে"
      ],
      level: "Advanced"
    },
    {
      id: "sp4",
      title: "Structures and File I/O",
      titleBn: "স্ট্রাকচার ও ফাইল I/O",
      content: "Structure: User-defined data type grouping different types.\n\nDeclaration:\nstruct name {\n    type member1;\n    type member2;\n};\n\nAccess: struct_var.member\n\nArray of Structures: Multiple structure instances.\n\nFile Operations:\n• fopen: Open file\n• fclose: Close file\n• fread: Read data\n• fwrite: Write data\n• fprintf: Formatted output\n• fscanf: Formatted input\n\nFile Modes:\n• r: Read\n• w: Write\n• a: Append\n• rb/wb: Binary",
      contentBn: "স্ট্রাকচার: বিভিন্ন টাইপ গ্রুপ করা ইউজার-ডিফাইনড ডেটা টাইপ।\n\nডিক্লারেশন:\nstruct name {\n    type member1;\n    type member2;\n};\n\nঅ্যাক্সেস: struct_var.member\n\nস্ট্রাকচারের অ্যারে: একাধিক স্ট্রাকচার ইনস্ট্যান্স।\n\nফাইল অপারেশন:\n• fopen: ফাইল খুলুন\n• fclose: ফাইল বন্ধ করুন\n• fread: ডেটা পড়ুন\n• fwrite: ডেটা লিখুন\n• fprintf: ফরম্যাটেড আউটপুট\n• fscanf: ফরম্যাটেড ইনপুট\n\nফাইল মোড:\n• r: পড়ুন\n• w: লিখুন\n• a: যোগ করুন\n• rb/wb: বাইনারি",
      code: "struct Student {\n    char name[50];\n    int age;\n    float marks;\n};",
      takeaways: [
        "Structures group different data types",
        "Files persist data between program runs",
        "Binary files store raw data efficiently",
        "Proper file handling prevents data loss"
      ],
      takeawaysBn: [
        "স্ট্রাকচার বিভিন্ন ডেটা টাইপ গ্রুপ করে",
        "ফাইল প্রোগ্রাম চলার মধ্যে ডেটা স্থায়ী করে",
        "বাইনারি ফাইল দক্ষতার সাথে রো ডেটা সংরক্ষণ করে",
        "উপযুক্ত ফাইল হ্যান্ডলিং ডেটা লস প্রতিরোধ করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module10 = m10