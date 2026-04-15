import type { Module } from '../../types'

const m19: Module = {
  title: "19. Artificial Intelligence",
  titleBn: "১৯. আর্টিফিসিয়াল ইন্টেলিজেন্স",
  level: "Advanced",
  lessons: [
    {
      id: "ai1",
      title: "AI Fundamentals",
      titleBn: "AI এর মৌলিক ধারণা",
      content: "Artificial Intelligence: Machines mimicking human intelligence.\n\nTypes:\n• Narrow AI: Specific tasks\n• General AI: Any cognitive task\n• Super AI: Surpass human intelligence\n\nApproaches:\n• Symbolic: Rules and logic\n• Statistical: Probability and data\n• Connectionist: Neural networks\n\nSearch:\n• Uninformed: BFS, DFS, Uniform-cost\n• Informed: A*, Greedy\n\nKnowledge Representation:\n• Propositional Logic\n• Predicate Logic\n• Frames\n• Semantic Networks\n\nPlanning:\n• State-space search\n• Partial-order planning\n• Hierarchical task network",
      contentBn: "আর্টিফিসিয়াল ইন্টেলিজেন্স: মানুষের বুদ্ধি অনুকরণকারী মেশিন।\n\nপ্রকার:\n• ন্যারো AI: নির্দিষ্ট কাজ\n• জেনারেল AI: যেকোনো জ্ঞানীয় কাজ\n• সুপার AI: মানব বুদ্ধি অতিক্রম করে\n\nপদ্ধতি:\n• সিম্বলিক: নিয়ম ও লজিক\n• ��্ট্যাটিস্টিক্যাল: সম্ভাবনা ও ডেটা\n• কানেকশনিস্ট: নিউরাল নেটওয়ার্ক\n\nসার্চ:\n• আনইনফর্মড: BFS, DFS, ইউনিফর্ম-কস্ট\n• ইনফর্মড: A*, গ্রিডি\n\nজ্ঞান উপস্থাপন:\n• প্রপোজিশনাল লজিক\n• প্রেডিকেট লজিক\n• ফ্রেম\n• সিম্যান্টিক নেটওয়ার্ক\n\nপ্ল্যানিং:\n• স্টেট-স্পেস সার্চ\n• পার্শিয়াল-অর্ডার প্ল্যানিং\n• হায়ারার্কিক্যাল টাস্ক নেটওয়ার্ক",
      takeaways: [
        "AI mimics human cognitive functions",
        "Search algorithms solve problems systematically",
        "Knowledge representation captures information",
        "Planning generates action sequences"
      ],
      takeawaysBn: [
        "AI মানব জ্ঞানীয় ফাংশন অনুকরণ করে",
        "সার্চ অ্যালগরিদম সমস্যা পদ্ধতিগতভাবে সমাধান করে",
        "জ্ঞান উপস্থাপন তথ্য ধারণ করে",
        "প্ল্যানিং অ্যাকশন সিকোয়েন্স তৈরি করে"
      ],
      level: "Advanced"
    },
    {
      id: "ai2",
      title: "Machine Learning",
      titleBn: "মেশিন লার্নিং",
      content: "Machine Learning: Systems learning from data.\n\nTypes:\n• Supervised: Labeled data\n• Unsupervised: No labels\n• Reinforcement: Trial and error\n\nAlgorithms:\n• Regression: Continuous output\n• Classification: Discrete output\n• Clustering: Group similar\n• Decision Trees: Rule-based\n• Neural Networks: Inspired by brain\n\nDeep Learning:\n• Neural networks with many layers\n• CNN: Image processing\n• RNN: Sequential data\n• Transformers: Natural language\n\nEvaluation:\n• Accuracy, Precision, Recall\n• F1-Score\n• Confusion Matrix\n\nOverfitting: Model memorizes training data.\nUnderfitting: Model too simple.",
      contentBn: "মেশিন লার্নিং: ডেটা থেকে শিখতে পারা সিস্টেম।\n\nপ্রকার:\n• সুপারভাইজড: লেবেলড ডেটা\n• আনসুপারভাইজড: কোনো লেবেল নেই\n• রিইনফোর্সমেন্ট: ট্রায়াল এন্ড এরর\n\nঅ্যালগরিদম:\n• রিগ্রেশন: ধারাবাহিক আউটপুট\n• ক্লাসিফিকেশন: বিচ্ছিন্ন আউটপুট\n• ক্লাস্টারিং: অনুরূপ গ্রুপ\n• ডিসিশন ট্রি: নিয়ম-ভিত্তিক\n• নিউরাল নেটওয়ার্ক: মস্তিষ্ক দ্বারা অনুপ্রাণিত\n\nডিপ লার্নিং:\n• অনেক স্তর সহ নিউরাল নেটওয়ার্ক\n• CNN: ইমেজ প্রসেসিং\n• RNN: সিকোয়েনশিয়াল ডেটা\n• ট্রান্সফর্মার: প্রাকৃতিক ভাষা\n\nমূল্যায়ন:\n• অ্যাকারেসি, প্রিসিশন, রিকল\n• F1-স্কোর\n• কনফিউশন ম্যাট্রিক্��\n\nওভারফিটিং: মডেল ট্রেনিং ডেটা মুখস্থ করে।\nআন্ডারফিটিং: মডেল খুবই সহজ।",
      code: "accuracy = (TP + TN) / (TP + TN + FP + FN)\nprecision = TP / (TP + FP)\nrecall = TP / (TP + FN)",
      takeaways: [
        "ML enables systems to learn from data",
        "Supervised, unsupervised, and reinforcement learning",
        "Neural networks process complex patterns",
        "Proper evaluation prevents over/underfitting"
      ],
      takeawaysBn: [
        "ML সিস্টেমকে ডেটা থেকে শিখতে সক্ষম করে",
        "সুপারভাইজড, আনসুপারভাইজড ও রিইনফোর্সমেন্ট লার্নিং",
        "নিউরাল নেটওয়ার্ক জটিল প্যাটার্ন প্রসেস করে",
        "উপযুক্ত মূল্যায়ন ওভার/আন্ডারফিটিং প্রতিরোধ করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module19 = m19