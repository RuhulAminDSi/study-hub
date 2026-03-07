# Electrical Circuits - Detailed Review Questions

---

## Question 1
Derive the equivalent resistance for resistors connected in series and parallel combinations.

**Answer:** 
Series Combination:
- Same current flows through all resistors
- Total voltage = sum of individual voltages
- R_eq = R₁ + R₂ + R₃ + ... + Rₙ

Parallel Combination:
- Same voltage across all resistors
- Total current = sum of branch currents
- 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ... + 1/Rₙ
- For two resistors: R_eq = (R₁ × R₂) / (R₁ + R₂)

---

## Question 2
State and explain Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL).

**Answer:**
KCL (Kirchhoff's Current Law):
- At any junction in a circuit, the algebraic sum of currents entering equals the sum leaving
- ΣI_in = ΣI_out
- Based on conservation of charge

KVL (Kirchhoff's Voltage Law):
- Around any closed loop in a circuit, the algebraic sum of voltage drops equals the sum of voltage rises
- ΣV = 0
- Based on conservation of energy

---

## Question 3
Explain Thevenin's Theorem and describe the procedure to find Thevenin equivalent circuit.

**Answer:** Thevenin's Theorem states that any linear bilateral network can be replaced by an equivalent circuit consisting of a voltage source Vth in series with resistance Rth.

Procedure:
1. Remove load resistor
2. Find open-circuit voltage (Vth) across load terminals
3. Find equivalent resistance (Rth) by:
   - Deactivate all independent sources
   - Short voltage sources, open current sources
   - Calculate resistance seen from open terminals
4. Draw equivalent circuit with Vth and Rth in series

---

## Question 4
Derive the resonant frequency formula for a series RLC circuit and explain its significance.

**Answer:** In series RLC resonance:
- XL = ωL (inductive reactance)
- XC = 1/ωC (capacitive reactance)
- At resonance: XL = XC
- ωL = 1/ωC
- ω² = 1/LC
- Resonant frequency: f_r = 1/(2π√LC)

Significance:
- At resonance, impedance is minimum (purely resistive)
- Current is maximum
- Power factor = 1
- Used in radio tuning, filters

---

## Question 5
Explain transient response in RC circuits during charging and discharging.

**Answer:**
Charging Phase:
- Capacitor voltage: Vc(t) = Vs(1 - e^(-t/RC))
- Time constant τ = RC
- After 5τ, capacitor is fully charged (99.3%)

Discharging Phase:
- Capacitor voltage: Vc(t) = V₀ × e^(-t/RC)
- Voltage decreases exponentially
- After 5τ, capacitor fully discharges

The RC time constant determines how fast the capacitor charges/discharges.

---

## Question 6
Define power factor and explain its importance in AC circuits.

**Answer:** Power Factor (pf) = cos(φ) = P/S = Real Power / Apparent Power
- φ is the phase angle between voltage and current

Importance:
1. Measures efficiency of power usage
2. Low pf means reactive power is high
3. Utility companies penalize low pf
4. pf = 1: All power is useful (ideal)
5. pf = 0: All power is reactive (worst case)

Correction: Use capacitors to compensate reactive power

---

## Question 7
Explain maximum power transfer theorem with derivation.

**Answer:** Maximum Power Transfer Theorem states that maximum power is delivered to load when load resistance equals Thevenin resistance (R_L = R_th).

Derivation:
- Power in load: P_L = I² × R_L
- Current: I = Vth / (R_th + R_L)
- P_L = (Vth² × R_L) / (R_th + R_L)²
- Differentiate with respect to R_L and set to zero
- Maximum occurs when R_L = R_th
- Maximum power: P_max = Vth² / (4R_th)

---

## Question 8
Differentiate between star and delta connections in three-phase systems.

**Answer:**
Star (Y) Connection:
- Line voltage = √3 × Phase voltage
- Line current = Phase current
- Used for distribution, lower voltage applications

Delta (Δ) Connection:
- Line voltage = Phase voltage
- Line current = √3 × Phase current
- Used for heavy loads, higher power applications

Power in both: P = √3 × V_L × I_L × cos(φ)

---

## Question 9
Explain superposition theorem and list its limitations.

**Answer:** Superposition Theorem:
- In linear circuits with multiple sources, the response (voltage or current) is the algebraic sum of responses caused by each source acting independently
- Steps:
  1. Deactivate all sources except one (short voltage sources, open current sources)
  2. Calculate the response
  3. Repeat for each source
  4. Sum all responses

Limitations:
1. Only applicable to linear circuits
2. Cannot be used for power calculations
3. Works only with one independent source at a time
4. Not applicable to non-linear elements

---

## Question 10
Describe Norton equivalent circuit and explain how to convert between Thevenin and Norton forms.

**Answer:** Norton's Theorem states any linear circuit can be replaced by current source In in parallel with resistance Rn.

Finding Norton Equivalent:
1. Find short-circuit current (In) between terminals
2. Find equivalent resistance Rn (same as Rth)

Conversion:
- In = Vth / Rth
- Rth = Rn
- Vth = In × Rth

Thevenin ↔ Norton:
- Thevenin: Voltage source in series with resistance
- Norton: Current source in parallel with resistance

---

*End of Electrical Circuits Detailed Questions*
