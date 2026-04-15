import type { Module } from '../../types'

const m17: Module = {
  title: "17. Software Engineering",
  titleBn: "১৭. সফটওয়্যার ইঞ্জিনিয়ারিং",
  level: "Advanced",
  lessons: [
    {
      id: "se1",
      title: "SDLC and Design",
      titleBn: "SDLC ও ডিজাইন",
      content: "Software Engineering: Systematic approach to software development.\n\nSDLC Phases:\n1. Requirements: Gather and analyze\n2. Design: System architecture\n3. Implementation: Coding\n4. Testing: Verify functionality\n5. Deployment: Release to users\n6. Maintenance: Updates and fixes\n\nModels:\n• Waterfall: Sequential phases\n• Agile: Iterative, flexible\n• Spiral: Risk-driven\n• V-Model: Testing integrated\n\nDesign Principles:\n• Abstraction: Hide details\n• Encapsulation: Bundle data/methods\n• Modularity: Separate concerns\n• Coupling: Dependency between modules\n• Cohesion: Internal relatedness\n\nDesign Patterns:\n• Creational: Object creation (Factory, Singleton)\n• Structural: Structure (Adapter, Decorator)\n• Behavioral: Behavior (Observer, Strategy)",
      contentBn: "সফটওয়্যার ইঞ্জিনিয়ারিং: সফটওয়্যার ডেভেলপমেন্টের পদ্ধতিগত পদ্ধতি।\n\nSDLC ধাপ:\n১. রিকোয়ারমেন্টস: সংগ্রহ ও বিশ্লেষণ\n২. ডিজাইন: সিস্টেম আর্কিটেকচার\n৩. ইমপ্লিমেন্টেশন: কোডিং\n৪. টেস্টিং: কার্যকারিতা যাচাই\n৫. ডিপ্লয়মেন্ট: ব্যবহারকারীদের রিলিজ\n৬. মেইনটেন্যান্স: আপডেট ও ফিক্স\n\nমডেল:\n• ওয়াটারফল: ক্রমিক ধাপ\n• অ্যাজাইল: ইটারেটিভ, নমনীয়\n• স্পাইরাল: ঝুঁকি-চালিত\n• V-মডেল: টেস্টিং ইন্টিগ্রেটেড\n\nডিজাইন নীতি:\n• অ্যাবস্ট্রাকশন: বিবরণ লুকানো\n• এনক্যাপসুলেশন: ডেটা/মেথড বান্ডেল\n• মডিউলারিটি: উদ্বেগ পৃথক করা\n• কাপলিং: মডিউলের মধ্যে নির্ভরতা\n• কোহিশন: অভ্যন্তরীণ সম্পর্ক\n\nডিজাইন প্যাটার্ন:\n• ক্রিওশনাল: অবজেক্ট তৈরি (ফ্যাক্টরি, সিঙ্গলটন)\n• স্ট্রাকচারাল: কাঠামো (অ্যাডাপ্টার, ডেকোরেটর)\n• বিহেভিয়ারাল: আচরণ (অবজার্ভার, স্ট্র্যাটেজি)",
      takeaways: [
        "SDLC provides structured development process",
        "Agile emphasizes iterative development",
        "Low coupling and high cohesion are goals",
        "Design patterns solve common problems"
      ],
      takeawaysBn: [
        "SDLC সংগঠিত ডেভেলপমেন্ট প্রক্রিয়া দেয়",
        "অ্যাজাইল ইটারেটিভ ডেভেলপমেন্টের উপর জোর দেয়",
        "কম কাপলিং ও উচ্চ কোহিশন হলো লক্ষ্য",
        "ডিজাইন প্যাটার্ন সাধারণ সমস্যা সমাধান করে"
      ],
      level: "Advanced"
    },
    {
      id: "se2",
      title: "Testing and Project Management",
      titleBn: "টেস্টিং ও প্রজেক্ট ম্যানেজমেন্ট",
      content: "Testing: Verify software works correctly.\n\nLevels:\n• Unit: Individual components\n• Integration: Combined parts\n• System: Complete system\n• Acceptance: User validation\n\nTypes:\n• Black-box: No internal knowledge\n• White-box: Internal structure known\n• Regression: After changes\n\nTechniques:\n• Functional: Requirements-based\n• Performance: Load, stress\n• Security: Vulnerability check\n\nProject Management:\n• Planning: Tasks, timeline\n• Estimation: Effort, cost\n• Risk: Identify and mitigate\n• Quality: Standards compliance\n\nMetrics:\n• LOC: Lines of code\n• Function Points: Functionality measure\n• Cyclomatic Complexity: Code complexity",
      contentBn: "টেস্টিং: সফটওয়্যার সঠিকভাবে কাজ করে যাচাই করা।\n\nলেভেল:\n• ইউনিট: পৃথক উপাদান\n• ইন্টিগ্রেশন: সমন্বিত অংশ\n• সিস্টেম: সম্পূর্ণ সিস্টেম\n• অ্যাক্সেপ্ট্যান্স: ইউজা��� ভ্যালিডেশন\n\nপ্রকার:\n• ব্ল্যাক-বক্স: অভ্যন্তরীণ জ্ঞান নেই\n• হোয়াইট-বক্স: অভ্যন্তরীণ কাঠামো জানা\n• রিগ্রেশন: পরিবর্তনের পরে\n\nটেকনিক:\n• ফাংশনাল: রিকোয়ারমেন্টস-ভিত্তিক\n• পারফরম্যান্স: লোড, স্ট্রেস\n• সিকিউরিটি: দুর্বলতা পরীক্ষা\n\nপ্রজেক্ট ম্যানেজমেন্ট:\n• প্ল্যানিং: কাজ, টাইমলাইন\n• এস্টিমেশন: প্রচেষ্টা, খরচ\n• ঝুঁকি: চিহ্নিত ও প্রশমন\n• কোয়ালিটি: মান অনুসরণ\n\nমেট্রিক্স:\n• LOC: কোডের লাইন\n• ফাংশন পয়েন্ট: কার্যকারিতা পরিমাপ\n• সাইক্লোম্যাটিক কমপ্লেক্সিটি: কোডের জটিলতা",
      takeaways: [
        "Testing verifies correct functionality",
        "Multiple levels test different aspects",
        "Risk management identifies potential issues",
        "Metrics measure project progress and quality"
      ],
      takeawaysBn: [
        "টেস্টিং সঠিক কার্যকারিতা যাচাই করে",
        "একাধিক লেভেল বিভিন্ন দিক পরীক্ষা করে",
        "ঝুঁকি ম্যানেজমেন্ট সম্ভাব্য সমস্যা চিহ্নিত করে",
        "মেট্রিক্স প্রজেক্ট অগ্রগতি ও কোয়ালিটি পরিমাপ করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module17 = m17