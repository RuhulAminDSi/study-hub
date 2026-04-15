import type { Module } from '../../types'

const m15: Module = {
  title: "15. Data Structures and Algorithms",
  titleBn: "১৫. ডেটা স্ট্রাকচার ও অ্যালগরিদম",
  level: "Advanced",
  lessons: [
    {
      id: "dsa1",
      title: "Data Structures",
      titleBn: "ডেটা স্ট্রাকচার",
      content: "Data Structure: Organization for efficient data handling.\n\nLinear:\n• Array: Indexed, fixed size\n• Linked List: Nodes with pointers\n  - Singly: One direction\n  - Doubly: Both directions\n  - Circular: Last connects to first\n• Stack: LIFO (Last In First Out)\n• Queue: FIFO (First In First Out)\n  - Circular\n  - Priority\n\nNon-Linear:\n• Tree: Hierarchical\n  - Binary: Max 2 children\n  - BST: Ordered binary tree\n  - AVL: Self-balancing\n  - Heap: Priority queue\n• Graph: Networks\n\nHashing:\n• Hash table: Key-value with hash function\n• Collision handling: Chaining, open addressing",
      contentBn: "ডেটা স্ট্রাকচার: দক্ষ ডেটা হ্যান্ডলিং এর জন্য সংগঠন।\n\nরৈখিক:\n• অ্যারে: ইনডেক্সড, স্থির আকার\n• লিংকড লিস্ট: পয়েন্টার সহ নোড\n  - সিংগলি: এক দিক\n  - ডাবলি: দুই দিক\n  - সার্কুলার: শেষ প্রথমে সংযুক্ত\n• স্ট্যাক: LIFO (লাস্ট ইন ফার্স্ট আউট)\n• কিউ: FIFO (ফার্স্ট ইন ফার্স��ট আউট)\n  - সার্কুলার\n  - প্রায়োরিটি\n\nনন-রৈখিক:\n• ট্রি: শ্রেণিবদ্ধ\n  - বাইনারি: সর্বোচ্চ ২ সন্তান\n  - BST: অর্ডারড বাইনারি ট্রি\n  - AVL: সেলফ-ব্যালান্সিং\n  - হিপ: প্রায়োরিটি কিউ\n• গ্রাফ: নেটওয়ার্ক\n\nহ্যাশিং:\n• হ্যাশ টেবিল: হ্যাশ ফাংশন সহ কী-ভ্যালু\n• কলিশন হ্যান্ডলিং: চেইনিং, ওপেন অ্যাড্রেসিং",
      takeaways: [
        "Arrays provide O(1) access, O(n) insertion",
        "Linked lists allow O(1) insertion/deletion",
        "Stacks and queues enable specific orderings",
        "Trees and graphs model hierarchical/network data"
      ],
      takeawaysBn: [
        "অ্যারে O(1) অ্যাক্সেস, O(n) ইনসার্শন দেয়",
        "লিংকড লিস্ট O(1) ইনসার্শন/ডিলিশন সক্ষম করে",
        "স্ট্যাক ও কিউ নির্দিষ্ট অর্ডারিং সক্ষম করে",
        "ট্রি ও গ্রাফ শ্রেণিবদ্ধ/নেটওয়ার্ক ডেটা মডেল করে"
      ],
      level: "Advanced"
    },
    {
      id: "dsa2",
      title: "Algorithms",
      titleBn: "অ্যালগরিদম",
      content: "Algorithm: Step-by-step problem solution.\n\nSorting:\n• Bubble: O(n²), simple\n• Selection: O(n²), minimum swap\n• Insertion: O(n²), efficient for small data\n• Merge: O(n log n), divide-conquer\n• Quick: O(n log n) average, O(n²) worst\n• Heap: O(n log n), tree-based\n\nSearch:\n• Linear: O(n)\n• Binary: O(log n), sorted data\n• Hash: O(1) average\n\nComplexity:\n• Time: How many operations\n• Space: How much memory\n\nBig-O Notation:\n• O(1): Constant\n• O(log n): Logarithmic\n• O(n): Linear\n• O(n log n): Linearithmic\n• O(n²): Quadratic\n• O(2^n): Exponential",
      contentBn: "অ্যালগরিদম: ধাপে ধাপে সমস্যা সমাধান।\n\nসর্টিং:\n• বাবল: O(n²), সহজ\n• সিলেকশন: O(n²), ন্যূনতম সোয়াপ\n• ইনসার্শন: O(n²), ছোট ডেটার জন্য দক্ষ\n• মার্জ: O(n log n), ডিভাইড-কনকয়ার\n• কুইক: O(n log n) গড়, O(n²) সবচেয়ে খারাপ\n• হিপ: O(n log n), ট্রি-ভিত্তিক\n\nসার্চ:\n• রৈখিক: O(n)\n• বাইনারি: O(log n), সর্টেড ডেটা\n• হ্যাশ: O(1) গড়\n\nকমপ্লেক্সিটি:\n• সময়: কত অপারেশন\n• স্থান: কত মেমোরি\n\nBig-O নোটেশন:\n• O(1): কনস্ট্যান্ট\n• O(log n): লগারিদমিক\n• O(n): রৈখিক\n• O(n log n): লিনিয়ারিদমিক\n• O(n²): কোয়াড্রাটিক\n• O(2^n): এক্সপোনেনশিয়াল",
      takeaways: [
        "Sorting algorithms have different trade-offs",
        "Merge sort and quick sort are O(n log n)",
        "Binary search requires sorted data",
        "Big-O describes worst-case complexity"
      ],
      takeawaysBn: [
        "সর্টিং অ্যাল���র��দমের বিভিন্ন ট্রেড-অফ আছে",
        "মার্জ সর্ট ও কুইক সর্ট হলো O(n log n)",
        "বাইনারি সার্চের জন্য সর্টেড ডেটা দরকার",
        "Big-O ওয়ার্স্ট-কেস কমপ্লেক্সিটি বর্ণনা করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module15 = m15