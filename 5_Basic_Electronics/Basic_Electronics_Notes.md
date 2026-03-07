# Basic Electronics - Study Notes

## Table of Contents
1. [Semiconductor Basics](#1-semiconductor-basics)
2. [Diodes](#2-diodes)
3. [Transistors](#3-transistors)
4. [Amplifiers](#4-amplifiers)
5. [Oscillators](#5-oscillators)
6. [Operational Amplifiers](#6-operational-amplifiers)

---

## 1. Semiconductor Basics

### Types of Materials
- **Conductor**: Low resistance (copper, gold)
- **Insulator**: High resistance (glass, rubber)
- **Semiconductor**: Between conductor and insulator

### Semiconductor Materials
- **Silicon (Si)**: Most common
- **Germanium (Ge)**: Used in older devices

### Energy Bands
- **Valence Band**: Electrons bound to atoms
- **Conduction Band**: Free electrons
- **Band Gap**: Energy gap between bands

### Intrinsic Semiconductor
- Pure semiconductor
- Equal electrons and holes
- **Silium**: ni = 1.5 × 10¹⁰ cm⁻³ at 300K

### Extrinsic Semiconductor

#### N-Type
- **Doping**: Pentavalent (Phosphorus, Arsenic)
- **Majority carriers**: Electrons
- **Minority carriers**: Holes

#### P-Type
- **Doping**: Trivalent (Boron, Gallium)
- **Majority carriers**: Holes
- **Minority carriers**: Electrons

---

## 2. Diodes

### What is a Diode?
- Two-terminal device
- Allows current in one direction
- **pn junction**

### I-V Characteristic
- **Forward Bias**: Current flows when V > 0.7V (Si)
- **Reverse Bias**: Very small reverse current
- **Breakdown**: Large reverse current at high voltage

### Types of Diodes

| Type | Application |
|------|-------------|
| **Rectifier Diode** | Power supply |
| **Zener Diode** | Voltage regulation |
| **LED** | Light emission |
| **Photodiode** | Light detection |
| **Schottky Diode** | Fast switching |
| **Varactor** | Voltage-controlled capacitor |

### Zener Diode
- Operates in breakdown region
- **Constant voltage** when reverse biased
- Used for **voltage regulation**

### Rectifier Circuits
- **Half-Wave**: One half of AC cycle
- **Full-Wave**: Both halves
  - Center-tapped transformer
  - Bridge rectifier

---

## 3. Transistors

### What is a Transistor?
- Three-terminal semiconductor device
- Can amplify and switch
- **BJT** and **FET**

### BJT (Bipolar Junction Transistor)
- **NPN** and **PNP** types
- Three regions: Emitter, Base, Collector

#### Regions
- **Emitter**: Heavily doped
- **Base**: Thin, lightly doped
- **Collector**: Moderately doped

#### Modes of Operation
| Mode | Biasing | Application |
|------|---------|--------------|
| Active | BE forward, BC reverse | Amplifier |
| Cutoff | BE reverse | OFF switch |
| Saturation | BE forward, BC forward | ON switch |

#### Current Relations
- **I_E = I_B + I_C**
- **I_C = β × I_B** (β = current gain)

### FET (Field Effect Transistor)
- Voltage-controlled
- **JFET** and **MOSFET**

#### MOSFET
- **N-Channel (NMOS)**: Enhancement mode
- **P-Channel (PMOS)**: Enhancement mode

---

## 4. Amplifiers

### What is an Amplifier?
- Increases signal amplitude
- Voltage, current, or power gain

### Amplifier Types

| Type | Description |
|------|-------------|
| **Voltage** | Increases voltage |
| **Current** | Increases current |
| **Power** | Increases power |
| **Common Emitter** | Voltage gain, phase shift |
| **Common Base** | Current gain |
| **Common Collector** | Voltage follower (impedance matching) |

### Gain
- **Voltage Gain (Av)**: V_out / V_in
- **Current Gain (Ai)**: I_out / I_in
- **Power Gain (Ap)**: Av × Ai
- **Decibels**: dB = 20 log₁₀(gain)

### Biasing
- Sets operating point (Q-point)
- Must be in active region for amplification

### Classes
- **Class A**: Conducts 360°
- **Class B**: Conducts 180°
- **Class AB**: 180° to 360°
- **Class C**: < 180° (oscillator)

---

## 5. Oscillators

### What is an Oscillator?
- Generates periodic waveform
- No input signal needed
- Uses **positive feedback**

### Types

#### Sine Wave Oscillators
- **RC Oscillator**: Low frequency
- **LC Oscillator**: Radio frequency
- **Crystal Oscillator**: Very stable

#### Conditions for Oscillation
1. **Barkhausen Criterion**:
   - Loop gain = 1
   - Phase shift = 360° (or 0°)

### Feedback Oscillator
```
Amplifier → Feedback Network → Amplifier
```

---

## 6. Operational Amplifiers (Op-Amp)

### What is Op-Amp?
- High-gain differential amplifier
- Very high input impedance
- Very low output impedance

### Terminals
- **Non-inverting (+) Input**
- **Inverting (-) Input**
- **Output**
- **Positive Supply (+Vcc)**
- **Negative Supply (-Vee)**

### Characteristics
- **Open-loop gain**: Very high (100,000+)
- **Input impedance**: Very high (MΩ)
- **Output impedance**: Low (Ω)
- **Bandwidth**: Product of gain and bandwidth

### Basic Configurations

#### Inverting Amplifier
- **V_out = -(R_f/R_in) × V_in**
- Phase inversion

#### Non-inverting Amplifier
- **V_out = (1 + R_f/R_in) × V_in**
- No phase inversion

#### Voltage Follower
- **V_out = V_in**
- High input impedance, low output impedance
- Buffer application

#### Summing Amplifier
- Adds multiple inputs
- **V_out = -(R_f/R₁)V₁ - (R_f/R₂)V₂ - ...**

#### Integrator
- Output proportional to integral of input
- **V_out = -(1/RC) ∫ V_in dt**

#### Differentiator
- Output proportional to derivative of input
- **V_out = -RC (dV_in/dt)**

---

## Quick Reference

| Component | Key Point |
|-----------|-----------|
| Diode | One-way current flow |
| Zener | Voltage regulation |
| BJT | Current-controlled |
| FET | Voltage-controlled |
| Op-Amp | High-gain differential amp |
| Inverting | Output = -gain × input |
| Non-inverting | Output = gain × input |

---

*Last Updated: 2026*
*Subject: Basic Electronics*
