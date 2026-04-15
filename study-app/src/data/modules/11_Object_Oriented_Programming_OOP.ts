import type { Module } from '../../types'

const m11: Module = {
  title: "11. Object Oriented Programming (OOP)",
  titleBn: "১১. অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP)",
  level: "Intermediate",
  lessons: [
    {
      id: "oop1",
      title: "OOP Fundamentals",
      titleBn: "OOP এর মৌলিক ধারণা",
      content: "OOP: Programming paradigm based on objects.\n\nKey Concepts:\n\n1. Class: Blueprint for objects\n• Attributes: Data (properties)\n• Methods: Functions (behavior)\n\n2. Object: Instance of class\n• Has state (values)\n• Has behavior (methods)\n\n3. Encapsulation: Hide internal details\n• Public interface\n• Private implementation\n\n4. Abstraction: Show essential features\n• Hide complexity\n\n5. Inheritance: Reuse from parent class\n• Code reuse\n• Hierarchy creation\n• Types: Single, Multiple, Multilevel, Hierarchical\n\n6. Polymorphism: One name, many forms\n• Method overloading: Same name, different params\n• Method overriding: Redefine parent method",
      contentBn: "OOP: অবজেক্ট-ভিত্তিক প্রোগ্রামিং প্যারাডাইম।\n\nমূল ধারণা:\n\n১. ক্লাস: অবজেক্টের ব্লুপ্রিন্ট\n• অ্যাট্রিবিউট: ডেটা (প্রোপার্টি)\n• মেথড: ফাংশন (আচরণ)\n\n২. অবজেক্ট: ক্লাসের ইনস্ট্যান্স\n• স্টেট আছে (মান)\n• আচরণ আছে (মেথড)\n\n৩. এনক্যাপসুলেশন: অভ্যন্তরীণ বিবরণ লুকানো\n• পাবলিক ইন্টারফেস\n• প্রাইভেট ইমপ্লিমেন্টেশন\n\n৪. অ্যাবস্ট্রাকশন: প্রয়োজনীয় বৈশিষ্ট্য দেখানো\n• জটিলতা লুকানো\n\n৫. ইনহেরিট্যান্স: প্যারেন্ট ক্লাস থেকে পুনরায় ব্যবহার\n• কোড পুনরায় ব্যবহার\n• হায়ারার্কি তৈরি\n• প্রকার: সিঙ্গেল, মাল্টিপল, মাল্টিলেভেল, হায়ারার্কিক্যাল\n\n৬. পলিমর্ফিজম: এক নাম, অনেক রূপ\n• মেথড ওভারলোডিং: একই নাম, ভিন্ন প্যারামিটার\n• মেথড ওভাররাইডিং: প্যারেন্ট মেথড পুনঃসংজ্ঞায়িত",
      takeaways: [
        "Class is blueprint, object is instance",
        "Encapsulation bundles data and methods",
        "Inheritance enables code reuse",
        "Polymorphism allows multiple forms"
      ],
      takeawaysBn: [
        "ক্লাস হলো ব্লুপ্রিন্ট, অবজেক্ট হলো ইনস্ট্যান্স",
        "এনক্যাপসুলেশন ডেটা ও মেথড বান্ডেল করে",
        "ইনহেরিট্যান্স কোড পুনরায় ব্যবহার সক্ষম করে",
        "পলিমর্ফিজম একাধিক রূপের অনুমতি দেয়"
      ],
      level: "Intermediate"
    },
    {
      id: "oop2",
      title: "OOP Implementation",
      titleBn: "OOP বাস্তবায়ন",
      content: "Constructor: Special method initializing object.\n• Default: No parameters\n• Parameterized: With parameters\n• Copy: From another object\n\nDestructor: Cleans up when object destroyed.\n\nAccess Specifiers:\n• Private: Only class members\n• Protected: Class + derived classes\n• Public: Everyone\n\nVirtual Functions: Dynamic binding at runtime.\n\nPure Virtual: Abstract method (no implementation).\n\nAbstract Class: Has at least one pure virtual function.\n\nInterface: Contract specifying methods.\n\nComposition: Has-a relationship (contains object).\n\nAggregation: Has-a relationship (uses object).",
      contentBn: "কনস্ট্রাক্টর: অবজেক্ট ইনিশিয়ালাইজিং বিশেষ মেথড।\n• ডিফল্ট: কোনো প্যারামিটার নেই\n• প্যারামিটারাইজড: প্যারামিটার সহ\n• কপি: অন্য অবজেক্ট থেকে\n\nডিস্ট্রাক্টর: অবজেক্ট ধ্বংস হলে পরিষ্কার করে।\n\nঅ্যাক্সেস স্পেসিফায়ার:\n• প্রাইভেট: শুধু ক্লাস সদস্য\n• প্রোটেক্টেড: ক্লাস + ডেরাইভড ক্লাস\n• পাবলিক: সবাই\n\nভার্চুয়াল ফাংশন: রানট���ইমে ডাইনামিক বাইন্ডিং।\n\nপিউর ভার্চুয়াল: অ্যাবস্ট্রাক্ট মেথড (কোনো ইমপ্লিমেন্টেশন নেই)।\n\nঅ্যাবস্ট্রাক্ট ক্লাস: কমপক্ষে একটি পিউর ভার্চুয়াল ফাংশন আছে।\n\nইন্টারফেস: মেথড স্পেসিফাইং চুক্তি।\n\nকম্পোজিশন: Has-a সম্পর্ক (অবজেক্ট ধারণ করে)।\n\nঅ্যাগ্রিগেশন: Has-a সম্পর্ক (অবজেক্ট ব্যবহার করে)।",
      code: "class Rectangle {\nprivate:\n    int width, height;\npublic:\n    Rectangle(int w, int h) {\n        width = w; height = h;\n    }\n    int area() { return width * height; }\n};",
      takeaways: [
        "Constructors initialize, destructors clean up",
        "Access specifiers control visibility",
        "Abstract classes define interfaces",
        "Composition and aggregation model relationships"
      ],
      takeawaysBn: [
        "কনস্ট্রাক্টর ইনিশিয়ালাইজ করে, ডিস্ট্রাক্টর পরিষ্কার করে",
        "অ্যাক্সেস স্পেসিফায়ার দৃশ্যমানতা নিয়ন্ত্রণ করে",
        "অ্যাবস্ট্রাক্ট ক্লাস ইন্টারফেস সংজ্ঞায়িত করে",
        "কম্পোজিশন ও অ্যাগ্রিগেশন সম্পর্ক মডেল করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module11 = m11