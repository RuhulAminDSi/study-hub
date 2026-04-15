import type { Module } from '../../types'

const m9: Module = {
  title: "9. Computer Networking and Security",
  titleBn: "৯. কম্পিউটার নেটওয়ার্কিং ও নিরাপত্তা",
  level: "Intermediate",
  lessons: [
    {
      id: "ns1",
      title: "Network Fundamentals",
      titleBn: "নেটওয়ার্কের মৌলিক ধারণা",
      content: "Network: Connected computers sharing resources.\n\nTypes:\n• LAN: Local Area Network (building/campus)\n• MAN: Metropolitan Area Network (city)\n• WAN: Wide Area Network (country/world)\n\nTopology:\n• Bus: Single backbone\n• Star: Central hub\n• Ring: Circular connection\n• Mesh: Interconnected\n\nProtocols: Rules for communication.\n• TCP/IP: Internet protocol suite\n• HTTP: Web traffic\n• FTP: File transfer\n• SMTP: Email\n\nOSI Model (7 layers):\n1. Physical: Bits on wire\n2. Data Link: Frames, MAC\n3. Network: Packets, IP\n4. Transport: TCP/UDP\n5. Session: Session management\n6. Presentation: Data format\n7. Application: User interface",
      contentBn: "নেটওয়ার্ক: সংযুক্ত কম্পিউটার রিসোর্স শেয়ার করে।\n\nপ্রকার:\n• LAN: লোকাল এরিয়া নেটওয়ার্ক (বিল্ডিং/ক্যাম্পাস)\n• MAN: মেট্রোপলিটন এরিয়া নেটওয়ার্ক (শহর)\n• WAN: ওয়াইড এরিয়া নেটওয়ার্ক (দেশ/বিশ্ব)\n\nটোপোলজি:\n• বাস: একক ব্যাকবোন\n• স্টার: কেন্দ্রীয় হাব\n• রিং: বৃত্তাকার সংযোগ\n• মেশ: আন্তঃসংযুক্ত\n\nপ্রোটোকল: যোগাযোগের নিয়ম।\n• TCP/IP: ইন্টারনেট প্রোটোকল স্যুট\n• HTTP: ওয়েব ট্রাফিক\n• FTP: ফাইল ট্রান্সফার\n• SMTP: ইমেইল\n\nOSI মডেল (৭ স্তর):\n1. ফিজিক্যাল: তারে বিট\n2. ডেটা লিংক: ফ্রেম, MAC\n3. নেটওয়ার্ক: প্যাকেট, IP\n4. ট্রান্সপোর্ট: TCP/UDP\n5. সেশন: সেশন ম্যানেজমেন্ট\n6. প্রেজেন্টেশন: ডেটা ফরম্যাট\n7. অ্যাপ্লিকেশন: ইউজার ইন্টারফেস",
      takeaways: [
        "Networks categorized by geographic scope",
        "Topology defines physical arrangement",
        "OSI model has 7 distinct layers",
        "TCP/IP is the internet protocol suite"
      ],
      takeawaysBn: [
        "নেটওয়ার্ক ভৌগোলিক পরিসর অনুযায়ী শ্রেণীবিভাগ",
        "টোপোলজি শারীরিক বিন্যাস সংজ্ঞায়িত করে",
        "OSI মডেলের ৭টি স্বতন্ত্র স্তর আছে",
        "TCP/IP হলো ইন্টারনেট প্রোটোকল স্যুট"
      ],
      level: "Intermediate"
    },
    {
      id: "ns2",
      title: "Network Security",
      titleBn: "নেটওয়ার্ক নিরাপত্তা",
      content: "Security: Protecting information from threats.\n\nCIA Triad:\n• Confidentiality: Authorized access only\n• Integrity: Data accurate, unaltered\n• Availability: Accessible when needed\n\nThreats:\n• Malware: Virus, worm, trojan, ransomware\n• Phishing: Fake communications\n• DoS: Denial of service\n• MITM: Man-in-the-middle\n\nEncryption:\n• Symmetric: Same key (DES, AES)\n• Asymmetric: Public/Private key (RSA)\n• Hash: One-way (MD5, SHA)\n\nAuthentication:\n• Password: Knowledge\n• Token: Possession\n• Biometric: Inherence\n\nFirewalls: Filter network traffic based on rules.\n\nVPN: Virtual Private Network for secure remote access.",
      contentBn: "নিরাপত্তা: হুমকি থেকে তথ্য সুরক্ষা করা।\n\nCIA ট্রায়াড:\n• কনফিডেনশিয়ালিটি: শুধু অনুমোদিত অ্যাক্সেস\n• ইন্টিগ্রিটি: ডেটা সঠিক, অপরিবর্তিত\n• অ্যাভেইলেবিলিটি: প্রয়োজনে অ্যাক্সেসযোগ্য\n\nহুমকি:\n• ম্যালওয়্যার: ভাইরাস, ওয়ার্ম, ট্রোজান, র‍্যানসমওয়্যার\n• ফিশিং: নকল যোগাযোগ\n• DoS: সার্ভিস অস্বীকার\n• MITM: ম্যান-ইন-দ্য-মিডল\n\nএনক্রিপশন:\n• সিমেট্রিক: একই কী (DES, AES)\n• অ্যাসিমেট্রিক: পাবলিক/প্রাইভেট কী (RSA)\n• হ্যাশ: ��কমুখী (MD5, SHA)\n\nঅথেনটিকেশন:\n• পাসওয়ার্ড: জ্ঞান\n• টোকেন: অধিকার\n• বায়োমেট্রিক: অনন্যতা\n\nফায়ারওয়াল: নিয়ম অনুযায়ী নেটওয়ার্ক ট্রাফিক ফিল্টার করে।\n\nVPN: নিরাপত দূরবর্তী অ্যাক্সেসের জন্য ভার্চুয়াল প্রাইভেট নেটওয়ার্ক।",
      code: "Symmetric: E(M, K) = C\nAsymmetric: E(M, Kpublic) = C",
      takeaways: [
        "CIA triad: Confidentiality, Integrity, Availability",
        "Encryption protects data confidentiality",
        "Multiple authentication methods exist",
        "Firewalls filter traffic based on rules"
      ],
      takeawaysBn: [
        "CIA ট্রায়াড: কনফিডেনশিয়ালিটি, ইন্টিগ্রিটি, অ্যাভেইলেবিলিটি",
        "এনক্রিপশন ডেটা কনফিডেনশিয়ালিটি সুরক্ষা করে",
        "একাধিক অথেনটিকেশন পদ্ধতি আছে",
        "ফায়ারওয়াল নিয়ম অনুযায়ী ট্রাফিক ফিল্টার করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module9 = m9