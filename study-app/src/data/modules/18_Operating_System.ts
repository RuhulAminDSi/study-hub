import type { Module } from '../../types'

const m18: Module = {
  title: "18. Operating System",
  titleBn: "১৮. অপারেটিং সিস্টেম",
  level: "Advanced",
  lessons: [
    {
      id: "os1",
      title: "OS Fundamentals",
      titleBn: "OS এর মৌলিক ধারণা",
      content: "Operating System: Interface between user and hardware.\n\nGoals:\n• Convenience: Easy to use\n• Efficiency: Resource utilization\n• Evolution: Allow changes\n\nFunctions:\n• Process Management: Create, schedule, terminate\n• Memory Management: Allocate, deallocate\n• File Management: Store, retrieve, protect\n• Device Management: Drivers, I/O\n• Security: Protection, authentication\n\nTypes:\n• Batch: Process jobs in batches\n• Time-sharing: Multiple users\n• Real-time: Immediate response\n• Distributed: Multiple machines\n\nProcess: Executing program.\n\nStates: New, Ready, Running, Waiting, Terminated.\n\nScheduling:\n• FCFS: First come first served\n• SJF: Shortest job first\n• Round Robin: Time slice\n• Priority: Based on priority",
      contentBn: "অপারেটিং সিস্টেম: ব্যবহারকারী ও হার্ডওয়্যারের মধ্যে ইন্টারফেস।\n\nলক্ষ��য:\n• কনভিনিয়েন্স: ব্যবহার করা সহজ\n• এফিসিয়েন্সি: রিসোর্স ব্যবহার\n• ইভোলিউশন: পরিবর্তনের অনুমতি\n\nফাংশন:\n• প্রসেস ম্যানেজমেন্ট: তৈরি, শিডিউল, বন্ধ\n• মেমোরি ম্যানেজমেন্ট: বরাদ্দ, বিভাজন\n• ফাইল ম্যানেজমেন্ট: সংরক্ষণ, পুনরুদ্ধার, সুরক্ষা\n• ডিভাইস ম্যানেজমেন্ট: ড্রাইভার, I/O\n• সিকিউরিটি: সুরক্ষা, প্রমাণীকরণ\n\nপ্রকার:\n• ব্যাচ: ব্যাচে চাকরি প্রসেস\n• টাইম-শেয়ারিং: একাধিক ব্যবহারকারী\n• রিয়াল-টাইম: তাৎক্ষণিক প্রতিক্রিয়া\n• ডিস্ট্রিবিউটেড: একাধিক মেশিন\n\nপ্রসেস: কার্যকরী প্রোগ্রাম।\n\nঅবস্থা: নিউ, রেডি, রানিং, ওয়েটিং, টার্মিনেটেড।\n\nশিডিউলিং:\n• FCFS: আগে আসা আগে সার্ভ\n• SJF: ছোট চাকরি আগে\n• রাউন্ড রবিন: টাইম স্লাইস\n• প্রায়োরিটি: প্রায়োরিটি অনুযায়ী",
      takeaways: [
        "OS manages hardware resources",
        "Process states: new, ready, running, waiting, terminated",
        "CPU scheduling decides execution order",
        "Types include batch, time-sharing, real-time"
      ],
      takeawaysBn: [
        "OS হার্ডওয়্যার রিসোর্স ম্যানেজ করে",
        "প্রসেস অবস্থা: নিউ, রেডি, রানিং, ওয়েটিং, টার্মিনেটেড",
        "CPU শিডিউলিং এক্সিকিউশন অর্ডার সিদ্ধান্ত করে",
        "প্রকারে অন্তর্ভুক্ত ব্যাচ, টাইম-শেয়ারিং, রিয়াল-টাইম"
      ],
      level: "Advanced"
    },
    {
      id: "os2",
      title: "Memory and File Systems",
      titleBn: "মেমোরি ও ফাইল সিস্টেম",
      content: "Memory Management:\n\nTechniques:\n• Contiguous: Single block allocation\n• Non-contiguous: Multiple blocks\n• Paging: Fixed-size pages\n• Segmentation: Variable segments\n\nVirtual Memory:\n• Pages in RAM + on disk\n• Page table maps virtual to physical\n• TLB speeds up translation\n\nPage Replacement:\n• FIFO: Oldest page out\n• LRU: Least recently used\n• Optimal: Future reference prediction\n\nFile System:\n• File: Named collection of data\n• Directory: Organizes files\n• Allocation: Contiguous, Linked, Indexed\n\nFile Access:\n• Sequential: Start to end\n• Direct: Any location\n\nI/O Management:\n• Buffers: Temporary storage\n• Caching: Fast access copy\n• Spooling: Queue for devices",
      contentBn: "মেমোরি ম্যানেজমেন্ট:\n\nটেকনিক:\n• কন্টিগুয়াস: একক ব্লক বরাদ্দ\n• নন-কন্টিগুয়াস: একাধিক ব্লক\n• পেজিং: স্থির-আকারের পেজ\n• সেগমেন্ট��শন: পরিবর্তনশীল সেগমেন্ট\n\nভার্চুয়াল মেমোরি:\n• RAM + ডিস্কে পেজ\n• পেজ টেবিল ভার্চুয়াল থেকে ফিজিক্যাল ম্যাপ করে\n• TLB অনুবাদ দ্রুত করে\n\nপেজ রিপ্লেসমেন্ট:\n• FIFO: পুরোনো পেজ বের করে\n• LRU: সবচেয়ে কম সম্প্রতি ব্যবহৃত\n• অপ্টিমাল: ভবিষ্যেবর্তী উল্লেখন পূর্বাভাস\n\nফাইল সিস্টেম:\n• ফাইল: নামকৃত ডেটা সংগ্রহ\n• ডিরেক্টরি: ফাইল সংগঠিত করে\n• বরাদ্দ: কন্টিগুয়াস, লিংকড, ইনডেক্সড\n\nফাইল অ্যাক্সেস:\n• সিকোয়েনশিয়াল: শেষ থেকে শুরু\n• ডাইরেক্ট: যেকোনো অবস্থান\n\nI/O ম্যানেজমেন্ট:\n• বাফার: অস্থায়ী সংরক্ষণ\n• ক্যাচিং: দ্রুত অ্যাক্সেস কপি\n• স্পুলিং: ডিভাইসের জন্য কিউ",
      takeaways: [
        "Virtual memory extends available space",
        "Page replacement algorithms manage memory",
        "File systems organize and store data",
        "I/O management optimizes device access"
      ],
      takeawaysBn: [
        "ভার্চুয়াল মেমোরি উপলব্ধ স্থান প্রসারিত করে",
        "পেজ রিপ্লেসমেন্ট অ্যালগরিদম মেমোরি ম্যানেজ করে",
        "ফাইল সিস্টেম ডেটা সংগঠিত ও সংরক্ষণ করে",
        "I/O ম্যানেজমেন্ট ডিভাইস অ্যাক্সেস অপ্টিমাইজ করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module18 = m18