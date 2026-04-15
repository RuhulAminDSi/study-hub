import type { Module } from '../../types'

const m3: Module = {
  title: "3. Electrical Circuits",
  titleBn: "৩. তড়িৎ সার্কিট",
  level: "Beginner",
  lessons: [
    {
      id: "ec1",
      title: "Basic Circuit Concepts",
      titleBn: "সার্কিটের মৌলিক ধারণা",
      content: "Electric Circuit: Closed path for current flow.\n\nKey Concepts:\n• Current (I): Flow of charge. I = Q/t. Unit: Ampere (A)\n• Voltage (V): Potential difference. V = W/Q. Unit: Volt (V)\n• Resistance (R): Opposition to current flow. R = V/I. Unit: Ohm (Ω)\n\nOhm's Law: V = I × R\n\nPower: Rate of energy transfer. P = V × I = I²R = V²/R. Unit: Watt (W)\n\nCircuit Elements:\n• Resistor: Series: R_total = R₁ + R₂; Parallel: 1/R_total = 1/R₁ + 1/R₂\n• Capacitor: Stores electrical energy in electric field. C = Q/V\n• Inductor: Stores energy in magnetic field. V = L(dI/dt)\n\nKirchhoff's Laws:\n• KCL: ΣI_in = ΣI_out\n• KVL: ΣV = 0",
      contentBn: "তড়িৎ সার্কিট: তড়িৎ প্রবাহের জন্য বন্ধ পথ।\n\nমৌলিক ধারণা:\n• প্রবাহ (I): আধানের প্রবাহ। একক: অ্যাম্পিয়ার (A)\n• ভোল্টেজ (V): বিভব প���র্থক্য। একক: ভোল্ট (V)\n• রোধ (R): প্রবাহে বাধা। একক: ওহম (Ω)\n\nওহমের সূত্র: V = I × R\n\nশক্তি: শক্তি স্থানান্তরের হার। একক: ওয়াট (W)\n\nসার্কিট উপাদান:\n• রেজিস্টর: শ্রেণীবদ্ধ: R_total = R₁ + R₂; সমান্তরাল: 1/R_total = 1/R₁ + 1/R₂\n• ক্যাপাসিটর: তড়িৎক্ষেত্রে শক্তি সংরক্ষণ করে।\n• ইন্ডাক্টর: চুম্বকক্ষেত্রে শক্তি সংরক্ষণ করে।\n\nকির্শহফের সূত্র:\n• KCL: ΣI_in = ΣI_out\n• KVL: ΣV = 0",
      code: "V = I × R\nP = V × I = I²R\nI = Q/t\nC = Q/V\nV = L(dI/dt)",
      takeaways: [
        "Ohm's Law: V = IR is fundamental circuit relationship",
        "Power is energy transfer rate: P = VI",
        "Kirchhoff's laws govern current and voltage in circuits",
        "Circuit elements: resistor, capacitor, inductor"
      ],
      takeawaysBn: [
        "ওহমের সূত্র: V = IR হলো মৌলিক সার্কিট সম্পর্ক",
        "শক্তি হলো শক্তি স্থানান্তরের হার: P = VI",
        "কির্শহফের সূত্র সার্কিটে প্রবাহ ও ভোল্টেজ নিয়ন্ত্রণ করে",
        "সার্কিট উপাদান: রেজিস্টর, ক্যাপাসিটর, ইন্ডাক্টর"
      ],
      level: "Beginner"
    },
    {
      id: "ec2",
      title: "Circuit Analysis Methods",
      titleBn: "সার্কিট বিশ্লেষণ পদ্ধতি",
      content: "Series Circuits:\n• Same current through all elements\n• Total resistance: R_total = R₁ + R₂ + ...\n• Voltage divides across elements\n\nParallel Circuits:\n• Same voltage across all branches\n• Total resistance: 1/R_total = 1/R₁ + 1/R₂ + ...\n• Current divides across branches\n\nNetwork Theorems:\n• Superposition: Total response = Sum of responses from each source\n• Thevenin's Theorem: Replace network with V_th + R_th\n• Norton's Theorem: Replace network with I_n + R_n\n• Maximum Power Transfer: Maximum power when R_load = R_th\n\nCircuit Analysis:\n• Mesh Analysis: Apply KVL to loops\n• Nodal Analysis: Apply KCL to nodes",
      contentBn: "শ্রেণীবদ্ধ সার্কিট:\n• সব উপাদানে একই প্রবাহ\n• মোট রোধ: R_total = R₁ + R₂ + ...\n• ভোল্টেজ উপাদানগুলোতে বিভক্ত হয়\n\nসমান্তরাল সার্কিট:\n• সব শাখায় একই ভোল্টেজ\n• মোট রোধ: 1/R_total = 1/R₁ + 1/R₂ + ...\n• প্রবাহ শাখায় বিভক্ত হয়\n\nনেটওয়ার্ক উপপাদ্য:\n• সুপারপজিশন: মোট প্রতিক্রিয়া = প্রতিটি উৎসের প্রতিক্রিয়ার যোগফল\n• থেভেনিনের উপপাদ্য: নেটওয়ার্ক V_th + R_th দিয়ে প্রতিস্থাপন\n• নর্টনের উপপাদ্য: নেটওয়ার্ক I_n + R_n দিয়ে প্রতিস্থাপন\n• সর্বোচ্চ শক্তি স্থানান্তর: R_load = R_th হলে সর্বোচ্চ শক্তি\n\nসার্কিট বিশ্লেষণ:\n• মেশ বিশ্লেষণ: লুপে KVL প্রয়োগ\n• নোডাল বিশ্লেষণ: নোডে KCL প্রয়োগ",
      code: "Series: R_total = R1 + R2\nParallel: 1/R_total = 1/R1 + 1/R2\nZ = R + jX",
      takeaways: [
        "Series: current same, voltage divides",
        "Parallel: voltage same, current divides",
        "Thevenin simplifies complex circuits",
        "Mesh and nodal analysis solve circuits"
      ],
      takeawaysBn: [
        "শ্রেণীবদ্ধ: একই প্রবাহ, ভোল্টেজ বিভাগ",
        "সমান্তরাল: একই ভোল্টেজ, প্রবাহ বিভাগ",
        "থেভেনিন জটিল সার্কিট সরলীকরণ করে",
        "মেশ ও নোডাল বিশ্লেষণ সার্কিট সমাধান করে"
      ],
      level: "Beginner"
    }
  ]
}

export const module3 = m3