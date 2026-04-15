import type { Module } from '../../types'

const m16: Module = {
  title: "16. Database Systems",
  titleBn: "১৬. ডেটাবেস সিস্টেম",
  level: "Advanced",
  lessons: [
    {
      id: "db1",
      title: "Database Fundamentals",
      titleBn: "ডেটাবেসের মৌলিক ধারণা",
      content: "Database: Organized collection of data.\n\nDBMS: Database Management System.\n\nArchitecture:\n• External: User view\n• Conceptual: Logical structure\n• Internal: Physical storage\n\nData Models:\n• Relational: Tables with rows/columns\n• Hierarchical: Tree structure\n• Network: Graph structure\n• Object-oriented: Objects with methods\n\nER Model:\n• Entity: Real-world object\n• Attribute: Entity property\n• Relationship: Entity associations\n• Key: Unique identifier\n\nKeys:\n• Primary: Unique identifier\n• Foreign: References another table\n• Candidate: Potential primary\n• Composite: Multiple attributes",
      contentBn: "ডেটাবেস: ডেটার সংগঠিত সংগ্রহ।\n\nDBMS: ডেটাবেস ম্যানেজমেন্ট সিস্টেম।\n\nআর্কিটেকচার:\n• এক্সটার্নাল: ইউজার ভিউ\n• কনসেপচুয়াল: লজিক্যাল কাঠামো\n• ইন্টার্নাল: ফিজিক্যাল সংরক্ষণ\n\nডেটা মডেল:\n• রিলেশনাল: সারি/কলাম সহ টেবিল\n• হায়ারার্কিক্যাল: ট্রি কাঠামো\n• নেটওয়ার্ক: গ্রাফ কাঠামো\n• অবজেক্ট-ওরিয়েন্টেড: মেথড সহ অবজেক্ট\n\nER মডেল:\n• এন্টিটি: বাস্তব বস্তু\n• অ্যাট্রিবিউট: এন্টিটি প্রোপার্টি\n• রিলেশনশিপ: এন্টিটি সংস্থা\n• কী: অনন্য শনাক্তকারী\n\nকী:\n• প্রাইমারি: অনন্য শনাক্তকারী\n• ফরেন: আরেকটি টেবিলে রেফারেন্স\n• ক্যান্ডিডেট: সম্ভাব্য প্রাইমারি\n• কম্পোজিট: একাধিক অ্যাট্রিবিউট",
      takeaways: [
        "DBMS provides data management",
        "Relational model uses tables",
        "ER modeling visualizes database design",
        "Keys ensure data uniqueness and relationships"
      ],
      takeawaysBn: [
        "DBMS ডেটা ম্যানেজমেন্ট দেয়",
        "রিলেশনাল মডেল টেবিল ব্যবহার করে",
        "ER মডেলিং ডেটাবেস ডিজাইন ভিজুয়ালাইজ করে",
        "কী ডেটার অনন্যতা ও সম্পর্ক নিশ্চিত করে"
      ],
      level: "Advanced"
    },
    {
      id: "db2",
      title: "SQL and Normalization",
      titleBn: "SQL ও নরমালাইজেশন",
      content: "SQL: Structured Query Language.\n\nCommands:\n• DDL: CREATE, ALTER, DROP\n• DML: SELECT, INSERT, UPDATE, DELETE\n• DCL: GRANT, REVOKE\n\nJoins:\n• Inner: Matching rows\n• Left: All left + matching right\n• Right: All right + matching left\n• Full: All rows\n\nNormalization: Organize to reduce redundancy.\n\nForms:\n• 1NF: Atomic values\n• 2NF: No partial dependency\n• 3NF: No transitive dependency\n• BCNF: Stronger 3NF\n\nTransaction (ACID):\n• Atomic: All or nothing\n• Consistent: Valid state\n• Isolated: Concurrent independent\n• Durable: Permanent after commit",
      contentBn: "SQL: স্ট্রাকচার্ড কোয়েরি ল্যাংগুয়েজ।\n\nকমান্ড:\n• DDL: CREATE, ALTER, DROP\n��� DML: SELECT, INSERT, UPDATE, DELETE\n• DCL: GRANT, REVOKE\n\nজয়েন:\n• ইনার: ম্যাচিং সারি\n• লেফ্ট: সব লেফ্ট + ম্যাচিং রাইট\n• রাইট: সব রাইট + ম্যাচিং লেফ্ট\n• ফুল: সব সারি\n\nনরমালাইজেশন: রিডান্ড্যান্সি কমাতে সংগঠন করা।\n\nফর্ম:\n• 1NF: অ্যাটমিক মান\n• 2NF: আংশিক ডিপেন্ডেন্সি নেই\n• 3NF: ট্রানজিটিভ ডিপেন্ডেন্সি নেই\n• BCNF: শক্তিশালী 3NF\n\nট্রানজেকশন (ACID):\n• অ্যাটমিক: সব বা কিছুই না\n• কনসিস্টেন্ট: বৈধ অবস্থা\n• আইসোলেটেড: সমকালীন স্বাধীন\n• ডিওরেবল: কমিটের পর স্থায়ী",
      code: "SELECT name FROM employees WHERE dept = 'IT' ORDER BY salary DESC;",
      takeaways: [
        "SQL queries retrieve and manipulate data",
        "Joins combine tables based on relationships",
        "Normalization reduces data redundancy",
        "ACID ensures reliable transactions"
      ],
      takeawaysBn: [
        "SQL কোয়েরি ডেটা পুনরুদ্ধার ও ম্যানিপুলেট করে",
        "জয়েন সম্পর্ক অনুযায়ী টেবিল সংযুক্ত করে",
        "নরমালাইজেশন ডেটার রিডান্ড্যান্সি কমায়",
        "ACID নির্ভরযোগ্য ট্রানজেকশন নিশ্চিত করে"
      ],
      level: "Advanced"
    },
    {
      id: "db3",
      title: "Query Optimization and Recovery",
      titleBn: "কোয়েরি অপ্টিমাইজেশন ও রিকভারি",
      content: "Query Optimization: Choose most efficient execution plan.\n\nTechniques:\n• Use indexes\n• Avoid SELECT *\n• Use joins efficiently\n• Avoid subqueries when possible\n• Use proper join types\n\nCost Model: I/O, CPU, communication.\n\nConcurrency Control: Handle simultaneous access.\n\nProblems:\n• Dirty Read: Read uncommitted data\n• Lost Update: Both updates, one lost\n• Non-repeatable Read: Different reads\n\nSolutions:\n• Locking: Shared/Exclusive\n• Two-Phase Locking (2PL)\n• Timestamp ordering\n\nRecovery:\n• Log-based: Write-ahead logging\n• Checkpoint: Periodic snapshots\n• Backup: Full, incremental, differential\n\nIsolation Levels:\n• Read Uncommitted, Read Committed, Repeatable Read, Serializable",
      contentBn: "কোয়েরি অপ্টিমাইজেশন: সবচেয়ে দক্ষ এক্সিকিউশন প্ল্যান বেছে নেওয়া।\n\nটেকনিক:\n• ইনডেক্স ব্যবহার করুন\n• SELECT * এড়িয়ে যান\n• দক্ষভাবে জয়েন ব্যবহার করুন\n• সম্ভব হলে সাবকোয়েরি এড়িয়ে যান\n• যথাযথ জয়েন টাইপ ব্যবহার করুন\n\nকস্ট মডেল: I/O, CPU, যোগাযোগ।\n\nকনকারেন্সি কন্ট্রোল: সমকালীন অ্যাক্সেস হ্যান্ডল করা।\n\nসমস্যা:\n• ডার্টি রিড: আনকমিটেড ডেটা পড়া\n��� লস্ট আপডেট: দুটি আপডেট, একটি হারানো\n• নন-রিপিটেবল রিড: ভিন্ন রিড\n\nসমাধান:\n• লকিং: শেয়ার্ড/এক্সক্লুসিভ\n• টু-ফেজ লকিং (2PL)\n• টাইমস্ট্যাম্প অর্ডারিং\n\nরিকভারি:\n• লগ-ভিত্তিক: রাইট-অ্যাহেড লগিং\n• চেকপয়েন্ট: পর্যায়ক্রমিক স্ন্যাপশট\n• ব্যাকআপ: ফুল, ইনক্রিমেন্টাল, ডিফারেন্সিয়াল\n\nআইসোলেশন লেভেল:\n• রিড আনকমিটেড, রিড কমিটেড, রিপিটেবল রিড, সিরিয়ালাইজেবল",
      takeaways: [
        "Optimizer evaluates execution plans",
        "Locks prevent concurrent access issues",
        "Logging enables recovery from failures",
        "Isolation levels trade performance for consistency"
      ],
      takeawaysBn: [
        "অপ্টিমাইজার এক্সিকিউশন প্ল্যান মূল্যায়ন করে",
        "লক কনকারেন্সি অ্যাক্সেস সমস্যা প্রতিরোধ করে",
        "লগিং ব্যর্থতা থেকে রিকভারি সক্ষম করে",
        "আইসোলেশন লেভেল পারফরম্যান্স বনাম কনসিস্টেন্সি ট্রেড করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module16 = m16