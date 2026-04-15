import type { Module } from '../../types'

const m8: Module = {
  title: "8. Communication Theory",
  titleBn: "৮. যোগাযোগ তত্ত্ব",
  level: "Intermediate",
  lessons: [
    {
      id: "ct1",
      title: "Signals and Systems",
      titleBn: "সংকেত ও সিস্টেম",
      content: "Signal: Function conveying information.\n\nTypes:\n• Analog: Continuous amplitude\n• Digital: Discrete levels\n\nClassification:\n• Periodic: Repeats over time\n• Aperiodic: Non-repeating\n• Deterministic: Predictable\n• Random: Probabilistic\n\nSystems:\n• Linear: Superposition applies\n• Time-invariant: Same response over time\n• Causal: Output depends on past/present\n• Stable: Bounded input → bounded output\n\nFourier Series: Periodic signals as sum of sinusoids.\nFourier Transform: Aperiodic signals in frequency domain.",
      contentBn: "সংকেত: তথ্য বহনকারী ফাংশন।\n\nপ্রকার:\n• অ্যানালগ: ধারাবাহক প্রশস্ততা\n• ডিজিটাল: বিচ্ছিন্ন স্তর\n\nশ্রেণীবিভাগ:\n• পিরিওডিক: সময়ের মধ্যে পুনরাবৃত্ত\n• অ্যাপিরিওডিক: অ-পুনরাবৃত্ত\n• নির্ধারক: পূর্বাভাসযোগ্য\n• র‍্যান্ডম: সম্ভাবনামূলক\n\nসিস্টেম:\n• লিনিয়ার: সুপারপজিশন প্রযোজ্য\n• টাইম-ইনভেরিয়েন্ট: সময়ের মধ্যে একই প্রতিক্রিয়া\n• কজ্যুয়াল: আউটপুট অতীত/বর্তমানের উপর নির্ভর করে\n• স্টেবল: সীমাবদ্ধ ইনপুট → সীমাবদ্ধ আউটপুট\n\nফোরিয়ার সিরিজ: সাইনাসয়েডের যোগফল হিসেবে পিরিওডিক সংকেত।\nফোরিয়ার ট্রান্সফর্ম: ফ্রিকোয়েন্সি ডোমেইনে অ্যাপিরিওডিক সংকেত।",
      takeaways: [
        "Signals can be analog or digital",
        "Linear time-invariant (LTI) systems are foundational",
        "Fourier analysis converts time to frequency domain",
        "Systems can be classified by properties"
      ],
      takeawaysBn: [
        "সংকেত অ্যানালগ বা ডিজিটাল হতে পারে",
        "লিনিয়ার টাইম-ইনভেরিয়েন্ট (LTI) সিস্টেম মৌলিক",
        "ফোরিয়ার বিশ্লেষণ সময় থেকে ফ্রিকোয়েন্সি ডোমেইনে রূপান্তর করে",
        "সিস্টেম বৈশিষ্ট্য অনুযায়ী শ্রেণীবিভাগ করা যায়"
      ],
      level: "Intermediate"
    },
    {
      id: "ct2",
      title: "Modulation",
      titleBn: "মডুলেশন",
      content: "Modulation: Varying carrier signal to encode information.\n\nReasons:\n• Efficient transmission\n• Multiplexing\n• Antenna size\n• Reduce noise\n\nAnalog Modulation:\n• AM: Amplitude varies with signal\n• FM: Frequency varies with signal\n• PM: Phase varies with signal\n\nDigital Modulation:\n• ASK: Amplitude shift keying\n• FSK: Frequency shift keying\n• PSK: Phase shift keying\n• QAM: Combined amplitude and phase\n\nPulse Modulation:\n• PAM: Pulse amplitude\n• PWM: Pulse width\n• PCM: Pulse code",
      contentBn: "মডুলেশন: তথ্য এনকোড করতে ক্যারিয়ার সংকেত পরিবর্তন।\n\nকারণ:\n• দক্ষ স্থানান্তর\n• মাল্টিপ্লেক্সিং\n• অ্যান্টেনার আকার\n• শব্দ কমানো\n\nঅ্যানালগ মডুলেশন:\n• AM: প্রশস্ততা সংকেতের সাথে পরিবর্তন হয়\n• FM: ফ্রিকোয়েন্সি সংকেতের সাথে পরিবর্তন হয়\n• PM: ফেজ সংকেতের সাথে পরিবর্তন হয়\n\nডিজিটাল মডুলেশন:\n• ASK: অ্যামপ্লিটিউড শিফট কিইং\n• FSK: ফ্রিকোয়েন্সি শিফট কিইং\n• PSK: ফেজ শিফট কিইং\n• QAM: সমন্বিত অ্যামপ্লিটিউড ও ফেজ\n\nপালস মডুলেশন:\n• PAM: পালস অ্যামপ্লিটিউড\n• PWM: পালস প্রস্থ\n• PCM: পালস কোড",
      code: "AM: s(t) = [Ac + m(t)] × cos(ωct)\nFM: s(t) = Ac × cos(ωc + k×m(t))×t",
      takeaways: [
        "Modulation embeds info in carrier signal",
        "AM and FM are analog modulation methods",
        "PSK, FSK, QAM are digital methods",
        "Modulation enables efficient transmission"
      ],
      takeawaysBn: [
        "মডুলেশন ক্যারিয়ার সংকেতে তথ্য এম্বেড করে",
        "AM ও FM হলো অ্যানালগ মডুলেশন পদ্ধতি",
        "PSK, FSK, QAM হলো ডিজিটাল পদ্ধতি",
        "মডুলেশন দক্ষ স্থানান্তর সক্ষম করে"
      ],
      level: "Intermediate"
    }
  ]
}

export const module8 = m8