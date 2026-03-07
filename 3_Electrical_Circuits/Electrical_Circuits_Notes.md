# Electrical Circuits - Study Notes

## Table of Contents
1. [Basic Concepts](#1-basic-concepts)
2. [Circuit Elements](#2-circuit-elements)
3. [Network Theorems](#3-network-theorems)
4. [AC Circuits](#4-ac-circuits)
5. [Resonance](#5-resonance)
6. [Transient Response](#6-transient-response)

---

## 1. Basic Concepts

### Electric Charge
- **Coulomb (C)**: Unit of charge
- **Proton**: +1.6×10⁻¹⁹ C
- **Electron**: -1.6×10⁻¹⁹ C

### Current (I)
- Flow of charge
- **Formula**: I = Q/t
- **Unit**: Ampere (A)
- **Types**: DC (Direct), AC (Alternating)

### Voltage (V)
- Potential difference
- **Formula**: V = W/Q
- **Unit**: Volt (V)

### Resistance (R)
- Opposition to current flow
- **Formula**: R = V/I (Ohm's Law)
- **Unit**: Ohm (Ω)
- **Factors**: Material, length, cross-section, temperature

### Power (P)
- Rate of energy transfer
- **Formula**: P = VI = I²R = V²/R
- **Unit**: Watt (W)

---

## 2. Circuit Elements

### Passive Elements

#### Resistor
- Resists current flow
- Color code for resistance
- **Series**: R_total = R₁ + R₂ + ...
- **Parallel**: 1/R_total = 1/R₁ + 1/R₂ + ...

#### Capacitor
- Stores energy in electric field
- **Formula**: C = Q/V
- **Unit**: Farad (F)
- **Types**: Ceramic, Electrolytic, Film

#### Inductor
- Stores energy in magnetic field
- **Formula**: V = L(dI/dt)
- **Unit**: Henry (H)

### Active Elements
- **Voltage Source**: Provides constant voltage
- **Current Source**: Provides constant current

### Dependent Sources
- Voltage/current depends on another circuit variable
- **Types**:
  - Voltage-controlled voltage source (VCVS)
  - Current-controlled voltage source (CCVS)
  - Voltage-controlled current source (VCCS)
  - Current-controlled current source (CCCS)

---

## 3. Network Theorems

### Kirchhoff's Laws

#### KCL (Current Law)
- Total current entering = Total current leaving
- ΣI_in = ΣI_out

#### KVL (Voltage Law)
- Total voltage around loop = 0
- ΣV = 0

### Superposition Theorem
- For linear circuits
- Total response = Sum of responses from each source

### Thevenin's Theorem
- Any circuit can be replaced by:
  - **Vth** (Thevenin voltage): Open-circuit voltage
  - **Rth** (Thevenin resistance): Input resistance with sources zeroed

### Norton's Theorem
- Any circuit can be replaced by:
  - **In** (Norton current): Short-circuit current
  - **Rn** (Norton resistance): Same as Rth

### Maximum Power Transfer Theorem
- Maximum power when R_load = R_th
- **P_max = Vth² / (4R_th)**

### Millman's Theorem
- Simplifies parallel voltage sources

---

## 4. AC Circuits

### Alternating Current
- V(t) = V_m sin(ωt)
- I(t) = I_m sin(ωt)

### RMS Values
- **V_rms = V_m / √2**
- **I_rms = I_m / √2**

### Phasor Representation
- Complex numbers for AC analysis
- **Z = R + jX**
- **Impedance**: Opposition to AC

### RL Circuit
- Inductor opposes changes in current
- **Z = √(R² + X_L²)**
- **X_L = ωL**

### RC Circuit
- Capacitor opposes changes in voltage
- **Z = √(R² + X_C²)**
- **X_C = 1/(ωC)**

### RLC Circuit
- **Series RLC**:
  - **Z = √(R² + (X_L - X_C)²)**
- **Parallel RLC**:
  - Admittance: Y = 1/Z

### Power in AC Circuits
- **Real Power (P)**: V_rms × I_rms × cos(φ)
- **Reactive Power (Q)**: V_rms × I_rms × sin(φ)
- **Apparent Power (S)**: V_rms × I_rms
- **Power Factor (pf)**: cos(φ) = P/S

---

## 5. Resonance

### What is Resonance?
- Frequency where circuit impedance is purely resistive
- XL = XC

### Series Resonance
- Minimum impedance
- Maximum current
- Used in filters

**Resonant Frequency**:
**f_r = 1/(2π√(LC))**

### Parallel Resonance
- Maximum impedance
- Minimum current

### Quality Factor (Q)
- **Q = ω₀L/R = 1/(ω₀CR)**
- Measures sharpness of resonance
- High Q = Narrow bandwidth

### Bandwidth
- **BW = f_r / Q**
- Range of frequencies where circuit responds

---

## 6. Transient Response

### RC Transient
- **Charging**: V(t) = V_s(1 - e^(-t/RC))
- **Discharging**: V(t) = V_0 × e^(-t/RC)
- **Time Constant**: τ = RC

### RL Transient
- **Current buildup**: I(t) = (V_s/R)(1 - e^(-(R/L)t))
- **Time Constant**: τ = L/R

### RLC Transient
- **Underdamped**: Oscillatory decay
- **Critically damped**: Fastest without overshoot
- **Overdamped**: Slow decay without oscillation

---

## Quick Reference

| Formula | Meaning |
|---------|---------|
| V = IR | Ohm's Law |
| P = VI | Power |
| Z = V/I | Impedance |
| f_r = 1/(2π√LC) | Resonant frequency |
| τ = RC | Time constant (RC) |
| τ = L/R | Time constant (RL) |

---

*Last Updated: 2026*
*Subject: Electrical Circuits*
