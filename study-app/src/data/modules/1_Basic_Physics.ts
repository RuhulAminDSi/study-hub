import type { Module } from '../../types'

const m1: Module = {
  title: "1. Basic Physics",
  titleBn: "১. পদার্থবিদ্যার মূল ধারণা",
  level: "Beginner",
  lessons: [
    {
      id: "bp1",
      title: "Electromagnetism Basics",
      titleBn: "তড়িৎচুম্বকত্বের মূল ধারণা",
      content: "Charge, Coulomb's law, electric field, Gauss's law, electric potential, magnetic field, Faraday's law, Maxwell's equations.\n\n⚡ Charge: Fundamental property of matter causing electromagnetic interaction. Types: Positive (+) and Negative (-). Unit: Coulomb (C). Conservation: Charge cannot be created/destroyed, only transferred.\n\n⚡ Coulomb's Law: Force between two electric charges: F = k(q1×q2)/r². Force is attractive for opposite charges, repulsive for like charges.\n\n⚡ Electric Field (E): Region around charged particle where it exerts force on other charges. E = F/q. Unit: N/C or V/m.\n\n🧲 Magnetic Field: Region around moving charge or magnet where magnetic forces act. Unit: Tesla (T). Right-Hand Rule: Thumb = Current direction, Fingers = Magnetic field direction.\n\n🧲 Faraday's Law: Changing magnetic field induces EMF. EMF = -dΦB/dt.\n\n🌐 Maxwell's Equations (4 fundamental laws):\n1. ∇·E = ρ/ε₀\n2. ∇·B = 0\n3. ∇×E = -∂B/∂t\n4. ∇×B = μ₀J + μ₀ε₀(∂E/∂t)",
      contentBn: "আধান, কুলম্বের সূত্র, তড়িৎক্ষেত্র, গাউসের সূত্র, তড়িৎবিভব, চুম্বকক্ষেত্র, ফ্যারাডের সূত্র, ম্যাক্সওয়েলের সমীকরণ।\n\n⚡ আধান: পদার্থের একটি মৌলিক ধর্ম। প্রকার: ধনবাহী (+) এবং ঋণবাহী (-)।\n\n⚡ কুলম্বের সূত্র: দুটি তড়িৎআধানের মধ্যে বল: F = k(q1×q2)/r²।\n\n🧲 চুম্বকক্ষেত্র: চলমান আধান বা চুম্বকের চারপাশে অঞ্চল।\n\n🧲 ফ্যারাডের সূত্র: পরিবর্তনশীল চুম্বকক্ষেত্র EMF প্রবর্তন করে।\n\n🌐 ম্যাক্সওয়েলের সমীকরণ (৪টি মৌলিক সূত্র)",
      code: "F = k × (q1 × q2) / r²\nE = F/q\nV = W/q\nEMF = -dΦB/dt",
      takeaways: [
        "Charge is fundamental property with + and - types",
        "Coulomb's law defines force between charges",
        "Electric field = force per unit charge",
        "Maxwell's equations unify all electromagnetism"
      ],
      takeawaysBn: [
        "আধান + এবং - প্রকার সহ মৌলিক ধর্ম",
        "কুলম্বের সূত্র আধানের মধ্যে বল সংজ্ঞায়িত করে",
        "তড়িৎক্ষেত্র = একক আধান প্রতি বল",
        "ম্যাক্সওয়েলের সমীকরণ সমস্ত তড়িৎচুম্বকত্ব একত্রিত করে"
      ],
      level: "Beginner"
    },
    {
      id: "bp2",
      title: "Waves and Oscillations",
      titleBn: "তরঙ্গ ও কম্পন",
      content: "Oscillation: Back-and-forth repetitive motion around mean position. Examples: pendulum, mass on spring, AC current.\n\nKey Terms:\n• Amplitude (A): Maximum displacement from mean position\n• Time Period (T): Time for one complete oscillation\n• Frequency (f): Number of oscillations per second. f = 1/T in Hz\n• Angular Frequency (ω): ω = 2πf\n\nSimple Harmonic Motion (SHM): F = -kx. Equation: x(t) = A×sin(ωt + φ).\n\nWave: Disturbance transferring energy without transferring matter.\nTypes:\n• Mechanical (require medium): sound, water waves\n• Electromagnetic (no medium): light, radio\n• Transverse: particle motion ⟂ wave direction\n• Longitudinal: particle motion ∥ wave direction\n\nWave Properties:\n• Wavelength (λ): Distance between two crests\n• Wave speed (v): v = fλ",
      contentBn: "কম্পন: গড় অবস্থানের চারপাশে পুনরাবৃত্তিমূলক সামনে-পেছনে গতি। উদাহরণ: দোলক, স্প্রিং-এ ভর, AC প্রবাহ।\n\nমূল পদ:\n• অ্যামপ্লিটিউড (A): গড় অবস্থান থেকে সর্বোচ্চ সরণ\n• সময়কাল (T): একটি সম্পূর্ণ কম্পনের সময়\n• ফ্রিকোয়েন্সি (f): প্রতি সেকেন্ডে কম্পনের সংখ্যা। f = 1/T Hz\n• কোণীয় ফ্রিকোয়েন্সি (ω): ω = 2πf\n\nসরল হারমনিক মোশন (SHM): F = -kx। সমীকরণ: x(t) = A×sin(ωt + φ)।\n\nতরঙ্গ: পদার্থ স্থানান্তর না করে শক্তি স্থানান্তরকারী।\nপ্রকার:\n• যান্ত্রিক (মাধ্যম প্রয়োজন): শব্দ, জলের তরঙ্গ\n• তড়িৎচুম্বক (মাধ্যম নেই): আলো, রেডিও\n• অনুপ্রস্থ: কণা গতি ⟂ তরঙ্গ দিক\n• অনুদৈর্ঘ্য: কণা গতি ∥ তরঙ্গ দিক\n\nতরঙ্গ বৈশিষ্ট্য:\n• তরঙ্গ দৈর্ঘ্য (λ): দুটি শীর্ষের মধ্যে দূরত্ব\n• তরঙ্গ গতি (v): v = fλ",
      code: "f = 1/T\nv = fλ\nx(t) = A × sin(ωt + φ)\nω = 2πf",
      takeaways: [
        "Oscillation is repetitive back-and-forth motion",
        "Wave transfers energy without matter transfer",
        "v = fλ relates speed, frequency, wavelength",
        "Resonance occurs when frequencies match"
      ],
      takeawaysBn: [
        "কম্পন হলো পুনরাবৃত্তিমূলক সামনে-পেছনে গতি",
        "তরঙ্গ পদার্থ স্থানান্তর না করে শক্তি স্থানান্তর করে",
        "v = fλ গতি, ফ্রিকোয়েন্সি ও তরঙ্গ দৈর্ঘ্য সম্পর্কিত করে",
        "ফ্রিকোয়েন্সি মিললে রিজোন্যান্স হয়"
      ],
      level: "Beginner"
    },
    {
      id: "bp3",
      title: "Special Relativity",
      titleBn: "বিশেষ আপেক্ষিকতা",
      content: "Theory of Special Relativity (Einstein, 1905) explains how space, time, and motion relate at speeds near light.\n\nTwo Postulates:\n1. Principle of Relativity: Laws of physics identical in all inertial frames.\n2. Constancy of Speed of Light: c = 3×10⁸ m/s same for all observers.\n\nConsequences:\na) Time Dilation: Moving clocks run slower.\nt = t₀ / √(1 - v²/c²)\n\nb) Length Contraction: Moving objects appear shorter.\nL = L₀ × √(1 - v²/c²)\n\nc) Mass-Energy Equivalence: E = mc²",
      contentBn: "বিশেষ আপেক্ষিকতার তত্ত্ব (আইনস্টাইন, ১৯০৫) আলোর কাছাকাছি গতিতে স্থান, সময় ও গতির সম্পর্ক ব্যাখ্যা করে।\n\nদুটি স্বীকৃতি:\n১. আপেক্ষিকতার নীতি: সব জড় ফ্রেমে পদার্থবিদ্যার নিয়ম এক।\n২. আলোর গতির স্থায়িত্ব: c = ৩×১০⁸ m/s সব পর্যবক্ষকের জন্য এক।\n\nফলাফল:\nক) সময় প্রসারণ: চলমান ঘড়ি ধীরে চলে।\nt = t₀ / √(1 - v²/c²)\n\nখ) দৈর্ঘ্য সংকোচন: চলমান বস্তু ছোট দেখায়।\nL = L₀ × √(1 - v²/c²)\n\nগ) ভর-শক্তি সমতা: E = mc²",
      code: "t = t₀ / √(1 - v²/c²)\nL = L₀ × √(1 - v²/c²)\nE = mc²",
      takeaways: [
        "Speed of light is constant for all observers",
        "Time dilation: moving clocks run slower",
        "Length contraction: moving objects shorten",
        "E = mc² shows mass-energy equivalence"
      ],
      takeawaysBn: [
        "আলোর গতি সব পর্যবক্ষকের জন্য স্থায়ী",
        "সময় প্রসারণ: চলমান ঘড়ি ধীরে চলে",
        "দৈর্ঘ্য সংকোচন: চলমান বস্তু ছোট হয়",
        "E = mc² ভর-শক্তি সমতা দেখায়"
      ],
      level: "Beginner"
    },
    {
      id: "bp4",
      title: "Quantum Physics & EM Waves",
      titleBn: "কোয়ান্টাম পদার্থবিদ্যা ও EM তরঙ্গ",
      content: "Electromagnetic Waves: Oscillations of electric and magnetic fields traveling through space. Don't require medium. Formula: c = λν.\n\nEM Spectrum:\n• Radio waves: λ > 1m\n• Microwaves: 1m - 1mm\n• Infrared: 1mm - 700nm\n• Visible light: 700-400nm\n• Ultraviolet: 400-10nm\n• X-rays: 10-0.01nm\n• Gamma rays: < 0.01nm\n\nPhotoelectric Effect: Light shining on metal surface emits electrons.\nEinstein's Explanation: Light behaves as particles (photons). Energy: E = hν\n\nDe Broglie Waves: Particles have wave-like properties. Formula: λ = h/p",
      contentBn: "তড়িৎচুম্বক তরঙ্গ: মহাশূন্য দিয়ে যাওয়া তড়িৎক্ষেত্র ও চুম্বকক্ষেত্রের কম্পন। মাধ্যম প্রয়োজন নেই। সূত্র: c = λν।\n\nEM বর্ণালী:\n• রেডিও তরঙ্গ: λ > 1m\n• মাইক্রোওয়েভ: 1m - 1mm\n• অবলোহত্তর: 1mm - 700nm\n• দৃশ্যমান আলো: 700-400nm\n• অতিবেগুনি: 400-10nm\n• X-রশ্মি: 10-0.01nm\n• গামা রশ্মি: < 0.01nm\n\nফটোইলেকট্রিক ইফেক্ট: ধাতুর পৃষ্ঠে আলো পড়লে ইলেকট্রন নির্গত হয়।\nআইনস্টাইনের ব্যাখ্যা: আলো কণা (ফোটন) হিসেবে আচরণ করে। শক্তি: E = hν\n\nদ্য ব্রয়লি তরঙ্গ: কণার তরঙ্গ-সদৃশ বৈশিষ্ট্য আছে। সূত্র: λ = h/p",
      code: "c = fλ\nE = hν\nλ = h/p",
      takeaways: [
        "Light has both wave and particle properties",
        "Photoelectric effect proves particle nature",
        "X-ray diffraction reveals crystal structure",
        "Compton effect confirms photon momentum"
      ],
      takeawaysBn: [
        "আলোর তরঙ্গ ও কণা উভয় বৈশিষ্ট্য আছে",
        "ফটোইলেকট্রিক ইফেক্ট কণার প্রকৃতি প্রমাণ করে",
        "X-ray বিচ্যতন কেলাস কাঠামো প্রকাশ করে",
        "কম্পটন ইফেক্ট ফোটনের ভরবেগ নিশ্চিত করে"
      ],
      level: "Beginner"
    }
  ]
}

export const module1 = m1