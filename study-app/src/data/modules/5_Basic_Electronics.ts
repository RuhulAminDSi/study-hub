import type { Module } from '../../types'

const m5: Module = {
  title: "5. Basic Electronics",
  titleBn: "৫. মৌলিক ইলেকট্রনিক্স",
  level: "Beginner",
  lessons: [
    {
      id: "be1",
      title: "Semiconductor Basics",
      titleBn: "সেমিকন্ডাক্টরের মৌলিক ধারণা",
      content: "Semiconductor: Material with conductivity between conductor and insulator.\n\nMaterial Types:\n• Conductor: Low resistance (copper, gold)\n• Insulator: High resistance (glass, rubber)\n• Semiconductor: Between conductor and insulator\n\nSemiconductor Materials:\n• Silicon (Si): Most common\n• Germanium (Ge): Used in older devices\n\nIntrinsic Semiconductor:\n• Pure semiconductor\n• Equal electrons and holes\n\nExtrinsic Semiconductor (Doped):\n• N-type: Pentavalent dopants (P, As). Majority: Electrons\n• P-type: Trivalent dopants (B, Ga). Majority: Holes\n\nPN Junction:\n• Forward Bias: Current flows when V > 0.7V (Si)\n• Reverse Bias: Small reverse saturation current\n\nDiode Types:\n• Rectifier Diode: Power supply (AC to DC)\n• Zener Diode: Voltage regulation",
      contentBn: "সেমিকন্ডাক্টর: পরিবাহী ও ��পরিবাহীর মধ্যে পরিবাহিতাসম্পন্ন উপাদান।\n\nউপাদানের প্রকার:\n• পরিবাহী: কম রোধ (তামা, সোনা)\n• অপরিবাহী: বেশি রোধ (কাচ, রাবার)\n• সেমিকন্ডাক্টর: পরিবাহী ও অপরিবাহীর মধ্যে\n\nসেমিকন্ডাক্টর উপাদান:\n• সিলিকন (Si): সবচেয়ে সাধারণ\n• জার্মেনিয়াম (Ge): পুরোনো ডিভাইসে ব্যবহৃত\n\nআন্তঃ সেমিকন্ডাক্টর:\n• বিশুদ্ধ সেমিকন্ডাক্টর\n• ইলেকট্রন ও হোল সমান\n\nবহিরাগত সেমিকন্ডাক্টর (ডোপড):\n• N-টাইপ: পেন্টাভ্যালেন্ট ডোপান্ট (P, As)। সংখ্যাগ: ইলেকট্রন\n• P-টাইপ: ট্রাইভ্যালেন্ট ডোপান্ট (B, Ga)। সংখ্যাগ: হোল\n\nPN জাংশন:\n• ফরওয়ার্ড বায়াস: V > 0.7V (Si) হলে প্রবাহ হয়\n• রিভার্স বায়াস: ছোট রিভার্স স্যাচুরেশন প্রবাহ\n\nডায়োডের প্রকার:\n• রেক্টিফায়ার ডায়োড: পাওয়ার সাপ্লাই (AC to DC)\n• জেনার ডায়োড: ভোল্টেজ নিয়ন্ত্রণ",
      code: "Forward: V > 0.7V (Si)\nI = I_s(e^(V/nVT) - 1)",
      takeaways: [
        "Semiconductors are doped to create N and P types",
        "PN junction allows current forward, blocks reverse",
        "Diodes conduct in one direction only",
        "Zener diodes regulate voltage in reverse bias"
      ],
      takeawaysBn: [
        "সেমিকন্ডাক্টরকে N ও P টাইপ তৈরি করতে ডোপ করা হয়",
        "PN জাংশন সামনে প্রবাহ দেয়, পেছনে বাধা দেয়",
        "ডায়োড শুধু একদিকে পরিবাহিতা করে",
        "জেনার ডায়োড রিভার্স বায়াসে ভোল্টেজ নিয়ন্ত্রণ করে"
      ],
      level: "Beginner"
    },
    {
      id: "be2",
      title: "Transistors",
      titleBn: "ট্রানজিস্টর",
      content: "Transistor: Three-terminal semiconductor device to amplify or switch signals.\n\nBJT (Bipolar Junction Transistor):\n• NPN: Current flows from Collector to Emitter\n• PNP: Opposite direction\n• Three regions: Emitter, Base, Collector\n\nBJT Modes:\n• Active: For amplification\n• Cutoff: Fully OFF\n• Saturation: Fully ON\n\nCurrent Relations:\n• I_C = β × I_B (β = current gain, typically 100)\n\nFET (Field Effect Transistor):\n• Voltage-controlled (not current-controlled like BJT)\n• MOSFET: Most common in digital circuits\n\nOp-Amp (Operational Amplifier):\n• High-gain differential amplifier\n• Very high input impedance (MΩ)\n• Low output impedance (Ω)",
      contentBn: "ট্রানজিস্টর: সংকেত বৃদ্ধি বা সুইচ করার জন্য তিন প্রান্তের সেমিকন্ডাক্টর ডিভাইস।\n\nBJT (বাইপোলার জাংশন ট্রানজিস্টর):\n• NPN: কালেক্টর থেকে ���ম��টারে প্রবাহ হয়\n• PNP: বিপরীত দিক\n• তিন অঞ্চল: এমিটার, বেস, কালেক্টর\n\nBJT মোড:\n• অ্যাক্টিভ: বৃদ্ধির জন্য\n• কাটঅফ: সম্পূর্ণ বন্ধ\n• স্যাচুরেশন: সম্পূর্ণ চালু\n\nপ্রবাহ সম্পর্ক:\n• I_C = β × I_B (β = প্রবাহ gain, সাধারণত ১০০)\n\nFET (ফিল্ড ইফেক্ট ট্রানজিস্টর):\n• ভোল্টেজ-নিয়ন্ত্রিত (BJT এর মতো প্রবাহ-নিয়ন্ত্রিত নয়)\n• MOSFET: ডিজিটাল সার্কিটে সবচেয়ে সাধারণ\n\nঅপ-অ্যাম্প (অপারেশনাল অ্যাম্পলিফায়ার):\n• উচ্চ-গেইন ডিফারেনশিয়াল অ্যাম্পলিফায়ার\n• খুব উচ্চ ইনপুট ইম্পিডেন্স (MΩ)\n• কম আউটপুট ইম্পিডেন্স (Ω)",
      code: "β = Ic / Ib\nAv = R_f / R_in (inverting)",
      takeaways: [
        "BJT uses current, FET uses voltage to control",
        "Transistors can amplify or switch",
        "Three configurations: CE, CB, CC",
        "MOSFET is most common in digital circuits"
      ],
      takeawaysBn: [
        "BJT প্রবাহ ব্যবহার করে, FET ভোল্টেজ ব্যবহার করে",
        "ট্রানজিস্টর বৃদ্ধি বা সুইচ করতে পারে",
        "তিন কনফিগারেশন: CE, CB, CC",
        "MOSFET ডিজিটাল সার্কিটে সবচেয়ে সাধারণ"
      ],
      level: "Intermediate"
    }
  ]
}

export const module5 = m5