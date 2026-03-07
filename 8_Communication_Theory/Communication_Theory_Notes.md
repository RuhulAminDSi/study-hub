# Communication Theory - Study Notes

## Table of Contents
1. [Introduction to Communication](#1-introduction-to-communication)
2. [Signals and Systems](#2-signals-and-systems)
3. [Modulation](#3-modulation)
4. [Pulse Modulation](#4-pulse-modulation)
5. [Digital Communication](#5-digital-communication)
6. [Multiplexing](#6-multiplexing)
7. [Transmission Media](#7-transmission-media)

---

## 1. Introduction to Communication

### Communication System
- **Source** → **Transmitter** → **Channel** → **Receiver** → **Destination**

### Types of Communication
- **Simplex**: One direction only (TV, radio)
- **Half-Duplex**: Both directions, not simultaneously (walkie-talkie)
- **Full-Duplex**: Both directions simultaneously (phone)

### Bandwidth
- Range of frequencies
- **High bandwidth** = More information capacity
- **Voice**: 300-3400 Hz
- **Video**: 0-4.5 MHz
- **Data**: Varies

---

## 2. Signals and Systems

### Types of Signals

#### Analog vs Digital
- **Analog**: Continuous amplitude
- **Discrete**: Discrete time, continuous amplitude
- **Digital**: Discrete time and amplitude

#### Periodic vs Aperiodic
- **Periodic**: Repeats (sin, cos)
- **Aperiodic**: Does not repeat

### Signal Analysis

#### Fourier Series
- Periodic signals → sum of sinusoids
- **f(t) = a₀ + Σ(a_n cos nωt + b_n sin nωt)**

#### Fourier Transform
- Aperiodic signals → continuous spectrum
- **F(ω) = ∫ f(t) e^(-jωt) dt**

### Time Domain vs Frequency Domain
- **Time Domain**: Signal vs time
- **Frequency Domain**: Signal vs frequency

### Bandwidth
- **Continuous Spectrum**: Non-zero over range
- **Line Spectrum**: Discrete frequencies

---

## 3. Modulation

### What is Modulation?
- Process of combining information signal with carrier
- **Why?**:
  - Efficient transmission
  - Frequency allocation
  - Reduce noise

### Types of Modulation

#### Analog Modulation

**1. Amplitude Modulation (AM)**
- Carrier amplitude varies with message signal
- **Modulation Index (m)**: m = V_m / V_c
- **Sidebands**: f_c ± f_m
- **Bandwidth**: 2f_m

**2. Frequency Modulation (FM)**
- Carrier frequency varies with message
- **Deviation**: Δf
- **Modulation Index (β)**: β = Δf / f_m
- **Bandwidth**: 2(β + 1)f_m (Carson's rule)
- Better noise immunity than AM

**3. Phase Modulation (PM)**
- Carrier phase varies with message
- Similar to FM

#### Comparison

| Type | Noise Immunity | Bandwidth | Applications |
|------|----------------|-----------|--------------|
| AM | Poor | Low | Radio, TV |
| FM | Good | Higher | Radio |
| PM | Good | Higher | Data |

---

## 4. Pulse Modulation

### Analog Pulse Modulation

**1. PAM (Pulse Amplitude Modulation)**
- Pulse amplitude varies
- Message sampled at regular intervals

**2. PWM (Pulse Width Modulation)**
- Pulse width varies
- Duty cycle changes

**3. PPM (Pulse Position Modulation)**
- Pulse position varies
- Fixed width and amplitude

### Digital Pulse Modulation

**1. PCM (Pulse Code Modulation)**
- Analog → Sampling → Quantization → Encoding
- **Sampling Rate**: ≥ 2 × highest frequency (Nyquist)
- **Quantization Levels**: 2^n for n-bit

---

## 5. Digital Communication

### Advantages over Analog
- Better noise immunity
- Easier to process
- More efficient
- Error detection/correction possible

### Digital Modulation Techniques

**1. ASK (Amplitude Shift Keying)**
- Two amplitude levels for 0 and 1

**2. FSK (Frequency Shift Keying)**
- Two frequencies for 0 and 1
- **Bandwidth**: High

**3. PSK (Phase Shift Keying)**
- Two or more phases
- **BPSK**: 2 phases (0°, 180°)
- **QPSK**: 4 phases (45°, 135°, 225°, 315°)

### QAM (Quadrature Amplitude Modulation)
- Combines ASK and PSK
- Multiple amplitude and phase levels
- 16-QAM, 64-QAM, 256-QAM

---

## 6. Multiplexing

### What is Multiplexing?
- Combining multiple signals for transmission
- Shares common channel

### Types

**1. FDM (Frequency Division Multiplexing)**
- Each signal gets different frequency band
- Used in radio, TV
- Requires bandpass filters

**2. TDM (Time Division Multiplexing)**
- Each signal gets different time slot
- Requires synchronization
- **Synchronous TDM**: Fixed slots
- **Statistical TDM**: Dynamic allocation

**3. CDM (Code Division Multiplexing)**
- Each signal gets unique code
- All can transmit simultaneously
- Uses spread spectrum

---

## 7. Transmission Media

### Types

#### Guided Media (Wired)
| Type | Bandwidth | Distance | Applications |
|------|-----------|----------|--------------|
| **Twisted Pair** | Low-Medium | 100m | Telephone, LAN |
| **Coaxial** | High | 200m-1km | Cable TV |
| **Fiber Optic** | Very High | km | Backbone |

#### Unguided Media (Wireless)
| Type | Frequency | Range |
|------|-----------|-------|
| **Radio** | 3 Hz - 3 GHz | Long |
| **Microwave** | 1-300 GHz | Line of sight |
| **Infrared** | 300 GHz - 400 THz | Short |
| **Visible Light** | 400-790 THz | Short |

### Noise
- **Thermal**: Random electron motion
- **Intermodulation**: Multiple frequencies
- **Crosstalk**: Coupling between channels
- **Impulse**: Spikes, spikes

### Signal-to-Noise Ratio (SNR)
- **SNR = Signal Power / Noise Power**
- **dB = 10 log₁₀(SNR)**

---

## Quick Reference

| Concept | Key Point |
|---------|-----------|
| AM | Carrier amplitude varies |
| FM | Carrier frequency varies |
| PM | Carrier phase varies |
| PCM | Digital representation of analog |
| FSK | Frequency shift for 0/1 |
| PSK | Phase shift for 0/1 |
| TDM | Time slots |
| FDM | Frequency bands |
| Nyquist | f_s ≥ 2f_max |

---

*Last Updated: 2026*
*Subject: Communication Theory*
