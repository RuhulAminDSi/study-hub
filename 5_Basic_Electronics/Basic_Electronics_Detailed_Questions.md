# Basic Electronics - Detailed Review Questions

---

## Question 1
Explain the formation of PN junction and describe its I-V characteristics.

**Answer:** PN Junction Formation:
- P-type: Doped with trivalent atoms (Boron), holes are majority carriers
- N-type: Doped with pentavalent atoms (Phosphorus), electrons are majority carriers
- At junction, diffusion creates depletion region with built-in electric field
- Equilibrium when diffusion equals drift current

I-V Characteristics:
Forward Bias:
- P side connected to positive, N to negative
- Depletion region narrows
- Current flows when V > 0.7V (silicon)
- Current increases exponentially with voltage

Reverse Bias:
- P side connected to negative, N to positive
- Depletion region widens
- Only small reverse saturation current flows
- At breakdown voltage, Zener effect causes large current

---

## Question 2
Explain the working of a Zener diode as a voltage regulator.

**Answer:** Zener Diode:
- Specially designed to operate in reverse breakdown region
- Has well-defined Zener voltage (Vz)
- Maintains constant voltage when reverse biased

Voltage Regulator Circuit:
- Zener diode connected in reverse bias across load
- Series resistor (Rs) limits current
- Input voltage must exceed Zener voltage

Working:
- When input varies, Zener maintains constant Vz
- Excess voltage drops across series resistor
- Load voltage remains constant = Vz
- Current flows through Zener to maintain regulation

Example: Vz = 5V, Vin = 7-12V → Vout = 5V constant

---

## Question 3
Describe the三种工作区 of a BJT transistor with biasing conditions.

**Answer:** Bipolar Junction Transistor (BJT) has three operating regions:

1. Active Region (Amplifier):
   - Base-Emitter junction: Forward biased (VBE ≈ 0.7V)
   - Base-Collector junction: Reverse biased
   - Collector current: IC = β × IB
   - Used for amplification

2. Saturation Region (ON Switch):
   - Base-Emitter: Forward biased
   - Base-Collector: Forward biased
   - Maximum collector current flows
   - VCE ≈ 0.2V (saturation voltage)
   - Used as electronic switch (ON)

3. Cutoff Region (OFF Switch):
   - Base-Emitter: Reverse biased
   - Base-Collector: Reverse biased
   - Almost no collector current
   - VCE = VCC (supply voltage)
   - Used as electronic switch (OFF)

---

## Question 4
Design a common emitter amplifier and explain its voltage gain derivation.

**Answer:** Common Emitter Amplifier Circuit:
- Input at base, output from collector
- Emitter is common to both input and output
- Biasing: VBB through RB, VCC through RC
- Coupling capacitors at input/output for AC

Voltage Gain Derivation:
- AC input causes base current variation
- Collector current: ic = β × ib
- Output voltage: vo = -ic × RC (negative = 180° phase shift)
- Input voltage: vin = ib × rπ
- Voltage gain: Av = vo/vin = -(β × RC)/rπ
- Av ≈ -(RC/re) where re = 26mV/IE

Characteristics:
- High voltage gain (50-300)
- Phase inversion (180°)
- Medium input impedance
- Used in audio amplifiers

---

## Question 5
Explain the Barkhausen criterion for oscillations.

**Answer:** The Barkhausen Criterion specifies conditions for sustained oscillations:

Condition 1: Loop Gain = 1
- Amplifier gain × Feedback network gain = 1
- If > 1: oscillations grow without bound (unstable)
- If < 1: oscillations die out

Condition 2: Total Phase Shift = 360° (or 0°)
- Signal goes through amplifier and feedback network
- Returns to starting point in phase
- Any multiple of 360° works

Practical Implementation:
- RC/LC feedback network provides frequency-selective phase shift
- At oscillation frequency: phase shift = 180°
- Amplifier provides additional 180° phase shift
- Total = 360°

Example: In oscillator circuit, amplifier gain must compensate for losses in feedback network to achieve unity gain at oscillation frequency.

---

## Question 6
Differentiate between BJT and FET transistors.

**Answer:**
BJT (Bipolar Junction Transistor):
- Current-controlled device
- Current flows due to both electrons and holes (bipolar)
- Three regions: Emitter, Base, Collector
- Base current controls collector current
- Input impedance: Low (kΩ)
- Current gain: β (50-300)
- Applications: Amplifiers, switches

FET (Field Effect Transistor):
- Voltage-controlled device
- Current flows due to one type of carrier (unipolar)
- Three regions: Source, Gate, Drain
- Gate voltage controls channel current
- Input impedance: Very high (MΩ)
- Voltage gain: gm (transconductance)
- Types: JFET, MOSFET

Comparison:
Feature        | BJT      | FET
--------------|----------|-----------
Control       | Current  | Voltage
Input Imp.    | Low      | Very High
Speed         | Faster   | Slower
Noise         | Higher   | Lower
Biasing       | Complex  | Simple

---

## Question 7
Explain the operation of an operational amplifier as an integrator.

**Answer:** Integrator Circuit:
- Op-amp with capacitor in feedback path
- Resistor at input
- Output is integral of input

Derivation:
- Virtual ground: V(-) = V(+) = 0
- Input current: Iin = Vin/R
- Feedback current: If = -C × dVout/dt
- Since Iin = If: Vin/R = -C × dVout/dt
- dVout/dt = -(Vin)/(RC)
- Vout = -(1/RC) ∫ Vin dt

Characteristics:
- Output proportional to integral of input
- Used in analog computers, signal processing
- Time constant τ = RC determines integration rate
- Useful for waveform generation (ramp from square wave)

---

## Question 8
Explain the working of a bridge rectifier with capacitor filter.

**Answer:** Bridge Rectifier Circuit:
- 4 diodes arranged in bridge configuration
- AC input across two opposite corners
- DC output across other two corners

Working (Full-Wave Rectification):
Positive half-cycle:
- Diodes D1, D2 conduct
- Current flows through load (top to bottom)
- Negative half-cycle:
- Diodes D3, D4 conduct
- Current flows through load (same direction)
- Both half-cycles produce same output polarity

With Capacitor Filter:
- Capacitor connected across output
- Charges to peak voltage during peaks
- Discharges during voltage drops (maintains voltage)
- Ripple voltage depends on: Load current, capacitance
- Larger C → smaller ripple

Advantages over center-tapped:
- No center-tapped transformer needed
- Better transformer utilization
- Smaller size and cost

---

## Question 9
Describe different classes of amplifier operation.

**Answer:** Amplifier classes based on conduction angle:

Class A:
- Conduction angle: 360°
- Bias current always flows
- Single transistor conducts entire input cycle
- Efficiency: 25-50%
- Lowest distortion
- Used in audio applications

Class B:
- Conduction angle: 180°
- Uses two transistors (push-pull)
- Each transistor handles half cycle
- Higher efficiency: 50-78.5%
- Crossover distortion at zero-crossing

Class AB:
- Conduction angle: 180-360°
- Compromise between A and B
- Small bias current
- Efficiency: 50-70%
- Common in audio power amplifiers

Class C:
- Conduction angle: <180°
- Transistor biased beyond cutoff
- Output tuned circuit required
- High efficiency: 80-90%
- Used in RF oscillators, transmitters

---

## Question 10
Explain the working of a 555 timer IC in astable mode.

**Answer:** 555 Timer in Astable (Free-Running) Mode:
- Generates continuous square wave
- No external trigger needed
- Two resistors (RA, RB) and one capacitor (C) timing

Circuit Configuration:
- Pin 4 (Reset) and 8 (VCC) connected
- Pin 1: Ground
- Pin 2 (Trigger) connected to Pin 6 (Threshold)
- Pin 6 connected to capacitor and discharge (Pin 7)
- RA between VCC and Pin 7
- RB between Pin 7 and capacitor
- Output from Pin 3

Working:
1. Capacitor charges through RA + RB → output HIGH
2. When voltage reaches 2/3 VCC → internal comparator resets flip-flop → discharge transistor ON
3. Capacitor discharges through RB only → output LOW
4. When voltage reaches 1/3 VCC → internal comparator sets flip-flop → discharge transistor OFF
5. Cycle repeats

Output Frequency: f = 1.44 / ((RA + 2RB) × C)
Duty Cycle: (RA + RB) / (RA + 2RB) × 100%

---

*End of Basic Electronics Detailed Questions*
