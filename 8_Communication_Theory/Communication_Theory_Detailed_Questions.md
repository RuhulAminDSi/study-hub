# Communication Theory - Detailed Review Questions

---

## Question 1
Explain the process of amplitude modulation with mathematical derivation.

**Answer:** Amplitude Modulation (AM):

Process:
- Modulating signal m(t) combines with carrier c(t)
- Carrier: Ac cos(2πfct)
- Modulating: m(t) = Am sin(2πfmt)

Mathematical Expression:
- AM Signal: s(t) = [Ac + m(t)] cos(2πfct)
- s(t) = Ac cos(2πfct) + m(t) cos(2πfct)

Frequency Spectrum:
- Carrier: fc
- Upper sideband: fc + fm
- Lower sideband: fc - fm
- Bandwidth = 2fm

Modulation Index (m):
- m = Am/Ac (ratio of amplitudes)
- If m > 1: Overmodulation (distortion)
- If m < 1: Normal modulation
- If m = 1: 100% modulation

Power Distribution:
- Total power: Pt = Pc(1 + m²/2)
- Carrier power: Pc
- Sideband power: (m²/4)Pc each sideband
- Only sidebands carry information

---

## Question 2
Differentiate between FM and PM modulation techniques.

**Answer:** Frequency Modulation (FM):
- Carrier frequency varies with message signal
- Frequency deviation: Δf proportional to message amplitude
- Modulation index: β = Δf/fm
- Bandwidth: 2(β+1)fm (Carson's rule)
- Better noise immunity than AM
- Used in radio broadcasting

Phase Modulation (PM):
- Carrier phase varies with message signal
- Phase deviation proportional to message amplitude
- Similar to FM (FM is derivative of PM)
- Mathematically: s(t) = Ac cos(2πfct + kp m(t))
- Used in digital communications

Comparison:
Feature        | FM         | PM
--------------|------------|----------
Parameter     | Frequency  | Phase
Noise Immunity| Good       | Good
Bandwidth    | Higher     | Similar
Complexity   | Complex    | Complex
Applications | Radio     | Digital

---

## Question 3
Explain the Nyquist sampling theorem with practical implications.

**Answer:** Nyquist Sampling Theorem:

Statement:
- Sampling rate must be at least twice the highest frequency component
- fs ≥ 2fmax
- Or: fs > 2B (where B is bandwidth)

Derivation:
- Minimum sampling rate to avoid aliasing
- Spectrum of sampled signal replicates at multiples of fs
- Must not overlap to recover original

Aliasing:
- Occurs when fs < 2fmax
- Higher frequencies "fold" into lower
- Cannot recover original signal

Practical Implications:
- Audio CD: 44.1 kHz sampling (20 kHz audio)
- Telephone: 8 kHz (4 kHz voice)
- Video: 30-60 fps minimum
- Pre-filtering: Remove frequencies > fs/2

Anti-aliasing Filter:
- Low-pass filter before sampling
- Removes frequencies above Nyquist rate

---

## Question 4
Explain PCM (Pulse Code Modulation) with block diagram.

**Answer:** PCM Process (Analog to Digital):

1. Sampling:
   - Sample analog signal at regular intervals
   - Rate ≥ 2 × highest frequency (Nyquist)
   - Holds sample value (sample and hold)

2. Quantization:
   - Divide amplitude range into discrete levels
   - Number of levels = 2^n (n = bits)
   - Assign binary code to each level
   - Quantization error: ±½ LSB

3. Encoding:
   - Convert quantized values to binary
   - n bits per sample
   - Output: Serial digital bitstream

Example:
- Input: Audio signal (0-4 kHz)
- Sample rate: 8 kHz
- Quantization: 8 bits
- Bit rate: 8 × 8000 = 64 kbps

PCM Advantages:
- Noise immune (digital)
- Easy to process and store
- Multiplexing possible
- Encryption possible

---

## Question 5
Differentiate between FDM, TDM, and CDM multiplexing techniques.

**Answer:**
Frequency Division Multiplexing (FDM):
- Each channel gets unique frequency band
- Channels separated by guard bands
- All channels transmitted simultaneously
- Used in radio, TV broadcasting

Advantages: Simultaneous transmission
Disadvantages: Requires bandpass filters

Time Division Multiplexing (TDM):
- Each channel gets time slot
- Slots assigned cyclically
- All channels share same frequency
- Requires synchronization

Types:
- Synchronous TDM: Fixed slots
- Statistical TDM: Dynamic allocation

Advantages: Flexible
Disadvantages: Delay

Code Division Multiplexing (CDM):
- Each channel gets unique code
- All channels use same frequency
- Uses spread spectrum
- Used in cellular (CDMA)

Advantages: Privacy, soft handover
Disadvantages: Complex

---

## Question 6
Explain Shannon's channel capacity theorem with formula derivation.

**Answer:** Shannon's Theorem:

Maximum Data Rate (Channel Capacity):
C = B log2(1 + S/N) bits/second

Where:
- C = Channel capacity (bps)
- B = Bandwidth (Hz)
- S/N = Signal-to-Noise ratio (linear)

Example:
- Telephone: B = 3000 Hz, S/N = 30 dB (1000:1)
- C = 3000 × log2(1001) ≈ 30 kbps

Implications:
- Increasing bandwidth increases capacity
- S/N is critical
- Doubling bandwidth doesn't double capacity
- Capacity approaches infinity as S/N → infinity

For Noiseless Channel:
- S/N → ∞ (infinite)
- C = B × log2(∞) → ∞

For Noisy Channel:
- Minimum S/N for reliable communication
- Shannon limit: C = 0 when S/N = 1

---

## Question 7
Describe different digital modulation techniques with their applications.

**Answer:**
ASK (Amplitude Shift Keying):
- Two amplitudes: 0 and 1
- Simple but noise sensitive
- Used in fiber optics, remote controls

FSK (Frequency Shift Keying):
- Two frequencies: 0 and 1
- Better noise immunity
- Used in modems, radio telemetry

PSK (Phase Shift Keying):
- Two or more phases
- BPSK: 2 phases (0°, 180°)
- QPSK: 4 phases (45°, 135°, 225°, 315°)
- Used in cellular, satellite

QAM (Quadrature Amplitude Modulation):
- Combines ASK and PSK
- Multiple amplitude and phase levels
- 16-QAM: 16 different symbols
- Used in digital TV, cable

Comparison:
- Bandwidth efficiency: QAM > PSK > FSK > ASK
- Noise immunity: FSK > PSK > QAM > ASK

---

## Question 8
Explain the working of a superheterodyne receiver.

**Answer:** Superheterodyne Receiver:

Block Diagram:
Antenna → RF Amp → Mixer → IF Amp → Detector → Audio Amp → Speaker

Key Principle:
- Converts all received frequencies to fixed IF (Intermediate Frequency)
- IF = RF - LO (Local Oscillator)

Stages:
1. RF Stage:
   - Antenna receives signal
   - RF amplifier selects desired band

2. Mixing:
   - Input RF signal + Local Oscillator
   - Produces IF (difference frequency)
   - Example: fIF = fRF - fLO

3. IF Stage:
   - Fixed frequency amplification
   - Most gain and selectivity here
   - Standard AM: 455 kHz
   - Standard FM: 10.7 MHz

4. Detection:
   - Demodulates audio from IF

5. Audio Amplification:
   - Amplifies audio for speaker

Advantages:
- Stable performance
- High selectivity
- Image frequency rejection

---

## Question 9
Differentiate between guided and unguided transmission media.

**Answer:**
Guided Media (Wired):

1. Twisted Pair:
   - Two copper wires twisted
   - Categories: Cat5, Cat6, Cat7
   - Distance: 100m
   - Used: Telephone, Ethernet LAN
   - Shielded (STP) vs Unshielded (UTP)

2. Coaxial Cable:
   - Central conductor + shield
   - Better shielding than twisted pair
   - Used: Cable TV, broadband
   - Distance: 200m-1km

3. Fiber Optic:
   - Glass/plastic fibers
   - Light transmission
   - Types: Single-mode, Multi-mode
   - Distance: km without repeater
   - Used: Backbone networks

Unguided Media (Wireless):

1. Radio Waves:
   - Frequency: 3 Hz - 3 GHz
   - Omnidirectional
   - Used: Radio, WiFi, cellular

2. Microwave:
   - Frequency: 1-300 GHz
   - Line of sight required
   - Used: Point-to-point links

3. Infrared:
   - Frequency: 300 GHz - 400 THz
   - Short range, line of sight
   - Used: Remote controls

4. Satellite:
   - Microwave communication
   - Global coverage

---

## Question 10
Explain error detection and correction techniques.

**Answer:**
Error Detection:

1. Parity Check:
   - Single parity: Even/odd parity bit
   - Detects single bit errors

2. Checksum:
   - Sum of data blocks
   - Sent with data

3. CRC (Cyclic Redundancy Check):
   - Polynomial division
   - Most powerful
   - Detects burst errors

Error Correction:

1. Hamming Code:
   - Adds parity bits at specific positions
   - Can correct single-bit errors
   - Detects double-bit errors

2. Automatic Repeat reQuest (ARQ):
   - Sender transmits
   - Receiver detects error
   - Requests retransmission
   - Types: Stop-and-wait, Go-back-N, Selective repeat

3. Forward Error Correction (FEC):
   - Add redundant data
   - Receiver can correct
   - No retransmission needed
   - Used in satellite TV, streaming

---

*End of Communication Theory Detailed Questions*
