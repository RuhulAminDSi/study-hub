# Quick Review - 10 Questions Each Subject

---

## 1. Electrical Circuits

1. **What is Ohm's Law?**
   - V = IR (Voltage = Current × Resistance)

2. **What is the unit of resistance?**
   - Ohm (Ω)

3. **What is power? Give its formula.**
   - Rate of energy transfer. P = VI = I²R = V²/R

4. **State Kirchhoff's Current Law (KCL).**
   - Total current entering a junction equals total current leaving.

5. **State Kirchhoff's Voltage Law (KVL).**
   - Total voltage around a closed loop equals zero.

6. **What is Thevenin's Theorem?**
   - Any linear circuit can be replaced by a voltage source (Vth) in series with resistance (Rth).

7. **What happens at resonance in a series RLC circuit?**
   - Impedance becomes minimum and current becomes maximum (XL = XC).

8. **What is the resonant frequency formula?**
   - fr = 1/(2π√(LC))

9. **What is the time constant of an RC circuit?**
   - τ = RC

10. **When is maximum power transferred to a load?**
    - When load resistance equals Thevenin resistance (R_load = R_th)

---

## 2. Basic Electronics

1. **What is a semiconductor?**
   - A material with electrical conductivity between conductor and insulator.

2. **What is doping in semiconductors?**
   - Adding impurities (pentavalent or trivalent) to change electrical properties.

3. **What is a PN junction?**
   - The boundary between P-type and N-type semiconductor regions.

4. **What is the barrier potential for silicon diode?**
   - Approximately 0.7V

5. **What is the main use of a Zener diode?**
   - Voltage regulation (operates in breakdown region).

6. **What are the three regions of a BJT?**
   - Emitter, Base, Collector

7. **What is the difference between NPN and PNP transistors?**
   - NPN: electrons are majority carriers; PNP: holes are majority carriers.

8. **What is an operational amplifier (op-amp)?**
   - High-gain differential amplifier with high input impedance and low output impedance.

9. **What is the voltage gain of a voltage follower?**
   - 1 (unity gain)

10. **What is the Barkhausen criterion for oscillation?**
    - Loop gain = 1 and phase shift = 360° (or 0°)

---

## 3. Microprocessor and Interfacing

1. **What is a microprocessor?**
   - Central Processing Unit (CPU) fabricated on a single chip.

2. **How much memory can 8085 microprocessor address?**
   - 64 KB (16-bit address bus)

3. **What is the function of the accumulator?**
   - Main register for arithmetic and logical operations.

4. **What are the flags in 8085?**
   - Sign (S), Zero (Z), Auxiliary Carry (AC), Parity (P), Carry (CY)

5. **What is the difference between RISC and CISC?**
   - RISC: Reduced Instruction Set; CISC: Complex Instruction Set.

6. **What is an interrupt?**
   - Signal that pauses current program to handle urgent task.

7. **What is the priority order of 8085 interrupts?**
   - TRAP > RST 7.5 > RST 6.5 > RST 5.5 > INTR

8. **What is the function of DMA?**
   - Direct Memory Access - transfers data without CPU intervention.

9. **What is the difference between memory-mapped I/O and port-mapped I/O?**
   - Memory-mapped: I/O uses same address space as memory; Port-mapped: separate address space.

10. **What is the purpose of a stack?**
    - Stores return addresses and data during subroutine calls and interrupts.

---

## 4. Communication Theory

1. **What is modulation?**
   - Process of combining information signal with carrier wave for transmission.

2. **What is the Nyquist sampling theorem?**
   - Sampling rate must be at least twice the highest frequency (fs ≥ 2fmax).

3. **What is the advantage of FM over AM?**
   - Better noise immunity.

4. **What is PCM?**
   - Pulse Code Modulation - converts analog signal to digital through sampling, quantization, and encoding.

5. **What is the difference between FDM and TDM?**
   - FDM: signals share frequency bands; TDM: signals share time slots.

6. **What is QAM?**
   - Quadrature Amplitude Modulation - combines ASK and PSK.

7. **What is Shannon's capacity theorem?**
   - Channel capacity C = B log2(1 + S/N)

8. **What are the types of transmission media?**
   - Guided (twisted pair, coaxial, fiber optic) and unguided (radio, microwave, infrared).

9. **What causes multipath fading?**
   - Signal reaching receiver via multiple paths with different delays.

10. **What is the purpose of a repeater?**
    - Amplifies and regenerates signals to extend transmission distance.

---

## 5. Structured Programming Language (C)

1. **What is the difference between = and ==?**
   - = is assignment operator; == is comparison operator.

2. **What is a pointer?**
   - Variable that stores memory address of another variable.

3. **What is the difference between struct and union?**
   - Struct: all members have separate memory; Union: all members share same memory.

4. **What is recursion?**
   - Function calling itself.

5. **What is the difference between pass by value and pass by reference?**
   - Pass by value: copy of argument passed; Pass by reference: address passed.

6. **What is the purpose of malloc()?**
   - Allocates dynamic memory.

7. **What does #define do?**
   - Creates macro constants.

8. **What is the difference between while and do-while loop?**
   - While checks condition first; do-while executes at least once.

9. **What is a null character in strings?**
   - '\0' (ASCII value 0) marks end of string.

10. **What is the difference between break and continue?**
    - break exits loop/switch; continue skips current iteration.

---

*End of Quick Review - 50 Questions*
*Subjects: Electrical Circuits, Basic Electronics, Microprocessor and Interfacing, Communication Theory, Structured Programming Language*
