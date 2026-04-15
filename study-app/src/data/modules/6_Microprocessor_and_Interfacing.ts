import type { Module } from '../../types'

const m6: Module = {
  title: "6. Microprocessor and Interfacing",
  titleBn: "৬. মাইক্রোপ্রসেসর ও ইন্টারফেসিং",
  level: "Intermediate",
  lessons: [
    {
      id: "mp1",
      title: "Microprocessor Basics",
      titleBn: "মাইক্রোপ্রসেসরের মৌলিক ধারণা",
      content: "Microprocessor: Integrated circuit containing CPU functions.\n\nArchitecture:\n• Von Neumann: Single memory for code and data\n• Harvard: Separate memories for code and data\n\n8086 Architecture:\n• 16-bit data bus, 20-bit address bus\n• Registers: AX, BX, CX, DX, SP, BP, SI, DI\n• Segments: CS, DS, SS, ES\n\nInstruction Cycle:\n1. Fetch instruction from memory\n2. Decode instruction\n3. Execute operation\n4. Store result\n\nAddressing Modes:\n• Immediate, Register, Direct, Indirect, Indexed",
      contentBn: "মাইক্রোপ্রসেসর: CPU ফাংশন সমন্বিত ইন্টিগ্রেটেড সার্কিট।\n\nআর্কিটেকচার:\n• ভন নয়ম্যান: কোড ও ডেটার জন্য একক মেমোরি\n• হার্ভার্ড: কোড ও ডেটার জন্য আলাদা মেমোরি\n\n8086 আর্কিটেকচার:\n• 16-বিট ডেটা বাস, 20-বিট অ্যাড্রেস বাস\n• রেজিস্টার: AX, BX, CX, DX, SP, BP, SI, DI\n• সেগমেন্ট: CS, DS, SS, ES\n\nনির্দেশনা চক্র:\n1. মেমোরি থেকে নির্দেশনা আনুন\n2. নির্দেশনা ডিকোড করুন\n3. অপারেশন বাস্তবায়ন করুন\n4. ফলাফল সংরক্ষণ করুন\n\nঅ্যাড্রেসিং মোড:\n• ইমিডিয়েট, রেজিস্টার, ডাইরেক্ট, ইনডাইরেক্ট, ইনডেক্সড",
      takeaways: [
        "Microprocessor is CPU on a chip",
        "8086 is 16-bit processor with segment architecture",
        "Instruction cycle: fetch-decode-execute-store",
        "Multiple addressing modes for data access"
      ],
      takeawaysBn: [
        "মাইক্রোপ্রসেসর হলো চিপে CPU",
        "8086 হলো সেগমেন্ট আর্কিটেকচার সহ 16-বিট প্রসেসর",
        "নির্দেশনা চক্র: fetch-decode-execute-store",
        "ডেটা অ্যাক্সেসের জন্য একাধিক অ্যাড্রেসিং মোড"
      ],
      level: "Intermediate"
    },
    {
      id: "mp2",
      title: "Interfacing and Peripherals",
      titleBn: "ইন্টারফেসিং ও পেরিফেরাল",
      content: "I/O Interfacing: Connecting CPU with external devices.\n\nMethods:\n• Programmed I/O: CPU polls device\n• Interrupt-driven: Device notifies CPU\n• DMA: Direct memory access without CPU\n\nPeripheral Interfaces:\n• Parallel: Multiple wires, fast\n• Serial: One wire, slower (USB, RS232)\n• Keyboard: Matrix scanning\n• Display: 7-segment, LCD, CRT\n\nCommunication Protocols:\n• UART: Async serial communication\n• SPI: Serial Peripheral Interface\n• I2C: Inter-Integrated Circuit\n• USB: Universal Serial Bus",
      contentBn: "I/O ইন্টারফেসিং: CPU কে বহিরাগত ডিভাইসের সাথে সংযোগ করা।\n\nপদ্ধতি:\n• প্রোগ্রামড I/O: CPU ডিভাইস পোল করে\n• ইন্টারাপ্ট-ড্রিভেন: ডিভাইস CPU কে অবহিত করে\n• DMA: CPU ছাড়া সরাসরি মেমোরি অ্যাক্সেস\n\nপেরিফেরাল ইন্টারফেস:\n• প্যারালেল: একাধিক তার, দ্রুত\n• সিরিয়াল: একটি তার, ধীর (USB, RS232)\n• কীবোর্ড: ম্যাট্রিক্স স্ক্যানিং\n• ডিসপ্লে: 7-সেগমেন্ট, LCD, CRT\n\nযোগাযোগ প্রোটোকল:\n• UART: অ্যাসিঙ্ক সিরিয়াল যোগাযোগ\n• SPI: সিরিয়াল পেরিফেরাল ইন্টারফেস\n• I2C: ইন্টার-ইন্টিগ্রেটেড সার্কিট\n• USB: ইউনিভার্সাল সিরিয়াল বাস",
      takeaways: [
        "I/O interfacing connects CPU to devices",
        "Three methods: programmed, interrupt, DMA",
        "Serial vs parallel for different speeds",
        "Communication protocols enable device talk"
      ],
      takeawaysBn: [
        "I/O ইন্টারফেসিং CPU কে ডিভাইসের সাথে সংযোগ করে",
        "তিন পদ্ধতি: প্রোগ্রামড, ইন্টারাপ্ট, DMA",
        "বিভিন্ন গতির জন্য সিরিয়াল বনাম প্যারালেল",
        "যোগাযোগ প্রোটোকল ডিভাইসের কথা বলতে সক্ষম করে"
      ],
      level: "Intermediate"
    }
  ]
}

export const module6 = m6